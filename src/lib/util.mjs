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
