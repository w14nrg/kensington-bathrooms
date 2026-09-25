# Pre-launch checklist

## Identity / contact
- [ ] Final dedicated phone number
- [ ] Final WhatsApp number
- [ ] Final enquiry email
- [ ] Callback hours if displayed

## Forms / tracking
- [ ] Approved production form endpoint
- [ ] Spam handling / server-side validation
- [ ] Confirmation emails if required
- [ ] Analytics choice
- [ ] Cookie/consent implementation updated for actual tools
- [ ] Call / WhatsApp / form event tracking

## Images
- [ ] Copy owned project image files into the Kensington Bathrooms repo (no hotlinking at launch)
- [ ] Replace or localise Kynance Mews image with attribution
- [ ] Prefer an original Kensington/W14/W8 local photograph when available
- [ ] Add real Kensington project photography as completed
- [ ] Optimise AVIF/WebP and responsive sizes

## SEO
- [ ] Search-volume sanity check (Keyword Planner or equivalent)
- [ ] Local Falcon/BrightLocal W8/W14 scan for Maps evidence
- [ ] Audit existing en-suite.co.uk Kensington / Holland Park / South Kensington / Chelsea bathroom URLs
- [ ] Decide deliberate redirects/canonicals only after traffic/backlink review
- [ ] Validate all schema with final business/contact data
- [ ] Validate sitemap
- [ ] Set `site.indexable` true only when production domain is ready
- [ ] Submit sitemap / Search Console after launch

## Legal
- [ ] Confirm company number and final public legal wording before launch
- [ ] Review privacy/cookie/terms against actual form, analytics and hosting setup
- [ ] Confirm insurance/guarantee claims before adding any

## QA
- [ ] Desktop visual review
- [ ] Mobile visual review
- [ ] Real-device Pixel/iPhone checks
- [ ] Keyboard and focus check
- [ ] Form validation
- [ ] Contact drawer
- [ ] Internal-link crawl
- [ ] 404
- [ ] No staging URLs indexed
- [ ] No invented reviews/project locations/awards


## 2026-09-25 consolidated launch blockers
- [x] Mobile homepage brief retained on the live-site codebase.
- [x] Draft Kensington, mansion-block and period/listed-home guides added to the feature branch for Nicholas + Claude review.
- [x] Public phone, WhatsApp and email populated in config.
- [x] Enquiry and callback forms hidden while no production form endpoint is configured.
- [x] UK GDPR privacy notice expanded with lawful bases, retention criteria, rights and contact details.
- [x] Private operating/home address removed from site config.
- [x] Unused Kynance Mews image/config references removed.
- [ ] Registered office: confirm a non-private registered-office address with the accountant or a registered-office service, then add it to `company.registeredOffice` before launch.
- [ ] HTTPS: GitHub Pages certificate must finish provisioning and **Enforce HTTPS** must be enabled in repository Settings → Pages. The connected GitHub integration cannot toggle this account setting; GitHub returned 403 when attempted.
- [ ] Self-hosted fonts: confirm licensed serif and sans font files before adding them. The review ZIP intentionally contains no redistributed font binaries.
- [ ] Nicholas to confirm all trade-experience statements marked in the guide drafts.
- [ ] Claude to review the guide drafts and final branch ZIP before publication.
- [ ] At launch only: set `site.indexable=true`; keep Projects noindex; verify Search Console and submit the sitemap.
