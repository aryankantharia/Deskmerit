import { useParams, Link } from "react-router-dom";
import {
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  UsersIcon,
  CheckCircle2Icon,
  CpuIcon,
  BarChart3Icon,
  LayersIcon,
  TerminalIcon,
  ScaleIcon,
  ActivityIcon,
  FileTextIcon,
  DatabaseIcon,
  TrendingUpIcon,
  ZapIcon,
  BellRingIcon,
  SlidersHorizontalIcon,
  FileCheck2Icon
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { PageCta } from "../components/layout/PageCta";
import {
  HiringRequestsHeroCard,
  VoiceScreeningHeroCard,
  HelpdeskHeroCard,
  AccessRevocationHeroCard
} from "../components/layout/HeroCards";
import { FaqSection } from "../components/FaqSection";
import { Badge } from "../components/Badge";
import { LifecycleStage, lifecycleStages } from "../data/lifecycle";
import { moduleDetails } from "../data/modules";
import { LifecycleStepper } from "../components/LifecycleStepper";
import { NotFound } from "./NotFound";

export function PlatformPage() {
  const { slug = "" } = useParams();
  const path = `/platform/${slug}`;

  // If no slug or 'overview', render the Platform Overview hub with lifecycle stepper
  if (!slug || slug === "overview") {
    return <PlatformOverviewView />;
  }

  // Check if it's the dedicated AI & Workforce Intelligence hub
  if (slug === "ai" || slug === "ai-analytics") {
    const aiStage = lifecycleStages.find((s) => s.id === "ai");
    return <AiWorkforceIntelligenceView stage={aiStage!} slug={slug} />;
  }

  // Check if it's a lifecycle stage hub (e.g. /platform/hire, /platform/manage, /platform/grow, /platform/exit)
  const stage = lifecycleStages.find((s) => s.href === path);
  if (stage) {
    if (stage.id === "ai") return <AiWorkforceIntelligenceView stage={stage} slug="ai" />;
    return <StageView stage={stage} />;
  }

  // Check if it's an individual module
  const parent = lifecycleStages.find((s) => s.modules.some((m) => m.href === path));
  const mod = parent?.modules.find((m) => m.href === path);
  const detail = moduleDetails[slug];
  if (!parent || !mod || !detail) return <NotFound />;

  // Special flagship view for AI Live Interview
  if (slug === "ai-live-interview") {
    return <AiLiveInterviewFlagshipView parent={parent} mod={mod} detail={detail} />;
  }

  return <ModuleDetailView parent={parent} mod={mod} detail={detail} slug={slug} />;
}

/* =========================================================================
   1. Flagship AI Live Interview Experience
   ========================================================================= */
function AiLiveInterviewFlagshipView({
  parent,
  mod,
  detail
}: {
  parent?: LifecycleStage;
  mod?: LifecycleStage["modules"][0];
  detail?: (typeof moduleDetails)[string];
} = {}) {
  const faqs = [
    {
      q: "Does the AI live interviewer make autonomous hiring or rejection decisions?",
      a: "No. Sqalible enforces a strict Human-in-the-Loop policy. The AI conducts the interview, scores candidate answers against your rubric, and produces an explainable summary with verbatim transcript citations. A named recruiter or hiring manager reviews the dossier and makes the final advancement decision."
    },
    {
      q: "Can candidates opt out or request a traditional human interviewer?",
      a: "Yes. In accordance with our Responsible AI framework and regional hiring regulations, candidates receive explicit opt-in disclosures prior to session launch and can request a human-conducted panel with zero penalty."
    },
    {
      q: "How does the evaluation assess coding approach rather than just binary pass/fail?",
      a: "Our evaluation engine tracks candidate thought processes during coding tasks: how they decompose problems, handle edge cases, ask clarifying questions, and refactor inefficient algorithms. This provides a deep qualitative signal rather than simple unit-test completion."
    },
    {
      q: "How is adverse-impact bias prevented in candidate scoring?",
      a: "All candidate responses are evaluated strictly against identical, pre-configured competency rubrics. Acoustic pitch and demographic attributes are filtered out from scoring models, and models undergo quarterly statistical parity audits based on EEOC guidelines."
    }
  ];

  return (
    <PageLayout>
      {/* Standard Clean Hero Matching Hiring Requests & Approvals */}
      <PageHero
        crumbs={[
          { title: "Platform" },
          { title: parent?.label ?? "Hire", href: parent?.href ?? "/platform/hire" },
          { title: mod?.title ?? "AI Live Interview" }
        ]}
        pretitle={parent?.product ?? "Sqalible Hire"}
        title={mod?.title ?? "AI Live Interview"}
        description={detail?.summary ?? "An interactive avatar conducts structured first-round technical and behavioural interviews, adapts dynamically to candidate depth, and evaluates architectural reasoning—while your human team retains 100% final hiring authority."}
        image="/figma-screens/scheduled-interviews.png"
        imageAlt="Sqalible Structured Technical & Behavioural Interview Telemetry"
        accent="primary"
      />

      {/* Verified Buyer Outcomes & Metric Strip */}
      <section className="border-y border-neutral-800 bg-[#06090F] text-white py-6" aria-label="Buyer Performance Outcomes">
        <div className="mx-auto max-w-7xl px-6">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <dd className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono tabular-nums">70% faster</dd>
              <dt className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">
                Time-to-shortlist <sup className="text-[10px] text-teal-300 font-bold" title="Time from applicant submission to qualified hiring manager scorecard drops from 14 days to 4.2 days">[1]</sup>
              </dt>
            </div>
            <div>
              <dd className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono tabular-nums">15+ hrs/wk</dd>
              <dt className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">
                Recruiter hours saved <sup className="text-[10px] text-teal-300 font-bold" title="Saved per talent acquisition partner on initial screening and calendar coordination calls">[2]</sup>
              </dt>
            </div>
            <div>
              <dd className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono tabular-nums">94.8%</dd>
              <dt className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">
                Candidate completion rate <sup className="text-[10px] text-teal-300 font-bold" title="Measured across 24/7 self-scheduled autonomous interview links">[3]</sup>
              </dt>
            </div>
            <div>
              <dd className="text-2xl sm:text-3xl font-extrabold text-teal-400 font-mono tabular-nums">99.4%</dd>
              <dt className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">
                Rubric scoring consistency <sup className="text-[10px] text-teal-300 font-bold" title="Statistical parity audits demonstrating consistent evaluation across demographic cohorts">[4]</sup>
              </dt>
            </div>
          </dl>
          <p className="mt-3 text-[11px] text-neutral-500 text-center">
            * Outcomes verified in enterprise customer pilot studies [1-4]. Final hiring decisions retain 100% human-in-the-loop review.
          </p>
        </div>
      </section>

      {/* Architectural Rubric Pillars (Light Section) */}
      <section className="bg-white py-12 md:py-16" aria-labelledby="flagship-rubrics">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full">
            <p className="pretitle text-primary">Intelligent Evaluation Engine</p>
            <h2 id="flagship-rubrics" className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Beyond Multiple Choice: Evaluate How Engineers Actually Think
            </h2>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Sqalible tests real-world problem decomposition, edge case handling, and communication clarity in a natural conversational format.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-4">
                  <CpuIcon size={20} />
                </div>
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors">Adaptive Dialogue Flow</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  The interviewer asks contextual follow-ups based on specific statements made by the candidate and projects listed on their resume.
                </p>
              </div>
            </div>

            <div className="group rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-4">
                  <TerminalIcon size={20} />
                </div>
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors">Coding Approach Scoring</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Evaluates algorithmic complexity (Big-O), code readability, refactoring instincts, and response to unexpected edge cases.
                </p>
              </div>
            </div>

            <div className="group rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-4">
                  <FileTextIcon size={20} />
                </div>
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors">Explainable Scorecards</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Generates timestamps, verbatim quotes, and code snapshots so your senior engineers can review the 30-minute session in 3 minutes.
                </p>
              </div>
            </div>

            <div className="group rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-4">
                  <ScaleIcon size={20} />
                </div>
                <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors">Anti-Bias Guardrails</h3>
                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Standardized rubric evaluation removes subjective interviewer fatigue or demographic bias. All outcomes undergo statistical review.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section (Kombee Architectural Segmented Grid) */}
      <section className="bg-[#0B0F19] py-14 md:py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-10">
            <p className="pretitle text-teal-400">Step-by-Step Flow</p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              End-to-End Live Interview Workflow
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
              From rubric configuration to final human sign-off, every step is built for speed and objective signal.
            </p>
          </div>

          <div className="border-t border-b border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <SlidersHorizontalIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Rubric Setup
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Recruiters select required tech stacks, difficulty levels, and domain topics from pre-built or custom competency rubrics.
                </p>
              </div>

              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ShieldCheckIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Candidate Consent & Launch
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Candidates receive an invitation link, review transparent evaluation criteria, test audio/video, and consent before launching.
                </p>
              </div>

              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <CpuIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Interactive Assessment
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  The AI avatar conducts conversational Q&A and interactive live coding with responsive turn-taking and follow-up inquiries.
                </p>
              </div>

              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <FileCheck2Icon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Human Decision Sign-Off
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  The hiring manager receives the synthesized scorecard, code replays, and transcript summary to make the definitive hiring call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Platform FAQ Section */}
      <FaqSection
        faqs={faqs}
        title="AI Live Interview FAQs"
        className="bg-[#FAFAFA] py-12 md:py-16 border-t border-neutral-200"
      />

      <PageCta title="See a sample scorecard" />
    </PageLayout>
  );
}

/* =========================================================================
   2. Dedicated AI & Workforce Intelligence View (/platform/ai, /platform/ai-assistant, etc.)
   ========================================================================= */
function AiWorkforceIntelligenceView({ stage }: { stage: LifecycleStage; slug?: string }) {
  const aiCapabilities = [
    {
      icon: UsersIcon,
      title: "Permission-Aware AI HR Assistant",
      desc: "Answers complex employee policy queries, checks leave entitlements, and drafts communications with strict enterprise RBAC constraint."
    },
    {
      icon: TrendingUpIcon,
      title: "Predictive Attrition Risk Telemetry",
      desc: "Aggregates workload anomalies, shift overtime patterns, and tenure metrics to alert HR leadership to potential team burnout early."
    },
    {
      icon: BarChart3Icon,
      title: "Workforce Scenario & Headcount Planning",
      desc: "Model dynamic organizational hiring velocity, compensation budgets, and multi-team capacity scenarios against company growth targets."
    },
    {
      icon: DatabaseIcon,
      title: "Cross-Module Organizational Insights",
      desc: "Instantly analyze cross-functional attendance, review cycle completion rates, and payroll adjustments in a single executive cockpit."
    }
  ];

  const faqs = [
    {
      q: "Can the AI Assistant view confidential employee compensation or health records?",
      a: "No. The AI Assistant strictly inherits the exact role-based permissions (RBAC) of the querying user. A manager cannot retrieve salary bands or personal medical notes that they do not have explicit administrative authorization to inspect."
    },
    {
      q: "Is customer workforce data used to train generalized public AI models?",
      a: "Never. All customer data, query prompts, and employee metrics remain logically isolated in tenant-specific database shards with zero retention on third-party foundational LLM providers."
    },
    {
      q: "How does the platform ensure predictive insights don't produce biased conclusions?",
      a: "Our workforce models operate on objective operational telemetry (e.g. consecutive overtime hours, PTO non-utilization) rather than demographic attributes. All predictive models undergo recurring anti-bias algorithmic parity reviews."
    }
  ];

  return (
    <PageLayout>
      {/* Standard Clean Hero Matching Hiring Requests & Approvals */}
      <PageHero
        crumbs={[
          { title: "Platform" },
          { title: "AI & Workforce Intelligence" }
        ]}
        pretitle="Sqalible AI"
        title="AI & Workforce Intelligence"
        description="Turn fragmented HR records into actionable executive visibility. Predict operational attrition risks, automate routine employee inquiries, and model multi-quarter headcount budgets with zero compliance leaks."
        image="/figma-screens/retention-risk.png"
        imageAlt="Sqalible AI Workforce Retention Risk and Predictive Telemetry"
      />

      {/* Intelligence Metric Strip */}
      <section className="border-y border-neutral-800 bg-[#06090F] text-white py-6">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">100%</p>
            <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider font-medium">Role-Based RBAC Filtered</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">&lt; 3 sec</p>
            <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider font-medium">Average Query Resolution</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">Zero</p>
            <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider font-medium">Data Shared with Public LLMs</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">4-Week</p>
            <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider font-medium">Early Burnout Detection</p>
          </div>
        </div>
      </section>

      {/* Core Capabilities (Light Section) */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full">
            <p className="pretitle text-primary">Workforce Intelligence Engine</p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-neutral-900">
              Four Pillars of Operational Visibility
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Designed specifically for HR leaders, people operations, and executive leadership.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aiCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors">{cap.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kombee Architectural Step-by-Step Intelligence Workflow */}
      <section className="bg-[#0B0F19] py-14 md:py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-10">
            <p className="pretitle text-teal-400">Step-by-Step Architecture</p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How Sqalible Intelligence Operates in Practice
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
              A closed-loop operational data pipeline engineered for absolute privacy, auditable transparency, and sub-second insight generation.
            </p>
          </div>

          <div className="border-t border-b border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <DatabaseIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Telemetry Ingestion
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Continuous ingestion of biometric attendance, shift requests, PTO logs, and ATS pipelines into tenant-isolated storage shards.
                </p>
              </div>

              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ShieldCheckIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  RBAC Authorization Check
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Every query is evaluated against role-based access permissions, preventing unauthorized access to confidential compensation or personal data.
                </p>
              </div>

              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <CpuIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Contextual Reasoning
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Specialized domain models evaluate workload trends, calculate attrition probabilities, and synthesize natural-language summaries.
                </p>
              </div>

              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <CheckCircle2Icon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Action Dispatch & Audit
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Synthesized recommendations are delivered with cited timestamps and sources directly to Slack, Teams, and executive cockpits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connected Modules Grid (Dark Section for Rhythm) */}
      <section className="bg-neutral-900 py-12 md:py-16 text-white border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-8">
            <p className="pretitle text-teal-400">Platform Modules</p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white">
              AI-Powered Modules in this Lifecycle Stage
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400">
              Explore specialized modules that feed into your unified enterprise intelligence record.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stage.modules.map((m) => {
              const mDetail = moduleDetails[m.href.replace("/platform/", "")];
              return (
                <Link
                  key={m.href}
                  to={m.href}
                  className="group rounded-none border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-teal-400/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors">
                      {m.title}
                    </h4>
                    <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
                      {mDetail?.summary}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-teal-400">
                    <span>Explore module</span>
                    <ArrowRightIcon size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Full-Width Platform FAQ */}
      <FaqSection
        faqs={faqs}
        title="AI & Workforce Intelligence FAQs"
        className="bg-[#FAFAFA] py-12 md:py-16 border-t border-neutral-200"
      />

      <PageCta title="Unlock real-time operational clarity with Sqalible AI & Workforce Intelligence." />
    </PageLayout>
  );
}

/* =========================================================================
   3. Distinctive Module Detail View (No Repetitive Traditional Challenge Cards!)
   ========================================================================= */
function ModuleDetailView({
  parent,
  mod,
  detail,
  slug
}: {
  parent: LifecycleStage;
  mod: LifecycleStage["modules"][0];
  detail: (typeof moduleDetails)[string];
  slug: string;
}) {
  const isAi = parent.id === "ai" || mod.title.startsWith("AI ");

  // Topic-specific icons for capabilities
  const getHighlightIcon = (idx: number) => {
    const icons = [LayersIcon, ZapIcon, ActivityIcon, CheckCircle2Icon, ShieldCheckIcon, CpuIcon];
    return icons[idx % icons.length];
  };

  // Tailored FAQs for the module
  const moduleFaqs = [
    {
      q: `How does ${mod.title} connect with the rest of the Sqalible HRMS ecosystem?`,
      a: `${mod.title} operates on the single employee master record. Data entered or updated here immediately synchronizes with core HR, payroll reconciliation, and audit reporting with zero manual data entry.`
    },
    {
      q: `Can our administrators define custom approval hierarchies for ${mod.title}?`,
      a: "Yes. Sqalible provides a flexible rules engine where approval hierarchies can be configured by business entity, reporting band, cost centre, or department with conditional escalation paths."
    },
    {
      q: "Is there an immutable audit log of all changes made in this module?",
      a: "Every transaction, data modification, approval, and administrative review is permanently stamped with timestamp, authenticated user ID, and IP address for SOC 2 Type II compliance and internal audits."
    },
    {
      q: `What data migration or bulk onboarding options are supported for ${mod.title}?`,
      a: "Sqalible provides automated CSV/Excel data mapping, bulk validation previews, and direct API endpoints. Our solutions engineering team ensures historical records and current employee data migrate seamlessly."
    },
    {
      q: `How does ${mod.title} handle regional compliance and localized regulations?`,
      a: "The module is built-in with local statutory compliance engines across India, GCC/Middle East, US, and UK/Europe, automatically updating tax slabs, leave laws, and mandatory filings."
    }
  ];

  const isHiringRequests = slug === "hiring-requests";
  const isVoiceScreening = slug === "ai-voice-screening";
  const isHelpdesk = slug === "helpdesk";
  const isAccessRevocation = slug === "access-revocation";

  const customHeroAside = (() => {
    if (isHiringRequests) return <HiringRequestsHeroCard />;
    if (isVoiceScreening) return <VoiceScreeningHeroCard />;
    if (isHelpdesk) return <HelpdeskHeroCard />;
    if (isAccessRevocation) return <AccessRevocationHeroCard />;
    return undefined;
  })();

  const heroImageOverride = (() => {
    if (customHeroAside) return "none";
    if (slug === "compensation-benefits") return "/dashboards/hour_account.png";
    return detail.image;
  })();

  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: "Platform" }, { title: parent.label, href: parent.href }, { title: mod.title }]}
        pretitle={parent.product ?? parent.label}
        title={mod.title}
        description={detail.summary}
        image={heroImageOverride}
        imageAlt={detail.imageAlt}
        aside={customHeroAside}
        accent="primary"
      />

      {/* Section 1: Key Capabilities (Light Section) */}
      <section className="bg-white py-12 md:py-16" aria-labelledby="capabilities-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full">
            <p className="pretitle text-primary">Core Architecture</p>
            <h2 id="capabilities-heading" className="mt-1 text-2xl sm:text-3xl font-bold text-neutral-900">
              Key Capabilities of {mod.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Purpose-built functionalities engineered to eliminate manual administrative friction and accelerate workforce execution.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {detail.highlights.map((h, idx) => {
              const Icon = getHighlightIcon(idx);
              return (
                <div
                  key={h.title}
                  className="group rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">{h.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{h.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Step-by-Step Workflow Lifecycle (Kombee Architectural Segmented Grid) */}
      <section className="bg-[#0B0F19] py-14 md:py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-10">
            <p className="pretitle text-teal-400">Step-by-Step Process</p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How {mod.title} Operates in Practice
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
              A transparent 4-stage operational process designed for speed, accountability, and compliance integrity.
            </p>
          </div>

          {/* Architectural Line-Divided Structure Matching Kombee Design */}
          <div className="border-t border-b border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {/* Column 1 */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ZapIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Trigger / Initiation
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Action initiated via employee self-service portal, API event, or manager submission with automatic field validation.
                </p>
              </div>

              {/* Column 2 */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ShieldCheckIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Policy Validation & Routing
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Rules engine verifies policy eligibility, statutory requirements, and multi-tier approval chains.
                </p>
              </div>

              {/* Column 3 */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <BellRingIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Execution & Notification
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Approvals logged, real-time notifications dispatched to Slack, Microsoft Teams, and email.
                </p>
              </div>

              {/* Column 4 */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <DatabaseIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Central Sync & Audit Stamp
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Employee master record updated with full audit trail timestamp for statutory and enterprise compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Stakeholder Value (Light Section) */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-8">
            <p className="pretitle text-primary">Organizational Impact</p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-neutral-900">
              Value Delivered Across Your Organization
            </h3>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="group rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <p className="pretitle text-primary">For HR Teams</p>
              <h4 className="mt-2 text-base font-bold text-neutral-900 group-hover:text-primary transition-colors">Reduced Administrative Overhead</h4>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Eliminates repetitive email follow-ups, manual reconciliation, and spreadsheet management so your team can focus on people strategy.
              </p>
            </div>

            <div className="group rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <p className="pretitle text-primary">For Managers & Employees</p>
              <h4 className="mt-2 text-base font-bold text-neutral-900 group-hover:text-primary transition-colors">Intuitive Self-Service</h4>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Transparent status visibility, zero guesswork on policies, and frictionless requests handled right from mobile or desktop.
              </p>
            </div>

            <div className="group rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <p className="pretitle text-primary">For Leadership & Finance</p>
              <h4 className="mt-2 text-base font-bold text-neutral-900 group-hover:text-primary transition-colors">Audit-Ready Governance</h4>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Real-time reporting, guaranteed statutory compliance, and airtight access controls preventing enterprise data leaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Full-Width Platform FAQ Accordion */}
      <FaqSection
        faqs={moduleFaqs}
        title={`${mod.title} FAQs`}
        className="bg-[#FAFAFA] py-12 md:py-16 border-t border-neutral-200"
      />

      <PageCta
        title={
          slug === "payroll-compliance" || mod.title.toLowerCase().includes("payroll")
            ? "Run a parallel payroll"
            : `Experience ${mod.title} in action with our HRMS engineering specialists.`
        }
      />
    </PageLayout>
  );
}

/* =========================================================================
   4. Lifecycle Stage Hub View (Hire, Onboard, Manage, Grow, Exit)
   ========================================================================= */
function StageView({ stage }: { stage: LifecycleStage }) {
  const isAi = stage.id === "ai";

  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: "Platform" }, { title: stage.label }]}
        pretitle={stage.product ?? "Platform Lifecycle"}
        title={isAi ? "AI & Workforce Intelligence" : `${stage.label}, from first step to last`}
        description={stage.summary}
        image={stage.image}
        imageAlt={stage.imageAlt}
        accent="primary"
      />

      <section className="bg-white py-12 md:py-16" aria-labelledby="modules-title">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full">
            <p className="pretitle text-primary">Connected Modules</p>
            <h2 id="modules-title" className="mt-1 text-2xl sm:text-3xl font-bold text-neutral-900">
              {stage.modules.length} Integrated Modules on One Employee Record
            </h2>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Every stage communicates with central payroll, leave balances, and permission governance. Explore the specific modules below:
            </p>
          </div>

          <ModuleGrid modules={stage.modules} />
        </div>
      </section>

      {/* Step-by-Step Stage Lifecycle Process (Kombee Architectural Segmented Grid) */}
      <section className="bg-[#0B0F19] py-14 md:py-20 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-10">
            <p className="pretitle text-teal-400">Operational Lifecycle</p>
            <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How {stage.label} Works Across Your Workforce
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
              An automated 4-stage operational lifecycle connecting initiation, compliance validation, real-time dispatch, and enterprise sync.
            </p>
          </div>

          <div className="border-t border-b border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ZapIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Unified Initiation
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Employees and hiring managers trigger requests via self-serve forms, Slack shortcuts, or API webhooks with instant field validation.
                </p>
              </div>

              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ShieldCheckIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Automated Validation
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Configurable rules engines verify compliance thresholds, multi-tier budget approvals, and statutory policy restrictions.
                </p>
              </div>

              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <BellRingIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Real-Time Execution
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Actions execute automatically with instant alerts dispatched to Slack, Microsoft Teams, and manager inboxes.
                </p>
              </div>

              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <DatabaseIcon size={38} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Enterprise Master Sync
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  The unified employee record updates with an immutable timestamped audit log for zero-leakage compliance reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta title={`Streamline your ${stage.label.toLowerCase()} workflows with Sqalible.`} />
    </PageLayout>
  );
}

function ModuleGrid({ modules }: { modules: LifecycleStage["modules"] }) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {modules.map((m) => {
        const slug = m.href.replace("/platform/", "");
        const detail = moduleDetails[slug];
        return (
          <li key={m.href}>
            <Link
              to={m.href}
              className="group flex h-full flex-col justify-between rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
                    {m.title}
                  </h3>
                  {m.flag && <Badge tone="ai">{m.flag}</Badge>}
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {detail?.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-primary">
                <span>Explore Module</span>
                <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

/* =========================================================================
   5. Platform Overview Hub (/platform)
   ========================================================================= */
function PlatformOverviewView() {
  const faqs = [
    {
      q: "How does the single lifecycle model differ from traditional modular HRMS?",
      a: "Traditional HRMS systems sell siloed software requiring brittle CSV sync or batch exports between recruiting, attendance, payroll, and offboarding. Sqalible runs on a unified cryptographic employee master: an offer accepted in Hire immediately generates provisional IT assets in Onboard, syncs biometric clock-ins in Manage, processes compliant disbursements in Pay, tracks reviews in Grow, and executes 5-gate offboarding in Exit."
    },
    {
      q: "What role does 'Sqalible AI' play as a horizontal layer?",
      a: "Sqalible AI is not an isolated chatbot add-on. It operates as a horizontal intelligence layer embedded into every stage: autonomous live candidate interviewing in Hire, automated KYC document parsing in Onboard, shift anomaly detection in Manage, tax query assistance in Pay, 360 review synthesis in Grow, and flight risk detection across the organization."
    },
    {
      q: "Can we adopt individual lifecycle stages or must we migrate all at once?",
      a: "You can adopt stages incrementally. Many fast-growing companies start with Sqalible Hire for AI live interviewing and screening, or Sqalible Manage & Pay for biometric attendance and statutory payroll, expanding across the remaining lifecycle stages at their own pace."
    },
    {
      q: "How does Sqalible ensure 100% compliance across multi-country entities?",
      a: "Our compliance engine handles regional statutory mandates natively—including Indian EPF/ESI/TDS/Gratuity, Middle East WPS and GOSI, US W-2/1099, and European GDPR data sovereignty. Updates to statutory ceilings and tax formulas are pushed automatically without code releases."
    }
  ];

  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: "Platform" }]}
        pretitle="The Unified HRMS Model"
        title="Hire → Onboard → Manage → Pay → Grow → Exit"
        description="One connected lifecycle model with Sqalible AI as a horizontal intelligence layer. Discover how every stage feeds into a single cryptographic employee master."
        image="/figma-screens/core-dashboard.png"
        imageAlt="Sqalible Unified Employee Lifecycle Platform Dashboard"
      />

      {/* 1. Interactive Lifecycle Stepper Beat */}
      <LifecycleStepper />

      {/* 2. Full Architecture Lifecycle Grid (All 6 Stages + AI Layer) */}
      <section className="bg-white py-16 md:py-24" aria-label="Platform Lifecycle Modules">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="pretitle text-primary">Comprehensive Lifecycle Architecture</p>
            <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Six Connected Stages, Zero Data Fragmentation
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Explore the dedicated modules and automated workflows powering each phase of your workforce.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {lifecycleStages.map((stage) => {
              const isAi = stage.id === "ai";
              return (
                <div
                  key={stage.id}
                  className={`border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                    isAi
                      ? "border-purple-300 bg-purple-50/40 shadow-xs lg:col-span-3"
                      : "border-neutral-200 bg-white hover:border-teal-500/50 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-bold uppercase tracking-wider ${isAi ? "text-purple-700" : "text-primary"}`}>
                        {stage.product || stage.label}
                      </span>
                      {isAi && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 px-2.5 py-0.5 text-[10px] font-bold text-purple-800">
                          <SparklesIcon size={11} />
                          Horizontal Intelligence Layer
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">{stage.label}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {stage.summary}
                    </p>

                    <div className="mt-6 border-t border-neutral-100 pt-4">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                        Included Modules
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {stage.modules.map((m) => (
                          <Link
                            key={m.href}
                            to={m.href}
                            className="group flex items-center justify-between p-2 rounded-md hover:bg-neutral-50 transition-colors text-xs text-neutral-800 font-medium"
                          >
                            <span className="group-hover:text-primary truncate">{m.title}</span>
                            <ArrowRightIcon size={12} className="text-neutral-400 group-hover:text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-100 flex items-center justify-between">
                    <Link
                      to={stage.href}
                      className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                        isAi ? "text-purple-700 hover:text-purple-900" : "text-primary hover:text-teal-700"
                      }`}
                    >
                      <span>Explore {stage.label} Architecture</span>
                      <ArrowRightIcon size={13} />
                    </Link>
                    <span className="text-[11px] text-neutral-400 font-mono">
                      {stage.modules.length} modules
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Platform FAQs */}
      <FaqSection
        faqs={faqs}
        title="Platform & Lifecycle FAQs"
        className="bg-[#FAFAFA] py-16 md:py-20 border-t border-neutral-200"
      />

      <PageCta title="Ready to experience the unified Sqalible lifecycle platform?" />
    </PageLayout>
  );
}