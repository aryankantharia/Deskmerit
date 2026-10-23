import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, CheckCircle2Icon, XCircleIcon, ScaleIcon } from "lucide-react";
import { compareLinks, comparisonRows } from "../data/why";

export function AiVsLegacySection() {
  return (
    <section id="why" className="border-b border-neutral-200/80 bg-neutral-50/60 py-16 md:py-20" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex-1">
            <p className="pretitle text-primary">Architectural Benchmark</p>
            <h2 id="why-title" className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              AI-Native Architecture vs Legacy HRMS
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
              Legacy HR systems bolt chat widgets on top of 20-year-old databases. Sqalible runs autonomous agents natively through every stage of the employee lifecycle.
            </p>
          </div>
          <Link
            to="/why-sqalible"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-primary hover:text-teal-700 transition-colors"
          >
            See full architecture breakdown
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* Comparison Structure */}
        <div className="mt-8 overflow-hidden rounded-none border border-neutral-300/80 bg-white shadow-sm">
          {/* DESKTOP VIEW: True 3-Column Table (Stage | Legacy | Sqalible) */}
          <div className="hidden md:block">
            {/* Header Row */}
            <div className="grid grid-cols-12 border-b border-neutral-200 font-semibold">
              <div className="col-span-3 flex items-center px-6 py-4 bg-neutral-100 text-neutral-700 uppercase tracking-wider text-xs font-bold">
                Stage
              </div>
              <div className="col-span-4 flex items-center px-6 py-4 border-x border-neutral-200 bg-neutral-100/70 text-neutral-800 text-xs sm:text-sm font-bold">
                Legacy HRMS (Keka, Darwinbox)
              </div>
              <div className="col-span-5 flex items-center justify-between bg-teal-900/90 text-white px-6 py-4">
                <span className="text-white text-xs sm:text-sm font-extrabold tracking-tight">
                  Sqalible AI-Native
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-200 bg-white/15 px-2.5 py-0.5 rounded-full border border-teal-300/30">
                  Recommended
                </span>
              </div>
            </div>

            {/* Table Rows with Tinted Sqalible Column */}
            <div className="divide-y divide-neutral-200">
              {comparisonRows.map((row) => (
                <div key={row.capability} className="grid grid-cols-12 items-stretch group hover:bg-neutral-50/50 transition-colors">
                  {/* Stage Column */}
                  <div className="col-span-3 p-5 flex flex-col justify-center bg-white group-hover:bg-neutral-50/50 transition-colors">
                    <span className="font-bold text-neutral-900 text-sm">
                      {row.capability}
                    </span>
                  </div>

                  {/* Legacy Column */}
                  <div className="col-span-4 p-5 border-x border-neutral-200 bg-neutral-50/30 group-hover:bg-neutral-100/40 transition-colors flex items-start gap-3">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-500 border border-neutral-300">
                      <XCircleIcon size={13} strokeWidth={2.5} />
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {row.legacy}
                    </p>
                  </div>

                  {/* Sqalible Column (Tinted) */}
                  <div className="col-span-5 p-5 bg-teal-500/[0.05] group-hover:bg-teal-500/[0.09] transition-colors flex items-start gap-3 border-l border-teal-500/20">
                    <span className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 border border-teal-300/80 shadow-xs">
                      <CheckCircle2Icon size={13} strokeWidth={2.5} />
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-900 font-semibold leading-relaxed">
                      {row.sqalible}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE VIEW: Stacked Row Cards (Stage Header -> Legacy Line -> Sqalible Line) */}
          <div className="block md:hidden divide-y divide-neutral-200 p-4 space-y-4">
            {comparisonRows.map((row) => (
              <div
                key={row.capability}
                className="rounded-xl border border-neutral-200/90 bg-white p-4 shadow-2xs space-y-3"
              >
                {/* Stage Title */}
                <div className="border-b border-neutral-100 pb-2">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-teal-700 block mb-0.5">Stage</span>
                  <h3 className="font-bold text-neutral-900 text-base">
                    {row.capability}
                  </h3>
                </div>

                {/* Legacy Line: Grey with ✕ icon */}
                <div className="flex items-start gap-2.5 rounded-lg bg-neutral-50 p-3 border border-neutral-200/80">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-500">
                    <XCircleIcon size={12} strokeWidth={2.5} />
                  </span>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider block mb-0.5">Legacy Alternative</span>
                    <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                      {row.legacy}
                    </p>
                  </div>
                </div>

                {/* Sqalible Line: Accent Tint with ✓ icon */}
                <div className="flex items-start gap-2.5 rounded-lg bg-teal-50/80 p-3 border border-teal-300/60 shadow-2xs">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white shrink-0 shadow-xs">
                    <CheckCircle2Icon size={12} strokeWidth={2.5} />
                  </span>
                  <div className="flex-1">
                    <span className="text-[10px] font-bold text-teal-800 uppercase tracking-wider block mb-0.5">Sqalible AI-Native</span>
                    <p className="text-xs text-neutral-900 font-semibold leading-relaxed">
                      {row.sqalible}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integrated Platform Comparison Sub-Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 bg-[#0A1118] px-6 py-3.5 text-white">
            <div className="flex items-center gap-2.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                <ScaleIcon size={13} />
              </span>
              <div>
                <span className="text-xs font-semibold text-white">Evaluating alternatives?</span>
                <span className="hidden md:inline text-[11px] text-neutral-400 ml-2">Read technical breakdowns:</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {compareLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-800/80 px-3 py-1 text-[11px] font-medium text-white hover:border-teal-400 hover:bg-neutral-700 hover:text-teal-300 transition-colors"
                >
                  {link.title.replace("Sqalible ", "")}
                  <ArrowRightIcon size={11} className="text-teal-400" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
