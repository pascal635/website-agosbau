import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// AGOS BAU — statisch-first (beste CWV, Local-SEO/Conversion). Hosting: statisch.
export default defineConfig({
  site: 'https://agosbau.de',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
