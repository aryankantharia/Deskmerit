import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Check, Sparkles, Clock, Layers, Users, Lock } from "lucide-react";
import { InteractiveTrackerWidget } from "./InteractiveTrackerWidget";
import { TeamLiveOverviewWidget } from "./TeamLiveOverviewWidget";

export function DeskmeritHero() {
  const partnerTools = [
    { name: "Jira Software", category: "Project Management" },
    { name: "Azure DevOps", category: "Sprint Boards" },
    { name: "OpenProject", category: "Open Source" },
    { name: "Google Calendar", category: "Attendance Sync" },
    { name: "Outlook 365", category: "Meeting Time" },
    { name: "Slack", category: "Status & /time" },
    { name: "Microsoft Teams", category: "Daily Summaries" },
    { name: "Sqalible HRMS", category: "Native 1-Click Module" },
    { name: "Claude MCP Server", category: "AI Workforce Query" },
    { name: "Zapier & Make", category: "7,000+ Connectors" },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-32 bg-[#F7F4EE]">
      {/* Stripe-Style Organic Sweeping Gradient Mesh Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF5A36]/15 via-[#FFA940]/15 to-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none -mr-40 -mt-40" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none -ml-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Headline, Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-[#0F1730]">
              <span className="pulse-dot" />
              <span>Automatic time tracking for modern teams</span>
            </div>

            {/* H1 Headline with Stripe-Style Gradient Accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-[62px] font-extrabold text-[#0F1730] tracking-[-0.035em] leading-[1.06]">
              Know where the work goes.{" "}
              <span className="bg-gradient-to-r from-[#0F1730] via-[#C2361A] to-[#FF5A36] bg-clip-text text-transparent block sm:inline font-black">
                Without watching over shoulders.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed max-w-xl font-normal">
              Deskmerit is the automatic time tracking software your team will actually trust.
              Pick a task from Jira, Azure DevOps or OpenProject, press Start, and Deskmerit tracks time, fills attendance and builds billable reports on its own.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center text-xs sm:text-sm font-bold text-white bg-[#FF5A36] hover:bg-[#E94A27] px-8 py-4 rounded-xl shadow-[0_4px_16px_rgba(255,90,54,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span>Start free 14-day trial</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/demo"
                className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-[#0F1730] bg-white hover:bg-slate-50 border border-slate-300 hover:border-[#0F1730] px-7 py-4 rounded-xl shadow-sm transition-all duration-200"
              >
                Book a 20-minute demo
              </Link>
            </div>

            {/* Trust Micro-copy */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#4A5370]">
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-[#12B886]" /> No credit card required
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-[#12B886]" /> Windows, macOS & Linux
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#FF5A36]" /> Setup in under 10 minutes
              </span>
            </div>
          </div>

          {/* Right Column: Layered Floating Product Composition (Stripe Style) */}
          <div className="lg:col-span-6 relative">
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5A36]/20 to-[#38BDF8]/20 rounded-3xl blur-2xl -z-10 transform scale-95" />

            <div className="space-y-5">
              {/* Top Floating Badge */}
              <div className="flex items-center justify-between px-4 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-sm text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#12B886] animate-pulse" />
                  <span className="font-bold text-[#0F1730]">Jira Live Sync Active</span>
                  <span className="text-[#4A5370]">· KMB-482 Checkout API refactor</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#E6F4EA] text-[#0D652D]">
                  Zero Keylogging
                </span>
              </div>

              {/* Layer 1: Team Live Overview Card */}
              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-card hover:shadow-elevated transition-shadow p-1 overflow-hidden">
                <TeamLiveOverviewWidget />
              </div>

              {/* Layer 2: Interactive Desktop Tracker Simulation */}
              <div className="rounded-2xl border border-slate-200/80 bg-white shadow-card hover:shadow-elevated transition-shadow p-4">
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F1730]">
                    <Sparkles className="w-4 h-4 text-[#FF5A36]" />
                    <span>Try the live interactive desktop agent:</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#4A5370]">Rust daemon v2.4</span>
                </div>
                <InteractiveTrackerWidget />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Partner & Integration Ecosystem Marquee (Stripe Logo Strip Style) */}
        <div className="mt-20 pt-10 border-t border-slate-200/60">
          <p className="text-center text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-6">
            Works natively with the engineering & productivity tools your team already relies on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {partnerTools.map((tool) => (
              <div
                key={tool.name}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200/70 shadow-subtle flex items-center gap-2 hover:border-[#FF5A36] transition-colors"
              >
                <span className="text-xs font-bold text-[#0F1730]">{tool.name}</span>
                <span className="text-[10px] text-[#4A5370] bg-slate-100 px-1.5 py-0.5 rounded">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
