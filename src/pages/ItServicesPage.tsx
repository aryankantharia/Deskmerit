import React from "react";
import { Link } from "react-router-dom";
import { PulseTrackHeader } from "../components/PulseTrackHeader";
import { PulseTrackFooter } from "../components/PulseTrackFooter";
import { PulseTrackCtaBand } from "../components/PulseTrackCtaBand";
import {
  Code2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Users,
} from "lucide-react";

export function ItServicesPage() {
  const budgets = [
    { project: "Acme Retail · Checkout API", percent: 72, color: "bg-[#12B886]", alert: null },
    { project: "Northwind · Cloud Pipeline", percent: 108, color: "bg-[#E5484D]", alert: "Exceeded budget (+8%)" },
    { project: "Contoso · Infra Audit", percent: 46, color: "bg-[#12B886]", alert: null },
    { project: "Fabrikam · Core Services", percent: 91, color: "bg-[#F5A524]", alert: "Approaching cap" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <PulseTrackHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <Link to="/solutions" className="hover:text-[#0F1730]">Solutions</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">IT services</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm">
              <span className="pulse-dot" />
              <span>Solutions · IT services</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight">
              Prove every billable hour{" "}
              <span className="text-[#FF5A36] block font-normal">your engineers work.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
              IT services firms live and die by utilisation. PulseTrack starts time from the Jira or Azure DevOps ticket, so every hour lands on the right client, project and rate — with reports your clients won’t argue with.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
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
          </div>

          {/* 4 Feature Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { title: "Billable utilisation", desc: "by engineer, team and account" },
              { title: "Task-level proof", desc: "from Jira and Azure DevOps" },
              { title: "Margin per project", desc: "rates × hours vs budget" },
              { title: "Bench visibility", desc: "who's unassigned, early" },
            ].map((b, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle">
                <div className="font-bold text-xs text-[#0F1730]">{b.title}</div>
                <div className="text-[11px] text-[#4A5370] mt-0.5">{b.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Utilisation & Budget vs Actual */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Beat 1: Utilisation you can trust */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                  Utilisation you can trust
                </div>
                <h2 className="text-3xl font-extrabold text-[#0F1730]">
                  Billable vs non-billable, every week.
                </h2>
                <p className="text-sm text-[#4A5370] leading-relaxed">
                  See utilisation by engineer, team and client account, trended weekly. Spot over-servicing and under-billing before month-end invoices surprise clients.
                </p>
                <ul className="space-y-2 pt-2 text-xs text-[#0F1730]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12B886]" /> Automated rate mapping per project & engineer seniority
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12B886]" /> One-click filter for non-billable bench time vs client deliverables
                  </li>
                </ul>
              </div>

              {/* Progress bars card */}
              <div className="lg:col-span-6 bg-[#F7F4EE] rounded-2xl p-6 sm:p-8 border border-[#E6E2D8]">
                <h3 className="font-bold text-sm text-[#0F1730] mb-4">Budget vs actual (Real time)</h3>
                <div className="space-y-5">
                  {budgets.map((b) => (
                    <div key={b.project} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#0F1730]">{b.project}</span>
                        <span className="font-bold text-[#0F1730]">{b.percent}%</span>
                      </div>
                      <div className="h-3 rounded-full bg-[#E6E2D8] overflow-hidden flex">
                        <div
                          style={{ width: `${Math.min(b.percent, 100)}%` }}
                          className={`h-full ${b.color}`}
                        />
                      </div>
                      {b.alert && (
                        <div className="text-[10px] font-bold text-[#C2361A] flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" /> {b.alert}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="p-8 rounded-2xl bg-[#FFE6DF]/60 border border-[#FF5A36]/30 text-center max-w-3xl mx-auto">
              <blockquote className="font-human text-xl sm:text-2xl text-[#0F1730] italic mb-3">
                “We built PulseTrack because our own delivery teams needed it: timesheets, trackers and invoices kept disagreeing.”
              </blockquote>
              <div className="text-xs font-bold text-[#0F1730]">Kombee Technologies</div>
              <div className="text-[11px] text-[#4A5370]">The engineering team behind PulseTrack</div>
            </div>
          </div>
        </section>

        <PulseTrackCtaBand
          title="Turn every engineering hour into defensible revenue."
          subtitle="Install in minutes, start from a task, and get your first report this week."
        />
      </main>

      <PulseTrackFooter />
    </div>
  );
}
