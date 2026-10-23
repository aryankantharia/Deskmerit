import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle2Icon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
  LayersIcon,
  CalculatorIcon,
  ClockIcon,
  BarChart3Icon,
  CpuIcon,
  ActivityIcon,
  FileTextIcon,
  ZapIcon,
  DatabaseIcon,
  BellRingIcon,
  FileCheck2Icon
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { PageCta } from "../components/layout/PageCta";
import { SolutionCard } from "../components/SolutionCard";
import { FaqSection } from "../components/FaqSection";
import { industries } from "../data/home";
import { solutionsByRegion, solutionsBySize, solutionsByTeam, SolutionItem } from "../data/solutions";
import { NotFound } from "./NotFound";

// Combine all solution datasets
const allSolutions: SolutionItem[] = [
  ...solutionsBySize,
  ...solutionsByTeam,
  ...solutionsByRegion,
  // Add industries as SolutionItems
  ...industries.map((ind) => ({
    name: ind.name,
    href: ind.href,
    text: ind.text,
    tag: "Industry Solution",
    image: ind.image,
    heading: `AI-native workforce management engineered for ${ind.name}`,
    challenges: [
      { title: "Specialized Workforce Logistics", desc: `Managing specific ${ind.name} labor scheduling, shift exceptions, and high-volume talent pipelines.` },
      { title: "Stringent Regulatory Compliance", desc: "Adhering to strict industry-specific labor laws, statutory filings, and mandatory workforce record audits." },
      { title: "Fragmented Data Systems", desc: "Disparate tools for attendance, payroll, and recruitment creating operational friction and human error." }
    ],
    offerings: [
      {
        title: `Automated ${ind.name} Recruitment & Screening`,
        desc: "Autonomous conversational live interviews that evaluate candidates on role-specific competencies with automated scoring rubrics.",
        bullets: ["Real-time candidate evaluation", "Zero interview scheduling delay", "Consistent rubric benchmarks"]
      },
      {
        title: "Dynamic Shift & Biometric Attendance",
        desc: "Seamless synchronization with biometric hardware, facial recognition clock-ins, and automated overtime rules.",
        bullets: ["Automated shift roster builder", "Geofenced mobile check-ins", "Zero manual punch reconciliation"]
      },
      {
        title: "Integrated Statutory Payroll Engine",
        desc: "1-click wage processing with automated statutory tax calculations, PF/ESI deductions, and direct bank disbursement.",
        bullets: ["Automated tax calculations", "Error-free payroll reports", "Multi-country currency support"]
      }
    ],
    outcomes: [
      { metric: "70%", label: "Faster time-to-hire" },
      { metric: "99.99%", label: "Statutory payroll accuracy" },
      { metric: "100%", label: "Digital compliance audit trails" },
      { metric: "40%", label: "Reduction in HR operational overhead" }
    ],
    faqs: [
      { q: `How quickly can a ${ind.name} organization deploy Sqalible?`, a: "Most teams go live within 2 to 3 weeks with our automated data migration tools and dedicated setup team." },
      { q: "Can we configure custom approval workflows?", a: "Yes, you can define unlimited multi-level approval hierarchies for leaves, expenses, overtime, and salary revisions." }
    ]
  }))
];

export function SolutionPage() {
  const { slug } = useParams();

  if (!slug) {
    // Solutions Hub Page
    return (
      <PageLayout>
        <PageHero
          crumbs={[{ title: "Solutions" }]}
          pretitle="Tailored HR Solutions"
          title="Workforce solutions built for your context"
          description="Purpose-built AI workflows and statutory payroll architectures tailored for your company size, industry, department, and geographic region."
          image="/figma-screens/core-dashboard.png"
          imageAlt="Sqalible Enterprise Workforce Solutions Operations Dashboard"
        />

        {/* Hub Sections */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 space-y-16">
            <div>
              <p className="pretitle text-primary">By Company Size</p>
              <h2 className="text-2xl font-bold text-neutral-900 mt-1">From startups to global multi-entity enterprises</h2>
              <div className="grid gap-6 sm:grid-cols-3 mt-6">
                {solutionsBySize.map((s) => (
                  <SolutionCard key={s.href} item={s} />
                ))}
              </div>
            </div>

            <div>
              <p className="pretitle text-primary">By Industry</p>
              <h2 className="text-2xl font-bold text-neutral-900 mt-1">Domain-specific workforce workflows</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
                {industries.map((ind) => (
                  <SolutionCard key={ind.href} item={ind} />
                ))}
              </div>
            </div>

            <div>
              <p className="pretitle text-primary">By Region</p>
              <h2 className="text-2xl font-bold text-neutral-900 mt-1">International statutory compliance</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-6">
                {solutionsByRegion.map((r) => (
                  <SolutionCard key={r.href} item={r} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <PageCta />
      </PageLayout>
    );
  }

  const href = `/solutions/${slug}`;
  const solution = allSolutions.find((s) => s.href === href || s.href.endsWith(`/${slug}`));

  if (!solution) return <NotFound />;

  const solutionProductScreens: Record<string, string> = {
    // By size
    startups: "/figma-screens/open-jobs.png",
    "mid-market": "/figma-screens/core-dashboard.png",
    enterprise: "/dashboards/assets-core-hr-dashboard.png",
    // By industry
    "it-staffing": "/figma-screens/sourcing-dashboard.png",
    manufacturing: "/dashboards/test_attendance.png",
    healthcare: "/dashboards/attendance_requests_validation.png",
    retail: "/dashboards/employees_attendance_profile.png",
    bfsi: "/dashboards/payroll_final_settlement.png",
    // By team
    "hr-teams": "/figma-screens/employee-profile.png",
    finance: "/dashboards/payroll_final_settlement.png",
    "it-security": "/dashboards/exit_clearance_gates.png",
    leadership: "/figma-screens/workforce-insights.png",
    employees: "/figma-screens/employee-leave.png",
    // By region
    india: "/figma-screens/final-settlement.png",
    "middle-east": "/dashboards/hour_account.png",
    us: "/figma-screens/scheduled-interviews.png",
    europe: "/dashboards/scalforce-comparison-dashboard.jpg"
  };

  const solutionScreen = solutionProductScreens[slug] || "/figma-screens/core-dashboard.png";

  return (
    <PageLayout>
      {/* 1. Page Hero with Dark Background and Zero White Strip */}
      <section className="relative overflow-hidden bg-[#0A0E17] text-white pt-32 pb-16 md:pt-36 md:pb-24 px-6">
        <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-teal-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full bg-[#047B72]/20 blur-[140px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-caption text-teal-200/70 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <span>/</span>
            <span className="text-teal-300 font-medium">{solution.name}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="pretitle text-teal-400 mb-2">
                {solution.tag || "Enterprise Solution"}
              </p>

              <h1 className="text-[34px] font-extrabold leading-[42px] md:text-[48px] md:leading-[56px] text-white tracking-tight">
                Sqalible for {solution.name.replace(/^For /, "")}
              </h1>

              <p className="mt-4 text-base sm:text-lg font-normal text-neutral-300 leading-relaxed max-w-2xl">
                {solution.text}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/signup"
                  className="rounded-full bg-primary hover:bg-teal-600 px-7 py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105"
                >
                  Start free trial
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 px-6 py-3.5 text-xs font-semibold text-neutral-200 transition-colors"
                >
                  Book a demo
                </Link>
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
                    <span>app.sqalible.com/solutions/{slug}</span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Screenshot Frame Area */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={solutionScreen}
                    alt={`Sqalible for ${solution.name}`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "Comprehensive Workflows" Grid */}
      <section className="py-12 md:py-16 bg-[#FAFAFA] px-6 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <div className="w-full">
            <p className="pretitle text-primary">Comprehensive Workflows</p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Workflows Engineered for {solution.name.replace(/^For /, "")}
            </h2>
            <p className="mt-2 text-neutral-600 text-body2">
              End-to-end capabilities engineered specifically to eliminate administrative bottlenecks and accelerate workforce execution.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(solution.offerings || []).map((offering, idx) => {
              const Icon = getWorkflowIcon(offering.title, idx);
              return (
                <div
                  key={offering.title}
                  className="group flex flex-col justify-between rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-xs">
                        <Icon size={20} />
                      </div>
                      <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-600">
                        Workflow 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
                      {offering.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {offering.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 space-y-2">
                    {offering.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-xs text-neutral-700 font-medium">
                        <CheckCircle2Icon size={14} className="text-teal-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. "Why Choose Sqalible" Outcomes & Pillars */}
      <section className="py-12 md:py-16 bg-white px-6 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl">
          <div className="w-full">
            <p className="pretitle text-primary">Measurable Impact</p>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900">
              Why Choose Sqalible for {solution.name.replace(/^For /, "")}?
            </h2>
            <p className="mt-2 text-neutral-600 text-body2">
              Verifiable improvements across recruitment velocity, statutory payroll accuracy, and team productivity.
            </p>
          </div>

          {/* 4-Metric Grid */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {(solution.outcomes || []).map((o) => (
              <div key={o.label} className="rounded-none border border-neutral-200 bg-neutral-50/70 p-6">
                <span className="block text-3xl sm:text-4xl font-extrabold text-teal-700 tracking-tight">
                  {o.metric}
                </span>
                <span className="mt-2 block text-xs sm:text-sm font-semibold text-neutral-800">
                  {o.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Challenges Solved (Kombee Architectural Line-Divided Segmented Grid) */}
      {solution.challenges && solution.challenges.length > 0 && (
        <section className="bg-[#0B0F19] py-14 md:py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="w-full mb-10">
              <p className="pretitle text-teal-400">Core Challenges Solved</p>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Addressing Critical Friction for {solution.name.replace(/^For /, "")}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
                Purpose-engineered architecture designed to eliminate operational bottlenecks, statutory risks, and administrative drag.
              </p>
            </div>

            {/* Architectural Line-Divided Structure Matching Kombee Design */}
            <div className="border-t border-b border-white/15">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
                {solution.challenges.map((c, idx) => {
                  const Icon = getChallengeIcon(c.title, idx);
                  return (
                    <div
                      key={c.title}
                      className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group"
                    >
                      <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                        <Icon size={38} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {c.title}
                      </h4>
                      <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Audience FAQs */}
      {solution.faqs && solution.faqs.length > 0 && (
        <FaqSection
          faqs={solution.faqs}
          pretitle="Solution FAQs"
          title={`${solution.name} FAQs`}
          className="py-12 md:py-16 bg-[#FAFAFA]"
        />
      )}

      <PageCta title={`Ready to transform workforce operations with Sqalible for ${solution.name.replace(/^For /, "")}?`} />
    </PageLayout>
  );
}


function getWorkflowIcon(title: string, index: number) {
  const lower = title.toLowerCase();
  if (lower.includes("interview") || lower.includes("recruit") || lower.includes("talent")) return UsersIcon;
  if (lower.includes("onboard") || lower.includes("digital") || lower.includes("provision")) return LayersIcon;
  if (lower.includes("payroll") || lower.includes("tax") || lower.includes("wage") || lower.includes("cost") || lower.includes("gratuity")) return CalculatorIcon;
  if (lower.includes("attendance") || lower.includes("shift") || lower.includes("time") || lower.includes("roster")) return ClockIcon;
  if (lower.includes("security") || lower.includes("access") || lower.includes("compliance") || lower.includes("gate")) return ShieldCheckIcon;
  if (lower.includes("insight") || lower.includes("analytics") || lower.includes("intelligence") || lower.includes("report")) return BarChart3Icon;
  if (lower.includes("ai") || lower.includes("automated") || lower.includes("autonomous")) return SparklesIcon;

  const defaultIcons = [LayersIcon, ActivityIcon, FileTextIcon, UsersIcon, ShieldCheckIcon, CpuIcon];
  return defaultIcons[index % defaultIcons.length];
}

function getChallengeIcon(title: string, index: number) {
  const lower = title.toLowerCase();
  if (lower.includes("bottleneck") || lower.includes("speed") || lower.includes("scheduling") || lower.includes("trigger")) return ZapIcon;
  if (lower.includes("risk") || lower.includes("compliance") || lower.includes("flsa") || lower.includes("security") || lower.includes("audit") || lower.includes("gate")) return ShieldCheckIcon;
  if (lower.includes("payroll") || lower.includes("tax") || lower.includes("spreadsheet") || lower.includes("nexus") || lower.includes("reconciliation")) return CalculatorIcon;
  if (lower.includes("record") || lower.includes("data") || lower.includes("scattered") || lower.includes("sync") || lower.includes("system")) return DatabaseIcon;
  if (lower.includes("ticket") || lower.includes("chasing") || lower.includes("burnout") || lower.includes("repetitive") || lower.includes("alert")) return BellRingIcon;
  if (lower.includes("portal") || lower.includes("request") || lower.includes("checklist") || lower.includes("policy") || lower.includes("answer")) return FileCheck2Icon;
  if (lower.includes("candidate") || lower.includes("recruitment") || lower.includes("employee") || lower.includes("team")) return UsersIcon;

  const defaults = [ZapIcon, ShieldCheckIcon, DatabaseIcon, BellRingIcon, LayersIcon];
  return defaults[index % defaults.length];
}