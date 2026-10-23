export type LifecycleModule = { title: string; href: string; flag?: string };

export type LifecycleStage = {
  id: string;
  label: string;
  product?: string;
  href: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  modules: LifecycleModule[];
};

export const lifecycleStages: LifecycleStage[] = [
  {
    id: "hire",
    label: "Hire",
    product: "Sqalible Hire",
    href: "/platform/hire",
    summary: "Requisitions, omnichannel job posting, AI resume parsing, and autonomous live AI interviews through to signed offers.",
    image: "/figma-screens/recruitment-dashboard.png",
    imageAlt: "Sqalible Recruitment & Sourcing Telemetry Dashboard",
    modules: [
      { title: "Hiring Requests & Approvals", href: "/platform/hiring-requests" },
      { title: "Sourcing & Job Posting", href: "/platform/sourcing" },
      { title: "AI Resume Screening", href: "/platform/ai-resume-screening" },
      { title: "AI Voice Screening", href: "/platform/ai-voice-screening" },
      { title: "AI Live Interview", href: "/platform/ai-live-interview", flag: "Flagship" },
      { title: "Interview Management", href: "/platform/interviews" },
      { title: "Offer Management", href: "/platform/offers" },
      { title: "Referral & Vendor Portals", href: "/platform/referrals-vendors" }
    ]
  },
  {
    id: "onboard",
    label: "Onboard",
    product: "Sqalible Onboard",
    href: "/platform/onboard",
    summary: "Frictionless digital document collection, background verification, 1-click IT provisioning, and probation milestones.",
    image: "/figma-screens/employee-records-form.png",
    imageAlt: "Sqalible Digital Employee Onboarding & Master Record Setup Dashboard",
    modules: [
      { title: "Pre-boarding & Day One", href: "/platform/onboarding" },
      { title: "Background Verification", href: "/platform/background-verification" },
      { title: "IT Provisioning", href: "/platform/it-provisioning" },
      { title: "Probation Management", href: "/platform/probation" }
    ]
  },
  {
    id: "manage",
    label: "Manage",
    product: "Sqalible Manage",
    href: "/platform/manage",
    summary: "One unified employee master record for attendance, biometric sync, shift rosters, leave policies, and employee helpdesk.",
    image: "/figma-screens/employee-profile.png",
    imageAlt: "Sqalible Employee Master Record & Workforce Directory",
    modules: [
      { title: "Core HR & Employee Records", href: "/platform/core-hr" },
      { title: "Attendance & Shifts", href: "/platform/attendance" },
      { title: "Leave Management", href: "/platform/leave" },
      { title: "Compensation & Benefits", href: "/platform/compensation-benefits" },
      { title: "Expenses & Claims", href: "/platform/expenses" },
      { title: "HR Helpdesk", href: "/platform/helpdesk" }
    ]
  },
  {
    id: "pay",
    label: "Pay",
    product: "Sqalible Pay",
    href: "/platform/pay",
    summary: "1-click automated multi-country payroll with guaranteed statutory adherence (PF, ESI, TDS, WPS, W-2), bank disbursals, and tax declarations.",
    image: "/figma-screens/final-settlement.png",
    imageAlt: "Sqalible Automated Multi-Country Payroll & Statutory Settlement Dashboard",
    modules: [
      { title: "Payroll Compliance", href: "/platform/payroll-compliance" },
      { title: "Compensation & Benefits", href: "/platform/compensation-benefits" },
      { title: "Expenses & Claims", href: "/platform/expenses" },
      { title: "Full & Final Settlement", href: "/platform/full-and-final" }
    ]
  },
  {
    id: "grow",
    label: "Grow",
    product: "Sqalible Grow",
    href: "/platform/grow",
    summary: "Align cascading OKRs, power continuous 360 feedback reviews, internal mobility pathways, and compliance LMS training.",
    image: "/figma-screens/performance-dashboard.png",
    imageAlt: "Sqalible Performance Management, Objectives and Key Results Dashboard",
    modules: [
      { title: "Goals & OKRs", href: "/platform/goals-okrs" },
      { title: "360° Feedback", href: "/platform/360-feedback" },
      { title: "Internal Mobility", href: "/platform/internal-mobility" },
      { title: "Learning (LMS)", href: "/platform/learning" }
    ]
  },
  {
    id: "exit",
    label: "Exit",
    product: "Sqalible Exit",
    href: "/platform/exit",
    summary: "Automated 5-gate offboarding clearance, full & final statutory settlements, instant SSO access revocation, and alumni network.",
    image: "/figma-screens/exit-dashboard.png",
    imageAlt: "Sqalible Offboarding Clearance Gates & Exit Telemetry Dashboard",
    modules: [
      { title: "Offboarding & Compliance Gates", href: "/platform/offboarding" },
      { title: "Full & Final Settlement", href: "/platform/full-and-final" },
      { title: "Access Revocation", href: "/platform/access-revocation" },
      { title: "Exit Interviews & Alumni", href: "/platform/exit-interviews" },
      { title: "Ex-Employee Portal", href: "/platform/alumni-portal" }
    ]
  },
  {
    id: "ai",
    label: "Sqalible AI",
    product: "Sqalible AI",
    href: "/platform/ai",
    summary: "Horizontal intelligence layer powering the entire employee lifecycle: conversational AI HR assistant, attrition prediction, and workforce planning.",
    image: "/figma-screens/workforce-insights.png",
    imageAlt: "Sqalible AI Workforce Intelligence, Engagement Trends and Predictive Telemetry",
    modules: [
      { title: "AI HR Assistant", href: "/platform/ai-assistant" },
      { title: "Engagement & Workforce Insights", href: "/platform/workforce-insights" },
      { title: "Attrition Risk", href: "/platform/attrition-risk" },
      { title: "Hiring & Workforce Planning", href: "/platform/workforce-planning" }
    ]
  }
];