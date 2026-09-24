export const meta = {
  path: '/bathroom-renovation/',
  title: 'Complete Bathroom Renovation | Kensington Bathrooms',
  description: 'Bathroom design, specification, supply and managed installation. How a first home visit turns your ideas into a buildable bathroom plan.',
  schemaType: 'Service',
  breadcrumbs: [{ name: 'Home', path: '/' }, { name: 'Bathroom renovation', path: '/bathroom-renovation/' }]
};

export function render(cfg) {
  const work = cfg.images.selectedWork[0];
  return `
<section class="page-hero page-hero--photo">
  <div class="page-hero__inner page-hero__inner--split">
    <div class="page-hero__copy">
      <p class="eyebrow">Complete bathroom renovation</p>
      <h1>A bathroom shaped around your home.</h1>
      <p class="page-hero__lede">Tell us how you want to use the room. Nicholas visits, talks through what you have in mind and looks at what the property can support before a design becomes a specification.</p>
      <a class="button button--light" href="/contact/">Arrange a home consultation</a>
    </div>
    <figure class="page-hero__media"><img src="${work.src}" alt="${work.alt}" width="${work.width}" height="${work.height}"><figcaption>${work.caption}</figcaption></figure>
  </div>
</section>
<section class="content-band content-band--ink"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">The first visit</p><h2>Can we have the bathroom we want?</h2></div><div class="content-copy"><p>That is the right question to start with. Show Nicholas the existing room and talk him through what would make it better: a larger shower, a bath that works for the family, more storage, easier access or simply a more considered finish. You can bring photographs or no plan at all.</p><p>The conversation moves from the look of the bathroom to how it could actually work. We consider door swings, clearances, the position of the bath, shower, basin and WC, and what changing those positions would mean for the water and waste routes. A survey can point towards an answer; concealed conditions may still need checking once the existing room is opened up.</p></div></div></div></section>
<section class="content-band content-band--deep"><div class="section-shell"><p class="eyebrow">Questions we work through</p><h2 class="section-heading">The details behind the design.</h2><div class="detail-grid">
  <article><span>01 / Water</span><h3>Will the shower work properly?</h3><p>We look at the existing water supply and how hot water is produced. A boiler, cylinder or shared system may affect which shower and fittings make sense. Pressure alone is not the whole answer: flow and what happens when more than one outlet is used matter too. We establish what needs testing before recommending a specification.</p></article>
  <article><span>02 / Layout</span><h3>Can we move the fixtures?</h3><p>A new position for the WC or shower can change the waste route and the floor build-up. We consider the distance and route to the soil stack, the structure under the floor, available falls and the space needed to use each fitting comfortably. We do not promise a layout solely from a photograph.</p></article>
  <article><span>03 / Building</span><h3>Do we need permission?</h3><p>In a flat, the lease or building rules may require consent for alterations even when the bathroom is inside your home. A listed property or work affecting drainage, structure, ventilation or electrics can raise further questions. We identify the likely checks early and agree who will obtain any required approval before the programme is set.</p></article>
  <article><span>04 / Fabric</span><h3>What is behind the finishes?</h3><p>Existing tiles can conceal damaged plaster, unsuitable boards or previous repairs. Floors and walls need preparation suited to the finish, and wet areas need a waterproofing plan before the tiles are chosen as a final surface. We explain what is visible on survey and what can only be confirmed after strip-out.</p></article>
</div></div></section>
<section class="content-band content-band--ink"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">Design and specification</p><h2>Choose for this room, not a showroom display.</h2></div><div class="content-copy"><p>Tile size changes the way a small room reads and can affect cuts, niches, edges and the finished floor height. We talk through colour, texture, grout and maintenance as well as what suits the walls and floor. A walk-in shower, freestanding bath or detailed brassware can look beautiful, but the room still has to drain, ventilate and remain practical to use.</p><p>We develop the layout and product choices together: sanitaryware, brassware, furniture, lighting, heating, screens and storage. Before ordering, dimensions and connections are checked against the actual room. The aim is a finish you want to live with and an installation that supports it.</p><a class="arrow-link" href="/our-approach/">How we plan and protect the home</a></div></div></div></section>
<section class="content-band content-band--deep"><div class="section-shell"><p class="eyebrow">What the project can include</p><h2 class="section-heading">One programme from strip-out to handover.</h2><div class="detail-grid detail-grid--compact">
  <article><h3>Main and family bathrooms</h3><p>Complete refurbishment, including the layout, services, finishes and everyday storage a frequently used room needs.</p></article>
  <article><h3>Shower rooms and en-suites</h3><p>Shower specification, waterproofing, drainage and ventilation considered together, especially when space or hot-water supply is limited.</p></article>
  <article><h3>Cloakrooms and guest WCs</h3><p>Compact rooms where clearances, door positions, waste routes and proportion matter as much as the finish.</p></article>
  <article><h3>Managed installation</h3><p>Preparation, plumbing, waterproofing, electrical coordination, tiling, carpentry and finishing sequenced as one project, with the agreed scope reviewed before work begins.</p></article>
</div><div class="section-tail"><p>Every property is different. The first visit is where the right questions begin, not where unknown conditions are waved away.</p><a class="button button--light" href="/contact/">Discuss your bathroom</a></div></div></section>`;
}
