import { defineConfig } from 'astro/config';

// Statische Seite. Kein Tracking, keine Cookies.
// Sobald die Domain feststeht, hier eintragen.
export default defineConfig({
  site: 'https://ezl-website.workers.dev',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
