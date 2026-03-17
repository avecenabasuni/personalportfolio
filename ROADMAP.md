# Roadmap

## Phase 1 (Next 1-2 Weeks)

- Writing feed freshness:
  - Add "Last updated" timestamp beside Writing heading.
  - Add manual refresh trigger for dev/testing mode.
- Loading and empty-state polish:
  - Unify skeleton style and spacing across home and detail pages.
  - Improve fallback copy for writing and certifications.
- Asset hygiene:
  - Audit all document/image links under public/.
  - Remove unused files and add naming convention for new assets.

## Phase 2 (Next 2-4 Weeks)

- Navigation and in-page UX hardening:
  - Add regression checks for anchor offset with fixed navbar.
  - Add hash-navigation E2E coverage for mobile and desktop.
- Performance and rendering:
  - Tune route caching for writing API and long pages.
  - Add responsive image sizing strategy for large visual sections.
- Accessibility pass:
  - Verify keyboard focus across dialogs, menu, and sticky actions.
  - Validate heading hierarchy and landmark semantics.

## Phase 3 (Next 1-2 Months)

- Analytics and observability:
  - Define event taxonomy for case study clicks, writing clicks, resume/thesis opens, and contact actions.
  - Build dashboard views for engagement and conversion flow.
- Content workflow:
  - Move long section content to structured data files for safer non-UI edits.
  - Add content lint checks for broken links and missing metadata.
- SEO depth:
  - Expand structured data coverage per important page.
  - Add generated social cards for case studies and writing pages.

## Engineering Quality

- Testing:
  - Unit tests for writing date/description formatting helpers.
  - Component tests for dialogs, navbar menu, and section rendering.
- CI gates:
  - Build, lint, and typecheck on every push.
  - Add a smoke test for anchor navigation offsets.
- Release discipline:
  - Keep concise release notes per UX/content change.

## Completed

- March 2026 responsiveness and navigation fixes:
  - Mobile touch targets increased to 44px for key controls.
  - Hero trace widget made full-width on mobile.
  - Mobile modal usability improved (height, panel split, close controls).
  - Sticky contact safe-area spacing added for iOS.
  - Anchor navigation offset fixed globally using scroll-padding-top and scroll-margin-top.
