// Builds one JSON-LD graph per page. Only verified public values are emitted.
export function schemaGraph(cfg, page) {
  const base = cfg.site.url;
  const bizId = `${base}/#business`;
  const siteId = `${base}/#website`;

  const business = {
    '@type': 'HomeAndConstructionBusiness',
    '@id': bizId,
    name: cfg.brand.name,
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
  if (cfg.localBase) {
    business.address = {
      '@type': 'PostalAddress',
      streetAddress: cfg.localBase.streetAddress,
      addressLocality: cfg.localBase.city,
      postalCode: cfg.localBase.postcode,
      addressCountry: 'GB',
    };
  }
  if (cfg.company.companyNumber) {
    business.identifier = {
      '@type': 'PropertyValue',
      propertyID: 'Companies House company number',
      value: cfg.company.companyNumber,
    };
  }

  const isArticle = page.schemaType === 'Article';
  const webpage = {
    '@type': isArticle ? 'WebPage' : (page.schemaType || 'WebPage'),
    '@id': `${base}${page.path}#webpage`,
    url: `${base}${page.path}`,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': siteId },
    about: { '@id': bizId },
    inLanguage: cfg.site.language,
  };

  const graph = [
    { '@type': 'WebSite', '@id': siteId, url: `${base}/`, name: cfg.brand.name, inLanguage: cfg.site.language, publisher: { '@id': bizId } },
    business,
    webpage,
  ];

  if (isArticle && page.articleHeadline) {
    const articleId = `${base}${page.path}#article`;
    webpage.mainEntity = { '@id': articleId };
    graph.push({
      '@type': 'Article',
      '@id': articleId,
      headline: page.articleHeadline,
      description: page.description,
      mainEntityOfPage: { '@id': webpage['@id'] },
      author: { '@type': 'Person', name: page.articleAuthor || 'Nicholas' },
      datePublished: page.datePublished,
      dateModified: page.dateModified,
      publisher: { '@id': bizId },
      inLanguage: cfg.site.language,
    });
  }

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
