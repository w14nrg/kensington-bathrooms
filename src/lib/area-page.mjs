export function areaMeta(slug, name, postcodes, description) {
  return {
    path: `/areas/${slug}/`,
    title: `Bathroom Renovation in ${name} | Kensington Bathrooms`,
    description,
    schemaType: 'WebPage',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas/' }, { name, path: `/areas/${slug}/` }]
  };
}

export function areaHero({ name, postcodes, kicker, lede }) {
  return `<section class="page-hero page-hero--compact"><div class="page-hero__inner"><p class="eyebrow">${postcodes} · ${kicker}</p><h1>Bathroom renovation in ${name}.</h1><p class="page-hero__lede">${lede}</p></div></section>`;
}

export function areaSplit({ eyebrow, title, paragraphs, link, dark = false }) {
  return `<section class="content-band content-band--${dark ? 'deep' : 'ink'}"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">${eyebrow}</p><h2>${title}</h2></div><div class="content-copy">${paragraphs.map(p => `<p>${p}</p>`).join('')}${link ? `<a class="arrow-link" href="${link.href}">${link.label}</a>` : ''}</div></div></div></section>`;
}

export function areaCards({ eyebrow, title, cards, dark = true }) {
  return `<section class="content-band content-band--${dark ? 'deep' : 'ink'}"><div class="section-shell"><p class="eyebrow">${eyebrow}</p><h2 class="section-heading">${title}</h2><div class="detail-grid detail-grid--compact">${cards.map(([heading, body]) => `<article><h3>${heading}</h3><p>${body}</p></article>`).join('')}</div></div></section>`;
}

export function areaClose(name, body) {
  return `<section class="area-close"><div class="section-shell"><p>${body}</p><a class="button button--light" href="/contact/">Talk through a bathroom in ${name}</a></div></section>`;
}
