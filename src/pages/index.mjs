import { esc } from '../lib/util.mjs';
import { consultationForm } from '../lib/layout.mjs';

export const meta = {
  path: '/',
  title: 'Bathroom Renovation in Kensington | Kensington Bathrooms',
  ogTitle: 'Kensington Bathrooms — bathroom renovation, design and installation',
  description: 'Premium bathroom renovation, design and installation in Kensington from a genuinely local West Kensington W14 business. Complete projects with exceptional home protection.',
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
    <p class="eyebrow">Kensington W8 · based in West Kensington W14</p>
    <h1>Bathrooms made for Kensington homes.</h1>
    <p class="hero__lede">Complete bathroom renovation, design, supply and installation — planned around the property, managed from first visit to final clean.</p>
    <div class="hero__actions"><a class="button button--ink" href="/contact/">Arrange a home consultation</a><button class="text-button" type="button" data-open-drawer>Talk to a bathroom expert <span aria-hidden="true">↗</span></button></div>
    <div class="hero__trust"><span>Genuinely local</span><span>Bathrooms only</span><span>Your home protected</span></div>
  </div>
  <figure class="hero__image-frame">
    <img src="${esc(hero.src)}" alt="${esc(hero.alt)}" width="${hero.width}" height="${hero.height}" fetchpriority="high">
    <figcaption>${esc(hero.caption)}</figcaption>
  </figure>
</section>

<section class="place-strip" aria-label="Local coverage"><div><strong>33 Gunterstone Road · W14</strong><span>Our genuine operating base</span></div><p>Working across Kensington W8, Holland Park, Notting Hill, South Kensington and Chelsea.</p></section>

<section class="intro-grid section-shell">
  <div><p class="eyebrow">The service</p><h2>Design-led bathrooms, backed by practical building experience.</h2></div>
  <div class="intro-grid__copy"><p>We start with what is behind the finish: drainage, water, ventilation, floors, walls and access. Then we shape the layout, products and materials around a room that can actually be built well.</p><a class="arrow-link" href="/bathroom-renovation/">Explore complete bathroom renovation</a></div>
</section>

<section class="editorial-feature section-shell">
  <figure class="editorial-feature__image"><img src="${esc(cfg.images.selectedWork[1].src)}" alt="${esc(cfg.images.selectedWork[1].alt)}" width="${cfg.images.selectedWork[1].width}" height="${cfg.images.selectedWork[1].height}" loading="lazy"><figcaption>Real completed work from our wider London portfolio.</figcaption></figure>
  <div class="editorial-feature__content"><p class="eyebrow">Design · supply · installation</p><h2>One managed bathroom project.</h2><p>Sanitaryware, brassware, tiling, waterproofing, plumbing, electrical coordination, joinery and finishing are brought together as one programme rather than left for you to coordinate between separate trades.</p><div class="mini-list"><span>Survey-led planning</span><span>Specification support</span><span>Managed installation</span><span>Final handover</span></div><a class="arrow-link" href="/our-approach/">See how a project runs</a></div>
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

<section class="kensington-story section-shell">
  <figure class="kensington-story__image"><img src="${esc(local.src)}" alt="${esc(local.alt)}" width="${local.width}" height="${local.height}" loading="lazy"><figcaption>${esc(local.credit)}</figcaption></figure>
  <div class="kensington-story__copy"><p class="eyebrow">This part of London is home</p><h2>Local knowledge, not a Kensington landing page.</h2><p>Kensington Bathrooms operates from Gunterstone Road in West Kensington. Nick grew up locally, went to school in Kensington & Chelsea and has spent decades working hands-on in plumbing, bathrooms and older London property.</p><p>That matters when the room is upstairs in a period house, inside a portered block, reached across expensive timber floors or governed by building access rules.</p><a class="arrow-link" href="/about/">The story behind Kensington Bathrooms</a></div>
</section>

<section class="areas-preview section-shell">
  <div class="areas-preview__head"><p class="eyebrow">Close to home</p><h2>A deliberately small working area.</h2><p>We are building this business around Kensington and the neighbourhoods immediately around our W14 base — not a list of every postcode in London.</p></div>
  <div class="area-lines">${areas.map(([name,post,path]) => `<a href="${path}"><span>${name}</span><small>${post}</small><b aria-hidden="true">↗</b></a>`).join('')}</div>
</section>

<section class="work-preview section-shell">
  <div class="work-preview__head"><p class="eyebrow">Selected work</p><h2>Real bathrooms. Real locations.</h2><p>We will build the Kensington portfolio with genuine local projects as they are completed. Until then, we show existing work honestly rather than relabelling it.</p></div>
  <div class="work-preview__grid">${cfg.images.selectedWork.map((w) => `<figure><img src="${esc(w.src)}" alt="${esc(w.alt)}" width="${w.width}" height="${w.height}" loading="lazy"><figcaption>${esc(w.caption)}</figcaption></figure>`).join('')}</div>
  <a class="arrow-link" href="/projects/">View selected projects</a>
</section>

<section class="process-ribbon">
  <div class="section-shell"><p class="eyebrow">From first visit to final clean</p><div class="process-ribbon__grid"><div><strong>01</strong><span>Home consultation</span></div><div><strong>02</strong><span>Design & specification</span></div><div><strong>03</strong><span>Preparation & protection</span></div><div><strong>04</strong><span>Managed installation</span></div><div><strong>05</strong><span>Completion & handover</span></div></div></div>
</section>

<section class="consultation-split section-shell">
  <div class="consultation-split__copy"><p class="eyebrow">Start with the room</p><h2>Tell us what you’re planning.</h2><p>We’ll start with the property, the bathroom and the finish you want. A proper quotation follows a conversation and, where appropriate, a home consultation.</p><button class="text-button" type="button" data-open-drawer>Prefer to talk first? Speak to a bathroom expert <span aria-hidden="true">↗</span></button></div>
  <div class="consultation-split__form">${consultationForm(cfg, 'home')}</div>
</section>`;
}
