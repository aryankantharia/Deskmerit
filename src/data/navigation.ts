import { FooterColumn, NavItem } from "../types/navigation";

export const navItems: NavItem[] = [
  // 1. Platform (Mega menu)
  {
    type: "menu",
    layout: "mega",
    key: "platform",
    name: "Platform",
    href: "/platform",
    heading: "The AI-Native HRMS Platform",
    description: "One unified lifecycle model: Hire, Onboard, Manage, Pay, Grow, Exit, with Sqalible AI as a horizontal intelligence layer.",
    subMenus: [
      {
        name: "Hire",
        href: "/platform/hire",
        tag: "#TalentAcquisition",
        description: "Autonomous live interviews, instant resume screening, and collaborative offer management.",
        image: "/dashboards/ai-interview-dashboard.png",
        links: [
          {
            title: "Hiring Requests & Approvals",
            href: "/platform/hiring-requests",
            tag: "#ApprovalWorkflows",
            description: "Multi-level headcount approval workflows and requisition tracking.",
            image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
          },
          {
            title: "Sourcing & Job Posting",
            href: "/platform/sourcing",
            tag: "#OmnichannelSourcing",
            description: "1-click multi-board job distribution, candidate harvesting, and career site builder.",
            image: "/2ecb6e0b-473d-4453-a856-34711b3ce29e.jpg"
          },
          {
            title: "AI Resume Screening",
            href: "/platform/ai-resume-screening",
            tag: "#InstantScreening",
            description: "Multi-parameter parsing, scoring, and candidate ranking in seconds.",
            image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
          },
          {
            title: "AI Voice Screening",
            href: "/platform/ai-voice-screening",
            tag: "#VoiceAutomation",
            description: "Automated phone screen calls evaluating communication and role fit.",
            image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg"
          },
          {
            title: "AI Live Interview",
            href: "/platform/ai-live-interview",
            flag: "Flagship",
            tag: "#FlagshipAI",
            description: "Autonomous live avatar interviews with adaptive resume-aware questioning.",
            image: "/dashboards/ai-interview-dashboard.png"
          },
          {
            title: "Interview Management",
            href: "/platform/interviews",
            tag: "#SmartScheduling",
            description: "Self-scheduling links, interviewer scorecards, and calendar sync.",
            image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg"
          },
          {
            title: "Offer Management",
            href: "/platform/offers",
            tag: "#DigitalSignatures",
            description: "Configurable offer letters, salary structure builder, and e-signatures.",
            image: "/fe6f799a-0f6d-45b1-ac0c-1f54d8f02acf.jpg"
          },
          {
            title: "Referral & Vendor Portals",
            href: "/platform/referrals-vendors",
            tag: "#VendorEcosystem",
            description: "Track agency submissions, duplicate candidates, and employee referral payouts.",
            image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
          }
        ]
      },
      {
        name: "Onboard",
        href: "/platform/onboard",
        tag: "#InstantOnboarding",
        description: "Zero-friction preboarding, background verification, IT provisioning, and milestone reviews.",
        image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg",
        links: [
          {
            title: "Pre-boarding & Day One",
            href: "/platform/onboarding",
            tag: "#DelightfulStart",
            description: "Digital document collection, automated welcomes, and orientation roadmaps.",
            image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
          },
          {
            title: "Background Verification",
            href: "/platform/background-verification",
            tag: "#InstantBGV",
            description: "Integrated ID, criminal, education, and previous employment checks.",
            image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg"
          },
          {
            title: "IT Provisioning",
            href: "/platform/it-provisioning",
            tag: "#DayOneReady",
            description: "Automated hardware, email, VPN, and SaaS tool access assignment.",
            image: "/2ecb6e0b-473d-4453-a856-34711b3ce29e.jpg"
          },
          {
            title: "Probation Management",
            href: "/platform/probation",
            tag: "#MilestoneTracking",
            description: "30-60-90 day milestone reviews, automated manager reminders, and sign-offs.",
            image: "/d2800437-db93-453b-adc5-1022c940c3a4.jpg"
          }
        ]
      },
      {
        name: "Manage",
        href: "/platform/manage",
        tag: "#CoreOperations",
        description: "Unified records, attendance, biometric sync, statutory payroll, and employee helpdesk.",
        image: "/dashboards/assets-core-hr-dashboard.png",
        links: [
          {
            title: "Core HR & Employee Records",
            href: "/platform/core-hr",
            tag: "#UnifiedDatabase",
            description: "Centralized employee profiles, documents, org charts, and audit trails.",
            image: "/dashboards/assets-core-hr-dashboard.png"
          },
          {
            title: "Attendance & Shifts",
            href: "/platform/attendance",
            tag: "#BiometricAndGeofence",
            description: "Real-time shift scheduling, overtime tracking, and biometric sync.",
            image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg"
          },
          {
            title: "Leave Management",
            href: "/platform/leave",
            tag: "#SmartLeave",
            description: "Configurable policy rules, multi-tier approvals, and statutory balances.",
            image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
          },
          {
            title: "Payroll Compliance",
            href: "/platform/payroll-compliance",
            tag: "#StatutoryPayroll",
            description: "1-click multi-country payroll, tax filings, and auto-computed slips.",
            image: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
          },
          {
            title: "Compensation & Benefits",
            href: "/platform/compensation-benefits",
            tag: "#TotalRewards",
            description: "Salary benchmarks, insurance enrollments, and flexible benefit plans.",
            image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
          },
          {
            title: "Expenses & Claims",
            href: "/platform/expenses",
            tag: "#ExpenseAutomation",
            description: "OCR receipt scanning, multi-currency claims, and automated policy validation.",
            image: "/2842f225-67b6-4f7b-bceb-35ea9b273044.jpg"
          },
          {
            title: "HR Helpdesk",
            href: "/platform/helpdesk",
            tag: "#SLAAutomation",
            description: "AI-assisted ticket routing, employee self-serve resolutions, and SLAs.",
            image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
          }
        ]
      },
      {
        name: "Grow",
        href: "/platform/grow",
        tag: "#TalentDevelopment",
        description: "Align OKRs, power continuous 360 feedback, internal mobility, and skills training.",
        image: "/d2800437-db93-453b-adc5-1022c940c3a4.jpg",
        links: [
          {
            title: "Goals & OKRs",
            href: "/platform/goals-okrs",
            tag: "#ContinuousAlignment",
            description: "Cascading company, team, and individual goals with progress heatmaps.",
            image: "/d2800437-db93-453b-adc5-1022c940c3a4.jpg"
          },
          {
            title: "360° Feedback",
            href: "/platform/360-feedback",
            tag: "#PeerReviews",
            description: "Multi-rater peer, manager, and subordinate reviews with bias detection.",
            image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
          },
          {
            title: "Internal Mobility",
            href: "/platform/internal-mobility",
            tag: "#TalentMarketplace",
            description: "AI skills mapping for project staffing and internal career pathways.",
            image: "/2842f225-67b6-4f7b-bceb-35ea9b273044.jpg"
          },
          {
            title: "Learning (LMS)",
            href: "/platform/learning",
            tag: "#SkillBuilding",
            description: "Course libraries, compliance certifications, and adaptive skill tracks.",
            image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
          }
        ]
      },
      {
        name: "Exit",
        href: "/platform/exit",
        tag: "#CompliantOffboarding",
        description: "Automated departmental clearances, statutory settlements, and instant deprovisioning.",
        image: "/fe6f799a-0f6d-45b1-ac0c-1f54d8f02acf.jpg",
        links: [
          {
            title: "Offboarding & Compliance Gates",
            href: "/platform/offboarding",
            tag: "#ZeroRiskExit",
            description: "Departmental no-dues clearance checklists and knowledge handover gates.",
            image: "/fe6f799a-0f6d-45b1-ac0c-1f54d8f02acf.jpg"
          },
          {
            title: "Full & Final Settlement",
            href: "/platform/full-and-final",
            tag: "#AccurateSettlement",
            description: "Gratuity, leave encashment, notice pay calculation, and tax statements.",
            image: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
          },
          {
            title: "Access Revocation",
            href: "/platform/access-revocation",
            tag: "#InstantDeprovisioning",
            description: "Instant automated revocation across SSO, email, GitHub, and SaaS tools.",
            image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg"
          },
          {
            title: "Exit Interviews & Alumni",
            href: "/platform/exit-interviews",
            tag: "#AlumniNetwork",
            description: "Structured confidential feedback, attrition insights, and alumni engagement.",
            image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
          },
          {
            title: "Ex-Employee Portal",
            href: "/platform/alumni-portal",
            tag: "#AlumniPortal",
            description: "Self-serve access to historical payslips, tax forms, and alumni rehiring programs.",
            image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
          }
        ]
      },
      {
        name: "AI & Analytics",
        href: "/platform/ai-analytics",
        tag: "#WorkforceIntelligence",
        description: "Predictive attrition modeling, conversational HR agents, and workforce planning.",
        image: "/dashboards/ai-interview-dashboard.png",
        links: [
          {
            title: "AI HR Assistant",
            href: "/platform/ai-assistant",
            tag: "#AutonomousHR",
            description: "24/7 conversational employee service for policies, payroll, and requests.",
            image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
          },
          {
            title: "Engagement & Workforce Insights",
            href: "/platform/workforce-insights",
            tag: "#PeopleAnalytics",
            description: "Real-time pulse surveys, sentiment trends, and organizational health metrics.",
            image: "/2842f225-67b6-4f7b-bceb-35ea9b273044.jpg"
          },
          {
            title: "Attrition Risk",
            href: "/platform/attrition-risk",
            tag: "#PredictiveRetention",
            description: "Predictive early-warning signals identifying flight risks before notice.",
            image: "/dashboards/ai-interview-dashboard.png"
          },
          {
            title: "Hiring & Workforce Planning",
            href: "/platform/workforce-planning",
            tag: "#HeadcountForecasting",
            description: "Scenario modelling, capacity forecasting, and budget variance tracking.",
            image: "/dashboards/assets-core-hr-dashboard.png"
          }
        ]
      }
    ],
    feature: {
      title: "Meet Sqalible Interview: an AI that interviews live",
      text: "Live AI avatar interviews, adaptive resume-aware questions, coding-approach evaluation, and human sign-off.",
      image: "/dashboards/ai-interview-dashboard.png",
      primary: { title: "Try AI Interview", href: "/platform/ai-live-interview" },
      secondary: { title: "Explore Platform", href: "/platform" }
    }
  },

  // 2. Solutions (Mega menu)
  {
    type: "menu",
    layout: "mega",
    key: "solutions",
    name: "Solutions",
    href: "/solutions",
    heading: "Solutions by Company Size, Industry, Team & Region",
    description: "Built for how your organization operates, scales, and stays compliant worldwide.",
    subMenus: [
      {
        name: "By company size",
        tag: "#TailoredScale",
        description: "Agile packages tailored specifically for startups, high-growth mid-market, and global enterprises.",
        image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg",
        links: [
          {
            title: "Startups",
            href: "/solutions/startups",
            tag: "#RapidLaunch",
            description: "Deploy full HRMS & AI hiring in 48 hours with transparent startup pricing.",
            image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
          },
          {
            title: "Mid-Market",
            href: "/solutions/mid-market",
            tag: "#ScaleSeamlessly",
            description: "Automate complex shift rosters, multi-entity payroll, and performance cycles.",
            image: "/2842f225-67b6-4f7b-bceb-35ea9b273044.jpg"
          },
          {
            title: "Enterprise",
            href: "/solutions/enterprise",
            tag: "#GlobalScale",
            description: "SOC 2 Type II, dedicated tenant isolation, and custom API integrations.",
            image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
          }
        ]
      },
      {
        name: "By industry",
        tag: "#IndustryTailored",
        description: "Specialized workflows built for IT services, manufacturing shifts, healthcare, retail, and BFSI.",
        image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg",
        links: [
          {
            title: "IT Services & Staffing",
            href: "/solutions/it-staffing",
            tag: "#HighVolumeHiring",
            description: "Accelerate bench deployment, contractor compliance, and tech screening.",
            image: "/2ecb6e0b-473d-4453-a856-34711b3ce29e.jpg"
          },
          {
            title: "Manufacturing",
            href: "/solutions/manufacturing",
            tag: "#ShiftOperations",
            description: "Shift rotations, overtime controls, plant-level safety, and contractor gates.",
            image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg"
          },
          {
            title: "Healthcare",
            href: "/solutions/healthcare",
            tag: "#24x7Rosters",
            description: "Credential verification, clinical rotation shifts, and emergency coverages.",
            image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
          },
          {
            title: "Retail",
            href: "/solutions/retail",
            tag: "#FrontlineStaff",
            description: "Store-level geo-punching, rapid seasonal hiring, and mobile employee app.",
            image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg"
          },
          {
            title: "BFSI",
            href: "/solutions/bfsi",
            tag: "#StrictCompliance",
            description: "Stringent regulatory compliance, background screening, and audit logs.",
            image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg"
          },
          {
            title: "SaaS & Technology",
            href: "/solutions/it-staffing",
            tag: "#RemoteFirst",
            description: "Global contractor payroll, stock option tracking, and remote onboarding.",
            image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
          }
        ]
      },
      {
        name: "By team",
        tag: "#RoleEmpowerment",
        description: "Dedicated dashboards engineered for HR, Finance, IT, Leadership, and Employees.",
        image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg",
        links: [
          {
            title: "For HR Leaders",
            href: "/solutions/hr-teams",
            tag: "#ModernPeopleOps",
            description: "Eliminate repetitive paperwork and automate the entire employee journey.",
            image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
          },
          {
            title: "For Finance",
            href: "/solutions/finance",
            tag: "#PayrollAccuracy",
            description: "Audit-ready payroll, tax declarations, and real-time expense reconciliation.",
            image: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
          },
          {
            title: "For IT & Security",
            href: "/solutions/it-security",
            tag: "#ZeroTrustAccess",
            description: "Automated provisioning, SSO enforcement, and one-click deprovisioning.",
            image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg"
          },
          {
            title: "For Leadership",
            href: "/solutions/leadership",
            tag: "#ExecutiveDashboards",
            description: "Live headcount metrics, attrition forecasting, and workforce budgeting.",
            image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
          },
          {
            title: "For Employees",
            href: "/solutions/employees",
            tag: "#SelfServeMobile",
            description: "Mobile-first self-service for payslips, leaves, tax forms, and helpdesk.",
            image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg"
          },
          {
            title: "For Operations",
            href: "/solutions/mid-market",
            tag: "#OperationalAgility",
            description: "Streamlined multi-location asset tracking and policy enforcement.",
            image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
          }
        ]
      },
      {
        name: "By region",
        tag: "#GlobalCompliance",
        description: "Localized tax engines, social security deductions, and statutory compliance worldwide.",
        image: "/907faf08-b342-486c-b0b4-50109f954dd8.jpg",
        links: [
          {
            title: "India",
            href: "/solutions/india",
            tag: "#IndiaStatutory",
            description: "PF, ESI, PT, TDS, Gratuity, and Form 16 fully automated out-of-the-box.",
            image: "/907faf08-b342-486c-b0b4-50109f954dd8.jpg"
          },
          {
            title: "Middle East",
            href: "/solutions/middle-east",
            tag: "#WPSAndGOSI",
            description: "WPS integration, GOSI, Gratuity / End of Service calculations, and multi-currency.",
            image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
          },
          {
            title: "United States",
            href: "/solutions/us",
            tag: "#USCompliance",
            description: "Federal, state, and local tax compliance, W-2/1099, and benefits management.",
            image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
          },
          {
            title: "Europe & UK",
            href: "/solutions/europe",
            tag: "#GDPRReady",
            description: "GDPR-compliant data handling, HMRC PAYE filing, and statutory sick/maternity pay.",
            image: "/2ecb6e0b-473d-4453-a856-34711b3ce29e.jpg"
          }
        ]
      }
    ]
  },

  // 3. Why Sqalible (Mega menu)
  {
    type: "menu",
    layout: "mega",
    key: "why-sqalible",
    name: "Why Sqalible",
    href: "/why-sqalible",
    heading: "Differentiators, Trust & Integrations",
    description: "AI built into every lifecycle stage, enterprise trust standards, and head-to-head comparisons.",
    subMenus: [
      {
        name: "Differentiation",
        tag: "#TheAIEdge",
        description: "Purpose-built AI architecture delivering 10x recruitment speed and zero-touch compliance.",
        image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
        bullets: [
          "Autonomous real-time screening & video interviews",
          "Continuous compliance with automatic statutory tax rules",
          "Human-in-the-loop ethical AI governance"
        ],
        links: [
          {
            title: "AI-Native vs Legacy HRMS",
            href: "/why-sqalible",
            tag: "#NextGenArchitecture",
            description: "Built from scratch with conversational AI models, not patched onto 15-year old legacy databases.",
            image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
            bullets: [
              "Real-time AI screening & interview",
              "Autonomous workforce telemetry",
              "Zero-friction employee self-service"
            ]
          },
          {
            title: "Responsible AI Policy",
            href: "/responsible-ai",
            tag: "#EthicalAI",
            description: "Human-in-the-loop governance, bias-free candidate evaluation, and full algorithmic audit trails.",
            image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg",
            bullets: [
              "Explainable candidate scoring",
              "Protected attribute masking",
              "Full audit log transparency"
            ]
          }
        ]
      },
      {
        name: "Trust & Ecosystem",
        tag: "#EnterpriseTrust",
        description: "Bank-grade data isolation, SOC 2 Type II assurance, and seamless connectors for your stack.",
        image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg",
        bullets: [
          "SOC 2 Type II, ISO 27001 & GDPR certified",
          "End-to-end 256-bit encryption with regional data residency",
          "50+ pre-built integrations with Slack, Teams & ERPs"
        ],
        links: [
          {
            title: "Security & Trust Centre",
            href: "/security",
            tag: "#BankGradeSecurity",
            description: "SOC 2 Type II certified, ISO 27001, end-to-end encryption, and dedicated regional data residency.",
            image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg",
            bullets: [
              "SOC 2 Type II & ISO 27001 certified",
              "256-bit AES encryption at rest & transit",
              "Granular RBAC & tamper-evident audit logs"
            ]
          },
          {
            title: "Integrations & Open API",
            href: "/integrations",
            tag: "#ConnectedEcosystem",
            description: "Bi-directional sync with Slack, Microsoft Teams, Jira, Google Workspace, and leading ERPs.",
            image: "/99dc7c63-7982-4fbe-ae0b-7985dd4f089d.jpg",
            bullets: [
              "Pre-built Slack & Microsoft Teams bots",
              "Robust REST APIs and real-time Webhooks",
              "Native ERP & accounting software sync"
            ]
          }
        ]
      },
      {
        name: "Compare",
        tag: "#MarketComparisons",
        description: "Direct feature, automation, and pricing comparisons against legacy HR software providers.",
        image: "/2842f225-67b6-4f7b-bceb-35ea9b273044.jpg",
        links: [
          {
            title: "Sqalible vs Keka",
            href: "/compare/keka",
            tag: "#TrueAIAdvantage",
            description: "Compare native AI live interviews, hiring velocity, and pricing transparency against Keka.",
            image: "/2842f225-67b6-4f7b-bceb-35ea9b273044.jpg"
          },
          {
            title: "Sqalible vs Darwinbox",
            href: "/compare/darwinbox",
            tag: "#ModernAgility",
            description: "See why modern fast-growing teams choose Sqalible over heavyweight legacy enterprise suites.",
            image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
          },
          {
            title: "Sqalible vs greytHR",
            href: "/compare/greythr",
            tag: "#UnifiedExperience",
            description: "Upgrade from basic statutory payroll to an end-to-end intelligent employee lifecycle engine.",
            image: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
          }
        ]
      }
    ]
  },

  // 4. ScalForce (Direct link)
  {
    type: "link",
    key: "scalforce",
    title: "ScalForce",
    href: "/scalforce"
  },

  // 5. Pricing (Direct link)
  {
    type: "link",
    key: "pricing",
    title: "Pricing",
    href: "/pricing"
  },

  // 5. Resources (Mega menu)
  {
    type: "menu",
    layout: "mega",
    key: "resources",
    name: "Resources",
    href: "/resources",
    heading: "Learn, Free Tools & Support",
    description: "Guides, webinars, free HR calculators, templates, and documentation.",
    subMenus: [
      {
        name: "Learn",
        tag: "#KnowledgeHub",
        description: "Expert articles, strategic playbooks, live webinars, and verified customer case studies.",
        image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg",
        links: [
          {
            title: "Blog",
            href: "/blog",
            tag: "#HRInsights",
            description: "Deep dives on modern people operations, AI recruiting trends, and compliance changes.",
            image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
          },
          {
            title: "Guides & eBooks",
            href: "/resources/guides",
            tag: "#BestPractices",
            description: "Actionable playbooks on payroll audits, performance reviews, and retention strategies.",
            image: "/2ecb6e0b-473d-4453-a856-34711b3ce29e.jpg"
          },
          {
            title: "Webinars",
            href: "/resources/webinars",
            tag: "#ExpertPanels",
            description: "Live sessions and on-demand masterclasses with leading CHROs and people leaders.",
            image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
          },
          {
            title: "Customer Stories",
            href: "/customers",
            tag: "#ProvenROI",
            description: "How fast-growing organizations reduced hiring time by 70% and payroll errors to zero.",
            image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
          }
        ]
      },
      {
        name: "Free tools",
        tag: "#SelfServiceCalculators",
        description: "Interactive legal calculators and vetted documentation templates free for all HR leaders.",
        image: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg",
        links: [
          {
            title: "HR Templates Library",
            href: "/tools/templates",
            tag: "#FreeTemplates",
            description: "Over 50+ free offer letters, NDA agreements, performance review forms, and HR policies.",
            image: "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg"
          },
          {
            title: "Gratuity Calculator",
            href: "/tools/gratuity-calculator",
            tag: "#InstantCalc",
            description: "Compute statutory gratuity payouts with current Indian labor laws and tax exemption caps.",
            image: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
          },
          {
            title: "CTC / Salary Calculator",
            href: "/tools/ctc-calculator",
            tag: "#SalaryBreakup",
            description: "Convert between CTC, gross salary, and take-home pay with detailed tax deduction breakdown.",
            image: "/2842f225-67b6-4f7b-bceb-35ea9b273044.jpg"
          },
          {
            title: "Notice Pay Calculator",
            href: "/tools/notice-pay-calculator",
            tag: "#ExitCompliance",
            description: "Accurately calculate notice period shortfall or buyout amounts for smooth transitions.",
            image: "/fe6f799a-0f6d-45b1-ac0c-1f54d8f02acf.jpg"
          }
        ]
      },
      {
        name: "Support",
        tag: "#CustomerAssurance",
        description: "Comprehensive product documentation, release notes, and real-time operational uptime.",
        image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg",
        links: [
          {
            title: "Help Centre",
            href: "/help",
            tag: "#KnowledgeBase",
            description: "Step-by-step product walkthroughs, configuration guides, and onboarding videos.",
            image: "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg"
          },
          {
            title: "Product Updates",
            href: "/changelog",
            tag: "#Changelog",
            description: "See what's newly shipped, feature improvements, and upcoming roadmap milestones.",
            image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
          },
          {
            title: "System Status",
            href: "/status",
            tag: "#RealTimeUptime",
            description: "Live service uptime telemetry, scheduled maintenance windows, and incident history.",
            image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg"
          }
        ]
      }
    ]
  },

  // 6. Company (Mega menu)
  {
    type: "menu",
    layout: "mega",
    key: "company",
    name: "Company",
    href: "/about",
    heading: "About Sqalible",
    description: "Our story, team, open positions, partners, and contact channels.",
    subMenus: [
      {
        name: "About Sqalible",
        tag: "#OurMission",
        description: "Pioneering the AI-native future of work to make employment delightful, fair, and frictionless.",
        image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg",
        bullets: [
          "Our Story, Mission & Core Values",
          "Executive Leadership & Global Engineering Team",
          "Zero Legacy Compromise Philosophy"
        ],
        links: [
          {
            title: "Our Story & Mission",
            href: "/about#story",
            tag: "#FoundingStory",
            description: "Why we built an AI-native HRMS from scratch to eliminate repetitive workplace friction.",
            image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
          },
          {
            title: "Leadership & Team",
            href: "/about#team",
            tag: "#GlobalTalent",
            description: "Meet the engineers, designers, and domain leaders building Sqalible.",
            image: "/team/team-sarah-chen.jpg"
          }
        ]
      },
      {
        name: "Careers",
        tag: "#SqalibleHire",
        description: "Join our fast-moving, mission-driven team engineering the next generation of work technology.",
        image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg",
        bullets: [
          "Engineering, AI Research, Design & Sales openings",
          "Remote-first global culture with equity ownership",
          "Autonomous ownership and competitive compensation"
        ],
        links: [
          {
            title: "Open Roles",
            href: "/careers",
            tag: "#WorkWithUs",
            description: "Browse all active openings in Engineering, Product, AI Research, and Growth.",
            image: "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg"
          },
          {
            title: "Life at Sqalible",
            href: "/life-at-sqalible",
            tag: "#CultureFirst",
            description: "Our values, asynchronous workflows, learning allowances, and team offsites.",
            image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg"
          }
        ]
      },
      {
        name: "Partners",
        href: "/partners",
        tag: "#GlobalPartners",
        description: "Implementation, technology alliances, and referral partner ecosystem.",
        image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg",
        links: [
          {
            title: "Partner Programs",
            href: "/partners",
            tag: "#JoinPartners",
            description: "Implementation, referral, and technology alliances with leading global systems integrators.",
            image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
          },
          {
            title: "Become a Partner",
            href: "/partners#apply",
            tag: "#ChannelAlliances",
            description: "Accelerate client HR transformations and access dedicated enablement resources.",
            image: "/99dc7c63-7982-4fbe-ae0b-7985dd4f089d.jpg"
          }
        ]
      },
      {
        name: "Press & Media",
        tag: "#PressKit",
        description: "Official company news, media coverage, downloadable logos, and executive bios.",
        image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg",
        bullets: [
          "Latest press releases and product launches",
          "Brand guidelines, official logos & media kit",
          "Executive interviews and media contacts"
        ],
        links: [
          {
            title: "News & Press Releases",
            href: "/press",
            tag: "#LatestNews",
            description: "Official announcements, feature releases, and company milestone updates.",
            image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
          },
          {
            title: "Media Kit & Brand Assets",
            href: "/press#media-kit",
            tag: "#BrandAssets",
            description: "Download high-res brand logos, product UI screenshots, and press kit guidelines.",
            image: "/dashboards/ai-interview-dashboard.png"
          }
        ]
      },
      {
        name: "Contact & Offices",
        tag: "#GlobalOffices",
        description: "Connect with our enterprise solutions team or visit our regional engineering offices.",
        image: "/907faf08-b342-486c-b0b4-50109f954dd8.jpg",
        bullets: [
          "Direct enterprise sales line & live demos",
          "24/7 dedicated customer success support",
          "Offices in India, Australia, and New Zealand"
        ],
        links: [
          {
            title: "Sales & Product Inquiries",
            href: "/contact",
            tag: "#BookConsultation",
            description: "Speak with a product specialist for a tailored demonstration and custom quote.",
            image: "/3ac31def-cf69-497f-aabf-6008414a75cb.jpg"
          },
          {
            title: "Office Locations",
            href: "/contact#offices",
            tag: "#VisitUs",
            description: "Find addresses, contact details, and directions to our regional headquarters.",
            image: "/907faf08-b342-486c-b0b4-50109f954dd8.jpg"
          }
        ]
      }
    ]
  }
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Platform Lifecycle",
    links: [
      { title: "Platform Overview", href: "/platform" },
      { title: "Hire", href: "/platform/hire" },
      { title: "Onboard", href: "/platform/onboard" },
      { title: "Manage", href: "/platform/manage" },
      { title: "Grow", href: "/platform/grow" },
      { title: "Exit", href: "/platform/exit" },
      { title: "AI & Analytics", href: "/platform/ai-analytics" },
      { title: "AI Live Interview", href: "/platform/ai-live-interview" },
      { title: "Hiring Requests & Approvals", href: "/platform/hiring-requests" },
      { title: "Attendance & Shifts", href: "/platform/attendance" },
      { title: "Payroll Compliance", href: "/platform/payroll-compliance" },
      { title: "ScalForce (EOR & AOR)", href: "/scalforce" },
      { title: "Direct vs ScalForce", href: "/scalforce/direct-employment-vs-scalforce" }
    ]
  },
  {
    title: "Modules & Capabilities",
    links: [
      { title: "Core HR & Employee Records", href: "/platform/core-hr" },
      { title: "AI Resume Screening", href: "/platform/ai-resume-screening" },
      { title: "AI Voice Screening", href: "/platform/ai-voice-screening" },
      { title: "Background Verification", href: "/platform/background-verification" },
      { title: "IT Provisioning", href: "/platform/it-provisioning" },
      { title: "Leave Management", href: "/platform/leave" },
      { title: "Compensation & Benefits", href: "/platform/compensation-benefits" },
      { title: "Expenses & Claims", href: "/platform/expenses" },
      { title: "HR Helpdesk", href: "/platform/helpdesk" },
      { title: "Goals & OKRs", href: "/platform/goals-okrs" },
      { title: "360° Feedback", href: "/platform/360-feedback" },
      { title: "Offboarding & Compliance", href: "/platform/offboarding" },
      { title: "Full & Final Settlement", href: "/platform/full-and-final" },
      { title: "Workforce Insights", href: "/platform/workforce-insights" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { title: "Startups", href: "/solutions/startups" },
      { title: "Mid-Market", href: "/solutions/mid-market" },
      { title: "Enterprise", href: "/solutions/enterprise" },
      { title: "IT Services & Staffing", href: "/solutions/it-staffing" },
      { title: "Manufacturing", href: "/solutions/manufacturing" },
      { title: "Healthcare", href: "/solutions/healthcare" },
      { title: "Retail", href: "/solutions/retail" },
      { title: "BFSI", href: "/solutions/bfsi" },
      { title: "For HR Leaders", href: "/solutions/hr-teams" },
      { title: "For Finance", href: "/solutions/finance" },
      { title: "For IT & Security", href: "/solutions/it-security" },
      { title: "For Leadership", href: "/solutions/leadership" },
      { title: "For Employees", href: "/solutions/employees" },
      { title: "India Compliance", href: "/solutions/india" },
      { title: "Middle East & GCC", href: "/solutions/middle-east" },
      { title: "United States", href: "/solutions/us" },
      { title: "Europe & UK", href: "/solutions/europe" }
    ]
  },
  {
    title: "Resources & Free Tools",
    links: [
      { title: "Blog", href: "/blog" },
      { title: "Guides & eBooks", href: "/resources/guides" },
      { title: "Webinars", href: "/resources/webinars" },
      { title: "Customer Stories", href: "/customers" },
      { title: "HR Templates Library", href: "/tools/templates" },
      { title: "Gratuity Calculator", href: "/tools/gratuity-calculator" },
      { title: "CTC / Salary Calculator", href: "/tools/ctc-calculator" },
      { title: "Notice Pay Calculator", href: "/tools/notice-pay-calculator" },
      { title: "Help Centre", href: "/help" },
      { title: "Product Updates", href: "/changelog" },
      { title: "System Status", href: "/status" }
    ]
  },
  {
    title: "Company & Trust",
    links: [
      { title: "Our Story & Mission", href: "/about#story" },
      { title: "Leadership & Team", href: "/about#team" },
      { title: "Life at Sqalible", href: "/life-at-sqalible" },
      { title: "Careers", href: "/careers" },
      { title: "Partners", href: "/partners" },
      { title: "Press & Media Kit", href: "/press" },
      { title: "Contact Us", href: "/contact" },
      { title: "Pricing Plans", href: "/pricing" },
      { title: "Integrations Directory", href: "/integrations" },
      { title: "AI-Native vs Legacy HRMS", href: "/why-sqalible" },
      { title: "Security & Trust Centre", href: "/security" },
      { title: "Responsible AI Policy", href: "/responsible-ai" },
      { title: "Direct Employment vs ScalForce", href: "/scalforce/direct-employment-vs-scalforce" },
      { title: "Sqalible vs Keka", href: "/compare/keka" },
      { title: "Sqalible vs Darwinbox", href: "/compare/darwinbox" },
      { title: "Sqalible vs greytHR", href: "/compare/greythr" }
    ]
  }
];

export const footerDescription =
  "The AI-native HRMS engineered to automate hiring, onboarding, attendance, compliance, and employee lifecycle operations.";

export const languages = [
  "English",
  "German",
  "Spanish",
  "French",
  "Arabic",
  "Brazilian Portuguese",
  "Simplified Chinese",
  "Traditional Chinese",
  "Italian"
];

export const socialLinks = [
  { title: "LinkedIn", href: "https://www.linkedin.com" },
  { title: "X", href: "https://x.com" },
  { title: "YouTube", href: "https://youtube.com" },
  { title: "Facebook", href: "https://facebook.com" }
];

export const globalOffices = [
  {
    country: "India (HQ & Delivery)",
    type: "Development Center",
    address: "517-520, 5th Floor, Homeland City, University Rd, Piplod, Surat",
    phone: "+91 97695 63055"
  },
  {
    country: "Australia (Oceania HQ)",
    type: "Regional Office",
    address: "2.03/202 Jells Road, Wheelers Hill & 8 Archer Grove, Rowville, VIC",
    phone: "+61 468 016 333"
  },
  {
    country: "New Zealand",
    type: "Regional Office",
    address: "Level 2, 221 Ihumatao Road, Mangere, Auckland 2022",
    phone: "+61 468 016 333"
  }
];

export const globalLocations = globalOffices;