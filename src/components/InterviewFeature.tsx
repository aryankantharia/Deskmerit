import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  VideoIcon,
  Code2Icon,
  FileCheck2Icon,
  SparklesIcon
} from "lucide-react";
import { interviewPoints } from "../data/home";

const interviewScreens = [
  {
    id: "video",
    label: "Live Video Interview",
    icon: VideoIcon,
    image: "/images/ai-interview/ai-interview-video.png",
    alt: "Sqalible AI Live Video Interview Session with Alex Vance AI Interviewer",
    caption: "Real-time speech transcription & conversational probing"
  },
  {
    id: "coding",
    label: "Coding Assessment",
    icon: Code2Icon,
    image: "/images/ai-interview/ai-interview-coding.png",
    alt: "Sqalible AI Technical Assessment & In-Browser Python Coding Environment",
    caption: "Interactive problem solving, test runner & code evaluation"
  },
  {
    id: "feedback",
    label: "Screening Feedback",
    icon: FileCheck2Icon,
    image: "/images/ai-interview/ai-interview-feedback.png",
    alt: "Sqalible AI Technical Screen Feedback Scorecard & Category Scores",
    caption: "Objective rubrics, score gauges & actionable hiring signals"
  }
];

export function InterviewFeature() {
  const [activeTab, setActiveTab] = useState(0);
  const currentScreen = interviewScreens[activeTab];

  return (
    <section id="interview" className="scroll-mt-24 overflow-hidden bg-ai py-14 md:py-20" aria-labelledby="interview-title">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-12">
        {/* Left Column: Descriptive narrative & value points */}
        <div className="lg:col-span-5">
          <p className="pretitle text-teal-300">
            Flagship · Sqalible Interview
          </p>
          <h2 id="interview-title" className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight">
            Meet the AI that interviews live
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
            Structured first rounds at any hour, in any time zone, so your team spends its time on candidates worth meeting.
          </p>

          <dl className="mt-6 space-y-3.5">
            {interviewPoints.map((point) => (
              <div key={point.title} className="border-l-2 border-teal-400/60 pl-3.5">
                <dt className="text-xs sm:text-sm font-semibold text-white">{point.title}</dt>
                <dd className="mt-0.5 text-xs text-white/75 font-normal">{point.text}</dd>
              </div>
            ))}
          </dl>

          {/* Single CTA linking to detail page */}
          <div className="mt-7 sm:mt-8 flex justify-center sm:justify-start">
            <Link
              to="/platform/ai-live-interview"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-6 text-xs sm:text-sm font-semibold text-ai transition-all duration-150 hover:bg-neutral-100 shadow-md hover:scale-105 cursor-pointer w-full sm:w-auto"
            >
              <SparklesIcon size={16} strokeWidth={2} className="text-teal-600" aria-hidden="true" />
              <span>Explore AI interview</span>
              <ArrowRightIcon size={15} strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Right Column: High-fidelity Authentic AI Interview Tool Mockup with Mode Switcher */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center w-full mt-6 lg:mt-0 min-w-0">
          {/* Mode Switcher Tabs */}
          <div className="w-full flex items-center justify-between gap-2 mb-3 px-1">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto">
              {interviewScreens.map((screen, idx) => {
                const Icon = screen.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-white text-ai shadow-md"
                        : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                    }`}
                  >
                    <Icon size={13} strokeWidth={2} />
                    <span>{screen.label}</span>
                  </button>
                );
              })}
            </div>

            <Link
              to="/platform/ai-live-interview"
              className="hidden sm:inline-flex shrink-0 items-center gap-1 text-[11px] font-medium text-teal-200 hover:text-white transition-colors"
            >
              <span>View details</span>
              <ArrowRightIcon size={12} />
            </Link>
          </div>

          {/* App Frame with Real Tool Screenshot */}
          <div className="w-full overflow-hidden rounded-xl border border-white/20 bg-neutral-900 shadow-2xl transition-all duration-300">
            {/* Window Chrome Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0E1520] px-3 sm:px-4 py-2.5">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[11px] font-medium text-neutral-400 ml-2 hidden sm:inline">
                  Sqalible AI Interview · {currentScreen.label}
                </span>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Connected · 42:18 remaining
                </span>
              </div>
            </div>

            {/* Tool Screenshot Container */}
            <Link
              to="/platform/ai-live-interview"
              className="block relative group overflow-hidden bg-neutral-950 cursor-pointer"
              title="Click to explore the AI Live Interview platform"
            >
              <img
                src={currentScreen.image}
                alt={currentScreen.alt}
                className="w-full h-auto block object-contain object-top transition-transform duration-300 group-hover:scale-[1.01]"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900/90 text-white border border-white/20 px-4 py-2 text-xs font-semibold shadow-xl backdrop-blur-xs">
                  <span>Explore AI Live Interview</span>
                  <ArrowRightIcon size={13} />
                </span>
              </div>
            </Link>

            {/* Bottom Caption Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 border-t border-white/10 bg-[#0B1018] px-3 sm:px-4 py-2 text-[10px] sm:text-[11px] text-neutral-400">
              <span className="truncate max-w-full">{currentScreen.caption}</span>
              <span className="shrink-0 text-teal-400 font-medium">Sqalible Live Telemetry</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}