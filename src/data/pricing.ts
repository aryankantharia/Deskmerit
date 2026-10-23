export type PlanCell = boolean | string;

export type CurrencyCode = "INR" | "USD" | "AED" | "AUD";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  region: string;
  interviewRate: number; // rate per interview for calculator
  voiceRate: number; // rate per voice screening call
  rates: {
    starter: { monthly: number; annual: number };
    growth: { monthly: number; annual: number };
    enterprise: { monthly: number; annual: number };
  };
}

export const currencies: Record<CurrencyCode, CurrencyConfig> = {
  INR: {
    code: "INR",
    symbol: "₹",
    name: "INR (₹)",
    region: "India",
    interviewRate: 150,
    voiceRate: 35,
    rates: {
      starter: { monthly: 149, annual: 119 },
      growth: { monthly: 249, annual: 199 },
      enterprise: { monthly: 449, annual: 359 }
    }
  },
  USD: {
    code: "USD",
    symbol: "$",
    name: "USD ($)",
    region: "US & Global",
    interviewRate: 2.0,
    voiceRate: 0.45,
    rates: {
      starter: { monthly: 2.5, annual: 2.0 },
      growth: { monthly: 4.0, annual: 3.2 },
      enterprise: { monthly: 7.0, annual: 5.6 }
    }
  },
  AED: {
    code: "AED",
    symbol: "AED ",
    name: "AED (د.إ)",
    region: "Middle East",
    interviewRate: 7.5,
    voiceRate: 1.6,
    rates: {
      starter: { monthly: 9.5, annual: 7.6 },
      growth: { monthly: 15.0, annual: 12.0 },
      enterprise: { monthly: 26.0, annual: 20.8 }
    }
  },
  AUD: {
    code: "AUD",
    symbol: "A$",
    name: "AUD (A$)",
    region: "Australia / NZ",
    interviewRate: 3.2,
    voiceRate: 0.7,
    rates: {
      starter: { monthly: 3.8, annual: 3.0 },
      growth: { monthly: 6.2, annual: 5.0 },
      enterprise: { monthly: 10.8, annual: 8.6 }
    }
  }
};

export interface PlanCardData {
  id: "starter" | "growth" | "enterprise";
  name: string;
  badge?: string;
  isPopular?: boolean;
  bestFor: string;
  keyInclusions: string[];
  cta: { title: string; href: string; variant: "primary" | "secondary" | "inverse" };
  seatLimit: string;
  hosting: string;
}

export const planCards: PlanCardData[] = [
  {
    id: "starter",
    name: "Starter",
    badge: "Essential Lifecycle",
    isPopular: false,
    bestFor: "Growing teams needing core HR, attendance & statutory payroll without spreadsheet chaos.",
    keyInclusions: [
      "Single employee master & digital onboarding documents",
      "ZKTeco biometric & mobile geofenced clock-in sync",
      "Automated multi-tier statutory payroll (PF, ESI, TDS)",
      "Employee self-service mobile app & digital payslips",
      "AI HR Policy Assistant (instant handbook answers)"
    ],
    cta: { title: "Start free trial", href: "/signup", variant: "secondary" },
    seatLimit: "10 - 50 employees",
    hosting: "Pooled cloud hosting"
  },
  {
    id: "growth",
    name: "Growth",
    badge: "Most popular",
    isPopular: true,
    bestFor: "Mid-market businesses needing approval chains, custom 24/7 shift rosters & tool connectors.",
    keyInclusions: [
      "Everything in Starter, plus:",
      "Multi-level headcount requisition & expense approval chains",
      "Dynamic 24/7 shift rostering & automated overtime rules",
      "Connectors for Slack, MS Teams, Google Workspace & Biometrics",
      "Multi-company organizational structure & entity consolidation",
      "10 free AI Live Interviews included monthly"
    ],
    cta: { title: "Start free trial", href: "/signup", variant: "primary" },
    seatLimit: "50 - 500 employees",
    hosting: "Dedicated database pooling"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Full Governance",
    isPopular: false,
    bestFor: "Multi-entity corporations requiring strict regional data residency, custom ERP sync & 99.99% SLA.",
    keyInclusions: [
      "Everything in Growth, plus:",
      "Dedicated tenant hosting with regional data residency",
      "5-gate offboarding workflow with instant SSO revocation",
      "Custom ERP & banking integrations (SAP, Oracle, RazorpayX)",
      "99.99% uptime SLA & dedicated technical account manager",
      "Custom AI interview rubric calibration & volume rate discounts"
    ],
    cta: { title: "Talk to sales", href: "/contact", variant: "secondary" },
    seatLimit: "500+ employees",
    hosting: "Dedicated VPC & data residency"
  }
];

export interface FeatureRow {
  name: string;
  tooltip?: string;
  values: [PlanCell, PlanCell, PlanCell]; // Starter, Growth, Enterprise
}

export interface FeatureGroup {
  groupName: string;
  features: FeatureRow[];
}

export const featureGroups: FeatureGroup[] = [
  {
    groupName: "Hire",
    features: [
      { name: "Requisition & Headcount Approvals", values: [false, true, true] },
      { name: "Omnichannel Sourcing & Multi-Board Job Posting", values: [true, true, true] },
      { name: "AI Resume Parsing & Candidate Scoring", values: [true, true, true] },
      { name: "AI Voice Screening (1st phone screen)", values: ["Metered add-on", "Metered add-on", "Metered add-on"] },
      { name: "Autonomous Live AI Avatar Interviews", values: ["Metered add-on", "10 free / mo", "Volume bundle"] },
      { name: "Candidate Competency Rubric Scoring", values: [true, true, true] },
      { name: "Interview Management & Self-Scheduling Links", values: [true, true, true] },
      { name: "Offer Letter Builder & Digital E-Signatures", values: [true, true, true] },
      { name: "Vendor & Agency Recruitment Portal", values: [false, true, true] }
    ]
  },
  {
    groupName: "Onboard",
    features: [
      { name: "Digital Pre-boarding & Document Uploads", values: [true, true, true] },
      { name: "Integrated Background Verification (BGV)", values: ["API add-on", true, true] },
      { name: "Automated IT Hardware & Serial Provisioning", values: [true, true, true] },
      { name: "Probation Milestones & 90-Day Reviews", values: [true, true, true] }
    ]
  },
  {
    groupName: "Manage",
    features: [
      { name: "Single Live Cryptographic Employee Master", values: [true, true, true] },
      { name: "ZKTeco & Matrix Hardware Biometric Sync", values: [true, true, true] },
      { name: "Mobile Geofenced Clock-in with Selfie Verification", values: [true, true, true] },
      { name: "Dynamic 24/7 Shift Rosters & Shift Swaps", values: [false, true, true] },
      { name: "Multi-Level Leave Approval Workflows", values: [true, true, true] },
      { name: "Company Asset & IT Serial Allocation", values: [true, true, true] },
      { name: "Multi-Company Org Hierarchy Consolidation", values: [false, true, true] },
      { name: "Employee Self-Service Helpdesk & Ticketing", values: [true, true, true] }
    ]
  },
  {
    groupName: "Pay",
    features: [
      { name: "Automated Multi-Tier Payroll Runs", values: [true, true, true] },
      { name: "Statutory Compliance: EPF, ESI, PT & TDS Withholding", values: [true, true, true] },
      { name: "Gratuity Act & End-of-Service Calculation Engine", values: [true, true, true] },
      { name: "1-Click Direct Bank Disbursal File Generation", values: [true, true, true] },
      { name: "Password-Protected Digital Payslips", values: [true, true, true] },
      { name: "Employee Tax Declarations & Proof Verification", values: [true, true, true] },
      { name: "Parallel Payroll Dry-Run Validation", values: ["Self-serve", "Guided", "Full Concierge"] }
    ]
  },
  {
    groupName: "Grow",
    features: [
      { name: "Objective OKR & Milestone Goal Tracking", values: [false, true, true] },
      { name: "Continuous 360-Degree Peer Review Cycles", values: [false, true, true] },
      { name: "Internal Mobility Pathways & Succession Matrix", values: [false, true, true] },
      { name: "Compliance LMS Training & Certifications", values: [false, true, true] }
    ]
  },
  {
    groupName: "Exit",
    features: [
      { name: "Mandatory 5-Gate Departmental Clearance Workflow", values: [true, true, true] },
      { name: "Automated Instant SSO & SAML Access Revocation", values: [false, true, true] },
      { name: "Full & Final (F&F) Settlement Calculation Ledger", values: [true, true, true] },
      { name: "Structured Exit Interviews & Alumni Portal", values: [true, true, true] }
    ]
  },
  {
    groupName: "Sqalible AI & Security",
    features: [
      { name: "AI HR Policy Assistant (Grounded handbook chat)", values: [true, true, true] },
      { name: "Engagement & Real-Time Workforce Telemetry", values: [false, true, true] },
      { name: "Predictive Attrition Risk Signals (HR-only)", values: [false, false, true] },
      { name: "Capacity & Headcount Scenario Forecasting", values: [false, false, true] },
      { name: "Hosting Infrastructure", values: ["Pooled cloud", "Dedicated database", "Dedicated VPC"] },
      { name: "Data Residency Guarantee (India, US, UAE, Aus)", values: [false, false, true] },
      { name: "SOC 2 Type II, ISO 27001 & DPDP Alignment", values: [true, true, true] },
      { name: "Role-Based Access Control (RBAC) & Audit Logs", values: [true, true, true] },
      { name: "Guaranteed Uptime SLA", values: ["99.5%", "99.9%", "99.99%"] },
      { name: "Dedicated Technical Account Manager", values: [false, false, true] }
    ]
  }
];

export const pricingFaqs = [
  {
    q: "What counts as an active employee for billing?",
    a: "Only active employees in your core directory count toward your monthly subscription. Inactive or offboarded employees, alumni records, and prospective candidates in your recruitment pipeline are stored permanently for compliance at zero additional cost."
  },
  {
    q: "How does the billing cycle work for monthly and annual plans?",
    a: "Monthly plans are billed at the beginning of each billing cycle based on your active employee count. Annual plans are paid upfront with a 20% discount (equivalent to 2 months free). If you add new employees during the term, they are billed prorated for the remaining billing period."
  },
  {
    q: "Is there a minimum seat requirement?",
    a: "The Starter plan has a 10-seat minimum, while Growth has a 25-seat minimum. Enterprise plans have custom volume pricing starting from 100 employees with dedicated technical onboarding and concierge migration."
  },
  {
    q: "How do metered AI add-ons and credits roll over?",
    a: "AI Live Interviews and AI Voice Screening are billed based on completed sessions. If you purchase an AI bundle, any unused interview credits automatically roll over for up to 90 days. You will never experience sudden overage fees—we notify you when your quota hits 80%."
  },
  {
    q: "What are the contract terms and cancellation policy?",
    a: "Monthly subscriptions can be canceled at any time with zero termination penalties. Your data remains exportable in standard formats (CSV, JSON, encrypted PDF) for 60 days following cancellation. Enterprise contracts feature annual agreements with customized SLAs."
  },
  {
    q: "Do you offer free data migration from Keka, greytHR, or Excel?",
    a: "Yes. Our implementation engineering team provides complimentary white-glove data migration. We map your historical employee masters, biometric device IP logs, leave balances, and salary components, running parallel payroll dry-runs to ensure 100% precision before cutover."
  }
];

// Backward-compatible exports
export const plans = [
  {
    name: "Starter",
    hosting: "Pooled cloud",
    text: "Self-serve trial, fast setup and essential employee lifecycle.",
    cta: { title: "Start free trial", href: "/signup" }
  },
  {
    name: "Growth",
    hosting: "Dedicated DB",
    text: "Approval chains, connectors and multi-company structures.",
    cta: { title: "Start free trial", href: "/signup" }
  },
  {
    name: "Enterprise",
    hosting: "Dedicated VPC",
    text: "Data residency, guided provisioning and audited support access.",
    cta: { title: "Talk to sales", href: "/contact" }
  }
];

export const planRows = featureGroups.flatMap((g) =>
  g.features.map((f) => ({ feature: f.name, values: f.values }))
);

export const aiAddOns = [
  { title: "AI Live Interview", text: "Autonomous 24/7 avatar video interview with calibrated competency rubrics." },
  { title: "AI Voice Screening", text: "Automated phone screen calls evaluating communication and role fit." }
];