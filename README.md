# Personal Portfolio v2

A modern portfolio website built with Next.js App Router, TypeScript, and Tailwind CSS, deployed on Cloudflare Pages with OpenNext.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- Framer Motion
- Cloudflare Pages + OpenNext (`@opennextjs/cloudflare`)
- EmailJS (contact form)

## Features

- Section-based landing page (hero, experience, case studies, writing, contact)
- Dynamic writing feed via Medium RSS proxy (`/api/writing`)
- Social sharing cards (Open Graph + Twitter image routes)
- Interaction tracking hooks for analytics events
- Anchor-offset handling for fixed navbar hash navigation
- Quality scripts for typecheck, smoke checks, and asset audits

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create local environment file

Create `.env.local` in project root:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_CONTACT_EMAIL=your_email@example.com
```

### 3. Run development server

```bash
npm run dev
```

App will run at http://localhost:3000.

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build
- `npm run start` - run production server locally
- `npm run lint` - run ESLint
- `npm run typecheck` - run TypeScript checks
- `npm run test:smoke` - run anchor-offset smoke test
- `npm run audit:assets` - validate referenced public assets
- `npm run quality:check` - run typecheck, lint, smoke, and asset audit
- `npm run cf:build` - build for Cloudflare/OpenNext
- `npm run cf:deploy` - build and deploy with Wrangler

## Cloudflare Pages Notes

For `NEXT_PUBLIC_*` values, set environment variables in Cloudflare Pages **before** deployment. These values are inlined at build time by Next.js.

If environment variables are changed in Cloudflare Pages, trigger a new deployment so the new values are included in the built bundle.

## Project Structure

- `app/` - routes, pages, API handlers, metadata images
- `components/` - reusable UI and section components
- `lib/` - shared utilities, types, and content data
- `public/` - static assets
- `scripts/` - project utility and validation scripts

## License

Private project. All rights reserved.
