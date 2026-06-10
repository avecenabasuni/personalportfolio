# Roadmap

## Phase 4 - Reliability & UX Intelligence

### CI / Automation
- [x] Add GitHub Actions CI for `quality:check`, production build, and Playwright E2E.
- [x] Add automated internal link, hash anchor, and local asset scan.
- [ ] Add Lighthouse CI budget check for mobile performance regressions.

### Testing
- [x] Add Playwright E2E smoke tests for hash navigation and modal keyboard flow.
- [ ] Add unit tests for writing feed formatting helpers.

### SEO & Structured Data
- [x] Add `Project` JSON-LD to case study detail pages.
- [x] Add `Article` JSON-LD to writing detail pages.
- [x] Add breadcrumb JSON-LD and visible breadcrumbs to detail pages.

### Analytics
- [x] Add New Relic NRQL snippet file for `PortfolioInteraction` funnel queries.
- [x] Track key conversion interactions: contact, resume, credentials, related case studies, vault, social links, and writing feed timing.

### Content Modularization
- [x] Centralize section copy in `lib/content.ts`.
- [x] Move hero trace widget data into `lib/data.ts`.

---

## Phase 5 - Content & Presentation Polish

### Writing Page
- [x] Add tag filter chips to `/writing`.
- [x] Show estimated read time per article.

### Case Studies
- [x] Add related case studies to detail pages.
- [x] Add breadcrumb navigation on case study and writing detail pages.
- [x] Add print-friendly global styles for sharing detail pages.

### Vault
- [x] Add search and tag filtering.
- [x] Add categorized Vault entries via tags in `lib/data.ts`.

### General UX
- [x] Add `prefers-reduced-motion` handling for Framer Motion and CSS animations.
- [x] Add contact form fallback when EmailJS env vars are missing.

---

## Phase 6 - Infrastructure & Observability

### Cloudflare
- [x] Add `_headers` file in `public/` for Cloudflare static asset headers.
- [x] Add matching Next.js security headers for dynamic/SSR responses.
- [ ] Add `_redirects` only if legacy URL aliases are introduced.

### Monitoring
- [x] Add client-side timing event for `/api/writing` fetches.
- [ ] Add uptime check in New Relic Synthetics for the production URL.
- [ ] Add scheduled external link health report.

### Asset Hygiene
- [ ] Run orphan-file cleanup pass in `public/` after content is frozen.
