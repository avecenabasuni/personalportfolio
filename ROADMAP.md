# Roadmap

## Current Focus
- Improve writing feed freshness UX:
  - Add "Last updated" timestamp near Writing section.
  - Add manual refresh action for dev/testing mode.
- Add loading and empty-state polish:
  - Skeleton consistency across sections.
  - Better empty-state copy for writing and certifications.
- Add image and file asset audit:
  - Verify all document links and images resolve.
  - Remove unused files from public folders.
- Add analytics observability for portfolio behavior using New Relic:
  - Track click-through on case studies, writing links, resume, and thesis.
  - Add simple event taxonomy and dashboard views.
- Add lightweight CMS workflow:
  - Keep static-first architecture but allow easier non-code updates.
- Improve SEO depth:
  - Add per-section structured data enhancements.
  - Add auto-generated social cards for selected pages.

## Near Term (1-2 weeks)
- Improve writing feed freshness UX:
  - Add "Last updated" timestamp near Writing section.
  - Add manual refresh action for dev/testing mode.
- Add loading and empty-state polish:
  - Skeleton consistency across sections.
  - Better empty-state copy for writing and certifications.
- Add image and file asset audit:
  - Verify all document links and images resolve.
  - Remove unused files from public folders.

## Short Term (2-4 weeks)
- Improve performance:
  - Add route-level caching strategy notes and tuning for API routes.
  - Optimize largest images with explicit sizes and responsive variants.
- Accessibility pass:
  - Confirm keyboard focus states for all dialogs and buttons.
  - Add aria-labels where icon-only controls exist.
  - Validate heading hierarchy across sections.
- Content modularization:
  - Move long section copy into structured data files for easier updates.

## Mid Term (1-2 months)
- Add analytics observability for portfolio behavior using New Relic:
  - Track click-through on case studies, writing links, resume, and thesis.
  - Add simple event taxonomy and dashboard views.
- Add lightweight CMS workflow:
  - Keep static-first architecture but allow easier non-code updates.
- Improve SEO depth:
  - Add per-section structured data enhancements.
  - Add auto-generated social cards for selected pages.

## Engineering Quality
- Add tests:
  - Unit tests for writing date/description formatting helpers.
  - Component tests for dialogs and section rendering.
- Add CI quality gates:
  - Build, lint, and typecheck on every push.
- Add changelog discipline:
  - Keep a concise release note entry per UI/content change.
