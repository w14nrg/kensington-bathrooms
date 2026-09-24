export function areaMeta(slug, name, postcodes, description) {
  return {
    path: `/areas/${slug}/`,
    title: `Bathroom Renovation in ${name} | Kensington Bathrooms`,
    description,
    schemaType: 'WebPage',
    breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Areas', path: '/areas/' }, { name, path: `/areas/${slug}/` }]
  };
}

export function areaRender({ name, postcodes, kicker, headline, lede, angles, questions, protection, close }) {
  return `
<section class="page-hero page-hero--compact"><div class="page-hero__inner"><p class="eyebrow">${postcodes} · ${kicker}</p><h1>Bathroom renovation in ${name}.</h1><p class="page-hero__lede">${lede}</p></div></section>
<section class="content-band content-band--ink"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">The property comes first</p><h2>${headline}</h2></div><div class="content-copy">${angles.map(([h,p])=>`<h3>${h}</h3><p>${p}</p>`).join('')}<a class="arrow-link" href="/bathroom-renovation/">What a complete bathroom renovation includes</a></div></div></div></section>
<section class="content-band content-band--deep"><div class="section-shell"><p class="eyebrow">At the first visit</p><h2 class="section-heading">Questions worth asking before the design is fixed.</h2><div class="detail-grid detail-grid--compact">${questions.map(([h,p])=>`<article><h3>${h}</h3><p>${p}</p></article>`).join('')}</div></div></section>
<section class="content-band content-band--ink"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">Care for the property</p><h2>The route to the bathroom matters.</h2></div><div class="content-copy"><p>${protection}</p><a class="arrow-link" href="/our-approach/">How we protect your home</a></div></div></div></section>
<section class="area-close"><div class="section-shell"><p>${close}</p><a class="button button--light" href="/contact/">Talk through a bathroom in ${name}</a></div></section>`;
}
