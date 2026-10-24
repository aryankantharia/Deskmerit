import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Calendar, Layers, Clock, ShieldCheck, Play, Square, Shield } from "lucide-react";

export function Hero() {
  const [seconds, setSeconds] = useState(8049); // 02:14:09
  const [isTracking, setIsTracking] = useState(true);
  const [isPrivate, setIsPrivate] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTracking && !isPrivate) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking, isPrivate]);

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section
      className="relative isolate overflow-hidden bg-[#0F1730] text-white border-b border-[#24305A] flex flex-col justify-center pt-28 pb-14 sm:pt-32 sm:pb-16 lg:py-0 lg:pt-[68px] lg:h-[calc(100vh-68px)] lg:max-h-[760px] lg:min-h-[600px]"
      aria-labelledby="hero-title"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Ambient glow highlight overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0F1730]/40 via-transparent to-[#090E1F]/70" />

      <div className="relative mx-auto max-w-7xl w-full px-6 sm:px-8 lg:px-12 my-auto">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          
          {/* Left Column: Prominent typography matching Sqalible / Kombee layout */}
          <div className="text-left z-10 max-w-xl">
            {/* Small pre-title badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24305A]/80 border border-[#334173] text-xs font-semibold text-[#FFE6DF] mb-4">
              <span className="pulse-dot" />
              <span>Automatic time tracking for modern teams</span>
            </div>

            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[54px] xl:text-[62px] font-extrabold tracking-tight text-white leading-[1.08]"
            >
              <span className="block text-white">Know where the</span>
              <span className="block mt-1 sm:mt-1.5 text-[#FF5A36] font-normal">
                work goes.
              </span>
              <span className="block mt-1 sm:mt-1.5 font-bold text-white/90 text-3xl sm:text-4xl lg:text-[40px]">
                Without watching over shoulders.
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 max-w-lg text-base sm:text-lg leading-[1.6] font-normal text-white/85">
              Deskmerit is the automatic time tracking software your team will actually trust. Pick a task from Jira, Azure DevOps or OpenProject, press Start, and Deskmerit tracks time, fills attendance and builds billable reports on its own.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <a
                href="/signup"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FF5A36] hover:bg-[#E94A27] px-7 sm:px-8 text-sm sm:text-base font-bold text-[#0F1730] shadow-lg shadow-orange-950/40 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Start free trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
              </a>
              <a
                href="/demo"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-[#24305A]/50 px-7 sm:px-8 text-sm sm:text-base font-semibold text-white backdrop-blur-xs transition-all duration-200 hover:bg-[#24305A]/80 hover:border-white/60 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Book a demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.2} />
              </a>
            </div>

            <div className="mt-4 text-xs text-white/60 flex items-center gap-2">
              <span>No credit card</span>
              <span>·</span>
              <span>Windows, macOS and Linux</span>
              <span>·</span>
              <span>Set up in under 10 minutes</span>
            </div>
          </div>

          {/* Right Column: Centered floating SaaS cards cluster with responsive scaling */}
          <div className="relative flex items-center justify-center w-full mt-4 lg:mt-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[520px] lg:max-w-[560px] h-[370px] sm:h-[400px] flex items-center justify-center scale-[0.88] xs:scale-[0.94] sm:scale-100 origin-center transition-transform duration-300">
              
              {/* Glowing SVG connector lines & arrows matching Sqalible mockup geometry */}
              <svg
                className="absolute inset-0 pointer-events-none w-full h-full overflow-visible hidden sm:block"
                viewBox="0 0 560 400"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M 120 50 C 20 80, 10 200, 50 250 C 105 300, 200 310, 275 270"
                  stroke="rgba(255, 90, 54, 0.45)"
                  strokeWidth="1.3"
                />
                <path
                  d="M 335 230 C 375 210, 395 175, 410 130"
                  stroke="#FF5A36"
                  strokeWidth="1.4"
                />
                <path
                  d="M 404 136 L 410 130 L 416 134"
                  stroke="#FF5A36"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 445 150 C 480 200, 470 255, 425 285"
                  stroke="rgba(255, 90, 54, 0.45)"
                  strokeWidth="1.3"
                />
              </svg>

              {/* Card 1: Top-Right "Start from Jira / PM" (Clockwise tilt ~3.5deg) */}
              <div
                className="absolute top-0 right-0 sm:right-1 z-10 w-[210px] sm:w-[235px] rounded-[18px] bg-white/95 p-3.5 sm:p-4 border border-white/90 backdrop-blur-md transform rotate-[3.5deg] hover:rotate-0 transition-transform duration-300 text-[#0F1730]"
                style={{
                  boxShadow: "0 18px 35px -8px rgba(15, 23, 48, 0.6), 0 0 25px rgba(255, 90, 54, 0.12)",
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFE6DF] text-[#C2361A] border border-[#FF5A36]/30 font-bold text-xs">
                    J
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Live Token
                  </span>
                </div>

                <div className="mt-2.5">
                  <h4 className="text-[13px] sm:text-sm font-bold text-[#0F1730] leading-tight">Tracker Plus</h4>
                  <p className="text-[10px] text-[#4A5370] mt-0.5 leading-snug">JIRA · KMB-482 Checkout API</p>
                </div>

                {/* Delicate upward wave chart */}
                <div className="mt-2">
                  <svg className="w-full h-6 overflow-visible" viewBox="0 0 100 20" fill="none">
                    <path
                      d="M 2 15 C 20 18, 35 15, 50 10 C 65 5, 80 12, 98 4"
                      stroke="#FF5A36"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Card 2: Main Center Hero Card "LIVE TRACKING SESSION" (Counter-clockwise tilt ~2.5deg) */}
              <div
                className="absolute top-10 left-0 sm:left-1 z-20 w-[315px] sm:w-[350px] rounded-[20px] bg-white p-4 sm:p-5 border border-white/95 transform -rotate-[2.5deg] hover:rotate-0 transition-transform duration-300 text-[#0F1730]"
                style={{
                  boxShadow: "0 22px 45px -10px rgba(15, 23, 48, 0.7), 0 0 35px rgba(255, 90, 54, 0.15)",
                }}
              >
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A36]"></span>
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.06em] text-[#0F1730] uppercase">
                      LIVE TRACKING SESSION
                    </span>
                  </div>
                  <span className="rounded-full bg-[#FFE6DF] text-[#C2361A] border border-[#FF5A36]/30 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold">
                    {isPrivate ? "Private Time" : isTracking ? "Active · Jira" : "Paused"}
                  </span>
                </div>

                {/* Task & Timer */}
                <div className="flex items-center justify-between pt-3 pb-2">
                  <div>
                    <h3 className="text-xs sm:text-[13.5px] font-bold text-[#0F1730] leading-tight">Ananya R.</h3>
                    <p className="text-[9.5px] sm:text-[10.5px] text-[#4A5370] mt-0.5">KMB-482 · Checkout API refactor</p>
                  </div>

                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-black text-[#0F1730] font-mono leading-none tracking-tight tnum">
                      {formatTime(seconds)}
                    </div>
                    <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-[#12B886] mt-0.5">
                      ✓ AUTO-SYNCING
                    </p>
                  </div>
                </div>

                {/* Day Line visual inside card */}
                <div className="rounded-xl border border-neutral-200/70 bg-[#F7F4EE] p-2.5 text-left my-1">
                  <div className="flex items-center justify-between text-[10px] text-[#4A5370] mb-1 font-semibold">
                    <span>The Day Line:</span>
                    <span className="text-[#12B886]">84% Productive</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#E6E2D8] overflow-hidden flex">
                    <div className="h-full bg-[#12B886] w-[65%]" title="Tracking" />
                    <div className="h-full bg-[#5B6CFF] w-[15%]" title="Private Time" />
                    <div className="h-full bg-[#F5A524] w-[12%]" title="Idle" />
                    <div className="h-full bg-[#E5484D] w-[8%]" title="Unproductive" />
                  </div>
                </div>

                {/* Interactive Controls Row */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsTracking(!isTracking)}
                    className="py-1.5 px-3 rounded-lg bg-[#FF5A36] text-[#0F1730] text-[11px] font-bold hover:bg-[#E94A27] transition-colors flex items-center justify-center gap-1"
                  >
                    {isTracking ? <Square className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
                    {isTracking ? "Stop" : "Resume"}
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsPrivate(!isPrivate)}
                    className={`py-1.5 px-3 rounded-lg border text-[11px] font-semibold transition-colors flex items-center justify-center gap-1 ${
                      isPrivate
                        ? "bg-[#5B6CFF] text-white border-[#5B6CFF]"
                        : "bg-white text-[#0F1730] border-[#E6E2D8] hover:bg-neutral-50"
                    }`}
                  >
                    <Shield className="w-3 h-3" />
                    {isPrivate ? "In Private" : "Private Time"}
                  </button>
                </div>
              </div>

              {/* Card 3: Bottom-Right "Defensible Revenue" (Subtle tilt ~1deg) */}
              <div
                className="absolute bottom-1 right-1 sm:right-3 z-30 w-[215px] sm:w-[240px] rounded-[18px] bg-white/95 p-3.5 sm:p-4 border border-white/95 backdrop-blur-md transform rotate-[1deg] hover:rotate-0 transition-transform duration-300 text-[#0F1730]"
                style={{
                  boxShadow: "0 18px 40px -8px rgba(15, 23, 48, 0.65), 0 0 30px rgba(255, 90, 54, 0.12)",
                }}
              >
                <div className="flex items-start gap-2.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFE6DF] text-[#C2361A] border border-[#FF5A36]/30">
                    <Clock className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-[13px] sm:text-sm font-bold text-[#0F1730] leading-tight">Team today</h4>
                    <p className="text-[10px] text-[#4A5370] mt-0.5 leading-snug">
                      118h 40m · 71% billable
                    </p>
                  </div>
                </div>

                {/* Progress Indicator */}
                <div className="mt-2.5 flex items-center gap-2.5">
                  <div className="h-1.5 flex-1 rounded-full bg-neutral-100 overflow-hidden">
                    <div className="h-full w-[71%] rounded-full bg-[#12B886]" />
                  </div>
                  <span className="text-[10px] font-bold text-[#12B886] shrink-0">71%</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}