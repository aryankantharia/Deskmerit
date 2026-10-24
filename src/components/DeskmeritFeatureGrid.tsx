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

export function DeskmeritFeatureGrid() {
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
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E6E2D8]/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] mb-3">
              Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F1730] tracking-[-0.03em] leading-[1.12]">
              Everything you'd expect.
              <span className="block text-[#0F1730] mt-1">Plus one click that does three jobs.</span>
            </h2>
          </div>
          <Link
            to="/features"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors shrink-0 mb-1 group"
          >
            <span>See all features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Feature Cards Grid Matching Screenshot 2 Reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.href}
                className={`group relative rounded-3xl p-7 sm:p-8 bg-white transition-all duration-300 flex flex-col justify-between shadow-subtle hover:shadow-card hover:-translate-y-1 ${
                  item.highlight
                    ? "border-2 border-[#FF5A36] ring-4 ring-[#FF5A36]/10"
                    : "border border-slate-200/90 hover:border-[#4A5370]/40"
                }`}
              >
                <div>
                  {/* Top Row: Icon Container Left, Pill Tag Right */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        item.highlight
                          ? "bg-[#FFE6DF] text-[#FF5A36]"
                          : "bg-slate-50 border border-slate-100 text-[#0F1730] group-hover:bg-[#FFE6DF] group-hover:text-[#FF5A36]"
                      }`}
                    >
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.highlight
                          ? "bg-[#FFE6DF] text-[#C2361A] font-bold border border-[#FFD4CA]"
                          : "bg-slate-100/80 text-[#4A5370] border border-slate-200/70"
                      }`}
                    >
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4A5370] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Row: Clean Learn more on left, arrow on right (No dividing line) */}
                <div className="mt-8 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
