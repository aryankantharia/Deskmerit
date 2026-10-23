import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CheckCircle2Icon,
  MicIcon,
  Volume2Icon,
  PlayIcon,
  PauseIcon,
  RotateCcwIcon,
  UserCheckIcon,
  CpuIcon
} from "lucide-react";

interface CandidateData {
  id: string;
  name: string;
  role: string;
  experience: string;
  score: number;
  image: string;
  questions: {
    title: string;
    aiQuestion: string;
    candidateAnswer: string;
    aiEvaluation: string;
    rubricScore: number;
    timestamp: string;
  }[];
  rubricScores: {
    category: string;
    score: number;
    verdict: string;
  }[];
}

const candidates: CandidateData[] = [
  {
    id: "ananya",
    name: "Ananya Rao",
    role: "Senior Backend Architect",
    experience: "7 Yrs · Distributed Systems",
    score: 94,
    image: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg",
    questions: [
      {
        title: "Monolith Decommissioning",
        aiQuestion: "You mentioned migrating a payments monolith to microservices at your last company. How did you draw the initial service boundary without risking transaction consistency?",
        candidateAnswer: "We started strictly with the payments ledger because it had unambiguous data ownership. Instead of a direct distributed two-phase commit, we introduced an idempotent event log on Kafka with transactional outbox pattern to guarantee at-least-once delivery.",
        aiEvaluation: "Demonstrated strong distributed systems instincts. Correctly avoided distributed locks; recognized transactional outbox pattern for ledger integrity.",
        rubricScore: 96,
        timestamp: "04:18"
      },
      {
        title: "Cache Invalidation Strategy",
        aiQuestion: "When dealing with peak flash-sales, how did you prevent cache stampedes across Redis clusters?",
        candidateAnswer: "We implemented probabilistic early expiration with jitter, coupled with a distributed mutex so only one background worker regenerates the cached payload while others serve stale-while-revalidate data.",
        aiEvaluation: "High technical accuracy. Applied industry-standard stale-while-revalidate with jitter to mitigate thundering herd spikes.",
        rubricScore: 92,
        timestamp: "11:42"
      },
      {
        title: "Cascading Failures & Circuit Breakers",
        aiQuestion: "If the downstream banking gateway experiences latency spikes, how does your service isolate the blast radius?",
        candidateAnswer: "We configured adaptive circuit breakers in Envoy with exponential backoffs and local fallback mock queues, shedding 30% of non-critical analytics requests to protect core payment transactions.",
        aiEvaluation: "Excellent failure containment architecture. Demonstrated pragmatic load shedding and isolation techniques.",
        rubricScore: 94,
        timestamp: "18:05"
      }
    ],
    rubricScores: [
      { category: "System Architecture", score: 96, verdict: "Exceptional depth in distributed data patterns" },
      { category: "Failure Mode Isolation", score: 92, verdict: "Clear understanding of circuit breakers & outboxes" },
      { category: "Communication & Tradeoffs", score: 94, verdict: "Pragmatic, concise technical decomposition" }
    ]
  },
  {
    id: "devansh",
    name: "Devansh Mehta",
    role: "Fullstack Tech Lead",
    experience: "6 Yrs · React, Node & TypeScript",
    score: 91,
    image: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
    questions: [
      {
        title: "State Hydration & Core Web Vitals",
        aiQuestion: "In high-traffic consumer portals, how do you manage client-side state hydration while keeping Largest Contentful Paint under 1.2s?",
        candidateAnswer: "We leverage partial component hydration and streaming SSR. By isolating interactive islands and deferring non-critical global stores, we avoid blocking the main JavaScript thread during boot.",
        aiEvaluation: "Strong frontend performance instincts. Good familiarity with modern React concurrent streaming and island architectures.",
        rubricScore: 93,
        timestamp: "05:10"
      },
      {
        title: "Type Safety Across Network Boundaries",
        aiQuestion: "How do you enforce end-to-end runtime type safety between backend microservices and frontend clients?",
        candidateAnswer: "We utilize code generation from unified OpenAPI and GraphQL schemas with Zod validation at the network boundary, ensuring invalid payloads are rejected before entering business hooks.",
        aiEvaluation: "Practical and robust contract validation approach. Prevents runtime anomalies in client consumption.",
        rubricScore: 90,
        timestamp: "12:35"
      },
      {
        title: "Micro-Frontend Modular Governance",
        aiQuestion: "How do you handle dependency version divergence when multiple teams deploy independent micro-frontends?",
        candidateAnswer: "We establish strict module federation shared singletons for React and our core design system tokens, accompanied by contract-driven smoke tests in GitHub Actions prior to staging rollout.",
        aiEvaluation: "Pragmatic modular coordination. Demonstrated sound balance between team autonomy and platform consistency.",
        rubricScore: 89,
        timestamp: "19:20"
      }
    ],
    rubricScores: [
      { category: "Frontend Core Engineering", score: 93, verdict: "Advanced knowledge of streaming SSR & CWV" },
      { category: "API Boundary Resilience", score: 90, verdict: "Robust schema validation and contract testing" },
      { category: "Architecture Governance", score: 89, verdict: "Solid grasp of module federation constraints" }
    ]
  },
  {
    id: "priya",
    name: "Priya Sharma",
    role: "Staff DevOps / SRE",
    experience: "8 Yrs · Kubernetes & Multi-Cloud",
    score: 95,
    image: "/d2800437-db93-453b-adc5-1022c940c3a4.jpg",
    questions: [
      {
        title: "Zero-Downtime Database Migrations",
        aiQuestion: "How do you execute backward-incompatible schema migrations in Postgres without incurring read/write downtime?",
        candidateAnswer: "We follow the expand and contract pattern over three phases: first deploy the additive column with dual-writing, backfill asynchronously in micro-batches, and only drop old columns after all services run on the new schema.",
        aiEvaluation: "Flawless database migration methodology. Fully accounts for zero-downtime constraints in high-concurrency systems.",
        rubricScore: 97,
        timestamp: "06:15"
      },
      {
        title: "Multi-Region Traffic Ingress",
        aiQuestion: "What is your strategy for automated failover across two cloud providers when global DNS latency degrades?",
        candidateAnswer: "We run active-active edge routing via Cloudflare Anycast with localized health check probes, automatically draining degraded regions and redirecting to the healthy cluster within 15 seconds.",
        aiEvaluation: "Comprehensive global ingress design. Accurate estimation of failover convergence SLAs.",
        rubricScore: 94,
        timestamp: "14:50"
      },
      {
        title: "GitOps Drift Detection",
        aiQuestion: "How do you prevent unauthorized manual configuration overrides inside production Kubernetes clusters?",
        candidateAnswer: "We enforce ArgoCD with automated self-healing. Any manual kubectl intervention triggers immediate drift alerts and is automatically reconciled back to the cryptographically signed Git commit state.",
        aiEvaluation: "Strict adherence to modern GitOps zero-trust principles. Excellent automated reconciliation model.",
        rubricScore: 95,
        timestamp: "21:30"
      }
    ],
    rubricScores: [
      { category: "Infrastructure Reliability", score: 97, verdict: "Flawless expand/contract schema migration model" },
      { category: "Multi-Cloud Traffic Ingress", score: 94, verdict: "Strong edge failover and Anycast routing architecture" },
      { category: "Zero-Trust GitOps", score: 95, verdict: "Strict automated drift reconciliation enforcement" }
    ]
  }
];

export function InteractiveInterviewDemo() {
  const [selectedCandidateId, setSelectedCandidateId] = useState("ananya");
  const [activeQuestionIdx, setActiveQuestionIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isApproved, setIsApproved] = useState(false);

  const candidate = candidates.find((c) => c.id === selectedCandidateId) || candidates[0];
  const question = candidate.questions[activeQuestionIdx] || candidate.questions[0];

  const handleSelectCandidate = (id: string) => {
    setSelectedCandidateId(id);
    setActiveQuestionIdx(0);
    setIsApproved(false);
  };

  const handleTogglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <section
      id="interview-demo"
      className="scroll-mt-20 overflow-hidden bg-[#0A1017] py-16 md:py-24 text-white border-b border-neutral-800"
      aria-labelledby="signature-demo-title"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-950/60 px-3.5 py-1 text-xs font-semibold text-teal-300 mb-3">
              <SparklesIcon size={14} className="text-teal-400" />
              <span>Signature Moment · Interactive Interview Demo</span>
            </div>
            <h2
              id="signature-demo-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight"
            >
              Meet the AI That Conducts Live Technical Interviews
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Test the live simulation below. Click through candidate roles and adaptive follow-up questions to see real-time reasoning analysis and explainable scoring rubrics.
            </p>
          </div>

          <Link
            to="/platform/ai-live-interview"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors shrink-0"
          >
            Explore AI Interview architecture <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* Candidate Switcher Bar */}
        <div className="flex flex-wrap items-center gap-3 pb-6 border-b border-neutral-800">
          <span className="text-xs font-semibold text-neutral-400 mr-1">Select Candidate Simulation:</span>
          {candidates.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => handleSelectCandidate(c.id)}
              className={`flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                selectedCandidateId === c.id
                  ? "bg-teal-500 text-neutral-950 font-bold shadow-md scale-102"
                  : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white"
              }`}
            >
              <img src={c.image} alt={c.name} className="h-5 w-5 rounded-full object-cover" />
              <span>{c.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                selectedCandidateId === c.id ? "bg-neutral-900 text-teal-300" : "bg-neutral-900 text-neutral-400"
              }`}>
                {c.score}%
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Main Stage Grid */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 items-start">
          {/* Left Column: Simulated Video Session & Live Synchronized Transcript */}
          <div className="lg:col-span-7 space-y-6">
            {/* Video Frame */}
            <div className="relative rounded-none border border-neutral-800 bg-[#070B11] shadow-2xl overflow-hidden">
              {/* Window Status Bar */}
              <div className="flex items-center justify-between border-b border-neutral-800 bg-[#0E1521] px-4 py-2.5 text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-semibold text-white">Live Session Replay: {candidate.name}</span>
                  <span className="font-mono text-neutral-400 text-[11px]">({question.timestamp} / 28:00)</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    className="flex items-center gap-1 rounded bg-neutral-800 hover:bg-neutral-700 text-teal-300 px-2 py-1 text-[11px] font-semibold transition-colors cursor-pointer"
                  >
                    {isPlaying ? <PauseIcon size={12} /> : <PlayIcon size={12} />}
                    <span>{isPlaying ? "Pause Stream" : "Resume Audio"}</span>
                  </button>
                </div>
              </div>

              {/* Video Monitor */}
              <div className="relative aspect-video w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  className="h-full w-full object-cover opacity-90 transition-opacity duration-300"
                />

                {/* AI Examiner Overlay Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 rounded-none border border-teal-500/40 bg-neutral-900/90 backdrop-blur-md px-3 py-1.5 text-xs shadow-lg">
                  <SparklesIcon size={13} className="text-teal-400 animate-spin" />
                  <div>
                    <p className="text-[10px] text-teal-300 font-bold uppercase tracking-wider">Sqalible AI Examiner</p>
                    <p className="text-[10px] text-neutral-300">Live Reasoning Assessment</p>
                  </div>
                </div>

                {/* Candidate Speech Audio Waveform Bar */}
                <div className="absolute bottom-4 left-4 right-4 rounded-none border border-white/10 bg-neutral-900/85 backdrop-blur-md px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <MicIcon size={14} className="text-teal-400" />
                    <span className="font-semibold text-white">{candidate.name}</span>
                    <span className="text-[11px] text-neutral-400">({candidate.role})</span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[12, 24, 16, 28, 20, 32, 14, 22].map((height, i) => (
                      <span
                        key={i}
                        className={`w-1 rounded-full bg-teal-400 transition-all duration-300 ${
                          isPlaying ? "animate-pulse" : "opacity-30"
                        }`}
                        style={{ height: isPlaying ? `${height}px` : "6px", animationDelay: `${i * 90}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Adaptive Question Step Buttons */}
              <div className="p-4 bg-neutral-900 border-t border-neutral-800">
                <p className="text-xs font-semibold text-neutral-400 mb-2.5">
                  Click Question to Inspect AI Turn-Taking:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {candidate.questions.map((q, idx) => (
                    <button
                      key={q.title}
                      type="button"
                      onClick={() => setActiveQuestionIdx(idx)}
                      className={`p-2.5 text-left rounded-none text-xs transition-colors cursor-pointer border ${
                        activeQuestionIdx === idx
                          ? "border-teal-400 bg-teal-950/80 text-white font-bold shadow-xs"
                          : "border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-neutral-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-teal-400">Q{idx + 1}</span>
                        <span className="text-[10px] text-neutral-500">{q.timestamp}</span>
                      </div>
                      <p className="truncate font-medium">{q.title}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Synchronized Turn-Taking Dialogue Transcript */}
            <div className="rounded-none border border-neutral-800 bg-[#0E1521] p-5 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Verbatim Transcript · Topic {activeQuestionIdx + 1}: {question.title}
                </span>
                <span className="text-[10px] text-teal-400 font-mono">Timestamped Verification</span>
              </div>

              <div className="space-y-3.5 text-xs leading-relaxed">
                {/* AI Question */}
                <div className="p-3.5 rounded-none border border-teal-500/30 bg-teal-950/40">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-teal-300 flex items-center gap-1.5">
                      <SparklesIcon size={12} /> Sqalible AI Interviewer
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">{question.timestamp}</span>
                  </div>
                  <p className="text-neutral-200">{question.aiQuestion}</p>
                </div>

                {/* Candidate Response */}
                <div className="p-3.5 rounded-none border border-neutral-800 bg-neutral-900/60">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-neutral-300 flex items-center gap-1.5">
                      <MicIcon size={12} className="text-teal-400" /> {candidate.name}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-400">+00:18</span>
                  </div>
                  <p className="text-neutral-300 font-normal">{question.candidateAnswer}</p>
                </div>

                {/* AI Reasoned Scoring Note */}
                <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-start gap-2">
                  <CheckCircle2Icon size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                  <div>
                    <span className="font-bold">Automated Evaluation: </span>
                    <span>{question.aiEvaluation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Explainable Scorecard & Tactile Human Sign-Off Gate */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-none border border-neutral-800 bg-[#0E1521] p-6 shadow-xl">
              {/* Scorecard Header */}
              <div className="flex items-start justify-between pb-5 border-b border-neutral-800">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400">
                    Candidate Dossier
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">{candidate.name}</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{candidate.experience}</p>
                </div>

                <div className="text-right">
                  <div className="text-3xl font-black text-teal-400">{candidate.score}%</div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Overall Match</span>
                </div>
              </div>

              {/* Rubric Category Breakdown */}
              <div className="mt-6 space-y-4">
                <p className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
                  Explainable Competency Rubric:
                </p>

                {candidate.rubricScores.map((rubric) => (
                  <div key={rubric.category} className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-neutral-200">{rubric.category}</span>
                      <span className="font-mono font-bold text-teal-300">{rubric.score} / 100</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-neutral-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-teal-400 transition-all duration-500"
                        style={{ width: `${rubric.score}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-tight">{rubric.verdict}</p>
                  </div>
                ))}
              </div>

              {/* Anti-Bias Guardrail Verification */}
              <div className="mt-6 p-3.5 rounded-none border border-neutral-800 bg-neutral-900/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-neutral-300">
                  <ShieldCheckIcon size={16} className="text-teal-400" />
                  <span>Anti-Bias Parity Audit</span>
                </div>
                <span className="text-emerald-400 font-semibold text-[11px]">✓ Statistical Parity Verified</span>
              </div>

              {/* Interactive Human-in-the-Loop Sign-off Gate */}
              <div className="mt-6 pt-5 border-t border-neutral-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                  <ShieldCheckIcon size={14} />
                  <span>Mandatory Human Governance Gate:</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                  The AI conducts the interview and scores the transcript against your rubric. Your human hiring leadership retains 100% authority to advance or reject.
                </p>

                {isApproved ? (
                  <div className="p-4 rounded-none bg-emerald-950/70 border border-emerald-500/40 text-xs text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-300 flex items-center gap-1.5">
                        <CheckCircle2Icon size={15} /> Approved by Lead Architect
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsApproved(false)}
                        className="text-[10px] text-neutral-400 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        <RotateCcwIcon size={10} /> Reset
                      </button>
                    </div>
                    <p className="text-neutral-300">
                      Candidate {candidate.name} advanced to On-Site Technical Architecture Panel. Automated invite dispatched.
                    </p>
                  </div>
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsApproved(true)}
                    className="w-full flex items-center justify-center gap-2 rounded-full bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold py-3 text-xs transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    <UserCheckIcon size={16} />
                    <span>Sign-off & Advance Candidate</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
