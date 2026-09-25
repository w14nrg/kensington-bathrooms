import { esc, join } from './util.mjs';
import { schemaGraph } from './schema.mjs';

export const NAV = [
  { name: 'Bathrooms', path: '/bathroom-renovation/' },
  { name: 'Our approach', path: '/our-approach/' },
  { name: 'Areas', path: '/areas/' },
  { name: 'Projects', path: '/projects/' },
  { name: 'About', path: '/about/' },
];

const wordmark = (cfg, tag = 'span') => `
  <${tag} class="wordmark">
    <span class="wordmark__kensington">Kensington</span>
    <span class="wordmark__bathrooms">Bathrooms</span>
  </${tag}>`;

export function head(cfg, page, assets) {
  const url = `${cfg.site.url}${page.path}`;
  return `<!doctype html>
<html lang="${cfg.site.language}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${cfg.site.indexable && !page.noindex ? '' : '<meta name="robots" content="noindex, nofollow">'}
${page.noCanonical ? '' : `<link rel="canonical" href="${url}">`}
<meta name="theme-color" content="#111512">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(cfg.brand.name)}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="en_GB">
<meta property="og:image" content="${cfg.site.url}/brand/og-default.png">
<meta name="twitter:card" content="summary_large_image">
<style>${assets.css}</style>
<script type="application/ld+json">${schemaGraph(page.path === '/' ? { ...cfg, areas: cfg.areas.filter((area) => area.slug !== 'notting-hill') } : cfg, page)}</script>
</head>`;
}

export function header(cfg, currentPath) {
  const links = NAV.map(
    (n) => `<li><a href="${n.path}"${currentPath.startsWith(n.path) ? ' aria-current="page"' : ''}>${n.name}</a></li>`
  ).join('');
  return `
<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <div class="site-header__inner">
    <a class="site-header__brand" href="/" aria-label="${esc(cfg.brand.name)}, home">${wordmark(cfg)}</a>
    <nav class="site-nav" aria-label="Main"><ul class="site-nav__list">${links}</ul></nav>
    <div class="site-header__actions">
      <button type="button" class="expert-link" data-open-drawer>Talk to an expert</button>
      <a class="button button--ink button--small" href="/contact/">Arrange a consultation</a>
    </div>
    <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu"><span class="menu-toggle__bars" aria-hidden="true"></span><span class="menu-toggle__label">Menu</span></button>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <ul>${links}<li><a href="/contact/">Arrange a consultation</a></li></ul>
    <p class="mobile-menu__base">We're here</p>
  </div>
</header>`;
}

const field = (id, label, input, hint = '') => `
  <div class="field">
    <label for="${id}">${label}</label>
    ${hint ? `<p class="field__hint" id="${id}-hint">${hint}</p>` : ''}
    ${input}
    <p class="field__error" id="${id}-error" hidden></p>
  </div>`;
const select = (id, name, options, required = true) =>
  `<select id="${id}" name="${name}"${required ? ' required' : ''} aria-describedby="${id}-error"><option value="">Choose one</option>${options.map((o) => `<option>${esc(o)}</option>`).join('')}</select>`;

export function consultationForm(cfg, idPrefix = 'c') {
  const p = (s) => `${idPrefix}-${s}`;
  if (!cfg.forms.endpoint) {
    const email = cfg.contact.email ? `<a href="mailto:${esc(cfg.contact.email)}">${esc(cfg.contact.email)}</a>` : '';
    const phone = cfg.contact.phone ? `<a href="tel:${esc(cfg.contact.phone)}">${esc(cfg.contact.phoneDisplay || cfg.contact.phone)}</a>` : '';
    return `<div class="form-unavailable"><p class="eyebrow">Direct contact</p><h3>Enquiry forms are not enabled yet.</h3><p>Until the secure form endpoint is connected, please contact us directly.</p><p>${phone}${phone && email ? ' · ' : ''}${email}</p></div>`;
  }
  return `
<form class="form" data-kb-form="consultation" novalidate>
  <div class="form__grid">
    ${field(p('name'), 'Your name', `<input id="${p('name')}" name="name" autocomplete="name" required aria-describedby="${p('name')}-error">`)}
    ${field(p('email'), 'Email', `<input id="${p('email')}" name="email" type="email" autocomplete="email" required aria-describedby="${p('email')}-error">`)}
    ${field(p('tel'), 'Telephone', `<input id="${p('tel')}" name="telephone" type="tel" autocomplete="tel" required aria-describedby="${p('tel')}-error">`)}
    ${field(p('postcode'), 'Property postcode', `<input id="${p('postcode')}" name="postcode" autocomplete="postal-code" required aria-describedby="${p('postcode')}-error" inputmode="text">`)}
    ${field(p('type'), 'Project', select(p('type'), 'project_type', cfg.projectTypes))}
    ${field(p('budget'), 'Anticipated investment', select(p('budget'), 'investment', cfg.investmentBands))}
    ${field(p('when'), 'Preferred timing', select(p('when'), 'timeframe', cfg.timeframes))}
  </div>
  ${field(p('brief'), 'Tell us about the room', `<textarea id="${p('brief')}" name="description" rows="5" aria-describedby="${p('brief')}-hint ${p('brief')}-error"></textarea>`, 'A short outline is enough. We can discuss photographs during the consultation.')}
  <div class="hp" aria-hidden="true"><label for="${p('website')}">Leave this empty</label><input id="${p('website')}" name="website" tabindex="-1" autocomplete="off"></div>
  <p class="form__privacy">We use these details only to respond to your enquiry. See our <a href="/privacy/">privacy notice</a>.</p>
  <button class="button button--ink" type="submit">Request a home consultation</button>
  <p class="form__status" role="status" aria-live="polite"></p>
</form>`;
}

export function drawer(cfg) {
  const c = cfg.contact;
  const direct = join(
    c.phone && `<a class="drawer__option" href="tel:${esc(c.phone)}" data-track="call_click"><span>Call</span><strong>${esc(c.phoneDisplay || c.phone)}</strong></a>`,
    c.whatsapp && `<a class="drawer__option" href="https://wa.me/${esc(c.whatsapp)}" data-whatsapp data-track="whatsapp_click" target="_blank" rel="noopener"><span>WhatsApp</span><strong>Send photos and a short note</strong></a>`,
    c.email && `<a class="drawer__option" href="mailto:${esc(c.email)}"><span>Email</span><strong>${esc(c.email)}</strong></a>`
  );
  return `
<dialog class="drawer" id="contact-drawer" aria-labelledby="drawer-title">
  <div class="drawer__panel">
    <div class="drawer__head">
      <p class="eyebrow">Direct contact</p>
      <button type="button" class="drawer__close" data-close-drawer aria-label="Close">×</button>
    </div>
    <h2 id="drawer-title" class="drawer__title">Talk to a bathroom expert</h2>
    <p class="drawer__intro">Speak directly with our bathroom team about the room, the property and the practical next step.${c.callbackHours ? ` Callbacks: ${esc(c.callbackHours)}.` : ''}</p>
    ${direct ? `<div class="drawer__options">${direct}</div>` : ''}
    ${cfg.forms.endpoint ? `<div class="drawer__rule"></div>
    <h3 class="drawer__subtitle">Request a callback</h3>
    <form class="form form--compact" data-kb-form="callback" novalidate>
      ${field('cb-name', 'Your name', '<input id="cb-name" name="name" autocomplete="name" required aria-describedby="cb-name-error">')}
      ${field('cb-tel', 'Telephone', '<input id="cb-tel" name="telephone" type="tel" autocomplete="tel" required aria-describedby="cb-tel-error">')}
      ${field('cb-time', 'Best time to call', select('cb-time', 'best_time', ['Any time', 'Morning', 'Afternoon', 'Early evening'], false))}
      <div class="hp" aria-hidden="true"><label for="cb-website">Leave this empty</label><input id="cb-website" name="website" tabindex="-1" autocomplete="off"></div>
      <button class="button button--ink" type="submit">Request a callback</button>
      <p class="form__status" role="status" aria-live="polite"></p>
    </form>` : ''}
    <p class="drawer__alt">Prefer a visit? <a href="/contact/">Arrange a home consultation</a></p>
  </div>
</dialog>`;
}

export function mobileBar() {
  return `<div class="mobile-bar"><button type="button" class="mobile-bar__item" data-open-drawer><span>Talk to an expert</span></button><a class="mobile-bar__item mobile-bar__item--strong" href="/contact/"><span>Home consultation</span></a></div>`;
}

export function footer(cfg, currentPath = '') {
  const co = cfg.company;
  return `
<footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__brand">
      ${wordmark(cfg, 'p')}
      <p>Bathroom renovation, design and installation across the neighbourhoods shown on our map.</p>
      <p class="site-footer__note">Home consultations are arranged at your property.</p>
    </div>
    <nav class="site-footer__col" aria-label="Footer"><h2>Explore</h2><ul><li><a href="/bathroom-renovation/">Bathroom renovation</a></li><li><a href="/our-approach/">Our approach</a></li><li><a href="/guides/">Guides</a></li><li><a href="/projects/">Projects</a></li><li><a href="/about/">About</a></li><li><a href="/contact/">Contact</a></li></ul></nav>
    <nav class="site-footer__col" aria-label="Areas"><h2>Areas</h2><ul>${cfg.areas.map((x) => `<li><a href="/areas/${x.slug}/">${esc(x.name)}</a></li>`).join('')}</ul></nav>
  </div>
  <div class="site-footer__legal">
    <p>${esc(cfg.brand.name)} is a trading name of ${esc(co.legalName)} · Company ${esc(co.companyNumber)} · Registered in ${esc(co.registeredIn)}.${co.registeredOffice ? ` Registered office: ${esc(co.registeredOffice)}.` : ``}</p>
    <p><a href="/privacy/">Privacy</a><a href="/cookies/">Cookies</a><a href="/terms/">Terms</a><span>© ${new Date().getFullYear()} ${esc(co.legalName)}</span></p>
  </div>
</footer>`;
}

export function page(cfg, pageMeta, assets, mainHtml) {
  return `${head(cfg, pageMeta, assets)}<body class="${pageMeta.path === '/' ? 'is-map-home' : ''}">${header(cfg, pageMeta.path)}<main id="main">${mainHtml}</main>${footer(cfg, pageMeta.path)}${drawer(cfg)}${mobileBar()}<script>window.KB_CONFIG=${JSON.stringify({ formEndpoint: cfg.forms.endpoint, whatsappMessage: cfg.contact.whatsappMessage })};</script><script src="/js/site.js" defer></script></body></html>`;
}
