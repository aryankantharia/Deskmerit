import React from "react";
import { ArrowRight, Sparkles, Calendar, FileCheck2 } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#022329] text-white border-b border-teal-900/60 flex flex-col justify-center pt-[76px] pb-12 sm:pt-[84px] sm:pb-16 lg:pt-[68px] lg:pb-0 lg:h-[calc(100vh-68px)] lg:max-h-[760px] lg:min-h-[580px]"
      aria-labelledby="hero-title"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Ambient glow highlight overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#021F24]/30 via-transparent to-[#01171B]/50" />

      <div className="relative mx-auto max-w-7xl w-full px-5 sm:px-8 lg:px-12 my-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          
          {/* Left Column: Prominent typography matching user reference */}
          <div className="text-left z-10 max-w-xl mx-auto lg:mx-0 w-full">
            <h1
              id="hero-title"
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] font-bold tracking-tight text-white leading-[1.1]"
            >
              <span className="block text-white">Sqalible.</span>
              <span className="block mt-1 sm:mt-1.5 text-[#32E3B9] font-normal">
                The AI-Native
              </span>
              <span className="block mt-1 sm:mt-1.5 font-bold text-white">
                HRMS.
              </span>
            </h1>

            <p className="mt-4 sm:mt-6 max-w-lg text-sm xs:text-base sm:text-lg lg:text-[17.5px] leading-[1.6] font-normal text-white/85">
              From first hire to final settlement. AI at every stage of the employee lifecycle, with people making every decision that matters.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 max-w-md xs:max-w-none">
              <a
                href="/signup"
                className="group inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-8 text-sm sm:text-base font-semibold text-[#033E46] shadow-lg shadow-teal-950/40 transition-all duration-200 hover:bg-neutral-100 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
              >
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
              </a>
              <a
                href="/contact"
                className="group inline-flex h-11 sm:h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-[#05323A]/40 px-6 sm:px-8 text-sm sm:text-base font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:bg-[#05323A]/70 hover:border-white/60 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
              >
                Book a demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
              </a>
            </div>
          </div>

          {/* Right Column: Centered floating SaaS cards cluster with responsive scaling */}
          <div className="relative flex items-center justify-center w-full mt-4 sm:mt-6 lg:mt-0 overflow-visible">
            <div className="relative w-[340px] xs:w-[380px] sm:w-[500px] lg:w-[540px] h-[330px] xs:h-[350px] sm:h-[385px] flex items-center justify-center scale-[0.88] xs:scale-[0.94] sm:scale-100 origin-center transition-transform duration-300">
              
              {/* Glowing SVG connector lines & arrows */}
              <svg
                className="absolute inset-0 pointer-events-none w-full h-full overflow-visible hidden sm:block"
                viewBox="0 0 540 385"
                fill="none"
                aria-hidden="true"
              >
                {/* 1. Organic loop swooping around the left of the main card */}
                <path
                  d="M 110 50 C 20 80, 10 200, 50 250 C 105 300, 200 310, 275 270"
                  stroke="rgba(45, 212, 191, 0.45)"
                  strokeWidth="1.3"
                />

                {/* 2. Curved trajectory pointing up to Automate Interviews */}
                <path
                  d="M 325 230 C 365 210, 385 175, 400 130"
                  stroke="#2DD4BF"
                  strokeWidth="1.4"
                />
                <path
                  d="M 394 136 L 400 130 L 406 134"
                  stroke="#2DD4BF"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* 3. Downward sweeping arc curving toward Onboard with ease */}
                <path
                  d="M 435 150 C 470 200, 460 255, 415 285"
                  stroke="rgba(45, 212, 191, 0.45)"
                  strokeWidth="1.3"
                />
              </svg>

              {/* Card 1: Top-Right "Automate Interviews" */}
              <div
                className="absolute top-1 right-0 sm:right-1 z-10 w-[190px] xs:w-[210px] sm:w-[230px] rounded-[18px] bg-white/95 p-3 sm:p-4 border border-white/90 backdrop-blur-md transform rotate-[3.5deg] hover:rotate-0 transition-transform duration-300"
                style={{
                  boxShadow: "0 18px 35px -8px rgba(2, 30, 36, 0.6), 0 0 25px rgba(45, 212, 191, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-[#E6F8F6] text-[#0A7B73] border border-teal-200/50">
                    <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.8} />
                  </div>
                  <div className="flex gap-1 text-neutral-300 pt-1">
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                    <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                  </div>
                </div>

                <div className="mt-2">
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">Automate Interviews</h4>
                  <p className="text-[9.5px] sm:text-[10px] text-neutral-500 mt-0.5 leading-snug">AI-powered screening and evaluation</p>
                </div>

                {/* Upward wave chart */}
                <div className="mt-1.5 sm:mt-2">
                  <svg className="w-full h-5 sm:h-6 overflow-visible" viewBox="0 0 100 20" fill="none">
                    <path
                      d="M 2 15 C 20 18, 35 15, 50 10 C 65 5, 80 12, 98 4"
                      stroke="#2DD4BF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Card 2: Main Center Hero Card "LIVE EVALUATION SESSION" */}
              <div
                className="absolute top-9 sm:top-10 left-0 sm:left-1 z-20 w-[280px] xs:w-[310px] sm:w-[350px] rounded-[20px] bg-white p-3.5 sm:p-4.5 border border-white/95 transform -rotate-[2.5deg] hover:rotate-0 transition-transform duration-300"
                style={{
                  boxShadow: "0 22px 45px -10px rgba(2, 30, 36, 0.7), 0 0 35px rgba(45, 212, 191, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.95)",
                }}
              >
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-neutral-100/80">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5757]"></span>
                    </span>
                    <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.06em] text-neutral-800 uppercase">
                      LIVE EVALUATION SESSION
                    </span>
                  </div>
                  <span className="rounded-full bg-[#E6F7F5] text-[#0A7B73] border border-teal-200/70 px-2 sm:px-2.5 py-0.5 text-[9.5px] sm:text-[11px] font-semibold tracking-wide">
                    Round 1
                  </span>
                </div>

                {/* Candidate Info */}
                <div className="flex items-center justify-between pt-2 pb-2 sm:pt-2.5 sm:pb-2.5">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <img
                      src="/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
                      alt="Ananya Rao"
                      className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 rounded-full object-cover border-2 border-white shadow-xs ring-1 ring-neutral-200"
                    />
                    <div>
                      <h3 className="text-xs sm:text-[13.5px] font-bold text-neutral-900 leading-tight">Ananya Rao</h3>
                      <p className="text-[9px] sm:text-[10.5px] text-neutral-500 mt-0.5">Senior Backend Engineer · 7 Yrs</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-lg sm:text-2xl font-black text-[#0D9488] leading-none tracking-tight">94%</div>
                    <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-neutral-400 mt-0.5">
                      MATCH SCORE
                    </p>
                  </div>
                </div>

                {/* AI Dialogue Snippet */}
                <div className="rounded-xl border border-neutral-200/70 bg-[#F8FAFC] p-2 sm:p-3 text-left">
                  <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[11px] font-bold text-[#0D9488] mb-0.5 sm:mb-1">
                    <Sparkles size={11} className="text-[#0D9488]" />
                    <span>Live AI Question:</span>
                  </div>
                  <p className="text-[9.5px] sm:text-[11px] text-neutral-700 leading-relaxed font-normal italic">
                    &ldquo;How did you decouple payments from your monolithic database without transactional consistency risk?&rdquo;
                  </p>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 pt-2 sm:pt-2.5">
                  <div className="rounded-lg border border-neutral-200/70 bg-white p-1.5 sm:p-2 text-center">
                    <span className="text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider text-neutral-400 block">
                      SYSTEM DESIGN
                    </span>
                    <span className="text-[10.5px] sm:text-xs font-bold text-neutral-900 mt-0.5 block">
                      Strong (96%)
                    </span>
                  </div>
                  <div className="rounded-lg border border-neutral-200/70 bg-white p-1.5 sm:p-2 text-center">
                    <span className="text-[7.5px] sm:text-[9px] font-bold uppercase tracking-wider text-neutral-400 block">
                      ANTI-BIAS AUDIT
                    </span>
                    <span className="text-[10.5px] sm:text-xs font-bold text-[#059669] mt-0.5 block">
                      ✓ 100% Passed
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3: Bottom-Right "Onboard with ease" */}
              <div
                className="absolute bottom-1 right-0 sm:right-3 z-30 w-[195px] xs:w-[215px] sm:w-[235px] rounded-[18px] bg-white/95 p-3 sm:p-4 border border-white/95 backdrop-blur-md transform rotate-[1deg] hover:rotate-0 transition-transform duration-300"
                style={{
                  boxShadow: "0 18px 40px -8px rgba(2, 30, 36, 0.65), 0 0 30px rgba(45, 212, 191, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.9)",
                }}
              >
                <div className="flex items-start gap-2 sm:gap-2.5">
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-lg bg-[#E6F8F6] text-[#0A7B73] border border-teal-200/50">
                    <FileCheck2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">Onboard with ease</h4>
                    <p className="text-[9px] sm:text-[10px] text-neutral-500 mt-0.5 leading-snug">
                      Automate document verification and employee setup
                    </p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-2 sm:mt-2.5 flex items-center gap-2 sm:gap-2.5">
                  <div className="h-1.5 flex-1 rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full w-3/4 rounded-full bg-[#14B8A6]" />
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-bold text-neutral-500 shrink-0">3/4</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}