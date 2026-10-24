import React from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { Check, Minus, ArrowRight, ShieldCheck, RefreshCw, Smartphone } from "lucide-react";

export function DeskTimeAlternativePage() {
  const comparisonRows = [
    { feature: "Automatic time tracking", pulse: "✓", desk: "✓" },
    { feature: "App, URL & document tracking", pulse: "✓", desk: "✓" },
    { feature: "Productivity scoring", pulse: "✓", desk: "✓" },
    { feature: "Private Time pause", pulse: "✓", desk: "✓" },
    { feature: "Screenshots — default state", pulse: "Off & blurred by default", desk: "Optional (Premium)", highlight: true },
    { feature: "Start tracking from a PM task", pulse: "✓ Jira, Azure DevOps & OpenProject at once (Pro)", desk: "✓ Jira and others (Premium)", highlight: true },
    { feature: "Each employee connects their own PM token", pulse: "✓", desk: "—", highlight: true },
    { feature: "The same click feeds attendance & HRMS", pulse: "✓", desk: "—", highlight: true },
    { feature: "Calendar integration (Google, Outlook)", pulse: "✓ Counts toward attendance", desk: "✓ (Pro)" },
    { feature: "Shift scheduling & leave calendar", pulse: "✓ Included on Pro", desk: "✓ (Premium only)" },
    { feature: "Free plan", pulse: "✓ Up to 5 users", desk: "— (Paid only)", highlight: true },
    { feature: "Public API & MCP server", pulse: "✓ Pro & up (with Claude MCP)", desk: "API on Premium; custom on Enterprise" },
    { feature: "White-label / reseller mode", pulse: "✓ Premium", desk: "—" },
    { feature: "Linux agent", pulse: "✓ Supported", desk: "✓ Supported" },
    { feature: "Mobile phone tracking app", pulse: "— (Desk work only)", desk: "✓ (iOS & Android)", honestDesk: true },
    { feature: "Price (annual, per user / month)", pulse: "Free · $5 · $8 · Custom", desk: "$6.42 · $9.17 · Custom", highlight: true },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <Link to="/compare" className="hover:text-[#0F1730]">Compare</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">DeskTime alternative</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm mb-6">
            <span>COMPARE · DESKTIME ALTERNATIVE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
            The DeskTime alternative built around your tasks —{" "}
            <span className="text-[#FF5A36] block font-normal">and your HRMS.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4A5370] max-w-2xl mx-auto mb-8 font-normal">
            DeskTime is a solid automatic tracker. Deskmerit matches its core features and adds Tracker Plus, attendance that counts meetings, a free Starter plan, and a deeper API with an MCP server.
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

        {/* 3 Reasons Why Teams Switch */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle">
              <span className="text-sm font-mono font-extrabold text-[#C2361A] bg-[#FFE6DF] px-2.5 py-1 rounded-md inline-block mb-4">
                01
              </span>
              <h3 className="text-lg font-bold text-[#0F1730] mb-2">Three PM tools, one click</h3>
              <p className="text-xs text-[#4A5370] leading-relaxed">
                Jira, Azure DevOps and OpenProject connected at once — and the same click feeds attendance and your HRMS without manual timesheet exports.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle">
              <span className="text-sm font-mono font-extrabold text-[#C2361A] bg-[#FFE6DF] px-2.5 py-1 rounded-md inline-block mb-4">
                02
              </span>
              <h3 className="text-lg font-bold text-[#0F1730] mb-2">Attendance that's fair</h3>
              <p className="text-xs text-[#4A5370] leading-relaxed">
                Accepted calendar meetings, client workshops and off-computer work count toward the day so busy days away from the keyboard aren't penalized.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle">
              <span className="text-sm font-mono font-extrabold text-[#C2361A] bg-[#FFE6DF] px-2.5 py-1 rounded-md inline-block mb-4">
                03
              </span>
              <h3 className="text-lg font-bold text-[#0F1730] mb-2">Privacy by default</h3>
              <p className="text-xs text-[#4A5370] leading-relaxed">
                Screenshots blurred by default, no keystroke keylogger, no audio/video snooping, and a binding public employee privacy promise.
              </p>
            </div>
          </div>
        </section>

        {/* Feature by Feature Table */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] rounded-[24px] p-6 sm:p-10 border border-[#E6E2D8] shadow-card">
            <div className="mb-6 pb-4 border-b border-[#E6E2D8]">
              <h3 className="text-2xl font-bold text-[#0F1730]">Feature by feature</h3>
              <p className="text-xs text-[#4A5370] mt-1">
                DeskTime details verified from its public help centre and WorkTime’s independent review.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#E6E2D8] text-[#4A5370]">
                    <th className="py-3 pr-4 font-semibold">Feature / Capability</th>
                    <th className="py-3 px-4 font-extrabold text-[#C2361A] bg-[#FFE6DF]/40 text-center rounded-t-lg">
                      Deskmerit
                    </th>
                    <th className="py-3 px-4 font-bold text-[#0F1730] text-center">DeskTime</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E2D8]/60 text-[#0F1730]">
                  {comparisonRows.map((r, i) => (
                    <tr key={i} className={r.highlight ? "bg-[#FFF9F7]" : "hover:bg-[#F7F4EE]/50"}>
                      <td className="py-3 pr-4 font-medium">{r.feature}</td>
                      <td className="py-3 px-4 text-center font-bold text-[#0F1730] bg-[#FFE6DF]/20">
                        {r.pulse}
                      </td>
                      <td className="py-3 px-4 text-center text-[#4A5370]">
                        {r.desk}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Honesty Section: When DeskTime is better & Migration call */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6E2D8] shadow-subtle">
              <div className="flex items-center gap-2 font-bold text-sm text-[#0F1730] mb-2">
                <Smartphone className="w-4 h-4 text-[#FF5A36]" />
                <span>When DeskTime is the better choice</span>
              </div>
              <p className="text-xs text-[#4A5370] leading-relaxed">
                If you need a mobile phone tracking app for field workers or delivery drivers, DeskTime offers one and Deskmerit does not. Deskmerit focuses 100% on computer work and desktop knowledge workers.
              </p>
            </div>

            <div className="bg-[#0F1730] text-white rounded-2xl p-7 border border-[#24305A] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 font-bold text-sm text-white mb-2">
                  <RefreshCw className="w-4 h-4 text-[#FF5A36]" />
                  <span>Switching from DeskTime?</span>
                </div>
                <p className="text-xs text-[#9AA1B2] leading-relaxed">
                  We’ll help you map projects, rates and productivity rules, and run both tools side by side for a week during your transition.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#24305A]">
                <Link
                  to="/demo"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A36] hover:underline"
                >
                  Book a migration walkthrough call <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <DeskmeritCtaBand
          title="Try the tracker that starts from the task."
          subtitle="Install in minutes, start from a task, and get your first report this week."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
