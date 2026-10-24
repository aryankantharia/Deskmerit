import React from "react";
import { Link } from "react-router-dom";
import {
  Timer,
  Activity,
  Layers,
  CalendarCheck,
  Receipt,
  CalendarDays,
  Coffee,
  Camera,
  FileSpreadsheet,
  ArrowRight,
} from "lucide-react";

export function PulseTrackFeatureGrid() {
  const features = [
    {
      title: "Automatic time tracking",
      href: "/features/automatic-time-tracking",
      description: "Tracks computer time from the moment the agent starts. No timers to forget.",
      icon: Timer,
      tag: "Zero-effort",
    },
    {
      title: "Productivity tracking",
      href: "/features/productivity-tracking",
      description: "App, URL and document-title tracking with a score per person, team and organisation.",
      icon: Activity,
      tag: "Role-aware",
    },
    {
      title: "Tracker Plus",
      href: "/features/tracker-plus",
      description: "Start tracking from the PM task itself. No second login, no copy-paste.",
      icon: Layers,
      tag: "Flagship ★",
      highlight: true,
    },
    {
      title: "Attendance tracking",
      href: "/features/attendance-tracking",
      description: "Daily presence from tracked work, calendar meetings and logged off-computer time.",
      icon: CalendarCheck,
      tag: "No biometrics",
    },
    {
      title: "Project time & billing",
      href: "/features/project-time-tracking",
      description: "Rates per person and project, cost totals and budget-versus-actual alerts.",
      icon: Receipt,
      tag: "Defensible revenue",
    },
    {
      title: "Shifts & leave",
      href: "/features/shift-scheduling",
      description: "Shift templates, late and overtime flags, leave requests and a team calendar.",
      icon: CalendarDays,
      tag: "Rosters & holiday",
    },
    {
      title: "Idle & Private Time",
      href: "/features/idle-and-private-time",
      description: "Idle after 5 minutes without input. Private Time is a visible pause, never idle.",
      icon: Coffee,
      tag: "Dignity first",
    },
    {
      title: "Optional screenshots",
      href: "/features/screenshots",
      description: "Off by default, blurred by default, and employees are told when they are on.",
      icon: Camera,
      tag: "Privacy by default",
    },
    {
      title: "Reports & exports",
      href: "/features/timesheets-and-reports",
      description: "Filter by person, team, project and date. CSV or Excel totals match the screen.",
      icon: FileSpreadsheet,
      tag: "Sub-30s export",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EE] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
              Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
              Everything you'd expect.{" "}
              <span className="block text-[#4A5370]">Plus one click that does three jobs.</span>
            </h2>
          </div>
          <Link
            to="/features"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors shrink-0"
          >
            See all features <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 9 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.href}
                className={`group relative rounded-2xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  item.highlight
                    ? "bg-[#FFFFFF] border-[#FF5A36] shadow-card hover:-translate-y-1 ring-1 ring-[#FF5A36]/20"
                    : "bg-[#FFFFFF] border-[#E6E2D8] hover:border-[#4A5370]/50 hover:shadow-card hover:-translate-y-1"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                        item.highlight
                          ? "bg-[#FFE6DF] text-[#C2361A]"
                          : "bg-[#F7F4EE] text-[#0F1730] group-hover:bg-[#FFE6DF] group-hover:text-[#C2361A]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                        item.highlight
                          ? "bg-[#FFE6DF] text-[#C2361A] border-[#FF5A36]/30"
                          : "bg-[#F7F4EE] text-[#4A5370] border-[#E6E2D8]"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A5370] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E2D8]/60 flex items-center justify-between text-xs font-semibold text-[#0F1730] group-hover:text-[#FF5A36]">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
