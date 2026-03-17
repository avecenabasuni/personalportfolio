# Roadmap

## Current Focus
- Writing feed freshness UX:
  - Add "Last updated" timestamp near Writing section heading.
  - Add optional manual refresh for dev/testing mode.
- Loading and empty-state polish:
  - Ensure skeleton consistency across all sections.
  - Improve empty-state copy for writing feed and certifications modal.
- Image and file asset audit:
  - Verify all document links and public image paths resolve.
  - Remove any orphaned or unused files from public/.

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

## Completed
- ✅ Mobile responsiveness audit and fixes (March 2026):
  - Navigation: hamburger and close button touch targets increased to 44px.
  - Hero: trace widget container gets `overflow-hidden` for safety.
  - Certifications modal: flex-col split layout on mobile with scrollable list
    panel (max 38% height) and scrollable detail panel (flex-1).
  - Vault modal: close button touch target increased; max-height raised to 90dvh.
  - Experience & CTA PDF modals: iframe height responsive (60vh → 75vh at md+).
  - StickyContact: close button touch target increased; bottom safe-area inset.
  - Footer: social icon buttons increased from 32px to 44px touch targets.
  - dialog.tsx: default close button size standardised to 44px.
  - globals.css: `html { overflow-x: hidden }` confirmed in place.
