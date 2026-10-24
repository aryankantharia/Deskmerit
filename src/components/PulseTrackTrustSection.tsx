import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Eye, EyeOff, UserCheck, ArrowRight, Lock } from "lucide-react";

export function PulseTrackTrustSection() {
  const pillars = [
    {
      title: "No keystrokes",
      description: "Idle detection checks whether input happened — never what was typed.",
      icon: EyeOff,
    },
    {
      title: "No webcam or mic",
      description: "Not on any plan, under any setting. Zero surveillance creep.",
      icon: Lock,
    },
    {
      title: "Private Time",
      description: "One click. Shown as its own distinct state in reports, never as idle slacking.",
      icon: ShieldCheck,
    },
    {
      title: "Your data, first",
      description: "Every employee sees their own day, timeline and scores before anyone else.",
      icon: UserCheck,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand idea & human accent */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
              Built for trust
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em] leading-tight">
              Time tracking employees{" "}
              <span className="text-[#4A5370]">don't resent.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
              Monitoring software fails when people feel watched. PulseTrack is designed the other way round.
              Screenshots stay off unless an admin turns them on — and even then they are blurred and announced.
              We are the colleague who keeps good notes, not the supervisor behind the glass.
            </p>

            {/* The Human Accent Moment (Lora Italic) */}
            <div className="pt-2 pb-2">
              <blockquote className="font-human text-2xl sm:text-3xl text-[#0F1730] leading-snug border-l-4 border-[#FF5A36] pl-4 italic">
                “Every hour, honestly accounted for.”
              </blockquote>
            </div>

            <div className="pt-2">
              <Link
                to="/privacy-promise"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#C2361A] hover:text-[#FF5A36] transition-colors group"
              >
                Read our employee privacy promise
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Trust Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F7F4EE] rounded-2xl p-6 border border-[#E6E2D8] hover:border-[#4A5370]/50 transition-all shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFE6DF] text-[#C2361A] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0F1730] mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#4A5370] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
