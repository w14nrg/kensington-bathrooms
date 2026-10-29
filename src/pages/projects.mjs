import { esc } from '../lib/util.mjs';

export const meta={
  path:'/projects/',
  title:'Bathroom Projects | Kensington Bathrooms',
  description:'Selected bathroom projects by the team behind Kensington Bathrooms, shown from before to strip-out to finish. Our full portfolio can be brought along to your survey on request.',
  schemaType:'CollectionPage',
  noindex:true,
  breadcrumbs:[{name:'Home',path:'/'},{name:'Projects',path:'/projects/'}]
};

// Before → strip-out → after, switched with a three-stop slider. Works without JavaScript (radio inputs);
// site.js adds swiping on the photo.
function stages(project) {
  const name = `stage-${project.id}`;
  const last = project.stages.length - 1;
  const radios = project.stages.map((s, i) => `<input class="stages__radio" type="radio" name="${name}" id="${name}-${i}" value="${i}"${i === 0 ? ' checked' : ''}>`).join('');
  const imgs = project.stages.map((s, i) => `<img class="stages__img" src="${s.src}-1200.webp" srcset="${s.src}-640.webp 640w, ${s.src}-1200.webp 1200w" sizes="(max-width: 760px) 100vw, 46vw" alt="${esc(s.alt)}" width="1200" height="1600" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async" draggable="false">`).join('');
  const stops = project.stages.map((s, i) => `<label class="stages__stop" for="${name}-${i}"><span class="stages__dot" aria-hidden="true"></span><span class="stages__label">${esc(s.label)}</span></label>`).join('');
  return `<div class="stages" data-stages data-last="${last}">
  ${radios}
  <div class="stages__frame" data-stages-frame>${imgs}${project.video ? `<a class="stages__play" href="${project.video.src}" data-play-video="${project.video.src}" data-poster="${project.video.poster || ''}"><span class="stages__play-icon" aria-hidden="true"></span><span>Watch the finished room</span></a>` : ''}</div>
  <div class="stages__track" role="group" aria-label="${esc(project.title)}: choose a stage"><span class="stages__line" aria-hidden="true"><span class="stages__fill"></span></span>${stops}</div>
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
    <p class="page-hero__lede">From the room as we found it, through the strip-out, to the finished bathroom. Slide through each stage. Our full portfolio can be brought along to your survey on request.</p>
  </div>
</section>
<section class="content-band content-band--deep"><div class="section-shell project-stories">
${projects.map(projectBlock).join('\n')}
</div></section>
<section class="content-band content-band--ink"><div class="section-shell"><div class="content-grid"><div><p class="eyebrow">Beyond the photograph</p><h2>What makes a finished bathroom work.</h2></div><div class="content-copy"><p>A photograph shows the fittings and finish. When we discuss your own room, we also look at the layout, hot-water supply, drainage, ventilation, waterproofing and how the work can be carried out in your property.</p><p>At your survey we can talk through more of our projects, including rooms similar in size and layout to yours, and the decisions behind each one.</p><a class="arrow-link" href="/bathroom-renovation/">How we plan a complete renovation</a></div></div></div></section>`;
}
