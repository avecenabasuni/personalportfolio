# Roadmap

## Phase 1 Delivery (Completed)

- Writing feed freshness:
  - ✅ Added "Last updated" timestamp beside Writing heading.
  - ✅ Added manual refresh trigger for dev/testing mode.
- Loading and empty-state polish:
  - ✅ Unified skeleton style and spacing for Writing home/page lists.
  - ✅ Improved fallback copy for writing and certifications.
- Asset hygiene:
  - ✅ Added automated asset audit (`npm run audit:assets`) to verify `/images` and `/documents` references.
  - 🔄 Optional cleanup of orphan files can be done incrementally after content freeze.

## Phase 2 Delivery (Partially Completed)

- Navigation and in-page UX hardening:
  - ✅ Added regression smoke check for anchor offset (`npm run test:smoke`).
  - ⏳ Full browser E2E hash-navigation coverage still pending.
- Performance and rendering:
  - ✅ Writing API now supports explicit refresh/no-store mode for debug validation.
  - ⏳ Additional responsive image sizing optimization pass still pending.
- Accessibility pass:
  - ✅ Key interactive controls in nav/modal/contact remain mobile-tap safe.
  - ⏳ Formal keyboard + heading hierarchy audit checklist still pending.

## Phase 3 Delivery (Partially Completed)

- Analytics and observability:
  - ✅ Implemented interaction taxonomy capture via New Relic (`portfolio_interaction` and `PortfolioInteraction`).
  - ✅ Instrumented case studies, writing links, resume open, and thesis open actions.
  - ⏳ Dashboard query presets in New Relic still pending.
- Content workflow:
  - ✅ Started modularized section copy in `lib/content.ts` and integrated into About + Writing.
  - ⏳ Extend structured content coverage to remaining sections.
- SEO depth:
  - ✅ Added generated social cards using Next.js `ImageResponse`:
    - `/opengraph-image`, `/twitter-image`
    - `/case-studies/[slug]/opengraph-image`
    - `/writing/opengraph-image`
    - `/writing/[slug]/opengraph-image`
  - ✅ Expanded page metadata for writing and case study routes.

## Engineering Quality

- Testing:
  - ⏳ Unit tests for writing date/description formatting helpers.
  - ⏳ Component tests for dialogs, navbar menu, and section rendering.
- CI gates:
  - ✅ Added `typecheck`, `test:smoke`, and `audit:assets` scripts.
  - ✅ Added aggregate quality script: `npm run quality:check`.
  - ⏳ Wire these scripts into CI workflow file.
- Release discipline:
  - Keep concise release notes per UX/content change.

## Next Phase (Proposed)

- Phase 4 (Reliability + UX intelligence):
  - Add Playwright E2E coverage for hash navigation and modal keyboard flow.
  - Add New Relic dashboard JSON templates and NRQL snippets for interaction funnel.
  - Add per-page JSON-LD for case study detail pages (Project/Article schema).
  - Add Lighthouse CI budget checks for mobile performance regressions.
  - Add automated broken-link scan for internal anchors + outbound references.

## Completed

- March 2026 responsiveness and navigation fixes:
  - Mobile touch targets increased to 44px for key controls.
  - Hero trace widget made full-width on mobile.
  - Mobile modal usability improved (height, panel split, close controls).
  - Sticky contact safe-area spacing added for iOS.
  - Anchor navigation offset fixed globally using scroll-padding-top and scroll-margin-top.
- March 2026 roadmap execution pass:
  - Writing freshness UX implemented end-to-end.
  - Analytics interaction tracking wired to New Relic browser API.
  - Dynamic OG/Twitter card routes added for core pages.
  - Asset + anchor offset smoke checks automated.
