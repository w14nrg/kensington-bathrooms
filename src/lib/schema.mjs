// Builds one JSON-LD graph per page. Only verified public values are emitted.
export function schemaGraph(cfg, page) {
  const base = cfg.site.url;
  const bizId = `${base}/#business`;
  const siteId = `${base}/#website`;

  const business = {
    '@type': 'HomeAndConstructionBusiness',
    '@id': bizId,
    name: cfg.brand.name,
    legalName: cfg.company.legalName,
    url: `${base}/`,
    logo: `${base}/brand/monogram-green-bg.svg`,
    description:
      'Bathroom design, supply and installation for homes in Kensington and its immediate neighbourhoods.',
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

  const webpage = {
    '@type': page.schemaType || 'WebPage',
    '@id': `${base}${page.path}#webpage`,
    url: `${base}${page.path}`,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': siteId },
    about: { '@id': bizId },
    inLanguage: cfg.site.language,
  };
  if (page.schemaType === 'Article' && page.articleHeadline) {
    webpage.headline = page.articleHeadline;
    webpage.mainEntityOfPage = { '@id': `${base}${page.path}#webpage` };
    webpage.publisher = { '@id': bizId };
  }

  const graph = [
    { '@type': 'WebSite', '@id': siteId, url: `${base}/`, name: cfg.brand.name, inLanguage: cfg.site.language, publisher: { '@id': bizId } },
    business,
    webpage,
  ];

  if (page.serviceSchema) {
    const serviceId = `${base}${page.path}#service`;
    webpage.mainEntity = { '@id': serviceId };
    graph.push({
      '@type': 'Service',
      '@id': serviceId,
      name: page.serviceSchema.name,
      serviceType: page.serviceSchema.serviceType,
      description: page.description,
      provider: { '@id': bizId },
      areaServed: [
        'Kensington',
        ...cfg.areas.map((x) => x.name),
      ].map((name) => ({ '@type': 'Place', name: `${name}, London` })),
    });
  }
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
