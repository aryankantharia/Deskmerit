export type ContentItem = {title: string;text: string;meta?: string;tag?: string;image?: string;status?: "Operational" | "Degraded";};

export type ResourcePageContent = {
  pretitle: string;
  title: string;
  description: string;
  searchable?: boolean;
  featured?: any;
  items: ContentItem[];
};

export const resourcePages: Record<string, ResourcePageContent> = {
  "/resources": {
    pretitle: "Resources & Knowledge Hub",
    title: "HR Knowledge, Practical Guides & Free Tools",
    description: "In-depth playbooks, statutory calculators, customer implementation stories, and live product telemetry.",
    searchable: true,
    featured: {
      tag: "Featured Guide",
      title: "The AI-Native HR Playbook: Architecture & Implementation",
      text: "A 48-page blueprint examining where autonomous agentic workflows create real leverage across the employee lifecycle.",
      meta: "48 Pages · Executive PDF · Published October 2026",
      image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg",
      downloadText: "Download Free Playbook"
    },
    items: [
      {
        tag: "Playbook",
        title: "The AI-Native HR Playbook: Architecture & Implementation",
        text: "Where autonomous agents belong in each lifecycle stage, and where human judgment remains paramount.",
        meta: "48 pages · Free PDF",
        image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
      },
      {
        tag: "Free Tool",
        title: "Statutory Gratuity Payout Calculator",
        text: "Interactive calculator adhering to the 15/26 formula and ₹20 lakh statutory exemption cap.",
        meta: "Free Legal Calculator",
        image: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
      },
      {
        tag: "Customer Story",
        title: "How Scaling Enterprises Reduce Hiring Time by 70%",
        text: "Real-world implementation case study: 24/7 AI interview scheduling and biometric attendance sync.",
        meta: "Case Study · 6 min read",
        image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
      },
      {
        tag: "Template",
        title: "50+ Vetted HR Policies, Offer Letters & NDAs",
        text: "Download standardized, legally vetted HR documentation templates ready for immediate team use.",
        meta: "Free Templates Pack",
        image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg"
      },
      {
        tag: "Whitepaper",
        title: "Responsible AI in Recruitment & Interviewing",
        text: "Anti-bias auditing protocols, candidate consent workflows, and EEOC algorithmic fairness.",
        meta: "Whitepaper · 18 pages",
        image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
      },
      {
        tag: "System Status",
        title: "Live Cloud Platform Status & Telemetry",
        text: "Real-time service availability, latency telemetry, and scheduled maintenance windows.",
        meta: "99.99% Uptime Verified",
        image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg"
      }
    ]
  },
  "/blog": {
    pretitle: "Resources",
    title: "Blog",
    description: "Thinking on HR, hiring and responsible AI from the Sqalible team.",
    searchable: true,
    items: [
    { tag: "AI in hiring", title: "What a live AI interview should and should not decide", text: "Where AI adds signal in a first-round interview, and why the decision stays with a person.", meta: "8 Oct 2026 · 6 min read" },
    { tag: "Compliance", title: "Gratuity in India: the 2026 guide for HR teams", text: "Eligibility, the 15/26 formula, the ₹20 lakh cap and common payout mistakes.", meta: "1 Oct 2026 · 8 min read" },
    { tag: "Offboarding", title: "Five offboarding gates that prevent costly exits", text: "Asset recovery, access revocation and clean settlements.", meta: "24 Sep 2026 · 5 min read" },
    { tag: "Onboarding", title: "Day one, done right: a pre-joining checklist", text: "What to send, provision and plan before a new joiner arrives.", meta: "16 Sep 2026 · 7 min read" },
    { tag: "Analytics", title: "Reading attrition signals without surveillance", text: "Which signals matter and how to keep them visible to HR only.", meta: "9 Sep 2026 · 6 min read" },
    { tag: "Performance", title: "Writing OKRs your team will actually use", text: "How AI drafting helps, and where managers still need to edit.", meta: "2 Sep 2026 · 5 min read" }]

  },
  "/resources/guides": {
    pretitle: "Learn",
    title: "Guides & eBooks",
    description: "In-depth operational playbooks for HR leaders, talent teams, and payroll directors.",
    searchable: true,
    featured: {
      tag: "Featured Playbook",
      title: "The AI-Native HR Playbook: Architecture & Implementation",
      text: "A comprehensive 48-page executive blueprint examining where autonomous agentic workflows create real leverage across the employee lifecycle.",
      meta: "48 Pages · Executive PDF · Published October 2026",
      image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg",
      downloadText: "Download Free Playbook"
    },
    items: [
      {
        tag: "eBook",
        title: "The AI-Native HR Playbook: Architecture & Implementation",
        text: "Where autonomous agents belong in each lifecycle stage, and where human judgment remains paramount.",
        meta: "48 pages · Free PDF",
        image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
      },
      {
        tag: "Guide",
        title: "Responsible AI in Recruitment & Interviewing",
        text: "Algorithmic fairness, consent workflows, anti-bias audit protocols, and human-in-the-loop governance.",
        meta: "24 pages · Whitepaper",
        image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
      },
      {
        tag: "Compliance",
        title: "Multi-State Statutory Compliance Handbook",
        text: "Gratuity act guidelines, EPF/ESI ceilings, leave encashment rules, and tax compliance audit trails.",
        meta: "32 pages · Practical Guide",
        image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg"
      },
      {
        tag: "Migration",
        title: "Legacy HRMS Migration Checklist: Step-by-Step",
        text: "Data validation, employee historical records, payroll dry-runs, and rollout timelines for a zero-downtime move.",
        meta: "16 pages · Implementation Kit",
        image: "/2ecb6e0b-473d-4453-a856-34711b3ce29e.jpg"
      },
      {
        tag: "Playbook",
        title: "The Zero-Touch Onboarding Blueprint",
        text: "From signed offer to day-one productivity: biometric e-sign, background check API, and laptop dispatch.",
        meta: "22 pages · Blueprint",
        image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg"
      },
      {
        tag: "Security",
        title: "Enterprise HR Data Security & Privacy Guide",
        text: "SOC 2 Type II controls, employee PII tenant isolation, GDPR/DPDP alignment, and audit log telemetry.",
        meta: "20 pages · Security Brief",
        image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg"
      }
    ]
  },
  "/resources/webinars": {
    pretitle: "Learn",
    title: "HR Leadership Webinars",
    description: "Live workshops and on-demand masterclasses with seasoned HR executives, legal experts, and people leaders.",
    searchable: true,
    featured: {
      tag: "Upcoming Live Session",
      title: "Live AI Interviews in Production: A Hiring Manager's Masterclass",
      text: "Join VP of Talent Marcus Vance as he shares how Finlytics screened 2,400+ engineering applicants in 14 languages with zero recruiter calendar bottlenecks.",
      meta: "Thursday, October 22, 2026 · 45 mins · Live Q&A Included",
      image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg",
      downloadText: "Reserve Free Seat"
    },
    items: [
      {
        tag: "Upcoming Live",
        title: "Live AI Interviews in Production: A Hiring Manager's Masterclass",
        text: "How high-growth tech teams use 24/7 conversational screening while keeping leadership firmly in control.",
        meta: "22 Oct 2026 · 45 min · Live Workshop",
        image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
      },
      {
        tag: "Upcoming Live",
        title: "Statutory Exit Compliance & Full-and-Final Automation",
        text: "Navigating notice shortfall buyouts, asset reclamation, and instant SSO deprovisioning without audit liabilities.",
        meta: "5 Nov 2026 · 40 min · Masterclass",
        image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg"
      },
      {
        tag: "On-Demand",
        title: "From Fragmented Spreadsheets to One Real-Time HR Record",
        text: "A 450-person enterprise migration case study: unblocking payroll friction and leave approvals.",
        meta: "On Demand · 38 min · Watch Recording",
        image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg"
      },
      {
        tag: "On-Demand",
        title: "Solving 24/7 Shift Scheduling & Attendance for Distributed Plants",
        text: "How manufacturing plants eliminate punch fraud and automate overtime reconciliation using geofenced clock-ins.",
        meta: "On Demand · 42 min · Watch Recording",
        image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
      }
    ]
  },
  "/customers": {
    pretitle: "Customer Stories",
    title: "Enterprise Customer Case Studies",
    description: "Discover how high-velocity startups and global enterprises transform hiring speed, compliance, and employee experience with Sqalible.",
    searchable: true,
    featured: {
      tag: "Enterprise Impact",
      title: "Finlytics cut technical screening turnaround from 14 days to 48 hours",
      text: "How an enterprise fintech leader scaled technical hiring across 6 countries using Sqalible AI Live Interview without compromising candidate experience or engineering leadership oversight.",
      meta: "Fintech · 1,200 Employees · Global Delivery",
      image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg",
      downloadText: "Read Finlytics Case Study"
    },
    items: [
      {
        tag: "Fintech & IT",
        title: "Finlytics cut first-round screening turnaround by 70%",
        text: "Autonomous live interviews, code-reasoning rubrics, and automated candidate telemetry across 1,200+ engineers.",
        meta: "1,200 Employees · -70% Time-to-Hire",
        image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
      },
      {
        tag: "Retail & Multi-Location",
        title: "Northwind Retail closed 100% of offboarding compliance gaps",
        text: "Mandatory 5-gate exit workflow, hardware recovery tracking, and single-click SSO revocation across 140 store outlets.",
        meta: "3,400 Employees · Zero Audit Non-Compliance",
        image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg"
      },
      {
        tag: "Manufacturing",
        title: "Aura Dynamics unified shift attendance across 6 manufacturing plants",
        text: "Biometric clock-in sync, automated shift roster swaps, and real-time overtime statutory payroll reconciliation.",
        meta: "5,000+ Workers · 99.98% Attendance Accuracy",
        image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
      },
      {
        tag: "Healthcare",
        title: "LifeCare Health automated credential verification and shift management",
        text: "Medical license expiry tracking, on-call physician scheduling, and HIPAA-grade employee record management.",
        meta: "850 Staff · 100% Credential Audit Ready",
        image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg"
      }
    ]
  },
  "/help": {
    pretitle: "Workforce Support",
    title: "Health & Help Centre",
    description: "Employee mental health resources, workplace wellbeing guidelines, ergonomic standards, and comprehensive HR platform documentation.",
    searchable: true,
    featured: {
      tag: "Workforce Wellbeing Initiative",
      title: "Building a Resilient Workplace: Mental Health, Ergonomics & Support Frameworks",
      text: "Comprehensive guidelines for HR leaders to support employee wellness, prevent operational burnout, and implement structured workplace health standards across hybrid teams.",
      meta: "Executive Health Blueprint • 32 Pages • October 2026",
      image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg",
      downloadText: "Access Health Guide"
    },
    items: [
      { tag: "Employee Wellbeing", title: "Mental Wellness & Employee Assistance Programs (EAP)", text: "Confidential counseling access, stress-management workshops, and work-life balance frameworks.", meta: "6 Guides · HR Approved" },
      { tag: "Workplace Health", title: "Ergonomic Guidelines for Hybrid & Remote Workstations", text: "Physical workspace assessment checklists, posture recommendations, and equipment allowance policies.", meta: "4 Checklists · DOCX/PDF" },
      { tag: "Employee Wellbeing", title: "Preventing Workplace Burnout & Managing Sustainable Workloads", text: "Managerial signals for cognitive overload, PTO encouraging policies, and meeting-free focus days.", meta: "5 Playbooks · 7 min read" },
      { tag: "Compliance & Safety", title: "Statutory Health & Occupational Safety Policies", text: "Workplace hazard reporting, POSH guidelines, emergency response protocols, and first aid coverage.", meta: "8 Policies · Statutory" },
      { tag: "HR Guidance", title: "Medical Insurance Enrollment & Dependent Coverage Workflows", text: "Group health insurance claims, cashless hospitalization network portals, and OPD reimbursement guides.", meta: "10 Articles · Benefits" },
      { tag: "HR Guidance", title: "Maternity, Paternity & Caregiver Leave Policies", text: "Statutory leave entitlements, gradual return-to-work schedules, and parental transition planning.", meta: "5 Articles · Policy" },
      { tag: "HR Guidance", title: "Configuring Core HR Entities, Departments & Approval Lines", text: "Organization chart hierarchies, multi-entity setup, and manager delegation permissions.", meta: "12 Articles · Documentation" },
      { tag: "HR Guidance", title: "Automated Biometric & Attendance Shift Configuration", text: "Rosters, rotational shifts, geo-fencing rules, and regularisation approval chains.", meta: "9 Articles · Documentation" }
    ]
  },
  "/changelog": {
    pretitle: "Continuous Innovation",
    title: "Product Updates & Release Changelog",
    description: "Chronological release notes, intelligence enhancements, and statutory compliance updates across the Sqalible ecosystem.",
    searchable: true,
    featured: {
      tag: "Major Release v3.4.0",
      title: "AI Live Interview Engine with Real-Time Coding Evaluation & Arabic RTL Support",
      text: "Transforming technical first rounds with adaptive interviewer dialogue, real-time code approach synthesis, explainable scorecards, and full right-to-left layout localization for Middle East enterprises.",
      meta: "Version 3.4.0 • Production Release • 12 October 2026",
      image: "/dashboards/ai-interview-dashboard.png",
      downloadText: "Read Release Telemetry"
    },
    items: [
      { tag: "Features", title: "v3.4.0 — AI Live Interview Coding Approach Synthesis", text: "Assesses algorithmic problem decomposition and edge-case handling rather than simple pass/fail tests. Generates timestamped verbatim citations for recruiter sign-off.", meta: "12 Oct 2026 · Flagship Release" },
      { tag: "Improvements", title: "v3.3.4 — Native Arabic (RTL) Layout & Regional Calendar Localization", text: "Full right-to-left UI mirror across all 32 platform modules with Hijri calendar support for Saudi Arabia and UAE enterprise clients.", meta: "28 Sep 2026 · Regional" },
      { tag: "AI Models", title: "v3.3.0 — Permission-Aware HR Assistant with Zero Training Retention", text: "Enterprise RBAC enforcement on all conversational queries. Managers only see authorized salary bands and peer records.", meta: "14 Sep 2026 · AI Core" },
      { tag: "Fixes", title: "v3.2.8 — Biometric Attendance Clock Synchronization & Geo-Fence Refinement", text: "Optimized offline clock-in sync for plant and distributed warehouse facilities with high latency connections.", meta: "31 Aug 2026 · Infrastructure" },
      { tag: "Features", title: "v3.2.0 — Exit Interview Categorization & Attrition Theme Clustering", text: "Automated aggregation of exit feedback into systemic organizational themes while preserving individual respondent anonymity.", meta: "15 Aug 2026 · Analytics" },
      { tag: "Improvements", title: "v3.1.2 — High-Velocity Resume Scoring Pipeline Sub-15 Minute Latency", text: "Distributed OCR parsing and skill extraction reduces applicant scoring latency from 45 minutes to under 15 minutes.", meta: "28 Jul 2026 · Performance" }
    ]
  },
  "/status": {
    pretitle: "Support",
    title: "System Status",
    description: "Live uptime against our 99.9% target.",
    items: [
    { title: "Web application", text: "99.98% uptime over the last 90 days", status: "Operational" },
    { title: "AI services", text: "99.95% uptime over the last 90 days", status: "Operational" },
    { title: "AI Live Interview", text: "99.91% uptime over the last 90 days", status: "Operational" },
    { title: "Integrations & connectors", text: "Slack notifications delayed for some workspaces", status: "Degraded" },
    { title: "Public API", text: "99.99% uptime over the last 90 days", status: "Operational" }]

  },
  "/tools/templates": {
    pretitle: "Free tools",
    title: "HR Templates",
    description: "Offer letters, policies and checklists, free to download.",
    searchable: true,
    items: [
      { tag: "Hire", title: "Offer letter template", text: "Editable offer letter with compensation table.", meta: "DOCX" },
      { tag: "Onboard", title: "Day-one checklist", text: "Tasks for HR, IT, managers and joiners.", meta: "XLSX" },
      { tag: "Manage", title: "Leave policy template", text: "Accruals, carry-forward and approvals.", meta: "DOCX" },
      { tag: "Exit", title: "Offboarding checklist", text: "Assets, access, knowledge transfer and settlement.", meta: "XLSX" },
      { tag: "Exit", title: "Experience letter template", text: "Standard letter for former employees.", meta: "DOCX" }
    ]
  },
  "/blogs": {
    pretitle: "Insights",
    title: "HR Tech & People Intelligence Blog",
    description: "In-depth perspectives on AI recruitment, compliant multi-entity payroll, employee experience, and workforce analytics.",
    searchable: true,
    items: [
      {
        tag: "AI Recruitment",
        title: "AI-Native Screening: How Real-Time Audio Interviews Remove Bias in Technical Hiring",
        text: "Moving beyond keyword resume parsers to conversational assessment with rubric scoring and human-in-the-loop sign-off.",
        meta: "14 Oct 2026 · 8 min read · By Dr. Aris Thorne",
        image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg"
      },
      {
        tag: "Payroll & Tax",
        title: "The 2026 Statutory Payroll Guide: Multi-State PF, Gratuity, and Tax Compliance",
        text: "A comprehensive operational framework for zero-error wage processing, automated tax deductions, and statutory filing readiness.",
        meta: "11 Oct 2026 · 10 min read · By Priya Natarajan",
        image: "/907faf08-b342-486c-b0b4-50109f954dd8.jpg"
      },
      {
        tag: "Offboarding",
        title: "Five Critical Offboarding Gates That Prevent Security Breaches and Audit Fines",
        text: "How automated IT asset reclamation, single-click SSO revocation, and FnF clearance protect enterprise IP.",
        meta: "7 Oct 2026 · 6 min read · By Vikram Malhotra",
        image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg"
      },
      {
        tag: "Analytics",
        title: "Predictive People Analytics: Identifying Flight Risk and Burnout Before Resignation Letters",
        text: "Using permission-aware sentiment indicators and leave telemetry to protect key talent without invasive surveillance.",
        meta: "2 Oct 2026 · 7 min read · By Elena Rostova",
        image: "/2ecb6e0b-473d-4453-a856-34711b3ce29e.jpg"
      },
      {
        tag: "Migration",
        title: "From Legacy HRMS to AI-Native Architecture: The CHRO & CTO Migration Playbook",
        text: "How mid-market and enterprise organizations migrate tens of thousands of employee records with zero downtime.",
        meta: "26 Sep 2026 · 12 min read · By Chirag Parmar",
        image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
      },
      {
        tag: "Workforce",
        title: "Shift Rostering & Biometric Verification for Distributed 24/7 Operations",
        text: "Best practices for multi-plant manufacturing and healthcare staffing with geofenced clock-ins and automated overtime rules.",
        meta: "19 Sep 2026 · 5 min read · By Sarah Jenkins",
        image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
      }
    ]
  },
  "/resource": {
    pretitle: "Insights",
    title: "Resources, Playbooks & Guides",
    description: "Curated architectural whitepapers, statutory payroll handbooks, and talent acquisition playbooks.",
    searchable: true,
    items: [
      { tag: "Playbook", title: "From Legacy HRMS to AI-Native Architecture: The CHRO & CTO Migration Playbook", text: "A step-by-step roadmap for migrating thousands of employee records, biometric logs, and historical payroll with zero downtime.", meta: "36 pages · Executive PDF" },
      { tag: "Whitepaper", title: "Responsible AI in Talent Acquisition: Anti-Bias Acoustic Filtering & Verifiable Rubrics", text: "Algorithmic fairness frameworks, candidate consent protocols, and human-in-the-loop audit logs compliant with EEOC and DPDP.", meta: "28 pages · Whitepaper" },
      { tag: "Guide", title: "The Multi-Tier Statutory Payroll Handbook: PF, ESI, TDS & Gratuity Compliance", text: "Practical formulas, statutory caps, and automated parallel run verification to eliminate payroll discrepancies.", meta: "20 pages · Practical Guide" }
    ]
  },
  "/faqs": {
    pretitle: "Support & Knowledge",
    title: "Frequently Asked Questions",
    description: "Direct answers regarding our AI-native HRMS architecture, compliance guarantees, security, and migration playbooks.",
    searchable: true,
    items: [
      { tag: "Architecture", title: "How does Sqalible replace disjointed HR software with a single employee master?", text: "All lifecycle events—interviews, onboarding documents, biometric punches, shift rosters, and payroll disbursements—write directly to one unified record, eliminating manual CSV reconciliations and duplicate profile drift.", meta: "Data Model" },
      { tag: "Compliance", title: "How are autonomous AI live interviews calibrated to prevent bias?", text: "AI evaluations strip acoustic pitch and accent variance, scoring candidates strictly against objective competency rubrics with explainable audit logs. Human hiring managers retain 100% sign-off authority.", meta: "Governance" },
      { tag: "Migration", title: "Can we test parallel payroll dry-runs before decommissioning our current vendor?", text: "Yes. We run parallel payroll cycles alongside legacy software (like Keka or greytHR) for 1-2 months to verify mathematical precision down to the cent before cutover.", meta: "Parallel Run" },
      { tag: "Security", title: "What security and data residency standards does Sqalible adhere to?", text: "All customer records are encrypted via TLS 1.3 and AES-256 within SOC 2 Type II certified regional data centers, backed by automated offboarding compliance gates that revoke SSO access in real time.", meta: "Data Privacy" }
    ]
  },
  "/insights/our-clients": {
    pretitle: "Proof of Scale",
    title: "Our Clients & Partnerships",
    description: "Trusted by high-growth startups and global enterprise brands across 14 countries.",
    searchable: false,
    items: [
      { tag: "FinTech", title: "Finlytics Global: 72% Drop in Time-to-Hire Across 1,200 Engineering Requisitions", text: "Screened 2,400+ engineering candidates in 14 languages with autonomous live avatar interviews and calibrated competency scorecards.", meta: "1,200+ Hires Accelerated" },
      { tag: "Retail", title: "Northwind Retail: Real-Time Biometric Attendance Across 45 Warehouses", text: "Synchronized ZKTeco biometric clock-in telemetry directly into statutory payroll, eliminating 3 days of manual shift reconciliations monthly.", meta: "3,500 Active Shift Workers" },
      { tag: "Healthcare", title: "Acuity Health Networks: Zero-Error Multi-Tier Statutory Payroll & Rostering", text: "Automated PF, ESI, and TDS calculations across 12 hospital facilities with dynamic on-call shift rotation rules and instant digital payslips.", meta: "99.99% Payroll Precision" }
    ]
  }
};

export type InfoPageContent = {
  pretitle: string;
  title: string;
  description: string;
  sections: {title: string;text: string;}[];
};

export const trustPages: Record<string, InfoPageContent> = {
  "/responsible-ai": {
    pretitle: "Why Sqalible",
    title: "Responsible AI",
    description: "AI at every stage of the lifecycle, with clear boundaries and people making the decisions that matter.",
    sections: [
    { title: "Human sign-off", text: "AI recommends. A named person approves every hiring, performance and exit decision." },
    { title: "Consent first", text: "Candidates opt in before AI voice screening or live interviews." },
    { title: "Recurring bias audits", text: "Screening outcomes are audited for adverse impact on a regular schedule." },
    { title: "Explainability", text: "Scores and summaries show the evidence behind them." },
    { title: "Permission-aware answers", text: "The AI assistant only uses data the person asking is allowed to see." },
    { title: "Safety boundaries", text: "AI never makes final employment decisions or sees restricted data." }]

  },
  "/security": {
    pretitle: "Why Sqalible",
    title: "Security & Trust Centre",
    description: "Tenant isolation, audit logs, uptime reporting and regional compliance.",
    sections: [
    { title: "Tenant isolation", text: "Every customer's data is logically isolated, with Dedicated hosting for Enterprise." },
    { title: "Audit logs", text: "Every access, change and AI action is logged." },
    { title: "Uptime reporting", text: "A 99.9% uptime target with a public status page." },
    { title: "DPDP Act & CCPA", text: "Regional privacy obligations built into data handling." },
    { title: "WCAG 2.1 AA", text: "An accessible interface across every module." }]
  }
};

export const legalPages: Record<string, InfoPageContent> = {
  "/privacy": {
    pretitle: "Legal & Trust",
    title: "Privacy Policy",
    description: "How Sqalible collects, uses and protects personal data.",
    sections: [
    { title: "Data we collect", text: "Account, usage and customer-provided employee data, processed only to provide the service." },
    { title: "How we use data", text: "To run, secure and improve Sqalible. We never sell personal data." },
    { title: "Your rights", text: "Access, correction, deletion and portability under GDPR, UK GDPR, DPDP and CCPA." },
    { title: "Contact", text: "Email privacy@sqalible.com with any questions." }]

  },
  "/terms": {
    pretitle: "Legal & Trust",
    title: "Terms of Service",
    description: "The terms that govern your use of Sqalible.",
    sections: [
    { title: "Using the service", text: "Use Sqalible in line with applicable law and these terms." },
    { title: "Accounts", text: "You are responsible for the security of your account and users." },
    { title: "Fees", text: "Plans and AI usage add-ons are billed as described in your order." },
    { title: "Termination", text: "Either party may terminate as set out in your agreement." }]

  },
  "/dpa": {
    pretitle: "Legal & Trust",
    title: "Data Processing Addendum",
    description: "Our commitments as a data processor for your employee data.",
    sections: [
    { title: "Scope", text: "Applies to personal data processed on your behalf." },
    { title: "Security measures", text: "Technical and organisational measures to protect data." },
    { title: "Subprocessors", text: "Listed publicly, with notice before changes." },
    { title: "International transfers", text: "Standard contractual clauses where required." }]

  },
  "/subprocessors": {
    pretitle: "Legal & Trust",
    title: "Subprocessors",
    description: "Third parties that help us deliver Sqalible.",
    sections: [
    { title: "Cloud hosting", text: "Infrastructure and storage in the customer's chosen region." },
    { title: "AI model providers", text: "Model inference under zero-retention terms." },
    { title: "Email delivery", text: "Transactional notifications." },
    { title: "Support tooling", text: "Customer support with audited access." }]

  },
  "/accessibility": {
    pretitle: "Legal & Trust",
    title: "Accessibility",
    description: "Sqalible is designed to meet WCAG 2.1 AA.",
    sections: [
    { title: "Our standard", text: "We design and test against WCAG 2.1 AA." },
    { title: "Keyboard & screen readers", text: "Every workflow can be completed without a mouse." },
    { title: "Right-to-left", text: "A full Arabic RTL interface." },
    { title: "Feedback", text: "Report barriers to accessibility@sqalible.com." }]

  },
  "/cookie-settings": {
    pretitle: "Legal & Trust",
    title: "Cookie Settings",
    description: "Choose which cookies Sqalible may use.",
    sections: [
    { title: "Strictly necessary", text: "Required for sign-in and security. Always on." },
    { title: "Analytics", text: "Helps us understand how the site is used." },
    { title: "Marketing", text: "Measures campaign performance." }]

  }
};

export const companyPages = {
  about: {
    title: "About Sqalible",
    description: "Our mission is to redefine modern human resource management with AI built in from the start.",
    values: [
    { title: "People decide", text: "AI should make HR faster and fairer, never replace human judgement." },
    { title: "One record", text: "Every stage of the lifecycle should share the same truth about an employee." },
    { title: "Built for everyone", text: "Accessible, multilingual and right-to-left from day one." }]

  },
  careers: {
    title: "Careers",
    description: "Help build the AI-native HRMS. Open roles across product, engineering and go-to-market.",
    roles: [
    { title: "Senior Backend Engineer", team: "Engineering", location: "Bengaluru · Hybrid" },
    { title: "Product Designer", team: "Design", location: "Remote · India" },
    { title: "Machine Learning Engineer, Hiring AI", team: "AI", location: "Bengaluru · Hybrid" },
    { title: "Account Executive, Middle East", team: "Sales", location: "Dubai" },
    { title: "Customer Success Manager", team: "Customer Success", location: "London · Hybrid" }]

  },
  life: {
    title: "Life at Sqalible",
    description: "Collaboration, culture, and everyday experiences. Discover what it’s like to build the AI-native HRMS with our passionate global team."
  },
  partners: {
    title: "Partners",
    description: "Implementation, reseller and technology partners who help customers succeed with Sqalible.",
    types: [
    { title: "Implementation partners", text: "Configure, migrate and launch Sqalible for customers." },
    { title: "Resellers", text: "Bring Sqalible to new regions and industries." },
    { title: "Technology partners", text: "Build integrations with the Sqalible platform." }]

  },
  press: {
    title: "Press",
    description: "News, announcements and media resources.",
    releases: [
    { date: "October 2026", title: "Sqalible launches AI Live Interview with coding-approach evaluation" },
    { date: "August 2026", title: "Sqalible expands to the Middle East with full Arabic RTL support" },
    { date: "May 2026", title: "Sqalible publishes its Responsible AI policy and bias audit framework" }]

  }
};

export const compareCompetitors: Record<string, string> = {
  keka: "Keka",
  darwinbox: "Darwinbox",
  greythr: "greytHR"
};

export const compareRows = [
{ area: "AI in the lifecycle", sqalible: "Built into every stage, from hire to exit", ask: "Which stages use AI, and was it added later?" },
{ area: "First-round interviews", sqalible: "Live AI interviews with human sign-off", ask: "Can AI run structured live interviews?" },
{ area: "Resume screening", sqalible: "Every resume scored within 15 minutes", ask: "How fast and explainable is screening?" },
{ area: "Exit compliance", sqalible: "Five mandatory gates and automatic access revocation", ask: "Is access revoked automatically on the last day?" },
{ area: "Responsible AI", sqalible: "Consent, human sign-off and recurring bias audits", ask: "Is there a published Responsible AI policy?" },
{ area: "Hosting", sqalible: "Pooled or Dedicated with data residency", ask: "Can we choose region and isolation level?" }];