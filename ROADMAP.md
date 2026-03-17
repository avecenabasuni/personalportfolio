# Roadmap

## Phase 4 — Reliability & UX Intelligence

### CI / Automation
- ⏳ Add `.github/workflows/ci.yml` wiring `quality:check` on every push to master and on PRs.
- ⏳ Add Lighthouse CI budget check for mobile performance regressions (LCP, TBT, CLS thresholds).
- ⏳ Add automated broken-link scan for internal anchors and outbound references.

### Testing
- ⏳ Add Playwright E2E smoke tests for hash navigation (`#home`, `#contact`, `#case-studies`) and modal keyboard flow.
- ⏳ Add unit tests for date/description formatting helpers in `MediumWritingList` and `CTA`.

### SEO & Structured Data
- ⏳ Add JSON-LD `Project` schema to case study detail pages (`app/case-studies/[slug]/page.tsx`).
- ⏳ Add JSON-LD `Article` schema to writing detail pages (`app/writing/[slug]/page.tsx`).

### Analytics
- ⏳ Add New Relic NRQL snippet file (`docs/newrelic-queries.md`) for `PortfolioInteraction` funnel queries.
- ⏳ Instrument remaining missing interactions: vault entry open, certifications modal open, education accordion expand.

### Content Modularization
- ⏳ Extend `lib/content.ts` to cover CTA, Experience, CurrentlyWorkingOn, and TechnicalSkills section copy.

---

## Phase 5 — Content & Presentation Polish

### Writing Page
- ⏳ Add tag filter chips to `/writing` page to filter articles by Medium tag.
- ⏳ Show estimated read time per article (derive from description word count as proxy).

### Case Studies
- ⏳ Add a "Related case studies" row at the bottom of each case study detail page.
- ⏳ Add breadcrumb navigation on case study and writing detail pages.

### Vault
- ⏳ Add search/filter input to the Vault section for quick lookup of entries.
- ⏳ Support categorized Vault entries (e.g. SRE, Cloud, Code) via a tag field in `lib/data.ts`.

### Hero
- ⏳ Make trace widget service names and durations data-driven from `lib/data.ts` instead of hardcoded in `Hero.tsx`.

### General UX
- ⏳ Add `prefers-reduced-motion` guard to Framer Motion animations across all sections.
- ⏳ Add a print stylesheet or print-optimized layout for `/case-studies/[slug]` (useful when sharing with recruiters).

---

## Phase 6 — Infrastructure & Observability

### Cloudflare
- ⏳ Add `_headers` file in `public/` for security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).
- ⏳ Add `_redirects` for any legacy URL aliases if domain changes occur.

### Monitoring
- ⏳ Add uptime check in New Relic Synthetics for the production URL.
- ⏳ Add a Real User Monitoring (RUM) timing log for `/api/writing` response time from the client perspective.

### Asset Hygiene
- ⏳ Run orphan-file cleanup pass in `public/` after content is frozen (images and documents no longer referenced).

