import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InteractiveTrackerWidget } from "./InteractiveTrackerWidget";
import { TeamLiveOverviewWidget } from "./TeamLiveOverviewWidget";
import { Sparkles, Layers, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function InterviewFeature() {
  return (
    <section className="py-20 bg-[#FFFFFF] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE6DF] text-[#C2361A] text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A36]" />
            <span>Interactive Signature Demo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
            Experience Tracker Plus in real time.
          </h2>
          <p className="text-base text-[#4A5370] mt-3">
            Pick a Jira task, click Start, or pause for Private Time. Experience how the desktop widget keeps employee dignity while delivering defensible timesheets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 flex justify-center">
            <InteractiveTrackerWidget />
          </div>

          <div className="lg:col-span-6">
            <TeamLiveOverviewWidget />
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/features/tracker-plus"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A36] hover:underline"
          >
            Read deep dive on Tracker Plus ticket synchronization <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}