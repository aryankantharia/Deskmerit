import React, { useState, useEffect } from "react";
import {
  XIcon,
  SparklesIcon,
  CheckCircle2Icon,
  XCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  QuoteIcon,
  ArrowRightIcon,
  PlayIcon,
  PauseIcon,
  RotateCcwIcon,
  CheckIcon,
  SlidersHorizontalIcon,
  FileTextIcon
} from "lucide-react";
import { Badge } from "./Badge";

interface AiInterviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AiInterviewModal({ isOpen, onClose }: AiInterviewModalProps) {
  const [activeTab, setActiveTab] = useState<"walkthrough" | "scorecard">("scorecard");
  const [walkthroughPlaying, setWalkthroughPlaying] = useState(true);
  const [walkthroughSeconds, setWalkthroughSeconds] = useState(48);
  const [decision, setDecision] = useState<"approved" | "rejected" | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Walkthrough timer simulation
  useEffect(() => {
    if (!isOpen || activeTab !== "walkthrough" || !walkthroughPlaying) return;
    const interval = setInterval(() => {
      setWalkthroughSeconds((prev) => {
        if (prev >= 60) {
          setWalkthroughPlaying(false);
          setActiveTab("scorecard");
          return 60;
        }
        return prev + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isOpen, activeTab, walkthroughPlaying]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-sandbox-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-neutral-900/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      {/* Backdrop click */}
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col overflow-hidden rounded-none border border-neutral-700 bg-white shadow-2xl text-neutral-900 animate-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-900 px-5 py-4 text-white">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-none bg-teal-500/20 text-teal-300">
              <SparklesIcon size={16} />
            </span>
            <div>
              <h2 id="ai-sandbox-title" className="text-sm sm:text-base font-bold text-white tracking-tight">
                Sqalible AI Live Interview Simulation
              </h2>
              <p className="text-[11px] text-neutral-400">
                Autonomous round 1 technical assessment &amp; executive evaluation scorecard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Switcher Tabs */}
            <div className="hidden sm:flex items-center rounded-full bg-neutral-800 p-0.5 border border-neutral-700">
              <button
                type="button"
                onClick={() => setActiveTab("walkthrough")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "walkthrough"
                    ? "bg-teal-500 text-neutral-950 shadow-xs"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                60s Live Session
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("scorecard")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "scorecard"
                    ? "bg-teal-500 text-neutral-950 shadow-xs"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                Scorecard View
                <span className="ml-1.5 rounded-full bg-teal-900/60 text-teal-200 text-[10px] px-1.5 py-0.2">
                  Key Signal
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full p-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <XIcon size={18} />
            </button>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="flex sm:hidden border-b border-neutral-200 bg-neutral-100 p-2 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("walkthrough")}
            className={`flex-1 py-1.5 text-xs font-semibold text-center rounded-none transition-all ${
              activeTab === "walkthrough" ? "bg-white text-primary border border-neutral-300 shadow-2xs" : "text-neutral-600"
            }`}
          >
            60s Live Session
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("scorecard")}
            className={`flex-1 py-1.5 text-xs font-semibold text-center rounded-none transition-all ${
              activeTab === "scorecard" ? "bg-white text-primary border border-neutral-300 shadow-2xs" : "text-neutral-600"
            }`}
          >
            Manager Scorecard
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "walkthrough" ? (
            /* TAB 1: 60s Simulated Session Walkthrough */
            <div className="p-5 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-neutral-200 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                      Live Telemetry Stream
                    </span>
                    <Badge tone="error">Live 00:{walkthroughSeconds < 10 ? `0${walkthroughSeconds}` : walkthroughSeconds} / 01:00</Badge>
                  </div>
                  <p className="mt-1 text-xs text-neutral-600">
                    Candidate: <strong>Ananya Rao</strong> · Applied for <strong>Senior Backend Engineer</strong>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setWalkthroughPlaying((v) => !v)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 shadow-2xs"
                  >
                    {walkthroughPlaying ? <PauseIcon size={13} /> : <PlayIcon size={13} />}
                    {walkthroughPlaying ? "Pause" : "Play"}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setWalkthroughSeconds(0);
                      setWalkthroughPlaying(true);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 shadow-2xs"
                  >
                    <RotateCcwIcon size={13} />
                    Restart
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("scorecard")}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary hover:bg-teal-700 text-white px-3.5 py-1 text-xs font-semibold shadow-xs transition-transform hover:scale-105"
                  >
                    Jump to Scorecard →
                  </button>
                </div>
              </div>

              {/* Video Preview & Live Transcribing Dialogue */}
              <div className="grid md:grid-cols-12 gap-5 items-stretch">
                {/* Candidate Feed */}
                <div className="md:col-span-5 relative rounded-none overflow-hidden bg-neutral-900 aspect-video md:aspect-auto border border-neutral-300 shadow-sm flex flex-col justify-end">
                  <img
                    src="/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
                    alt="Candidate Ananya Rao in live simulation"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Audio Frequency Equalizer */}
                  <div className="relative p-3 flex items-center justify-between text-white text-xs">
                    <div>
                      <p className="font-bold text-xs">Ananya Rao</p>
                      <p className="text-[10px] text-teal-300">Speaking · Bangalore, India</p>
                    </div>
                    {walkthroughPlaying && (
                      <div className="flex items-center gap-0.5 h-3">
                        <span className="w-1 bg-teal-400 rounded-full animate-[bounce_0.6s_infinite] h-2" />
                        <span className="w-1 bg-teal-400 rounded-full animate-[bounce_0.8s_infinite] h-3.5" />
                        <span className="w-1 bg-teal-400 rounded-full animate-[bounce_0.5s_infinite] h-1.5" />
                        <span className="w-1 bg-teal-400 rounded-full animate-[bounce_0.9s_infinite] h-3" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Live Real-time Audio Transcript Box */}
                <div className="md:col-span-7 flex flex-col justify-between rounded-none border border-neutral-200 bg-neutral-50/70 p-4 space-y-4">
                  <div className="space-y-3">
                    {/* AI Question */}
                    <div className="rounded-none border border-teal-200 bg-teal-50/90 p-3 text-xs leading-relaxed">
                      <p className="font-semibold text-primary flex items-center gap-1.5 mb-1">
                        <SparklesIcon size={13} className="text-teal-600" />
                        <span>Sqalible AI Live Interviewer (00:14)</span>
                      </p>
                      <p className="text-neutral-800 italic">
                        “You mentioned migrating a monolith to microservices at Finlytics. How did you decouple payments without risking transactional consistency?”
                      </p>
                    </div>

                    {/* Candidate Response Transcript */}
                    <div className="rounded-none border border-emerald-200 bg-white p-3 text-xs leading-relaxed shadow-2xs">
                      <p className="font-semibold text-neutral-900 flex items-center justify-between mb-1">
                        <span>Ananya Rao (00:34)</span>
                        <span className="text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 border border-emerald-200">
                          Active Stream
                        </span>
                      </p>
                      <p className="text-neutral-800">
                        “We isolated payments first because transactional consistency boundaries between customer accounts and 3rd-party banking gateways were our primary single point of failure. We avoided distributed two-phase commits completely and used an transactional outbox pattern with Kafka.”
                      </p>
                    </div>
                  </div>

                  {/* Real-time Category Telemetry */}
                  <div className="border-t border-neutral-200 pt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="flex items-center gap-1.5 text-neutral-600 font-medium">
                      <ShieldCheckIcon size={14} className="text-primary" />
                      Anti-Bias Audit: Demographics Filtered
                    </span>
                    <span className="font-bold text-primary">
                      Current Score: 94% (Strong Hire)
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom CTA to trigger Scorecard */}
              <div className="rounded-none border border-teal-200 bg-teal-50/50 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-neutral-700">
                  Ready to see the completed decision package generated for hiring leads?
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab("scorecard")}
                  className="rounded-full bg-primary hover:bg-teal-700 text-white font-semibold px-5 py-2 text-xs shadow-xs transition-transform hover:scale-105"
                >
                  View Manager Scorecard →
                </button>
              </div>
            </div>
          ) : (
            /* TAB 2: THE SCORECARD VIEW THE HIRING MANAGER SEES (THE MOMENT THAT SELLS) */
            <div className="p-5 sm:p-8 space-y-6">
              {/* Scorecard Hero Banner */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-none bg-neutral-900 p-5 sm:p-6 text-white border border-neutral-800">
                <div className="flex items-center gap-4">
                  <img
                    src="/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg"
                    alt="Ananya Rao"
                    className="h-14 w-14 rounded-full object-cover border-2 border-teal-400 shrink-0"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-white">Ananya Rao</h3>
                      <span className="rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/40 px-2.5 py-0.5 text-xs font-semibold">
                        Round 1 AI Technical Screening
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-300">
                      Senior Backend Systems Engineer · 7+ Years Experience · Evaluated Today (42 mins)
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-teal-400">94 / 100</span>
                    <Badge tone="success">Strong Hire</Badge>
                  </div>
                  <span className="text-[11px] text-neutral-400 mt-0.5">
                    100% Anti-Bias Audited (EEOC Compliant)
                  </span>
                </div>
              </div>

              {/* HIRING MANAGER DECISION ACTION BAR (The Moment That Sells) */}
              <div className="rounded-none border-2 border-primary bg-teal-50/70 p-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Hiring Manager Decision Gate
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-neutral-900 mt-0.5">
                      Advance Ananya to Technical Onsite Panel?
                    </h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Autonomous AI screening completed. Final advancement decision requires human sign-off.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => setDecision("approved")}
                      className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-xs font-bold transition-all shadow-sm cursor-pointer ${
                        decision === "approved"
                          ? "bg-emerald-700 text-white ring-2 ring-emerald-400"
                          : "bg-primary hover:bg-teal-700 text-white hover:scale-105"
                      }`}
                    >
                      <CheckCircle2Icon size={15} />
                      Approve &amp; Advance to Onsite
                    </button>

                    <button
                      type="button"
                      onClick={() => setDecision("rejected")}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-xs font-semibold transition-colors cursor-pointer ${
                        decision === "rejected"
                          ? "bg-rose-100 border-rose-400 text-rose-800"
                          : "border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900"
                      }`}
                    >
                      <XCircleIcon size={15} />
                      Reject Candidate
                    </button>
                  </div>
                </div>

                {/* Instant Feedback Status State */}
                {decision === "approved" && (
                  <div className="mt-4 rounded-none bg-emerald-100 border border-emerald-300 p-3.5 text-xs text-emerald-900 flex items-start gap-2.5 animate-in fade-in duration-200">
                    <CheckIcon size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Candidate Approved for Technical Onsite Panel</p>
                      <p className="mt-0.5 text-emerald-800">
                        Automated calendar invitations dispatched to Bar Raiser panel. Candidate received congratulations email. ATS status synced to <em>Stage 2: Onsite</em>.
                      </p>
                      <button
                        type="button"
                        onClick={() => setDecision(null)}
                        className="mt-1 text-[11px] underline text-emerald-900 font-semibold cursor-pointer"
                      >
                        Reset Decision
                      </button>
                    </div>
                  </div>
                )}

                {decision === "rejected" && (
                  <div className="mt-4 rounded-none bg-rose-50 border border-rose-200 p-3.5 text-xs text-rose-900 flex items-start gap-2.5 animate-in fade-in duration-200">
                    <XCircleIcon size={16} className="text-rose-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Candidate Archived with Constructive Feedback</p>
                      <p className="mt-0.5 text-rose-800">
                        Candidate respectfully archived. Personalized feedback summary generated from rubric notes for recruiter sign-off.
                      </p>
                      <button
                        type="button"
                        onClick={() => setDecision(null)}
                        className="mt-1 text-[11px] underline text-rose-900 font-semibold cursor-pointer"
                      >
                        Reset Decision
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Rubric Category Breakdown Scores */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                  <SlidersHorizontalIcon size={13} />
                  Competency Rubric Scores
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="rounded-none border border-neutral-200 bg-white p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-800">1. Distributed Systems Architecture</span>
                      <span className="font-bold text-primary">96 / 100</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "96%" }} />
                    </div>
                    <p className="mt-1.5 text-[11px] text-neutral-500">
                      Domain boundaries, asynchronous messaging, transactional integrity.
                    </p>
                  </div>

                  <div className="rounded-none border border-neutral-200 bg-white p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-800">2. Concurrency &amp; Cache Resilience</span>
                      <span className="font-bold text-primary">92 / 100</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "92%" }} />
                    </div>
                    <p className="mt-1.5 text-[11px] text-neutral-500">
                      Cache stampede mitigation, jittered TTLs, distributed mutex.
                    </p>
                  </div>

                  <div className="rounded-none border border-neutral-200 bg-white p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-800">3. Problem Solving &amp; Trade-offs</span>
                      <span className="font-bold text-primary">95 / 100</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "95%" }} />
                    </div>
                    <p className="mt-1.5 text-[11px] text-neutral-500">
                      Clearly articulated pros/cons of two-phase commit vs eventual consistency.
                    </p>
                  </div>

                  <div className="rounded-none border border-neutral-200 bg-white p-3.5">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-neutral-800">4. Communication &amp; Structure</span>
                      <span className="font-bold text-primary">93 / 100</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "93%" }} />
                    </div>
                    <p className="mt-1.5 text-[11px] text-neutral-500">
                      Precise terminology, concise framing, proactive clarification.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verbatim Candidate Quotes with Exact Timestamps */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-1.5">
                  <FileTextIcon size={13} />
                  Verbatim Candidate Quotes &amp; Timestamps
                </h4>

                <div className="space-y-3">
                  {/* Quote 1 */}
                  <div className="rounded-none border border-neutral-200 bg-neutral-50/80 p-4 text-xs space-y-2">
                    <div className="flex items-center justify-between text-neutral-500">
                      <span className="flex items-center gap-1 font-mono font-bold text-primary text-[11px]">
                        <ClockIcon size={12} />
                        00:14 – 00:34
                      </span>
                      <span className="font-semibold text-[11px] text-neutral-700">Topic: Monolith Boundary Selection</span>
                    </div>

                    <div className="border-l-2 border-primary pl-3 py-0.5">
                      <p className="text-neutral-500 text-[11px] mb-1">
                        AI Question: “How did you decide where to draw the first boundary?”
                      </p>
                      <p className="italic text-neutral-900 font-medium">
                        “We isolated payments first because transactional consistency boundaries between customer accounts and 3rd-party banking gateways were our primary single point of failure.”
                      </p>
                    </div>

                    <p className="text-[11px] text-emerald-700 font-medium bg-emerald-50 p-2 rounded-xs border border-emerald-200">
                      ✓ Evaluator Signal: Demonstrates domain-driven design boundary isolation without coupling schema models.
                    </p>
                  </div>

                  {/* Quote 2 */}
                  <div className="rounded-none border border-neutral-200 bg-neutral-50/80 p-4 text-xs space-y-2">
                    <div className="flex items-center justify-between text-neutral-500">
                      <span className="flex items-center gap-1 font-mono font-bold text-primary text-[11px]">
                        <ClockIcon size={12} />
                        01:15 – 01:42
                      </span>
                      <span className="font-semibold text-[11px] text-neutral-700">Topic: Redis Cache Invalidation</span>
                    </div>

                    <div className="border-l-2 border-primary pl-3 py-0.5">
                      <p className="text-neutral-500 text-[11px] mb-1">
                        AI Question: “How did you prevent cache stampedes across Redis during sudden flash-sale traffic spikes?”
                      </p>
                      <p className="italic text-neutral-900 font-medium">
                        “We configured early probabilistic expiration with jitter and Redis distributed locks (Redlock) so that only one worker executed the DB rebuild query while serving stale-while-revalidate to others.”
                      </p>
                    </div>

                    <p className="text-[11px] text-emerald-700 font-medium bg-emerald-50 p-2 rounded-xs border border-emerald-200">
                      ✓ Evaluator Signal: Battle-tested mitigation against thundering-herd outages during high-concurrency spikes.
                    </p>
                  </div>

                  {/* Quote 3 */}
                  <div className="rounded-none border border-neutral-200 bg-neutral-50/80 p-4 text-xs space-y-2">
                    <div className="flex items-center justify-between text-neutral-500">
                      <span className="flex items-center gap-1 font-mono font-bold text-primary text-[11px]">
                        <ClockIcon size={12} />
                        03:22 – 03:45
                      </span>
                      <span className="font-semibold text-[11px] text-neutral-700">Topic: Candidate Inquiry to AI</span>
                    </div>

                    <div className="border-l-2 border-teal-500 pl-3 py-0.5">
                      <p className="italic text-neutral-900 font-medium">
                        “What are your current SLAs around cross-region database replication latency and how do you handle partition recovery?”
                      </p>
                    </div>

                    <p className="text-[11px] text-neutral-600 font-medium bg-white p-2 rounded-xs border border-neutral-200">
                      ✓ Evaluator Signal: Candidate shows high curiosity regarding distributed data durability and raft consensus.
                    </p>
                  </div>
                </div>
              </div>

              {/* Responsible AI Compliance Footer */}
              <div className="pt-2 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheckIcon size={14} className="text-primary" />
                  Audited by Sqalible AI Engine v4.2 · Zero demographic biometrics collected
                </span>
                <span className="text-[11px]">
                  Transcript ID: <code className="font-mono bg-neutral-100 px-1 py-0.5 text-neutral-700">intv_9824_ananya</code>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-neutral-200 bg-neutral-50 px-5 py-3.5">
          <p className="text-xs text-neutral-600 text-center sm:text-left">
            Experience the full live platform on your own hiring pipeline.
          </p>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href="/signup"
              className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-full bg-primary hover:bg-teal-700 text-white font-semibold px-5 py-2 text-xs shadow-xs transition-transform hover:scale-105"
            >
              Start free trial
            </a>
            <a
              href="/contact"
              className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 font-semibold px-5 py-2 text-xs shadow-2xs"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
