# W74.io Rebuild — Build Spec for Claude Code

## Goal

Replace the current Squarespace site at https://www.w74.io with a fast, static four-page marketing site, deployed to Netlify. All copy below is final — do not rewrite it. If something reads wrong, flag it in your summary instead of changing it.

W74 is a product & technology firm serving climate and energy companies (ML energy forecasting, IPMVP measurement & verification, production software). The site's job: make a technical buyer believe W74 ships real software, and get them to book an intro call.

## Stack & constraints

- Astro + Tailwind CSS, fully static output. No React app, no CMS.
- Pages at exactly these paths (matching the current site): `/`, `/projects`, `/team`, `/request`.
- Shared layout component for nav + footer.
- Per-page `<title>` and meta description (provided below), OpenGraph tags, sitemap.xml, robots.txt, favicon placeholder.
- Netlify: include `netlify.toml`. Contact form uses Netlify Forms with a honeypot field.
- Performance: minimal JS (none expected), self-host at most one webfont family (two weights max), target Lighthouse ≥95 on all four pages.
- Accessibility: semantic HTML, alt text everywhere, visible focus states, WCAG AA contrast, `prefers-reduced-motion` respected.

## Design direction

Inspiration: https://www.gravityclimate.com/ — borrow the feel, not the layout. What to take from it: generous whitespace; large confident headlines; stat-led proof (big number, small label); alternating two-column feature sections; small capability chips (plain text labels) under section headings; product screenshots as the visual anchors instead of stock photography; one strong primary CTA repeated ("Book an intro call").

Also carry over the visual language of the W74 overview PDF (in repo assets if present): the 01–04 numbered pillar labels and the horizontal metrics bar. The numbering is part of W74's existing materials — keep it.

Rules of taste:

- Near-white background, near-black ink, ONE accent color from the energy/climate world (deep green–teal family). No purple gradients, no dark-mode-with-acid-green, no cream-paper-with-terracotta-serif — these read as AI template defaults.
- Typography: a characterful grotesk for display (e.g., Space Grotesk, Instrument Sans, or similar — not default-Inter-everywhere) paired with a clean body face or system stack. Tight tracking on headlines.
- Signature element (the one memorable thing): a subtle SVG energy load-curve motif — an "actual vs. weather-normalized baseline" line pair, which is literally what M&V looks like. Use it once, prominently (hero or metrics band background). Keep everything else quiet.
- No stock photos anywhere.

**Process checkpoint:** before writing any page code, produce a short design plan — 4–6 named hex tokens, the type pairing, and a one-paragraph description of the signature element — and show it for approval. Then build to that plan.

## Sitewide

Nav: "W74" text wordmark (left) · Projects · Team · [Book an intro call] button → /request. Nothing else. No cart.

Footer: W74 Ventures LLC · info@w74.io · LinkedIn (TODO: company URL) · "Download the W74 overview (PDF)" → /assets/w74-overview.pdf · © 2026 W74 Ventures, LLC.

Placeholder assets — create the paths, mark each with a visible TODO comment, and list them all in your final summary:

- /assets/w74-overview.pdf
- /assets/sample-mv-report.pdf
- /assets/sample-ecm-summary.pdf
- Demo app screenshots (2) for the "Try what we build" cards
- Team headshots (4) — use initials avatars until provided
- Favicon / logo file
- Cal.com or Calendly embed URL on /request
- LinkedIn company URL in footer

---

## Page: Home (`/`)

Title: `W74 — Product & Technology for Climate and Energy Companies`
Meta description: `W74 partners with climate and energy companies to validate performance, reduce energy and OpEx, build better products, and accelerate growth — through fixed-scope projects or embedded fractional support.`

Sections in order:

### 1. Hero

H1: `Accelerate your climate work`

Sub: `W74 partners with climate & energy companies to validate performance, reduce energy and OpEx, build better products, and accelerate growth — as fixed-scope projects or embedded fractional support.`

Primary CTA: `Book an intro call` → /request. Secondary: `See our work →` → /projects.

### 2. Metrics bar

Four stats, big numbers, small labels:

- `$17M+` — Energy savings delivered
- `200+` — Properties analyzed & monitored
- `$8M+` — Revenue growth driven
- `$150M+` — Venture financing supported

Footnote (small, muted): `Cumulative figures across W74 client engagements and W74 team-led work.`

### 3. What we do — four pillars

Numbered 01–04. Each: heading, 1–2 sentence blurb, capability chips, and a `See the work →` link to the matching /projects anchor.

**01 · Validate Performance** (→ /projects#validate)
Prove what your technology delivers: IPMVP-grade measurement & verification, weather-normalized baselines, and ongoing monitoring that quantifies energy, cost, and GHG savings.
Chips: M&V (IPMVP) · Weather-Normalized Baselines · Monitoring & Fault Detection · HVAC & Energy System Analysis · Performance Reporting

**02 · Reduce Energy & OpEx** (→ /projects#reduce)
Turn utility data into a payback-ranked roadmap: virtual energy audits, ECM identification and prioritization, load forecasting, and incentive and ROI analysis.
Chips: Virtual Energy Audits · Utility Bill Analysis · ECM Identification & Prioritization · Energy Modeling & Load Forecasting · Incentive, Payback & ROI Analysis

**03 · Build Better Products** (→ /projects#build)
We design and ship production software: time-series forecasting models, ML-powered product features, and the customer-facing dashboards and web apps that put them in users' hands.
Chips: Product & UX Design · Customer-Facing Reports · Web Apps & Dashboards · ML-Powered Features · Prototype → Production

**04 · Accelerate Growth** (→ /projects#grow)
Fundraising and pitch support, go-to-market and product strategy, pilot planning and hands-on delivery, and introductions to investors and customers.
Chips: Fundraising & Pitch Support · Investor & Customer Introductions · GTM & Product Strategy · Pilot Planning & Delivery · Field Playbooks

### 4. Try what we build

Intro line: `Working demos, not slideware.`

Two cards, each with a screenshot placeholder, one-line description, and a `Launch demo →` button (opens new tab):

- **Energy Forecast App** — Interactive demo of W74's ML load forecasting. → https://w74-forecast.streamlit.app/
- **M&V App** — Interactive demo of W74's measurement & verification workflow. → https://w74-energy.streamlit.app/

<!-- TODO: confirm the two URLs map to the right cards before launch -->

### 5. How we work

Lead line: `We take on work in two shapes.`

**Fixed-scope projects**
You bring a defined problem; we deliver a defined outcome — scoped, priced, and run independently. That's how we built Bedrock Energy's performance validation framework, and why they've kept us on for ongoing monitoring.

**Embedded fractional support**
We join your team as fractional product and engineering leadership, and the work moves with your priorities. At Jane Energy, that's meant everything from training and building ML models to identifying energy conservation measures (ECMs) for their customers as part of pilot delivery.

Closing line: `Both start the same way: a conversation with your team, a review of your docs and data, and a scoped proposal — usually within a couple of weeks. From kickoff, you get a standing weekly cadence and direct access to the people doing the work.`
<!-- TODO: confirm timing promises (couple of weeks / weekly cadence) before launch -->

### 6. Closing CTA band

`Ready to get started?` + [Book an intro call] + `info@w74.io`

---

## Page: Projects (`/projects`)

Title: `Projects & Case Studies — W74`
Meta description: `Selected W74 engagements across performance validation, energy & OpEx reduction, product development, and growth.`

H1: `Selected work`
Intro line: `Four kinds of problems we solve, and the engagements behind them.`

Four sections mirroring the homepage pillars, with anchors `#validate`, `#reduce`, `#build`, `#grow`. Each section: numbered heading, services line (the chips from home, as a muted text row), then case study cards.

### 01 · Validate Performance (`#validate`)

- **Bedrock Energy (Series A)** — Designed and implemented the performance validation framework that quantifies the energy, cost, and GHG savings of Bedrock's ground-source heat-pump technology — and continue to provide ongoing performance monitoring.
- **Leading California health system** — ML-based IPMVP Option C M&V deployed across a $16B+ health system's 50+ properties.
- Link: `View a sample M&V report (PDF) →` /assets/sample-mv-report.pdf

### 02 · Reduce Energy & OpEx (`#reduce`)

- **Accenture Smart Buildings†** — Ongoing fault detection & HVAC optimization across 150+ properties in a global smart-buildings portfolio.
- **Jane Energy (Seed)** — Virtual energy audits across multifamily, commercial, and industrial portfolios — including several REIT owners — identifying savings of 25–30% of utility spend per property from utility bills, permits, and weather data, delivered as a prioritized quick-wins-vs-capex roadmap.

### 03 · Build Better Products (`#build`)

- **Jane Energy (Seed)** — Accelerated the design of Jane's enterprise app and customer-facing ECM summaries.
- **W74 Apps** — Built our own forecasting and M&V applications. Try them: Energy Forecast App (https://w74-forecast.streamlit.app/) · M&V App (https://w74-energy.streamlit.app/)
- Link: `View a sample ECM summary (PDF) →` /assets/sample-ecm-summary.pdf

### 04 · Accelerate Growth (`#grow`)

- **Jane Energy (Seed)** — Partnered with Jane to close their seed round — strategy, pitch deck, and investor introductions — then provided hands-on delivery for their first customer pilots. We continue making introductions to prospective enterprise customers.
- **Stealth HVAC analytics startup (Pre-seed)** — Guided the raise, sharpened the pitch deck and product strategy, and delivered initial fault-detection recommendations.

Page footer notes (small, muted):

`† Work led by W74 team members at Accenture, prior to W74.`
`References & introductions available on request.`

---

## Page: Team (`/team`)

Title: `Team — W74`
Meta description: `The W74 team: energy, AI, and product leaders from Google, Meta, C3 AI, Accenture, MIT, and Stanford.`

H1: `Team`

Four members. Each: headshot placeholder (initials avatar), name, role, LinkedIn link, bio. Port these verbatim:

**Bradley Joseph — Founder & CEO** · https://www.linkedin.com/in/bradleyjosephv/
Bradley has spent 17+ years helping companies build energy-centric products and technology. His experience includes leadership roles at Google Sidewalk Labs, C3 AI, Accenture, BlocPower, and Carbon Lighthouse, spanning AI, building decarbonization, and energy analytics. He holds an M.S. in Building Technology with a focus on Machine Learning from MIT and a B.S. in Mechanical Engineering with a concentration in Power Generation from the University of Illinois Urbana-Champaign.

**Michael Ashida — Partner** · https://www.linkedin.com/in/michaelashida/
Michael is a Climate Tech leader with 10+ years of experience helping tech companies develop, manage, and scale their climate products and sustainability initiatives. His professional work includes time with Meta's Climate Product team, GitHub, and Accenture Smart Buildings. He holds an MBA from the University of Chicago's Booth School of Business and a B.S. in Mechanical Engineering from the University of Illinois Urbana-Champaign.

**Mike Jermann — AI Advisor** · https://www.linkedin.com/in/mjermann/
Mike is a Sr. Machine Learning Engineer at a Silicon Valley tech company with deep expertise in Data Analytics and Software Engineering. Previously, he worked at Google, Uptake, and Venmo. He graduated with an M.S. in Computer Science from Stanford and holds a B.S. in Electrical Engineering.

**James Guo — Data Scientist** · https://www.linkedin.com/in/zhongyi-guo/
James is a data scientist building next-generation models for energy systems. Prior to W74, he worked as a biomedical researcher in academia, applying machine learning and data visualization techniques to identify patterns and data-driven insights. He holds a B.S. in Statistics and Biology from Cornell University and an M.S. in Epidemiology and Clinical Research from Stanford University.

If the current live /team page lists anyone not shown above, do not add them — flag it in your summary.

---

## Page: Request (`/request`)

Title: `Book an intro call — W74`
Meta description: `Start a conversation with W74 — a 30-minute intro call to scope what you're trying to prove or ship.`

H1: `Book an intro call`

Sub: `Tell us what you're trying to prove or ship. The first call is 30 minutes; if there's a fit, you'll have a scoped proposal within a couple of weeks.`

1. Scheduling embed block — TODO placeholder for Cal.com/Calendly embed, clearly marked.
2. Netlify contact form (name `contact`, honeypot field): Name · Company · Email · "What are you trying to prove or ship?" (textarea). Submit button: `Send`. Success state: `Thanks — we'll reply within one business day.` <!-- TODO: confirm the one-business-day promise -->
3. Alt contact line: `Prefer email? info@w74.io`

---

## Build order

1. Scaffold Astro + Tailwind. Commit.
2. Design plan checkpoint (tokens, type, signature element) — show for approval before page code.
3. Layout component (nav/footer) + tokens. Commit.
4. Pages: home → projects → team → request. Commit each.
5. Meta/OG/sitemap/robots/netlify.toml. Commit.
6. Build and review every page at 375px and 1280px widths; fix overflow and contrast issues.
7. Final summary: list every TODO placeholder and anything you flagged.

## Rules

- Copy is final. Fix obvious typos only; flag anything else rather than rewriting.
- Do not invent clients, metrics, testimonials, logos, or team members beyond what's in this spec.
- Keep the Accenture dagger (†) disclosure attached wherever that case study appears.
- All external links (demos, LinkedIn) open in a new tab.
