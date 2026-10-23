export type ModuleDetail = {
  summary: string;
  highlights: { title: string; text: string }[];
  ai?: string;
  image?: string;
  imageAlt?: string;
};

export const moduleDetails: Record<string, ModuleDetail> = {
  "hiring-requests": {
    summary: "Structured requisitions with multi-level approval chains, so every role is budgeted and signed off before sourcing starts.",
    image: "/figma-screens/hiring-requests.png",
    imageAlt: "Sqalible Structured Hiring Requisitions & Multi-Level Approval Chains Table",
    highlights: [
      { title: "Structured requisitions", text: "Role, band, budget and justification captured in one form." },
      { title: "Approval chains", text: "Route by department, cost centre or headcount plan." },
      { title: "Live status", text: "Hiring managers see exactly where each request is waiting." }
    ]
  },
  sourcing: {
    summary: "Publish approved roles to LinkedIn, Naukri and Indeed in one step, with a branded careers page that stays in sync.",
    image: "/figma-screens/sourcing-dashboard.png",
    imageAlt: "Sqalible Omnichannel Sourcing Dashboard with LinkedIn, Naukri, and Indeed Connectors",
    highlights: [
      { title: "One-click posting", text: "Auto-post to LinkedIn, Naukri and Indeed." },
      { title: "Careers page", text: "Branded, accessible and always up to date." },
      { title: "Source tracking", text: "See which channel each applicant came from." }
    ]
  },
  "ai-resume-screening": {
    summary: "Every resume scored against the role within 15 minutes, with clear reasoning recruiters can review and override.",
    image: "/figma-screens/ai-resume-voice-screening.png",
    imageAlt: "Sqalible AI Resume Scoring Rubric and Candidate Competency Dossier",
    highlights: [
      { title: "15-minute scoring", text: "Applicants are ranked shortly after they apply." },
      { title: "Explainable scores", text: "Each score shows the skills and experience behind it." },
      { title: "Bias audits", text: "Screening outcomes are audited on a recurring basis." }
    ],
    ai: "Shortlist the top 5 for Senior Backend Engineer."
  },
  "ai-voice-screening": {
    summary: "Consent-first screening calls that ask structured questions and return a transcript and summary to your recruiters.",
    image: "/figma-screens/ai-resume-voice-screening.png",
    imageAlt: "Sqalible Autonomous Voice Screening Panel & Acoustic Evaluation Rubric",
    highlights: [
      { title: "Consent first", text: "Candidates opt in before any AI call takes place." },
      { title: "Structured questions", text: "Every candidate for a role gets the same core questions." },
      { title: "Transcripts & summaries", text: "Recruiters review answers in minutes, not hours." }
    ]
  },
  "ai-live-interview": {
    summary: "A live AI avatar interviewer runs structured first rounds, adapts questions to each resume, and evaluates coding approach. Your team makes the decision.",
    image: "/figma-screens/scheduled-interviews.png",
    imageAlt: "Sqalible Live AI Technical & Behavioural Interview Evaluation Panel",
    highlights: [
      { title: "Adaptive questions", text: "Follow-ups drawn from the resume and previous answers." },
      { title: "Coding-approach evaluation", text: "Assesses reasoning, not just the final answer." },
      { title: "Human sign-off", text: "A named person approves every hiring decision." }
    ],
    ai: "Summarise Ananya's round 1 interview."
  },
  interviews: {
    summary: "Panels, scheduling and structured scorecards in one place, so every interviewer evaluates against the same criteria.",
    image: "/figma-screens/scheduled-interviews.png",
    imageAlt: "Sqalible Interview Scheduling Panel, Candidate Timings, and Panel Member Badges",
    highlights: [
      { title: "Panel scheduling", text: "Find common slots across interviewers and candidates." },
      { title: "Scorecards", text: "Structured criteria for every round." },
      { title: "Calendar sync", text: "Works with Google Workspace and Microsoft 365." }
    ]
  },
  offers: {
    summary: "Generate offers from templates, route them for approval and track acceptance through to joining.",
    image: "/figma-screens/recruitment-dashboard.png",
    imageAlt: "Sqalible Recruitment Pipeline, Vacancies, and Offer Letter Acceptance Status",
    highlights: [
      { title: "Offer templates", text: "Consistent letters by role, band and region." },
      { title: "Approvals", text: "Compensation checks before anything goes out." },
      { title: "E-sign & tracking", text: "Know the moment an offer is accepted." }
    ]
  },
  "referrals-vendors": {
    summary: "Dedicated portals for employee referrals and recruitment agencies, with clean attribution and payout tracking.",
    image: "/figma-screens/vendor-portal.png",
    imageAlt: "Sqalible Vendor Portal and Employee Referral Submission Form with AI Consent",
    highlights: [
      { title: "Referral portal", text: "Employees refer and track their candidates." },
      { title: "Vendor portal", text: "Agencies submit to approved roles only." },
      { title: "Attribution", text: "Duplicate detection and payout rules built in." }
    ]
  },
  "background-verification": {
    summary: "Token-based background checks that candidates complete securely, with status visible to HR in real time.",
    image: "/figma-screens/candidates.png",
    imageAlt: "Sqalible Candidate Verification Status, Background Check Badges, and Talent Pipeline",
    highlights: [
      { title: "Secure tokens", text: "Candidates upload documents through a one-time link." },
      { title: "Provider integrations", text: "Send checks to your verification partner." },
      { title: "Status tracking", text: "See which joiners are blocked and why." }
    ]
  },
  "it-provisioning": {
    summary: "One-click account and access provisioning across your tools, ready before a new joiner's first day.",
    image: "/dashboards/assets-core-hr-dashboard.png",
    imageAlt: "Sqalible IT Hardware & Asset Provisioning Dashboard with Allocation Tracking",
    highlights: [
      { title: "One click", text: "Create accounts in Google, Microsoft, Slack, Jira and GitHub." },
      { title: "Role templates", text: "Access bundles by team and role." },
      { title: "Audit trail", text: "Every grant is logged for security review." }
    ]
  },
  onboarding: {
    summary: "An AI-personalised pre-joining sequence and a structured first day, so new joiners arrive ready to contribute.",
    image: "/figma-screens/employee-records-form.png",
    imageAlt: "Sqalible Pre-Boarding & Day-One Employee Master Form and Profile Setup",
    highlights: [
      { title: "Pre-joining sequence", text: "Documents, introductions and reading, personalised by role." },
      { title: "Day-one checklist", text: "Tasks for HR, IT, the manager and the joiner." },
      { title: "Buddy matching", text: "Pair joiners with the right colleague." }
    ]
  },
  probation: {
    summary: "Probation reviews scheduled automatically, with manager reminders and clear confirm, extend or exit outcomes.",
    image: "/figma-screens/employee-work-info.png",
    imageAlt: "Sqalible Probation Management, Contract Details, and Review Milestones",
    highlights: [
      { title: "Automatic schedules", text: "Review dates set at joining." },
      { title: "Manager reminders", text: "No probation end date is missed." },
      { title: "Clear outcomes", text: "Confirm, extend or exit with documented reasons." }
    ]
  },
  "core-hr": {
    summary: "One employee record for documents, history and org structure, shared by every Sqalible module.",
    image: "/figma-screens/employee-profile.png",
    imageAlt: "Sqalible Core HR Single Employee 360 Master Record & Workforce Directory",
    highlights: [
      { title: "Single record", text: "Personal, job and document data in one place." },
      { title: "Org structure", text: "Multi-company, departments and reporting lines." },
      { title: "Self-service", text: "Employees update their own details with approval." }
    ]
  },
  attendance: {
    summary: "Shifts, biometric attendance and geofencing for office, field and plant teams.",
    image: "/dashboards/test_attendance.png",
    imageAlt: "Sqalible Daily Attendance Logs, Punch Timings, and Shift Validation",
    highlights: [
      { title: "Shift scheduling", text: "Rosters, rotations and overtime rules." },
      { title: "Biometric & geofence", text: "Capture attendance wherever people work." },
      { title: "Time tool sync", text: "Integrates with DeskTime and Toggl." }
    ]
  },
  leave: {
    summary: "Configurable leave policies, accruals and approvals, with an AI assistant that answers balance questions instantly.",
    image: "/figma-screens/employee-leave.png",
    imageAlt: "Sqalible Leave Accrual Balances, PTO, Sick Leave, and Leave Request Approvals",
    highlights: [
      { title: "Policy engine", text: "Accruals, carry-forward and encashment by region." },
      { title: "Approvals", text: "Mobile approvals with team calendar context." },
      { title: "Instant answers", text: "Employees ask the AI assistant about balances." }
    ]
  },
  "payroll-compliance": {
    summary: "Country statutory packs starting with India, including gratuity, plus AI anomaly detection before you run payroll.",
    image: "/figma-screens/final-settlement.png",
    imageAlt: "Sqalible Automated Multi-Country Statutory Payroll, Tax Deductions & Calculations",
    highlights: [
      { title: "Statutory packs", text: "India first, including gratuity rules." },
      { title: "Anomaly detection", text: "AI flags duplicate allowances and missing accruals." },
      { title: "Works with your engine", text: "Connects to the payroll system you already use." }
    ],
    ai: "Flag payroll anomalies for October."
  },
  "compensation-benefits": {
    summary: "Salary structures, revision cycles and benefits enrolment managed alongside the employee record.",
    image: "/figma-screens/final-settlement.png",
    imageAlt: "Sqalible Compensation Bands, Revision Cycles, and Statutory Benefits Breakdown",
    highlights: [
      { title: "Salary structures", text: "Bands and components by role and region." },
      { title: "Revision cycles", text: "Budgeted merit and promotion rounds." },
      { title: "Benefits enrolment", text: "Employees choose plans during open windows." }
    ]
  },
  expenses: {
    summary: "Submit claims with receipts, route them for approval and export clean data to finance.",
    image: "/dashboards/payroll_final_settlement.png",
    imageAlt: "Sqalible Expense Claims Reconciliation, Receipts Review, and Audit Trail",
    highlights: [
      { title: "Receipt capture", text: "Snap and submit from mobile." },
      { title: "Policy checks", text: "Limits applied before approval." },
      { title: "Finance export", text: "Approved claims ready for reimbursement." }
    ]
  },
  helpdesk: {
    summary: "A ticketing desk for HR queries, with AI triage that routes, prioritises and suggests answers from policy.",
    image: "/figma-screens/employee-profile.png",
    imageAlt: "Sqalible HR Helpdesk Service Request & Unified Employee Master Record",
    highlights: [
      { title: "AI triage", text: "Tickets categorised and routed automatically." },
      { title: "Suggested answers", text: "Drafts grounded in your policy documents." },
      { title: "SLAs", text: "Track response and resolution times." }
    ]
  },
  "goals-okrs": {
    summary: "AI-drafted OKRs that cascade from company goals, with check-ins that keep progress visible.",
    image: "/figma-screens/goals-objectives.png",
    imageAlt: "Sqalible Cascading Objectives and Key Results OKRs Dashboard",
    highlights: [
      { title: "AI drafting", text: "Suggested objectives aligned to team goals." },
      { title: "Cascading", text: "Company, team and individual goals linked." },
      { title: "Check-ins", text: "Regular progress updates with context." }
    ]
  },
  "360-feedback": {
    summary: "Multi-rater review cycles with anonymity-safe AI summaries that turn feedback into clear themes.",
    image: "/figma-screens/feedback-360.png",
    imageAlt: "Sqalible 360-Degree Multi-Rater Feedback Review Cycles and Anonymity Thresholds",
    highlights: [
      { title: "Multi-rater cycles", text: "Peers, reports and managers in one review." },
      { title: "Anonymity safe", text: "Minimum rater thresholds protect identity." },
      { title: "AI summaries", text: "Strengths and growth areas in plain language." }
    ],
    ai: "Summarise Priya's 360° feedback."
  },
  "internal-mobility": {
    summary: "AI matching that surfaces internal candidates for open roles before you look outside.",
    image: "/figma-screens/internal-mobility.png",
    imageAlt: "Sqalible AI Career Path Suggestions and Internal Mobility Job Board",
    highlights: [
      { title: "Internal job board", text: "Employees see and apply to open roles." },
      { title: "AI matching", text: "Skills-based suggestions for hiring managers." },
      { title: "Career paths", text: "Visible next steps for every role." }
    ]
  },
  learning: {
    summary: "An integrated content library with assigned learning paths and completion tracking.",
    image: "/figma-screens/question-templates.png",
    imageAlt: "Sqalible Compliance LMS Evaluation Rubrics and Course Templates",
    highlights: [
      { title: "Content library", text: "Courses, documents and videos in one place." },
      { title: "Learning paths", text: "Assigned by role, team or review outcome." },
      { title: "Completion tracking", text: "Compliance training reported automatically." }
    ]
  },
  offboarding: {
    summary: "Five mandatory compliance gates make sure assets, knowledge, access and settlement are handled before anyone leaves.",
    image: "/figma-screens/exit-process.png",
    imageAlt: "Sqalible 5-Gate Offboarding Clearance Stages and Task Checklist",
    highlights: [
      { title: "Five gates", text: "Each must clear before the exit completes." },
      { title: "Asset recovery", text: "Track laptops, cards and equipment." },
      { title: "Knowledge transfer", text: "Handover tasks assigned to the right people." }
    ]
  },
  "full-and-final": {
    summary: "Automated full and final settlement with gratuity, leave encashment and recoveries calculated in one place.",
    image: "/dashboards/payroll_final_settlement.png",
    imageAlt: "Sqalible Full & Final Settlement Review Drawer with Line-Item Statutory Breakdowns",
    highlights: [
      { title: "Automatic calculation", text: "Gratuity, encashment and deductions." },
      { title: "Finance approval", text: "Reviewed before payout." },
      { title: "Fewer disputes", text: "Clear statements employees can understand." }
    ]
  },
  "access-revocation": {
    summary: "System access revoked automatically on the last working day, across every connected tool.",
    image: "/figma-screens/exit-process.png",
    imageAlt: "Sqalible Scheduled Last-Working-Day SSO & Enterprise Tool Access Revocation",
    highlights: [
      { title: "Scheduled revocation", text: "Triggered by the last working day." },
      { title: "Every tool", text: "Google, Microsoft, Slack, Jira, GitHub and more." },
      { title: "Security log", text: "Proof of removal for audits." }
    ]
  },
  "exit-interviews": {
    summary: "Structured exit interviews with AI theme analysis, so you learn why people leave.",
    image: "/figma-screens/exit-interview.png",
    imageAlt: "Sqalible Structured Exit Interview Completion and Sentiment Analysis Scorecard",
    highlights: [
      { title: "Structured questions", text: "Consistent across teams and regions." },
      { title: "Theme analysis", text: "AI groups reasons across all exits." },
      { title: "Trend reports", text: "Spot patterns by team and manager." }
    ]
  },
  "alumni-portal": {
    summary: "A self-serve portal where former employees download documents and request experience letters.",
    image: "/figma-screens/knowledge-transfer.png",
    imageAlt: "Sqalible Ex-Employee Alumni Portal & Knowledge Transfer Handover Records",
    highlights: [
      { title: "Document access", text: "Payslips, tax forms and letters." },
      { title: "Self-serve requests", text: "Experience and relieving letters on demand." },
      { title: "Rehire ready", text: "Stay connected with boomerang talent." }
    ]
  },
  "ai-assistant": {
    summary: "A permission-aware AI assistant that answers employee and manager questions from live policy and records.",
    image: "/figma-screens/ai-hr-assistant.png",
    imageAlt: "Sqalible Conversational AI HR Assistant with Real-Time Leave and Policy Q&A",
    highlights: [
      { title: "Permission aware", text: "Answers only from data the person can see." },
      { title: "Policy grounded", text: "Every answer cites its source." },
      { title: "Actions", text: "Apply for leave or view payslips from the chat." }
    ],
    ai: "Can I carry forward unused leave into 2027?"
  },
  "workforce-insights": {
    summary: "Engagement scoring, attendance patterns and delivery risk, broken down by team.",
    image: "/figma-screens/workforce-insights.png",
    imageAlt: "Sqalible Workforce Intelligence, Engagement Trends, and Team Health Analytics",
    highlights: [
      { title: "Engagement scoring", text: "Pulse results tracked over time." },
      { title: "Attendance patterns", text: "Spot changes before they become problems." },
      { title: "Delivery risk", text: "Teams flagged when signals combine." }
    ]
  },
  "attrition-risk": {
    summary: "Early warnings for flight risk, visible to HR only, with the factors behind each score.",
    image: "/figma-screens/attrition-risk-management.png",
    imageAlt: "Sqalible Attrition Risk Management with Departmental Flight Risk Distribution",
    highlights: [
      { title: "Early warnings", text: "Risk scored from engagement and activity signals." },
      { title: "Explained factors", text: "See why someone is flagged." },
      { title: "Restricted access", text: "Visible to HR only." }
    ]
  },
  "workforce-planning": {
    summary: "Hiring forecasts and sourcing-channel ROI to plan headcount and spend with confidence.",
    image: "/figma-screens/open-jobs.png",
    imageAlt: "Sqalible Workforce Capacity Demand & Open Job Requisition Planning",
    highlights: [
      { title: "Hiring forecasts", text: "Projected needs by quarter and team." },
      { title: "Channel ROI", text: "Cost per hire across every source." },
      { title: "Scenario planning", text: "Model budget shifts before you commit." }
    ]
  }
};