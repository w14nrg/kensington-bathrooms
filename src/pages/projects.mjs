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
      <h1>Real bathrooms. Real locations.</h1>
      <p class="page-hero__lede">The Kensington Bathrooms brand is new. The trade experience is not. Existing work is shown with its real location, and Kensington projects will be added only as they are completed and documented.</p>
    </div>
    <div class="page-hero__project-images">
      ${works.map(w=>`<figure><img src="${w.src}" alt="${w.alt}" width="${w.width}" height="${w.height}"><figcaption>${w.caption}</figcaption></figure>`).join('')}
    </div>
  </div>
</section>
<section class="content-band content-band--white"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">What we document</p><h2>A finished room is only part of the story.</h2></div><div class="content-copy"><p>As the portfolio grows, project pages will record the real area, property type, brief, access and protection requirements, design decisions, installation challenges and finished result. Nothing will be assigned a Kensington, W8, SW7 or Chelsea location unless that is where the project actually took place.</p><p>This page remains outside search indexing until the Kensington Bathrooms portfolio contains enough properly documented work to stand on its own.</p></div></div></div></section>`;
}
