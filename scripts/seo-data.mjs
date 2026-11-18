// SEO landing page content for Simhapuri Pest Control.
// Each entry becomes a static page at https://www.simhapuripestcontrolnellore.in/<slug>
// Edit text here, then redeploy. Remove any city you do not actually serve.

export const SITE = {
  url: 'https://www.simhapuripestcontrolnellore.in',
  name: 'Simhapuri Pest Control',
  phone: '+91 8885914421',
  phoneHref: 'tel:+918885914421',
  whatsapp: 'https://wa.me/918885914421',
  email: 'simhapuripestcontrol@gmail.com',
  street: 'Adithya Nagar 1st Street, Childrens Park Road',
  city: 'Nellore',
  region: 'Andhra Pradesh',
  postal: '524002',
  logo: '/spc-logo.jpg',
  image: '/hero-technician.png',
  sameAs: [
    'https://www.facebook.com/share/17E8BELuSw/',
    'https://www.instagram.com/simhapuri_pest_control_nellore',
    'https://youtube.com/@simhapuripestcontrol',
  ],
  // Google tag (GA4) for simhapuripestcontrol@gmail.com
  gtagId: 'GTM-TFX5R77L',
};

export const SERVICES = [
  { slug: 'termite-control-nellore', name: 'Termite Control', short: 'Pre & post-construction anti-termite treatment and piping' },
  { slug: 'cockroach-control-nellore', name: 'Cockroach Control', short: 'Odourless gel baiting for kitchens, homes and restaurants' },
  { slug: 'rodent-control-nellore', name: 'Rat & Rodent Control', short: 'Bait stations, trapping and entry-point sealing' },
  { slug: 'bed-bug-control-nellore', name: 'Bed Bug Control', short: 'Multi-visit treatment for mattresses, beds and furniture' },
  { slug: 'mosquito-control-nellore', name: 'Mosquito Control', short: 'Fogging, larval treatment and breeding-source control' },
  { slug: 'commercial-pest-control-amc', name: 'Commercial Pest Control & AMC', short: 'Annual contracts for hotels, hospitals, offices & warehouses' },
];

export const CITIES = [
  { slug: 'pest-control-nellore', name: 'Nellore' },
  { slug: 'pest-control-vijayawada', name: 'Vijayawada' },
  { slug: 'pest-control-guntur', name: 'Guntur' },
  { slug: 'pest-control-ongole', name: 'Ongole' },
  { slug: 'pest-control-tirupati', name: 'Tirupati' },
  { slug: 'pest-control-kavali', name: 'Kavali' },
  { slug: 'pest-control-gudur', name: 'Gudur' },
  { slug: 'pest-control-andhra-pradesh', name: 'Andhra Pradesh' },
];

const commonFaqs = (place) => [
  {
    q: `How much does pest control cost in ${place}?`,
    a: `The price depends on the pest, the size of the property and the treatment. A 1BHK or 2BHK general pest treatment is usually the most affordable; termite and bed bug treatments cost more because they need more chemical and more visits. Call +91 8885914421 for a free inspection and an exact quote with no hidden charges.`,
  },
  {
    q: 'Are the chemicals safe for children and pets?',
    a: 'We use only government-approved (CIB&RC registered) chemicals at the recommended dosage. Gel baits are odourless and placed out of reach. For spray treatments we tell you how long to keep children and pets out of the treated area, usually 2–3 hours.',
  },
  {
    q: 'Do I need to leave the house during treatment?',
    a: 'For cockroach gel and rodent baiting you do not need to leave. For spray, fogging and bed bug treatments we recommend staying out of the treated rooms for a few hours. Our technician will explain the precautions before starting.',
  },
  {
    q: 'Do you offer warranty or follow-up visits?',
    a: 'Yes. Termite treatments come with a service warranty and our AMC plans include scheduled follow-up visits. If pests come back within the service period, we re-treat.',
  },
];

export const PAGES = [
  // ---------------- CITY PAGES ----------------
  {
    slug: 'pest-control-nellore',
    type: 'city',
    place: 'Nellore',
    title: 'Pest Control in Nellore | Termite, Cockroach & Rodent Control – Simhapuri',
    description: 'Best pest control services in Nellore. ISO 9001:2015 certified team for termite, cockroach, bed bug, rodent & mosquito control. 10+ years, 3000+ customers. Call +91 8885914421.',
    h1: 'Pest Control Services in Nellore',
    lead: 'Nellore\'s trusted, ISO 9001:2015 certified pest control company — based in Adithya Nagar and serving every part of the city 24/7.',
    body: [
      'Simhapuri Pest Control has protected homes, apartments, shops and offices in Nellore for over 10 years. Nellore\'s hot, humid coastal climate and its closeness to the Penna river make it ideal for termites, cockroaches, mosquitoes and rodents all year round — and especially after the north-east monsoon. Our local technicians know the problems each type of building faces, from old independent houses in Stonehousepet to new apartment blocks on the bypass road.',
      'Every job begins with a free inspection. We identify the pest, find where it is breeding or entering, and recommend the right treatment — not a one-size-fits-all spray. We use government-approved chemicals, odourless gel baits and modern equipment, so treatments are effective and safe for families, children and pets.',
      'Because our office is in Nellore, we can usually reach you the same day. Call or WhatsApp us and a technician will visit at a time that suits you.',
    ],
    areasTitle: 'Areas we cover in Nellore',
    areas: ['Magunta Layout', 'Vedayapalem', 'Balaji Nagar', 'Haranathapuram', 'Dargamitta', 'Stonehousepet', 'Ramalingapuram', 'Kondayapalem', 'Mini Bypass Road', 'Adithya Nagar', 'Children\'s Park Road', 'Pogathota', 'Santhapet', 'Fathekhanpet', 'Navalakula Gardens', 'Ayyappa Gudi', 'Buja Buja Nellore', 'Kovur', 'Buchireddypalem', 'Muthukur', 'Krishnapatnam'],
    faqs: commonFaqs('Nellore'),
  },
  {
    slug: 'pest-control-vijayawada',
    type: 'city',
    place: 'Vijayawada',
    title: 'Pest Control in Vijayawada | Termite & Cockroach Control Services',
    description: 'Professional pest control in Vijayawada for homes, apartments & businesses. Termite, cockroach, bed bug, rodent & mosquito control with safe, approved chemicals. Free inspection: +91 8885914421.',
    h1: 'Pest Control Services in Vijayawada',
    lead: 'Safe, long-lasting pest control for homes, apartments, hotels and commercial spaces across Vijayawada.',
    body: [
      'Vijayawada sits on the banks of the Krishna river, surrounded by canals and the Buckingham canal network. That water, combined with high summer temperatures, makes the city one of the worst in Andhra Pradesh for mosquitoes, and the dense commercial areas around Governorpet, One Town and Benz Circle see heavy cockroach and rodent activity. Termites are a constant risk for wooden doors, frames and furniture in both old and new buildings.',
      'Simhapuri Pest Control brings the same certified process we use in Nellore to Vijayawada: a free inspection, correct identification of the pest, a written treatment plan and follow-up visits. We work with families in apartments as well as restaurants, hospitals, hostels and offices that need regular, documented pest management.',
      'Call or WhatsApp +91 8885914421 to book an inspection in Vijayawada. We will confirm the visit time and give you a clear quote before any work begins.',
    ],
    areasTitle: 'Areas we cover in Vijayawada',
    areas: ['Benz Circle', 'Patamata', 'Governorpet', 'Labbipet', 'Moghalrajpuram', 'Gunadala', 'Auto Nagar', 'Kanuru', 'Poranki', 'Penamaluru', 'Bhavanipuram', 'Gollapudi', 'Ajit Singh Nagar', 'Satyanarayanapuram', 'One Town', 'Machavaram', 'Ramavarappadu', 'Tadepalli', 'Mangalagiri'],
    faqs: commonFaqs('Vijayawada'),
  },
  {
    slug: 'pest-control-guntur',
    type: 'city',
    place: 'Guntur',
    title: 'Pest Control in Guntur | Termite, Cockroach & Rodent Control',
    description: 'Reliable pest control services in Guntur for homes, godowns & businesses. Termite, cockroach, rodent, bed bug & mosquito treatment. Free inspection – call +91 8885914421.',
    h1: 'Pest Control Services in Guntur',
    lead: 'Certified pest control for houses, apartments, chilli and grain godowns, shops and offices in Guntur.',
    body: [
      'Guntur is one of India\'s biggest trading centres for chilli, cotton and tobacco. Large storage godowns and markets attract rats, stored-grain insects and cockroaches, which then spread into nearby homes. Termites are also common in the region\'s black-cotton soil, making anti-termite treatment important for new construction.',
      'Simhapuri Pest Control offers residential treatments as well as commercial contracts for warehouses, cold storages, hospitals and schools in Guntur. Every treatment uses approved chemicals and is planned after a proper inspection, so you pay only for what your property really needs.',
    ],
    areasTitle: 'Areas we cover in Guntur',
    areas: ['Brodipet', 'Arundelpet', 'Lakshmipuram', 'Kothapet', 'Pattabhipuram', 'Chandramouli Nagar', 'Gorantla', 'Amaravathi Road', 'Nallapadu', 'Mirchi Yard area', 'Namburu', 'Tenali', 'Mangalagiri'],
    faqs: commonFaqs('Guntur'),
  },
  {
    slug: 'pest-control-ongole',
    type: 'city',
    place: 'Ongole',
    title: 'Pest Control in Ongole | Termite & Cockroach Control Services',
    description: 'Pest control services in Ongole and Prakasam district – termite, cockroach, rodent, bed bug & mosquito control with safe chemicals. Call +91 8885914421 for a free inspection.',
    h1: 'Pest Control Services in Ongole',
    lead: 'Professional pest treatments for homes and businesses in Ongole and across Prakasam district.',
    body: [
      'Ongole\'s dry heat and the coastal humidity from the Bay of Bengal create good conditions for termites, cockroaches and lizards. Many independent houses in the town have wooden doors and furniture that termites quietly damage for years before the problem is noticed.',
      'Our team travels from Nellore along NH16 to serve Ongole customers, carrying all equipment needed for termite drilling-and-injection, gel baiting and fogging. We schedule visits in advance so you get the same certified service and follow-up as our Nellore customers.',
    ],
    areasTitle: 'Areas we cover in and around Ongole',
    areas: ['Mangamuru Road', 'Kurnool Road', 'Bhagya Nagar', 'Santhapet', 'Gandhi Nagar', 'Lawyerpet', 'Trunk Road', 'Kothapatnam', 'Chirala', 'Kandukur', 'Singarayakonda'],
    faqs: commonFaqs('Ongole'),
  },
  {
    slug: 'pest-control-tirupati',
    type: 'city',
    place: 'Tirupati',
    title: 'Pest Control in Tirupati | Hotels, Homes & Commercial Pest Control',
    description: 'Pest control in Tirupati for homes, hotels, lodges, restaurants & hospitals. Cockroach, bed bug, rodent, termite & mosquito control. Free inspection – +91 8885914421.',
    h1: 'Pest Control Services in Tirupati',
    lead: 'Pest management for homes, lodges, hotels, restaurants and hospitals in the temple city.',
    body: [
      'Tirupati welcomes lakhs of pilgrims every week, which means a very large number of lodges, hotels, choultries and restaurants. These businesses face constant pressure from cockroaches, bed bugs and rodents, and a single bad review about pests can hurt bookings. Homes in the city also deal with termites and mosquitoes.',
      'Simhapuri Pest Control provides scheduled AMC services for hospitality businesses in Tirupati, with discreet treatments that do not disturb guests, plus one-time treatments for homes and apartments. All work is done with approved chemicals and documented for your records.',
    ],
    areasTitle: 'Areas we cover in Tirupati',
    areas: ['Tiruchanur', 'Alipiri', 'Bairagipatteda', 'Balaji Colony', 'KT Road', 'Renigunta', 'Korlagunta', 'MR Palli', 'Air Bypass Road', 'Srinivasapuram', 'Chandragiri', 'Srikalahasti'],
    faqs: commonFaqs('Tirupati'),
  },
  {
    slug: 'pest-control-kavali',
    type: 'city',
    place: 'Kavali',
    title: 'Pest Control in Kavali | Termite, Cockroach & Rat Control',
    description: 'Pest control services in Kavali, Nellore district – termite, cockroach, rat, bed bug and mosquito control. Local, certified technicians. Call +91 8885914421.',
    h1: 'Pest Control Services in Kavali',
    lead: 'Fast, affordable pest control for homes, shops and farms in Kavali town and nearby villages.',
    body: [
      'Kavali, in the north of Nellore district, has many independent houses, rice mills and shops. Rice mills and grain stores attract rats and stored-product insects, and the coastal humidity supports termites and cockroaches in homes.',
      'Because Kavali is close to our Nellore office, we can schedule visits quickly. We offer termite treatment for new and existing buildings, rodent control for mills and shops, and general pest control for homes.',
    ],
    areasTitle: 'Areas we cover around Kavali',
    areas: ['Kavali Town', 'Musunuru', 'Jaladanki', 'Bogole', 'Allur', 'Dagadarthi', 'Kondapuram', 'Udayagiri'],
    faqs: commonFaqs('Kavali'),
  },
  {
    slug: 'pest-control-gudur',
    type: 'city',
    place: 'Gudur',
    title: 'Pest Control in Gudur | Termite & Cockroach Control – Simhapuri',
    description: 'Pest control services in Gudur, Naidupeta, Venkatagiri and Sullurpeta – termite, cockroach, rodent, bed bug & mosquito control. Free inspection: +91 8885914421.',
    h1: 'Pest Control Services in Gudur',
    lead: 'Certified pest control for Gudur, Naidupeta, Venkatagiri, Sullurpeta and the southern Nellore district.',
    body: [
      'Gudur and the towns around it are growing fast, with new houses, industrial units near Naidupeta and Sri City, and the busy Sullurpeta region. New construction is the best time to install anti-termite protection, and factories and staff quarters need regular rodent and cockroach control.',
      'Simhapuri Pest Control serves residential customers and commercial sites in the area with the same certified process we use in Nellore: inspection, identification, a written treatment plan and follow-up.',
    ],
    areasTitle: 'Areas we cover around Gudur',
    areas: ['Gudur Town', 'Naidupeta', 'Venkatagiri', 'Sullurpeta', 'Vakadu', 'Kota', 'Chillakur', 'Tada'],
    faqs: commonFaqs('Gudur'),
  },
  {
    slug: 'pest-control-andhra-pradesh',
    type: 'city',
    place: 'Andhra Pradesh',
    title: 'Pest Control Services in Andhra Pradesh | Simhapuri Pest Control',
    description: 'ISO-certified pest control company in Andhra Pradesh serving Nellore, Vijayawada, Guntur, Ongole, Tirupati & more. Termite, cockroach, rodent, bed bug & AMC services. +91 8885914421.',
    h1: 'Pest Control Services Across Andhra Pradesh',
    lead: 'From our base in Nellore we serve homes, businesses and institutions in cities across Andhra Pradesh.',
    body: [
      'Simhapuri Pest Control is an ISO 9001:2015 certified pest management company headquartered in Nellore. Over 10 years we have served more than 3000 customers, and we now take residential and commercial work across coastal and southern Andhra Pradesh.',
      'Andhra Pradesh\'s tropical climate, long coastline and river deltas mean pests are active almost all year. Termites, cockroaches, mosquitoes and rodents are the most common problems in AP homes, while hotels, hospitals, restaurants and warehouses need regular, documented pest control to meet hygiene standards.',
      'Choose your city below to see local details, or call +91 8885914421 to book a free inspection anywhere in Andhra Pradesh.',
    ],
    areasTitle: 'Cities we serve in Andhra Pradesh',
    areas: [],
    showCityLinks: true,
    faqs: commonFaqs('Andhra Pradesh'),
  },

  // ---------------- SERVICE PAGES ----------------
  {
    slug: 'termite-control-nellore',
    type: 'service',
    service: 'Termite Control',
    title: 'Termite Control in Nellore & Vijayawada | Anti-Termite Treatment',
    description: 'Anti-termite treatment in Nellore, Vijayawada & across AP – pre-construction soil treatment, post-construction drill-fill-seal and anti-termite piping. Warranty included. Call +91 8885914421.',
    h1: 'Termite Control & Anti-Termite Treatment',
    lead: 'Protect your building, doors and furniture with pre-construction, post-construction and piping anti-termite treatments.',
    body: [
      'Subterranean termites live in the soil and enter buildings through tiny cracks in floors and walls. By the time you see mud tubes or hollow-sounding wood, they may have been feeding for months. Professional treatment creates a chemical barrier in the soil so termites cannot reach the building.',
    ],
    sections: [
      { h: 'Pre-construction anti-termite treatment', p: 'Before the foundation and flooring are laid, we treat the soil of the foundation trenches, plinth area and surroundings with approved termiticide as per IS 6313. This is the most effective and economical way to protect a new building for years.' },
      { h: 'Post-construction termite treatment (Drill-Fill-Seal)', p: 'For existing buildings, we drill small holes along the wall-floor junction and around wooden fixtures, inject termiticide into the soil below, and seal the holes neatly. Infested wood is treated directly.' },
      { h: 'Anti-termite piping system', p: 'A network of pipes is laid under the floor during construction. Whenever re-treatment is needed, chemical is pumped through the pipes — no drilling, no damage to tiles.' },
      { h: 'Signs you need termite control', p: 'Mud tubes on walls, hollow wooden doors or frames, small piles of wings near windows, bubbling paint, or wood dust near furniture.' },
    ],
    faqs: [
      { q: 'How long does termite treatment last?', a: 'A properly done post-construction treatment usually protects for several years; pre-construction treatment protects for much longer. We provide a written warranty period with every termite job.' },
      { q: 'Is termite treatment safe?', a: 'Yes. The chemical is injected into the soil and wall voids, not sprayed in living areas. There is little or no smell and you can continue living in the house.' },
      ...commonFaqs('Nellore').slice(0, 1),
    ],
  },
  {
    slug: 'cockroach-control-nellore',
    type: 'service',
    service: 'Cockroach Control',
    title: 'Cockroach Control in Nellore & Vijayawada | Odourless Gel Treatment',
    description: 'Get rid of cockroaches with odourless gel baiting and targeted spray. Kitchen, home, restaurant & hotel cockroach control in Nellore, Vijayawada & AP. Call +91 8885914421.',
    h1: 'Cockroach Control Services',
    lead: 'Odourless gel treatment that wipes out cockroach colonies at the source — no need to empty your kitchen.',
    body: [
      'German and American cockroaches hide in kitchen cabinets, drains, behind appliances and in electrical boxes. They multiply quickly and spread bacteria that cause food poisoning and allergies. Over-the-counter sprays only kill the cockroaches you see; the colony survives.',
    ],
    sections: [
      { h: 'Gel baiting', p: 'Tiny dots of professional gel bait are placed in cracks, hinges and hiding spots. Cockroaches eat the bait and carry it back to the colony, eliminating hidden insects too. The gel is odourless and you can use your kitchen right away.' },
      { h: 'Targeted spray for heavy infestations', p: 'Drains, sinks, ducts and outdoor areas are treated with residual spray to stop cockroaches coming in from outside.' },
      { h: 'Commercial kitchens and restaurants', p: 'Monthly or fortnightly schedules with service reports, ideal for FSSAI hygiene audits.' },
    ],
    faqs: [
      { q: 'How long does it take for cockroaches to disappear?', a: 'You will see dead cockroaches within 1–2 days and most of the colony is gone in 1–2 weeks. Heavy infestations may need a second visit.' },
      ...commonFaqs('Nellore').slice(0, 3),
    ],
  },
  {
    slug: 'rodent-control-nellore',
    type: 'service',
    service: 'Rat & Rodent Control',
    title: 'Rat & Rodent Control in Nellore & Vijayawada | Simhapuri Pest Control',
    description: 'Rat and mouse control for homes, shops, godowns, rice mills & hospitals. Bait stations, trapping & entry sealing in Nellore, Vijayawada, Guntur & AP. Call +91 8885914421.',
    h1: 'Rat & Rodent Control Services',
    lead: 'Get rid of rats and mice with safe bait stations, trapping and proofing of entry points.',
    body: [
      'Rats chew through wires, pipes, documents and stored grain, and spread diseases like leptospirosis. In godowns, rice mills and shops one rat problem can mean big losses.',
    ],
    sections: [
      { h: 'Inspection and proofing', p: 'We find burrows, runways and entry points, then advise or seal gaps so rodents cannot get back in.' },
      { h: 'Tamper-proof bait stations', p: 'Locked bait stations keep the rodenticide away from children, pets and food while rats feed on it.' },
      { h: 'Glue boards and traps', p: 'For kitchens, hospitals and places where bait is not suitable, we use non-toxic glue boards and traps.' },
    ],
    faqs: [
      { q: 'Will dead rats smell inside the house?', a: 'We place baits and traps to reduce this risk and check them on follow-up visits. For indoor areas we often prefer traps so carcasses can be removed.' },
      ...commonFaqs('Nellore').slice(0, 2),
    ],
  },
  {
    slug: 'bed-bug-control-nellore',
    type: 'service',
    service: 'Bed Bug Control',
    title: 'Bed Bug Control in Nellore & Vijayawada | Bed Bug Treatment',
    description: 'Complete bed bug treatment for homes, hostels, lodges & hotels in Nellore, Vijayawada, Tirupati & AP. Multi-visit treatment that kills eggs too. Call +91 8885914421.',
    h1: 'Bed Bug Control & Treatment',
    lead: 'A multi-visit treatment plan that removes bed bugs and their eggs from beds, mattresses and furniture.',
    body: [
      'Bed bugs hide in mattress seams, bed frames, sofas, curtains and wall cracks, coming out at night to feed. They spread quickly in hostels, lodges and homes through luggage and second-hand furniture. Eggs survive most home remedies, which is why bed bugs keep coming back.',
    ],
    sections: [
      { h: 'Detailed inspection', p: 'We check every bed, sofa and crack to map the infestation before treating.' },
      { h: 'Two-phase treatment', p: 'A first treatment kills active bugs; a second visit about 10–15 days later kills the bugs that hatch from surviving eggs.' },
      { h: 'Hotels, lodges and hostels', p: 'Room-by-room treatment schedules that keep your rooms available for guests.' },
    ],
    faqs: [
      { q: 'How many visits are needed for bed bugs?', a: 'Usually two visits, about 10–15 days apart. Severe infestations may need a third.' },
      ...commonFaqs('Nellore').slice(0, 3),
    ],
  },
  {
    slug: 'mosquito-control-nellore',
    type: 'service',
    service: 'Mosquito Control',
    title: 'Mosquito Control in Nellore & Vijayawada | Fogging Services',
    description: 'Mosquito fogging and larval control for apartments, gated communities, schools & offices in Nellore, Vijayawada & AP. Reduce dengue & malaria risk. Call +91 8885914421.',
    h1: 'Mosquito Control & Fogging Services',
    lead: 'Indoor and outdoor mosquito control to reduce the risk of dengue, malaria and chikungunya.',
    body: [
      'Coastal Andhra Pradesh sees mosquito peaks during and after the monsoon. Mosquitoes breed in stagnant water in sumps, overhead tanks, flower pots, construction sites and drains.',
    ],
    sections: [
      { h: 'Thermal and cold fogging', p: 'Fogging knocks down adult mosquitoes in gardens, parking areas, corridors and open spaces.' },
      { h: 'Larval control', p: 'Breeding sites are treated so new mosquitoes do not emerge — the most important step for long-term control.' },
      { h: 'Apartments and gated communities', p: 'Scheduled monthly or fortnightly programmes for residential associations, schools and offices.' },
    ],
    faqs: [
      { q: 'How often should mosquito fogging be done?', a: 'In the rainy season every 2–4 weeks along with larval treatment gives the best results.' },
      ...commonFaqs('Nellore').slice(0, 2),
    ],
  },
  {
    slug: 'commercial-pest-control-amc',
    type: 'service',
    service: 'Commercial Pest Control & AMC',
    title: 'Commercial Pest Control & AMC in Nellore, Vijayawada & AP',
    description: 'Annual maintenance contracts (AMC) for pest control in restaurants, hotels, hospitals, banks, schools, offices & warehouses in Nellore, Vijayawada & Andhra Pradesh. +91 8885914421.',
    h1: 'Commercial Pest Control & Annual Maintenance Contracts (AMC)',
    lead: 'Scheduled, documented pest management for businesses that cannot afford a pest problem.',
    body: [
      'Restaurants, hotels, hospitals and warehouses need more than a one-time spray. Our AMC plans give you regular inspections, preventive treatments, priority emergency visits and service reports for audits — at a fixed, transparent yearly cost.',
    ],
    sections: [
      { h: 'Industries we serve', p: 'Restaurants and cloud kitchens, hotels and banquet halls, banks, function and convention halls, warehouses and godowns, hospitals and clinics, schools and colleges, offices, retail stores and shopping malls.' },
      { h: 'What is included', p: 'Cockroach, rodent, ant, lizard and general insect control on a fixed schedule, plus termite and mosquito add-ons; service records after every visit; and priority call-outs.' },
      { h: 'Compliance-ready', p: 'Service reports and chemical details help you meet FSSAI, hospital and corporate hygiene audits.' },
    ],
    faqs: [
      { q: 'How often are AMC visits?', a: 'Usually monthly for food businesses and hospitals, and quarterly for offices and homes. We customise the schedule after inspection.' },
      ...commonFaqs('Nellore').slice(1, 3),
    ],
  },
];
