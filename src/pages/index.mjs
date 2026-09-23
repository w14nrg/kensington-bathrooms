import { esc } from '../lib/util.mjs';
import { consultationForm } from '../lib/layout.mjs';

export const meta = {
  path: '/',
  title: 'Bathroom Renovation in Kensington | Kensington Bathrooms',
  ogTitle: 'Kensington Bathrooms — bathroom renovation, design and installation',
  description: 'Bathroom renovation, design and installation in Kensington. Complete, carefully managed bathroom projects for homes across W8 and neighbouring Kensington areas.',
  schemaType: 'WebPage'
};

const areas = [
  ['West Kensington', 'W14', '/areas/west-kensington/'],
  ['Holland Park', 'W8 · W11', '/areas/holland-park/'],
  ['Notting Hill', 'W11', '/areas/notting-hill/'],
  ['South Kensington', 'SW7', '/areas/south-kensington/'],
  ['Chelsea', 'SW3 · SW10', '/areas/chelsea/']
];

export function render(cfg) {
  const hero = cfg.images.hero;
  const local = cfg.images.localKensington;
  return `
<section class="hero hero--editorial">
  <div class="hero__copy">
    <p class="eyebrow">Bathroom renovation · design · installation</p>
    <h1>Bathrooms designed for Kensington homes.</h1>
    <p class="hero__lede">Considered design, carefully managed installation and a finish worthy of the property around it.</p>
    <div class="hero__actions"><a class="button button--ink" href="/contact/">Arrange a home consultation</a><button class="text-button" type="button" data-open-drawer>Talk to a bathroom expert <span aria-hidden="true">↗</span></button></div>
    <div class="hero__trust"><span>Kensington</span><span>Design · Supply · Installation</span><span>Property protection</span></div>
  </div>
  <figure class="hero__image-frame">
    <img src="${esc(hero.src)}" alt="${esc(hero.alt)}" width="${hero.width}" height="${hero.height}" fetchpriority="high">
    <figcaption>${esc(hero.caption)}</figcaption>
  </figure>
</section>

<section class="intro-grid section-shell">
  <div><p class="eyebrow">The service</p><h2>A complete bathroom service, kept deliberately focused.</h2></div>
  <div class="intro-grid__copy"><p>We start with what is behind the finish: drainage, water, ventilation, floors, walls and access. Then we shape the layout, products and materials around a room that can actually be built well.</p><a class="arrow-link" href="/bathroom-renovation/">Explore complete bathroom renovation</a></div>
</section>

<section class="lux-services section-shell" aria-label="Bathroom service">
  <article><span>01</span><h3>Design</h3><p>Layout, clearances, storage, sanitaryware and finishes developed around the actual room rather than a catalogue plan.</p></article>
  <article><span>02</span><h3>Supply</h3><p>Specification and product coordination so dimensions, lead times and finishes work together before installation starts.</p></article>
  <article><span>03</span><h3>Installation</h3><p>Preparation, plumbing, waterproofing, tiling, electrical coordination, carpentry and finishing managed as one bathroom project.</p></article>
</section>

<section class="protection-showcase">
  <div class="protection-showcase__lead section-shell"><p class="eyebrow">The Kensington Bathrooms standard</p><h2>Your bathroom is our workspace. The rest of your home isn’t.</h2><p>High-value homes need more than dust sheets. We agree the route, protect the right surfaces, contain the working area and keep the property organised throughout the job.</p></div>
  <div class="protection-grid section-shell">
    <article><span>01</span><h3>Protected route</h3><p>Floors, stairs and landings from the entrance to the bathroom are protected for the surfaces actually present.</p></article>
    <article><span>02</span><h3>Dust controlled</h3><p>Zipped screens and contained work areas are used where the project calls for them. Dust is minimised, never falsely promised away.</p></article>
    <article class="protection-grid__feature"><span>03</span><h3>New project boots</h3><p>Every new bathroom project starts with a brand-new pair of clean work boots kept for use inside the property.</p></article>
    <article><span>04</span><h3>Clean every day</h3><p>The work area and access route are cleaned down at the end of each working day, with waste moved out along the protected route.</p></article>
  </div>
  <div class="section-shell protection-link"><a class="arrow-link" href="/our-approach/">Read the complete property-protection standard</a></div>
</section>

<section class="areas-preview section-shell">
  <div class="areas-preview__head"><p class="eyebrow">Where we work</p><h2>Kensington first. A small area by design.</h2><p>Our core market is Kensington, with selected projects across the neighbouring areas below.</p></div>
  <div class="area-lines">${areas.map(([name,post,path]) => `<a href="${path}"><span>${name}</span><small>${post}</small><b aria-hidden="true">↗</b></a>`).join('')}</div>
</section>

<section class="lux-faq section-shell">
  <div class="lux-faq__intro"><p class="eyebrow">Questions</p><h2>Planning a bathroom in Kensington?</h2></div>
  <div class="lux-faq__list">
    <details open><summary>Do you manage the whole bathroom renovation?</summary><p>Yes. A project can cover design development, specification, supply, strip-out, plumbing, waterproofing, tiling, electrical coordination, carpentry, heating, installation and finishing, with the scope agreed before work starts.</p></details>
    <details><summary>Do you work in mansion blocks and managed buildings?</summary><p>Yes. Porter, lift, access, working-hour and managing-agent requirements are considered as part of the project planning where they apply.</p></details>
    <details><summary>How do you protect the rest of the property?</summary><p>We plan the route from the entrance to the bathroom, protect the surfaces present, contain dust where appropriate, control waste movement and clean down at the end of each working day.</p></details>
    <details><summary>Can you help with layout and product choices?</summary><p>Yes. Layout, sanitaryware, brassware, furniture, tile or stone, heating and other finishes can be developed around the room and its services.</p></details>
    <details><summary>Which areas do you cover?</summary><p>Our core area is Kensington, together with West Kensington, Holland Park, Notting Hill, South Kensington and Chelsea.</p></details>
  </div>
</section>

<section class="process-ribbon">
  <div class="section-shell"><p class="eyebrow">From first visit to final clean</p><div class="process-ribbon__grid"><div><strong>01</strong><span>Home consultation</span></div><div><strong>02</strong><span>Design & specification</span></div><div><strong>03</strong><span>Preparation & protection</span></div><div><strong>04</strong><span>Managed installation</span></div><div><strong>05</strong><span>Completion & handover</span></div></div></div>
</section>

<section class="consultation-split section-shell">
  <div class="consultation-split__copy"><p class="eyebrow">Start with the room</p><h2>Tell us what you’re planning.</h2><p>We’ll start with the property, the bathroom and the finish you want. A proper quotation follows a conversation and, where appropriate, a home consultation.</p><button class="text-button" type="button" data-open-drawer>Prefer to talk first? Speak to a bathroom expert <span aria-hidden="true">↗</span></button></div>
  <div class="consultation-split__form">${consultationForm(cfg, 'home')}</div>
</section>`;
}
