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
      image: "/images/how-it-works/step1-pick-task.jpg",
      screenAlt: "Deskmerit Task Selection Modal showing Jira KMB-482 ticket with client billable rate",
    },
    {
      num: "2",
      title: "Press Start",
      description:
        "Tracking begins instantly, even offline. Apps, websites and document titles are categorised as productive, neutral or unproductive.",
      icon: PlayCircle,
      detailBadge: "Works 100% offline",
      previewText: "Desktop agent records title without inspecting inner document body",
      image: "/images/how-it-works/step2-press-start.jpg",
      screenAlt: "Deskmerit Live Desktop Tracker showing running timer, real-time app scoring, and Private Time toggle",
    },
    {
      num: "3",
      title: "Get the answers",
      description:
        "Managers see who is working on what, finance sees billable hours by client, and HR sees attendance computed in each person's own time zone.",
      icon: BarChart3,
      detailBadge: "3-in-1 automated",
      previewText: "Daily timesheet, attendance log, and client invoice totals ready",
      image: "/images/how-it-works/step3-get-answers.jpg",
      screenAlt: "Deskmerit Workforce Intelligence Dashboard with billable hours, team attendance, and Excel export",
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
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`group relative rounded-3xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#F7F4EE] border-[#FF5A36] shadow-card -translate-y-1.5 ring-2 ring-[#FF5A36]/15"
                    : "bg-[#FFFFFF] border-[#E6E2D8] hover:border-[#4A5370]/50 hover:bg-[#F7F4EE]/40 hover:-translate-y-1"
                }`}
              >
                <div>
                  {/* Step Number Badge (Secondary Lora Serif Font) & Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center font-human italic font-bold text-2xl transition-all shadow-xs ${
                        isSelected
                          ? "bg-[#FF5A36] text-white shadow-[0_4px_12px_rgba(255,90,54,0.3)]"
                          : "bg-[#E6E2D8] text-[#0F1730] group-hover:bg-[#D6D1C5]"
                      }`}
                    >
                      {step.num}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#FFFFFF] text-[#4A5370] border border-[#E6E2D8] shadow-xs">
                      {step.detailBadge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F1730] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mb-5">
                    {step.description}
                  </p>

                  {/* High-Fidelity Product Screen Image */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 border border-slate-200/90 bg-[#0F1730]/5 shadow-sm group-hover:shadow-md transition-all">
                    <img
                      src={step.image}
                      alt={step.screenAlt}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Subtle Corner Badge Indicator */}
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-[#0F1730]/75 backdrop-blur-xs text-[10px] font-medium text-white flex items-center gap-1 shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#12B886]" />
                      <span>Live product UI</span>
                    </div>
                  </div>
                </div>

                {/* Micro preview snippet */}
                <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E6E2D8] text-xs text-[#0F1730] flex items-center gap-2 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#12B886] shrink-0" />
                  <span className="truncate font-medium">{step.previewText}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to feature detail */}
        <div className="mt-14 text-center">
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
