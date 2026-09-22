import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

// AGOS BAU — statisch-first (beste CWV, Local-SEO/Conversion). Hosting: statisch.

// lastmod aus dem letzten Git-Commit der Quelldatei — ehrlich statt Build-Datum.
// Braucht volle Git-Historie (Deploy: actions/checkout fetch-depth: 0).
function gitDate(file) {
  try {
    const out = execSync(`git log -1 --format=%cI -- "${file}"`, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .trim();
    return out || null;
  } catch {
    return null;
  }
}
function newest(...dates) {
  const ds = dates.filter(Boolean).map((d) => new Date(d).getTime());
  return ds.length ? new Date(Math.max(...ds)).toISOString() : null;
}
// URL → Quelldatei. Statische Seiten: src/pages/<slug>.astro.
// Stadtteilseiten kommen aus [stadt].astro + cities.ts → jüngeres Datum von beiden.
function lastmodFor(url) {
  const slug = new URL(url).pathname.replace(/^\/|\/$/g, '');
  const page = slug === '' ? 'src/pages/index.astro' : `src/pages/${slug}.astro`;
  if (existsSync(page)) return gitDate(page);
  return newest(gitDate('src/pages/[stadt].astro'), gitDate('src/data/cities.ts'));
}

export default defineConfig({
  site: 'https://agosbau.de',
  integrations: [
    sitemap({
      serialize(item) {
        const lm = lastmodFor(item.url);
        if (lm) item.lastmod = lm;
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
