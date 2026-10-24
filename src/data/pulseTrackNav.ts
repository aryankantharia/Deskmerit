export interface NavMegaItem {
  name: string;
  href: string;
  description?: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export interface NavMegaColumn {
  title: string;
  items: NavMegaItem[];
}

export const PRODUCT_MENU = {
  columns: [
    {
      title: "Track",
      items: [
        { name: "Automatic time tracking", href: "/features/automatic-time-tracking", description: "Computer time from the moment the agent starts" },
        { name: "Productivity tracking", href: "/features/productivity-tracking", description: "App, URL and document title scoring per role" },
        { name: "Document tracking", href: "/features/document-tracking", description: "Time per file and document — titles only, never content" },
        { name: "Live status", href: "/features/live-status", description: "Tracking, Idle, Private or Offline in real time" },
        { name: "Focus timer", href: "/features/focus-timer", description: "Pomodoro-style work and break intervals" },
      ],
    },
    {
      title: "Bill & report",
      items: [
        { name: "Tracker Plus", href: "/features/tracker-plus", isPopular: true, description: "Start tracking straight from Jira, Azure DevOps or OpenProject" },
        { name: "Project time & billing", href: "/features/project-time-tracking", description: "Rates per person and project, budget alerts" },
        { name: "Timesheets & reports", href: "/features/timesheets-and-reports", description: "Excel & CSV exports that match on-screen totals" },
      ],
    },
    {
      title: "People",
      items: [
        { name: "Attendance tracking", href: "/features/attendance-tracking", description: "Presence from tracked work, calendar and offline time" },
        { name: "Shift scheduling", href: "/features/shift-scheduling", description: "Shift templates, late and overtime flags" },
        { name: "Leave management", href: "/features/leave-management", description: "Requests, approvals and shared team absence calendar" },
        { name: "Idle & Private Time", href: "/features/idle-and-private-time", description: "Visible pauses, never miscounted as idle slacking" },
        { name: "Screenshots", href: "/features/screenshots", description: "Off by default, blurred by default, announced" },
      ],
    },
  ],
  bottomLinks: [
    { label: "All features →", href: "/features" },
    { label: "Download →", href: "/download" },
    { label: "Security →", href: "/security" },
    { label: "Privacy promise →", href: "/privacy-promise" },
  ],
};

export const SOLUTIONS_MENU = {
  columns: [
    {
      title: "By industry",
      items: [
        { name: "IT services", href: "/solutions/it-services", description: "Prove every billable hour your engineers work" },
        { name: "Staff augmentation", href: "/solutions/staff-augmentation", description: "One tracker across all clients and contractor accounts" },
        { name: "Agencies", href: "/solutions/agencies", description: "Know which clients and retainers are profitable" },
        { name: "BPO & contact centres", href: "/solutions/bpo", description: "Shift adherence and attendance across rotating rosters" },
        { name: "Consulting & accounting", href: "/solutions/professional-services", description: "Capture billable time you give away in 6-min units" },
      ],
    },
    {
      title: "By team",
      items: [
        { name: "Remote teams", href: "/solutions/remote-teams", description: "Outcomes over webcams, timezones handled" },
        { name: "Hybrid teams", href: "/solutions/hybrid-teams", description: "One fair record for home and office days" },
        { name: "Office teams", href: "/solutions/office-teams", description: "Replace biometric hardware queues" },
        { name: "HR", href: "/solutions/hr", description: "Attendance records and audit trails HR can stand behind" },
        { name: "Managers", href: "/solutions/managers", description: "Lead teams with transparent facts, not feelings" },
        { name: "Finance", href: "/solutions/finance", description: "Project profitability and labour cost variance" },
      ],
    },
    {
      title: "By region",
      items: [
        { name: "India (₹ INR)", href: "/en-in", description: "DPDP Act readiness, GST invoices, ₹299/mo" },
        { name: "Australia (A$ AUD)", href: "/en-au", description: "NSW Surveillance Act 14-day notice support, A$8/mo" },
        { name: "New Zealand (NZ$ NZD)", href: "/en-nz", description: "Privacy Act 2020 transparency, NZ$9/mo" },
        { name: "UAE (AED)", href: "/en-ae", description: "Dubai/Abu Dhabi attendance, Mon–Fri / Sun–Thu shifts" },
        { name: "Saudi Arabia (SAR)", href: "/en-sa", description: "Saudi PDPL readiness, SAR pricing, Sunday–Thursday" },
      ],
    },
  ],
  bottomLinks: [
    { label: "HRMS add-on (Sqalible) →", href: "/hrms-add-on" },
    { label: "White-label for resellers →", href: "/partners/white-label" },
  ],
};

export const RESOURCES_MENU = {
  columns: [
    {
      title: "Learn",
      items: [
        { name: "Blog", href: "/blog", description: "Ideas on productivity, remote work, attendance and law" },
        { name: "Monitoring-law guides", href: "/guides/employee-monitoring-laws", description: "Country-by-country legal guides (India, AU, NZ, UAE, SA)" },
        { name: "Glossary", href: "/glossary", description: "Workforce terminology from billable utilisation to idle time" },
        { name: "Customer stories", href: "/customers", description: "Real workflows and numbers from early pilot teams" },
      ],
    },
    {
      title: "Free tools & templates",
      items: [
        { name: "Utilisation calculator", href: "/tools/utilisation-calculator", description: "Calculate billable utilisation in seconds" },
        { name: "Overtime calculator", href: "/tools/overtime-calculator", description: "Work out overtime pay with country presets" },
        { name: "Timesheet template", href: "/templates/timesheet-template", description: "Free weekly timesheet for Excel and Google Sheets" },
        { name: "Monitoring policy template", href: "/templates/employee-monitoring-policy", description: "A fair employee monitoring policy you can adapt" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Help centre ↗", href: "https://help.pulsetrack.io", external: true },
    { label: "Developers (REST API & MCP) →", href: "/developers" },
  ],
};

export const COMPARE_MENU = {
  columns: [
    {
      title: "Competitor comparisons",
      items: [
        { name: "vs DeskTime", href: "/compare/desktime-alternative", description: "Built around your PM tasks and HRMS, free plan" },
        { name: "vs Hubstaff", href: "/compare/hubstaff-alternative", description: "Privacy-first tracking for desk teams without GPS creep" },
        { name: "vs Time Doctor", href: "/compare/time-doctor-alternative", description: "Accountability without the surveillance overload" },
        { name: "vs ActivTrak", href: "/compare/activtrak-alternative", description: "Workforce insights without enterprise complexity" },
        { name: "vs Toggl Track", href: "/compare/toggl-alternative", description: "Automatic background tracking without forgotten timers" },
        { name: "vs Time Champ", href: "/compare/time-champ-alternative", description: "Starts from Jira/Azure tickets with Sqalible HRMS" },
      ],
    },
  ],
  bottomLinks: [
    { label: "Compare all time trackers →", href: "/compare" },
  ],
};

export const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/features" },
      { label: "Tracker Plus", href: "/features/tracker-plus" },
      { label: "Attendance", href: "/features/attendance-tracking" },
      { label: "Pricing", href: "/pricing" },
      { label: "Download", href: "/download" },
      { label: "Security", href: "/security" },
      { label: "Privacy promise", href: "/privacy-promise" },
      { label: "Changelog", href: "/changelog" },
      { label: "Status", href: "https://status.pulsetrack.io", external: true },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "IT services", href: "/solutions/it-services" },
      { label: "Staff augmentation", href: "/solutions/staff-augmentation" },
      { label: "Agencies", href: "/solutions/agencies" },
      { label: "BPO & contact centres", href: "/solutions/bpo" },
      { label: "Consulting & accounting", href: "/solutions/professional-services" },
      { label: "Remote teams", href: "/solutions/remote-teams" },
      { label: "Hybrid teams", href: "/solutions/hybrid-teams" },
      { label: "HRMS add-on", href: "/hrms-add-on" },
      { label: "White-label for resellers", href: "/partners/white-label" },
    ],
  },
  {
    title: "Regions",
    links: [
      { label: "India", href: "/en-in" },
      { label: "Australia", href: "/en-au" },
      { label: "New Zealand", href: "/en-nz" },
      { label: "UAE", href: "/en-ae" },
      { label: "Saudi Arabia", href: "/en-sa" },
    ],
  },
  {
    title: "Compare",
    links: [
      { label: "DeskTime alternative", href: "/compare/desktime-alternative" },
      { label: "Hubstaff alternative", href: "/compare/hubstaff-alternative" },
      { label: "Time Doctor alternative", href: "/compare/time-doctor-alternative" },
      { label: "ActivTrak alternative", href: "/compare/activtrak-alternative" },
      { label: "Toggl alternative", href: "/compare/toggl-alternative" },
      { label: "Time Champ alternative", href: "/compare/time-champ-alternative" },
      { label: "All comparisons", href: "/compare" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Monitoring-law guides", href: "/guides/employee-monitoring-laws" },
      { label: "Free tools", href: "/tools" },
      { label: "Utilisation calculator", href: "/tools/utilisation-calculator" },
      { label: "Overtime calculator", href: "/tools/overtime-calculator" },
      { label: "Templates hub", href: "/templates" },
      { label: "Developers & REST API", href: "/developers" },
      { label: "MCP server", href: "/developers/mcp-server" },
      { label: "Help centre", href: "https://help.pulsetrack.io", external: true },
      { label: "Glossary", href: "/glossary" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Press & media kit", href: "/press" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/demo" },
      { label: "Start free trial", href: "/signup" },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Data Processing Agreement (DPA)", href: "/legal/dpa" },
  { label: "Sub-processors", href: "/legal/subprocessors" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Service Level Agreement (SLA)", href: "/legal/sla" },
];
