import { renderToString } from 'react-dom/server'
import App from './App.jsx'

// Used at build time by scripts/postbuild.mjs to prerender the homepage HTML for SEO.
export function render() {
  return renderToString(<App />)
}
