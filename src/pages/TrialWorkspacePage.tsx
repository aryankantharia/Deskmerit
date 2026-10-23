import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  SparklesIcon,
  CheckCircle2Icon,
  ShieldCheckIcon,
  UsersIcon,
  CpuIcon,
  PlayIcon,
  ClockIcon,
  ArrowRightIcon,
  RefreshCwIcon,
  PlusIcon,
  CheckIcon,
  XIcon,
  SearchIcon,
  SlidersHorizontalIcon,
  TrendingUpIcon,
  MessageSquareIcon,
  SendIcon,
  LayersIcon,
  AwardIcon,
  BriefcaseIcon,
  CalendarIcon,
  BuildingIcon,
  MicIcon,
  ExternalLinkIcon,
  HelpCircleIcon,
  ChevronRightIcon
} from "lucide-react";

type Candidate = {
  id: string;
  name: string;
  role: string;
  score: number;
  status: "Inbound" | "Screening" | "Interview" | "Review" | "Offer";
  recommendation: "Strong Hire" | "Hire" | "Review" | "Decline";
  avatar: string;
  experience: string;
  skills: string[];
  notes: string;
  interview: {
    videoThumbnail: string;
    duration: string;
    date: string;
    transcript: { speaker: string; text: string; time: string }[];
    rubric: { category: string; score: number; comment: string }[];
  };
};

const INITIAL_CANDIDATES: Candidate[] = [
  {
    id: "cand-1",
    name: "Ananya Rao",
    role: "Senior Backend Engineer",
    score: 91,
    status: "Review",
    recommendation: "Strong Hire",
    avatar: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg",
    experience: "6 years · FinTech & Distributed Systems",
    skills: ["Python", "Go", "PostgreSQL", "Kafka", "Docker"],
    notes: "Demonstrated exceptional grasp of distributed cache consistency and idempotency under peak write volume.",
    interview: {
      videoThumbnail: "/54a9838b-f0a5-40b4-bbb2-937eca44d3cf.jpg",
      duration: "28m 42s",
      date: "Today, 10:15 AM",
      transcript: [
        {
          speaker: "Sqalible AI",
          time: "00:15",
          text: "Welcome Ananya. Let's begin by discussing how you approach cache stampede prevention in high-concurrency payment services."
        },
        {
          speaker: "Ananya Rao",
          time: "00:42",
          text: "I typically use a combination of distributed mutual exclusion locks with Redis redlock or probabilistic early expiration (XFetch algorithm) so only one worker recalculates the stale cache entry."
        },
        {
          speaker: "Sqalible AI",
          time: "01:25",
          text: "Excellent. How would you handle node partition or split-brain risk during that distributed lock acquisition?"
        },
        {
          speaker: "Ananya Rao",
          time: "01:58",
          text: "We enforce fencing tokens with monotonically increasing sequence IDs. Any database write validates the token before committing, discarding stale lock-holders."
        }
      ],
      rubric: [
        { category: "System Architecture", score: 95, comment: "Mastery of distributed state, CAP tradeoffs, and zero-downtime migrations." },
        { category: "Algorithmic Efficiency", score: 90, comment: "Accurately assessed Big-O time and memory bottlenecks in live coding task." },
        { category: "Edge-Case Resilience", score: 88, comment: "Proactively brought up network partitions and database connection pooling." },
        { category: "Communication & Clarity", score: 92, comment: "Structured thoughts logically before writing code. Transparent about tradeoffs." }
      ]
    }
  },
  {
    id: "cand-2",
    name: "Rahul Verma",
    role: "Full Stack Engineer",
    score: 79,
    status: "Interview",
    recommendation: "Review",
    avatar: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
    experience: "4 years · SaaS & Frontend Architecture",
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "TailwindCSS"],
    notes: "Solid component architecture and state management; needs deeper evaluation on SQL index optimization.",
    interview: {
      videoThumbnail: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
      duration: "24m 10s",
      date: "Yesterday, 3:30 PM",
      transcript: [
        {
          speaker: "Sqalible AI",
          time: "00:10",
          text: "Hello Rahul. Could you walk through your mental model for optimizing large re-renders in complex React dashboard trees?"
        },
        {
          speaker: "Rahul Verma",
          time: "00:35",
          text: "I push state down as close to the leaves as possible. Where context is unavoidable, I split read/write contexts and leverage memoized selectors."
        },
        {
          speaker: "Sqalible AI",
          time: "01:10",
          text: "When a backend GraphQL query returns 5,000 rows, how do you handle client virtualization?"
        },
        {
          speaker: "Rahul Verma",
          time: "01:40",
          text: "We implement dynamic windowing with react-window or tanstack virtual, buffering just 5 items above and below the viewport."
        }
      ],
      rubric: [
        { category: "System Architecture", score: 76, comment: "Good frontend mastery; weaker on multi-tenant database partitioning." },
        { category: "Algorithmic Efficiency", score: 80, comment: "Clean tree traversal; slight oversight on memory leakage during hot renders." },
        { category: "Edge-Case Resilience", score: 78, comment: "Handled network disconnections cleanly with optimistic UI rollbacks." },
        { category: "Communication & Clarity", score: 82, comment: "Warm, collaborative communicator. Answered follow-up probes directly." }
      ]
    }
  },
  {
    id: "cand-3",
    name: "Maya Lin",
    role: "Staff Platform Architect",
    score: 95,
    status: "Offer",
    recommendation: "Strong Hire",
    avatar: "/f0e1f729-1667-4299-8cf9-c68e7ec89f0a.jpg",
    experience: "9 years · Cloud Infrastructure & Kubernetes",
    skills: ["Kubernetes", "Terraform", "Go", "AWS", "Observability"],
    notes: "Outstanding candidate. Designed enterprise multi-cluster service mesh with zero-trust mTLS in real time.",
    interview: {
      videoThumbnail: "/f0e1f729-1667-4299-8cf9-c68e7ec89f0a.jpg",
      duration: "32m 15s",
      date: "2 days ago",
      transcript: [
        {
          speaker: "Sqalible AI",
          time: "00:20",
          text: "Maya, welcome. How would you architect multi-region disaster recovery for an active-active Kubernetes infrastructure?"
        },
        {
          speaker: "Maya Lin",
          time: "00:55",
          text: "We decouple stateless workloads with global Anycast routing, and back state with CockroachDB or Amazon Aurora Global with sub-second replication latency."
        }
      ],
      rubric: [
        { category: "System Architecture", score: 98, comment: "Top 1% percentile in cloud architecture and failure containment." },
        { category: "Algorithmic Efficiency", score: 92, comment: "Engineered elegant Go worker pool with channel backpressure." },
        { category: "Edge-Case Resilience", score: 96, comment: "Anticipated cross-region clock drift and network split scenarios." },
        { category: "Communication & Clarity", score: 94, comment: "Executive-level clarity. Concise diagrams and precise technical terminology." }
      ]
    }
  },
  {
    id: "cand-4",
    name: "David Miller",
    role: "DevOps Engineer",
    score: 68,
    status: "Screening",
    recommendation: "Review",
    avatar: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
    experience: "3 years · CI/CD & Linux Administration",
    skills: ["Docker", "GitHub Actions", "Linux", "Bash", "Python"],
    notes: "Basic CI/CD automation skills present; struggled with immutable infrastructure and secret management policies.",
    interview: {
      videoThumbnail: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
      duration: "19m 50s",
      date: "3 days ago",
      transcript: [
        {
          speaker: "Sqalible AI",
          time: "00:15",
          text: "David, how do you inject production secrets securely into continuous deployment runners without leaking to build logs?"
        },
        {
          speaker: "David Miller",
          time: "00:45",
          text: "Usually we use environment variables in the runner settings or read from a local configuration file on the server."
        }
      ],
      rubric: [
        { category: "System Architecture", score: 65, comment: "Did not mention Vault or OIDC token exchange for temporary credentials." },
        { category: "Algorithmic Efficiency", score: 70, comment: "Basic scripting ability; unoptimized pipeline build caching." },
        { category: "Edge-Case Resilience", score: 66, comment: "Needs deeper training on secret rotation and incident response." },
        { category: "Communication & Clarity", score: 72, comment: "Honest about knowledge boundaries; receptive to constructive guidance." }
      ]
    }
  }
];

const SAMPLE_EMPLOYEES = [
  { id: 1, name: "Arjun Kapoor", role: "VP of Engineering", dept: "Engineering", status: "Active", leaveBalance: "16 days", tenure: "3.2 yrs" },
  { id: 2, name: "Sneha Nair", role: "Lead Product Designer", dept: "Product", status: "Active", leaveBalance: "12 days", tenure: "2.1 yrs" },
  { id: 3, name: "Dev Patel", role: "Senior Backend Engineer", dept: "Engineering", status: "On Leave", leaveBalance: "8 days", tenure: "1.8 yrs" },
  { id: 4, name: "Sophia Zhang", role: "HR Operations Lead", dept: "People", status: "Active", leaveBalance: "14 days", tenure: "2.5 yrs" },
  { id: 5, name: "Karan Johar", role: "Compliance & Payroll Specialist", dept: "Finance", status: "Active", leaveBalance: "19 days", tenure: "4.0 yrs" },
  { id: 6, name: "Elena Rostova", role: "Staff Data Scientist", dept: "Engineering", status: "Remote", leaveBalance: "10 days", tenure: "1.2 yrs" }
];

export function TrialWorkspacePage() {
  const [searchParams] = useSearchParams();
  const workspaceName = searchParams.get("workspace") || "Acme Technologies";

  // Check for scheduled onboarding session from the signup scheduler
  const [scheduledSlot, setScheduledSlot] = useState<{
    date: string;
    time: string;
    timezone: string;
    host: string;
    link: string;
  } | null>(() => {
    try {
      const stored = sessionStorage.getItem("sqalible_trial_session");
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.scheduledOnboarding || null;
      }
    } catch (e) {
      // ignore
    }
    return null;
  });

  const [activeTab, setActiveTab] = useState<"studio" | "ats" | "checklist" | "hrms" | "copilot">("studio");
  const [candidates, setCandidates] = useState<Candidate[]>(INITIAL_CANDIDATES);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate>(INITIAL_CANDIDATES[0]);
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);

  const [pendingLeaves, setPendingLeaves] = useState([
    { id: 1, name: "Dev Patel", dates: "Nov 3 - Nov 5 (3 days)", type: "Casual Leave", reason: "Family celebration" },
    { id: 2, name: "Sophia Zhang", dates: "Nov 12 - Nov 13 (2 days)", type: "Sick Leave", reason: "Medical appointment" }
  ]);

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const [checklist, setChecklist] = useState({
    interviewTested: true,
    rubricInspected: true,
    candidateAdvanced: false,
    copilotQueried: false
  });

  const [copilotInput, setCopilotInput] = useState("");
  const [copilotMessages, setCopilotMessages] = useState<
    { sender: "user" | "ai"; text: string; meta?: string }[]
  >([
    {
      sender: "ai",
      text: `Welcome to your Sqalible Trial Sandbox! I am your AI Workforce Copilot. You can ask me anything about candidate scoring, leave policies, statutory gratuity, or headcount models for ${workspaceName}.`,
      meta: "Role: Workspace Admin · RBAC Verified"
    }
  ]);

  const handleAdvanceCandidate = (candId: string) => {
    setCandidates((prev) =>
      prev.map((c) => (c.id === candId ? { ...c, status: "Offer" as const, recommendation: "Strong Hire" as const } : c))
    );
    setSelectedCandidate((prev) => ({ ...prev, status: "Offer", recommendation: "Strong Hire" }));
    setChecklist((prev) => ({ ...prev, candidateAdvanced: true }));
    showToast(`Candidate ${selectedCandidate.name} advanced to "Offer Extended" with Human-in-the-Loop sign-off!`);
  };

  const [showSimulateModal, setShowSimulateModal] = useState(false);
  const [newCandName, setNewCandName] = useState("");
  const [newCandRole, setNewCandRole] = useState("Frontend Architect");
  const [newCandLevel, setNewCandLevel] = useState("Senior (5-8 yrs)");
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulateNewInterview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCandName.trim()) return;

    setIsSimulating(true);
    setTimeout(() => {
      const generatedCandidate: Candidate = {
        id: `cand-${Date.now()}`,
        name: newCandName.trim(),
        role: newCandRole,
        score: Math.floor(Math.random() * 15) + 82,
        status: "Review",
        recommendation: "Strong Hire",
        avatar: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
        experience: `${newCandLevel} · Verified by Sqalible AI`,
        skills: ["System Design", "Cloud Infrastructure", "Clean Code", "Communication"],
        notes: `Simulated live interview completed. The candidate demonstrated excellent problem-solving velocity and adhered to strict architectural constraints.`,
        interview: {
          videoThumbnail: "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg",
          duration: "26m 12s",
          date: "Just now",
          transcript: [
            {
              speaker: "Sqalible AI",
              time: "00:10",
              text: `Welcome ${newCandName}. Let's test your approach to designing resilient APIs for high-throughput clients.`
            },
            {
              speaker: newCandName,
              time: "00:35",
              text: "I start by establishing strict contract boundaries with OpenAPI, enforcing rate-limiting via token-bucket, and implementing circuit breakers on downstream dependencies."
            },
            {
              speaker: "Sqalible AI",
              time: "01:15",
              text: "What telemetry signals do you inspect when determining whether to trip a circuit breaker?"
            },
            {
              speaker: newCandName,
              time: "01:45",
              text: "Error rate thresholds (e.g. >5% 5xx over a 10s sliding window) combined with p99 latency spikes."
            }
          ],
          rubric: [
            { category: "System Architecture", score: 92, comment: "High structural competency and understanding of distributed failure domains." },
            { category: "Algorithmic Efficiency", score: 89, comment: "Analyzed memory complexity and backpressure management accurately." },
            { category: "Edge-Case Resilience", score: 94, comment: "Brought up graceful degradation and fallback cache mechanisms." },
            { category: "Communication & Clarity", score: 91, comment: "Articulate, confident, and direct in answering technical inquiries." }
          ]
        }
      };

      setCandidates((prev) => [generatedCandidate, ...prev]);
      setSelectedCandidate(generatedCandidate);
      setIsSimulating(false);
      setShowSimulateModal(false);
      setNewCandName("");
      showToast(`AI Live Interview completed for ${generatedCandidate.name}! AI Score: ${generatedCandidate.score}%`);
    }, 1200);
  };

  const handleCopilotSend = (promptText?: string) => {
    const q = promptText || copilotInput;
    if (!q.trim()) return;

    const userMessage = { sender: "user" as const, text: q };
    setCopilotMessages((prev) => [...prev, userMessage]);
    setCopilotInput("");
    setChecklist((prev) => ({ ...prev, copilotQueried: true }));

    setTimeout(() => {
      let reply = "";
      const lower = q.toLowerCase();

      if (lower.includes("gratuity")) {
        reply = `Statutory Gratuity calculation under Section 4(2) of the Indian Payment of Gratuity Act, 1972:
Formula: (15 × Last Drawn Basic Salary × Completed Years of Service) / 26
Example for ₹80,000 basic salary with 6 completed years:
(15 × 80,000 × 6) / 26 = ₹2,76,923.
*Note: Gratuity is exempt up to ₹20,00,000 under current statutory guidelines.*`;
      } else if (lower.includes("leave") || lower.includes("carry")) {
        reply = `Leave Carryover Policy for ${workspaceName} (2026-2027 Guidelines):
- Maximum Annual Leave carryover: Up to 8 days.
- Any balance above 8 days will lapse on 31 December unless encashed or approved by Department Head.
- Casual & Sick leaves do not carry forward.`;
      } else if (lower.includes("attrition") || lower.includes("burnout")) {
        reply = `Attrition & Burnout Telemetry for ${workspaceName}:
- Low overall risk across 24 active employees (94% retention stability).
- 1 Watchlist Flag: Finance team logged 18% consecutive overtime during month-end statutory filings. Suggested action: redistributing quarterly audit workloads.`;
      } else {
        reply = `Based on your ${workspaceName} trial database: The employee lifecycle engine reports 18 active applicants, 4 candidates undergoing live AI interview assessment, and 100% compliance across biometric attendance records. All actions enforce human sign-off before execution.`;
      }

      setCopilotMessages((prev) => [
        ...prev,
        { sender: "ai", text: reply, meta: "Sqalible AI Workforce Engine · Tenant Shard #4109" }
      ]);
    }, 700);
  };

  const handleResetData = () => {
    setCandidates(INITIAL_CANDIDATES);
    setSelectedCandidate(INITIAL_CANDIDATES[0]);
    setPendingLeaves([
      { id: 1, name: "Dev Patel", dates: "Nov 3 - Nov 5 (3 days)", type: "Casual Leave", reason: "Family celebration" },
      { id: 2, name: "Sophia Zhang", dates: "Nov 12 - Nov 13 (2 days)", type: "Sick Leave", reason: "Medical appointment" }
    ]);
    showToast("Sandbox data reset to clean initial state.");
  };

  const completedStepsCount = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] font-sans text-neutral-900 flex flex-col selection:bg-teal-500 selection:text-white">
      {/* =========================================================================
          TOP TRIAL STATUS BAR & WORKSPACE HEADER
          ========================================================================= */}
      <header className="sticky top-0 z-40 bg-[#080D14] text-white border-b border-neutral-800 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left: Brand + Sandbox Pill */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-2 group">
                <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-teal-300 transition-colors">
                  Sqalible<span className="text-teal-400">.</span>
                </span>
              </Link>

              <div className="hidden sm:flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-950/60 px-3.5 py-1 text-xs">
                <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="font-semibold text-teal-300">14-Day Free Trial</span>
                <span className="text-neutral-500">|</span>
                <span className="text-neutral-300 font-mono text-[11px]">{workspaceName}</span>
              </div>
            </div>

            {/* Right: Quick Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setShowSimulateModal(true)}
                className="inline-flex items-center gap-1.5 rounded-full bg-primary hover:bg-teal-700 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all hover:scale-105 cursor-pointer"
              >
                <PlusIcon size={14} />
                <span>Simulate AI Interview</span>
              </button>

              <button
                type="button"
                onClick={handleResetData}
                title="Reset demo data to initial state"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-neutral-700 bg-neutral-900 px-3.5 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <RefreshCwIcon size={13} />
                <span>Reset Data</span>
              </button>

              <Link
                to="/pricing"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-950/40 px-3.5 py-2 text-xs font-semibold text-amber-300 hover:bg-amber-900/60 transition-colors"
              >
                <AwardIcon size={13} />
                <span>Upgrade Plan</span>
              </Link>

              <Link
                to="/"
                className="inline-flex items-center gap-1 rounded-full border border-neutral-700 px-3 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                <span>Exit</span>
                <ExternalLinkIcon size={12} />
              </Link>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="flex space-x-1 overflow-x-auto border-t border-neutral-800 pt-1 pb-2">
            {[
              { id: "studio", label: "AI Interview Studio", icon: CpuIcon, badge: "Live Test" },
              { id: "ats", label: "Candidate Pipeline (ATS)", icon: BriefcaseIcon, count: candidates.length },
              { id: "checklist", label: "Trial Checklist & Overview", icon: CheckCircle2Icon, badge: `${completedStepsCount}/4` },
              { id: "hrms", label: "Core HR & Leaves", icon: UsersIcon, count: pendingLeaves.length > 0 ? `${pendingLeaves.length} Pending` : undefined },
              { id: "copilot", label: "AI Policy Copilot", icon: SparklesIcon }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 whitespace-nowrap px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "border-b-2 border-teal-400 text-teal-300 bg-white/5"
                      : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/60"
                  }`}
                >
                  <Icon size={14} className={isActive ? "text-teal-400" : "text-neutral-400"} />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className="rounded-full bg-teal-900/60 border border-teal-500/30 px-1.5 py-0.2 text-[10px] font-bold text-teal-300">
                      {tab.badge}
                    </span>
                  )}
                  {tab.count && (
                    <span className="rounded-full bg-neutral-800 px-1.5 py-0.2 text-[10px] text-neutral-300">
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Confirmed Onboarding Booking Banner */}
      {scheduledSlot && (
        <div className="bg-teal-950 border-b border-teal-800/80 text-white px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs shadow-inner">
          <div className="flex items-center gap-2.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs shrink-0">
              ✓
            </span>
            <span>
              <strong className="text-teal-300">15-Min Onboarding Confirmed:</strong> {scheduledSlot.date} at {scheduledSlot.time} ({scheduledSlot.timezone}) with {scheduledSlot.host}.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={scheduledSlot.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-teal-300 hover:text-white underline text-[11px]"
            >
              Google Meet Link <ExternalLinkIcon size={11} />
            </a>
            <button
              type="button"
              onClick={() => setScheduledSlot(null)}
              className="text-neutral-400 hover:text-white text-[11px] cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-none border border-teal-500 bg-neutral-900 text-white px-5 py-3 shadow-2xl animate-in slide-in-from-bottom-4">
          <CheckCircle2Icon size={18} className="text-teal-400 shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Workspace Body */}
      <main className="flex-1 mx-auto w-full max-w-7xl p-6 sm:p-8">
        {/* =========================================================================
            TAB 1: AI LIVE INTERVIEW STUDIO (FLAGSHIP INTERACTION)
            ========================================================================= */}
        {activeTab === "studio" && (
          <div className="space-y-6">
            {/* Header info bar (Architectural Header matching ContactPage) */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-none border border-neutral-200 bg-white p-6 md:p-8 shadow-xs">
              <div>
                <p className="pretitle text-primary">Intelligent Evaluation Engine</p>
                <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  AI Live Interview Studio & Scorecard
                </h1>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-2xl">
                  Autonomous avatar interview simulation with dynamic turn-taking, coding approach evaluation, and 100% human-in-the-loop decision sign-off.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowSimulateModal(true)}
                  className="inline-flex h-10 items-center gap-2 rounded-full bg-primary hover:bg-teal-700 px-5 text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
                >
                  <PlusIcon size={14} />
                  Simulate New Interview
                </button>
              </div>
            </div>

            {/* Candidate Selector Bar */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {candidates.map((cand) => {
                const isSelected = cand.id === selectedCandidate.id;
                return (
                  <button
                    key={cand.id}
                    type="button"
                    onClick={() => {
                      setSelectedCandidate(cand);
                      setSelectedQuestionIndex(0);
                    }}
                    className={`p-5 text-left rounded-none border transition-all cursor-pointer ${
                      isSelected
                        ? "border-primary bg-white shadow-md border-t-4 border-t-primary"
                        : "border-neutral-200 bg-white hover:border-neutral-300 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={cand.avatar}
                          alt={cand.name}
                          className="h-10 w-10 rounded-full object-cover border border-neutral-200"
                        />
                        <div>
                          <p className="text-sm font-bold text-neutral-900">{cand.name}</p>
                          <p className="text-xs text-neutral-500 truncate max-w-[130px]">{cand.role}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`inline-block text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                            cand.score >= 90
                              ? "bg-emerald-100 text-emerald-800"
                              : cand.score >= 75
                              ? "bg-teal-100 text-teal-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {cand.score}%
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs text-neutral-500 border-t border-neutral-100 pt-3">
                      <span>Status: <strong className="text-neutral-800">{cand.status}</strong></span>
                      <span className="font-semibold text-primary">{cand.recommendation}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive Interview Viewer Grid */}
            <div className="grid gap-6 lg:grid-cols-12 items-start">
              {/* Left Column: Video Simulation & Live Transcript */}
              <div className="lg:col-span-7 space-y-6">
                {/* Simulated Video Frame */}
                <div className="relative rounded-none overflow-hidden bg-[#0A0F1D] border border-neutral-800 shadow-xl">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between bg-neutral-900/90 px-5 py-3 border-b border-neutral-800 text-xs text-white">
                    <div className="flex items-center gap-2.5">
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="font-semibold">{selectedCandidate.name} · Session Replay</span>
                      <span className="text-neutral-400">({selectedCandidate.interview.duration})</span>
                    </div>
                    <span className="rounded-full bg-teal-950 text-teal-300 border border-teal-500/40 px-3 py-0.5 text-[10px] font-semibold">
                      AI Proctor: Active
                    </span>
                  </div>

                  {/* Video Screen */}
                  <div className="relative aspect-video w-full bg-neutral-950 flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedCandidate.interview.videoThumbnail}
                      alt={selectedCandidate.name}
                      className="h-full w-full object-cover opacity-85"
                    />

                    {/* AI Avatar HUD Overlay */}
                    <div className="absolute top-4 right-4 flex items-center gap-2.5 rounded-none border border-teal-400/40 bg-neutral-900/90 backdrop-blur-md px-3.5 py-2 text-xs text-white shadow-lg">
                      <SparklesIcon size={14} className="text-teal-400 animate-spin" />
                      <div>
                        <p className="text-[10px] text-teal-300 font-bold uppercase tracking-wider">Sqalible AI Examiner</p>
                        <p className="text-[10px] text-neutral-300">Evaluating reasoning depth</p>
                      </div>
                    </div>

                    {/* Live Audio Visualizer bar at bottom */}
                    <div className="absolute bottom-4 left-4 right-4 rounded-none border border-white/10 bg-neutral-900/80 backdrop-blur-md p-3.5 text-white flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <MicIcon size={14} className="text-teal-400" />
                        <span className="text-xs font-medium">{selectedCandidate.name} (Answering)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="h-3 w-1 bg-teal-400 rounded-full animate-pulse" />
                        <span className="h-5 w-1 bg-teal-400 rounded-full animate-pulse delay-75" />
                        <span className="h-2 w-1 bg-teal-400 rounded-full animate-pulse delay-150" />
                        <span className="h-4 w-1 bg-teal-400 rounded-full animate-pulse delay-100" />
                        <span className="h-6 w-1 bg-teal-400 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Video Scrubber & Questions Stepper */}
                  <div className="p-4 bg-neutral-900 text-white border-t border-neutral-800">
                    <p className="text-xs font-semibold text-neutral-400 mb-2">Rubric Competencies Evaluated (Click to Navigate):</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {selectedCandidate.interview.rubric.map((r, idx) => (
                        <button
                          key={r.category}
                          type="button"
                          onClick={() => setSelectedQuestionIndex(idx)}
                          className={`p-2.5 text-left rounded-none text-xs transition-colors cursor-pointer ${
                            selectedQuestionIndex === idx
                              ? "bg-teal-600 text-white font-bold"
                              : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                          }`}
                        >
                          <p className="text-[10px] text-teal-200">Topic {idx + 1}</p>
                          <p className="truncate font-medium">{r.category}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Synchronized Transcript */}
                <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-xs">
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                    <div>
                      <p className="pretitle text-primary">Audit Log</p>
                      <h3 className="text-base font-bold text-neutral-900">Verbatim Turn-Taking Transcript</h3>
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">Timestamped & Searchable</span>
                  </div>

                  <div className="mt-4 space-y-3.5 max-h-[260px] overflow-y-auto pr-2">
                    {selectedCandidate.interview.transcript.map((line, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-none border text-xs leading-relaxed ${
                          line.speaker === "Sqalible AI"
                            ? "bg-teal-50/60 border-teal-200/80 text-neutral-800"
                            : "bg-neutral-50 border-neutral-200 text-neutral-900"
                        }`}
                      >
                        <div className="flex items-center justify-between font-bold mb-1">
                          <span className={line.speaker === "Sqalible AI" ? "text-primary" : "text-neutral-700"}>
                            {line.speaker}
                          </span>
                          <span className="text-[10px] font-normal text-neutral-400 font-mono">{line.time}</span>
                        </div>
                        <p>{line.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Explainable Scorecard & Human Action */}
              <div className="lg:col-span-5 space-y-6">
                <div className="rounded-none border border-neutral-200 bg-white p-6 md:p-8 shadow-xs">
                  <div className="flex items-center justify-between pb-5 border-b border-neutral-100">
                    <div>
                      <span className="pretitle text-primary">Candidate Dossier</span>
                      <h2 className="text-xl font-bold text-neutral-900">{selectedCandidate.name}</h2>
                      <p className="text-xs text-neutral-500 mt-0.5">{selectedCandidate.experience}</p>
                    </div>

                    <div className="text-center">
                      <div className="text-3xl font-extrabold text-primary">{selectedCandidate.score}%</div>
                      <span className="text-[10px] font-semibold text-neutral-500 uppercase tracking-wider">AI Score</span>
                    </div>
                  </div>

                  {/* Skills tags */}
                  <div className="mt-5">
                    <p className="text-xs font-semibold text-neutral-700 mb-2">Evaluated Competencies:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCandidate.skills.map((s) => (
                        <span key={s} className="rounded-full bg-neutral-100 border border-neutral-200 px-3 py-1 text-xs text-neutral-700 font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Rubric Category Bars */}
                  <div className="mt-6 space-y-3.5 pt-5 border-t border-neutral-100">
                    <p className="text-xs font-bold text-neutral-900">Explainable Rubric Breakdown:</p>
                    {selectedCandidate.interview.rubric.map((r) => (
                      <div key={r.category} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-neutral-700">{r.category}</span>
                          <span className="font-bold text-neutral-900">{r.score}/100</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              r.score >= 90 ? "bg-emerald-500" : r.score >= 75 ? "bg-teal-600" : "bg-amber-500"
                            }`}
                            style={{ width: `${r.score}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-neutral-500 leading-tight">{r.comment}</p>
                      </div>
                    ))}
                  </div>

                  {/* AI Recommendation Summary */}
                  <div className="mt-6 rounded-none border border-teal-200 bg-teal-50/50 p-4 text-xs text-neutral-700">
                    <p className="font-bold text-primary flex items-center gap-1.5">
                      <SparklesIcon size={14} />
                      AI Synthesized Recommendation:
                    </p>
                    <p className="mt-1.5 leading-relaxed">{selectedCandidate.notes}</p>
                  </div>

                  {/* Human Sign-off Controls */}
                  <div className="mt-6 pt-5 border-t border-neutral-100 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-neutral-600">
                      <ShieldCheckIcon size={16} className="text-primary shrink-0" />
                      <span>
                        <strong>Human-in-the-Loop Policy:</strong> A hiring manager must confirm all advancements.
                      </span>
                    </div>

                    <div className="grid gap-2.5 sm:grid-cols-2 pt-2">
                      <button
                        type="button"
                        onClick={() => handleAdvanceCandidate(selectedCandidate.id)}
                        className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-primary hover:bg-teal-700 text-xs font-semibold text-white shadow-xs transition-colors cursor-pointer"
                      >
                        <CheckCircle2Icon size={15} />
                        Advance to Offer
                      </button>

                      <button
                        type="button"
                        onClick={() => showToast(`Requested Human Senior Panel for ${selectedCandidate.name}.`)}
                        className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-neutral-300 bg-white hover:bg-neutral-50 text-xs font-semibold text-neutral-700 transition-colors cursor-pointer"
                      >
                        Request Human Panel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 2: ATS CANDIDATE PIPELINE (KANBAN BOARD)
            ========================================================================= */}
        {activeTab === "ats" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-none border border-neutral-200 bg-white p-6 md:p-8 shadow-xs">
              <div>
                <p className="pretitle text-primary">Candidate Operations</p>
                <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  Applicant Tracking Pipeline (ATS)
                </h1>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-2xl">
                  Inspect candidate progression from inbound sourcing to AI screening, live avatar assessment, and final offer letters.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowSimulateModal(true)}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-xs font-semibold text-white hover:bg-teal-700 transition-colors shrink-0 cursor-pointer"
              >
                <PlusIcon size={14} />
                Add / Simulate Candidate
              </button>
            </div>

            {/* Kanban Columns */}
            <div className="grid gap-4 md:grid-cols-5 items-start">
              {(["Inbound", "Screening", "Interview", "Review", "Offer"] as const).map((stage) => {
                const stageCandidates = candidates.filter((c) => c.status === stage);
                return (
                  <div key={stage} className="rounded-none border border-neutral-200 bg-white p-4 shadow-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                      <span className="text-xs font-bold text-neutral-800 uppercase tracking-wider">{stage}</span>
                      <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-bold text-neutral-600">
                        {stageCandidates.length}
                      </span>
                    </div>

                    <div className="mt-3 space-y-3 min-h-[340px]">
                      {stageCandidates.map((c) => (
                        <div
                          key={c.id}
                          onClick={() => {
                            setSelectedCandidate(c);
                            setActiveTab("studio");
                          }}
                          className="cursor-pointer rounded-none border border-neutral-200 bg-white p-4 hover:border-primary hover:shadow-md transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <img src={c.avatar} alt={c.name} className="h-8 w-8 rounded-full object-cover border border-neutral-200" />
                            <div className="truncate">
                              <p className="text-xs font-bold text-neutral-900 group-hover:text-primary transition-colors">
                                {c.name}
                              </p>
                              <p className="text-[11px] text-neutral-500 truncate">{c.role}</p>
                            </div>
                          </div>

                          <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-500 border-t border-neutral-100 pt-2">
                            <span className="font-extrabold text-primary">{c.score}% Score</span>
                            <span className="text-neutral-400 group-hover:text-primary transition-colors">Dossier →</span>
                          </div>
                        </div>
                      ))}

                      {stageCandidates.length === 0 && (
                        <div className="py-10 text-center text-xs text-neutral-400 border border-dashed border-neutral-200">
                          No candidates in {stage}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB 3: TRIAL CHECKLIST & OVERVIEW
            ========================================================================= */}
        {activeTab === "checklist" && (
          <div className="space-y-6">
            <div className="rounded-none border border-neutral-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
                <div>
                  <p className="pretitle text-primary">Onboarding Checklist</p>
                  <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                    Your 14-Day Evaluation Progress
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                    Complete these key verification steps to test the full power of Sqalible before moving to production.
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-3xl font-extrabold text-primary">{completedStepsCount} / 4</p>
                  <p className="text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">Steps Verified</p>
                </div>
              </div>

              {/* Checklist Cards */}
              <div className="mt-6 space-y-4">
                <div className="flex items-start justify-between gap-4 rounded-none border border-neutral-200 bg-neutral-50/50 p-5">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckIcon size={14} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">
                        1. Test the AI Live Interview Studio
                      </p>
                      <p className="text-xs text-neutral-600 mt-1">
                        Inspect turn-taking transcript, video avatar playback, and explainable rubric scoring.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("studio")}
                    className="text-xs font-semibold text-primary hover:underline shrink-0 cursor-pointer"
                  >
                    Open Studio →
                  </button>
                </div>

                <div className="flex items-start justify-between gap-4 rounded-none border border-neutral-200 bg-neutral-50/50 p-5">
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        checklist.candidateAdvanced ? "bg-emerald-100 text-emerald-700" : "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      {checklist.candidateAdvanced ? <CheckIcon size={14} /> : "2"}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">
                        2. Advance a Candidate with Human-in-the-Loop Sign-off
                      </p>
                      <p className="text-xs text-neutral-600 mt-1">
                        Review Ananya Rao's score and click "Advance to Offer" to test recruiter decision authority.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("studio");
                      handleAdvanceCandidate(selectedCandidate.id);
                    }}
                    className="text-xs font-semibold text-primary hover:underline shrink-0 cursor-pointer"
                  >
                    {checklist.candidateAdvanced ? "Completed ✓" : "Test Now →"}
                  </button>
                </div>

                <div className="flex items-start justify-between gap-4 rounded-none border border-neutral-200 bg-neutral-50/50 p-5">
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckIcon size={14} />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">
                        3. Review Core HRMS & Pending Leave Approvals
                      </p>
                      <p className="text-xs text-neutral-600 mt-1">
                        Inspect organizational roster, biometric attendance status, and approve a sample PTO request.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("hrms")}
                    className="text-xs font-semibold text-primary hover:underline shrink-0 cursor-pointer"
                  >
                    View HRMS →
                  </button>
                </div>

                <div className="flex items-start justify-between gap-4 rounded-none border border-neutral-200 bg-neutral-50/50 p-5">
                  <div className="flex items-start gap-3.5">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                        checklist.copilotQueried ? "bg-emerald-100 text-emerald-700" : "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      {checklist.copilotQueried ? <CheckIcon size={14} /> : "4"}
                    </span>
                    <div>
                      <p className="text-sm font-bold text-neutral-900">
                        4. Query the Permission-Aware AI HR Policy Copilot
                      </p>
                      <p className="text-xs text-neutral-600 mt-1">
                        Ask about statutory gratuity formula or leave carryover rules under strict tenant isolation.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab("copilot")}
                    className="text-xs font-semibold text-primary hover:underline shrink-0 cursor-pointer"
                  >
                    {checklist.copilotQueried ? "Completed ✓" : "Ask Copilot →"}
                  </button>
                </div>
              </div>
            </div>

            {/* Trial KPI Widgets */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-xs">
                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Active Applicants</span>
                <p className="mt-2 text-3xl font-extrabold text-neutral-900">{candidates.length + 14}</p>
                <p className="mt-1 text-xs text-emerald-600 font-medium">↑ 4 new this week</p>
              </div>

              <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-xs">
                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">AI Interviews Run</span>
                <p className="mt-2 text-3xl font-extrabold text-neutral-900">{candidates.length}</p>
                <p className="mt-1 text-xs text-neutral-500 font-medium">85.4% Avg Completion</p>
              </div>

              <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-xs">
                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Active Team Roster</span>
                <p className="mt-2 text-3xl font-extrabold text-neutral-900">24</p>
                <p className="mt-1 text-xs text-emerald-600 font-medium">100% Biometric Sync</p>
              </div>

              <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-xs">
                <span className="text-xs text-neutral-500 font-semibold uppercase tracking-wider">Recruiter Time Saved</span>
                <p className="mt-2 text-3xl font-extrabold text-primary">42 mins</p>
                <p className="mt-1 text-xs text-neutral-500 font-medium">Per completed first-round</p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: CORE HRMS & LEAVES
            ========================================================= */}
        {activeTab === "hrms" && (
          <div className="space-y-6">
            {/* Pending Approvals */}
            <div className="rounded-none border border-neutral-200 bg-white p-6 md:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-5 border-b border-neutral-100">
                <div>
                  <p className="pretitle text-primary">Statutory Operations</p>
                  <h2 className="text-xl font-bold text-neutral-900">Pending Leave Approvals</h2>
                  <p className="text-xs text-neutral-500 mt-0.5">Live approval queue synchronized with biometric clocking</p>
                </div>
                <span className="rounded-full bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1">
                  {pendingLeaves.length} Action Needed
                </span>
              </div>

              <div className="mt-6 space-y-3.5">
                {pendingLeaves.map((req) => (
                  <div
                    key={req.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-none border border-neutral-200 bg-neutral-50/60 p-5"
                  >
                    <div>
                      <p className="text-sm font-bold text-neutral-900">{req.name}</p>
                      <p className="text-xs text-neutral-600 mt-0.5">
                        <strong className="text-neutral-800">{req.type}</strong> · {req.dates}
                      </p>
                      <p className="text-xs text-neutral-500 mt-1">Reason: "{req.reason}"</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          setPendingLeaves((prev) => prev.filter((p) => p.id !== req.id));
                          showToast(`Leave approved for ${req.name}. Calendar updated.`);
                        }}
                        className="rounded-full bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setPendingLeaves((prev) => prev.filter((p) => p.id !== req.id));
                          showToast(`Leave declined for ${req.name}.`);
                        }}
                        className="rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-700 px-5 py-2 text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}

                {pendingLeaves.length === 0 && (
                  <div className="py-10 text-center text-xs text-neutral-500 border border-dashed border-neutral-200">
                    All employee leave requests are approved and up to date!
                  </div>
                )}
              </div>
            </div>

            {/* Employee Directory */}
            <div className="rounded-none border border-neutral-200 bg-white p-6 md:p-8 shadow-xs">
              <p className="pretitle text-primary">Roster Telemetry</p>
              <h2 className="text-xl font-bold text-neutral-900 mb-4">Sample Employee Roster</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 text-neutral-600 border-b border-neutral-200">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Employee</th>
                      <th className="py-3 px-4 font-semibold">Department</th>
                      <th className="py-3 px-4 font-semibold">Role</th>
                      <th className="py-3 px-4 font-semibold">Status</th>
                      <th className="py-3 px-4 font-semibold">Leave Balance</th>
                      <th className="py-3 px-4 font-semibold">Tenure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {SAMPLE_EMPLOYEES.map((emp) => (
                      <tr key={emp.id} className="hover:bg-neutral-50/60">
                        <td className="py-3.5 px-4 font-bold text-neutral-900">{emp.name}</td>
                        <td className="py-3.5 px-4 text-neutral-600">{emp.dept}</td>
                        <td className="py-3.5 px-4 text-neutral-700">{emp.role}</td>
                        <td className="py-3.5 px-4">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                              emp.status === "Active"
                                ? "bg-emerald-100 text-emerald-800"
                                : emp.status === "On Leave"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-sky-100 text-sky-800"
                            }`}
                          >
                            {emp.status}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-neutral-600">{emp.leaveBalance}</td>
                        <td className="py-3.5 px-4 text-neutral-500">{emp.tenure}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: AI HR POLICY COPILOT
            ========================================================= */}
        {activeTab === "copilot" && (
          <div className="space-y-6">
            <div className="rounded-none border border-neutral-200 bg-white p-6 md:p-8 shadow-xs max-w-4xl mx-auto">
              <div className="flex items-center justify-between pb-5 border-b border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                    <SparklesIcon size={20} />
                  </div>
                  <div>
                    <p className="pretitle text-primary">Enterprise LLM</p>
                    <h2 className="text-xl font-bold text-neutral-900">Sqalible AI Policy & HR Copilot</h2>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      Permission-aware intelligence. Zero customer data retained on third-party foundational models.
                    </p>
                  </div>
                </div>
                <span className="rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-semibold text-primary">
                  RBAC Verified
                </span>
              </div>

              {/* Chat Thread */}
              <div className="mt-6 space-y-4 min-h-[320px] max-h-[440px] overflow-y-auto pr-2">
                {copilotMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-none p-4 text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-neutral-50 border border-neutral-200 text-neutral-800 whitespace-pre-line"
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                    {msg.meta && <span className="mt-1 text-[10px] text-neutral-400 font-mono">{msg.meta}</span>}
                  </div>
                ))}
              </div>

              {/* Prompt Suggestions */}
              <div className="mt-6 pt-5 border-t border-neutral-100">
                <p className="text-xs font-semibold text-neutral-500 mb-2">Try asking in your trial workspace:</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Calculate gratuity for 6 years service",
                    "What is our leave carryover policy?",
                    "Check attrition and burnout telemetry",
                    "Summarize Ananya Rao's AI interview performance"
                  ].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => handleCopilotSend(chip)}
                      className="rounded-full border border-neutral-200 bg-neutral-50 px-3.5 py-1.5 text-xs text-neutral-700 hover:bg-neutral-100 hover:border-neutral-300 transition-colors cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input box */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleCopilotSend();
                }}
                className="mt-4 flex gap-2"
              >
                <input
                  type="text"
                  value={copilotInput}
                  onChange={(e) => setCopilotInput(e.target.value)}
                  placeholder="Ask any HR, policy, or candidate evaluation question..."
                  className="flex-1 rounded-xl border border-neutral-300 px-4 py-2.5 text-xs text-neutral-900 outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-6 py-2.5 text-xs font-semibold text-white hover:bg-teal-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <SendIcon size={14} />
                  <span>Send</span>
                </button>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* =========================================================================
          SIMULATE NEW AI INTERVIEW MODAL (Brand Styled)
          ========================================================================= */}
      {showSimulateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-md rounded-none bg-white p-8 shadow-2xl border border-neutral-200">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
              <div>
                <p className="pretitle text-primary">Simulation Engine</p>
                <h3 className="text-lg font-bold text-neutral-900">
                  Simulate Live AI Interview
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowSimulateModal(false)}
                className="text-neutral-400 hover:text-neutral-600 cursor-pointer"
              >
                <XIcon size={20} />
              </button>
            </div>

            <form onSubmit={handleSimulateNewInterview} className="mt-5 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Candidate Name</label>
                <input
                  type="text"
                  required
                  value={newCandName}
                  onChange={(e) => setNewCandName(e.target.value)}
                  placeholder="e.g. Vikram Malhotra"
                  className="w-full rounded-xl border border-neutral-300 px-3.5 py-2.5 text-xs outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Job Role</label>
                <select
                  value={newCandRole}
                  onChange={(e) => setNewCandRole(e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-xs text-neutral-700 outline-none focus:border-primary"
                >
                  <option value="Senior Backend Engineer">Senior Backend Engineer (Python / Go)</option>
                  <option value="Frontend Architect">Frontend Architect (React / Next.js)</option>
                  <option value="DevOps & SRE Lead">DevOps & SRE Lead (Kubernetes / AWS)</option>
                  <option value="Principal Product Manager">Principal Product Manager</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-neutral-700 mb-1">Seniority & Rubric Depth</label>
                <select
                  value={newCandLevel}
                  onChange={(e) => setNewCandLevel(e.target.value)}
                  className="w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-2.5 text-xs text-neutral-700 outline-none focus:border-primary"
                >
                  <option value="Mid-Level (3-5 yrs)">Mid-Level (3-5 yrs) · Core algorithms & syntax</option>
                  <option value="Senior (5-8 yrs)">Senior (5-8 yrs) · Distributed systems & concurrency</option>
                  <option value="Staff / Principal (8+ yrs)">Staff / Principal (8+ yrs) · Architecture & tradeoffs</option>
                </select>
              </div>

              <div className="pt-3 flex justify-end gap-2.5 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => setShowSimulateModal(false)}
                  className="rounded-full border border-neutral-300 px-5 py-2 font-semibold text-neutral-600 hover:bg-neutral-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSimulating}
                  className="rounded-full bg-primary px-6 py-2 font-semibold text-white hover:bg-teal-700 disabled:opacity-50 flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {isSimulating ? (
                    <>
                      <SparklesIcon size={14} className="animate-spin" />
                      <span>Conducting Interview...</span>
                    </>
                  ) : (
                    <span>Run Simulation</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
