/**
 * The four W74 pillars with their case studies, shown on the homepage in the
 * W74-overview format (thumbnail left; number, services, clients, prose right).
 * Copy is final per BUILD_SPEC.md; thumbnails extracted from W74_Overview_v11.html.
 */
export const pillars = [
  {
    number: "01",
    id: "validate",
    title: "Validate Performance",
    blurb:
      "Prove what your technology delivers: IPMVP-grade measurement & verification, weather-normalized baselines, and ongoing monitoring that quantifies energy, cost, and GHG savings.",
    chips: [
      "M&V (IPMVP)",
      "Weather-Normalized Baselines",
      "Monitoring & Fault Detection",
      "HVAC & Energy System Analysis",
      "Performance Reporting",
    ],
    thumb: "/assets/pillars/mv.webp",
    thumbAlt: "Sample M&V report — whole-building savings vs. baseline",
    clients: "Bedrock Energy (Series A) | Leading California health system",
    cases: [
      "Designed and implemented the performance validation framework that quantifies the energy, cost, and GHG savings of Bedrock's ground-source heat-pump technology — and continue to provide ongoing performance monitoring.",
      "ML-based IPMVP Option C M&V deployed across a $16B+ health system's 50+ properties.",
    ],
    links: [
      { label: "View a sample M&V report (PDF)", href: "/assets/sample-mv-report.pdf", external: false },
      { label: "Read our ML energy-modeling paper (PDF)", href: "/assets/ml-energy-modeling-paper.pdf", external: false },
    ],
  },
  {
    number: "02",
    id: "reduce",
    title: "Reduce Energy & OpEx",
    blurb:
      "Turn utility data into a payback-ranked roadmap: virtual energy audits, ECM identification and prioritization, load forecasting, and incentive and ROI analysis.",
    chips: [
      "Virtual Energy Audits",
      "Utility Bill Analysis",
      "ECM Identification & Prioritization",
      "Energy Modeling & Load Forecasting",
      "Incentive, Payback & ROI Analysis",
    ],
    thumb: "/assets/pillars/oat.webp",
    thumbAlt: "Energy consumption vs. outdoor air temperature — pre/post-retrofit",
    /* Keep the Accenture dagger (†) disclosure attached wherever this appears. */
    clients: "Accenture Smart Buildings | Jane Energy (Seed)",
    cases: [
      "Ongoing fault detection & HVAC optimization across 150+ properties in a global smart-buildings portfolio.",
      "Virtual energy audits across multifamily, commercial, and industrial portfolios — including several REIT owners — identifying savings of 25–30% of utility spend per property from utility bills, permits, and weather data, delivered as a prioritized quick-wins-vs-capex roadmap.",
    ],
    links: [],
  },
  {
    number: "03",
    id: "build",
    title: "Build Better Products",
    blurb:
      "We design and ship production software: time-series forecasting models, ML-powered product features, and the customer-facing dashboards and web apps that put them in users' hands.",
    chips: [
      "Product & UX Design",
      "Customer-Facing Reports",
      "Web Apps & Dashboards",
      "ML-Powered Features",
      "Prototype → Production",
    ],
    thumb: "/assets/pillars/ecm.webp",
    thumbAlt: "Sample ECM summary — prioritized savings by measure",
    clients: "Jane Energy (Seed) | W74 Apps",
    cases: [
      "Accelerated the design of Jane's enterprise app and customer-facing ECM summaries.",
      "Built our own forecasting and M&V applications. Try them:",
    ],
    links: [
      { label: "View a sample ECM summary (PDF)", href: "/assets/sample-ecm-summary.pdf", external: false },
      { label: "Energy Forecast App", href: "https://w74-forecast.streamlit.app/", external: true },
      { label: "M&V App", href: "https://w74-energy.streamlit.app/", external: true },
    ],
  },
  {
    number: "04",
    id: "grow",
    title: "Accelerate Growth",
    blurb:
      "Fundraising and pitch support, go-to-market and product strategy, pilot planning and hands-on delivery, and introductions to investors and customers.",
    chips: [
      "Fundraising & Pitch Support",
      "Investor & Customer Introductions",
      "GTM & Product Strategy",
      "Pilot Planning & Delivery",
      "Field Playbooks",
    ],
    thumb: "/assets/pillars/mep.webp",
    thumbAlt: "Field data-collection guide — pilot delivery enablement",
    clients: "Jane Energy (Seed) | Stealth HVAC analytics startup (Pre-seed)",
    cases: [
      "Partnered with Jane to close their seed round — strategy, pitch deck, and investor introductions — then provided hands-on delivery for their first customer pilots. We continue making introductions to prospective enterprise customers.",
      "Guided the raise, sharpened the pitch deck and product strategy, and delivered initial fault-detection recommendations.",
    ],
    links: [],
  },
] as const;
