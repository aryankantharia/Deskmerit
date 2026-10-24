import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import {
  Timer,
  Activity,
  FileText,
  Radio,
  Receipt,
  FileSpreadsheet,
  CalendarCheck,
  CalendarDays,
  Calendar,
  Coffee,
  Camera,
  Hourglass,
  Check,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Clock,
  Layers,
  BarChart3,
  Users,
  Lock,
} from "lucide-react";

interface ProductFeatureDetail {
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

const PRODUCT_FEATURES: Record<string, ProductFeatureDetail> = {
  "automatic-time-tracking": {
    slug: "automatic-time-tracking",
    badge: "AUTOMATIC TRACKING · ZERO TIMERS",
    title: "Time tracking that runs quietly,",
    titleAccent: "so engineers can actually engineer.",
    description:
      "Records working time in the background from the moment the agent starts. No start/stop buttons to remember, no forgotten clocks, and no reconstructed Friday timesheets.",
    checkPoints: [
      "Launches on system startup with under 25MB RAM footprint (Rust native)",
      "Automatic idle detection that pauses tracking during lunch and breaks",
      "Offline caching queues all logs until internet connection is restored",
      "Window title and application level capture without invasive keylogging",
    ],
    pillars: [
      {
        title: "Silent Background Agent",
        desc: "Built natively in Rust. Consumes virtually zero battery and memory, ensuring zero impact on compiler or IDE performance.",
        icon: Timer,
      },
      {
        title: "Smart Idle Pause",
        desc: "Automatically detects when the keyboard and mouse stop moving. Prompts to allocate idle time or discard personal pauses.",
        icon: Coffee,
      },
      {
        title: "Offline-First Sync",
        desc: "Queues work logs securely on disk with AES-256 encryption. Uploads seamlessly when reconnecting to office Wi-Fi or hotspots.",
        icon: ShieldCheck,
      },
      {
        title: "Zero Manual Timers",
        desc: "Engineers never lose billable hours because they forgot to click a start stopwatch button in the morning.",
        icon: Clock,
      },
    ],
    faqs: [
      {
        q: "How does automatic time tracking work without timers?",
        a: "The native Deskmerit desktop agent monitors active computer processes and window titles. When you work, it attributes minutes to active applications and tasks.",
      },
      {
        q: "What happens if an employee steps away from their laptop?",
        a: "After a configurable idle threshold (e.g. 5 minutes), the agent pauses recording. Upon return, it asks whether the away time was work-related or a break.",
      },
      {
        q: "Does it drain laptop battery life?",
        a: "No. Deskmerit is compiled directly to native machine code in Rust, consuming less than 1% CPU and under 25MB RAM.",
      },
    ],
    mockup: {
      title: "Active Session · Desktop Agent",
      subtitle: "Automatic capture running since 09:14 AM",
      stats: [
        { label: "Today's Tracked Time", value: "6h 42m", badge: "Live" },
        { label: "Active Window", value: "VS Code (auth.rs)", badge: "Productive" },
        { label: "Sync Status", value: "Encrypted & Queued" },
      ],
      rows: [
        { name: "Visual Studio Code", tag: "Development", metric: "3h 40m", status: "100% Productive" },
        { name: "Terminal / zsh (cargo)", tag: "Build & Test", metric: "1h 15m", status: "100% Productive" },
        { name: "Google Chrome (docs.rs)", tag: "Research", metric: "1h 05m", status: "Neutral" },
        { name: "Slack (engineering)", tag: "Team Comms", metric: "42m", status: "Productive" },
      ],
    },
  },
  "productivity-tracking": {
    slug: "productivity-tracking",
    badge: "PRODUCTIVITY SCORING · ROLE-AWARE",
    title: "Productivity scored by role,",
    titleAccent: "not arbitrary browser rules.",
    description:
      "A developer on GitHub is productive; a copywriter on LinkedIn is productive. Deskmerit applies role-customized categorization to score apps, URLs, and document titles accurately.",
    checkPoints: [
      "Custom productive, neutral, and unproductive rules per department",
      "Document title categorization without inspecting sensitive content",
      "Visual productivity index trends across teams, projects, and shifts",
      "Zero punitive micro-alarms or annoying popup disruption",
    ],
    pillars: [
      {
        title: "Role-Aware Categorization",
        desc: "Assign distinct productivity rulebooks to engineers, recruiters, sales reps, and customer success agents.",
        icon: Activity,
      },
      {
        title: "Category Analytics",
        desc: "Break down where working hours flow: Development, Design, Communication, CRM, and Administrative tasks.",
        icon: BarChart3,
      },
      {
        title: "Contextual Document Titles",
        desc: "Understand specific file workflows (e.g. Figma wireframe vs PDF contract) without capturing private file bodies.",
        icon: FileText,
      },
      {
        title: "Trend Benchmarking",
        desc: "Compare team focus hours month-over-month to identify workflow bottlenecks and tool fatigue.",
        icon: Sparkles,
      },
    ],
    faqs: [
      {
        q: "Who configures the productivity rules?",
        a: "Organization administrators or team managers can customize categories per department or import our curated SaaS presets.",
      },
      {
        q: "Are social media sites automatically marked unproductive?",
        a: "Only by default for non-marketing roles. For social media managers or recruiters, platforms like LinkedIn and Twitter are categorized as productive.",
      },
    ],
    mockup: {
      title: "Team Productivity Scorecard",
      subtitle: "Engineering Department · 24 Active Members",
      stats: [
        { label: "Productivity Index", value: "92.4%", badge: "+4.1% vs last week" },
        { label: "Core Focus Time", value: "5h 12m / day" },
        { label: "Unproductive Time", value: "18m / day" },
      ],
      rows: [
        { name: "Frontend Engineering", tag: "12 engineers", metric: "94% Productive", status: "High Focus" },
        { name: "Backend & Systems", tag: "8 engineers", metric: "96% Productive", status: "High Focus" },
        { name: "Product Design", tag: "4 designers", metric: "89% Productive", status: "Healthy" },
      ],
    },
  },
  "idle-and-private-time": {
    slug: "idle-and-private-time",
    badge: "PRIVACY CONTROLS · UNQUESTIONED PAUSES",
    title: "Step away whenever you need.",
    titleAccent: "Private time is completely private.",
    description:
      "Employees aren't robots. Deskmerit gives team members unilateral control to switch on Private Time with one click. When activated, all tracking stops entirely.",
    checkPoints: [
      "One-click Private Time pause toggle on the desktop toolbar",
      "Zero screen recording or window tracking during personal pauses",
      "Transparent idle prompts that prevent lunch from counting as working time",
      "Employees retain unilateral rights to review and delete personal time logs",
    ],
    pillars: [
      {
        title: "100% Unmonitored Pauses",
        desc: "Take care of personal banking, doctor calls, or family emergencies without worrying about work tracking.",
        icon: Coffee,
      },
      {
        title: "Non-Intrusive Idle Prompts",
        desc: "When coming back from lunch or a whiteboard session, a simple dialog asks how to categorize the away time.",
        icon: Clock,
      },
      {
        title: "Auditable Transparency",
        desc: "Managers see that the employee was on Private Time or Idle, but zero private URLs or windows are ever logged.",
        icon: ShieldCheck,
      },
      {
        title: "Employee First Charter",
        desc: "Built to cultivate trust rather than paranoia across modern remote and hybrid teams.",
        icon: Lock,
      },
    ],
    faqs: [
      {
        q: "Can managers see what employees do during Private Time?",
        a: "Never. During Private Time, telemetry recording is completely turned off. No window titles, apps, or screenshots are captured.",
      },
      {
        q: "Does Private Time count toward daily attendance?",
        a: "No. Private Time is logged as unbilled personal time, ensuring that only actual work time is billed to clients.",
      },
    ],
    mockup: {
      title: "Privacy Controls · Toolbar Agent",
      subtitle: "Employee Privacy Guarantee Active",
      stats: [
        { label: "Current Mode", value: "Private Time Active", badge: "Tracking Paused" },
        { label: "Data Stream", value: "Disconnected" },
        { label: "Today's Private Time", value: "45 mins" },
      ],
      rows: [
        { name: "Personal Break", tag: "12:30 PM – 01:15 PM", metric: "45m", status: "Unmonitored" },
        { name: "Coffee Pause", tag: "03:45 PM – 03:55 PM", metric: "10m", status: "Unmonitored" },
      ],
    },
  },
  screenshots: {
    slug: "screenshots",
    badge: "ETHICAL SCREENSHOTS · BLURRED BY DEFAULT",
    title: "Screenshots that respect dignity.",
    titleAccent: "Off by default. Blurred by default.",
    description:
      "Most monitoring tools treat screenshots as spying weapons. In Deskmerit, screenshots are disabled by default. If enabled for sensitive client audits, they are blurred, announced, and employee-visible.",
    checkPoints: [
      "Disabled by default across all accounts and workspaces",
      "Blurred resolution by default to protect passwords and private data",
      "Visual icon in system tray clearly indicates when screen capture is enabled",
      "Employees can review and permanently delete any screenshot from their record",
    ],
    pillars: [
      {
        title: "Blurred Privacy Protection",
        desc: "Text is blurred into unreadable pixels, confirming the employee is on the task without exposing private chat or code.",
        icon: Camera,
      },
      {
        title: "Full Worker Transparency",
        desc: "Employees can inspect their exact screenshot gallery at any moment and delete frames containing private info.",
        icon: ShieldCheck,
      },
      {
        title: "Zero Secret Surveillance",
        desc: "The desktop client openly announces capture settings. We never build stealth or invisible recording modes.",
        icon: Lock,
      },
      {
        title: "Compliance Verification",
        desc: "Provides just enough audit evidence for enterprise client contracts without turning managers into hall monitors.",
        icon: Check,
      },
    ],
    faqs: [
      {
        q: "Are screenshots mandatory in Deskmerit?",
        a: "No! Screenshots are off by default. Most tech companies and software consultancies use Deskmerit with screenshots completely disabled.",
      },
      {
        q: "What happens if a sensitive password is on screen?",
        a: "Our blurring filter masks individual characters. Furthermore, employees have the unilateral power to delete that frame.",
      },
    ],
    mockup: {
      title: "Proof of Work · Frame Inspector",
      subtitle: "Client Audit Policy: 1 frame per 15 mins (Blurred)",
      stats: [
        { label: "Default State", value: "Blurred 100%" },
        { label: "Employee Access", value: "Full Deletion Rights" },
        { label: "Stealth Mode", value: "Permanently Blocked" },
      ],
      rows: [
        { name: "Frame #1042 (10:15 AM)", tag: "Jira / VS Code", metric: "Blurred", status: "Verified" },
        { name: "Frame #1043 (10:30 AM)", tag: "Figma App", metric: "Blurred", status: "Verified" },
      ],
    },
  },
  "project-time-tracking": {
    slug: "project-time-tracking",
    badge: "BILLABLE TIME & BUDGETS · CLIENT DEFENSE",
    title: "Bill every dollar you earn.",
    titleAccent: "With audit trails clients respect.",
    description:
      "Assign billable rates per person, role, and project. Receive automated alerts before budgets overrun, and generate client-ready invoice timesheets backed by task receipts.",
    checkPoints: [
      "Custom hourly rates per team member, client retainer, or task type",
      "Real-time budget consumption tracking with 80% and 100% threshold alerts",
      "Distinguishes billable client work from non-billable bench and internal meetings",
      "One-click timesheet export to QuickBooks, Xero, Excel, and CSV",
    ],
    pillars: [
      {
        title: "Multi-Rate Card Engine",
        desc: "Set standard client billing rates alongside internal labour cost rates to see real gross project margins.",
        icon: Receipt,
      },
      {
        title: "Budget Overrun Alerts",
        desc: "Receive automated Slack or email warnings before engineering hours exceed the agreed client scope.",
        icon: Clock,
      },
      {
        title: "Non-Billable Separation",
        desc: "Keep training, team standups, and research tracked without polluting client billing summaries.",
        icon: Layers,
      },
      {
        title: "Client-Ready Audit Proof",
        desc: "Eliminate disputed hours with time records linked directly to Jira, Azure DevOps, and OpenProject task tickets.",
        icon: FileSpreadsheet,
      },
    ],
    faqs: [
      {
        q: "Can we set different rates for junior vs senior engineers?",
        a: "Yes. Deskmerit supports hierarchical rate cards based on team member seniority, project retainer, or specialized task.",
      },
      {
        q: "Can clients get access to view their project hours?",
        a: "Yes, you can create read-only client portal guest access or export branded PDF/Excel reports.",
      },
    ],
    mockup: {
      title: "Project Retainer Financials",
      subtitle: "Acme FinTech · Q4 Mobile Delivery",
      stats: [
        { label: "Budget Allocated", value: "$45,000" },
        { label: "Billed to Date", value: "$32,400 (72%)", badge: "On Track" },
        { label: "Gross Margin", value: "48.5%" },
      ],
      rows: [
        { name: "Sprint 4: Auth API", tag: "Backend", metric: "$14,200", status: "Approved" },
        { name: "Sprint 5: UI Screens", tag: "Design & Mobile", metric: "$18,200", status: "Approved" },
      ],
    },
  },
  "timesheets-and-reports": {
    slug: "timesheets-and-reports",
    badge: "EXPORTABLE TIMESHEETS · CSV & EXCEL",
    title: "Timesheets that match your screen.",
    titleAccent: "No mystery rounding or missing hours.",
    description:
      "Slice and filter workforce time by person, client, task, department, or date range. Export clean Excel and CSV files that balance to the exact second.",
    checkPoints: [
      "Weekly and monthly timesheet approvals with manager sign-off workflows",
      "Pivot time by person, client, ticket, app, or productivity tag",
      "Clean Excel (.xlsx) and CSV exports with uncorrupted timestamps",
      "Automated scheduled reports delivered to executive inboxes every Monday",
    ],
    pillars: [
      {
        title: "Flexible Slice & Dice",
        desc: "Filter 100,000+ hours in sub-seconds by employee, client, ticket number, or country office.",
        icon: FileSpreadsheet,
      },
      {
        title: "Manager Approval Gates",
        desc: "Lock timesheets at the end of each billing cycle to prevent retroactive tampering before payroll runs.",
        icon: Check,
      },
      {
        title: "Scheduled Delivery",
        desc: "Set up automated weekly email dispatches to finance, project managers, and department heads.",
        icon: Clock,
      },
      {
        title: "API Data Access",
        desc: "Stream timesheet entries directly into your BI warehouse, BigQuery, Snowflake, or custom ERP.",
        icon: Sparkles,
      },
    ],
    faqs: [
      {
        q: "Can timesheets be edited after submission?",
        a: "Only with manager approval. Any modifications are logged with an immutable audit trail showing who made the change.",
      },
      {
        q: "Can we automate sending reports to clients?",
        a: "Yes. You can schedule weekly or monthly reports to be automatically emailed to designated client contacts.",
      },
    ],
    mockup: {
      title: "Export Center · Timesheet Master",
      subtitle: "Week 43 · Oct 19 – Oct 25, 2026",
      stats: [
        { label: "Approved Timesheets", value: "48 / 48", badge: "100%" },
        { label: "Total Billed", value: "1,842.5 hrs" },
        { label: "Export Ready", value: "CSV, Excel, PDF" },
      ],
      rows: [
        { name: "Priya Sharma (Tech Lead)", tag: "Acme FinTech", metric: "40.5 hrs", status: "Approved" },
        { name: "David Miller (Staff Eng)", tag: "Northwind Cloud", metric: "41.0 hrs", status: "Approved" },
        { name: "Zainab Al-Fassi (DevOps)", tag: "Global Bank", metric: "38.5 hrs", status: "Approved" },
      ],
    },
  },
  "shift-scheduling": {
    slug: "shift-scheduling",
    badge: "ROSTERS & SHIFTS · OVERNIGHT TEMPLATES",
    title: "Shift scheduling built for rotating teams.",
    titleAccent: "Across all time zones.",
    description:
      "Design flexible shift templates, handle rosters that cross midnight without attendance errors, and flag late arrivals and overtime automatically.",
    checkPoints: [
      "Overnight shift scheduling that spans midnight without splitting day totals",
      "Configurable grace periods for clock-ins, late arrivals, and early departures",
      "Automated overtime calculation with 1.5x / 2.0x local statutory multipliers",
      "Multi-timezone shifts for distributed follow-the-sun engineering teams",
    ],
    pillars: [
      {
        title: "Midnight-Crossing Shifts",
        desc: "Shifts running from 9 PM to 3 AM are evaluated as contiguous work without marking employees absent.",
        icon: CalendarDays,
      },
      {
        title: "Overtime Alerts",
        desc: "Track statutory overtime limits in real time to prevent employee burnout and labour compliance violations.",
        icon: Clock,
      },
      {
        title: "Roster Templates",
        desc: "Re-use weekly rosters, rotating 24/7 schedules, and weekend on-call rotations in one click.",
        icon: CalendarCheck,
      },
      {
        title: "Grace Period Rules",
        desc: "Configurable late-arrival buffers (e.g. 15 minutes) before marking shifts with tardy flags.",
        icon: Check,
      },
    ],
    faqs: [
      {
        q: "How does Deskmerit handle shifts across different timezones?",
        a: "Shifts are mapped to each employee's local timezone so daylight saving adjustments and local workweeks are handled seamlessly.",
      },
    ],
    mockup: {
      title: "Team Shift Roster",
      subtitle: "Support & Infrastructure · 24/7 Roster",
      stats: [
        { label: "Roster Adherence", value: "98.2%", badge: "High" },
        { label: "Active Shift", value: "APAC Afternoon" },
        { label: "Overtime Logged", value: "14.5 hrs" },
      ],
      rows: [
        { name: "Morning Shift (06:00 – 14:00)", tag: "8 on shift", metric: "100% Attended", status: "On Time" },
        { name: "Evening Shift (14:00 – 22:00)", tag: "6 on shift", metric: "100% Attended", status: "Active" },
        { name: "Night Shift (22:00 – 06:00)", tag: "4 on shift", metric: "Scheduled", status: "Upcoming" },
      ],
    },
  },
  "leave-management": {
    slug: "leave-management",
    badge: "LEAVE MANAGEMENT · TEAM CALENDAR",
    title: "Leaves and holidays in one place.",
    titleAccent: "Synced straight to timesheets.",
    description:
      "Team members request leave, managers approve with one click, and absence dates appear automatically on the shared calendar and weekly payroll timesheets.",
    checkPoints: [
      "Custom leave policies (Annual, Sick, Casual, Parental, Public Holidays)",
      "Shared team calendar prevents coverage gaps and project delivery delays",
      "One-click sync with Sqalible HRMS and Google / Outlook calendars",
      "Automatic subtraction of approved leaves from expected monthly work hours",
    ],
    pillars: [
      {
        title: "Self-Service Requests",
        desc: "Employees view their live leave balance and submit absence requests directly from the web or desktop app.",
        icon: Calendar,
      },
      {
        title: "Team Conflict Detection",
        desc: "Warns managers if critical on-call engineers or too many peers in the same team request the same days off.",
        icon: Users,
      },
      {
        title: "Public Holiday Sets",
        desc: "Assign official state and national holiday calendars across India, Australia, NZ, UAE, Saudi, and the US.",
        icon: Sparkles,
      },
      {
        title: "Direct Payroll Reconciliation",
        desc: "Approved paid and unpaid leaves flow straight into monthly salary calculations with zero manual spreadsheet math.",
        icon: Check,
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit sync with our company Google or Outlook calendar?",
        a: "Yes. Approved leave periods can be subscribed to via standard iCal feeds for Google Workspace and Microsoft 365.",
      },
    ],
    mockup: {
      title: "Leave Balances & Team Calendar",
      subtitle: "Engineering Org Absence Overview",
      stats: [
        { label: "Team Present Today", value: "92%" },
        { label: "On Approved Leave", value: "3 team members" },
        { label: "Upcoming Holidays", value: "Diwali / Public Holiday" },
      ],
      rows: [
        { name: "Rahul Verma", tag: "Annual Leave", metric: "Oct 26 – Oct 28", status: "Approved" },
        { name: "Sarah Jenkins", tag: "Sick Leave", metric: "Oct 24", status: "Logged" },
      ],
    },
  },
  "document-tracking": {
    slug: "document-tracking",
    badge: "DOCUMENT TITLE TRACKING · TITLES ONLY",
    title: "Track time per file and document.",
    titleAccent: "Titles only. Never file contents.",
    description:
      "Understand how many hours go into specific proposals, spreadsheets, CAD models, and codebases. Deskmerit records active file names without ever reading the files themselves.",
    checkPoints: [
      "Detects file names across Word, Excel, PowerPoint, Figma, AutoCAD, and VS Code",
      "Strict data protection: file contents are never read, hashed, or transmitted",
      "Attribute multi-hour document editing sessions to specific clients",
      "Search and aggregate time spent across all versions of a document",
    ],
    pillars: [
      {
        title: "Document Title Attribution",
        desc: "See exact time invested in 'Proposal_v4_Acme.pdf' or 'auth_controller.rs' across days and weeks.",
        icon: FileText,
      },
      {
        title: "Zero Content Snooping",
        desc: "We read only the OS window title bar. The contents of documents never leave your computer.",
        icon: Lock,
      },
      {
        title: "Multi-App Support",
        desc: "Works across Microsoft Office, Adobe Creative Suite, JetBrains, VS Code, and browser documents.",
        icon: Layers,
      },
      {
        title: "Client Project Linking",
        desc: "Automatically map document filenames containing project codes straight to billable invoices.",
        icon: Check,
      },
    ],
    faqs: [
      {
        q: "Does Deskmerit scan or upload my files?",
        a: "Never. Deskmerit only inspects the active window title string exposed by the operating system. It has zero access to your file system contents.",
      },
    ],
    mockup: {
      title: "Document Time Attribution",
      subtitle: "Active File Window Tracking",
      stats: [
        { label: "Active Document", value: "Q4_Financial_Model.xlsx" },
        { label: "Time on Document", value: "3h 15m" },
        { label: "Content Access", value: "Zero (Protected)" },
      ],
      rows: [
        { name: "Proposal_Enterprise_Acme.docx", tag: "Client Deliverable", metric: "2h 45m", status: "Logged" },
        { name: "App_Architecture_v2.fig", tag: "Design Spec", metric: "4h 10m", status: "Logged" },
      ],
    },
  },
  "focus-timer": {
    slug: "focus-timer",
    badge: "POMODORO FOCUS TIMER · DEEP WORK",
    title: "Deep work intervals on your terms.",
    titleAccent: "Pomodoro intervals built into your tracker.",
    description:
      "Boost focus with built-in 25-minute Pomodoro sprints and 5-minute break cues. Eliminate context switching and keep engineers in the flow state.",
    checkPoints: [
      "Customizable work sprint intervals (25m / 50m / 90m deep work cycles)",
      "Gentle visual break reminders that encourage healthy physical pauses",
      "Connects directly with Jira and Azure DevOps tasks to track sprint completion",
      "Comprehensive analytics on deep work blocks versus fragmented interruptions",
    ],
    pillars: [
      {
        title: "Distraction-Free Focus",
        desc: "Trigger deep work sessions that quiet desktop notifications and help engineers tackle hard bugs.",
        icon: Hourglass,
      },
      {
        title: "Healthy Break Prompts",
        desc: "Encourages screen rest, hydration, and eye pauses to reduce end-of-day developer fatigue.",
        icon: Coffee,
      },
      {
        title: "Task-Tied Sprints",
        desc: "Allocate each 25-minute focus interval directly against your current sprint ticket.",
        icon: Timer,
      },
      {
        title: "Flow State Analytics",
        desc: "Measure how many uninterrupted 2-hour blocks your team gets per week.",
        icon: BarChart3,
      },
    ],
    faqs: [
      {
        q: "Can I customize the focus sprint length?",
        a: "Yes. You can adjust sprint durations from 15 minutes to 90 minutes with custom short and long break intervals.",
      },
    ],
    mockup: {
      title: "Focus Sprint #3 in Progress",
      subtitle: "Pomodoro Deep Work · Cycle 3 of 4",
      stats: [
        { label: "Time Remaining", value: "18:42", badge: "Focusing" },
        { label: "Current Sprint", value: "KMB-482 Database Migration" },
        { label: "Focus Score", value: "98%" },
      ],
      rows: [
        { name: "Focus Sprint 1", tag: "25 mins", metric: "Completed", status: "100% Focus" },
        { name: "Focus Sprint 2", tag: "25 mins", metric: "Completed", status: "100% Focus" },
        { name: "Short Break", tag: "5 mins", metric: "Paused", status: "Rested" },
      ],
    },
  },
  "live-status": {
    slug: "live-status",
    badge: "REAL-TIME STATUS · 60-SEC REFRESH",
    title: "Know who is working on what right now.",
    titleAccent: "Without asking in Slack.",
    description:
      "See real-time presence across your global team: Tracking, Idle, Private Time, or Offline. Eliminate 'Hey, are you free?' interruptions and streamline async collaboration.",
    checkPoints: [
      "Real-time status updates every 60 seconds with zero network lag",
      "Respects employee privacy by showing high-level status without screen spying",
      "Filters team members by current active client project, shift, or timezone",
      "Instant indicator for team members who stepped away or paused for lunch",
    ],
    pillars: [
      {
        title: "Live Presence Overview",
        desc: "Glance at your team board to know who is actively coding, in a client meeting, or offline.",
        icon: Radio,
      },
      {
        title: "Asynchronous Harmony",
        desc: "Collaborate seamlessly across Sydney, Bengaluru, and Dubai without guessing who is at their desk.",
        icon: Users,
      },
      {
        title: "Project Filtering",
        desc: "Filter live status by active ticket to see who else is currently debugging the same release.",
        icon: Layers,
      },
      {
        title: "Privacy First Indicator",
        desc: "Shows only 'Private Time' or 'Active' without broadcasting sensitive window titles to peers.",
        icon: ShieldCheck,
      },
    ],
    faqs: [
      {
        q: "How frequently does the status refresh?",
        a: "Status updates via lightweight WebSocket every 60 seconds, or instantly when a team member presses Start or Private Time.",
      },
    ],
    mockup: {
      title: "Live Team Presence Board",
      subtitle: "Real-Time WebSocket Feed · 18 Active Now",
      stats: [
        { label: "Active Tracking", value: "14 engineers", badge: "Live" },
        { label: "In Meetings", value: "3 on Google Meet" },
        { label: "Private Break", value: "1 on pause" },
      ],
      rows: [
        { name: "Alex Chen", tag: "VS Code · Jira KMB-482", metric: "Active 2h 14m", status: "Tracking" },
        { name: "Pooja Reddy", tag: "Google Meet (Client Sync)", metric: "Active 45m", status: "In Meeting" },
        { name: "Marcus Vance", tag: "Private Time", metric: "Paused 12m", status: "On Break" },
      ],
    },
  },
};

export function ProductDetailPage() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // Extract feature slug from URL
  let featureKey = "automatic-time-tracking";
  for (const key of Object.keys(PRODUCT_FEATURES)) {
    if (path.includes(key)) {
      featureKey = key;
      break;
    }
  }

  const feat = PRODUCT_FEATURES[featureKey] || PRODUCT_FEATURES["automatic-time-tracking"];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const FeatureIcon = feat.pillars[0]?.icon || Timer;

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
              <Link to="/features" className="hover:underline text-slate-300">Product</Link>
              <span className="text-slate-500">/</span>
              <span>{feat.title}</span>
            </div>

            <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headline, Overline, Description & CTAs */}
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#20C997] bg-[#132338] px-3.5 py-1 rounded-full inline-block border border-[#20C997]/30">
                  {feat.badge}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  {feat.title}{" "}
                  <span className="text-[#FF5A36] block">{feat.titleAccent}</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  {feat.description}
                </p>

                {/* Proof Point Checklist with White-background bullets */}
                <ul className="space-y-3 pt-1">
                  {feat.checkPoints.slice(0, 3).map((text, i) => (
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
                      app.deskmerit.com/{feat.slug}
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
                          <FeatureIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{feat.mockup.title}</div>
                          <div className="text-[10px] text-slate-400">{feat.mockup.subtitle}</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#20C997]">{feat.mockup.stats[0]?.value || "1h 42m"}</span>
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
                      {feat.mockup.rows.slice(0, 2).map((r, i) => (
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
                Capabilities & Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                Engineered for honesty, built for scale.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {feat.pillars.map((p) => {
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
            {feat.faqs.map((faq, i) => {
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
          title="See your team's real week by Friday."
          subtitle="Install in under 2 minutes. Free 14-day trial, no credit card required."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
