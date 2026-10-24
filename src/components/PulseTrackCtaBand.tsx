import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function PulseTrackCtaBand({
  title = "See your team's real week by Friday.",
  subtitle = "Install in minutes, start from a task, and get your first report this week.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-[#0F1730] text-[#F7F4EE] py-20 lg:py-24 relative overflow-hidden">
      {/* Signature Master Live Loop Graphic on right */}
      <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 opacity-25 lg:opacity-40 pointer-events-none">
        <svg width="420" height="420" viewBox="0 0 64 64" fill="none">
          <path
            d="M 21 52 L 21 25 A 13 13 0 1 1 43.19 34.19"
            stroke="#FFFFFF"
            strokeWidth="8.5"
            strokeLinecap="round"
          />
          <circle cx="31.2" cy="37.7" r="5.4" fill="#FF5A36" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#9AA1B2] mb-8 font-normal">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center text-sm font-bold text-[#0F1730] bg-[#FF5A36] hover:bg-[#E94A27] px-8 py-3.5 rounded-[12px] shadow-sm hover:shadow-glow-ember transition-all group"
            >
              Start free 14-day trial
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/demo"
              className="inline-flex items-center justify-center text-sm font-semibold text-white bg-[#24305A] hover:bg-[#334173] border border-[#334173] px-7 py-3.5 rounded-[12px] transition-all"
            >
              Book a demo
            </Link>
          </div>

          <p className="text-xs text-[#9AA1B2]">
            No credit card · Windows, macOS and Linux · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
