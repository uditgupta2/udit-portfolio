# Portfolio TODO

Last updated: 14 October 2026

## Start here next time

1. Run the portfolio and review every page in both themes:

   ```bash
   npm ci
   npm run dev
   ```

2. Review the wording in [`src/data/portfolio.ts`](src/data/portfolio.ts), especially the product assignment of the resume achievements listed below.
3. Replace approved placeholder artwork as screenshots and personal photographs become available.
4. Choose a host and domain, then complete the release checklist.

## Current baseline

- [x] Responsive React, TypeScript, Vite, and Tailwind implementation
- [x] React Router home, project-detail, and not-found routes
- [x] CaseFox, MatterSuite, and RoosterCal content from the resume and supplied notes
- [x] Light/dark alpine scenes and persisted theme preference
- [x] GSAP scroll effects, reduced-motion support, and motion control
- [x] LinkedIn, email, phone, public product links, and resume download
- [x] Unit, routing, responsive, keyboard, download, and automated accessibility checks
- [x] Metadata, favicon, and social-preview image

## Content review

- [ ] Confirm which product owns each resume achievement: analytics dashboards, React/Node upgrades, Webpack-to-Vite migration, AI appointment booking, intelligent search, Storybook library, and Docker lifecycle.
- [ ] Review all project copy for confidential or employer-sensitive details before publishing.
- [ ] Confirm that “3.5+ years” should remain current or replace it with a date-derived phrase.
- [ ] Confirm whether the employer name and location should remain exactly as shown in the resume.
- [ ] Proofread the final résumé and replace `public/Udit_Gupta_Resume.pdf` if a newer version is available.

## Real media

- [ ] Add approved CaseFox and MatterSuite product screenshots.
- [ ] Add optional RoosterCal screenshots that are safe to show while it is in development.
- [ ] Add Udit's travel photographs and optional portrait.
- [ ] Replace each illustration only when the corresponding real asset exists; keep the “illustrative interface concept” labels otherwise.
- [ ] Compress screenshots and photographs, provide useful alternative text, and verify mobile crops.

## Release

- [ ] Select hosting and the production domain.
- [ ] Configure the host to serve static files first and rewrite application routes to `/index.html`.
- [ ] Add the canonical URL and absolute Open Graph image URL to `index.html`.
- [ ] Run the full verification set:

  ```bash
  npm run format:check
  npm run test
  npm run lint
  npm run build
  npm run test:e2e
  ```

- [ ] Test the production deployment on a real phone and desktop, including direct visits to every `/projects/:slug` route.
- [ ] Run Lighthouse against the hosted site and address material accessibility, performance, SEO, or layout-shift findings.
- [ ] Verify LinkedIn, email, phone, product links, résumé download, theme persistence, and reduced motion on the live URL.
- [ ] Publish, then record the final URL and deployment notes below.

## Deployment record

- Production URL: _Not selected_
- Hosting provider: _Not selected_
- Last deployed: _Not deployed_
- Last verified commit/version: _Not recorded_

## Later ideas

These are optional and should wait until the content and deployment are complete.

- [ ] Add more project metrics only when they can be verified.
- [ ] Add a photography gallery only when enough personal images are available.
- [ ] Add analytics only if there is a clear question to answer and a privacy-conscious provider is selected.
- [ ] Add a contact form only if direct email is no longer sufficient.
