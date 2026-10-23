import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  XCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  ZapIcon,
  CpuIcon,
  UsersIcon,
  LockIcon,
  LayersIcon,
  BarChart3Icon,
  WorkflowIcon,
  UserCheckIcon,
  Globe2Icon,
  SparklesIcon,
  AlertCircleIcon
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { PageCta } from "../components/layout/PageCta";
import { WhySqalibleHeroCard } from "../components/layout/HeroCards";
import { StatsBand } from "../components/StatsBand";
import { compareLinks } from "../data/why";

const architecturePillars = [
  {
    icon: <CpuIcon size={24} className="text-teal-600" />,
    title: "Native Agentic Runtime",
    desc: "AI isn't a sidecar chatbot or an iframe plugin. It runs directly inside database triggers, calculation pipelines, and workflow gates across every module."
  },
  {
    icon: <LayersIcon size={24} className="text-teal-600" />,
    title: "Single Live Employee Record",
    desc: "From initial screening audio to retirement settlements, all historical events, benefits, and tax documents link to a single cryptographic employee profile."
  },
  {
    icon: <ShieldCheckIcon size={24} className="text-teal-600" />,
    title: "Mandatory Compliance Gates",
    desc: "Workflows like offboarding and payroll approval enforce hard system gates. No employee exits with unrevoked SSO or missing hardware signatures."
  },
  {
    icon: <UsersIcon size={24} className="text-teal-600" />,
    title: "Human-in-the-Loop Authority",
    desc: "AI recommends scores, identifies flight risks, and drafts candidate evaluations, but human leadership retains 100% sign-off authority on every decision."
  }
];

type ComparisonCategory = {
  id: string;
  category: string;
  icon: React.ElementType;
  description: string;
  items: {
    title: string;
    legacy: string;
    legacyDetail?: string;
    sqalible: string;
    sqalibleDetail?: string;
  }[];
};

const comparisonCategories: ComparisonCategory[] = [
  {
    id: "workflows",
    category: "HR Workflows & Automation",
    icon: WorkflowIcon,
    description: "How day-to-day operations flow across recruitment, day-one onboarding, and employee offboarding.",
    items: [
      {
        title: "Candidate First-Round Interviews",
        legacy: "Days lost coordinating recruiter calendars, resulting in high candidate drop-off and subjective note-taking.",
        legacyDetail: "Recruiters spend 15+ hours weekly on repetitive screening questions.",
        sqalible: "24/7 autonomous live AI interviews with adaptive technical questioning, verbatim transcripts, and instant scorecard generation.",
        sqalibleDetail: "Standardized rubric scoring with 100% human recruitment sign-off."
      },
      {
        title: "Employee Offboarding & Access Revocation",
        legacy: "Manual email checklists and disconnected IT tickets leave corporate accounts and SaaS tools vulnerable for days.",
        legacyDetail: "Frequent zombie accounts post-exit create severe security and compliance liabilities.",
        sqalible: "5 enforced compliance gates (IT, HR, Finance, Admin, Legal) with single-click SSO and hardware return confirmation.",
        sqalibleDetail: "Zero zombie account gap; automated cryptographic audit logging."
      }
    ]
  },
  {
    id: "data",
    category: "Data Visibility & Workforce Insights",
    icon: BarChart3Icon,
    description: "Real-time telemetry, attendance synchronization, and predictive workforce analytics.",
    items: [
      {
        title: "Operational Telemetry & Reporting",
        legacy: "Stale monthly batch exports and disconnected spreadsheets with zero proactive intelligence.",
        legacyDetail: "Managers only notice burnout or flight risk when formal resignation notices arrive.",
        sqalible: "Live telemetry dashboard tracking interview velocity, attendance patterns, and responsible attrition risk indicators.",
        sqalibleDetail: "Real-time alerts allow management to intervene weeks before critical team attrition."
      },
      {
        title: "Single Live Employee Master",
        legacy: "Fragmented database tables across separate recruitment ATS, core HR, and payroll modules.",
        legacyDetail: "Requires manual synchronization and CSV reconciliations each month.",
        sqalible: "A unified, single live record where all lifecycle events, attendance punches, and salary revisions update instantaneously.",
        sqalibleDetail: "Zero duplicate entries; single source of truth across all global entities."
      }
    ]
  },
  {
    id: "experience",
    category: "Employee & HR Experience",
    icon: UsersIcon,
    description: "Everyday employee self-service, policy transparency, and mobile accessibility.",
    items: [
      {
        title: "Policy & Benefit Inquiries",
        legacy: "Employees open HR support tickets and wait 24 to 48 hours for basic employee handbook answers.",
        legacyDetail: "HR teams spend up to 40% of their day answering repetitive policy queries.",
        sqalible: "Permission-aware conversational AI assistant delivers instant, accurate answers strictly grounded in company policy documents.",
        sqalibleDetail: "Respects role-based access control (RBAC) so private data is never leaked."
      },
      {
        title: "Self-Service Usability",
        legacy: "Clunky legacy enterprise portals with rigid navigation that require formal training to use.",
        legacyDetail: "Low adoption leads to continuous errors in attendance regularizations and expense claims.",
        sqalible: "Clean, consumer-grade web and mobile interface with 1-click leave requests, biometric punch-in, and instant digital payslips.",
        sqalibleDetail: "Zero onboarding training needed for employees or managers."
      }
    ]
  },
  {
    id: "scalability",
    category: "Workflow Scalability",
    icon: Globe2Icon,
    description: "Multi-entity architecture, multi-currency payroll, and enterprise growth support.",
    items: [
      {
        title: "Multi-Entity & Regional Compliance",
        legacy: "Requires purchasing separate software instances for subsidiaries, with manual inter-company consolidation.",
        legacyDetail: "Difficult to maintain statutory compliance across state or national borders.",
        sqalible: "Native multi-entity hierarchy supporting distinct parent/subsidiary tax structures, GCC WPS, and international compliance.",
        sqalibleDetail: "Centrally managed role permissions with localized statutory tax calculation."
      },
      {
        title: "Payroll Calculation Engine",
        legacy: "Batch payroll runs requiring 2-3 full days of manual spreadsheet formula reconciliation and attendance cross-checks.",
        legacyDetail: "Errors in overtime, loss of pay (LOP), or PF deductions cause payroll re-runs.",
        sqalible: "Real-time calculation engine directly synchronized with attendance telemetry and statutory tax slabs (PF, ESI, TDS, Gratuity).",
        sqalibleDetail: "Complete payroll run executed in minutes with zero-lag audit trails."
      }
    ]
  },
  {
    id: "governance",
    category: "Human Oversight & AI Governance",
    icon: ShieldCheckIcon,
    description: "Responsible AI guardrails, statistical parity audits, and strict enterprise security.",
    items: [
      {
        title: "Hiring & Performance Decisions",
        legacy: "Opaque scoring algorithms or third-party wrappers that cannot explain evaluation reasoning.",
        legacyDetail: "Exposes the organization to legal risks and unintentional hiring bias.",
        sqalible: "Strict Human-in-the-Loop policy: AI provides objective rubric scores with transcript citations, but human leaders make 100% of final calls.",
        sqalibleDetail: "Published Responsible AI policy with regular statistical parity bias audits."
      },
      {
        title: "Enterprise Data Privacy & Security",
        legacy: "Employee data potentially shared with public LLM providers or stored in shared multi-tenant databases.",
        legacyDetail: "Unclear data retention policies and generic third-party data processing agreements.",
        sqalible: "SOC 2 Type II and ISO 27001 certified architecture with zero-retention private AI runtime and cryptographic audit trails.",
        sqalibleDetail: "Enterprise tenant data isolation with regional data residency guarantees."
      }
    ]
  }
];

export function WhyPage() {
  const allComparisonItems = comparisonCategories.flatMap((cat) => cat.items);

  // Expand top 3 by default
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    allComparisonItems.slice(0, 3).forEach((item) => {
      initial[item.title] = true;
    });
    return initial;
  });

  const isAllExpanded = allComparisonItems.length > 0 && allComparisonItems.every((item) => openItems[item.title]);

  const toggleAll = () => {
    if (isAllExpanded) {
      setOpenItems({});
    } else {
      const allOpen: Record<string, boolean> = {};
      allComparisonItems.forEach((item) => {
        allOpen[item.title] = true;
      });
      setOpenItems(allOpen);
    }
  };

  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: "Why Sqalible" }]}
        pretitle="The AI-Native Advantage"
        title="Why Forward-Thinking Enterprises Choose Sqalible"
        description="Legacy platforms bolt AI chatbots onto outdated 2000s architectures. Sqalible was engineered from day one around autonomous agents, verifiable governance, and real-time operational clarity."
        image="none"
        aside={<WhySqalibleHeroCard />}
      />

      {/* 1. Core Architectural Pillars */}
      <section className="py-14 md:py-20 bg-white px-6">
        <div className="mx-auto max-w-7xl">
          <div className="w-full mb-12">
            <p className="pretitle text-primary">Fundamental Differences</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-2 tracking-tight">
              Architectural Foundations of an AI-Native HRMS
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              How our unified data model and autonomous runtime eliminate the fragility, latency, and fragmentation of legacy enterprise suites.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {architecturePillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-none border border-neutral-200 bg-white p-7 flex flex-col justify-between shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-5 [&>svg]:transition-colors [&>svg]:duration-200 group-hover:[&>svg]:text-white">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-2.5 text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Interactive Head-to-Head Comparison with Kombee Dropdown Design */}
      <section className="py-16 md:py-24 bg-[#FAFAFA] px-6 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <div className="w-full mb-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="pretitle text-primary">Head-to-Head Architectural Breakdown</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 mt-2 tracking-tight">
                  AI-Native vs Legacy HRMS Platforms
                </h2>
                <p className="mt-3 text-base text-neutral-600 leading-relaxed max-w-3xl">
                  An objective architectural evaluation showing why bolting chatbots onto 15-year-old databases fails to deliver true operational velocity. Click any capability to expand its head-to-head architectural analysis.
                </p>
              </div>

              {/* Expand All / Collapse All Control */}
              <div className="shrink-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleAll}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-bold text-neutral-800 shadow-2xs hover:border-primary hover:text-primary transition-all cursor-pointer"
                >
                  {isAllExpanded ? "Collapse all" : "Expand all"}
                </button>
              </div>
            </div>
          </div>

          {/* Single dividing line and clean Kombee Dropdown list */}
          <div className="border-t border-neutral-300">
            {allComparisonItems.map((item) => {
              const isOpen = Boolean(openItems[item.title]);
              return (
                <div
                  key={item.title}
                  className="border-b border-neutral-300 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.title)}
                    aria-expanded={isOpen}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <h3 className="text-lg sm:text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors tracking-tight">
                      {item.title}
                    </h3>

                    <span className="text-2xl sm:text-3xl font-light text-neutral-800 shrink-0 ml-4 group-hover:text-primary transition-colors select-none w-8 text-right">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Smooth Collapsible Content with Clearly Differentiated Cards */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-8">
                          <div className="grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
                            {/* Legacy Approach (Muted, Traditional) */}
                            <div className="rounded-none border border-neutral-300 bg-neutral-100/70 overflow-hidden flex flex-col justify-between">
                              <div className="bg-neutral-200/80 px-5 py-3.5 border-b border-neutral-300 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <XCircleIcon size={18} className="text-neutral-500 shrink-0" />
                                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-700">
                                    Legacy HRMS Suite (Keka, Darwinbox, etc.)
                                  </span>
                                </div>
                                <span className="rounded-full bg-neutral-300/80 px-2.5 py-0.5 text-[10px] font-bold text-neutral-600 uppercase tracking-wider">
                                  Legacy Stack
                                </span>
                              </div>

                              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                                <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                                  {item.legacy}
                                </p>
                                {item.legacyDetail && (
                                  <div className="mt-5 rounded-none bg-white/90 border border-neutral-200 p-3.5 flex items-start gap-2.5">
                                    <AlertCircleIcon size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                                    <p className="text-xs text-neutral-600 leading-relaxed">
                                      <strong className="text-neutral-800 font-semibold">Limitation:</strong> {item.legacyDetail}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Squalible Approach (VIBRANT, DISTINCTIVE, UNMISTAKABLY SQUALIBLE) */}
                            <div className="rounded-none border-2 border-primary bg-gradient-to-b from-teal-50/70 to-white shadow-lg overflow-hidden flex flex-col justify-between relative">
                              {/* Prominent Squalible Brand Banner */}
                              <div className="bg-primary px-5 py-3.5 text-white flex items-center justify-between shadow-xs">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2Icon size={18} className="text-teal-200 shrink-0" />
                                  <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
                                    Squalible (AI-Native)
                                  </span>
                                </div>
                                <span className="rounded-full bg-white/20 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-extrabold text-white uppercase tracking-wider border border-white/25">
                                  Recommended Architecture
                                </span>
                              </div>

                              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                                <p className="text-sm sm:text-base font-semibold text-neutral-900 leading-relaxed">
                                  {item.sqalible}
                                </p>
                                {item.sqalibleDetail && (
                                  <div className="mt-5 rounded-none bg-teal-100/70 border border-teal-300/80 p-3.5 flex items-start gap-2.5 shadow-2xs">
                                    <SparklesIcon size={16} className="text-teal-700 shrink-0 mt-0.5" />
                                    <p className="text-xs text-teal-950 font-medium leading-relaxed">
                                      <strong className="text-teal-900 font-bold">Verified Capability:</strong> {item.sqalibleDetail}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Competitor Teardowns Banner */}
          <div className="mt-14 rounded-none bg-neutral-900 p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <p className="text-2xl font-bold text-white">Comparing Specific HRMS Vendors?</p>
              <p className="text-sm text-neutral-400 mt-1.5 leading-relaxed max-w-xl">
                Read our in-depth, feature-by-feature side-by-side evaluations against traditional enterprise suites:
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {compareLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="rounded-full border border-neutral-700 bg-neutral-800/90 px-5 py-2.5 text-xs font-semibold text-white hover:border-teal-400 hover:bg-neutral-700 transition-colors"
                >
                  {link.title.replace("Sqalible ", "")} &rarr;
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Enterprise Stats & Metrics */}
      <StatsBand />

      <PageCta title="Experience the AI-native advantage on your own live workforce data." />
    </PageLayout>
  );
}