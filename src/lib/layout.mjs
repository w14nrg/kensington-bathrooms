import { esc, join } from './util.mjs';
import { schemaGraph } from './schema.mjs';

export const NAV = [
  { name: 'Bathrooms', path: '/bathroom-renovation/' },
  { name: 'Our approach', path: '/our-approach/' },
  { name: 'Areas', path: '/areas/' },
  { name: 'Projects', path: '/projects/' },
  { name: 'About', path: '/about/' },
];

const whatsappIcon = `<svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="#25D366" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.009-.371-.011-.57-.011-.198 0-.52.074-.792.371-.272.298-1.04 1.016-1.04 2.479s1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.997 2.9 9.825 9.825 0 0 1 2.897 6.994c-.003 5.45-4.437 9.883-9.898 9.883m8.413-18.297A11.815 11.815 0 0 0 12.055 0C5.495 0 .16 5.335.157 11.893c0 2.096.547 4.142 1.588 5.945L.056 24l6.304-1.654a11.882 11.882 0 0 0 5.69 1.449h.005c6.559 0 11.894-5.335 11.897-11.893a11.821 11.821 0 0 0-3.488-8.414Z"/></svg>`;

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
<script>if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('js-motion')</script>
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
      <a class="button button--small header-whatsapp" href="https://wa.me/${cfg.contact.whatsapp}" data-whatsapp data-track="whatsapp_click" target="_blank" rel="noopener">${whatsappIcon}<span>WhatsApp</span></a>
      <a class="button button--ink button--small" href="/contact/">Arrange a consultation</a>
    </div>
    <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="mobile-menu"><span class="menu-toggle__bars" aria-hidden="true"></span><span class="menu-toggle__label">Menu</span></button>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <ul>${links}<li><button type="button" class="mobile-menu__expert" data-open-drawer>Talk to a bathroom expert</button></li><li><a href="/contact/">Arrange a consultation</a></li></ul>
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
  if (!cfg.forms.endpoint) return '';
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
  const mobileCall = c.phone
    ? `<a class="drawer__contact-button drawer__mobile-only" href="tel:${esc(c.phone)}" data-track="call_click">Call</a>`
    : '';
  const whatsapp = c.whatsapp
    ? `<a class="drawer__contact-button" href="https://wa.me/${esc(c.whatsapp)}" data-whatsapp data-track="whatsapp_click" target="_blank" rel="noopener">WhatsApp</a>`
    : '';
  const desktopPhone = c.phone
    ? `<button type="button" class="drawer__contact-button drawer__desktop-only" data-reveal-phone data-phone-display="${esc(c.phoneDisplay || c.phone)}">Show phone number</button><a class="drawer__phone-reveal drawer__desktop-only" href="tel:${esc(c.phone)}" data-phone-reveal hidden aria-live="polite"></a>`
    : '';
  const direct = join(mobileCall, whatsapp, desktopPhone);
  return `
<dialog class="drawer" id="contact-drawer" aria-labelledby="drawer-title">
  <div class="drawer__panel">
    <div class="drawer__head">
      <p class="eyebrow">Direct contact</p>
      <button type="button" class="drawer__close" data-close-drawer aria-label="Close">×</button>
    </div>
    <h2 id="drawer-title" class="drawer__title">Speak directly to Nicholas, our founder</h2>
    <p class="drawer__intro">Nicholas grew up locally and has decades of hands-on experience in bathrooms. You'll be talking to the person who plans your project.</p>
    ${direct ? `<div class="drawer__contact-actions">${direct}</div>` : ''}
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
    <p class="drawer__alt"><a href="/contact/">See consultation options</a></p>
  </div>
</dialog>`;
}

export function mobileBar(cfg) {
  return `<div class="mobile-bar"><a class="mobile-bar__item mobile-bar__whatsapp" href="https://wa.me/${esc(cfg.contact.whatsapp)}" data-whatsapp data-track="whatsapp_click" target="_blank" rel="noopener">${whatsappIcon}<span>WhatsApp us</span></a><a class="mobile-bar__item mobile-bar__item--strong" href="/contact/"><span>Home consultation</span></a></div>`;
}

export function footer(cfg, currentPath = '') {
  const co = cfg.company;
  const base = cfg.localBase;
  return `
<footer class="site-footer">
  <div class="site-footer__inner">
    <div class="site-footer__brand">
      ${wordmark(cfg, 'p')}
      <p>Bathroom renovation, design and installation across the neighbourhoods shown on our map.</p>
      ${base ? `<address>${esc(base.streetAddress)}<br>${esc(base.city)} ${esc(base.postcode)}</address>` : ''}
      <p class="site-footer__note">Home consultations, or design meetings by appointment at our base in West Kensington.</p>
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
  return `${head(cfg, pageMeta, assets)}<body class="${pageMeta.path === '/' ? 'is-map-home' : ''}">${header(cfg, pageMeta.path)}<main id="main">${mainHtml}</main>${footer(cfg, pageMeta.path)}${drawer(cfg)}${mobileBar(cfg)}<script>window.KB_CONFIG=${JSON.stringify({ formEndpoint: cfg.forms.endpoint, whatsappMessage: cfg.contact.whatsappMessage })};</script><script src="/js/site.js" defer></script></body></html>`;
}
