import React from "react";
import { Link } from "react-router-dom";
import { PulseTrackHeader } from "../components/PulseTrackHeader";
import { PulseTrackFooter } from "../components/PulseTrackFooter";
import { PulseTrackCtaBand } from "../components/PulseTrackCtaBand";
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
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <PulseTrackHeader />

      <main>
        {/* Hero Header */}
        <div className="py-16 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] mb-6 shadow-sm">
            <span className="pulse-dot" />
            <span>Product capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
            Every feature you need to understand work time.{" "}
            <span className="text-[#4A5370] block font-normal">None you'll be embarrassed by.</span>
          </h1>
          <p className="text-lg text-[#4A5370] max-w-2xl mx-auto mb-8 font-normal">
            PulseTrack brings employee time tracking, productivity insights, attendance and project billing into one lightweight desktop agent and one dashboard. Here is everything it does, grouped by the question it answers.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center text-xs font-bold text-[#0F1730] bg-[#FF5A36] hover:bg-[#E94A27] px-6 py-3 rounded-[12px] shadow-sm transition-all"
            >
              Start free 14-day trial →
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center text-xs font-semibold text-[#0F1730] bg-[#FFFFFF] hover:bg-[#E6E2D8]/50 border border-[#0F1730] px-6 py-3 rounded-[12px] transition-all"
            >
              Book a demo
            </Link>
          </div>
        </div>

        {/* 5 Categorized Questions Sections */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-16">
          {groups.map((grp) => (
            <div key={grp.num} className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-[#E6E2D8] gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-extrabold text-[#C2361A] bg-[#FFE6DF] px-3 py-1 rounded-lg font-mono">
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
                      className="group p-6 rounded-2xl bg-[#F7F4EE] hover:bg-[#FFFFFF] border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] text-[#0F1730] group-hover:bg-[#FFE6DF] group-hover:text-[#C2361A] flex items-center justify-center transition-colors border border-[#E6E2D8]">
                            <Icon className="w-5 h-5" />
                          </div>
                          {item.badge && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFE6DF] text-[#C2361A]">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs text-[#4A5370] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-[#E6E2D8]/60 flex items-center justify-between text-xs font-semibold text-[#0F1730] group-hover:text-[#FF5A36]">
                        <span>Explore details</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Plan Comparison Strip */}
          <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-[#E6E2D8] gap-4">
              <div>
                <h3 className="text-2xl font-extrabold text-[#0F1730]">
                  What's included on every plan
                </h3>
                <p className="text-xs text-[#4A5370] mt-1">
                  Simple transparent tiers tailored to your team size.
                </p>
              </div>
              <Link
                to="/pricing"
                className="text-xs font-bold text-[#FF5A36] hover:underline flex items-center gap-1 shrink-0"
              >
                Compare plans on Pricing <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E6E2D8] text-[#4A5370]">
                    <th className="py-3 pr-4 font-semibold">Capability</th>
                    <th className="py-3 px-3 font-bold text-[#0F1730] text-center">Starter</th>
                    <th className="py-3 px-3 font-bold text-[#C2361A] text-center">Pro</th>
                    <th className="py-3 px-3 font-bold text-[#0F1730] text-center">Premium</th>
                    <th className="py-3 px-3 font-bold text-[#0F1730] text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E2D8]/60 text-[#0F1730]">
                  {planComparison.map((row, i) => (
                    <tr key={i} className="hover:bg-[#F7F4EE]/60 transition-colors">
                      <td className="py-3.5 pr-4 font-medium">{row.feature}</td>
                      <td className="py-3.5 px-3 text-center">
                        {row.starter ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />}
                      </td>
                      <td className="py-3.5 px-3 text-center bg-[#FFE6DF]/30">
                        {row.pro ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.premium ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />}
                      </td>
                      <td className="py-3.5 px-3 text-center">
                        {row.enterprise ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8] text-xs text-[#4A5370] flex items-center justify-between flex-wrap gap-3">
              <span>
                🔒 We never record keystroke content, webcam or audio. Employees see their own data first.
              </span>
              <Link to="/privacy-promise" className="font-bold text-[#C2361A] hover:underline">
                Read our privacy promise →
              </Link>
            </div>
          </div>
        </div>

        <PulseTrackCtaBand />
      </main>

      <PulseTrackFooter />
    </div>
  );
}
