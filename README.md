# W74 website

Marketing site for [W74](https://w74.ai) — product & technology for climate and
energy companies.

## Stack

- [Astro](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com), fully static output
- Zero framework JS; one small inline script powers the reveal-on-scroll animations
  (no-JS and `prefers-reduced-motion` safe)
- Self-hosted Space Grotesk variable font; system stacks for body and mono
- Deployed on Netlify: auto-deploys `main`, handles the contact form
  (Netlify Forms + honeypot) and redirects

## Structure

| Route | Content |
| --- | --- |
| `/` | Hero · metrics bar · focus areas (`#work`) · demo apps · team (`#team`) · CTA |
| `/request` | Calendly embed + contact form |
| `/request/thanks` | Form success page (noindex) |

Key source files:

- `src/layouts/Base.astro` — head/meta/OG, nav, footer, reveal script
- `src/data/pillars.ts`, `src/data/team.ts` — all pillar/case-study/team content
- `src/components/LoadCurve.astro` — the hero baseline-vs-actual chart (hand-authored SVG)
- `src/styles/global.css` — design tokens (`@theme`) and reveal styles
- `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts` — generated at build time

`astro.config.mjs` derives `site` from Netlify's `URL` env var, so canonical/OG/sitemap
URLs always match the primary domain; it falls back to `https://www.w74.io` for
local builds.

## Development

```sh
npm install
npm run dev      # dev server
npm run build    # static build to dist/
```
