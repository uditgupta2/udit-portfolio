# Portfolio working notes

- Keep project claims aligned with `../PORTFOLIO_PLAN.md`, the supplied resume, and the user's corrections. Do not invent project dates, outcomes, or screenshot provenance.
- Edit shared content in `src/data/portfolio.ts`. Keep routing, preferences, scenery, and content presentation separate.
- Follow the existing functional React and TypeScript style. Prefer composition and focused components to speculative abstractions.
- Use Tailwind for layout/utilities and `src/styles/` for theme tokens, artwork, and repeated component treatments.
- Use scoped `useGSAP` animations with cleanup. Honor reduced motion and the visitor's pause control. Never hide essential content behind animation.
- For functional changes, run relevant Vitest tests and `npm run lint` / `npm run build`. Use Playwright for routing, responsive behavior, keyboard interaction, and accessibility changes.
- Run `npm run format` before finishing. Document any checks that could not be completed.
