// Builds one JSON-LD graph per page. Only verified config values are emitted:
// null fields (postcode, phone, email, company number) are omitted, never guessed.
export function schemaGraph(cfg, page) {
  const base = cfg.site.url;
  const bizId = `${base}/#business`;
  const siteId = `${base}/#website`;
  const a = cfg.operatingAddress;

  const address = {
    '@type': 'PostalAddress',
    streetAddress: a.streetAddress,
    addressLocality: 'London',
    addressCountry: 'GB',
  };
  if (a.postcode) address.postalCode = a.postcode;

  const business = {
    '@type': 'HomeAndConstructionBusiness',
    '@id': bizId,
    name: cfg.brand.name,
    legalName: cfg.company.legalName,
    url: `${base}/`,
    logo: `${base}/brand/monogram-green-bg.svg`,
    description:
      'Bathroom design, supply and installation for homes in Kensington and its immediate neighbourhoods, run from West Kensington, London W14.',
    address,
    areaServed: [
      'Kensington',
      ...cfg.areas.map((x) => x.name),
    ].map((name) => ({ '@type': 'Place', name: `${name}, London` })),
  };
  if (cfg.contact.phone) business.telephone = cfg.contact.phone;
  if (cfg.contact.email) business.email = cfg.contact.email;
  if (cfg.company.companyNumber) {
    business.identifier = {
      '@type': 'PropertyValue',
      propertyID: 'Companies House company number',
      value: cfg.company.companyNumber,
    };
  }

  const graph = [
    { '@type': 'WebSite', '@id': siteId, url: `${base}/`, name: cfg.brand.name, inLanguage: cfg.site.language, publisher: { '@id': bizId } },
    business,
    {
      '@type': page.schemaType || 'WebPage',
      '@id': `${base}${page.path}#webpage`,
      url: `${base}${page.path}`,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': siteId },
      about: { '@id': bizId },
      inLanguage: cfg.site.language,
    },
  ];
  if (page.breadcrumbs && page.breadcrumbs.length > 1) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: page.breadcrumbs.map((b, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: b.name,
        item: `${base}${b.path}`,
      })),
    });
  }
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
