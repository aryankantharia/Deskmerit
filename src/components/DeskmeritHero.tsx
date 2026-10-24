import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Check, Sparkles } from "lucide-react";
import { InteractiveTrackerWidget } from "./InteractiveTrackerWidget";
import { TeamLiveOverviewWidget } from "./TeamLiveOverviewWidget";

export function DeskmeritHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-12 lg:pb-24 bg-[#F7F4EE]">
      {/* Background Decorative Graphic: subtle loop arc */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full border-[60px] border-[#E6E2D8]/40 pointer-events-none -z-0" />
      <div className="absolute -bottom-24 left-1/3 w-[450px] h-[450px] rounded-full border-[40px] border-[#FFE6DF]/30 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Eyebrow & Headline Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm mb-6">
            <span className="pulse-dot" />
            <span>Automatic time tracking for modern teams</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-[1.08] mb-6">
            Know where the work goes.{" "}
            <span className="text-[#4A5370] block sm:inline font-normal">
              Without watching over shoulders.
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-[#4A5370] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Deskmerit is the automatic time tracking software your team will actually trust.
            Pick a task from Jira, Azure DevOps or OpenProject, press Start, and Deskmerit tracks time, fills attendance and builds billable reports on its own.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4">
            <Link
              to="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold text-[#0F1730] bg-[#FF5A36] hover:bg-[#E94A27] px-8 py-3.5 rounded-[12px] shadow-sm hover:shadow-glow-ember transition-all duration-200 group"
            >
              Start free 14-day trial
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-semibold text-[#0F1730] bg-[#FFFFFF] hover:bg-[#EDE9E0] border border-[#0F1730] px-7 py-3.5 rounded-[12px] transition-all duration-200"
            >
              Book a 20-minute demo
            </Link>
          </div>

          {/* Micro-copy */}
          <p className="text-xs text-[#4A5370] flex items-center justify-center gap-2">
            <span>No credit card</span>
            <span>·</span>
            <span>Windows, macOS and Linux</span>
            <span>·</span>
            <span>Set up in under 10 minutes</span>
          </p>
        </div>

        {/* Interactive Dual Showcases: Live Team Dashboard + Interactive Desktop Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Team Live Overview Dashboard (lg:col-span-7) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <TeamLiveOverviewWidget />
          </div>

          {/* Right: Interactive Desktop Tracker Simulation (lg:col-span-5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-center">
            <div className="w-full">
              <div className="text-xs font-semibold text-[#4A5370] mb-2 flex items-center gap-1.5 justify-center lg:justify-start">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5A36]" />
                <span>Try the live interactive widget below:</span>
              </div>
              <InteractiveTrackerWidget />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
