export const meta = {
  path:'/areas/',
  title:'Areas We Serve | Kensington Bathrooms',
  description:'Explore the focused neighbourhoods where Kensington Bathrooms designs and installs bathrooms: Kensington, West Kensington, Holland Park, South Kensington and Chelsea.',
  schemaType:'CollectionPage',
  breadcrumbs:[{name:'Home',path:'/'},{name:'Areas',path:'/areas/'}]
};
const places = {
  'west-kensington': 'Period houses, conversions and mansion flats around West Kensington station.',
  'holland-park': 'Principal bathrooms and multi-room projects in period homes and flats.',
  'south-kensington': 'Portered buildings, shared entrances and older service routes.',
  'chelsea': 'Mews houses and mansion blocks where finish and buildability meet.'
};
export function render(cfg) { return `
<section class="page-hero page-hero--compact page-hero--areas"><div class="page-hero__inner"><p class="eyebrow">Where we work</p><h1>These are our neighbourhoods.</h1><p class="page-hero__lede">Our work spans Kensington, West Kensington, Holland Park, South Kensington and Chelsea. We visit homes throughout this connected area and plan each bathroom around the room and the building it sits within.</p></div></section>
<section class="content-band content-band--ink"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">A focused service area</p><h2>Different buildings, the same care.</h2></div><div class="content-copy"><p>Across these neighbourhoods we work in period terraces, mews houses, mansion blocks and converted flats. Access, services and building rules differ from home to home. We begin with a visit to the actual property, not assumptions about its postcode.</p><p>Choose an area below to see the practical questions we would discuss there. The separate “We're here” marker on the homepage shows where we're based.</p></div></div>
<nav class="area-lines area-lines--detailed" aria-label="Areas we serve"><a href="/"><span>Kensington</span><small>W8</small><em>Stucco houses, garden squares, mews and mansion blocks.</em><b aria-hidden="true">↗</b></a>${cfg.areas.map(a=>`<a href="/areas/${a.slug}/"><span>${a.name}</span><small>${a.postcodes}</small><em>${places[a.slug]}</em><b aria-hidden="true">↗</b></a>`).join('')}</nav>
</div></section>`; }
