import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Timer,
  Layers,
  CalendarCheck,
  Receipt,
  Coffee,
  Sparkles,
  LucideIcon,
} from "lucide-react";

interface LifecycleStage {
  id: string;
  name: string;
  badge: string;
  title: string;
  desc: string;
  metric: string;
  link: string;
  bullets: string[];
  icon: LucideIcon;
}

const stages: LifecycleStage[] = [
  {
    id: "track",
    name: "1. Track",
    badge: "Continuous Work Recording",
    title: "Automatic Background Time Recording",
    desc: "Records working time on apps, websites and document titles the moment you start your workday. No timers to remember, no forgotten hours.",
    metric: "100% Timesheet Accuracy",
    link: "/features/automatic-time-tracking",
    bullets: [
      "Lightweight Rust agent (<25MB RAM, no CPU lag)",
      "Smart default categorization (Productive, Neutral, Unproductive)",
      "Works 100% offline with zero data loss",
    ],
    icon: Timer,
  },
  {
    id: "connect",
    name: "2. Connect",
    badge: "Tracker Plus (Flagship)",
    title: "Start Tracking from Jira & Azure DevOps Tasks",
    desc: "Your people choose the task they’re working on straight from your PM tool inside the desktop agent. One click logs time, fills attendance and updates billing.",
    metric: "357h Disconnect Gap Closed",
    link: "/features/tracker-plus",
    bullets: [
      "Live task list from Jira, Azure DevOps & OpenProject",
      "Each employee connects their own personal access token",
      "Two projects called 'Website'? Never merged or confused",
    ],
    icon: Layers,
  },
  {
    id: "verify",
    name: "3. Verify",
    badge: "No Biometric Punch Clock",
    title: "Attendance That Reflects Real Knowledge Work",
    desc: "Computes daily attendance from tracked computer work, Google/Outlook calendar meetings, and logged offline time so workshop days are never marked absent.",
    metric: "Every Employee's Own Timezone",
    link: "/features/attendance-tracking",
    bullets: [
      "Days close at each person's local midnight",
      "Overnight shifts judged fairly across midnight boundaries",
      "Full HR correction audit trails logged with reasons",
    ],
    icon: CalendarCheck,
  },
  {
    id: "bill",
    name: "4. Bill",
    badge: "Defensible Client Invoicing",
    title: "Project Profitability & Budget Variance Alerts",
    desc: "Converts tracked hours into cost, billable value and budget alerts automatically. See weekly billable vs non-billable trends per team, engineer and account.",
    metric: "35% Non-Billable Leakage Reclaimed",
    link: "/features/project-time-tracking",
    bullets: [
      "Billable rates per employee varying by project",
      "Automatic budget alerts before invoices surprise clients",
      "Sub-30s Excel and CSV exports matching the screen",
    ],
    icon: Receipt,
  },
  {
    id: "trust",
    name: "5. Trust",
    badge: "Dignity & Privacy",
    title: "Employee-First Data & Private Time Protection",
    desc: "Monitoring fails when people feel watched. Deskmerit gives employees a self-view of their day and a one-click Private Time pause that is never mislabelled as idle.",
    metric: "Zero Keystroke Keylogging",
    link: "/privacy-promise",
    bullets: [
      "No keystrokes, no webcam, no audio recording under any plan",
      "Screenshots off by default and announced when enabled",
      "Compliance-ready for India DPDP Act and Australia NSW laws",
    ],
    icon: Coffee,
  },
];

export function LifecycleStepper() {
  const [activeStageId, setActiveStageId] = useState<string>("track");
  const activeStage = stages.find((s) => s.id === activeStageId) || stages[0];

  return (
    <section className="py-20 bg-[#F7F4EE] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
              Work-time lifecycle
            </p>
            <h2 className="mt-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
              One click that does three jobs.
            </h2>
            <p className="mt-2 text-sm text-[#4A5370] max-w-xl">
              From task selection in Jira to client invoices and payroll attendance, experience the end-to-end trust-first pipeline.
            </p>
          </div>
          <Link
            to="/features"
            className="inline-flex items-center gap-1 text-xs font-bold text-[#C2361A] hover:text-[#FF5A36] transition-colors shrink-0"
          >
            Explore all capabilities <ArrowRight size={14} />
          </Link>
        </div>

        {/* 5-Step Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-[#FFFFFF] rounded-2xl border border-[#E6E2D8] shadow-subtle mb-8">
          {stages.map((s) => {
            const Icon = s.icon;
            const isSelected = s.id === activeStageId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveStageId(s.id)}
                className={`flex items-center gap-2 p-3 rounded-xl text-left transition-all ${
                  isSelected
                    ? "bg-[#0F1730] text-white shadow-sm"
                    : "text-[#4A5370] hover:text-[#0F1730] hover:bg-[#F7F4EE]"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-[#FF5A36]" : "text-[#4A5370]"}`} />
                <span className="text-xs font-bold truncate">{s.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Panel */}
        <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE6DF] text-[#C2361A] text-xs font-bold">
              <span className="pulse-dot" />
              <span>{activeStage.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730]">
              {activeStage.title}
            </h3>

            <p className="text-sm text-[#4A5370] leading-relaxed">
              {activeStage.desc}
            </p>

            <ul className="space-y-2.5 pt-2">
              {activeStage.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0F1730]">
                  <CheckCircle2 className="w-4 h-4 text-[#12B886] shrink-0 mt-0.5" />
                  <span className="leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex items-center gap-4">
              <Link
                to={activeStage.link}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A36] hover:text-[#E94A27] transition-colors"
              >
                Learn more about {activeStage.name.split(". ")[1]} <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Metric & Callout Card */}
          <div className="lg:col-span-5 bg-[#F7F4EE] rounded-2xl p-6 sm:p-8 border border-[#E6E2D8] text-center space-y-4">
            <div className="text-xs font-semibold text-[#4A5370] uppercase tracking-wider">
              Measurable Impact
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#C2361A] font-display">
              {activeStage.metric}
            </div>
            <p className="text-xs text-[#4A5370] leading-relaxed">
              Standardized across all {activeStage.name.split(". ")[1].toLowerCase()} workflows in Deskmerit desktop and cloud sync.
            </p>
            <div className="pt-2">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-[#0F1730] text-white text-xs font-bold hover:bg-[#24305A] transition-colors"
              >
                Test with your team →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
