export const meta={
  path:'/guides/',
  title:'Bathroom Renovation Guides | Kensington Bathrooms',
  description:'Practical bathroom renovation guides for Kensington homes, mansion blocks and period properties.',
  schemaType:'CollectionPage',
  breadcrumbs:[{name:'Home',path:'/'},{name:'Guides',path:'/guides/'}]
};
const guides=[
  ['/guides/renovating-a-bathroom-in-kensington/','Renovating a Bathroom in a Kensington Home: What to Check','A practical checklist for the room, the building, access, drainage and hot water before design decisions are fixed.'],
  ['/guides/mansion-block-bathroom-renovation/','Mansion Block Bathroom Renovation: What to Arrange Before Work Starts','Questions for porters, managing agents, lifts, working hours, shared services and communal-area protection.'],
  ['/guides/period-and-listed-home-bathrooms/','Bathrooms in Period and Listed Homes: Practical Checks Before You Start','General guidance on older floors, drainage, ventilation and when planning or listed-building questions need checking.']
];
export function render(){return `<section class="page-hero page-hero--compact"><div class="page-hero__inner"><p class="eyebrow">Guides</p><h1>Practical answers before the bathroom design is fixed.</h1><p class="page-hero__lede">These guides are written around the questions that come up in Kensington homes before products are ordered or a programme is agreed.</p></div></section><section class="content-band content-band--ink"><div class="section-shell"><div class="guide-index">${guides.map(([href,title,desc])=>`<article><h2><a href="${href}">${title}</a></h2><p>${desc}</p><a class="arrow-link" href="${href}">Read guide</a></article>`).join('')}</div></div></section>`;}
