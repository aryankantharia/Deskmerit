import React, { useState } from "react";
import { CheckCircle2, MousePointerClick, PlayCircle, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function DeskmeritHowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "1",
      title: "Pick your task",
      description:
        "Open the Deskmerit desktop agent and choose a task fetched live from Jira, Azure DevOps or OpenProject — or simply type one in.",
      icon: MousePointerClick,
      detailBadge: "Zero second-login",
      previewText: "Jira task KMB-482 auto-fetched with client & rate pre-mapped",
    },
    {
      num: "2",
      title: "Press Start",
      description:
        "Tracking begins instantly, even offline. Apps, websites and document titles are categorised as productive, neutral or unproductive.",
      icon: PlayCircle,
      detailBadge: "Works 100% offline",
      previewText: "Desktop agent records title without inspecting inner document body",
    },
    {
      num: "3",
      title: "Get the answers",
      description:
        "Managers see who is working on what, finance sees billable hours by client, and HR sees attendance computed in each person's own time zone.",
      icon: BarChart3,
      detailBadge: "3-in-1 automated",
      previewText: "Daily timesheet, attendance log, and client invoice totals ready",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
            How it works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
            One click. Three answers.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5370] mt-4">
            Start from the task; get what was worked on, who was present and what can be billed — without a second login.
          </p>
        </div>

        {/* 3 Step Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#F7F4EE] border-[#FF5A36] shadow-card -translate-y-1"
                    : "bg-[#FFFFFF] border-[#E6E2D8] hover:border-[#4A5370]/50 hover:bg-[#F7F4EE]/40"
                }`}
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-extrabold text-base transition-colors ${
                      isSelected
                        ? "bg-[#FF5A36] text-[#0F1730]"
                        : "bg-[#E6E2D8] text-[#0F1730]"
                    }`}
                  >
                    {step.num}
                  </span>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FFFFFF] text-[#4A5370] border border-[#E6E2D8]">
                    {step.detailBadge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0F1730] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#4A5370] leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Micro preview snippet */}
                <div className="p-3 rounded-lg bg-[#FFFFFF] border border-[#E6E2D8] text-xs text-[#0F1730] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#12B886] shrink-0" />
                  <span className="truncate">{step.previewText}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to feature detail */}
        <div className="mt-12 text-center">
          <Link
            to="/features/tracker-plus"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#C2361A] hover:text-[#FF5A36] group transition-colors"
          >
            See Tracker Plus in action
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
