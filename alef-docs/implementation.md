# Eyedence website implementation plan

Goal: a complete, locally verified product introduction in React, TypeScript and Vite.

Spec: the owner-approved design in `/git/alef/alef-docs/plans/2026-10-09-eyedence-website-design.md`, amended by the owner's subsequent React/Vite selection and explicit instruction to implement.

## Constraints

British English; no invented customers, performance claims or contact details. No backend, external requests, billing changes or deployment. Illustrative product data must be labelled. Static output is `dist/`.

## Tasks

- [x] Build responsive components in `src/App.tsx`, styling in `src/styles.css`, and local SVG identity in `public/`.
- [x] Add Vite/TypeScript/Vercel configuration and reproducible npm lockfile.
- [x] Verify navigation, responsive layout, keyboard access, reduced motion, and accessibility with browser checks; build and review production output.
- [x] Document local use, Vercel publication constraints and remaining publication inputs.

## Review focus

Narrow screens must not overflow. Every visible CTA must work. Product illustrations must not imply live customer evidence. Focus must be visible. Public output must not include project documentation.

## Execution record

Ruling: implement directly in the explicitly designated empty repository; no isolation copy is needed. The owner has authorised implementation after design review and stack selection, so no further design approval is requested.


## Verification — 2026-10-09

- `npm run build` passed: TypeScript checking and Vite production output.
- `npm test -- --reporter=line` passed all four Playwright tests: navigation and keyboard-operated tabs, plus layout and automated WCAG A/AA checks at 360, 768 and 1440 pixels.
- Initial contrast failures were corrected by darkening secondary text; the subsequent accessibility checks passed.
- Desktop and mobile screenshots were inspected. Independent final review found no actionable defects.
- `git diff --check` passed. Dependencies, build output and browser artefacts are ignored.

Automated accessibility checks are not a full manual audit. Browser checks ran against the development server; the production bundle was built successfully. No deployment, push or billing change was performed. Contact details and the production domain remain owner-provided publication inputs.
