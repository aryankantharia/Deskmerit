export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorAvatar: string;
  image: string;
  featured?: boolean;
}

export const blogCategories = [
  "All",
  "AI in HR",
  "Hiring & Recruitment",
  "Payroll & Compliance",
  "Employee Experience",
  "Workforce Operations"
];

export const allBlogs: BlogPost[] = [
  {
    slug: "scaling-global-workforce-operations-from-10-to-1000-employees",
    category: "AI in HR",
    title: "The AI-Native HRMS Architecture: Scaling Global Workforce Operations with Autonomous Screening and Real-Time Governance",
    excerpt: "How modern high-growth enterprises replace disconnected point tools with a unified employee master, autonomous interview avatars, and real-time statutory compliance.",
    date: "Oct 16, 2026",
    readTime: "8 min read",
    author: "Dishant Mehta",
    authorRole: "CTO at Sqalible",
    authorAvatar: "/team/dishant-mehta.jpg",
    image: "/dashboards/ai-interview-dashboard.png",
    featured: true
  },
  {
    slug: "why-traditional-ats-keywords-fail-autonomous-ai-interviews",
    category: "Hiring & Recruitment",
    title: "Why Traditional ATS Keyword Screening Fails: The Rise of Autonomous Live AI Interviews",
    excerpt: "Explore how adaptive rubric-based conversational AI uncovers top engineering talent that keyword parsers consistently miss, while cutting time-to-hire by 70%.",
    date: "Oct 12, 2026",
    readTime: "6 min read",
    author: "Chirag Parmar",
    authorRole: "Head of Talent Systems at Sqalible",
    authorAvatar: "/team/chirag-parmar.jpg",
    image: "/00dca2be-059e-4a75-8d89-688b913d203a.jpg",
    featured: true
  },
  {
    slug: "statutory-payroll-compliance-handbook-india-apac",
    category: "Payroll & Compliance",
    title: "The Multi-Tier Statutory Payroll Playbook: Eliminating Year-End Reconciliation Panics",
    excerpt: "Automate PF, ESI, TDS, and Gratuity calculations directly from biometric attendance telemetry with one-click bank disbursals and zero audit discrepancies.",
    date: "Oct 08, 2026",
    readTime: "7 min read",
    author: "Dhaneshwari Patel",
    authorRole: "VP of HR & Compliance at Sqalible",
    authorAvatar: "/team/dhaneshwari-patel.jpg",
    image: "/dashboards/payroll_final_settlement.png",
    featured: true
  },
  {
    slug: "biometric-shift-telemetry-stopping-attendance-leakage",
    category: "Workforce Operations",
    title: "Biometric Shift Telemetry: Stopping Attendance Leakage in 24/7 Distributed Operations",
    excerpt: "Learn how modern plant and healthcare facilities sync ZKTeco turnstiles, mobile geofencing, and shift rosters with zero manual attendance regularization delays.",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    author: "Vipul Dadgal",
    authorRole: "Principal Systems Architect at Sqalible",
    authorAvatar: "/team/keyur-mehta.jpg",
    image: "/dashboards/attendance_calendar_view.png"
  },
  {
    slug: "responsible-ai-governance-human-in-the-loop-compliance-playbook",
    category: "AI in HR",
    title: "Responsible AI Governance in HR: Anti-Bias Acoustic Filtering and Verifiable Audit Trails",
    excerpt: "A practical framework for deploying conversational screening agents with explainable rubric scoring, candidate consent, and strict EEOC compliance.",
    date: "Sep 18, 2026",
    readTime: "7 min read",
    author: "Anshika Mishra",
    authorRole: "Director of Legal & Compliance at Sqalible",
    authorAvatar: "/team/anshika-mishra.jpg",
    image: "/fe6f799a-0f6d-45b1-ac0c-1f54d8f02acf.jpg"
  },
  {
    slug: "zero-delay-onboarding-hardware-and-account-provisioning",
    category: "Employee Experience",
    title: "From Accepted Offer to Day One: Eliminating IT Provisioning Delays for Remote Teams",
    excerpt: "How automated KYC validation, Google Workspace/Slack zero-touch provisioning, and digital asset tracking create an unforgettable onboarding experience.",
    date: "Sep 12, 2026",
    readTime: "5 min read",
    author: "Himali Jaiswal",
    authorRole: "Head of Product Experience at Sqalible",
    authorAvatar: "/team/himali-jaiswal.jpg",
    image: "/dashboards/assets-core-hr-dashboard.png"
  },
  {
    slug: "multi-entity-compliance-workforce-governance",
    category: "Payroll & Compliance",
    title: "Multi-Entity Workforce Governance: Managing Subsidiaries Across India, GCC, and APAC",
    excerpt: "Architecting parent-subsidiary hierarchies, cross-border tax slabs, and centralized audit visibility without fragmenting the employee master record.",
    date: "Sep 05, 2026",
    readTime: "8 min read",
    author: "Keyur Mehta",
    authorRole: "CEO at Sqalible",
    authorAvatar: "/team/keyur-mehta.jpg",
    image: "/478cf4c8-ab4f-4c2b-8598-dd6c66b59d2b.jpg"
  },
  {
    slug: "rethinking-performance-management-continuous-feedback-okrs",
    category: "Employee Experience",
    title: "Rethinking Performance Reviews: Continuous 360 Feedback and Objective Goal Telemetry",
    excerpt: "Why forward-looking HR organizations are retiring the annual appraisal cycle in favor of milestone-based peer recognition and proactive burnout detection.",
    date: "Aug 29, 2026",
    readTime: "6 min read",
    author: "Ssohail Khan",
    authorRole: "Head of Growth & Strategy at Sqalible",
    authorAvatar: "/team/sohail-khan.jpg",
    image: "/dashboards/performance_dashboard_16_10.png"
  }
];
