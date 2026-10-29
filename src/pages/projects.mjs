import { esc } from '../lib/util.mjs';

export const meta={
  path:'/projects/',
  title:'Bathroom Projects | Kensington Bathrooms',
  description:'Selected bathroom projects by the team behind Kensington Bathrooms, shown from before to finish. Our full portfolio can be brought along to your survey on request.',
  schemaType:'CollectionPage',
  noindex:true,
  breadcrumbs:[{name:'Home',path:'/'},{name:'Projects',path:'/projects/'}]
};

// Before | strip-out | after in one frame, split by two bars you drag across (compare slider).
// The two range inputs keep it usable by keyboard; site.js adds dragging anywhere on the photo.
function stages(project) {
  const id = `cmp-${project.id}`;
  const [before, strip, after] = project.stages;
  const [sa, sb] = project.split || [22, 48];
  const img = (s, cls, eager) => `<img class="compare__img ${cls}" src="${s.src}-1200.webp" srcset="${s.src}-640.webp 640w, ${s.src}-1200.webp 1200w" sizes="(max-width: 760px) 100vw, 46vw" alt="${esc(s.alt)}" width="1200" height="1600" loading="${eager ? 'eager' : 'lazy'}" decoding="async" draggable="false">`;
  const play = project.video ? `<a class="stages__play" href="${project.video.src}" data-play-video="${project.video.src}" data-poster="${project.video.poster || ''}"><span class="stages__play-icon" aria-hidden="true"></span><span>Watch the finished room</span></a>` : '';
  return `<div class="compare" data-compare style="--a:${sa}%;--b:${sb}%">
  <div class="compare__frame" data-compare-frame>
    ${img(after, 'compare__img--after', true)}${img(strip, 'compare__img--strip', true)}${img(before, 'compare__img--before', true)}
    <span class="compare__tag compare__tag--before" aria-hidden="true">${esc(before.label)}</span><span class="compare__tag compare__tag--strip" aria-hidden="true">${esc(strip.label)}</span><span class="compare__tag compare__tag--after" aria-hidden="true">${esc(after.label)}</span>
    <span class="compare__bar compare__bar--a" aria-hidden="true"><span class="compare__grip"></span></span><span class="compare__bar compare__bar--b" aria-hidden="true"><span class="compare__grip"></span></span>
    ${play}
  </div>
  <div class="compare__keys"><label for="${id}-a">Move the ${esc(before.label.toLowerCase())} / ${esc(strip.label.toLowerCase())} divider</label><input id="${id}-a" type="range" min="0" max="100" step="1" value="${sa}" data-compare-a><label for="${id}-b">Move the ${esc(strip.label.toLowerCase())} / ${esc(after.label.toLowerCase())} divider</label><input id="${id}-b" type="range" min="0" max="100" step="1" value="${sb}" data-compare-b></div>
  <p class="compare__hint">Drag the bars across the photo to compare ${esc(before.label.toLowerCase())}, ${esc(strip.label.toLowerCase())} and ${esc(after.label.toLowerCase())}.</p>
</div>`;
}

function projectBlock(project) {
  return `<article class="project-story">
  ${stages(project)}
  <div class="project-story__text">
    <h2>${esc(project.title)}</h2>
    <p>${esc(project.summary)}</p>
    <ul>${project.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
  </div>
</article>`;
}

export function render(cfg){
  const projects = cfg.projects || [];
  return `
<section class="page-hero page-hero--compact">
  <div class="page-hero__inner">
    <p class="eyebrow">Our work</p>
    <h1>Selected projects.</h1>
    <p class="page-hero__lede">From the room as we found it, through the work, to the finished bathroom. Drag the bars across each photo. Our full portfolio can be brought along to your survey on request.</p>
  </div>
</section>
<section class="content-band content-band--deep"><div class="section-shell project-stories">
${projects.map(projectBlock).join('\n')}
</div></section>
<section class="content-band content-band--ink"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">Beyond the photograph</p><h2>What makes a finished bathroom work.</h2></div><div class="content-copy"><p>A photograph shows the fittings and finish. When we discuss your own room, we also look at the layout, hot-water supply, drainage, ventilation, waterproofing and how the work can be carried out in your property.</p><p>At your survey we can talk through more of our projects, including rooms similar in size and layout to yours, and the decisions behind each one.</p><a class="arrow-link" href="/bathroom-renovation/">How we plan a complete renovation</a></div></div></div></section>`;
}
