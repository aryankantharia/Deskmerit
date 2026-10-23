import React from "react";
import { ArrowRightIcon, BrainCircuitIcon, CalculatorIcon, SparklesIcon, UsersIcon } from "lucide-react";
import { aiSolutions } from "../data/home";

export function AiCapabilities() {
  const icons = [
    <BrainCircuitIcon size={38} strokeWidth={1.5} />,
    <CalculatorIcon size={38} strokeWidth={1.5} />,
    <SparklesIcon size={38} strokeWidth={1.5} />,
    <UsersIcon size={38} strokeWidth={1.5} />
  ];

  return (
    <section id="ai-solutions" className="bg-[#0A1118] py-16 md:py-24 border-y border-neutral-800 text-white" aria-labelledby="ai-solutions-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 sm:mb-16">
          <div className="flex-1">
            <p className="pretitle text-teal-400">Enterprise Intelligence</p>
            <h2 id="ai-solutions-title" className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Native AI Engines for Every Stage of the Workforce
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
              Purpose-built intelligence that eliminates manual administration while keeping human leadership firmly in control.
            </p>
          </div>
          <a
            href="/platform/ai-live-interview"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            Explore all AI platform capabilities
            <ArrowRightIcon size={15} />
          </a>
        </div>

        {/* Architectural Line-Divided Structure Matching Reference */}
        <div className="border-t border-b border-white/15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
            {aiSolutions.map((sol, idx) => (
              <a
                key={sol.title}
                href={sol.href}
                className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-between hover:bg-white/[0.02] transition-colors group"
              >
                <div>
                  <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                    {icons[idx]}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-teal-300 transition-colors">
                    {sol.title}
                  </h4>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {sol.description}
                  </p>
                </div>

                <div className="mt-8 pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-neutral-200 group-hover:border-teal-400 group-hover:bg-teal-500/15 group-hover:text-teal-300 transition-all duration-200">
                    Learn more
                    <ArrowRightIcon size={13} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}