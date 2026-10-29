export const meta={
  path:'/projects/',
  title:'Bathroom Projects | Kensington Bathrooms',
  description:'Selected bathroom projects by the team behind Kensington Bathrooms. Our full portfolio can be brought along to your survey on request.',
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
      <p class="eyebrow">Our work</p>
      <h1>Selected projects.</h1>
      <p class="page-hero__lede">A few finished rooms from the team behind Kensington Bathrooms. Our full portfolio can be brought along to your survey on request.</p>
    </div>
    <div class="page-hero__project-images">
      ${works.map(w=>`<figure><img src="${w.src}" alt="${w.alt}" width="${w.width}" height="${w.height}"><figcaption>${w.caption}</figcaption></figure>`).join('')}
    </div>
  </div>
</section>
<section class="content-band content-band--deep"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">Beyond the photograph</p><h2>What makes a finished bathroom work.</h2></div><div class="content-copy"><p>A photograph shows the fittings and finish. When we discuss your own room, we also look at the layout, hot-water supply, drainage, ventilation, waterproofing and how the work can be carried out in your property.</p><p>At your survey we can talk through more of our projects, including rooms similar in size and layout to yours, and the decisions behind each one.</p><a class="arrow-link" href="/bathroom-renovation/">How we plan a complete renovation</a></div></div></div></section>`;
}
