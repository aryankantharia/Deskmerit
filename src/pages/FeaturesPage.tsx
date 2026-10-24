import React from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import {
  Timer,
  Activity,
  FileText,
  Radio,
  Layers,
  Receipt,
  FileSpreadsheet,
  CalendarCheck,
  CalendarDays,
  Calendar,
  Coffee,
  Camera,
  Hourglass,
  Boxes,
  Cpu,
  KeyRound,
  ArrowRight,
  Check,
  Minus,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export function FeaturesPage() {
  const groups = [
    {
      num: "01",
      question: "Where does the time go?",
      items: [
        {
          title: "Automatic time tracking",
          href: "/features/automatic-time-tracking",
          desc: "Records working time on apps, websites and tasks with no timers to remember.",
          icon: Timer,
        },
        {
          title: "Productivity tracking",
          href: "/features/productivity-tracking",
          desc: "Productive, neutral and unproductive time with rules customized per role.",
          icon: Activity,
        },
        {
          title: "Document tracking",
          href: "/features/document-tracking",
          desc: "Time per file and document — window titles only, never file contents.",
          icon: FileText,
        },
        {
          title: "Live status",
          href: "/features/live-status",
          desc: "Tracking, Idle, Private or Offline, refreshed live every 60 seconds.",
          icon: Radio,
        },
      ],
    },
    {
      num: "02",
      question: "What did we work on — and what can we bill?",
      items: [
        {
          title: "Tracker Plus",
          href: "/features/tracker-plus",
          desc: "Start tracking straight from a Jira, Azure DevOps or OpenProject task.",
          icon: Layers,
          badge: "Flagship",
        },
        {
          title: "Project time & billing",
          href: "/features/project-time-tracking",
          desc: "Rates per person and project; cost totals and budget-versus-actual alerts.",
          icon: Receipt,
        },
        {
          title: "Timesheets & reports",
          href: "/features/timesheets-and-reports",
          desc: "Filter anything; export to clean CSV or Excel that matches your screen.",
          icon: FileSpreadsheet,
        },
      ],
    },
    {
      num: "03",
      question: "Who was here, and when?",
      items: [
        {
          title: "Attendance tracking",
          href: "/features/attendance-tracking",
          desc: "Presence computed from real work, calendar meetings and logged offline time.",
          icon: CalendarCheck,
        },
        {
          title: "Shift scheduling",
          href: "/features/shift-scheduling",
          desc: "Templates with late-arrival and overtime flags against defined tolerances.",
          icon: CalendarDays,
        },
        {
          title: "Leave management",
          href: "/features/leave-management",
          desc: "Requests, manager approvals and a shared team holiday calendar.",
          icon: Calendar,
        },
      ],
    },
    {
      num: "04",
      question: "How do we keep it fair?",
      items: [
        {
          title: "Idle & Private Time",
          href: "/features/idle-and-private-time",
          desc: "Idle after 5 minutes; Private Time is a visible pause, never mislabelled as idle.",
          icon: Coffee,
        },
        {
          title: "Optional screenshots",
          href: "/features/screenshots",
          desc: "Off by default, blurred by default, and employees are clearly told when on.",
          icon: Camera,
        },
        {
          title: "Focus timer",
          href: "/features/focus-timer",
          desc: "Pomodoro-style work and break intervals running alongside continuous tracking.",
          icon: Hourglass,
        },
      ],
    },
    {
      num: "05",
      question: "How does it fit our stack?",
      items: [
        {
          title: "Integrations",
          href: "/integrations",
          desc: "PM tools, Google/Outlook calendars, Slack, MS Teams, Zapier, and Make.",
          icon: Boxes,
        },
        {
          title: "REST API & MCP server",
          href: "/developers",
          desc: "Scoped self-serve keys; let AI assistants query your team's time data.",
          icon: Cpu,
        },
        {
          title: "SSO & SCIM",
          href: "/security",
          desc: "SAML/OIDC, auto-provisioning, and custom roles on Enterprise plans.",
          icon: KeyRound,
        },
      ],
    },
  ];

  const planComparison = [
    { feature: "Automatic tracking, productivity & attendance", starter: true, pro: true, premium: true, enterprise: true },
    { feature: "Tracker Plus (Jira, Azure DevOps, OpenProject)", starter: false, pro: true, premium: true, enterprise: true },
    { feature: "Calendar integration (Google & Outlook)", starter: false, pro: true, premium: true, enterprise: true },
    { feature: "Optional screenshots, shift scheduling & leave", starter: false, pro: true, premium: true, enterprise: true },
    { feature: "REST API & MCP server for AI queries", starter: false, pro: true, premium: true, enterprise: true },
    { feature: "White-label reports & reseller portal", starter: false, pro: false, premium: true, enterprise: true },
    { feature: "SAML SSO, SCIM, Data residency & custom SLA", starter: false, pro: false, premium: false, enterprise: true },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* ========================================================================= */}
        {/* 1. DARK HERO SECTION (Exact Reference Image 2 Layout)                     */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-20 lg:pt-12 lg:pb-28 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#20C997]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb matching Reference */}
            <div className="text-xs text-[#20C997] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Product</span>
              <span className="text-slate-500">/</span>
              <span>All Features</span>
            </div>

            <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headline, Overline, Description & CTAs */}
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#20C997] bg-[#20C997]/10 px-3 py-1 rounded-full inline-block border border-[#20C997]/20">
                  COMPLETE FEATURE CATALOGUE
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  Every feature you need to understand work time.
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  Deskmerit brings automatic computer time tracking, Jira task binding, attendance and client billing into one lightweight desktop engine. Grouped by the questions they answer.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#20C997] hover:bg-[#12B886] text-[#0A1628] font-extrabold text-sm shadow-[0_4px_16px_rgba(32,201,151,0.3)] hover:shadow-[0_6px_22px_rgba(32,201,151,0.4)] transition-all"
                  >
                    <span>Start free trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-white font-bold text-sm border border-slate-600 transition-all"
                  >
                    <span>Book a demo</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Browser Window Mockup with macOS Controls (Image 2 Match) */}
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                      <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                      <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                      app.deskmerit.com/features-cockpit
                    </div>
                    <div className="text-[11px] font-bold text-[#20C997]">● Active Engine</div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center">
                          <Layers className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Tracker Plus Active</div>
                          <div className="text-[10px] text-slate-400">Jira KMB-482 · API Refactor</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#20C997]">1h 42m</span>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CATEGORIZED FEATURE GROUPS (White background)                          */}
        {/* ========================================================================= */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
          {groups.map((grp) => (
            <div key={grp.num} className="bg-slate-50/70 rounded-[28px] p-8 sm:p-12 border border-slate-200 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-slate-200 gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-extrabold text-[#0A1628] bg-white border border-slate-300 px-3 py-1 rounded-lg font-mono">
                    {grp.num}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730]">
                    {grp.question}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {grp.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="group p-6 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-[#20C997] transition-all hover:shadow-md flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#0F1730] group-hover:bg-[#E8FBF5] group-hover:text-[#20C997] flex items-center justify-center transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFE6DF] text-[#C2361A]">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#20C997] transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#4A5370] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#0F1730] group-hover:text-[#20C997]">
                        <span>Explore details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Plan Comparison Table */}
          <div className="bg-white rounded-[28px] p-8 sm:p-12 border border-slate-200 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730] mb-2">
              Feature Availability by Plan
            </h2>
            <p className="text-sm text-[#4A5370] mb-8">
              Pick the tier that fits your pod size. Every plan includes our non-negotiable employee privacy guarantee.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-[#4A5370]">
                    <th className="py-3 pr-4 font-semibold">Capability</th>
                    <th className="py-3 px-3 font-bold text-[#0F1730] text-center">Starter</th>
                    <th className="py-3 px-3 font-bold text-[#FF5A36] text-center">Pro</th>
                    <th className="py-3 px-3 font-bold text-[#0F1730] text-center">Premium</th>
                    <th className="py-3 px-3 font-bold text-[#0F1730] text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#0F1730]">
                  {planComparison.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 pr-4 font-medium">{row.feature}</td>
                      <td className="py-3.5 px-3 text-center">
                        {row.starter ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />}
                      </td>
                      <td className="py-3.5 px-3 text-center bg-orange-50/40">
                        {row.pro ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.premium ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.enterprise ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-slate-300 mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. SPLIT FAQ SECTION (Matching Reference Image 2)                         */}
        {/* ========================================================================= */}
        <DeskmeritFaq
          title="Product Capabilities Frequently Asked Questions"
          category="COMMON QUESTIONS"
          helpTitle="Need Help Navigating Features?"
          helpDescription="Our product specialists can walk you through the entire suite and recommend the right setup for your organization."
        />

        {/* ========================================================================= */}
        {/* 4. BOTTOM PRE-FOOTER CTA BANNER (Matching Reference Image 2)              */}
        {/* ========================================================================= */}
        <section className="py-12 bg-white font-sans">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#0C5A4D] via-[#0E6C5C] to-[#0A4B40] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#A3F3D8]">
                  GET STARTED IN 2 MINUTES
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-[-0.025em]">
                  Ready to transform workforce operations with Deskmerit?
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  to="/signup"
                  className="px-6 py-3.5 rounded-xl bg-white text-[#0A4B40] hover:bg-slate-100 font-extrabold text-xs sm:text-sm shadow-md transition-all whitespace-nowrap"
                >
                  Start free trial
                </Link>
                <Link
                  to="/demo"
                  className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/10 text-white font-bold text-xs sm:text-sm border border-white/50 transition-all whitespace-nowrap"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskmeritFooter />
    </div>
  );
}
