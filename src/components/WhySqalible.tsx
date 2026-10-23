import React from "react";
import { ArrowRightIcon, CheckCircle2Icon, XCircleIcon, ShieldCheckIcon, ScaleIcon, BlocksIcon } from "lucide-react";
import { compareLinks, comparisonRows } from "../data/why";

export function WhySqalible() {
  return (
    <section id="why" className="border-t border-neutral-200/80 bg-neutral-50/60 py-14 md:py-16" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="flex-1">
            <p className="pretitle text-primary">Why Sqalible</p>
            <h2 id="why-title" className="mt-1 text-h2 font-semibold text-neutral-900 md:text-[32px] md:leading-[40px]">
              AI-Native Architecture vs Legacy HRMS
            </h2>
            <p className="mt-2 text-body2 text-neutral-600">
              Legacy HR adds AI to old systems. Sqalible powers every workflow with autonomous agents.
            </p>
          </div>
          <a
            href="/why-sqalible"
            className="inline-flex shrink-0 items-center gap-1.5 text-body2 font-semibold text-primary hover:text-primary-hover transition-colors"
          >
            See full architecture breakdown
            <ArrowRightIcon size={16} />
          </a>
        </div>

        {/* Streamlined High-Differentiation Comparison Card */}
        <div className="mt-8 overflow-hidden rounded-xl border border-neutral-300/80 bg-white shadow-md">
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-neutral-200 bg-neutral-100/90 text-caption font-semibold">
            <div className="hidden md:flex md:col-span-3 items-center px-6 py-4 text-neutral-500 uppercase tracking-wider text-[11px] font-bold">
              HR Lifecycle Stage
            </div>
            <div className="md:col-span-4 flex items-center justify-between border-t md:border-t-0 md:border-x border-neutral-200 bg-neutral-100/60 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-neutral-200 text-neutral-600 border border-neutral-300">
                  Alternative
                </span>
                <span className="text-neutral-700 text-xs sm:text-sm font-bold">
                  Legacy HRMS (Keka, Darwinbox)
                </span>
              </div>
            </div>
            <div className="md:col-span-5 flex items-center justify-between bg-gradient-to-r from-teal-900 to-[#063B44] px-6 py-4 text-white">
              <div className="flex items-center gap-2.5">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-teal-400/20 text-teal-300 border border-teal-400/40">
                  AI-Native Standard
                </span>
                <span className="text-white text-xs sm:text-sm font-extrabold tracking-tight">
                  Sqalible Autonomous Engine
                </span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-teal-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-teal-400/20">
                Recommended
              </span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-neutral-200/70">
            {comparisonRows.map((row) => (
              <div key={row.capability} className="grid grid-cols-1 md:grid-cols-12 items-stretch transition-colors group">
                {/* Capability Column */}
                <div className="md:col-span-3 p-4 sm:p-5 flex flex-col justify-center bg-white group-hover:bg-neutral-50/80 transition-colors">
                  <span className="font-bold text-neutral-900 text-sm">
                    {row.capability}
                  </span>
                </div>

                {/* Legacy HRMS Alternative Column */}
                <div className="md:col-span-4 p-4 sm:p-5 border-t md:border-t-0 md:border-x border-neutral-200/80 bg-neutral-50/50 group-hover:bg-neutral-100/60 transition-colors flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-100/80 text-rose-600 border border-rose-200">
                    <XCircleIcon size={14} strokeWidth={2.5} />
                  </span>
                  <div className="flex-1">
                    <span className="md:hidden block text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Legacy Alternative</span>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {row.legacy}
                    </p>
                  </div>
                </div>

                {/* Sqalible AI-Native Column */}
                <div className="md:col-span-5 p-4 sm:p-5 bg-teal-500/[0.04] group-hover:bg-teal-500/[0.08] transition-colors flex items-start gap-3 border-t md:border-t-0 border-teal-500/20">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-700 border border-teal-300/80 shadow-xs">
                    <CheckCircle2Icon size={14} strokeWidth={2.5} />
                  </span>
                  <div className="flex-1">
                    <span className="md:hidden block text-[10px] font-bold text-teal-600 uppercase tracking-wider mb-1">Sqalible AI-Native</span>
                    <p className="text-xs sm:text-sm text-neutral-900 font-semibold leading-relaxed">
                      {row.sqalible}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Integrated Platform Comparison Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 bg-[#0A1118] px-6 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-500/20 text-teal-400">
                <ScaleIcon size={15} />
              </span>
              <div>
                <span className="text-body2 font-semibold text-white">Evaluating specific HRMS alternatives?</span>
                <span className="hidden md:inline text-caption text-neutral-400 ml-2">Compare unbiased technical breakdowns:</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {compareLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-800/80 px-3.5 py-1.5 text-caption font-medium text-white hover:border-teal-400 hover:bg-neutral-700 hover:text-teal-300 transition-colors"
                >
                  {link.title.replace("Sqalible ", "")}
                  <ArrowRightIcon size={13} className="text-teal-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Compact Trust & Compliance Bar */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/responsible-ai"
            className="group flex items-center justify-between rounded-none border border-neutral-200 bg-white p-4 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs shrink-0 [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                <ScaleIcon size={18} />
              </span>
              <div>
                <p className="text-body2 font-semibold text-neutral-900 group-hover:text-primary transition-colors">Responsible AI</p>
                <p className="text-[12px] text-neutral-500">Human-in-the-loop sign-off on hiring</p>
              </div>
            </div>
            <ArrowRightIcon size={14} className="text-neutral-400 group-hover:text-primary transition-colors" />
          </a>

          <a
            href="/security"
            className="group flex items-center justify-between rounded-none border border-neutral-200 bg-white p-4 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs shrink-0 [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                <ShieldCheckIcon size={18} />
              </span>
              <div>
                <p className="text-body2 font-semibold text-neutral-900 group-hover:text-primary transition-colors">Enterprise Trust</p>
                <p className="text-[12px] text-neutral-500">SOC 2, GDPR & Tenant Isolation</p>
              </div>
            </div>
            <ArrowRightIcon size={14} className="text-neutral-400 group-hover:text-primary transition-colors" />
          </a>

          <a
            href="/integrations"
            className="group flex items-center justify-between rounded-none border border-neutral-200 bg-white p-4 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs shrink-0 [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                <BlocksIcon size={18} />
              </span>
              <div>
                <p className="text-body2 font-semibold text-neutral-900 group-hover:text-primary transition-colors">100+ Integrations</p>
                <p className="text-[12px] text-neutral-500">Slack, Google Workspace, Jira & biometric</p>
              </div>
            </div>
            <ArrowRightIcon size={14} className="text-neutral-400 group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}