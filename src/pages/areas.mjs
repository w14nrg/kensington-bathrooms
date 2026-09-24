export const meta = {
  path:'/areas/',
  title:'Areas We Serve | Kensington Bathrooms',
  description:'Explore the focused neighbourhoods where Kensington Bathrooms designs and installs bathrooms: Kensington, West Kensington, Holland Park, South Kensington and Chelsea.',
  schemaType:'CollectionPage',
  breadcrumbs:[{name:'Home',path:'/'},{name:'Areas',path:'/areas/'}]
};
const places = {
  'west-kensington': 'Period houses, conversions and mansion flats close to our local base.',
  'holland-park': 'Principal bathrooms and multi-room projects in period homes and flats.',
  'south-kensington': 'Portered buildings, shared entrances and older service routes.',
  'chelsea': 'Mews houses and mansion blocks where finish and buildability meet.'
};
export function render(cfg) { return `
<section class="page-hero page-hero--compact"><div class="page-hero__inner"><p class="eyebrow">Where we work</p><h1>A small group of neighbouring areas.</h1><p class="page-hero__lede">Kensington is the centre of our work. From our local base nearby, we also visit homes in West Kensington, Holland Park, South Kensington and Chelsea. Choose an area to see the property questions we would talk through there.</p></div></section>
<section class="content-band content-band--ink"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">A focused service area</p><h2>Close enough to know the buildings.</h2></div><div class="content-copy"><p>This is not a list of every London postcode. The area includes period terraces, mews houses, mansion blocks and converted flats, each with different access, services and rules. We begin by visiting the actual property, rather than claiming that every street needs the same bathroom.</p><p>On our homepage map, Kensington represents the main service area. The surrounding neighbourhoods have their own pages below, and our local base is shown separately.</p></div></div>
<nav class="area-lines area-lines--detailed" aria-label="Neighbouring areas">${cfg.areas.map(a=>`<a href="/areas/${a.slug}/"><span>${a.name}</span><small>${a.postcodes}</small><em>${places[a.slug]}</em><b aria-hidden="true">↗</b></a>`).join('')}</nav>
<div class="section-tail"><p>Planning a bathroom in Kensington itself?</p><a class="arrow-link" href="/">Start on our Kensington homepage</a></div>
</div></section>`; }
