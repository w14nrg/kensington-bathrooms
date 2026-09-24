# Kensington Bathrooms — ChatGPT build

Premium local bathroom website for **Kensington Bathrooms**, a trading name of **En-Suites & Bathrooms Ltd**.

## Status

- Built from the approved Kensington SEO/brand strategy and Claude Rev 2 homepage assessment.
- 15 generated pages.
- `site.indexable` remains deliberately `false` while the site is under review.
- Canonical production domain is `https://kensingtonbathrooms.uk`.
- Phone, WhatsApp, email and form endpoint remain unset until real details exist.
- Visual direction: near-black/dark green map-led homepage with restrained brass detail; internal page heroes now use the same dark premium language.
- Homepage owns the Kensington/W8 commercial search cluster.
- Bathroom Renovation owns the service rather than a second Kensington location target.
- Dedicated area pages: West Kensington, Holland Park, South Kensington and Chelsea.
- Notting Hill is excluded.
- Projects remains noindex until the portfolio is sufficiently documented.
- Public footer shows the trading-name disclosure and company number only; no private/registered address is published.

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

Repository: `w14nrg/kensington-bathrooms`

Review branch: `feature/chatgpt-premium-build`

Do not place it inside or merge it into `w14nrg/en-suite-bathrooms`. Keep `main` untouched until review is complete.

## Images

The build uses genuine owned project photography from the existing En-Suites & Bathrooms work, with truthful project locations. No Fulham/London project is relabelled as Kensington.

See `docs/image-inventory.md` for the current image inventory and launch rules.

## Important pre-launch work

See `docs/pre-launch.md`. The site stays noindex until the final contact, form, visual, link, schema and launch checks are complete.
