# Udit Gupta — Engineer & Explorer

A responsive portfolio with an original alpine landscape, light/dark scenes, project stories, and content drawn from Udit's resume and project descriptions.

Continue from the prioritized [portfolio TODO](TODO.md) in the next session.

## Run locally

Use Node.js 22.12+ (or a compatible newer version).

```bash
npm ci
npm run dev
```

Open the URL Vite prints. No API keys or backend are required.

## Stack

- React + TypeScript and Vite
- React Router for `/`, `/projects/:slug`, and a not-found page
- Tailwind CSS with its Vite plugin, theme tokens, and component-specific CSS
- GSAP ScrollTrigger and `@gsap/react` for scoped, lifecycle-managed animation
- Local Manrope and Fraunces fonts; Lucide icons
- Vitest, Testing Library, Playwright, and axe for verification

## Architecture

```text
src/
  data/portfolio.ts       Typed profile, projects, experience, and skills
  features/preferences/  Persistent theme and motion preferences
  hooks/                 Media queries and document titles
  components/
    layout/              Navigation, footer, and route effects
    sections/            Independently maintained home-page sections
    projects/            Shared project cards and illustrative previews
    scenery/             Original SVG landscape and journal illustrations
    ui/                  Small shared presentation elements
  pages/                 Route composition and project stories
  styles/                Tokens and styles organized by responsibility
  test/                  Unit-test setup
```

Components have focused responsibilities, receive typed inputs, and share content rather than duplicating project copy. The preferences provider owns browser persistence; scenery consumes its public state. There are no service/repository abstractions for this static content.

## Content

Edit `src/data/portfolio.ts` for contact information, project narratives, experience, and skills. Section-level introduction and hobby copy is in `src/components/sections/`.

- CaseFox and MatterSuite are live; RoosterCal is in development.
- Achievements without a clear product assignment remain under overall experience.
- Product websites were verified at https://www.casefox.com/ and https://www.mattersuite.com/.
- Product previews are labeled interface concepts, not production screenshots; their example data is illustrative.
- Travel/camera graphics are original illustrations, not claims about Udit's photographs or destinations.
- The supplied resume is served at `public/Udit_Gupta_Resume.pdf`.
- Original animation guidance: https://github.com/greensock/gsap-skills (React and ScrollTrigger skills).

## Verification

```bash
npm run test
npm run lint
npm run build
npm run format:check
```

For browser tests, install Chromium once:

```bash
npx playwright install chromium
npm run test:e2e
```

Playwright starts a local server on port 5174 or reuses an existing one outside CI. `PLAYWRIGHT_CHROMIUM_EXECUTABLE` can point to an already installed compatible Chromium executable. Screenshots and failure traces go to the ignored `test-results/` directory.

Checks cover system/saved theme precedence, storage failures, motion preferences, navigation and direct route refresh, contact actions, the PDF download, responsive overflow, and automated light/dark accessibility. Automated accessibility checks complement manual keyboard and visual inspection; they do not establish complete accessibility conformance.

## Motion and accessibility

Theme follows the OS until a visitor makes a choice; that choice survives reloads. The theme is initialized before first paint. Motion honors `prefers-reduced-motion`, can be paused, and decorative loops pause when the scene leaves the viewport. GSAP contexts are scoped and reverted on cleanup. Native scrolling, visible keyboard focus, a skip link, and meaningful navigation labels are retained.

## Production

`npm run build` writes the static site to `dist/`. Configure the host to rewrite non-file requests to `/index.html` so React Router project URLs work when opened directly. Serve real static files (including the PDF) before the fallback.

Publishing is a separate step from this local implementation. Once a domain is selected, add its canonical URL and an absolute social-preview URL in `index.html`. Personal photos and production screenshots can replace the current illustrations later. No analytics, forms, or third-party requests are needed for the portfolio to work.
