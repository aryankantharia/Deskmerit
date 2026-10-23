import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, CheckCircle2Icon, ShieldCheckIcon } from "lucide-react";

export function ClosingCtaSection() {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="closing-cta-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-none border border-teal-900/40 bg-[#063B44] px-8 py-14 sm:px-12 sm:py-16 md:px-16 shadow-2xl text-white">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-teal-400/10 blur-[100px]" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-[100px]" />

          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 border border-teal-400/30 px-3.5 py-1 text-xs font-semibold text-teal-300 mb-4">
              <ShieldCheckIcon size={14} /> Unified Lifecycle Automation
            </span>

            <h2 id="closing-cta-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Ready to Experience the AI-Native HRMS Difference?
            </h2>

            <p className="mt-4 text-sm sm:text-base text-neutral-200/90 leading-relaxed max-w-2xl font-normal">
              Join forward-thinking enterprise teams eliminating manual screening, statutory payroll errors, and fragmented spreadsheets with Sqalible.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold text-[#03444D] shadow-md transition-all hover:bg-neutral-100 hover:scale-105 active:scale-95"
              >
                Book a Live Demo
                <ArrowRightIcon size={16} strokeWidth={2} />
              </Link>
              <Link
                to="/signup"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/60 bg-teal-950/40 px-8 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                Start Free 14-Day Trial
                <ArrowRightIcon size={16} strokeWidth={2} />
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-teal-200/80 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2Icon size={14} className="text-teal-400" /> No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2Icon size={14} className="text-teal-400" /> Preloaded sandbox workspace
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2Icon size={14} className="text-teal-400" /> Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
