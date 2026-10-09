# Eyedence company website

A responsive product introduction built with React, TypeScript and Vite. It has no backend, analytics, external fonts or customer-data connection. Product examples use explicitly labelled fictional records.

## Local development

Use Node.js 24 LTS and npm:

```sh
npm ci
npm run dev
```

On NixOS, use a temporary environment when Node is not installed:

```sh
nix-shell -p nodejs_24
npm ci
npm run dev
```

## Build and preview

```sh
npm run build
npm run preview
```

Vite produces `dist/`. Only that directory is intended for publication. Development source, tests and this documentation are not deployed.

## Browser checks

```sh
CHROME_BIN=/path/to/chrome npm test
```

The test configuration defaults to this workstation's NixOS Chrome wrapper. Supply `CHROME_BIN` on another machine. Tests cover section navigation, keyboard-operated product tabs, mobile/tablet/desktop overflow, browser errors and automated WCAG A/AA checks. Screenshots are written to the ignored `test-results/` directory. Automated accessibility checks do not replace a full manual audit.

## Publish on Vercel

1. Push this repository to `RevOpsService/revops-company-website` when ready.
2. Import it into Vercel using an account/plan suitable for its use.
3. Select Vite, repository root, Node.js 24.x, install command `npm ci`, build command `npm run build`, and output directory `dist`. The committed `vercel.json` supplies the build/output settings.
4. Preview the deployment, then connect the chosen production domain.

No environment variables or runtime functions are required. Publication and account configuration are separate from local implementation.

**Plan suitability:** Vercel documents Hobby as personal, non-commercial use only. Do not assume a company marketing site qualifies because it is static. Check the current [Hobby terms](https://vercel.com/docs/plans/hobby) before publication and choose the appropriate plan. Static `dist/` output can also be hosted elsewhere.

## Content and maintenance

- `src/App.tsx`: page sections and product copy.
- `src/ProductPreview.tsx`: fictional interactive product example.
- `src/styles.css`: shared colours, typography and responsive layouts.
- `public/favicon.svg`: original Eyedence mark.
- `index.html`: page title and social/description metadata.
- `alef-docs/implementation.md`: scope and verification record.

All navigation has local destinations. There is deliberately no fabricated email, booking link, privacy-policy placeholder, testimonial or performance claim. Add owner-approved contact details before introducing a contact CTA. Add a canonical URL and an absolute social image URL when the public domain is known.

The initial design uses system fonts and original SVG/CSS illustrations. No third-party images are required.
