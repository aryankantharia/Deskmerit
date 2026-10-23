import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckIcon,
  SparklesIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  Building2Icon,
  LayersIcon,
  CpuIcon,
  ZapIcon,
  ClockIcon,
  TrendingUpIcon
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { FaqSection } from "../components/FaqSection";
import { PageCta } from "../components/layout/PageCta";
import { Button } from "../components/Button";

const flexibilityPillars = [
  {
    title: "Stay in control",
    description: "Keep ownership of your team, culture and decisions",
    icon: ZapIcon
  },
  {
    title: "Reduce complexity",
    description: "Replace disconnected tools with one system",
    icon: LayersIcon
  },
  {
    title: "Save time on admin",
    description: "Automate repetitive work and reduce manual effort",
    icon: ClockIcon
  },
  {
    title: "Scale with confidence",
    description: "Choose the model that fits today — and evolve as you grow",
    icon: TrendingUpIcon
  }
];

const platformSharedPillars = [
  {
    icon: LayersIcon,
    title: "Unified Core Modules",
    description: "Attendance clock-ins, geo-fenced shifts, PTO calendars, company directory, and self-service portals operate seamlessly across all team members."
  },
  {
    icon: CpuIcon,
    title: "Native Sqalible AI Smarts",
    description: "AI resume parsing, live candidate video interviews, biometric matching, and automated tax calculations happen directly inside database triggers."
  },
  {
    icon: ShieldCheckIcon,
    title: "Continuous Security & RBAC",
    description: "SOC-2 Type II standards, 256-bit AES encryption, granular permission gates, and transparent audit logging keep all workforce data secure."
  }
];

const compareFaqs = [
  {
    q: "How long does it take to start hiring through ScalForce compared to Direct Employment?",
    a: "Under Direct Employment, setting up a new corporate legal entity, tax registrations, and bank accounts typically requires 6 to 12 months. With ScalForce, you can issue compliant offer letters and deploy candidates in days using our verified employment infrastructure."
  },
  {
    q: "Do I maintain operational control over my employees with ScalForce?",
    a: "Yes, 100%. You select the candidates, determine compensation, assign daily priorities, run sprints, conduct performance reviews, and shape company culture. ScalForce strictly acts as the legal employer on paper, handling statutory payroll, labor law compliance, and tax withholdings."
  },
  {
    q: "Are both models managed through the exact same Sqalible software?",
    a: "Yes. Both Direct Employment and ScalForce team members log into the exact same Sqalible AI-Native HRMS. Attendance tracking, shift rosters, leave approvals, OKRs, and employee directories exist in one centralized system with zero dual-entry."
  },
  {
    q: "How are intellectual property (IP) and proprietary assets protected under ScalForce?",
    a: "All ScalForce employment agreements contain robust, legally vetted IP assignment covenants and non-disclosure clauses. Any work product created by the employee is automatically and irrevocably owned by your company."
  },
  {
    q: "Can our company use Direct Employment for HQ and ScalForce for regional squads?",
    a: "Yes, absolutely. Many growing companies run a hybrid model: directly employing headquarters personnel in their primary operating entity while scaling regional engineering or sales hubs through ScalForce without forming additional subsidiaries."
  },
  {
    q: "Can we transition employees from ScalForce to our own entity later?",
    a: "Yes. If your company eventually incorporates a local entity, ScalForce supports frictionless employee migration. All historical performance records, attendance logs, and system credentials remain uninterrupted in Sqalible."
  }
];

export function ScalForceComparePage() {

  return (
    <PageLayout>
      {/* 1. Standard Website Page Hero (Matches all other pages) */}
      <PageHero
        crumbs={[{ title: "ScalForce", href: "/scalforce" }, { title: "Direct Employment vs ScalForce" }]}
        pretitle="Employment Model Comparison"
        title="Direct Employment vs ScalForce"
        description="Manage employment in-house with Sqalible's AI-Native HRMS, or let us handle compliance, payroll, and contracts for you with ScalForce. Whichever model you choose, your team operates on the exact same intelligent Sqalible platform."
        image="/heroes/scalforce-compare-hero.jpg"
        imageAlt="Direct Employment vs ScalForce Strategic Workforce Model"
        actions={
          <a
            href="/contact"
            className="rounded-full bg-primary hover:bg-teal-600 px-7 py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Request a Consultation
            <ArrowRightIcon size={16} strokeWidth={2} />
          </a>
        }
      />

      {/* 2. Side-by-Side Model Overview Section (Matches Image 1 Pricing Card Design) */}
      <section className="py-16 md:py-20 bg-[#FAF7F2] border-b border-neutral-200" aria-labelledby="model-cards-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="pretitle text-primary">Two Flexible Paths to Workforce Scale</p>
            <h2 id="model-cards-title" className="mt-2 text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              One Single Platform. Delivered Your Way.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600">
              Sqalible brings together hiring, attendance, payroll, compliance, and employee operations into one connected system. Choose the engagement model that best aligns with your corporate structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto items-stretch">
            {/* Card 1: Direct Employment (Image 1 Starter Card Style) */}
            <div className="group flex flex-col justify-between rounded-none border border-neutral-300 bg-white p-7 sm:p-8 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    IN-HOUSE LIFECYCLE
                  </span>
                  <span className="rounded bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600">
                    Your Entity
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <div className="h-10 w-10 rounded-none bg-neutral-100 text-neutral-700 group-hover:bg-primary group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0 shadow-xs [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <Building2Icon size={20} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-neutral-900">
                    Direct Employment
                  </h3>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed min-h-[40px]">
                  You are the legal employer. We provide the AI platform. Complete internal control for companies with registered regional entities.
                </p>

                {/* Price / Model Block */}
                <div className="mt-6 pb-6 border-b border-neutral-200">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                      Software Model
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    In-house legal entity required · Direct statutory remit
                  </p>
                </div>

                {/* Key Inclusions List */}
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    KEY INCLUSIONS:
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <CheckIcon size={15} className="text-primary shrink-0 mt-0.5" />
                      <span>Direct employment contracts, digital offer letters & e-signatures</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <CheckIcon size={15} className="text-primary shrink-0 mt-0.5" />
                      <span>In-house payroll execution, tax withholdings & bank file generation</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <CheckIcon size={15} className="text-primary shrink-0 mt-0.5" />
                      <span>Statutory filings (PF, ESI, TDS challans) submitted by your team</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <CheckIcon size={15} className="text-primary shrink-0 mt-0.5" />
                      <span>Corporate labor law compliance, internal policies & handbooks</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <CheckIcon size={15} className="text-primary shrink-0 mt-0.5" />
                      <span>Full operational direction of sprints, appraisals & company culture</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <Button
                  variant="secondary"
                  href="/platform"
                  className="w-full justify-center !rounded-full !py-2.5 text-xs font-bold"
                >
                  Explore Platform
                </Button>
              </div>
            </div>

            {/* Card 2: ScalForce (Image 1 Growth "Most Popular" Card Style) */}
            <div className="group relative flex flex-col justify-between rounded-none border-2 border-primary bg-gradient-to-b from-white via-white to-[#F2FBF9] p-7 sm:p-8 shadow-md hover:border-teal-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              {/* Most Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md flex items-center gap-1">
                <SparklesIcon size={12} />
                Most Popular
              </div>

              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    SHARED INFRASTRUCTURE
                  </span>
                  <span className="rounded bg-teal-100 text-teal-800 border border-teal-300 px-2.5 py-0.5 text-[11px] font-bold">
                    Zero Entity Delay
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <div className="h-10 w-10 rounded-none bg-teal-50 text-teal-700 group-hover:bg-primary group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0 shadow-xs [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <BriefcaseIcon size={20} />
                  </div>
                  <h3 className="text-2xl font-extrabold text-neutral-900">
                    ScalForce
                  </h3>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed min-h-[40px]">
                  ScalForce is the legal employer on paper. You run the day-to-day team. Rapid expansion without corporate entity overhead or regulatory liability.
                </p>

                {/* Price / Model Block */}
                <div className="mt-6 pb-6 border-b border-neutral-200">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                      Hosted Model
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Zero entity wait time · Transparent fee of 5% of payroll
                  </p>
                </div>

                {/* Key Inclusions List */}
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    KEY INCLUSIONS:
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <CheckIcon size={15} className="text-teal-600 shrink-0 mt-0.5" />
                      <span><strong>Everything in Direct Employment, plus:</strong></span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <CheckIcon size={15} className="text-teal-600 shrink-0 mt-0.5" />
                      <span>Zero corporate entity wait time — hire and deploy in 2–3 days</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <CheckIcon size={15} className="text-teal-600 shrink-0 mt-0.5" />
                      <span>100% on-time statutory payroll, PF/ESI & tax remittal guarantee</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <CheckIcon size={15} className="text-teal-600 shrink-0 mt-0.5" />
                      <span>Complete employer statutory liability shield & labor audit defense</span>
                    </li>
                    <li className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                      <CheckIcon size={15} className="text-teal-600 shrink-0 mt-0.5" />
                      <span>5-gate offboarding with automated full & final (F&F) legal settlement</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <Button
                  variant="primary"
                  href="/contact"
                  className="w-full justify-center !rounded-full !py-2.5 text-xs font-bold shadow-md"
                >
                  Request a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Built for Businesses That Need Flexibility (Matches Reference Section) */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200" aria-labelledby="flexibility-title">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="flexibility-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              Built for businesses that need flexibility
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              No two businesses run employment the same way. Sqalible gives you the flexibility to choose — without switching platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {flexibilityPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group rounded-none border border-neutral-200 bg-white p-7 sm:p-8 flex flex-col justify-start shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-11 w-11 rounded-none bg-teal-50 text-teal-700 group-hover:bg-primary group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-6 shadow-xs [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Whichever Model You Choose Section (Kombee Architectural Segmented Grid with 3 Cards Old Content) */}
      <section className="bg-[#0B0F19] py-14 md:py-20 text-white border-b border-neutral-800" aria-labelledby="same-engine-title">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-10">
            <p className="pretitle text-teal-400">Connected Infrastructure</p>
            <h2 id="same-engine-title" className="mt-1 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Whichever Model You Choose, You’re Powered by the Same Sqalible Platform
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl">
              A transparent operational engine designed for speed, accountability, and compliance integrity across all employment models.
            </p>
          </div>

          {/* Architectural Line-Divided Structure (3 Columns Old Content) */}
          <div className="border-t border-b border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {platformSharedPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group"
                  >
                    <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                      <Icon size={38} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Diagnostic Decision Guide (Pricing Card Style reference, removed lock-in card) */}
      <section className="py-16 md:py-24 bg-white border-b border-neutral-200" aria-labelledby="decision-guide-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="pretitle text-primary">DECISION FRAMEWORK</p>
            <h2 id="decision-guide-title" className="mt-1.5 text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Which Employment Model Is Right for You?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Find the best fit for your organizational maturity, geographic presence, and growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Direct Employment Diagnostic Card */}
            <div className="group rounded-none border border-neutral-300 bg-white p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="h-10 w-10 rounded-none bg-neutral-100 text-neutral-700 group-hover:bg-primary group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0 shadow-xs [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <Building2Icon size={20} />
                  </div>
                  <h3 className="text-xl font-extrabold text-neutral-900">
                    Direct Employment is right if:
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-700 mt-6">
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 mt-0.5">
                      <CheckIcon size={13} strokeWidth={2.5} />
                    </span>
                    <span>You have an established local legal entity in the operating jurisdiction.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 mt-0.5">
                      <CheckIcon size={13} strokeWidth={2.5} />
                    </span>
                    <span>You maintain dedicated in-house HR, payroll, and accounting personnel.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 mt-0.5">
                      <CheckIcon size={13} strokeWidth={2.5} />
                    </span>
                    <span>You prefer direct legal ownership of statutory tax registrations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 mt-0.5">
                      <CheckIcon size={13} strokeWidth={2.5} />
                    </span>
                    <span>You want to automate internal operations with Sqalible’s AI software.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <Button
                  variant="secondary"
                  href="/platform"
                  className="w-full justify-center !rounded-full !py-2 text-xs font-bold"
                >
                  Explore Software Platform
                </Button>
              </div>
            </div>

            {/* ScalForce Diagnostic Card */}
            <div className="group relative rounded-none border-2 border-primary bg-gradient-to-b from-white via-white to-[#F2FBF9] p-7 sm:p-8 flex flex-col justify-between shadow-md hover:border-teal-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="h-10 w-10 rounded-none bg-teal-50 text-teal-700 group-hover:bg-primary group-hover:text-white transition-colors duration-200 flex items-center justify-center shrink-0 shadow-xs [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <BriefcaseIcon size={20} />
                  </div>
                  <h3 className="text-xl font-extrabold text-neutral-900">
                    ScalForce is right if:
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-700 mt-6">
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 mt-0.5">
                      <CheckIcon size={13} strokeWidth={2.5} />
                    </span>
                    <span>You want to hire immediately without waiting months for local corporate entities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 mt-0.5">
                      <CheckIcon size={13} strokeWidth={2.5} />
                    </span>
                    <span>You want to eliminate payroll paperwork, statutory filings, and audit stress.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 mt-0.5">
                      <CheckIcon size={13} strokeWidth={2.5} />
                    </span>
                    <span>You want expert legal and payroll specialists managing back-office administration.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 mt-0.5">
                      <CheckIcon size={13} strokeWidth={2.5} />
                    </span>
                    <span>You need the flexibility to scale specialized cohorts or test new regions.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <Button
                  variant="primary"
                  href="/contact"
                  className="w-full justify-center !rounded-full !py-2 text-xs font-bold shadow-xs"
                >
                  Request a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comparison FAQs (Standard FaqSection matching website standard) */}
      <FaqSection
        faqs={compareFaqs}
        pretitle="Migration & Comparison FAQs"
        title="Direct Employment vs ScalForce FAQs"
        className="bg-white py-12 md:py-16 border-b border-neutral-200"
      />

      {/* 7. Website Standard Page CTA Banner (Matches all other pages) */}
      <PageCta
        title="Run employment your way with ScalForce"
        className="bg-white pt-4 pb-14 md:pt-6 md:pb-16"
      />
    </PageLayout>
  );
}
