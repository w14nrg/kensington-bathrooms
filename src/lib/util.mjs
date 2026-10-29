export const esc = (s = '') =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

// Join markup fragments, dropping empty/false values so optional blocks can use `cond && html`.
export const join = (...parts) => parts.flat().filter(Boolean).join('\n');

export const addressLines = (a) => {
  const last = a.postcode ? `${a.city} ${a.postcode}` : `${a.city} ${a.postcodeDistrict}`;
  return [a.streetAddress, a.locality, last];
};

// A real work photograph with a responsive source set (640px and full-size WebP files in /images/work/).
export const workFigure = (img, { cls = 'work-photo', sizes = '(max-width: 760px) 100vw, 40vw', eager = false } = {}) => {
  if (!img) return '';
  return `<figure class="${cls}"><img src="${img.base}-1200.webp" srcset="${img.base}-640.webp 640w, ${img.base}-1200.webp ${img.width}w" sizes="${sizes}" alt="${esc(img.alt)}" width="${img.width}" height="${img.height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async"><figcaption>${esc(img.caption)}</figcaption></figure>`;
};
