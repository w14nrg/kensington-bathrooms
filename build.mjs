// Zero-dependency static build. Usage: node build.mjs
import { readFile, writeFile, mkdir, rm, cp } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { page } from './src/lib/layout.mjs';

const OUT = 'dist';
const cfg = JSON.parse(await readFile('src/config/site.json', 'utf8'));

// Pages in the current build. Add a module here when a page is approved to be built.
const PAGES = [
  './src/pages/index.mjs',
  './src/pages/bathroom-renovation.mjs',
  './src/pages/our-approach.mjs',
  './src/pages/about.mjs',
  './src/pages/areas.mjs',
  './src/pages/areas/west-kensington.mjs',
  './src/pages/areas/holland-park.mjs',
  './src/pages/areas/notting-hill.mjs',
  './src/pages/areas/south-kensington.mjs',
  './src/pages/areas/chelsea.mjs',
  './src/pages/projects.mjs',
  './src/pages/contact.mjs',
  './src/pages/privacy.mjs',
  './src/pages/cookies.mjs',
  './src/pages/terms.mjs',
  './src/pages/404.mjs'
];

const minifyCss = (css) =>
  css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, ' ').replace(/\s*([{}:;,>])\s*/g, '$1').replace(/;}/g, '}').trim();

const css = minifyCss(await readFile('src/styles/site.css', 'utf8'));

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });
await cp('public', OUT, { recursive: true });
await mkdir(join(OUT, 'js'), { recursive: true });
await cp('src/scripts/site.js', join(OUT, 'js/site.js'));

const built = [];
for (const modPath of PAGES) {
  const mod = await import(modPath);
  const html = page(cfg, mod.meta, { css }, mod.render(cfg));
  const file = mod.meta.path.endsWith('/') ? join(OUT, mod.meta.path, 'index.html') : join(OUT, mod.meta.path);
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
  built.push(mod.meta);
  console.log('built', mod.meta.path);
}

// robots.txt: blocks everything until config.site.indexable is true.
const robots = cfg.site.indexable
  ? `User-agent: *\nAllow: /\n\nSitemap: ${cfg.site.url}/sitemap.xml\n`
  : `# Staging: not for indexing. Set site.indexable to true at launch.\nUser-agent: *\nDisallow: /\n`;
await writeFile(join(OUT, 'robots.txt'), robots);

const today = new Date().toISOString().slice(0, 10);
const urls = built
  .filter((m) => !m.noindex && !m.excludeFromSitemap)
  .map((m) => `  <url><loc>${cfg.site.url}${m.path}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n');
await writeFile(
  join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log(`done: ${built.length} pages, css ${(css.length / 1024).toFixed(1)} KB, indexable=${cfg.site.indexable}`);
