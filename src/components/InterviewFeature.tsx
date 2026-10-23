import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  MicIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckCircle2Icon,
  PlayIcon,
  PauseIcon,
  RotateCcwIcon,
  InfoIcon
} from "lucide-react";
import { Badge } from "./Badge";
import { interviewPoints } from "../data/home";
import { AiInterviewModal } from "./AiInterviewModal";

const interviewSimulations = [
  {
    candidateName: "Ananya Rao",
    role: "Senior Backend Engineer · Round 1",
    avatar: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg",
    questions: [
      {
        id: "q1",
        label: "Architecture Boundary",
        shortLabel: "Q1: Architecture",
        ai: "You mentioned migrating a monolith to services at Finlytics. How did you decide where to draw the first boundary?",
        candidate: "We started strictly with payments, because it had the clearest data ownership and the highest deployment pain.",
        rubric: "System design · 94% Strong",
        rubricDetail: "Candidate demonstrated clear domain-driven design separation with isolated transactional data models.",
        scoreTone: "success" as const
      },
      {
        id: "q2",
        label: "Cache Stampede",
        shortLabel: "Q2: Cache Spikes",
        ai: "How did you prevent cache stampedes across Redis during sudden flash-sale traffic spikes?",
        candidate: "We used probabilistic early expiration with jitter and a distributed mutex so only one worker rebuilds the cache.",
        rubric: "Cache Resilience · 92% Strong",
        rubricDetail: "Deep understanding of cache mutation concurrency and thundering herd mitigations.",
        scoreTone: "success" as const
      }
    ]
  },
  {
    candidateName: "Devansh Mehta",
    role: "Fullstack Tech Lead · Round 1",
    avatar: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
    questions: [
      {
        id: "q1",
        label: "State Hydration",
        shortLabel: "Q1: SSR Hydration",
        ai: "How do you manage client-side state hydration in high-traffic portals while keeping LCP under 1.2s?",
        candidate: "We use partial component hydration and streaming SSR, isolating interactive islands to avoid blocking the main thread.",
        rubric: "Frontend Core · 93% Strong",
        rubricDetail: "Excellent articulation of progressive hydration boundaries and core web vital optimization.",
        scoreTone: "success" as const
      },
      {
        id: "q2",
        label: "Type Safety",
        shortLabel: "Q2: Runtime Zod",
        ai: "How do you enforce runtime type safety between microservices and client hooks?",
        candidate: "We generate schemas with Zod validation at the network boundary, catching invalid payloads before rendering.",
        rubric: "API Boundary · 90% Validated",
        rubricDetail: "Strict schema inference safeguards end-to-end data integrity across network transitions.",
        scoreTone: "success" as const
      }
    ]
  }
];

export function InterviewFeature() {
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeSpeaker, setActiveSpeaker] = useState<"ai" | "candidate">("ai");
  const [isApproved, setIsApproved] = useState(false);
  const [showRubricInfo, setShowRubricInfo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Live typewriter animation state
  const [typedAi, setTypedAi] = useState("");
  const [typedCandidate, setTypedCandidate] = useState("");
  const [animationPhase, setAnimationPhase] = useState<"question" | "answer" | "evaluating" | "done">("question");
  const [replayKey, setReplayKey] = useState(0);

  const conversationRef = useRef<HTMLDivElement>(null);

  // Smooth auto-scroll for conversation area as dialogue streams in
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTop = conversationRef.current.scrollHeight;
    }
  }, [typedAi, typedCandidate, animationPhase]);

  const current = interviewSimulations[candidateIndex];
  const q = current.questions[questionIndex];

  // Sequence the live animated typing: Question types out -> Answer appears -> Rubric updates -> Auto-replays
  useEffect(() => {
    let isCancelled = false;
    let aiInterval: NodeJS.Timeout;
    let candInterval: NodeJS.Timeout;
    let timer1: NodeJS.Timeout;
    let timer2: NodeJS.Timeout;
    let timer3: NodeJS.Timeout;
    let autoReplayTimer: NodeJS.Timeout;

    // Reset fields for new animation run
    setTypedAi("");
    setTypedCandidate("");
    setAnimationPhase("question");
    setActiveSpeaker("ai");

    const fullQuestion = q.ai;
    const fullCandidate = q.candidate;

    let aiIndex = 0;
    // Step 1: Type AI Question
    aiInterval = setInterval(() => {
      if (isCancelled) return;
      if (aiIndex < fullQuestion.length) {
        aiIndex += 1;
        setTypedAi(fullQuestion.slice(0, aiIndex));
      } else {
        clearInterval(aiInterval);
        if (isCancelled) return;

        // Step 2: Brief pause, switch speaker to Candidate
        timer1 = setTimeout(() => {
          if (isCancelled) return;
          setAnimationPhase("answer");
          setActiveSpeaker("candidate");

          let candIndex = 0;
          candInterval = setInterval(() => {
            if (isCancelled) return;
            if (candIndex < fullCandidate.length) {
              candIndex += 1;
              setTypedCandidate(fullCandidate.slice(0, candIndex));
            } else {
              clearInterval(candInterval);
              if (isCancelled) return;

              // Step 3: Candidate finishes -> Rubric Evaluating
              timer2 = setTimeout(() => {
                if (isCancelled) return;
                setAnimationPhase("evaluating");

                // Step 4: Rubric updates to final scored state
                timer3 = setTimeout(() => {
                  if (isCancelled) return;
                  setAnimationPhase("done");

                  // Auto replay once the animation of text completes (wait 2.5s to read final scorecard)
                  autoReplayTimer = setTimeout(() => {
                    if (isCancelled) return;
                    setReplayKey((k) => k + 1);
                  }, 2500);
                }, 750);
              }, 400);
            }
          }, 20);
        }, 400);
      }
    }, 18);

    return () => {
      isCancelled = true;
      clearInterval(aiInterval);
      clearInterval(candInterval);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(autoReplayTimer);
    };
  }, [candidateIndex, questionIndex, replayKey, q]);

  // Audio speech synthesis toggle
  useEffect(() => {
    if (isPlayingAudio && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(q.ai);
      utterance.rate = 1.05;
      utterance.onend = () => {
        const candidateUtterance = new SpeechSynthesisUtterance(q.candidate);
        candidateUtterance.rate = 1.05;
        candidateUtterance.onend = () => {
          setIsPlayingAudio(false);
        };
        window.speechSynthesis.speak(candidateUtterance);
      };
      window.speechSynthesis.speak(utterance);
    } else {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }

    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isPlayingAudio, q]);

  const handleSelectCandidate = (idx: number) => {
    setIsPlayingAudio(false);
    setCandidateIndex(idx);
    setQuestionIndex(0);
    setIsApproved(false);
    setShowRubricInfo(false);
    setReplayKey((k) => k + 1);
  };

  const handleSelectQuestion = (qIdx: number) => {
    setIsPlayingAudio(false);
    setQuestionIndex(qIdx);
    setShowRubricInfo(false);
    setReplayKey((k) => k + 1);
  };

  const handleReplay = () => {
    setIsPlayingAudio(false);
    setReplayKey((k) => k + 1);
  };

  return (
    <section id="interview" className="scroll-mt-24 overflow-hidden bg-ai py-14 md:py-20" aria-labelledby="interview-title">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-12">
        {/* Left Column: Descriptive narrative & value points */}
        <div className="lg:col-span-5">
          <p className="pretitle text-teal-300">
            Flagship · Sqalible Interview
          </p>
          <h2 id="interview-title" className="mt-3 text-2xl sm:text-3xl lg:text-[34px] font-bold text-white leading-tight">
            Meet the AI that interviews live
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
            Structured first rounds at any hour, in any time zone, so your team spends its time on candidates worth meeting.
          </p>

          <dl className="mt-6 space-y-3.5">
            {interviewPoints.map((point) => (
              <div key={point.title} className="border-l-2 border-teal-400/60 pl-3.5">
                <dt className="text-xs sm:text-sm font-semibold text-white">{point.title}</dt>
                <dd className="mt-0.5 text-xs text-white/75 font-normal">{point.text}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-xs sm:text-sm font-semibold text-ai transition-transform duration-150 hover:bg-ai-light shadow-sm hover:scale-105 cursor-pointer"
            >
              <SparklesIcon size={16} strokeWidth={1.75} aria-hidden="true" />
              Try AI interview
            </button>
            <Link
              to="/platform/ai-live-interview"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/40 px-5 text-xs sm:text-sm font-medium text-white transition-colors duration-150 hover:bg-white/10"
            >
              Explore scorecard docs →
            </Link>
          </div>
        </div>

        {/* Right Column: Clean, Interactive & Animated Interview Card */}
        <div className="lg:col-span-7 flex items-center justify-center">
          <div className="w-full overflow-hidden rounded-none border border-white/20 bg-white shadow-2xl">
            {/* Top Bar with Role & Interactive Candidate Toggle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-neutral-200 px-5 py-3 bg-neutral-50/90">
              <div>
                <p className="text-xs sm:text-sm font-bold text-neutral-900">{current.role}</p>
                <p className="text-[11px] text-neutral-500">{current.candidateName} · Consented to AI assessment</p>
              </div>

              <div className="flex items-center gap-2">
                {/* Candidate Switcher */}
                <div className="flex items-center rounded-full bg-neutral-200/80 p-0.5 border border-neutral-300">
                  {interviewSimulations.map((sim, idx) => (
                    <button
                      key={sim.candidateName}
                      type="button"
                      onClick={() => handleSelectCandidate(idx)}
                      className={`px-3 py-0.5 rounded-full text-[11px] font-semibold transition-all cursor-pointer ${
                        candidateIndex === idx
                          ? "bg-white text-neutral-900 shadow-2xs"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      {sim.candidateName.split(" ")[0]}
                    </button>
                  ))}
                </div>

                <Badge tone="error">
                  <span className="h-1.5 w-1.5 rounded-full bg-error animate-pulse" aria-hidden="true" />
                  Live 12:48
                </Badge>
              </div>
            </div>

            {/* Split Video & Live Animated Transcript */}
            <div className="grid md:grid-cols-12 md:h-[440px]">
              {/* Candidate Video Preview: Strictly locked height and dimensions */}
              <div className="relative md:col-span-5 h-[270px] md:h-[440px] bg-neutral-900 overflow-hidden shrink-0">
                <img
                  src={current.avatar}
                  alt={`${current.candidateName} live video`}
                  className={`h-full w-full object-cover transition-all duration-300 ${
                    activeSpeaker === "candidate" ? "scale-[1.02] filter brightness-105" : ""
                  }`}
                />

                {/* AI Overlay Badge */}
                <div
                  className={`absolute bottom-3 right-3 flex h-14 w-22 flex-col items-center justify-center gap-0.5 rounded-none bg-ai text-white shadow-md border transition-all ${
                    activeSpeaker === "ai"
                      ? "border-teal-400 ring-2 ring-teal-400/50 shadow-teal-500/30"
                      : "border-white/10"
                  }`}
                >
                  <SparklesIcon
                    size={16}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className={activeSpeaker === "ai" ? "text-teal-300 animate-spin" : ""}
                  />
                  <span className="text-[10px] font-medium">Sqalible AI</span>
                </div>

                {/* Candidate Live Mic & Equalizer Status */}
                <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-md bg-neutral-900/90 px-2.5 py-1 text-[11px] text-white backdrop-blur-xs border border-white/10">
                  <MicIcon
                    size={13}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className={activeSpeaker === "candidate" ? "text-teal-400 animate-pulse" : "text-neutral-400"}
                  />
                  <span>
                    {current.candidateName.split(" ")[0]} {activeSpeaker === "candidate" ? "(Speaking)" : "(Listening)"}
                  </span>

                  {/* Dynamic Audio Equalizer Bars when Candidate Speaks */}
                  {activeSpeaker === "candidate" && (
                    <div className="flex items-center gap-0.5 h-3 ml-1">
                      <span className="w-0.5 bg-teal-400 rounded-full animate-[bounce_0.6s_infinite] h-2" />
                      <span className="w-0.5 bg-teal-400 rounded-full animate-[bounce_0.8s_infinite] h-3.5" />
                      <span className="w-0.5 bg-teal-400 rounded-full animate-[bounce_0.5s_infinite] h-1.5" />
                      <span className="w-0.5 bg-teal-400 rounded-full animate-[bounce_0.9s_infinite] h-3" />
                    </div>
                  )}
                </div>
              </div>

              {/* Transcript & Animated Dialogue: Dedicated 7 columns with scrollable conversation */}
              <div className="flex flex-col border-t border-neutral-200 p-4 sm:p-5 md:col-span-7 md:border-l md:border-t-0 md:h-[440px] justify-between bg-white overflow-hidden">
                {/* Transcript Header: Label, Replay, and Full-Width Question Buttons */}
                <div className="shrink-0 pb-2.5 border-b border-neutral-100 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">
                        Live Transcript
                      </p>
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
                    </div>

                    {/* Replay Button */}
                    <button
                      type="button"
                      onClick={handleReplay}
                      className="inline-flex items-center gap-1 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-700 px-2.5 py-0.5 text-[10px] font-semibold transition-all cursor-pointer shadow-2xs hover:scale-105"
                      title="Replay live typing sequence"
                    >
                      <RotateCcwIcon size={11} />
                      Replay
                    </button>
                  </div>

                  {/* Interactive Question Pill Buttons - 100% visible, fully clear, never clipped */}
                  <div className="flex items-center gap-2 w-full">
                    {current.questions.map((item, qIdx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleSelectQuestion(qIdx)}
                        className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-xs transition-all cursor-pointer text-center truncate ${
                          questionIndex === qIdx
                            ? "bg-primary text-white shadow-xs font-bold"
                            : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200/60"
                        }`}
                      >
                        {item.shortLabel}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Active Question & Answer Dialogue (Scrollable, Image stays 100% fixed) */}
                <div
                  ref={conversationRef}
                  className="flex-1 overflow-y-auto py-2.5 space-y-3 text-xs pr-1"
                >
                  {/* AI Question Box */}
                  <div className={`p-2.5 rounded-xs transition-colors ${activeSpeaker === "ai" ? "bg-teal-50/90 border border-teal-200 shadow-2xs" : "bg-neutral-50"}`}>
                    <p className="text-[11px] font-semibold text-ai flex items-center justify-between gap-1">
                      <span className="flex items-center gap-1">
                        <SparklesIcon size={11} className={activeSpeaker === "ai" ? "text-teal-600 animate-spin" : ""} />
                        Sqalible AI
                      </span>
                      {animationPhase === "question" && (
                        <span className="text-[9px] font-bold text-teal-600 uppercase tracking-wider animate-pulse">Typing...</span>
                      )}
                    </p>
                    <p className="mt-1 text-xs text-neutral-800 leading-relaxed font-normal">
                      {typedAi}
                      {animationPhase === "question" && (
                        <span className="inline-block w-1.5 h-3 ml-0.5 bg-primary animate-pulse align-middle" />
                      )}
                    </p>
                  </div>

                  {/* Candidate Answer Box */}
                  {(animationPhase === "answer" || animationPhase === "evaluating" || animationPhase === "done") && (
                    <div className={`p-2.5 rounded-xs transition-colors ${activeSpeaker === "candidate" ? "bg-emerald-50/90 border border-emerald-200 shadow-2xs" : "bg-neutral-50"}`}>
                      <p className="text-[11px] font-semibold text-neutral-700 flex items-center justify-between">
                        <span>{current.candidateName.split(" ")[0]}</span>
                        {animationPhase === "answer" && (
                          <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-wider animate-pulse">
                            Speaking...
                          </span>
                        )}
                      </p>
                      <p className="mt-1 text-xs text-neutral-800 leading-relaxed font-normal">
                        {typedCandidate}
                        {animationPhase === "answer" && (
                          <span className="inline-block w-1.5 h-3 ml-0.5 bg-emerald-600 animate-pulse align-middle" />
                        )}
                      </p>
                    </div>
                  )}
                </div>

                {/* Rubric Badge & Interactive Human Decision Sign-Off: Fixed at bottom */}
                <div className="shrink-0 pt-2.5 border-t border-neutral-100">
                  <div className="flex flex-wrap items-center gap-1.5 mb-2 min-h-[26px]">
                    {animationPhase === "evaluating" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200 px-2.5 py-0.5 text-[11px] font-semibold text-primary animate-pulse">
                        <SparklesIcon size={11} className="animate-spin text-teal-600" />
                        Scoring rubric...
                      </span>
                    ) : animationPhase === "done" ? (
                      <button
                        type="button"
                        onClick={() => setShowRubricInfo((prev) => !prev)}
                        className="cursor-pointer"
                        title="Click to view rubric explanation"
                      >
                        <Badge tone={q.scoreTone} className="hover:opacity-80 transition-opacity">
                          {q.rubric}
                        </Badge>
                      </button>
                    ) : (
                      <span className="text-[11px] text-neutral-400 italic">
                        Awaiting candidate response...
                      </span>
                    )}

                    {animationPhase === "done" && (
                      <Badge tone="info">Anti-bias · Passed</Badge>
                    )}
                  </div>

                  {showRubricInfo && animationPhase === "done" && (
                    <div className="p-2 mb-2 bg-neutral-50 border border-neutral-200 rounded-none text-[11px] text-neutral-600 leading-tight">
                      <p className="font-semibold text-neutral-800 flex items-center gap-1 mb-0.5">
                        <InfoIcon size={11} /> AI Evaluation Rationale:
                      </p>
                      {q.rubricDetail}
                    </div>
                  )}

                  {isApproved ? (
                    <div className="flex items-center justify-between p-2 rounded-none bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2Icon size={14} className="text-emerald-600" />
                        Approved by Hiring Lead
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsApproved(false)}
                        className="text-[10px] text-neutral-500 hover:text-neutral-800 underline cursor-pointer"
                      >
                        Reset
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <button
                        type="button"
                        onClick={() => setIsApproved(true)}
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-none bg-primary hover:bg-teal-700 text-white font-semibold py-1.5 px-3 text-xs transition-colors cursor-pointer shadow-2xs"
                      >
                        <ShieldCheckIcon size={13} />
                        <span>Sign-off &amp; Advance Candidate</span>
                      </button>
                      <p className="text-[10px] text-neutral-500 leading-tight">
                        Human hiring manager sign-off required before advancing.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 2-minute Sandbox Walkthrough & Scorecard Modal */}
      <AiInterviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}