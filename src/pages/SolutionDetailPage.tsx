import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import {
  Building2,
  Users,
  Briefcase,
  Headphones,
  Scale,
  UserCheck,
  TrendingUp,
  Receipt,
  Laptop,
  Globe,
  ShieldCheck,
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  BarChart3,
  FileSpreadsheet,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";

interface SolutionDetail {
  slug: string;
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  checkPoints: string[];
  pillars: { title: string; desc: string; icon: any }[];
  faqs: { q: string; a: string }[];
  mockup: {
    title: string;
    subtitle: string;
    stats: { label: string; value: string; badge?: string }[];
    rows: { name: string; tag: string; metric: string; status: string }[];
  };
}

const SOLUTIONS: Record<string, SolutionDetail> = {
  "remote-teams": {
    slug: "remote-teams",
    badge: "SOLUTIONS · REMOTE TEAMS",
    title: "Manage distributed remote teams",
    titleAccent: "with outcomes, not webcam surveillance.",
    description:
      "Keep remote developers, designers, and consultants accountable across multiple time zones without creepy webcams, random mouse-jiggler paranoia, or invasive surveillance.",
    checkPoints: [
      "Timezone-aware daily attendance computed in each worker's local time",
      "One-click Private Time so staff can step away for lunch or personal tasks",
      "Native Jira, Azure DevOps, and OpenProject task integration",
      "Offline sync ensures zero gaps during internet drops or travel",
    ],
    pillars: [
      {
        title: "Timezone Normalization",
        desc: "Rosters evaluate midnight and work shifts across Sydney, Bengaluru, Dubai, and London automatically.",
        icon: Globe,
      },
      {
        title: "Ethical Trust Architecture",
        desc: "Zero keystroke recording and zero webcams. Build a team culture where top talent stays for years.",
        icon: ShieldCheck,
      },
      {
        title: "Objective Proof of Work",
        desc: "Defend contractor hours and payroll expenditures with concrete activity and document telemetry.",
        icon: FileSpreadsheet,
      },
      {
        title: "Async Collaboration",
        desc: "Live 60-second status board lets teammates know who is coding vs on break without pinging in Slack.",
        icon: Users,
      },
    ],
    faqs: [
      {
        q: "How does Deskmerit handle work-from-home team members?",
        a: "The lightweight agent runs locally on their computer, recording work time, assigned tasks, and window titles without needing continuous broadband.",
      },
      {
        q: "What if an employee lives in a different timezone from the manager?",
        a: "Deskmerit translates attendance and shift hours into both the employee's local time and the manager's home timezone.",
      },
    ],
    mockup: {
      title: "Remote Workforce Dashboard",
      subtitle: "32 Remote Engineers across 5 Timezones",
      stats: [
        { label: "Active Tracking", value: "28 engineers", badge: "94% Active" },
        { label: "Timezones", value: "IST, AEST, GST, UTC" },
        { label: "Weekly Focus Avg", value: "36.8 hrs / dev" },
      ],
      rows: [
        { name: "Dev Team APAC", tag: "Sydney & Tokyo", metric: "100% Attended", status: "Active" },
        { name: "Core Backend India", tag: "Bengaluru & Pune", metric: "100% Attended", status: "Active" },
        { name: "EMEA Design Hub", tag: "Dubai & London", metric: "92% Attended", status: "Active" },
      ],
    },
  },
  "hybrid-teams": {
    slug: "hybrid-teams",
    badge: "SOLUTIONS · HYBRID TEAMS",
    title: "One consistent attendance record",
    titleAccent: "for home and office days.",
    description:
      "Replace clunky physical fingerprint turnstiles with seamless desktop presence. Whether an employee is at their desk in the office or working from home on Thursday, attendance is consistent.",
    checkPoints: [
      "Eliminates hardware biometric queues and punch card maintenance",
      "Unified attendance policy across remote and physical office environments",
      "Integrates with company Wi-Fi network recognition for office presence validation",
      "Direct 1-click feed to Sqalible HRMS payroll with no manual import spreadsheets",
    ],
    pillars: [
      {
        title: "Zero Biometrics",
        desc: "Eliminates physical scanner queues, fingerprint wear issues, and costly biometric vendor contracts.",
        icon: Laptop,
      },
      {
        title: "Hybrid Day Fairness",
        desc: "A developer working 4 hours in the office and 4 hours at home receives one seamless contiguous work log.",
        icon: Check,
      },
      {
        title: "Office Network Tags",
        desc: "Optionally tag sessions connected to office Wi-Fi networks to track corporate office return benchmarks.",
        icon: Building2,
      },
      {
        title: "Policy Transparency",
        desc: "Clear statutory employee transparency notifications compliant with local labor regulations.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "Can we track who is in the office vs at home?",
        a: "Yes. Deskmerit can associate active tracking sessions with known corporate office IP subnets or office Wi-Fi networks.",
      },
    ],
    mockup: {
      title: "Hybrid Work Presence",
      subtitle: "Pune HQ + Remote Staff Overview",
      stats: [
        { label: "In Office Today", value: "42 staff (65%)" },
        { label: "Working Remote", value: "23 staff (35%)" },
        { label: "Attendance Rate", value: "98.5%" },
      ],
      rows: [
        { name: "Product Delivery", tag: "Office (Baner High St)", metric: "8.2 hrs avg", status: "On-Site" },
        { name: "Cloud Infrastructure", tag: "Remote (Hybrid)", metric: "8.0 hrs avg", status: "Remote" },
      ],
    },
  },
  "office-teams": {
    slug: "office-teams",
    badge: "SOLUTIONS · OFFICE TEAMS",
    title: "Modern office presence tracking.",
    titleAccent: "Retire physical biometric machines.",
    description:
      "Biometric hardware fails, creates morning queues, and breaks during power outages. Deskmerit verifies presence through the laptop itself from the second employees boot up.",
    checkPoints: [
      "Instant clock-in upon opening laptop in the office",
      "Zero physical scanner hardware maintenance or replacement costs",
      "Automated late-arrival flags and overtime alerts per department",
      "Audit-proof timestamps that satisfy corporate labour compliance inspections",
    ],
    pillars: [
      {
        title: "No Machine Bottlenecks",
        desc: "Staff walk straight to their desks without waiting in biometric line queues at reception.",
        icon: Building2,
      },
      {
        title: "Automatic Overtime",
        desc: "Calculates statutory overtime whenever shifts exceed 8 or 9 hours based on national labor standards.",
        icon: Clock,
      },
      {
        title: "Audit Compliance",
        desc: "Download immutable attendance register reports formatted for state labor welfare inspections.",
        icon: FileSpreadsheet,
      },
      {
        title: "Multi-Floor Multi-Branch",
        desc: "Manage multiple office locations across cities under a single consolidated master dashboard.",
        icon: Layers,
      },
    ],
    faqs: [
      {
        q: "What replaces the physical punch card?",
        a: "The Deskmerit desktop agent boots on startup and authenticates the employee via corporate SSO, logging presence immediately.",
      },
    ],
    mockup: {
      title: "Office Floor Roster",
      subtitle: "Main Headquarters · 120 Workstations",
      stats: [
        { label: "Present on Floor", value: "112 / 120" },
        { label: "Hardware Scanners", value: "0 (Pure Software)" },
        { label: "On-Time Arrival", value: "96.4%" },
      ],
      rows: [
        { name: "Floor 4 (Engineering)", tag: "48 seats", metric: "100% Present", status: "Active" },
        { name: "Floor 5 (Operations & Sales)", tag: "64 seats", metric: "94% Present", status: "Active" },
      ],
    },
  },
  "staff-augmentation": {
    slug: "staff-augmentation",
    badge: "SOLUTIONS · STAFF AUGMENTATION",
    title: "One tracker across all your clients.",
    titleAccent: "Prove every developer hour.",
    description:
      "When your augmented engineers work on multiple client codebases, you need a single source of truth. Connect each client's Jira or Azure DevOps token and deliver unassailable timesheets.",
    checkPoints: [
      "Engineers connect separate tokens for Client A (Jira) and Client B (DevOps)",
      "Zero cross-contamination: client project names and tickets never merged",
      "Itemized ticket-level invoice reports that prevent client payment withholding",
      "Tracks developer utilization across both billable delivery and bench standby",
    ],
    pillars: [
      {
        title: "Multi-Client Token Separation",
        desc: "Engineers link personal tokens for 3+ different client workspaces inside one desktop tracker.",
        icon: Layers,
      },
      {
        title: "Prevent Bill Contestation",
        desc: "Invoices backed by ticket keys (e.g. AD-719) with exact commit/window durations are paid on time.",
        icon: Receipt,
      },
      {
        title: "Client-Specific Rate Cards",
        desc: "Set contract rates in USD, EUR, AUD, or INR per augmented engineer placement.",
        icon: BarChart3,
      },
      {
        title: "Bench Time Analytics",
        desc: "Identify unassigned contractors instantly to reallocate them to active client sprints.",
        icon: Users,
      },
    ],
    faqs: [
      {
        q: "Can clients audit our augmented team's timesheets?",
        a: "Yes. You can generate secure, client-branded PDF or Excel reports showing tickets worked and exact hours logged.",
      },
    ],
    mockup: {
      title: "Client Retainer Allocations",
      subtitle: "Staff Augmentation Delivery Matrix",
      stats: [
        { label: "Deployed Engineers", value: "64 consultants" },
        { label: "Billable Utilization", value: "91.8%" },
        { label: "Avg Placement Rate", value: "$85 / hr" },
      ],
      rows: [
        { name: "FinTech Client A (18 devs)", tag: "Jira Enterprise", metric: "720 hrs / wk", status: "100% Billed" },
        { name: "HealthTech Client B (12 devs)", tag: "Azure DevOps", metric: "480 hrs / wk", status: "100% Billed" },
        { name: "E-Commerce Client C (8 devs)", tag: "OpenProject", metric: "320 hrs / wk", status: "100% Billed" },
      ],
    },
  },
  agencies: {
    slug: "agencies",
    badge: "SOLUTIONS · CREATIVE & DIGITAL AGENCIES",
    title: "Know which clients and retainers",
    titleAccent: "are actually making you money.",
    description:
      "Stop losing agency margins to scope creep and unpaid revisions. Track real creative hours across Figma, Photoshop, Illustrator, and web tools to bill with total confidence.",
    checkPoints: [
      "Automatic document title capture for Figma, Adobe Creative Cloud, and code",
      "Real-time retainer consumption meters that flag budget overages at 80%",
      "Separate creative billable work from internal pitch decks and team meetings",
      "Easy export to agency accounting software (QuickBooks, Xero, FreshBooks)",
    ],
    pillars: [
      {
        title: "Retainer Health Meters",
        desc: "Monitor fixed monthly client retainers to know before you over-deliver free unbilled hours.",
        icon: TrendingUp,
      },
      {
        title: "Design App Detection",
        desc: "Captures active file titles in Figma, Premiere, Illustrator, and After Effects automatically.",
        icon: Laptop,
      },
      {
        title: "Scope Creep Defense",
        desc: "Show demanding clients the exact hours consumed by 'quick revision' requests.",
        icon: ShieldCheck,
      },
      {
        title: "Agency Profit Margin",
        desc: "Compare billing rates against internal design staff salaries for true job costing.",
        icon: Receipt,
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit support fixed-fee retainers?",
        a: "Yes. You can track hours against a monthly retainer budget cap and receive warnings when 80% of hours are reached.",
      },
    ],
    mockup: {
      title: "Agency Retainer Dashboard",
      subtitle: "October Active Retainers · 14 Retainers",
      stats: [
        { label: "Total Retainer Value", value: "$88,000 / mo" },
        { label: "Average Realized Rate", value: "$135 / hr" },
        { label: "Retainers at Risk", value: "1 over budget" },
      ],
      rows: [
        { name: "Apex Retail Rebrand", tag: "$25,000 / mo", metric: "162h / 180h", status: "Healthy (90%)" },
        { name: "Global SaaS UI Revamp", tag: "$30,000 / mo", metric: "215h / 200h", status: "⚠ Over Budget (+8%)" },
      ],
    },
  },
  bpo: {
    slug: "bpo",
    badge: "SOLUTIONS · BPO & CONTACT CENTRES",
    title: "Shift adherence and attendance",
    titleAccent: "across rotating 24/7 rosters.",
    description:
      "Track shift adherence, handle complex rotating rosters that cross midnight, and maintain audit records for hundreds of agents without high hardware overhead.",
    checkPoints: [
      "Real-time shift adherence alerts for late logins or extended unauthorized breaks",
      "Multi-shift scheduling crossing midnight without splitting daily attendance",
      "Audit-proof timesheets designed for high-density BPO and customer support teams",
      "Lightweight desktop client won't slow down CRM or telephony dialer softphones",
    ],
    pillars: [
      {
        title: "24/7 Roster Management",
        desc: "Seamlessly handles rotating morning, evening, and graveyard shifts without manual intervention.",
        icon: Clock,
      },
      {
        title: "Dialer Softphone Friendly",
        desc: "Rust-based desktop agent consumes less than 25MB RAM, ensuring clear VoIP call audio quality.",
        icon: Headphones,
      },
      {
        title: "Automated Break Adherence",
        desc: "Distinguishes scheduled team breaks from unexplained workstation idle pauses.",
        icon: Check,
      },
      {
        title: "Mass User Provisioning",
        desc: "Deploy via MSI / PKG scripts with silent install across 1,000+ contact center workstations.",
        icon: Users,
      },
    ],
    faqs: [
      {
        q: "Can Deskmerit be silently installed across hundreds of workstations?",
        a: "Yes. We offer silent MSI installers with enterprise group policy (GPO) and MDM deployment scripts.",
      },
    ],
    mockup: {
      title: "Contact Center Live Adherence",
      subtitle: "Shift: APAC Support · 140 Agents Active",
      stats: [
        { label: "Shift Adherence", value: "97.4%", badge: "High" },
        { label: "Agents Active on Calls", value: "118 agents" },
        { label: "Scheduled Break", value: "22 agents" },
      ],
      rows: [
        { name: "Tier 1 Customer Support", tag: "80 agents", metric: "98% Adherence", status: "On Target" },
        { name: "Escalations & Tech Desk", tag: "40 agents", metric: "96% Adherence", status: "On Target" },
      ],
    },
  },
  "professional-services": {
    slug: "professional-services",
    badge: "SOLUTIONS · CONSULTING & ACCOUNTING",
    title: "Capture billable time",
    titleAccent: "you currently give away for free.",
    description:
      "Consultants lose up to 20% of their billable hours answering quick client emails, reviewing PDFs, and drafting models. Deskmerit automatically captures every minute of client work.",
    checkPoints: [
      "Captures time in standard 6-minute (0.1h) or 15-minute billing increments",
      "Automatic file name attribution for Excel financial models and legal PDFs",
      "Integrates with major ERP and accounting platforms (SAP, NetSuite, Xero)",
      "Confidentiality safeguards: file bodies and emails are never read or stored",
    ],
    pillars: [
      {
        title: "Standard Billing Increments",
        desc: "Auto-round work intervals to 6-minute units (0.1h) or 15-minute blocks per firm policy.",
        icon: Scale,
      },
      {
        title: "Financial Model Tracking",
        desc: "Track exact hours spent on specific Excel workbooks and valuation decks.",
        icon: FileSpreadsheet,
      },
      {
        title: "Strict Confidentiality",
        desc: "Complies with legal and accounting ethical confidentiality: window titles only, zero content inspection.",
        icon: ShieldCheck,
      },
      {
        title: "Partner Profitability",
        desc: "Review billable realization rates per partner, director, and senior associate.",
        icon: TrendingUp,
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit support 6-minute billing increments?",
        a: "Yes. You can configure your workspace to aggregate time into 6-minute (0.1h) or 15-minute standard increments.",
      },
    ],
    mockup: {
      title: "Consulting Practice Realization",
      subtitle: "Q4 Advisory Engagements",
      stats: [
        { label: "Firm Realization Rate", value: "94.2%" },
        { label: "Captured Unbilled Time", value: "+18.5 hrs / consultant" },
        { label: "Avg Partner Margin", value: "54%" },
      ],
      rows: [
        { name: "M&A Due Diligence (Project Titan)", tag: "Partner Led", metric: "142.5 hrs", status: "Billed" },
        { name: "Tax Structuring (Global Corp)", tag: "Senior Advisory", metric: "88.0 hrs", status: "Billed" },
      ],
    },
  },
  hr: {
    slug: "hr",
    badge: "SOLUTIONS · FOR HR TEAMS",
    title: "Attendance records and audit trails",
    titleAccent: "HR can actually stand behind.",
    description:
      "Eliminate end-of-month timesheet chaos. Deskmerit feeds clean, verified attendance and leave records straight into payroll without disputes, biometric errors, or manual spreadsheets.",
    checkPoints: [
      "Direct 1-click attendance synchronization with Sqalible HRMS",
      "Statutory compliance readiness: India DPDP Act, NSW Surveillance Act, NZ Privacy Act",
      "Immutable audit logs: every manual correction is recorded with timestamp and reason",
      "Self-service leave management and team absence calendar",
    ],
    pillars: [
      {
        title: "Automated Payroll Feed",
        desc: "Reconciles worked hours, overtime, and leaves with payroll in one click.",
        icon: UserCheck,
      },
      {
        title: "Labour Law Compliance",
        desc: "Pre-built templates and employee notices satisfying statutory privacy and surveillance laws.",
        icon: ShieldCheck,
      },
      {
        title: "Auditable Timesheets",
        desc: "Never worry about compliance audits; every single entry is backed by immutable time telemetry.",
        icon: FileSpreadsheet,
      },
      {
        title: "Zero Dispute Resolution",
        desc: "Employees see their own logs transparently, eliminating arguments over attendance.",
        icon: Check,
      },
    ],
    faqs: [
      {
        q: "How does Deskmerit integrate with our existing payroll software?",
        a: "Deskmerit connects natively with Sqalible HRMS and provides open REST webhooks for other payroll engines.",
      },
    ],
    mockup: {
      title: "HR Payroll Reconciliation",
      subtitle: "Monthly Attendance Summary",
      stats: [
        { label: "Employees Reconciled", value: "248 / 248", badge: "Ready" },
        { label: "Leave Requests Pending", value: "0" },
        { label: "Payroll Sync Status", value: "Synced to Sqalible" },
      ],
      rows: [
        { name: "Full-Time Salaried (Tech)", tag: "160 employees", metric: "100% Verified", status: "Ready" },
        { name: "Hourly Contractors", tag: "88 contractors", metric: "100% Verified", status: "Ready" },
      ],
    },
  },
  managers: {
    slug: "managers",
    badge: "SOLUTIONS · FOR MANAGERS",
    title: "Lead teams with transparent facts,",
    titleAccent: "not guesswork or feelings.",
    description:
      "Know who is blocked, who is overloaded, and which projects are eating up engineering time. Get clean workforce insights without feeling like a surveillance cop.",
    checkPoints: [
      "Real-time team presence board shows who is working on what without asking in Slack",
      "Workload distribution alerts flag engineers working 50+ hours to prevent burnout",
      "See which Jira and Azure DevOps backlog tickets absorb the most delivery time",
      "Foster high-trust cultures with blurred screenshots and zero keylogger spying",
    ],
    pillars: [
      {
        title: "Burnout Protection",
        desc: "Identify overloaded developers who are logging excessive late nights before they resign.",
        icon: TrendingUp,
      },
      {
        title: "Objective One-on-Ones",
        desc: "Base 1:1 reviews on real project outcomes and work patterns rather than subjective impressions.",
        icon: Users,
      },
      {
        title: "Bottleneck Discovery",
        desc: "Spot tasks where engineers are stuck for days on non-productive compiler or dependency loops.",
        icon: AlertTriangleIcon,
      },
      {
        title: "High-Trust Leadership",
        desc: "Respect team autonomy: no micromanagement alarms or sneaky webcam spying.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "How does Deskmerit help prevent team burnout?",
        a: "Managers receive weekly summaries highlighting team members who regularly exceed 45 hours or work on weekends.",
      },
    ],
    mockup: {
      title: "Engineering Team Health",
      subtitle: "Sprint 42 Focus & Workload Balance",
      stats: [
        { label: "Sprint Completion", value: "88%", badge: "On Track" },
        { label: "Burnout Risk Alert", value: "0 members" },
        { label: "Avg Focus Block", value: "4.2 hrs / day" },
      ],
      rows: [
        { name: "Sprint Delivery: Mobile API", tag: "Backend Guild", metric: "148 hrs", status: "Healthy" },
        { name: "Tech Debt & Refactor", tag: "Core Platform", metric: "42 hrs", status: "Healthy" },
      ],
    },
  },
  finance: {
    slug: "finance",
    badge: "SOLUTIONS · FOR FINANCE & CFOs",
    title: "Project profitability and labour costs",
    titleAccent: "in crystal-clear focus.",
    description:
      "Labour is your biggest expense. Deskmerit compares internal payroll costs with client billable revenue in real time, giving CFOs and finance leaders true gross project margins.",
    checkPoints: [
      "Real-time gross margin tracking: billable revenue minus actual internal labour cost",
      "Budget versus actual burn rate tracking across all client retainers and milestones",
      "Reduces month-end timesheet reconciliation from days to under 15 minutes",
      "Multi-currency support with local tax invoicing in INR, AUD, NZD, AED, SAR, and USD",
    ],
    pillars: [
      {
        title: "True Margin Visibility",
        desc: "See gross profit per project, client account, and department in real time.",
        icon: Receipt,
      },
      {
        title: "Fast Month-End Close",
        desc: "Locked, approved timesheets flow directly into ERP systems without manual cross-checking.",
        icon: FileSpreadsheet,
      },
      {
        title: "Multi-Currency Financials",
        desc: "Bill global clients in USD or EUR while paying local teams in INR, AUD, or AED.",
        icon: Globe,
      },
      {
        title: "Audit & Tax Compliance",
        desc: "Generate GST, VAT, and ABN compliant invoice timesheets that pass corporate audits.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "Can Deskmerit calculate our actual gross profit margins on client contracts?",
        a: "Yes. By entering employee internal cost rates alongside client billing rates, Deskmerit automatically calculates project gross margin percentages.",
      },
    ],
    mockup: {
      title: "Finance & Margin Analytics",
      subtitle: "Q4 Client Revenue vs Labour Cost",
      stats: [
        { label: "Total Billed Revenue", value: "$342,800" },
        { label: "Underlying Labour Cost", value: "$168,000" },
        { label: "Gross Margin", value: "51.0%", badge: "+3.2%" },
      ],
      rows: [
        { name: "FinTech Enterprise Accounts", tag: "$180k revenue", metric: "54% Margin", status: "High Margin" },
        { name: "Cloud Migrations Retainer", tag: "$94k revenue", metric: "48% Margin", status: "Healthy" },
      ],
    },
  },
  "white-label": {
    slug: "white-label",
    badge: "PARTNERS · WHITE-LABEL RESELLING",
    title: "White-label time tracking software",
    titleAccent: "under your own agency brand.",
    description:
      "Deliver Deskmerit under your company's domain, brand colors, and custom logo. Provide clients with a premium time tracking suite while keeping 30% recurring software margin.",
    checkPoints: [
      "Custom domain (e.g. tracker.youragency.com) with SSL certificate included",
      "Branded desktop agent installer with your custom app name and icon",
      "Multi-tenant master reseller portal with automated client seat provisioning",
      "Generous 30% recurring margin with consolidated monthly partner invoicing",
    ],
    pillars: [
      {
        title: "Your Brand, Zero Overhead",
        desc: "Your clients see your agency name, logo, and colors across web and desktop agents.",
        icon: Sparkles,
      },
      {
        title: "Multi-Tenant Master Panel",
        desc: "Provision new client workspaces, allocate seats, and manage billing from one master console.",
        icon: Layers,
      },
      {
        title: "Recurring Margin",
        desc: "Earn 30% recurring software margin on every active seat billed across your client accounts.",
        icon: Receipt,
      },
      {
        title: "Dedicated Partner Concierge",
        desc: "Direct access to our senior engineering and customer success team for onboarding support.",
        icon: Users,
      },
    ],
    faqs: [
      {
        q: "What is the minimum seat commitment for white-label?",
        a: "Our white-label reseller program is available on the Premium tier starting at 50 seats.",
      },
    ],
    mockup: {
      title: "White-Label Partner Admin",
      subtitle: "Agency Reseller Master Console",
      stats: [
        { label: "Client Workspaces", value: "14 Clients" },
        { label: "Active Seats", value: "284 Seats" },
        { label: "Monthly Partner Margin", value: "$1,704 / mo" },
      ],
      rows: [
        { name: "tracker.apextech.com", tag: "Apex Solutions", metric: "84 seats", status: "Active" },
        { name: "time.vortexcloud.io", tag: "Vortex Cloud", metric: "62 seats", status: "Active" },
      ],
    },
  },
};

function AlertTriangleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function SolutionDetailPage() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  let solutionKey = "remote-teams";
  for (const key of Object.keys(SOLUTIONS)) {
    if (path.includes(key)) {
      solutionKey = key;
      break;
    }
  }

  const sol = SOLUTIONS[solutionKey] || SOLUTIONS["remote-teams"];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const SolutionIcon = sol.pillars[0]?.icon || Users;

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* ========================================================================= */}
        {/* 1. DEEP NAVY HERO SECTION (Exact Reference Layout)                        */}
        {/* ========================================================================= */}
        <section className="bg-[#0A0F1D] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#24305A] relative overflow-hidden">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF5A36]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb matching Reference */}
            <div className="text-xs text-[#20C997] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <Link to="/solutions/it-services" className="hover:underline text-slate-300">Solutions</Link>
              <span className="text-slate-500">/</span>
              <span>{sol.title}</span>
            </div>

            <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headline, Overline, Description & CTAs */}
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#20C997] bg-[#132338] px-3.5 py-1 rounded-full inline-block border border-[#20C997]/30">
                  {sol.badge}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  {sol.title}{" "}
                  <span className="text-[#FF5A36] block">{sol.titleAccent}</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  {sol.description}
                </p>

                {/* Proof Point Checklist with White-background bullets */}
                <ul className="space-y-3 pt-1">
                  {sol.checkPoints.slice(0, 3).map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#E6E2D8]">
                      <span className="w-5 h-5 rounded-full bg-white text-[#0F1730] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all"
                  >
                    <span>Start free trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all"
                  >
                    <span>Book a demo</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Browser Window Mockup with macOS Controls (Screenshot Reference Match) */}
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                      <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                      <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                      app.deskmerit.com/{sol.slug}
                    </div>
                    <div className="text-[11px] font-bold text-[#20C997] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
                      Active Engine
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center">
                          <SolutionIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{sol.mockup.title}</div>
                          <div className="text-[10px] text-slate-400">{sol.mockup.subtitle}</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#20C997]">{sol.mockup.stats[0]?.value || "1h 42m"}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Attendance Today</div>
                        <div className="text-sm font-bold text-white mt-1">6h 12m (Present)</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Surveillance Status</div>
                        <div className="text-sm font-bold text-[#20C997] mt-1">Zero Keylogging</div>
                      </div>
                    </div>

                    {/* Live Telemetry Rows */}
                    <div className="space-y-2 pt-1">
                      {sol.mockup.rows.slice(0, 2).map((r, i) => (
                        <div
                          key={i}
                          className="bg-slate-900/40 p-2.5 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs"
                        >
                          <div>
                            <div className="font-semibold text-white">{r.name}</div>
                            <div className="text-[10px] text-slate-400">{r.tag}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-[#FFE6DF]">{r.metric}</div>
                            <div className="text-[10px] text-[#20C997]">{r.status}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. 4 PILLARS FEATURE BREAKDOWN                                            */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#FFFFFF] border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                Strategic Advantages
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                Engineered for modern high-performing teams.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sol.pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="p-7 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-[#FFFFFF] text-[#C2361A] flex items-center justify-center mb-5 border border-[#E6E2D8] shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base text-[#0F1730] mb-2">{p.title}</h3>
                      <p className="text-xs text-[#4A5370] leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. FAQ ACCORDION SECTION                                                  */}
        {/* ========================================================================= */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
              Common Questions
            </div>
            <h2 className="text-3xl font-extrabold text-[#0F1730]">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {sol.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#FF5A36] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#4A5370] leading-relaxed border-t border-[#E6E2D8]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. FINAL CTA BAND                                                         */}
        {/* ========================================================================= */}
        <DeskmeritCtaBand
          title="Transform your team's tracking this week."
          subtitle="Deploy across your team in minutes. Free 14-day trial, no credit card required."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
