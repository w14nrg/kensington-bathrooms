export const meta={
  path:'/projects/',
  title:'Bathroom Projects | Kensington Bathrooms',
  description:'Selected genuine bathroom work by the team behind Kensington Bathrooms, shown with truthful locations while the Kensington portfolio grows.',
  schemaType:'CollectionPage',
  noindex:true,
  breadcrumbs:[{name:'Home',path:'/'},{name:'Projects',path:'/projects/'}]
};

export function render(cfg){
  const works=cfg.images.selectedWork;
  return `
<section class="page-hero page-hero--projects">
  <div class="page-hero__inner">
    <div class="page-hero__projects-copy">
      <p class="eyebrow">Selected work</p>
      <h1>Completed bathroom work.</h1>
      <p class="page-hero__lede">A first look at finished rooms from the team behind Kensington Bathrooms. Each photograph carries its real location; these are examples of the work, not projects relabelled as Kensington homes.</p>
    </div>
    <div class="page-hero__project-images">
      ${works.map(w=>`<figure><img src="${w.src}" alt="${w.alt}" width="${w.width}" height="${w.height}"><figcaption>${w.caption}</figcaption></figure>`).join('')}
    </div>
  </div>
</section>
<section class="content-band content-band--ink"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">Beyond the photograph</p><h2>What makes a finished bathroom work.</h2></div><div class="content-copy"><p>A photograph shows the fittings and finish. When we discuss your own room, we also look at the layout, hot-water supply, drainage, ventilation, waterproofing and how the work can be carried out in your property.</p><p>Future project stories will include the real location and the decisions behind the finished room. We only describe a Kensington or Chelsea bathroom as such when that is where the work was done.</p><a class="arrow-link" href="/bathroom-renovation/">How we plan a complete renovation</a></div></div></div></section>`;
}
