import { esc } from '../lib/util.mjs';

export const meta = {
  path: '/',
  title: 'Bathroom Renovation in Kensington | Kensington Bathrooms',
  ogTitle: 'Kensington Bathrooms — bathroom renovation, design and installation',
  description: 'Bathroom renovation, design and installation in Kensington and nearby neighbourhoods, managed from our local base.',
  schemaType: 'WebPage'
};

const areas = [
  ['kensington', 'Kensington', 'W8', 'Our principal area: stucco terraces, garden squares and mansion blocks.', '#kensington', 'Bathroom renovation in Kensington'],
  ['holland-park', 'Holland Park', 'W8 · W11', 'Large period houses, often with several bathrooms and long, finished hallways.', '/areas/holland-park/', 'Bathrooms in Holland Park'],
  ['south-kensington', 'South Kensington', 'SW7', 'Portered buildings and garden-square flats, where access is planned around the building.', '/areas/south-kensington/', 'Bathrooms in South Kensington'],
  ['chelsea', 'Chelsea', 'SW3 · SW10', 'Mansion blocks and mews houses, many within managed buildings.', '/areas/chelsea/', 'Bathrooms in Chelsea'],
  ['west-kensington', 'West Kensington', 'W14', 'Period houses, mansion flats and conversions close to our local base.', '/areas/west-kensington/', 'Bathrooms in West Kensington'],
  ['local-base', 'Our local base', '', 'Projects are run from our local base, a short distance from Kensington.', '/about/', 'About Kensington Bathrooms']
];

const mapMarker = ([id, name, post, description, link, label]) => `<li class="map-point map-point--${id}" data-map-point>
  <button type="button" class="map-point__button" aria-expanded="false" aria-controls="map-panel-${id}" data-map-trigger><span class="map-point__symbol" aria-hidden="true"></span><span class="map-point__name">${esc(name)}</span>${post ? `<small>${esc(post)}</small>` : ''}</button>
  <div class="map-panel" id="map-panel-${id}" data-map-panel><p class="map-panel__title">${esc(name)}${post ? `<small>${esc(post)}</small>` : ''}</p><p>${esc(description)}</p><a href="${link}">${esc(label)} <span aria-hidden="true">↗</span></a></div>
</li>`;

export function render() {
  return `<section class="map-home" aria-labelledby="map-home-title">
  <div class="map-home__copy">
    <p class="map-home__kicker">Bathroom renovation · Kensington</p>
    <h1 id="map-home-title">Bathroom design<br>and installation<br>in Kensington</h1>
    <p class="map-home__intro">We design, supply and install complete bathrooms for houses and flats in Kensington and the neighbourhoods around it, working from our local base nearby.</p>
    <p class="map-home__intro map-home__intro--continued">One team manages the whole project, from design and specification to plumbing, waterproofing, tiling and joinery.</p>
    <div class="map-home__actions"><a class="map-home__primary" href="/contact/">Arrange a home consultation</a><button type="button" data-open-drawer class="map-home__secondary">Talk to a bathroom expert <span aria-hidden="true">↗</span></button></div>
  </div>
  <div class="map-home__map" aria-label="Illustrated map of the neighbourhoods Kensington Bathrooms serves">
    <svg class="map-art" viewBox="0 0 1000 740" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Simplified map showing our local base near Kensington, West Kensington, Holland Park, South Kensington and Chelsea">
      <defs><pattern id="map-streets" width="80" height="64" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)"><path d="M0 0H80M0 32H80M0 0V64M40 0V64" fill="none" stroke="#666960" stroke-opacity=".2" stroke-width="1"/></pattern><linearGradient id="map-vignette"><stop stop-color="#101411" stop-opacity=".85"/><stop offset=".4" stop-color="#101411" stop-opacity=".04"/><stop offset="1" stop-color="#101411" stop-opacity=".08"/></linearGradient></defs>
      <rect width="1000" height="740" fill="#121714"/><path fill="#1a2420" d="M0 0h215l75 120-28 166-102 25L0 262zM865 0h135v210l-72 18-90-70zM645 320l138-57 144 94-78 174-149-34zM0 610l128-82 173 43 15 169H0z"/><path fill="#19251e" d="M0 132q125-84 254-43l101 96-19 79-165 89-171-18z"/><rect width="1000" height="740" fill="url(#map-streets)"/>
      <g fill="none" stroke="#8d8977" stroke-opacity=".3" stroke-width="2"><path d="M-60 236C215 186 359 166 625 146s314-18 440-60"/><path d="M-80 492c207-39 410-47 665-41 157 4 327 0 500-67"/><path d="M178 0c110 166 140 272 120 422-11 82-44 191-66 330"/><path d="M625-30c-14 154-28 304-17 455 8 109 45 219 91 352"/><path d="M-20 663c180-127 303-182 518-201 176-17 325-20 532-93"/><path d="M842 121c-92 163-135 302-126 451 4 67 33 151 56 197"/></g>
      <g fill="none" stroke="#6d7269" stroke-opacity=".18" stroke-width="1.4"><path d="M0 315 800 158M0 380 812 222M0 542 978 344M100 0 440 740M340 0 584 740M775 0 945 740"/><path d="M33 575c186-65 391-83 635-60M350 305c185-34 378-35 603-62"/></g>
      <path d="M5 119h317v164H30z" fill="#19291f" opacity=".65"/><path d="M570 6h289v170H592z" fill="#1a2920" opacity=".68"/><path d="M822 498c63 13 110 9 178-8v250H876z" fill="#172821" opacity=".6"/>
      <g fill="none" stroke="#a78952" stroke-width="1.2" stroke-dasharray="3 6" opacity=".4"><path d="M268 118c79-33 203-29 255 27 52 57 37 165-19 202-71 47-182 31-227-20-50-57-61-165-9-209z"/><path d="M523 163c87-54 228-36 277 31 47 65 22 185-52 211-86 31-213-14-241-85-22-57-23-131 16-157z"/><path d="M661 397c65-46 206-34 250 28 47 70 23 192-59 224-93 36-206-27-218-98-14-79-10-126 27-154z"/></g>
      <g fill="#85877b" font-family="Arial,sans-serif" font-size="11" letter-spacing="2.2" opacity=".65"><text x="165" y="185" transform="rotate(-9 165 185)">HOLLAND PARK AVENUE</text><text x="544" y="436" transform="rotate(-2 544 436)">KENSINGTON ROAD</text><text x="317" y="523" transform="rotate(-3 317 523)">CROMWELL ROAD</text><text x="635" y="727" transform="rotate(-18 635 727)">FULHAM ROAD</text><text x="263" y="375" transform="rotate(77 263 375)">NORTH END ROAD</text></g><rect width="1000" height="740" fill="url(#map-vignette)"/>
    </svg>
    <ul class="map-points" aria-label="Choose an area">${areas.map(mapMarker).join('')}</ul>
    <p class="map-home__legend"><span aria-hidden="true">◆</span> Areas we serve <span aria-hidden="true">◎</span> Our local base</p>
  </div>
</section>
<nav class="map-area-list" aria-label="Areas we serve"><p class="map-area-list__label">Areas we serve · Our local base</p>${areas.map(([, name, post, description, link]) => `<div class="map-area-list__item"><a href="${link}"><span>${esc(name)}</span><small>${esc(post)}</small><span aria-hidden="true">↗</span></a><p>${esc(description)}</p></div>`).join('')}</nav>
<section class="map-reading" id="kensington" aria-labelledby="map-reading-title"><div class="map-reading__inner"><div class="map-reading__lead"><p class="map-reading__kicker">Kensington Bathrooms</p><h2 id="map-reading-title">Bathroom renovation in Kensington, from first visit to final clean</h2></div><div class="map-reading__blocks">
  <article><span class="map-reading__number">01</span><div><h3>Design, supply and installation</h3><p>We renovate main bathrooms, en-suites, shower rooms and cloakrooms, from the complete refurbishment of a family bathroom to a new cloakroom. Each project starts with a survey of the room and the building: drainage, water supply, ventilation, and how the floor and walls are built. The layout and specification follow from what the room can support, and the plumbers, bathroom fitters, electricians, tilers and joiners on your project work to one programme, managed by us.</p><a href="/bathroom-renovation/">Our bathroom renovation service <span aria-hidden="true">↗</span></a></div></article>
  <article><span class="map-reading__number">02</span><div><h3>Kensington, W8</h3><p>Kensington’s bathrooms sit in stucco terraces, garden-square houses, mansion blocks and portered buildings, often with older soil stacks, shared risers and rules set by a porter or managing agent. We confirm those rules for your building before setting a programme, and plan deliveries, working hours and waste removal around them.</p><a href="/areas/">The areas we serve <span aria-hidden="true">↗</span></a></div></article>
  <article><span class="map-reading__number">03</span><div><h3>Why homeowners choose us</h3><p>We are local: our founder grew up in this part of London, went to school in Kensington and Chelsea, and has spent decades working in the trade here. We focus on bathrooms. One team is accountable from the first visit to the final clean, and we look after the rest of your home while we work.</p><a href="/our-approach/">Our approach <span aria-hidden="true">↗</span></a></div></article>
</div></div></section>
<section class="map-close"><div class="map-close__inner"><h2>Tell us about your bathroom</h2><div><a href="/contact/">Arrange a home consultation</a><button type="button" data-open-drawer>Talk to a bathroom expert <span aria-hidden="true">↗</span></button></div></div></section>`;
}
