/** The four W74 pillars — shared by the homepage and /projects. Copy is final per BUILD_SPEC.md. */
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
  },
] as const;
