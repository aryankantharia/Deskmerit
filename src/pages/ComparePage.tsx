import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle2Icon,
  XCircleIcon,
  MinusCircleIcon,
  CheckIcon,
  ScaleIcon
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageCta } from "../components/layout/PageCta";
import { FaqSection } from "../components/FaqSection";
import { CompetitorCompareHeroCard } from "../components/layout/HeroCards";

type CompetitorDetail = {
  name: string;
  tagline: string;
  summary: string;
  competitorStrengths: string[];
  sqalibleEdge: string[];
  categories: {
    category: string;
    features: {
      feature: string;
      sqalible: string;
      sqalibleStatus: "full" | "partial" | "no";
      competitor: string;
      competitorStatus: "full" | "partial" | "no";
      note: string;
    }[];
  }[];
  migrationSteps: { step: string; title: string; desc: string }[];
  evaluationQuestions: string[];
};

const competitorsData: Record<string, CompetitorDetail> = {
  keka: {
    name: "Keka",
    tagline: "Evaluating Sqalible vs Keka for growing and mid-market organizations",
    summary:
      "Keka is an established Indian HRMS popular for its user-friendly interface and payroll engine. Sqalible was designed AI-native from the ground up, bringing live autonomous interview screening, permission-aware employee intelligence, and mandatory 5-gate offboarding access governance.",
    competitorStrengths: [
      "Broad adoption among Indian mid-market tech startups",
      "Mature local Indian payroll processing engine",
      "Familiar UI for teams transitioning away from spreadsheets"
    ],
    sqalibleEdge: [
      "Native conversational AI live interviews (screen candidates 24/7 with human sign-off)",
      "Automated 5-gate offboarding with single-click SSO and IT hardware revocation",
      "Zero-lag real-time payroll reconciliation directly connected to attendance telemetry",
      "Published Responsible AI framework with recurring algorithmic bias audits"
    ],
    categories: [
      {
        category: "AI & Recruitment",
        features: [
          {
            feature: "Live AI Video/Audio Interviews",
            sqalible: "Native real-time conversational screening with rubric scoring",
            sqalibleStatus: "full",
            competitor: "Not natively supported (requires external ATS integration)",
            competitorStatus: "no",
            note: "Sqalible interviews candidates live with human review."
          },
          {
            feature: "Resume Scoring Velocity",
            sqalible: "Instant rubric parsing within 15 minutes of application",
            sqalibleStatus: "full",
            competitor: "Standard keyword parsing without semantic depth",
            competitorStatus: "partial",
            note: "Sqalible analyzes problem-solving reasoning."
          },
          {
            feature: "Responsible AI & Bias Audits",
            sqalible: "Published anti-bias policy and transparent audit logs",
            sqalibleStatus: "full",
            competitor: "Proprietary features without published bias audit methodology",
            competitorStatus: "partial",
            note: "Ensures compliance with international hiring standards."
          }
        ]
      },
      {
        category: "Offboarding & Security",
        features: [
          {
            feature: "Mandatory Exit Governance",
            sqalible: "5 enforced compliance gates (IT, HR, Finance, Admin, Legal)",
            sqalibleStatus: "full",
            competitor: "Standard checklist without automated gate enforcement",
            competitorStatus: "partial",
            note: "Prevents incomplete offboardings."
          },
          {
            feature: "Automated SSO & Access Revocation",
            sqalible: "Instant single-click deprovisioning on employee's final day",
            sqalibleStatus: "full",
            competitor: "Manual IT communication or basic SCIM sync",
            competitorStatus: "partial",
            note: "Eliminates lingering zombie account risks."
          },
          {
            feature: "Hardware Asset Return Tracking",
            sqalible: "Integrated serial number verification & courier tracking",
            sqalibleStatus: "full",
            competitor: "Basic asset tagging without return logistics integration",
            competitorStatus: "partial",
            note: "Ensures zero missing corporate hardware."
          }
        ]
      },
      {
        category: "Payroll & Statutory Compliance",
        features: [
          {
            feature: "Indian Statutory Compliance (PF/ESI/TDS)",
            sqalible: "Automated ECR filing, PT slabs across 28 states, and TDS",
            sqalibleStatus: "full",
            competitor: "Fully supported Indian payroll compliance",
            competitorStatus: "full",
            note: "Both platforms excel in Indian statutory rules."
          },
          {
            feature: "Statutory Gratuity Act 1972 Engine",
            sqalible: "Built-in 15/26 formula, 5-year eligibility, and ₹20L cap",
            sqalibleStatus: "full",
            competitor: "Standard gratuity calculation rules",
            competitorStatus: "full",
            note: "Accurate FnF settlement processing."
          },
          {
            feature: "International & GCC WPS Support",
            sqalible: "Multi-country payroll with GCC WPS SIF and US tax handling",
            sqalibleStatus: "full",
            competitor: "Primarily focused on Indian tax and compliance",
            competitorStatus: "partial",
            note: "Sqalible supports cross-border global teams."
          }
        ]
      }
    ],
    migrationSteps: [
      { step: "01", title: "Automated Keka Data Extraction", desc: "Export employee masters, compensation history, and leave records using our pre-built Keka CSV migration templates." },
      { step: "02", title: "Parallel Payroll Dry-Run", desc: "Run your monthly payroll in parallel across both platforms to verify penny-perfect gross, tax, and deduction calculations." },
      { step: "03", title: "Zero-Downtime Team Switch", desc: "Invite your workforce to their new intuitive mobile and web portals with their complete historical leave and payslip archives." }
    ],
    evaluationQuestions: [
      "Does Keka support conversational live AI interviews with adaptive technical questions?",
      "How does Keka guarantee that an employee's Slack and Google Workspace access is revoked the minute their offboarding is signed off?",
      "What is Keka's roadmap for non-Indian international payroll and GCC WPS compliance?",
      "Can employees get permission-aware instant answers to company policy queries without opening an HR support ticket?"
    ]
  },
  darwinbox: {
    name: "Darwinbox",
    tagline: "Evaluating Sqalible vs Darwinbox for enterprise workforce agility",
    summary:
      "Darwinbox is a prominent enterprise HCM catering to large conglomerates across Asia. While Darwinbox excels at complex multinational implementations, growing enterprises often find its implementation cycles long and its AI features bolted-on. Sqalible offers rapid time-to-value, transparent pricing, and native AI workflows.",
    competitorStrengths: [
      "Extensive footprint with large Asian conglomerates (10,000+ employees)",
      "Broad multi-module HCM suite covering enterprise talent management",
      "Established enterprise sales and field implementation presence"
    ],
    sqalibleEdge: [
      "Rapid deployment: Go live in weeks rather than 6 to 9 months of expensive consultancy",
      "Transparent metered AI pricing without multi-year locked implementation contracts",
      "Modern AI live interview engine built directly into recruitment, not an add-on partner module",
      "Developer-friendly modern APIs and real-time webhook telemetry"
    ],
    categories: [
      {
        category: "Implementation & Agility",
        features: [
          {
            feature: "Time to Full Production Go-Live",
            sqalible: "2 to 4 weeks using self-serve migration wizards",
            sqalibleStatus: "full",
            competitor: "Typically 4 to 9 months requiring dedicated system integrators",
            competitorStatus: "partial",
            note: "Sqalible dramatically lowers time-to-value."
          },
          {
            feature: "Pricing Transparency & Flexibility",
            sqalible: "Simple per-user tier with metered AI usage",
            sqalibleStatus: "full",
            competitor: "Custom enterprise quotes with heavy mandatory implementation fees",
            competitorStatus: "partial",
            note: "No hidden consultants or unexpected customization invoices."
          },
          {
            feature: "Modern Developer API & Webhooks",
            sqalible: "GraphQL & REST APIs with real-time event streaming",
            sqalibleStatus: "full",
            competitor: "Enterprise legacy SOAP/REST connectors requiring SI support",
            competitorStatus: "partial",
            note: "Easy integration into modern engineering pipelines."
          }
        ]
      },
      {
        category: "AI & Innovation",
        features: [
          {
            feature: "Live Autonomous Technical Interviews",
            sqalible: "Real-time speech-to-speech screening with human sign-off",
            sqalibleStatus: "full",
            competitor: "Chatbot interfaces primarily for basic Q&A and leave requests",
            competitorStatus: "partial",
            note: "Sqalible acts as an active technical interviewer."
          },
          {
            feature: "Predictive Attrition & Sentiment Alerts",
            sqalible: "Continuous objective engagement telemetry with privacy safeguards",
            sqalibleStatus: "full",
            competitor: "Periodic survey-based engagement scoring",
            competitorStatus: "partial",
            note: "Detects flight risks before formal resignation."
          }
        ]
      }
    ],
    migrationSteps: [
      { step: "01", title: "Enterprise Schema Mapping", desc: "Map your complex Darwinbox organizational hierarchies, entities, and grade structures directly into Sqalible." },
      { step: "02", title: "Data Ingestion & Integrity Audit", desc: "Automated scripts validate thousands of employee files, statutory IDs, and historical salary structures." },
      { step: "03", title: "Departmental Phase-In", desc: "Roll out by department or regional subsidiary with zero disruption to active business operations." }
    ],
    evaluationQuestions: [
      "What is the total estimated implementation cost and timeline for Darwinbox, including third-party consulting fees?",
      "Is Darwinbox's AI built natively into every workflow or delivered via third-party software partnerships?",
      "Can mid-market and fast-growing enterprise teams make workflow configuration changes without hiring certified consultants?",
      "How responsive is Darwinbox's standard customer support for day-to-day administrative requests?"
    ]
  },
  greythr: {
    name: "greytHR",
    tagline: "Evaluating Sqalible vs greytHR for modern workforce operations",
    summary:
      "greytHR is a venerable Indian payroll and leave management system trusted for basic compliance across small-to-mid businesses. Sqalible brings an AI-native architecture, advanced candidate screening, modern employee experience, and global workforce readiness.",
    competitorStrengths: [
      "Long-standing reputation for basic Indian payroll and statutory compliance",
      "Economical entry point for small manufacturing and retail outfits",
      "Established compliance filing workflows for PF, ESI, and PT"
    ],
    sqalibleEdge: [
      "Full lifecycle from Hire to Exit (greytHR requires separate tools for recruitment and AI)",
      "Autonomous AI live interview screening reducing time-to-hire by 70%",
      "Modern consumer-grade UI and 5-star mobile experience",
      "Comprehensive multi-state and international workforce support"
    ],
    categories: [
      {
        category: "Workforce Lifecycle Scope",
        features: [
          {
            feature: "End-to-End Lifecycle Coverage",
            sqalible: "Unified Hire, Onboard, Manage, Grow, Exit & Analytics platform",
            sqalibleStatus: "full",
            competitor: "Primarily payroll and leave management; limited recruitment",
            competitorStatus: "partial",
            note: "Eliminates the need for multiple disconnected software subscriptions."
          },
          {
            feature: "Live AI Candidate Screening",
            sqalible: "Included natively in Platform Hire module",
            sqalibleStatus: "full",
            competitor: "Not available in greytHR suite",
            competitorStatus: "no",
            note: "Save hundreds of recruiter hours on first rounds."
          },
          {
            feature: "User Interface & Experience",
            sqalible: "Modern B2B design system with smooth mobile self-service",
            sqalibleStatus: "full",
            competitor: "Traditional desktop-first interface with older UX paradigms",
            competitorStatus: "partial",
            note: "Higher employee adoption and lower training overhead."
          }
        ]
      }
    ],
    migrationSteps: [
      { step: "01", title: "Direct greytHR Payroll Export", desc: "Export employee master, attendance history, and salary cards in standard formats." },
      { step: "02", title: "Automated Field Mapping", desc: "Our migration tool automatically matches greytHR salary components and tax rules into Sqalible." },
      { step: "03", title: "Launch with Mobile Access", desc: "Equip employees with modern iOS and Android apps for leaves, payslips, and self-service." }
    ],
    evaluationQuestions: [
      "Does greytHR provide modern applicant tracking and AI-driven candidate interviews?",
      "How does greytHR handle hardware asset tracking and automated IT access revocation during exits?",
      "Can greytHR support our international employees in the Middle East, US, or Europe on a single unified platform?"
    ]
  }
};

export function ComparePage() {
  const { slug = "keka" } = useParams();
  const currentKey = competitorsData[slug] ? slug : "keka";
  const data = competitorsData[currentKey];

  const comparisonFaqs = [
    {
      q: `How long does an enterprise migration from ${data.name} to Sqalible typically take?`,
      a: "Most mid-market migrations complete in 2 to 3 weeks. Our dedicated data squad extracts and validates historical employee records, leave balances, and salary history using automated schema translation tools."
    },
    {
      q: `Can we run payroll in parallel with ${data.name} before full cutover?`,
      a: "Yes. We recommend and support a 1-month parallel dry-run where payroll calculations, statutory deductions (PF, ESI, TDS), and attendance sync run concurrently on both systems to guarantee penny-perfect accuracy."
    },
    {
      q: `Are historical salary slips and tax documents preserved during the switch?`,
      a: "Yes. All previous years' Form 16s, signed appointment letters, and historical payslips are securely archived and remain accessible to employees via their self-service portal."
    }
  ];

  return (
    <PageLayout>
      {/* 1. Established Dark Branded Hero Section */}
      <section className="bg-neutral-900 border-b border-neutral-800 pt-28 pb-14 md:pt-32 md:pb-18 px-6 text-white">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/why-sqalible" className="hover:text-white transition-colors">Why Sqalible</Link>
            <span>/</span>
            <span className="text-teal-400 font-semibold">Sqalible vs {data.name}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-none border border-teal-500/30 bg-teal-950/60 px-3.5 py-1 text-xs font-semibold text-teal-300">
                <ScaleIcon size={14} className="text-teal-400" />
                Objective B2B Platform Comparison
              </div>

              <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Sqalible vs {data.name}
              </h1>

              <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                {data.summary}
              </p>

              {/* Quick Competitor Switcher Tabs */}
              <div className="mt-8 flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-semibold text-neutral-400 mr-1">Compare another platform:</span>
                {Object.keys(competitorsData).map((k) => (
                  <Link
                    key={k}
                    to={`/compare/${k}`}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                      currentKey === k
                        ? "bg-primary text-white shadow-sm"
                        : "border border-neutral-800 bg-neutral-800/80 text-neutral-300 hover:bg-neutral-800 hover:text-white"
                    }`}
                  >
                    vs {competitorsData[k].name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[540px] xl:max-w-[580px] rounded-xl overflow-hidden border border-neutral-700/60 bg-[#0E1620] shadow-2xl shadow-black/60 group hover:border-teal-500/40 transition-all duration-300">
                {/* Modern Window Title Bar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#080D14] border-b border-white/10 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-neutral-400 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span>app.sqalible.com/compare/{currentKey}</span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Screenshot Frame Area */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-950">
                  <CompetitorCompareHeroCard competitor={currentKey} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dark Section: Key Architectural Differentiators */}
      <section className="bg-[#0A0E17] text-white py-14 md:py-20 px-6 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <div className="w-full mb-10">
            <p className="pretitle text-teal-400">Head-to-Head Architecture</p>
            <h2 className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-white">
              Key Platform Differentiators
            </h2>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              A balanced breakdown of where {data.name} has traditional strengths vs where Sqalible's AI-native foundation excels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Competitor Strengths Card */}
            <div className="rounded-none border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">{data.name} Established Strengths</h3>
                <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-semibold text-neutral-300">
                  Legacy Paradigm
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {data.competitorStrengths.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-neutral-300">
                    <CheckIcon size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sqalible AI-Native Advantage Card */}
            <div className="rounded-none border border-teal-500/40 bg-teal-950/30 p-6 sm:p-8 shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-teal-500/30">
                <h3 className="text-lg font-bold text-white">The Sqalible AI-Native Edge</h3>
                <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-bold text-neutral-950">
                  Next-Gen Platform
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                {data.sqalibleEdge.map((e) => (
                  <li key={e} className="flex items-start gap-3 text-sm text-teal-100 font-medium">
                    <CheckCircle2Icon size={16} className="text-teal-400 shrink-0 mt-0.5" />
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Detailed Feature Comparison Matrix */}
      <section className="bg-[#FAFAFA] py-16 md:py-24 px-6 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <div className="w-full mb-12">
            <p className="pretitle text-primary">Feature by Feature</p>
            <h2 className="mt-1.5 text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Detailed Platform Comparison Matrix
            </h2>
            <p className="mt-3 text-base text-neutral-600 leading-relaxed">
              Objective evaluation across recruitment velocity, statutory payroll, access governance, and employee experience.
            </p>
          </div>

          {/* Continuous Structured Table with Precise Column Alignment */}
          <div className="overflow-x-auto rounded-none border border-neutral-200 bg-white shadow-xs">
            <table className="w-full min-w-[760px] table-fixed border-collapse text-left">
              <colgroup>
                <col className="w-[36%]" />
                <col className="w-[32%]" />
                <col className="w-[32%]" />
              </colgroup>
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50 text-xs font-bold uppercase tracking-wider text-neutral-600">
                  <th className="py-4 px-6 text-neutral-500">Capability & Architectural Scope</th>
                  <th className="py-4 px-6 text-teal-900 font-extrabold bg-teal-50/60 border-x border-teal-100">
                    Sqalible (AI-Native)
                  </th>
                  <th className="py-4 px-6 text-neutral-700">{data.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {data.categories.map((cat) => (
                  <React.Fragment key={cat.category}>
                    {/* Category Header Row spanning across all columns */}
                    <tr className="border-y border-neutral-200 bg-neutral-100/80">
                      <td colSpan={3} className="py-3.5 px-6">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-900">
                            {cat.category}
                          </span>
                          <span className="text-[11px] font-medium text-neutral-500">Evaluation Criteria</span>
                        </div>
                      </td>
                    </tr>

                    {/* Feature Rows */}
                    {cat.features.map((f) => (
                      <tr key={f.feature} className="border-b border-neutral-100 hover:bg-neutral-50/50 transition-colors">
                        {/* Capability Column */}
                        <td className="py-5 px-6 align-top">
                          <span className="block text-sm sm:text-base font-bold text-neutral-900 leading-snug">
                            {f.feature}
                          </span>
                          <span className="block text-xs text-neutral-500 mt-1 leading-relaxed">
                            {f.note}
                          </span>
                        </td>

                        {/* Sqalible (AI-Native) Column */}
                        <td className="py-5 px-6 align-top bg-teal-50/20 border-x border-teal-100/70">
                          <div className="mb-2">
                            <StatusBadge status={f.sqalibleStatus} isSqalible />
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-neutral-900 leading-relaxed">
                            {f.sqalible}
                          </p>
                        </td>

                        {/* Competitor Column */}
                        <td className="py-5 px-6 align-top">
                          <div className="mb-2">
                            <StatusBadge status={f.competitorStatus} />
                          </div>
                          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                            {f.competitor}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Dark Section: Zero-Disruption Migration & Evaluation Questions */}
      <section className="bg-[#0A0E17] text-white py-12 md:py-16 px-6 border-b border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <div className="w-full mb-8">
            <p className="pretitle text-teal-400">Zero Disruption</p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white">
              Switching from {data.name} to Sqalible
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400">
              Our dedicated migration squad handles automated schema mapping, document imports, and parallel payroll dry-runs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {data.migrationSteps.map((m) => (
              <div key={m.step} className="rounded-none border border-white/10 bg-white/5 p-6 relative">
                <span className="text-3xl font-extrabold text-teal-400 block mb-2">{m.step}</span>
                <h3 className="text-base font-bold text-white">{m.title}</h3>
                <p className="mt-2 text-xs text-neutral-400 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          {/* Questions to Ask Demo Box */}
          <div className="mt-10 rounded-none border border-white/15 bg-white/5 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-2">
              Key Questions to Ask {data.name} During Your Evaluation
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Use these checklist items to evaluate whether an existing platform meets your modern AI and governance requirements:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {data.evaluationQuestions.map((q) => (
                <li key={q} className="flex items-start gap-3 text-xs text-neutral-300">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 font-bold text-xs mt-0.5">
                    ?
                  </span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Light Full-Width FAQ Section */}
      <FaqSection
        faqs={comparisonFaqs}
        pretitle="Migration & Comparison FAQs"
        title={`Sqalible vs ${data.name} FAQs`}
        className="bg-white py-12 md:py-16 border-b border-neutral-200"
      />

      {/* 6. Brand-Consistent CTA Section */}
      <PageCta
        title={data.name.toLowerCase().includes("keka") ? "Get a migration plan" : `Get a migration plan from ${data.name}`}
        className="bg-white pt-4 pb-14 md:pt-6 md:pb-16"
      />
    </PageLayout>
  );
}

function StatusBadge({ status, isSqalible }: { status: "full" | "partial" | "no"; isSqalible?: boolean }) {
  if (status === "full") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${
          isSqalible ? "bg-teal-100 text-teal-800" : "bg-emerald-100 text-emerald-800"
        }`}
      >
        <CheckCircle2Icon size={13} className={isSqalible ? "text-teal-600" : "text-emerald-600"} />
        <span>Full Support</span>
      </span>
    );
  }
  if (status === "partial") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-amber-100 text-amber-800">
        <MinusCircleIcon size={13} className="text-amber-600" />
        <span>Partial / Add-on</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold bg-neutral-100 text-neutral-600">
      <XCircleIcon size={13} className="text-neutral-400" />
      <span>Not Supported</span>
    </span>
  );
}