# PM-Test – Obermind Front-End Technical Task

Landing page implementation of the Premier Markets home screen from the provided Figma design. Built with React, Vite, Tailwind CSS (v4), and TypeScript, with linting and formatting enforced through ESLint + Prettier and Husky pre-commit hooks.

## Features

- Pixel-faithful recreation of the Figma home page (header, hero, market access, services, empower, withdrawals, updates, reviews, CTA, footer).
- Responsive layout tailored to desktop and mobile; mobile nav with animated hamburger.
- Componentized sections in `src/components` and composition via `src/pages/Home/Home.tsx`.
- Data-driven testimonials via `src/data/reviews.ts`.
- Utility-first styling with Tailwind CSS v4 and a shared brand color token.

## Requirements

- Node.js 18+ (Vite 7 and React 19 compatible).
- npm (included with Node).

## Quick start

```sh
npm install          # install dependencies
npm run dev          # start Vite dev server (default: http://localhost:5173)
```

## Scripts

- `npm run dev` – start the dev server with HMR.
- `npm run build` – type-check (`tsc -b`) and create a production build in `dist/`.
- `npm run preview` – serve the production build locally.
- `npm run lint` – run ESLint with Prettier formatting checks.
- `npm run prepare` – install Husky git hooks (runs automatically on install).

## Project structure

- `src/main.tsx` – React entry point.
- `src/App.tsx` – wraps the page in the brand background.
- `src/pages/Home/Home.tsx` – assembles the landing page sections.
- `src/components/` – UI sections (Header, Hero, Services, Reviews, Footer, etc.).
- `src/data/reviews.ts` – testimonial content used by the Reviews section.
- `src/style.css` – Tailwind layer import, custom theme tokens, and base font.
- `public/` – static assets (icons, imagery, logo) served as-is by Vite.

## Styling and theming

- Tailwind CSS v4 via `@tailwindcss/vite`; primary brand color declared in `src/style.css` as `--color-brand`.
- Global font loaded from Google Fonts (`Urbanist`) in `index.html`.
- Prettier includes `prettier-plugin-tailwindcss` for utility class ordering.

## Tooling

- React 19 + TypeScript 5.9 with strict linting (`eslint.config.js`).
- Husky pre-commit hook (`.husky/pre-commit`) runs `lint-staged` to auto-fix TS/JS/JSON/MD/HTML/CSS via ESLint/Prettier.

## Build and deploy

```sh
npm run build
```

The optimized static assets land in `dist/` and can be deployed to any static host (e.g., Vercel, Netlify, S3, nginx).

## Notes

- No runtime environment variables are required.
- Assets referenced from `public/` use root-relative paths (e.g., `/icons/...`, `/images/...`). Ensure your deploy serves the app from the site root or configure a base path in `vite.config.ts` if hosting under a subdirectory.

## Assumptions made

- Single-page landing experience; no routing or auth flows required.
- Asset set from Figma/public folder is complete and can be referenced with root-relative paths.
- The brand palette and typography are fixed (Urbanist + provided colors); no theming toggle required.
- Accessibility expectations focus on semantic structure and reasonable keyboard use for the nav and CTAs, without full WCAG audit scope.

## What I would improve with more time

- Add integration tests for key flows (header menu toggle, CTA scroll/links, responsive breakpoints) using Playwright.
- Harden accessibility: ARIA labels on all interactive icons, focus states, contrast audits, and keyboard navigation paths.
- Introduce content management for dynamic sections (reviews, news/updates) via a small CMS or JSON fetch rather than static data.
- Optimize assets (SVGs for icons, compressed images) and add a CI build/test pipeline.
- Consider extracting a small design system layer (buttons, badges, cards) to reduce duplication and improve consistency across future pages.
