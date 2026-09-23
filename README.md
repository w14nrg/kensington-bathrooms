# Kensington Bathrooms — ChatGPT build

Premium local bathroom website for **Kensington Bathrooms**, a trading name of **En-Suites & Bathrooms Ltd**.

## Status

- Built from the approved Kensington SEO/brand strategy.
- 16 generated pages.
- `site.indexable` is deliberately `false` while the site is under review.
- Phone, WhatsApp, email and form endpoint remain unset until real details exist.
- The design is intentionally light, editorial and image-led: warm white, charcoal, restrained heritage green and brass details.
- Property protection is a primary brand differentiator, not a minor FAQ.
- Homepage owns the Kensington/W8 commercial cluster.
- Dedicated area pages: West Kensington, Holland Park, Notting Hill, South Kensington, Chelsea.

## Build

Requires Node 20+.

```bash
npm run build
```

Output is written to `dist/`.

## Local preview

```bash
npm run preview
```

## Git strategy

This code should live in its own repository:

`w14nrg/kensington-bathrooms`

Recommended branch for this version:

`feature/chatgpt-premium-build`

Do not place it inside or merge it into `w14nrg/en-suite-bathrooms`.

## Images

The prototype references two genuine owned project images from the existing En-Suites & Bathrooms GitHub repository and one Creative Commons photograph of Kynance Mews for local Kensington context. Before launch, copy the owned project image files into this repository and localise the Kensington image or replace it with an original local photograph. See `docs/image-inventory.md`.

No existing Fulham/London project is relabelled as Kensington.

## Important pre-launch work

See `docs/pre-launch.md`. Key blockers include final phone/WhatsApp/email, real form handling, image localisation, analytics/consent decisions, and an overlap audit of existing Kensington pages on en-suite.co.uk before indexing.
