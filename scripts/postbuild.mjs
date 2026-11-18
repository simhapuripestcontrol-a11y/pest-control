// Runs after `vite build`:
//  1. Prerenders the React homepage into dist/index.html (so Google sees real content)
//  2. Generates static SEO landing pages (city + service pages)
//  3. Writes sitemap.xml, robots.txt and 404.html
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';
import { SITE, SERVICES, CITIES, PAGES } from './seo-data.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const today = new Date().toISOString().slice(0, 10);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- 1. Prerender homepage ----------
async function prerenderHome() {
  const ssrOut = path.join(root, 'dist-ssr');
  try {
    await build({
      root,
      logLevel: 'warn',
      build: { ssr: 'src/entry-server.jsx', outDir: ssrOut, emptyOutDir: true, rollupOptions: { output: { format: 'esm' } } },
    });
    const entry = fs.readdirSync(ssrOut).find((f) => /^entry-server\.(m?js)$/.test(f));
    const { render } = await import(pathToFileURL(path.join(ssrOut, entry)).href);
    const appHtml = render();
    const indexPath = path.join(dist, 'index.html');
    const html = fs.readFileSync(indexPath, 'utf8').replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
    fs.writeFileSync(indexPath, html);
    console.log(`✓ prerendered homepage (${appHtml.length} chars)`);
  } catch (err) {
    console.warn('⚠ homepage prerender skipped:', err.message);
  } finally {
    fs.rmSync(ssrOut, { recursive: true, force: true });
  }
}

// ---------- 2. Landing pages ----------
const gtag = `<script async src="https://www.googletagmanager.com/gtm.js?id=${SITE.gtagId}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());</script>`;

const businessRef = { '@id': `${SITE.url}/#business` };

function layout({ slug, title, description, h1, lead, content, schema }) {
  const url = `${SITE.url}/${slug}`;
  return `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
${gtag}
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="geo.region" content="IN-AP">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE.url}${SITE.image}">
<meta property="og:locale" content="en_IN">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/jpeg" href="/spc-logo.jpg">
<link rel="stylesheet" href="/seo.css">
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
<header class="top"><div class="wrap bar">
  <a href="/" class="logo"><img src="/spc-logo.jpg" alt="Simhapuri Pest Control logo" width="120" height="56"></a>
  <nav><a href="/">Home</a><a href="/pest-control-andhra-pradesh">Service Areas</a><a href="/commercial-pest-control-amc">AMC</a><a href="/#contact">Contact</a></nav>
  <a class="btn" href="${SITE.phoneHref}">Call ${SITE.phone}</a>
</div></header>
<section class="hero"><div class="wrap">
  <p class="crumb"><a href="/">Home</a> › ${esc(h1)}</p>
  <h1>${esc(h1)}</h1>
  <p class="lead">${esc(lead)}</p>
  <div class="ctas"><a class="btn big" href="${SITE.phoneHref}">📞 Call ${SITE.phone}</a><a class="btn big wa" href="${SITE.whatsapp}" rel="noopener">WhatsApp Us</a></div>
  <ul class="badges"><li>ISO 9001:2015 Certified</li><li>10+ Years Experience</li><li>3000+ Happy Customers</li><li>Govt. Approved Chemicals</li><li>24/7 Support</li></ul>
</div></section>
<main class="wrap">${content}</main>
<section class="cta"><div class="wrap">
  <h2>Book a free pest inspection</h2>
  <p>Call or WhatsApp us — we will confirm a visit time and give you a clear quote before any work starts.</p>
  <div class="ctas"><a class="btn big" href="${SITE.phoneHref}">📞 ${SITE.phone}</a><a class="btn big wa" href="${SITE.whatsapp}" rel="noopener">WhatsApp</a></div>
</div></section>
<footer><div class="wrap cols">
  <div><strong>${SITE.name}</strong><p>${SITE.street},<br>${SITE.city}, ${SITE.region} ${SITE.postal}</p><p><a href="${SITE.phoneHref}">${SITE.phone}</a><br><a href="mailto:${SITE.email}">${SITE.email}</a></p></div>
  <div><strong>Services</strong>${SERVICES.map((s) => `<a href="/${s.slug}">${s.name}</a>`).join('')}</div>
  <div><strong>Service Areas</strong>${CITIES.map((c) => `<a href="/${c.slug}">Pest Control ${c.name}</a>`).join('')}</div>
</div><p class="copy">© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</p></footer>
<a class="float" href="${SITE.whatsapp}" aria-label="Chat on WhatsApp">💬</a>
</body>
</html>`;
}

function servicesGrid(place) {
  return `<section><h2>Our pest control services${place ? ` in ${esc(place)}` : ''}</h2><div class="grid">${SERVICES.map(
    (s) => `<a class="card" href="/${s.slug}"><h3>${s.name}${place ? ` in ${esc(place)}` : ''}</h3><p>${s.short}</p><span>Learn more →</span></a>`
  ).join('')}</div></section>`;
}

const process = `<section><h2>Our 5-step pest control process</h2><ol class="steps">
<li><strong>Inspection</strong> – a free site visit to find the pest, its source and entry points.</li>
<li><strong>Identification</strong> – we identify the exact species so the treatment works.</li>
<li><strong>Treatment plan</strong> – a clear plan and quote tailored to your property.</li>
<li><strong>Execution</strong> – trained technicians apply government-approved chemicals safely.</li>
<li><strong>Follow-up</strong> – post-treatment checks and prevention tips for long-term protection.</li></ol></section>`;

const faqHtml = (faqs) => `<section><h2>Frequently asked questions</h2>${faqs.map((f) => `<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}</section>`;

function pageSchema(p) {
  const url = `${SITE.url}/${p.slug}`;
  const graph = [
    {
      '@type': 'Service',
      name: p.type === 'city' ? `Pest Control Services in ${p.place}` : p.service,
      serviceType: p.type === 'city' ? 'Pest Control' : p.service,
      url,
      provider: businessRef,
      areaServed: p.type === 'city'
        ? { '@type': p.place === 'Andhra Pradesh' ? 'State' : 'City', name: p.place }
        : CITIES.map((c) => ({ '@type': c.name === 'Andhra Pradesh' ? 'State' : 'City', name: c.name })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.url}/` },
        { '@type': 'ListItem', position: 2, name: p.h1, item: url },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
  return { '@context': 'https://schema.org', '@graph': graph };
}

function renderPage(p) {
  let content = `<section class="intro">${p.body.map((t) => `<p>${esc(t)}</p>`).join('')}</section>`;
  if (p.type === 'city') {
    content += servicesGrid(p.place === 'Andhra Pradesh' ? '' : p.place);
    if (p.showCityLinks) {
      content += `<section><h2>${esc(p.areasTitle)}</h2><div class="grid">${CITIES.filter((c) => c.slug !== p.slug)
        .map((c) => `<a class="card" href="/${c.slug}"><h3>Pest Control in ${c.name}</h3><span>View details →</span></a>`)
        .join('')}</div></section>`;
    } else {
      content += `<section><h2>${esc(p.areasTitle)}</h2><ul class="areas">${p.areas.map((a) => `<li>${esc(a)}</li>`).join('')}</ul></section>`;
    }
  } else {
    content += p.sections.map((s) => `<section><h2>${esc(s.h)}</h2><p>${esc(s.p)}</p></section>`).join('');
    content += `<section><h2>${esc(p.service)} near you</h2><p>We provide ${esc(p.service.toLowerCase())} across Andhra Pradesh:</p><ul class="areas">${CITIES.filter((c) => c.name !== 'Andhra Pradesh')
      .map((c) => `<li><a href="/${c.slug}">${esc(p.service)} in ${c.name}</a></li>`)
      .join('')}</ul></section>`;
    content += `<section><h2>Other services</h2><div class="grid">${SERVICES.filter((s) => s.slug !== p.slug)
      .map((s) => `<a class="card" href="/${s.slug}"><h3>${s.name}</h3><p>${s.short}</p></a>`)
      .join('')}</div></section>`;
  }
  content += process + faqHtml(p.faqs);
  return layout({ ...p, content, schema: pageSchema(p) });
}

function writePages() {
  for (const p of PAGES) {
    const dir = path.join(dist, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), renderPage(p));
  }
  console.log(`✓ generated ${PAGES.length} landing pages`);
}

// ---------- 3. sitemap / robots / 404 ----------
function writeSitemapRobots404() {
  const urls = [
    { loc: `${SITE.url}/`, priority: '1.0' },
    ...PAGES.map((p) => ({ loc: `${SITE.url}/${p.slug}`, priority: p.type === 'city' ? '0.9' : '0.8' })),
  ];
  fs.writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
      .map((u) => `  <url><loc>${u.loc}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${u.priority}</priority></url>`)
      .join('\n')}\n</urlset>\n`
  );
  fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
  fs.writeFileSync(
    path.join(dist, '404.html'),
    layout({
      slug: '404',
      title: 'Page not found | Simhapuri Pest Control',
      description: 'The page you are looking for does not exist.',
      h1: 'Page not found',
      lead: 'Sorry, this page does not exist. Try one of our services or service areas below.',
      content: servicesGrid(''),
      schema: { '@context': 'https://schema.org', '@type': 'WebPage', name: 'Page not found' },
    }).replace('<meta name="robots" content="index, follow, max-image-preview:large">', '<meta name="robots" content="noindex">').replace(/<link rel="canonical"[^>]*>\n/, '')
  );
  console.log(`✓ sitemap.xml (${urls.length} URLs), robots.txt, 404.html`);
}

await prerenderHome();
writePages();
writeSitemapRobots404();
