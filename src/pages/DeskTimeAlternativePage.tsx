import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { Check, Minus, ArrowRight, ShieldCheck, RefreshCw, Smartphone, Layers, CheckCircle2, X } from "lucide-react";

interface CompetitorConfig {
  slug: string;
  name: string;
  heroBadge: string;
  heroTitle: string;
  heroAccent: string;
  heroDesc: string;
  rows: { feature: string; pulse: string; comp: string; highlight?: boolean; honestComp?: boolean }[];
  betterWhenDesc: string;
  switchTitle: string;
  switchDesc: string;
}

const COMPETITORS: Record<string, CompetitorConfig> = {
  desktime: {
    slug: "desktime-alternative",
    name: "DeskTime",
    heroBadge: "COMPARE · DESKTIME ALTERNATIVE",
    heroTitle: "The DeskTime alternative built around your tasks —",
    heroAccent: "and your HRMS.",
    heroDesc:
      "DeskTime is a solid automatic tracker. Deskmerit matches its core features and adds Tracker Plus, attendance that counts meetings, a free Starter plan, and a deeper API with an MCP server.",
    rows: [
      { feature: "Automatic time tracking", pulse: "✓", comp: "✓" },
      { feature: "App, URL & document tracking", pulse: "✓", comp: "✓" },
      { feature: "Productivity scoring", pulse: "✓", comp: "✓" },
      { feature: "Private Time pause", pulse: "✓", comp: "✓" },
      { feature: "Screenshots — default state", pulse: "Off & blurred by default", comp: "Optional (Premium)", highlight: true },
      { feature: "Start tracking from a PM task", pulse: "✓ Jira, Azure DevOps & OpenProject at once (Pro)", comp: "✓ Jira and others (Premium)", highlight: true },
      { feature: "Each employee connects their own PM token", pulse: "✓", comp: "—", highlight: true },
      { feature: "The same click feeds attendance & HRMS", pulse: "✓", comp: "—", highlight: true },
      { feature: "Calendar integration (Google, Outlook)", pulse: "✓ Counts toward attendance", comp: "✓ (Pro)" },
      { feature: "Shift scheduling & leave calendar", pulse: "✓ Included on Pro", comp: "✓ (Premium only)" },
      { feature: "Free plan", pulse: "✓ Up to 5 users", comp: "— (Paid only)", highlight: true },
      { feature: "Public API & MCP server", pulse: "✓ Pro & up (with Claude MCP)", comp: "API on Premium; custom on Enterprise" },
      { feature: "White-label / reseller mode", pulse: "✓ Premium", comp: "—" },
      { feature: "Linux agent", pulse: "✓ Supported", comp: "✓ Supported" },
      { feature: "Mobile phone tracking app", pulse: "— (Desk work only)", comp: "✓ (iOS & Android)", honestComp: true },
      { feature: "Price (annual, per user / month)", pulse: "Free · $5 · $8 · Custom", comp: "$6.42 · $9.17 · Custom", highlight: true },
    ],
    betterWhenDesc:
      "If you need a mobile phone tracking app for field workers or delivery drivers, DeskTime offers one and Deskmerit does not. Deskmerit focuses 100% on computer work and desktop knowledge workers.",
    switchTitle: "Switching from DeskTime?",
    switchDesc:
      "We’ll help you map projects, rates and productivity rules, and run both tools side by side for a week during your transition.",
  },
  hubstaff: {
    slug: "hubstaff-alternative",
    name: "Hubstaff",
    heroBadge: "COMPARE · HUBSTAFF ALTERNATIVE",
    heroTitle: "The privacy-first Hubstaff alternative for desk teams —",
    heroAccent: "without invasive spyware.",
    heroDesc:
      "Hubstaff is widely known for aggressive mouse-click monitoring and GPS tracking. Deskmerit delivers honest proof of work that engineering and agency teams respect, without humiliating micromanagement.",
    rows: [
      { feature: "Automatic background tracking", pulse: "✓ Seamless Rust agent", comp: "✓ Desktop timer" },
      { feature: "Project & task time attribution", pulse: "✓ Direct PM integration", comp: "✓ Manual timer selection" },
      { feature: "Privacy-first philosophy", pulse: "✓ No keystroke capture", comp: "— Invasive activity %", highlight: true },
      { feature: "Screenshots policy", pulse: "Off & blurred by default", comp: "Frequent periodic screen capture", highlight: true },
      { feature: "Start timer from Jira & Azure DevOps", pulse: "✓ Tracker Plus", comp: "Add-on required", highlight: true },
      { feature: "Direct HRMS sync (Sqalible)", pulse: "✓ One-click payroll feed", comp: "— External export only", highlight: true },
      { feature: "Meeting calendar sync", pulse: "✓ Google & Outlook", comp: "Limited integration" },
      { feature: "Free starter tier", pulse: "✓ Up to 5 users", comp: "Limited 1-user free plan", highlight: true },
      { feature: "Developer REST API & MCP Server", pulse: "✓ Native Model Context Protocol", comp: "Standard REST only" },
      { feature: "GPS field tracking for drivers", pulse: "— (Desk work only)", comp: "✓ Mobile GPS geofencing", honestComp: true },
      { feature: "Price (annual, per seat)", pulse: "$5 · $8 / mo", comp: "$4.99 · $8.33 · $12.50 / mo", highlight: true },
    ],
    betterWhenDesc:
      "If you manage a mobile field workforce, delivery vans, or landscaping crews needing GPS route geofencing, Hubstaff has dedicated mobile apps built for that. Deskmerit is built exclusively for computer-based knowledge workers.",
    switchTitle: "Switching from Hubstaff?",
    switchDesc:
      "Restore trust with your developers and designers. Migrate project assignments and hourly budgets with our dedicated onboarding concierge.",
  },
  "time-doctor": {
    slug: "time-doctor-alternative",
    name: "Time Doctor",
    heroBadge: "COMPARE · TIME DOCTOR ALTERNATIVE",
    heroTitle: "The Time Doctor alternative that builds trust —",
    heroAccent: "not employee resentment.",
    heroDesc:
      "Replace constant video captures, keyboard logging paranoia and popup alarms with transparent output metrics, automatic document tracking and seamless project management workflows.",
    rows: [
      { feature: "Automated desktop time tracking", pulse: "✓ Quiet & non-intrusive", comp: "✓ Popup prompt based" },
      { feature: "Distraction & pop-up alarms", pulse: "— No annoying alarm popups", comp: "Frequent idle nagging", highlight: true },
      { feature: "Video / Screen recording", pulse: "Blurred screenshots only", comp: "Continuous screen video capture", highlight: true },
      { feature: "Employee Private Time guarantee", pulse: "✓ 100% unmonitored breaks", comp: "Limited pause mode", highlight: true },
      { feature: "Integrated project management tokens", pulse: "✓ Jira, Azure DevOps, OpenProject", comp: "Basic webhook sync" },
      { feature: "Automated attendance & leave", pulse: "✓ Built-in roster & leaves", comp: "Limited shift tools" },
      { feature: "Free plan for small teams", pulse: "✓ Up to 5 users", comp: "— Paid only (no free plan)", highlight: true },
      { feature: "Claude & ChatGPT MCP Server", pulse: "✓ Included", comp: "—", highlight: true },
      { feature: "Agent memory & CPU usage", pulse: "< 25MB RAM (Rust)", comp: "Heavy multi-process client" },
      { feature: "Enterprise webcam surveillance", pulse: "— Never supported", comp: "✓ Optional webcam check", honestComp: true },
      { feature: "Price (annual, per user)", pulse: "$5 · $8 / mo", comp: "$5.90 · $8.40 · $14.00 / mo", highlight: true },
    ],
    betterWhenDesc:
      "If your management policy mandates recording live webcam shots or continuous video feeds of employee screens, Time Doctor caters to that level of surveillance. Deskmerit purposefully rejects invasive spying in favor of outcome-based trust.",
    switchTitle: "Tired of Time Doctor complaints?",
    switchDesc:
      "Upgrade your team's culture. We provide painless project mapping and guide your management team on healthy, privacy-respecting metrics.",
  },
  activtrak: {
    slug: "activtrak-alternative",
    name: "ActivTrak",
    heroBadge: "COMPARE · ACTIVTRAK ALTERNATIVE",
    heroTitle: "Workforce analytics without enterprise lock-in —",
    heroAccent: "the agile ActivTrak alternative.",
    heroDesc:
      "Get deep application scoring, document title tracking and billable hours analytics without convoluted enterprise pricing, rigid annual contracts, or multi-week deployment hurdles.",
    rows: [
      { feature: "Automatic activity tracking", pulse: "✓", comp: "✓" },
      { feature: "Productivity categorization", pulse: "✓ Role-based categories", comp: "✓ Deep categorization" },
      { feature: "Project time & ticket tracking", pulse: "✓ Built into tracker", comp: "— Requires separate tooling", highlight: true },
      { feature: "Start tracking from Jira & DevOps", pulse: "✓ Native Tracker Plus", comp: "— Not available", highlight: true },
      { feature: "Attendance & leave management", pulse: "✓ Built-in", comp: "— External HRMS needed", highlight: true },
      { feature: "Free tier availability", pulse: "✓ 5 users free", comp: "Limited 3 users free", highlight: true },
      { feature: "Integrated HRMS add-on (Sqalible)", pulse: "✓ Direct payroll feed", comp: "—", highlight: true },
      { feature: "MCP Server for AI assistant queries", pulse: "✓ Pro & Premium", comp: "—", highlight: true },
      { feature: "Complex DLP / USB storage blocking", pulse: "— Focused on time tracking", comp: "✓ DLP security features", honestComp: true },
      { feature: "Pricing transparency", pulse: "$5 · $8 / user (no minimum)", comp: "$10 · $17 / user (minimums)", highlight: true },
    ],
    betterWhenDesc:
      "If your organization requires comprehensive Data Loss Prevention (DLP), such as blocking USB mass storage devices or inspecting corporate email attachments, ActivTrak is built for IT security compliance. Deskmerit is built for billable time tracking and attendance.",
    switchTitle: "Looking for simple, affordable workforce insights?",
    switchDesc:
      "Cut your per-user software spend in half while empowering engineers with direct Jira and Azure DevOps tracking.",
  },
  toggl: {
    slug: "toggl-alternative",
    name: "Toggl Track",
    heroBadge: "COMPARE · TOGGL TRACK ALTERNATIVE",
    heroTitle: "The automatic Toggl Track alternative —",
    heroAccent: "never lose billable minutes to forgotten timers.",
    heroDesc:
      "Love Toggl's clean interface but tired of contractors forgetting to click 'Start Timer' in the morning? Deskmerit combines effortless automatic tracking with precise task attribution.",
    rows: [
      { feature: "Manual timer start / stop", pulse: "✓ Optional", comp: "✓ Core workflow" },
      { feature: "Automatic background tracking", pulse: "✓ Starts on computer boot", comp: "Limited timeline only", highlight: true },
      { feature: "App, URL & document title scoring", pulse: "✓ Categorized productivity", comp: "— Manual entry only", highlight: true },
      { feature: "Starts directly from PM tickets", pulse: "✓ Tracker Plus", comp: "Browser extension required" },
      { feature: "Attendance & shift rosters", pulse: "✓ Built-in clock in/out", comp: "— Time tracking only", highlight: true },
      { feature: "Meeting calendar integration", pulse: "✓ Auto-counts attendance", comp: "✓ Google/Outlook sync" },
      { feature: "Integrated HRMS payroll sync", pulse: "✓ Sqalible native sync", comp: "— Export only", highlight: true },
      { feature: "Generous free plan", pulse: "✓ 5 users included", comp: "✓ 5 users free" },
      { feature: "Native AI MCP server", pulse: "✓ Query via Claude/GPT", comp: "— Webhooks/REST only", highlight: true },
      { feature: "Mobile phone tracking app", pulse: "— (Desk work only)", comp: "✓ iOS & Android mobile timer", honestComp: true },
      { feature: "Paid plan price (annual)", pulse: "$5 · $8 / user", comp: "$9 · $18 / user", highlight: true },
    ],
    betterWhenDesc:
      "If your team members do substantial work away from their laptops and log time primarily on smartphones or smartwatches, Toggl Track's polished mobile apps are fantastic. Deskmerit focuses exclusively on desktop computing work.",
    switchTitle: "Ready to automate your Toggl timesheets?",
    switchDesc:
      "Import your existing client and project lists. Your staff will love never having to reconstruct their Friday timesheet from memory.",
  },
  "time-champ": {
    slug: "time-champ-alternative",
    name: "Time Champ",
    heroBadge: "COMPARE · TIME CHAMP ALTERNATIVE",
    heroTitle: "The modern Time Champ alternative —",
    heroAccent: "lighter, faster, and built into your HRMS.",
    heroDesc:
      "Looking for a snappier, more reliable alternative to Time Champ? Deskmerit delivers a high-performance native desktop client, instant Jira/Azure DevOps ticket start, and complete DPDP Act readiness.",
    rows: [
      { feature: "Desktop agent footprint", pulse: "< 25MB RAM (Rust native)", comp: "> 200MB RAM (Electron)", highlight: true },
      { feature: "Automatic time & productivity", pulse: "✓", comp: "✓" },
      { feature: "Start time straight from PM tickets", pulse: "✓ Jira, Azure DevOps, OpenProject", comp: "Limited integration", highlight: true },
      { feature: "Integrated Indian & GCC payroll (Sqalible)", pulse: "✓ Native 1-click sync", comp: "Separate payroll tool", highlight: true },
      { feature: "DPDP Act 2023 compliance", pulse: "✓ Explicit consent & notices", comp: "Basic privacy controls", highlight: true },
      { feature: "Screenshots default status", pulse: "Off & blurred by default", comp: "On by default", highlight: true },
      { feature: "Calendar attendance detection", pulse: "✓ Google & Outlook", comp: "Limited" },
      { feature: "Free tier for small startups", pulse: "✓ Up to 5 users free", comp: "— Paid only", highlight: true },
      { feature: "Claude & ChatGPT MCP Server", pulse: "✓ Pro & Premium", comp: "—", highlight: true },
      { feature: "Biometric hardware hardware integration", pulse: "— Pure software tracking", comp: "✓ Fingerprint devices", honestComp: true },
      { feature: "Price in INR / USD", pulse: "₹299 / $5 per month", comp: "₹349 / $6+ per month", highlight: true },
    ],
    betterWhenDesc:
      "If your organization strictly requires physical hardware integration with fingerprint wall-scanners or facial recognition gate turnstiles, Time Champ offers hardware bridge connectors. Deskmerit replaces biometric hardware with seamless desktop presence.",
    switchTitle: "Migrating from Time Champ?",
    switchDesc:
      "Our team provides white-glove migration of your team rosters, department hierarchies, and custom productivity rule libraries.",
  },
};

export function DeskTimeAlternativePage() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // Determine which competitor is being viewed
  let activeCompKey = "desktime";
  let isHub = false;

  if (path === "/compare" || path === "/compare/") {
    isHub = true;
  } else if (path.includes("hubstaff")) {
    activeCompKey = "hubstaff";
  } else if (path.includes("time-doctor")) {
    activeCompKey = "time-doctor";
  } else if (path.includes("activtrak")) {
    activeCompKey = "activtrak";
  } else if (path.includes("toggl")) {
    activeCompKey = "toggl";
  } else if (path.includes("time-champ")) {
    activeCompKey = "time-champ";
  }

  const comp = COMPETITORS[activeCompKey] || COMPETITORS.desktime;

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">
              Home
            </Link>
            <span>/</span>
            <Link to="/compare" className="hover:text-[#0F1730]">
              Compare
            </Link>
            {!isHub && (
              <>
                <span>/</span>
                <span className="font-semibold text-[#0F1730]">
                  {comp.name} alternative
                </span>
              </>
            )}
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm mb-6">
            <span>
              {isHub
                ? "COMPARE · ALL COMPETITOR PLATFORMS"
                : comp.heroBadge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
            {isHub ? (
              <>
                How Deskmerit compares to{" "}
                <span className="text-[#FF5A36] block font-normal">
                  legacy time tracking software.
                </span>
              </>
            ) : (
              <>
                {comp.heroTitle}{" "}
                <span className="text-[#FF5A36] block font-normal">
                  {comp.heroAccent}
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-[#4A5370] max-w-2xl mx-auto mb-8 font-normal">
            {isHub
              ? "See how Deskmerit's privacy-first architecture, Tracker Plus PM integrations, and built-in HRMS sync stack up against DeskTime, Hubstaff, Time Doctor, ActivTrak, Toggl, and Time Champ."
              : comp.heroDesc}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center text-xs font-bold text-[#0F1730] bg-[#FF5A36] hover:bg-[#E94A27] px-6 py-3.5 rounded-[12px] shadow-sm transition-all"
            >
              Start free 14-day trial →
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center text-xs font-semibold text-[#0F1730] bg-[#FFFFFF] hover:bg-[#E6E2D8]/50 border border-[#0F1730] px-6 py-3.5 rounded-[12px] transition-all"
            >
              Book a demo
            </Link>
          </div>
        </section>

        {/* Competitor Switcher Navigation Pills */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-500 mr-1">
              Select competitor:
            </span>
            <Link
              to="/compare"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                isHub
                  ? "bg-[#0F1730] text-white border-[#0F1730]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
              }`}
            >
              Compare All
            </Link>
            <Link
              to="/compare/desktime-alternative"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                !isHub && activeCompKey === "desktime"
                  ? "bg-[#0F1730] text-white border-[#0F1730]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
              }`}
            >
              vs DeskTime
            </Link>
            <Link
              to="/compare/hubstaff-alternative"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                !isHub && activeCompKey === "hubstaff"
                  ? "bg-[#0F1730] text-white border-[#0F1730]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
              }`}
            >
              vs Hubstaff
            </Link>
            <Link
              to="/compare/time-doctor-alternative"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                !isHub && activeCompKey === "time-doctor"
                  ? "bg-[#0F1730] text-white border-[#0F1730]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
              }`}
            >
              vs Time Doctor
            </Link>
            <Link
              to="/compare/activtrak-alternative"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                !isHub && activeCompKey === "activtrak"
                  ? "bg-[#0F1730] text-white border-[#0F1730]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
              }`}
            >
              vs ActivTrak
            </Link>
            <Link
              to="/compare/toggl-alternative"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                !isHub && activeCompKey === "toggl"
                  ? "bg-[#0F1730] text-white border-[#0F1730]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
              }`}
            >
              vs Toggl Track
            </Link>
            <Link
              to="/compare/time-champ-alternative"
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                !isHub && activeCompKey === "time-champ"
                  ? "bg-[#0F1730] text-white border-[#0F1730]"
                  : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
              }`}
            >
              vs Time Champ
            </Link>
          </div>
        </section>

        {/* If Hub View: Render Grid of all 6 competitor cards */}
        {isHub ? (
          <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(COMPETITORS).map((c) => (
                <div
                  key={c.slug}
                  className="bg-white rounded-2xl p-7 border border-[#E6E2D8] hover:border-[#FF5A36] transition-all shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                      Deskmerit vs {c.name}
                    </div>
                    <h3 className="text-xl font-bold text-[#0F1730] mb-3">
                      {c.name} Alternative
                    </h3>
                    <p className="text-xs text-[#4A5370] leading-relaxed mb-6">
                      {c.heroDesc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E6E2D8]">
                    <Link
                      to={`/compare/${c.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                    >
                      View detailed comparison <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (
          /* Detailed Competitor Side-by-Side Table */
          <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#FFFFFF] rounded-[24px] border border-[#E6E2D8] shadow-card overflow-hidden">
              <div className="p-6 sm:p-8 bg-[#FAF8F5] border-b border-[#E6E2D8] flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-lg text-[#0F1730]">
                    Feature Breakdown
                  </h3>
                  <p className="text-xs text-[#4A5370] mt-0.5">
                    Verified feature-by-feature comparison
                  </p>
                </div>
                <span className="text-[11px] font-medium text-[#4A5370]">
                  Updated October 2026
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-[#E6E2D8] bg-[#FFFFFF]">
                      <th className="py-4 px-6 font-bold text-[#0F1730] w-1/2">
                        Capability
                      </th>
                      <th className="py-4 px-6 font-bold text-[#FF5A36] w-1/4 bg-[#FFE6DF]/30">
                        Deskmerit
                      </th>
                      <th className="py-4 px-6 font-bold text-[#4A5370] w-1/4">
                        {comp.name}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E6E2D8]">
                    {comp.rows.map((row, i) => (
                      <tr
                        key={i}
                        className={
                          row.highlight
                            ? "bg-[#FFF9F7]/50"
                            : i % 2 === 0
                            ? "bg-[#FFFFFF]"
                            : "bg-[#FAF8F5]/30"
                        }
                      >
                        <td className="py-3.5 px-6 font-medium text-[#0F1730]">
                          {row.feature}
                        </td>
                        <td className="py-3.5 px-6 font-semibold text-[#0F1730] bg-[#FFE6DF]/20">
                          {row.pulse}
                        </td>
                        <td
                          className={`py-3.5 px-6 ${
                            row.honestComp
                              ? "font-bold text-[#0F1730]"
                              : "text-[#4A5370]"
                          }`}
                        >
                          {row.comp}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Honesty Section: When Competitor is better & Migration call */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6E2D8] shadow-subtle">
                <div className="flex items-center gap-2 font-bold text-sm text-[#0F1730] mb-2">
                  <Smartphone className="w-4 h-4 text-[#FF5A36]" />
                  <span>When {comp.name} is the better choice</span>
                </div>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  {comp.betterWhenDesc}
                </p>
              </div>

              <div className="bg-[#0F1730] text-white rounded-2xl p-7 border border-[#24305A] shadow-subtle flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 font-bold text-sm text-white mb-2">
                    <RefreshCw className="w-4 h-4 text-[#FF5A36]" />
                    <span>{comp.switchTitle}</span>
                  </div>
                  <p className="text-xs text-[#9AA1B2] leading-relaxed">
                    {comp.switchDesc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#24305A]">
                  <Link
                    to="/demo"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A36] hover:underline"
                  >
                    Book a migration walkthrough call{" "}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        <DeskmeritCtaBand
          title="Try the tracker that starts from the task."
          subtitle="Install in minutes, start from a task, and get your first report this week."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
