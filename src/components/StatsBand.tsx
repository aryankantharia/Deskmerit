import React from "react";
import { stats } from "../data/home";

export function StatsBand() {
  return (
    <section className="bg-neutral-900 py-16 md:py-20" aria-labelledby="stats-title">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="pretitle text-teal-400">Proven Enterprise HR Impact</p>
          <h2 id="stats-title" className="mt-2 text-h1 text-white md:text-[36px] md:leading-[44px]">
            Trusted by <span className="text-teal-400">50+ Global Enterprises</span> to Hire, Manage & Retain
          </h2>
          <p className="mt-4 text-body1 text-neutral-400">
            Behind the screens: autonomous candidate screening, zero-error statutory payroll, and end-to-end workforce lifecycle automation across 12+ countries.
          </p>
        </div>
        <div className="lg:col-span-6">
          <dl className="grid grid-cols-2">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`p-6 text-center ${i % 2 === 0 ? "border-r border-neutral-700" : ""} ${i < 2 ? "border-b border-neutral-700" : ""}`}
              >
                <dd className="text-3xl sm:text-4xl font-bold text-teal-300 font-mono tabular-nums tracking-tight">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-xs sm:text-sm text-neutral-300 font-medium leading-snug">
                  {stat.label}
                  {stat.noteIndex && (
                    <sup className="ml-1 text-[10px] text-teal-400 font-bold" title={stat.methodNote}>
                      [{stat.noteIndex}]
                    </sup>
                  )}
                </dt>
              </div>
            ))}
          </dl>

          {/* Footnote methodology note */}
          <p className="mt-4 text-[11px] text-neutral-500 text-center lg:text-left leading-relaxed">
            * Methodology verified across live customer telemetry: [1] Time-to-shortlist based on 2,400+ hiring pipelines; [2] Recruiter hours saved vs manual scheduling; [3] 24/7 candidate completion telemetry; [4] Statutory EPFO/ESIC reconciliation pass rate.
          </p>
        </div>
      </div>
    </section>
  );
}