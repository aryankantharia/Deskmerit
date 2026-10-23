import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ShieldCheckIcon,
  ClockIcon,
  Globe2Icon,
  LayersIcon,
  LockIcon,
  CheckIcon,
  TrendingUpIcon,
  UsersIcon,
  ScaleIcon
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { FaqSection } from "../components/FaqSection";
import { PageCta } from "../components/layout/PageCta";

function RocketIcon(props: React.SVGProps<SVGSVGElement> & { size?: number }) {
  const { size = 24, ...rest } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-2.05 11a22.35 22.35 0 0 1-4 3z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 9v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

// 1. "How ScalForce Works" - 3 simple box cards matching reference sizing and content
const howItWorksCards = [
  {
    icon: UsersIcon,
    title: "Employment Handled. You Stay in Control.",
    description:
      "We handle the employment, you handle the team. We’re the legal employer on paper, but you remain in charge of who gets hired, what they work on and how it gets done."
  },
  {
    icon: ShieldCheckIcon,
    title: "We keep up with the rules, so you don't have to.",
    description:
      "State rules, country regulations, contractor classifications, tax thresholds – employment requirements constantly shift. Keeping pace can feel like a full time job, and missing something can be expensive. ScalForce handles it all for you."
  },
  {
    icon: TrendingUpIcon,
    title: "Slash the real costs of being an employer",
    description:
      "Being an employer means absorbing the costs, compliance and admin that come with it – it all adds up well beyond a salary. ScalForce is typically 34% cheaper than direct employment and up to 80% less than labour hire, for a transparent fee of just 5% of payroll processed."
  }
];

// 2. "Why Businesses Choose ScalForce" - 5 capability cards + 1 CTA card, all rounded-none brand cards
const keyBenefits = [
  {
    icon: RocketIcon,
    title: "Rapid Workforce Scaling",
    desc: "Spin up specialized technical squads or scale up for business peaks in days, without long-term entity lock-in or bureaucratic delay."
  },
  {
    icon: ClockIcon,
    title: "Dramatically Reduced Admin",
    desc: "Break free from payroll reconciliations, tax withholding filings, and statutory challans. Keep your leadership focused on building product and revenue."
  },
  {
    icon: Globe2Icon,
    title: "Frictionless Market Expansion",
    desc: "Employ top talent across regions without waiting 6–12 months to incorporate local subsidiaries or navigate unfamiliar local authorities."
  },
  {
    icon: LayersIcon,
    title: "Centralized Workforce Operations",
    desc: "Direct employees and ScalForce team members live in the exact same Sqalible dashboard. One interface for attendance, leave, OKRs, and approvals."
  },
  {
    icon: LockIcon,
    title: "Future-Proof Governance",
    desc: "Rest assured knowing every contract, pay slip, asset handover, and statutory contribution is logged with cryptographic audit trails and ISO 27001 standards."
  }
];

// 3. ScalForce FAQs matching website standard
const scalforceFaqs = [
  {
    q: "How long does it take to start hiring through ScalForce?",
    a: "Most companies can deploy talent and issue locally compliant contracts within 2 to 3 business days. ScalForce holds established corporate entities and verified statutory registrations, completely bypassing the 6-to-12-month timeline typically needed to incorporate local subsidiaries."
  },
  {
    q: "Do I maintain operational command over who gets hired and daily work?",
    a: "Yes, absolutely. You retain 100% control over hiring decisions, compensation levels, daily tasks, sprint goals, and performance management. ScalForce strictly handles the back-office legal paperwork, monthly payroll runs, statutory filings, and tax compliance."
  },
  {
    q: "Can our existing employees and ScalForce hires use the same Sqalible login?",
    a: "Yes. Both direct entity hires and ScalForce workforce members operate within the exact same Sqalible AI-Native HRMS. Attendance, shifts, leave requests, OKRs, and org charts live in one unified system with zero duplicate data entry."
  },
  {
    q: "How are intellectual property (IP) and proprietary work products protected?",
    a: "Every ScalForce employment agreement includes comprehensive, legally vetted IP assignment and strict confidentiality clauses. All intellectual property, software code, and deliverables created by the talent belong 100% exclusively to your company."
  },
  {
    q: "What fees does ScalForce charge?",
    a: "ScalForce operates on a completely transparent workforce infrastructure fee of just 5% of payroll processed, with zero hidden setup costs, no corporate entity maintenance retainers, and no long-term lock-in."
  },
  {
    q: "Can we transition team members from ScalForce to our own entity in the future?",
    a: "Yes. Whenever you choose to incorporate your own legal entity in that jurisdiction, you can seamlessly migrate team members from ScalForce to your entity with zero disruption to their attendance telemetry, review history, or system credentials."
  }
];

export function ScalForcePage() {
  return (
    <PageLayout>
      {/* 1. Standard Website Page Hero (Matches all other pages) */}
      <PageHero
        crumbs={[{ title: "ScalForce" }]}
        pretitle="Shared Employment Infrastructure"
        title="Hire Anywhere with ScalForce. End-to-End Employment."
        description="Scale your workforce without the overhead, delays, and liability of establishing local legal entities. ScalForce acts as the Employer of Record on paper—handling contracts, statutory payroll, and compliance—while you maintain 100% operational command of your team."
        image="/heroes/scalforce-global-hero.jpg"
        imageAlt="ScalForce Global Workforce & Shared Employment Infrastructure"
        actions={
          <>
            <Link
              to="/scalforce/direct-employment-vs-scalforce"
              className="rounded-full bg-primary hover:bg-teal-600 px-7 py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 inline-flex items-center gap-2"
            >
              Direct Employment vs ScalForce
              <ArrowRightIcon size={16} strokeWidth={2} />
            </Link>
            <a
              href="/contact"
              className="rounded-full border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 px-6 py-3.5 text-xs font-semibold text-neutral-200 transition-colors inline-flex items-center gap-2"
            >
              Book a consultation
            </a>
          </>
        }
      />

      {/* 2. Operational Metrics & Compliance Strip */}
      <section className="bg-neutral-50 border-b border-neutral-200 py-10" aria-label="Key standards">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">100%</p>
              <p className="text-xs sm:text-sm font-semibold text-neutral-700 mt-1">Statutory Adherence</p>
              <p className="text-[11px] text-neutral-500 mt-0.5">Automated PF, ESI & TDS filings</p>
            </div>
            <div className="p-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">0 Days</p>
              <p className="text-xs sm:text-sm font-semibold text-neutral-700 mt-1">Entity Setup Delay</p>
              <p className="text-[11px] text-neutral-500 mt-0.5">Hire immediately on verified entities</p>
            </div>
            <div className="p-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">SOC-2 Type II</p>
              <p className="text-xs sm:text-sm font-semibold text-neutral-700 mt-1">ISO 27001 Certified</p>
              <p className="text-[11px] text-neutral-500 mt-0.5">Bank-grade data isolation & RBAC</p>
            </div>
            <div className="p-4">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">1 Platform</p>
              <p className="text-xs sm:text-sm font-semibold text-neutral-700 mt-1">Unified Sqalible HRMS</p>
              <p className="text-[11px] text-neutral-500 mt-0.5">Same portal for all team members</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How ScalForce Works - Simple Cards matching Reference (content and box sizing) */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200" aria-labelledby="how-it-works-title">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="how-it-works-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">
              How ScalForce works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {howItWorksCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group rounded-none border border-neutral-200 bg-white p-8 flex flex-col justify-start shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-11 w-11 rounded-none bg-teal-50 text-teal-700 group-hover:bg-primary group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-6 shadow-xs [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-extrabold text-neutral-900 leading-snug">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm text-neutral-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Two Options. One Connected Platform - Exact Dark 2-Column Layout */}
      <section className="bg-[#0A0E17] text-white py-14 md:py-20 px-6 border-b border-neutral-800" aria-labelledby="differentiators-title">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <p className="pretitle text-teal-400">Head-to-Head Architecture</p>
              <h2 id="differentiators-title" className="mt-1.5 text-2xl sm:text-3xl font-extrabold text-white">
                Key Platform Differentiators
              </h2>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed max-w-2xl">
                A balanced breakdown of where Direct Employment in your entity has traditional strengths vs where ScalForce's AI-native foundation excels.
              </p>
            </div>
            <Link
              to="/scalforce/direct-employment-vs-scalforce"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-teal-500/40 bg-teal-950/60 hover:bg-teal-900/80 px-5 py-2 text-xs font-semibold text-teal-300 transition-colors"
            >
              <ScaleIcon size={14} />
              See Side-by-Side Comparison
              <ArrowRightIcon size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Direct Employment Strengths Card */}
            <div className="group rounded-none border border-white/10 bg-white/5 p-6 sm:p-8 shadow-xs hover:border-white/20 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <h3 className="text-lg font-bold text-white">Direct Employment Established Strengths</h3>
                <span className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-semibold text-neutral-300">
                  Legacy Paradigm
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckIcon size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                  <span>Direct ownership of legal employment contracts for companies with registered regional entities</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckIcon size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                  <span>Internal payroll and HR teams retain hands-on statutory remittance accounting</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckIcon size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                  <span>Familiar corporate governance structure for long-established headquarters</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-neutral-300">
                  <CheckIcon size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                  <span>Full operational visibility and workflow automation inside Sqalible software</span>
                </li>
              </ul>
            </div>

            {/* ScalForce AI-Native Advantage Card */}
            <div className="group rounded-none border border-teal-500/40 bg-teal-950/30 p-6 sm:p-8 shadow-lg hover:border-teal-500/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between pb-4 border-b border-teal-500/30">
                <h3 className="text-lg font-bold text-white">The ScalForce AI-Native Edge</h3>
                <span className="rounded-full bg-teal-500 px-3 py-1 text-xs font-bold text-neutral-950">
                  Next-Gen Platform
                </span>
              </div>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm text-teal-100 font-medium">
                  <CheckCircle2Icon size={16} className="text-teal-400 shrink-0 mt-0.5" />
                  <span>Zero corporate entity wait time — hire and deploy technical squads in days</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-teal-100 font-medium">
                  <CheckCircle2Icon size={16} className="text-teal-400 shrink-0 mt-0.5" />
                  <span>Automated statutory compliance with 100% on-time payroll, tax withholdings, and audits</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-teal-100 font-medium">
                  <CheckCircle2Icon size={16} className="text-teal-400 shrink-0 mt-0.5" />
                  <span>Native conversational AI live interviews and continuous attendance telemetry</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-teal-100 font-medium">
                  <CheckCircle2Icon size={16} className="text-teal-400 shrink-0 mt-0.5" />
                  <span>Unified Sqalible workspace for all staff with single sign-on and 5-gate offboarding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Businesses Choose ScalForce - NO border-radius, clean brand cards */}
      <section className="py-20 md:py-28 bg-white border-b border-neutral-200" aria-labelledby="why-choose-title">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-14">
            <p className="pretitle text-primary mb-2">PROVEN ENTERPRISE VELOCITY</p>
            <h2 id="why-choose-title" className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Why Businesses Choose ScalForce
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              When scaling your workforce, operational agility is everything. ScalForce combines regulatory safety with extreme execution speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyBenefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="group rounded-none border border-neutral-200 bg-white p-7 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="h-11 w-11 rounded-none bg-teal-50 text-teal-700 group-hover:bg-primary group-hover:text-white transition-colors duration-200 flex items-center justify-center mb-5 shadow-xs [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal mt-2.5">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* CTA Card (Bottom-left dark card style, rounded-none) */}
            <div className="group rounded-none border border-teal-900 bg-[#06242B] p-7 text-white flex flex-col justify-between shadow-xs hover:border-teal-700 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div>
                <span className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                  READY TO ACCELERATE?
                </span>
                <h3 className="text-xl font-bold text-white mt-2 leading-snug">
                  Speak with our Workforce Architecture Team
                </h3>
                <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                  Discuss your hiring plans, regional requirements, and timeline for immediate deployment.
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-bold text-[#06242B] hover:bg-neutral-100 transition-colors gap-2"
                >
                  Book a Consultation
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Frequently Asked Questions (Standard FaqSection) */}
      <FaqSection
        faqs={scalforceFaqs}
        pretitle="Migration & Comparison FAQs"
        title="ScalForce FAQs"
        className="bg-white py-12 md:py-16 border-b border-neutral-200"
      />

      {/* 7. Website Standard Page CTA Banner */}
      <PageCta
        title="Build your team faster with ScalForce"
        className="bg-white pt-4 pb-14 md:pt-6 md:pb-16"
      />
    </PageLayout>
  );
}
