export type SolutionTabId = "industry" | "size" | "team" | "region";

export type SolutionItem = {
  name: string;
  href: string;
  text: string;
  tag?: string;
  image?: string;
  heading?: string;
  challenges?: { title: string; desc: string }[];
  offerings?: { title: string; desc: string; bullets: string[] }[];
  outcomes?: { metric: string; label: string }[];
  faqs?: { q: string; a: string }[];
};

export const solutionTabs: { id: SolutionTabId; label: string }[] = [
  { id: "industry", label: "By industry" },
  { id: "size", label: "By company size" },
  { id: "team", label: "By team" },
  { id: "region", label: "By region" }
];

export const solutionsBySize: SolutionItem[] = [
  {
    name: "Startups & High-Growth Scaleups",
    href: "/solutions/startups",
    tag: "10 to 100 Employees",
    text: "Establish scalable HR operations, automated candidate screening, and 1-click payroll without dedicated administrative bloat.",
    image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
    heading: "Set up enterprise-grade HR operations from your very first hire",
    challenges: [
      { title: "Manual Recruitment Bottlenecks", desc: "Founders and small engineering teams waste dozens of hours scheduling and conducting repetitive initial screening calls." },
      { title: "Messy Spreadsheet Payroll", desc: "Manual calculations for taxes, PF, and salary adjustments risk compliance fines and employee dissatisfaction." },
      { title: "Scattered Employee Records", desc: "Offer letters, ID proofs, and signed agreements spread across emails, Slack, and Google Drive folders." }
    ],
    offerings: [
      {
        title: "Autonomous Live Interview Screening",
        desc: "Screen applicants 24/7 with adaptive technical and cultural questions, receiving structured rubric scores for final review.",
        bullets: ["Automated technical assessment", "Zero calendar scheduling delays", "Human sign-off on every offer"]
      },
      {
        title: "Zero-Touch Digital Onboarding",
        desc: "Send standardized offer letters, collect biometric e-signatures, and auto-provision accounts before day one.",
        bullets: ["Self-service document upload", "Automated welcome checklist", "Instant Slack & Google account provisioning"]
      },
      {
        title: "1-Click Compliant Payroll",
        desc: "Run payroll in minutes with statutory deductions, automated pay slip generation, and direct bank transfers.",
        bullets: ["Automated PF, ESI & tax calculations", "Instant salary slip downloads", "Built-in statutory compliance"]
      }
    ],
    outcomes: [
      { metric: "10x", label: "Faster initial candidate screening" },
      { metric: "100%", label: "Paperless onboarding workflows" },
      { metric: "2 mins", label: "Monthly payroll processing time" },
      { metric: "Zero", label: "Compliance or tax penalties" }
    ],
    faqs: [
      { q: "Can startups customize salary structures?", a: "Yes, you can configure custom basic, HRA, and allowance breakdowns, as well as equity/ESOP tracking." },
      { q: "How long does onboarding take?", a: "Most startups go live within 24 to 48 hours using our self-serve data import wizard." }
    ]
  },
  {
    name: "Mid-Market Enterprises",
    href: "/solutions/mid-market",
    tag: "100 to 1,000 Employees",
    text: "Standardize multi-department workflows, automate shift schedules, and bridge the operational gap between HR and Finance.",
    image: "/heroes/solutions-midmarket-hero.jpg",
    heading: "Unify workforce complexity and operational coordination at scale",
    challenges: [
      { title: "Cross-Department Silos", desc: "HR, IT, and Finance operate in disconnected systems, leading to delayed onboarding hardware and payroll calculation lag." },
      { title: "Attendance & Shift Exception Chaos", desc: "Managing multiple shifts, leave approvals, and overtime claims becomes an administrative nightmare." },
      { title: "Retention & Burnout Blindspots", desc: "HR leadership only discovers team dissatisfaction when resignation letters are formally submitted." }
    ],
    offerings: [
      {
        title: "Unified Workforce Operating System",
        desc: "A single live source of truth connecting recruitment pipelines, employee records, attendance, and payroll.",
        bullets: ["Multi-tier approval workflows", "Automated asset tracking & IT dispatch", "Real-time employee directory"]
      },
      {
        title: "Biometric & Geofenced Time Tracking",
        desc: "Seamless integration with biometric scanners, facial recognition, and mobile geofenced clock-in apps.",
        bullets: ["Automated overtime reconciliation", "Flexible shift roster builder", "Zero manual punch reconciliation"]
      },
      {
        title: "Predictive People Analytics",
        desc: "Detect early flight risks, analyze team engagement trends, and uncover organizational bottlenecks proactively.",
        bullets: ["Permission-aware retention telemetry", "Continuous pulse feedback", "Manager decision support"]
      }
    ],
    outcomes: [
      { metric: "40%", label: "Reduction in HR administrative tickets" },
      { metric: "99.9%", label: "Attendance & overtime accuracy" },
      { metric: "5 Gates", label: "Mandatory offboarding governance" },
      { metric: "3 Days", label: "Saved every payroll cycle" }
    ],
    faqs: [
      { q: "Can Sqalible integrate with our existing ERP or Slack?", a: "Yes, Sqalible natively integrates with Slack, Microsoft Teams, Jira, Google Workspace, and major ERP systems." },
      { q: "How does Sqalible handle complex leave policies?", a: "You can define customizable accruals, probation rules, carry-over limits, and department-specific leave types." }
    ]
  },
  {
    name: "Global & Multi-Entity Enterprise",
    href: "/solutions/enterprise",
    tag: "1,000+ Employees",
    text: "Enterprise governance, multi-subsidiary organizational hierarchies, role-based access control, and stringent audit compliance.",
    image: "/heroes/solutions-enterprise-hero.jpg",
    heading: "Scalable governance and multi-entity workforce management",
    challenges: [
      { title: "Multi-Entity Compliance Complexity", desc: "Operating across different legal entities, countries, and regulatory frameworks with fragmented tools." },
      { title: "Security & Access Governance Risks", desc: "Former employees retaining access to sensitive corporate software due to delayed or manual offboarding." },
      { title: "Audit Trail Requirements", desc: "Strict statutory regulations demand complete immutable logs of every compensation, promotion, and data edit." }
    ],
    offerings: [
      {
        title: "Multi-Entity Hierarchy Management",
        desc: "Support parent companies, regional subsidiaries, cost centers, and cross-entity reporting lines in one system.",
        bullets: ["Custom role-based permissions (RBAC)", "Multi-currency payroll handling", "Tenant data isolation"]
      },
      {
        title: "Automated 5-Gate Exit Governance",
        desc: "Rigorous compliance gates ensuring 100% IT asset return, single-click SSO revocation, and clean FnF sign-off.",
        bullets: ["Zero zombie account vulnerabilities", "Hardware condition & handover tracking", "Digital audit trails"]
      },
      {
        title: "SOC 2 Type II & Enterprise Security",
        desc: "Bank-grade data encryption, dedicated database options, continuous uptime SLAs, and ISO 27001 certification.",
        bullets: ["SAML 2.0 / Okta / Azure AD SSO", "Audit log streaming & webhooks", "Dedicated client success architect"]
      }
    ],
    outcomes: [
      { metric: "100%", label: "Audit compliance pass rate" },
      { metric: "0 Sec", label: "Zombie account delay on exit" },
      { metric: "99.99%", label: "Payroll statutory accuracy" },
      { metric: "50k+", label: "Concurrent employee records" }
    ],
    faqs: [
      { q: "Do you offer private cloud or dedicated database deployment?", a: "Yes, our Enterprise plan supports dedicated instance hosting and regional data residency guarantees." },
      { q: "What SLA do you guarantee for enterprise accounts?", a: "We commit to a 99.9% uptime SLA with 24/7 dedicated enterprise support and a designated technical account manager." }
    ]
  }
];

export const solutionsByTeam: SolutionItem[] = [
  {
    name: "For HR Leaders & People Teams",
    href: "/solutions/hr-teams",
    tag: "Recruitment, Ops & People",
    text: "Automate repetitive administrative busywork so you can focus on talent strategy, employee retention, and cultural health.",
    image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg",
    heading: "Free your HR team from administrative paperwork and manual tracking",
    challenges: [
      { title: "Candidate Scheduling Burnout", desc: "Spending entire days coordinating interview slots across candidates and busy hiring managers." },
      { title: "Endless Repetitive HR Tickets", desc: "Employees repeatedly asking for policy documents, leave balances, payslips, and tax forms." },
      { title: "Manual Exit Checklists", desc: "Chasing managers, IT, and finance manually through email threads during employee offboarding." }
    ],
    offerings: [
      {
        title: "Autonomous Live AI Interviewer",
        desc: "Let candidates interview anytime with real-time conversational screening and automated rubric generation.",
        bullets: ["Screen hundreds of candidates simultaneously", "Human-in-the-loop hiring sign-off", "Consistent anti-bias rubrics"]
      },
      {
        title: "Permission-Aware Employee Self-Service",
        desc: "Empower staff to view leave balances, download tax forms, and update records via web and mobile.",
        bullets: ["Instant policy query resolution", "1-click leave applications", "Self-service profile maintenance"]
      },
      {
        title: "Structured 5-Gate Exit Management",
        desc: "Automate department sign-offs, asset recovery, and full-and-final settlement calculations seamlessly.",
        bullets: ["Coordinated IT & Finance sign-off", "Clearance status dashboards", "Statutory gratuity & notice calculation"]
      }
    ],
    outcomes: [
      { metric: "60%", label: "Drop in routine HR queries" },
      { metric: "70%", label: "Faster candidate turnaround" },
      { metric: "Zero", label: "Lost onboarding documents" },
      { metric: "100%", label: "Digital FnF clearance" }
    ],
    faqs: [
      { q: "Does the AI assistant replace HR decisions?", a: "Never. The AI handles data collation, scheduling, and rubric drafting; your team retains 100% decision authority." }
    ]
  },
  {
    name: "For Finance & Payroll Teams",
    href: "/solutions/finance",
    tag: "Payroll, Tax & Budgeting",
    text: "Zero-error payroll processing, automated statutory tax deductions, expense disbursements, and real-time compensation insights.",
    image: "/907faf08-b342-486c-b0b4-50109f954dd8.jpg",
    heading: "Flawless payroll accuracy with automated statutory compliance",
    challenges: [
      { title: "Manual Spreadsheet Adjustments", desc: "Reconciling unpaid leaves, bonuses, overtime, and tax deductions in Excel creates costly calculation errors." },
      { title: "Complex Statutory Compliance", desc: "Keeping up with varying state-level professional taxes, PF caps, ESI changes, and gratuity calculations." },
      { title: "Expense Reimbursement Lag", desc: "Lost receipts and delayed paper claim approvals create employee frustration and accounting delays." }
    ],
    offerings: [
      {
        title: "Automated Multi-Entity Payroll Engine",
        desc: "Calculate salaries, statutory deductions, and tax withholdings with one click directly from live attendance data.",
        bullets: ["Direct attendance & leave sync", "Automated PF, PT, TDS & ESI filing files", "Instant direct bank salary disbursement"]
      },
      {
        title: "Statutory Gratuity & Settlement Automation",
        desc: "Accurately compute gratuity reserves and FnF settlements compliant with the Payment of Gratuity Act.",
        bullets: ["Accurate 15/26 working day formula", "Statutory tax exemption caps", "Notice period buyout recovery"]
      },
      {
        title: "Integrated Expense Management",
        desc: "Employees submit digital receipts via mobile; managers and finance approve with customizable multi-tier limits.",
        bullets: ["OCR receipt scanning", "Automated policy violation flags", "Direct payroll payout inclusion"]
      }
    ],
    outcomes: [
      { metric: "99.99%", label: "Statutory payroll accuracy" },
      { metric: "2 Days", label: "Saved per monthly pay cycle" },
      { metric: "100%", label: "Tax compliance audit readiness" },
      { metric: "Zero", label: "Reconciliation discrepancy" }
    ],
    faqs: [
      { q: "Can we generate bank-ready disbursement text files?", a: "Yes, Sqalible generates pre-formatted salary payout files for all major banks (HDFC, ICICI, SBI, Axis, HSBC, Citi)." }
    ]
  },
  {
    name: "For IT & Security Teams",
    href: "/solutions/it-security",
    tag: "Access, Hardware & SSO",
    text: "Automate hardware asset inventory, single-click access provisioning, and instant SSO revocation upon employee exit.",
    image: "/2ecb6e0b-473d-4453-a856-34711b3ce29e.jpg",
    heading: "Eliminate zombie accounts and automate hardware lifecycle tracking",
    challenges: [
      { title: "Zombie Account Vulnerabilities", desc: "Former employees retaining active logins to corporate systems days or weeks after departure." },
      { title: "Uncoordinated Hardware Provisioning", desc: "IT receiving last-minute notices to configure laptops, leading to delayed onboarding." },
      { title: "Lost Hardware & Missing Audit Records", desc: "Laptops, monitors, and access cards lost during remote employee transitions." }
    ],
    offerings: [
      {
        title: "Automated Access Deprovisioning",
        desc: "When an offboarding date arrives, Sqalible triggers automatic SSO revocation across Google Workspace, Slack, and Okta.",
        bullets: ["Zero lingering zombie logins", "Instant session invalidation", "Immutable security audit logs"]
      },
      {
        title: "Real-Time Hardware Asset Inventory",
        desc: "Track serial numbers, hardware specs, employee assignments, and warranty status in a centralized dashboard.",
        bullets: ["Serial number & asset tagging", "Digital handover acknowledgment", "Automated return shipping labels"]
      },
      {
        title: "Enterprise SSO & SAML 2.0 Integration",
        desc: "Seamless integration with corporate identity providers like Okta, Azure Active Directory, and Google Cloud Identity.",
        bullets: ["Enforced Multi-Factor Authentication", "Role-based group access", "SOC 2 Type II compliant controls"]
      }
    ],
    outcomes: [
      { metric: "Instant", label: "Access revocation on exit" },
      { metric: "100%", label: "Asset tracking across lifecycle" },
      { metric: "SOC 2", label: "Type II certified infrastructure" },
      { metric: "Zero", label: "Unaccounted corporate devices" }
    ],
    faqs: [
      { q: "Can Sqalible integrate with Google Workspace and Okta?", a: "Yes, we support native SCIM and SAML 2.0 provisioning protocols for automated user lifecycle synchronization." }
    ]
  },
  {
    name: "For Leadership & Founders",
    href: "/solutions/leadership",
    tag: "CEOs, COOs & CHROs",
    text: "Real-time workforce telemetry, organizational health signals, headcount budget tracking, and informed decision-making.",
    image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg",
    heading: "Executive clarity on talent velocity, retention, and workforce costs",
    challenges: [
      { title: "Delayed Workforce Reporting", desc: "Waiting weeks for compiled HR spreadsheets to understand attrition, hiring progress, and payroll costs." },
      { title: "Unexpected Resignations", desc: "High-performing leaders leaving without early warning signals or proactive engagement indicators." },
      { title: "Uncontrolled Headcount Costs", desc: "Difficulty forecasting compensation, bonuses, and statutory provisions across scaling business units." }
    ],
    offerings: [
      {
        title: "Executive People Intelligence Dashboard",
        desc: "Live visual telemetry covering headcount growth, attrition rates, time-to-hire, and department wage totals.",
        bullets: ["Real-time KPI metrics", "Departmental cost breakdown", "1-click executive board exports"]
      },
      {
        title: "Predictive Talent Retention Alerts",
        desc: "Identify potential burnout and flight risks early through objective engagement telemetry.",
        bullets: ["Early attrition indicators", "Internal talent mobility tracking", "Confidential executive views"]
      },
      {
        title: "Strategic Headcount & Budget Planning",
        desc: "Model hiring plans against revenue forecasts with automated compensation benchmarking.",
        bullets: ["Scenario cost modeling", "Approval gating for requisitions", "Cross-regional wage comparison"]
      }
    ],
    outcomes: [
      { metric: "100%", label: "Real-time executive visibility" },
      { metric: "-25%", label: "Unplanned employee attrition" },
      { metric: "1-Click", label: "Board & audit report generation" },
      { metric: "100%", label: "Headcount budget control" }
    ],
    faqs: [
      { q: "Can leadership access confidential compensation reports?", a: "Yes, our granular role-based permissions ensure sensitive executive payroll data remains restricted to authorized stakeholders." }
    ]
  },
  {
    name: "For Employees & Team Members",
    href: "/solutions/employees",
    tag: "Self-Service & Experience",
    text: "A consumer-grade mobile and web experience for instant leave requests, digital payslips, tax forms, and company directory access.",
    image: "/fe6f799a-0f6d-45b1-ac0c-1f54d8f02acf.jpg",
    heading: "Frictionless self-service tools that empower your daily work life",
    challenges: [
      { title: "Chasing HR for Basic Requests", desc: "Having to email HR and wait days for a copy of last month's payslip or leave balance confirmation." },
      { title: "Complex Clunky Portals", desc: "Frustrating, outdated corporate portals that require endless clicks just to apply for a single vacation day." },
      { title: "Unclear Policy Answers", desc: "Digging through 50-page PDF policy handbooks to find simple answers about maternity leave or medical insurance." }
    ],
    offerings: [
      {
        title: "1-Click Leave & Attendance Mobile App",
        desc: "Apply for leave, check team availability calendars, and clock in with geofenced mobile verification.",
        bullets: ["Instant leave balance visibility", "Calendar sync with Google/Outlook", "Quick manager approvals via Slack"]
      },
      {
        title: "Instant Digital Payslips & Tax Documents",
        desc: "Download encrypted PDF salary slips, view annual CTC summaries, and upload tax-saving investment proofs.",
        bullets: ["Historical payslip archive", "Form 16 & tax deduction breakdowns", "Encrypted document downloads"]
      },
      {
        title: "Interactive Policy & FAQ Self-Service",
        desc: "Get instant, accurate answers to questions regarding benefits, reimbursements, and company policies.",
        bullets: ["Permission-aware policy search", "Transparent workflow tracking", "Modern intuitive UI"]
      }
    ],
    outcomes: [
      { metric: "1-Click", label: "Leave application & approval" },
      { metric: "24/7", label: "Instant self-service availability" },
      { metric: "4.8/5", label: "Employee mobile app satisfaction" },
      { metric: "Zero", label: "Wait time for payslips" }
    ],
    faqs: [
      { q: "Is there a dedicated mobile app for employees?", a: "Yes, Sqalible provides iOS and Android mobile apps for attendance, leave management, payslip access, and approvals." }
    ]
  }
];

export const solutionsByRegion: SolutionItem[] = [
  {
    name: "India & South Asia",
    href: "/solutions/india",
    tag: "Statutory Labour Code Aligned",
    text: "Native statutory compliance covering PF, ESI, TDS, the Payment of Gratuity Act 1972, Shops & Establishments, and multi-state PT.",
    image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg",
    heading: "India's premier statutory-compliant AI-native HRMS",
    challenges: [
      { title: "Multi-State PT & Statutory Variation", desc: "Managing distinct Professional Tax slabs, Labour Welfare Fund (LWF) contributions, and Shops & Establishments rules across different Indian states." },
      { title: "Gratuity & FnF Dispute Liabilities", desc: "Calculating complex gratuity formulas (15/26 rule) and leave encashment manually risks costly legal disputes during employee exits." },
      { title: "EPF & ESI Monthly Filing Errors", desc: "Generating manual Electronic Challan cum Return (ECR) files often leads to rejection penalties from the EPFO portal." }
    ],
    offerings: [
      {
        title: "Automated PF, ESI & Multi-State PT",
        desc: "Generate error-free monthly ECR files, ESI challans, and state-specific Professional Tax schedules with one click.",
        bullets: ["Pre-validated EPFO ECR format", "Automatic wage ceiling caps (₹15,000 / ₹21,000)", "All 28 Indian state PT rules supported"]
      },
      {
        title: "Statutory Payment of Gratuity Automation",
        desc: "Built-in calculation engine using the 15/26 working day formula, 5-year tenure checks, and ₹20 Lakh tax-free ceiling tracking.",
        bullets: ["Act-compliant tenure rounding (>6 months)", "Automated gratuity liability provisioning", "Seamless Full & Final (FnF) inclusion"]
      },
      {
        title: "TDS & Tax Regime Optimization",
        desc: "Support employees across both the New Tax Regime (Section 115BAC) and Old Tax Regime with digital investment proof verification.",
        bullets: ["Section 80C, 80D & HRA calculation", "Instant Form 16 Part A & B generation", "Quarterly 24Q filing preparation"]
      }
    ],
    outcomes: [
      { metric: "100%", label: "EPFO & ESIC challan acceptance" },
      { metric: "₹20L", label: "Statutory gratuity cap tracking" },
      { metric: "28 States", label: "Professional tax slabs covered" },
      { metric: "Zero", label: "Statutory audit penalties" }
    ],
    faqs: [
      { q: "Does Sqalible support the 4 new Indian Labour Codes?", a: "Yes, our payroll architecture is pre-configured to adapt to the 50% basic wage rule and new statutory definitions." }
    ]
  },
  {
    name: "Middle East & GCC",
    href: "/solutions/middle-east",
    tag: "WPS & Arabic RTL Ready",
    text: "Wages Protection System (WPS) compliant files (UAE, KSA), End of Service Gratuity (EOSG), GOSI integration, and bilingual Arabic RTL.",
    image: "/heroes/solutions-middle-east-hero.jpg",
    heading: "Bilingual GCC workforce management with automated WPS compliance",
    challenges: [
      { title: "Strict WPS File Compliance", desc: "Failing to upload valid SIF files to the Central Bank's Wages Protection System risks immediate corporate license freezing in UAE and KSA." },
      { title: "End of Service Gratuity (EOSG) Calculation", desc: "Complex labour laws mandate tiered 21-day and 30-day salary multipliers based on resignation vs termination and years of service." },
      { title: "Bilingual Workforce Operations", desc: "Corporate teams need full right-to-left (RTL) Arabic support alongside English for multinational staffing." }
    ],
    offerings: [
      {
        title: "1-Click Wages Protection System (WPS) SIF Files",
        desc: "Generate compliant SIF text files formatted precisely to Central Bank standards for UAE (MOHRE), Saudi Arabia (MHRSD), and Qatar.",
        bullets: ["Zero rejected salary files", "Automatic MOL employer ID tracking", "Multi-currency bank file export"]
      },
      {
        title: "GCC End-of-Service Benefit (EOSG) Engine",
        desc: "Automated calculations following UAE Labour Law (Federal Decree Law No. 33 of 2021) and Saudi Labour Law.",
        bullets: ["21 days wage for first 5 years", "30 days wage for each additional year", "Accurate basic vs allowance deductions"]
      },
      {
        title: "Native Right-to-Left (RTL) Arabic Interface",
        desc: "Switch the entire platform, employee self-service portal, and mobile apps between English and native Arabic seamlessly.",
        bullets: ["Full Arabic typography & UX layout", "Bilingual contracts and offer letters", "Local GCC support team"]
      }
    ],
    outcomes: [
      { metric: "100%", label: "WPS SIF acceptance rate" },
      { metric: "UAE & KSA", label: "Full labour law compliance" },
      { metric: "RTL", label: "Native Arabic language support" },
      { metric: "EOSG", label: "Automated gratuity provisioning" }
    ],
    faqs: [
      { q: "Is GOSI contribution supported for Saudi nationals?", a: "Yes, GOSI social insurance contributions are automatically calculated and deducted according to Saudi Arabian regulations." }
    ]
  },
  {
    name: "United States & North America",
    href: "/solutions/us",
    tag: "Multi-State & FLSA Compliant",
    text: "Automated multi-state payroll tax withholding, W-2 & 1099 contractor handling, FLSA overtime compliance, 401(k), and health benefits.",
    image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg",
    heading: "Multi-state US workforce management and contractor administration",
    challenges: [
      { title: "Complex Multi-State Tax Nexus", desc: "Employees working remotely across different states trigger distinct state, county, and local payroll tax withholding obligations." },
      { title: "FLSA Overtime & Classification Risks", desc: "Misclassifying exempt vs non-exempt employees or 1099 contractors leads to severe Department of Labor (DOL) penalties." },
      { title: "Benefits & 401(k) Synchronization", desc: "Coordinating healthcare deductions, HSA/FSA plans, and 401(k) retirement contributions with external custodians." }
    ],
    offerings: [
      {
        title: "Automated 50-State Payroll Tax Engine",
        desc: "Calculate federal, state, and local income tax withholdings, FICA (Social Security & Medicare), and FUTA/SUTA unemployment taxes.",
        bullets: ["Automated reciprocal tax agreements", "W-2 and 1099-NEC generation", "Direct integration with US payroll clearinghouses"]
      },
      {
        title: "FLSA Overtime & Break Compliance",
        desc: "Accurate tracking of non-exempt employee hours, California meal break rules, and federal time-and-a-half overtime rates.",
        bullets: ["Automated overtime multipliers", "Audit-proof timesheet approvals", "Exempt vs non-exempt job categorization"]
      },
      {
        title: "Benefits Administration & 401(k) Sync",
        desc: "Seamless pre-tax and post-tax employee contribution sync with major retirement custodians and healthcare benefit carriers.",
        bullets: ["Open enrollment workflows", "Section 125 cafeteria plan support", "ACA (Affordable Care Act) reporting ready"]
      }
    ],
    outcomes: [
      { metric: "50 States", label: "Tax withholding nexus supported" },
      { metric: "W-2 & 1099", label: "Unified employee & contractor payroll" },
      { metric: "FLSA", label: "Audit-proof overtime tracking" },
      { metric: "SOC 2", label: "Type II certified security" }
    ],
    faqs: [
      { q: "Can we pay both full-time W-2 employees and 1099 contractors?", a: "Yes, Sqalible supports dual tracks for regular salaried/hourly employees and independent contractors with automated 1099 reporting." }
    ]
  },
  {
    name: "United Kingdom & Europe",
    href: "/solutions/europe",
    tag: "GDPR & Works Councils",
    text: "GDPR employee data privacy, Works Councils governance, statutory holiday accruals, SEPA direct deposits, and HMRC PAYE readiness.",
    image: "/99dc7c63-7982-4fbe-ae0b-7985dd4f089d.jpg",
    challenges: [
      { title: "Strict GDPR Employee Privacy Protections", desc: "Stringent European data sovereignty regulations govern employee monitoring, consent handling, and Subject Access Requests (SARs)." },
      { title: "Works Councils & Collective Bargaining", desc: "Major changes to shift rosters, compensation, or software monitoring require formal consultation with employee Works Councils." },
      { title: "Diverse Multi-Country Leave Entitlements", desc: "Each European nation enforces distinct statutory minimum paid holiday rules, parental leave schemes, and sick pay structures." }
    ],
    offerings: [
      {
        title: "GDPR Privacy-by-Design Architecture",
        desc: "Built-in data minimization, automated Subject Access Request (SAR) exports, strict consent toggles, and EU data residency.",
        bullets: ["EU-based data centers (Frankfurt/Dublin)", "Right-to-be-forgotten exit workflows", "Zero non-permissioned employee telemetry"]
      },
      {
        title: "Country-Specific Statutory Leave Engines",
        desc: "Pre-configured European leave rules covering UK 28-day statutory holidays, Germany Bundesurlaubsgesetz, and France RTT days.",
        bullets: ["Automated holiday accruals", "Parental leave policy templates", "Working Time Directive (WTD) maximum hour alerts"]
      },
      {
        title: "SEPA Direct Debit & HMRC PAYE Support",
        desc: "Generate compliant Single Euro Payments Area (SEPA) XML salary disbursement files and UK Real Time Information (RTI) feeds.",
        bullets: ["Euro & GBP currency support", "Cross-border European contractor payouts", "Statutory pension scheme deduction integration"]
      }
    ],
    outcomes: [
      { metric: "100%", label: "GDPR & DPDP Act compliance" },
      { metric: "SEPA", label: "Pan-European XML payment files" },
      { metric: "EU Hosted", label: "Frankfurt / Dublin data residency" },
      { metric: "Zero", label: "Regulatory privacy fines" }
    ],
    faqs: [
      { q: "Where is employee data physically hosted for EU customers?", a: "European client data is stored strictly in AWS/GCP regions located in Frankfurt, Germany and Dublin, Ireland with no unauthorized transfers." }
    ]
  },
  {
    name: "Southeast Asia & APAC",
    href: "/solutions/apac",
    tag: "Singapore CPF & Malaysia EPF",
    text: "Automated Central Provident Fund (CPF), Malaysian EPF & SOCSO, Indonesian BPJS, and regional multi-currency cross-border payroll.",
    image: "/heroes/solutions-apac-hero.jpg",
    challenges: [
      { title: "Diverse ASEAN Labour Frameworks", desc: "Coordinating payroll across Singapore (MOM), Malaysia (LHDN), and regional offices with different statutory deductions." }
    ],
    offerings: [
      {
        title: "Regional CPF, EPF & Statutory Filing Engine",
        desc: "Automated calculations compliant with Singapore CPF Act, Malaysian statutory contributions, and regional leave mandates.",
        bullets: ["Singapore MOM compliance", "Malaysian EPF & SOCSO generation", "Multi-currency bank files"]
      }
    ],
    outcomes: [
      { metric: "100%", label: "MOM & CPF statutory accuracy" },
      { metric: "Multi-Currency", label: "SGD, MYR, IDR, AUD support" }
    ],
    faqs: [
      { q: "Does Sqalible support Singapore CPF e-Submit?", a: "Yes, pre-formatted CPF submission files can be directly uploaded to the CPF board portal." }
    ]
  }
];