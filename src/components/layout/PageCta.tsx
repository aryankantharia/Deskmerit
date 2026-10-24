import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function PageCta({
  title = "See your team's real week by Friday.",
  subtitle = "Install in minutes, start from a task, and get your first defensible report this week.",
  className = "bg-[#F7F4EE] pt-6 pb-14 md:pt-8 md:pb-16",
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={className} aria-labelledby="page-cta-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[24px] bg-[#0F1730] px-8 py-10 md:flex-row md:items-center md:px-12 shadow-elevated border border-[#24305A] relative overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-15 pointer-events-none">
            <svg width="350" height="350" viewBox="0 0 64 64" fill="none">
              <path
                d="M 21 52 L 21 25 A 13 13 0 1 1 43.19 34.19"
                stroke="#FFFFFF"
                strokeWidth="8.5"
                strokeLinecap="round"
              />
              <circle cx="31.2" cy="37.7" r="5.4" fill="#FF5A36" />
            </svg>
          </div>

          <div className="flex-1 relative z-10">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-1">
              Time tracking people trust
            </p>
            <h2 id="page-cta-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#9AA1B2] mt-1.5 max-w-xl">
              {subtitle}
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-3 relative z-10">
            <Link
              to="/signup"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF5A36] hover:bg-[#E94A27] px-7 text-xs font-bold text-[#0F1730] shadow-sm hover:scale-105 transition-all cursor-pointer"
            >
              Start free trial
              <ArrowRight size={14} />
            </Link>
            <Link
              to="/demo"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 text-xs font-semibold text-white transition-all hover:bg-white/15 hover:border-white cursor-pointer"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}