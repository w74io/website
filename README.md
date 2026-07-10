# W74 website

Marketing site for [W74](https://w74.ai) — product & technology for climate and
energy companies. Replaces the previous Squarespace site.

## Stack

- [Astro 5](https://astro.build) + [Tailwind CSS 4](https://tailwindcss.com), fully static output
- Zero framework JS; one ~20-line inline script powers the reveal-on-scroll animations
  (no-JS and `prefers-reduced-motion` safe)
- Self-hosted Space Grotesk variable font (`public/fonts/`); system stacks for body and mono
- Netlify: auto-deploys `main`, handles the contact form (Netlify Forms + honeypot) and redirects

## Structure

The site is effectively one page plus a request page:

| Route | Content |
| --- | --- |
| `/` | Hero (M&V load-curve motif) · colored metrics bar · **W74 Focus Areas** (4 pillars with case studies, `#work`, anchors `#validate/#reduce/#build/#grow`) · demo apps · team (`#team`) · CTA |
| `/request` | Calendly embed (plain iframe, no widget JS) + Netlify contact form |
| `/request/thanks` | Form success page (noindex) |

`/projects` and `/team` were merged into the homepage; `netlify.toml` 301-redirects them
to `/#work` and `/#team`.

Key source files:

- `src/layouts/Base.astro` — head/meta/OG, nav, footer, reveal script
- `src/data/pillars.ts`, `src/data/team.ts` — all pillar/case-study/team content
- `src/components/LoadCurve.astro` — the signature baseline-vs-actual chart (hand-authored SVG)
- `src/styles/global.css` — design tokens (`@theme`) and reveal styles
- `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts` — generated at build time

## Domains & URLs

`astro.config.mjs` derives `site` from Netlify's `URL` env var, so canonical/OG/sitemap
URLs always match the primary domain (currently **w74.ai**; falls back to
`https://www.w74.io` for local builds). Changing the primary domain in Netlify requires
no code change — just a redeploy.

## Design

Palette and type come from the W74 overview doc (`W74_Overview_v11.html`) and the logo
kit (`public/assets/W74_Logo_Kit_v02/` — see its README for usage rules): paper
`#FCFCFA`, ink `#15151C`, pine `#2E7D52` accent, with indigo `#4338CA` and amber
`#C2710F` reserved for the metrics bar and pillar numbers. Display face is Space
Grotesk; chips/labels/stat notes use the system mono stack.

## Development

```sh
npm install
npm run dev      # dev server
npm run build    # static build to dist/
```

Original build requirements: `BUILD_SPEC.md` (note: the four-page structure it
describes was later consolidated into the single-page layout above at Bradley's
direction; copy rules still apply).

## Content workflow

- Bradley supplies binary assets via public Google Drive links (stable across file
  updates) — download, convert (headshots/screenshots → WebP), and commit.
- Demo-app cards use frozen screenshots of the live Streamlit apps
  (`w74-forecast.streamlit.app`, `w74-energy.streamlit.app`) — re-capture if the apps
  change materially.
- The sample ECM summary PDF is a PNG mockup wrapped as a PDF — replace when a real
  report exists.

## Outstanding before w74.io cutover

- [ ] "How we work" section copy (removed pending Bradley's rewrite; layout is in git
      history at commit `094afda`)
- [ ] Confirm copy promises: "reply within one business day" (/request/thanks),
      "scoped proposal within a couple of weeks" (/request)
- [ ] Point `www.w74.io` DNS from Squarespace to Netlify and set the preferred
      primary domain
