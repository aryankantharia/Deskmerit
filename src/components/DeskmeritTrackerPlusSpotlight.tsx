import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Layers, ShieldCheck, Sparkles, AlertTriangle } from "lucide-react";

export function DeskmeritTrackerPlusSpotlight() {
  const [activeTab, setActiveTab] = useState<"Jira" | "Azure DevOps" | "OpenProject">("Jira");

  return (
    <section className="py-20 lg:py-28 bg-[#0F1730] text-[#F7F4EE] relative overflow-hidden">
      {/* Background Graphic Loop */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[650px] h-[650px] rounded-full border-[70px] border-[#24305A]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24305A] text-xs font-semibold text-[#FFE6DF] border border-[#334173]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5A36]" />
              <span>Flagship innovation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.025em] leading-tight">
              Start the timer from the task.{" "}
              <span className="text-[#FF5A36]">That's it.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9AA1B2] leading-relaxed">
              Most trackers treat your PM tool as one more integration to keep in sync. With Tracker Plus, the desktop agent shows each person the tasks they're assigned to across every connected tool. They pick one and press Start.
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                "Jira, Azure DevOps and OpenProject, in any combination",
                "Each employee's own access only — nothing they can't already see",
                "Manual entry is always there for work outside your PM tools",
                "Identically named projects never merged: tasks are keyed by tool and ID",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#E6E2D8]">
                  <span className="w-5 h-5 rounded-full bg-white text-[#0F1730] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                to="/features/tracker-plus"
                className="inline-flex items-center justify-center text-sm font-bold text-[#0F1730] bg-white hover:bg-slate-100 px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>See how Tracker Plus works</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 text-[#0F1730]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive PM Tools Display */}
          <div className="lg:col-span-6">
            <div className="bg-[#172348] rounded-[24px] p-6 sm:p-8 border border-[#24305A] shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-[#24305A]">
                <div>
                  <h4 className="text-sm font-bold text-white">Your connected tools</h4>
                  <p className="text-xs text-[#9AA1B2]">Each personal access token is verified before saving</p>
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-[#12B886]/20 text-[#12B886]">
                  Active sync
                </span>
              </div>

              {/* Connected Tool Rows */}
              <div className="py-4 space-y-2.5">
                <div className="p-3.5 rounded-xl bg-[#0F1730] border border-[#24305A] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                      J
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white">Jira Software</div>
                      <div className="text-[11px] text-[#9AA1B2]">Connected · ananya@acme.com</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#12B886] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0F1730] border border-[#24305A] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-sky-600 text-white font-bold text-xs flex items-center justify-center">
                      AD
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white">Azure DevOps</div>
                      <div className="text-[11px] text-[#9AA1B2]">Connected · 2 organisations</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#12B886] flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0F1730] border border-[#24305A] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-lg bg-teal-600 text-white font-bold text-xs flex items-center justify-center">
                      O
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white">OpenProject</div>
                      <div className="text-[11px] text-[#9AA1B2]">Self-hosted or cloud instance</div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#FF5A36] hover:underline cursor-pointer">
                    + Add token
                  </span>
                </div>
              </div>

              {/* 3 Step Flow Indicator */}
              <div className="mt-4 pt-4 border-t border-[#24305A] grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-[#0F1730] text-[11px]">
                  <span className="text-[#FF5A36] font-bold block mb-0.5">1 · Pick</span>
                  <span className="text-[#9AA1B2]">Select PM issue</span>
                </div>
                <div className="p-2 rounded-lg bg-[#0F1730] text-[11px]">
                  <span className="text-[#FF5A36] font-bold block mb-0.5">2 · Start</span>
                  <span className="text-[#9AA1B2]">One-click timer</span>
                </div>
                <div className="p-2 rounded-lg bg-[#0F1730] text-[11px]">
                  <span className="text-[#FF5A36] font-bold block mb-0.5">3 · Answer</span>
                  <span className="text-[#9AA1B2]">Billing & HR filled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
