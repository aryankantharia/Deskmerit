import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ShieldCheckIcon,
  UsersIcon,
  LaptopIcon,
  ClockIcon,
  CreditCardIcon,
  LineChartIcon,
  LogOutIcon,
  SparklesIcon,
  LucideIcon
} from "lucide-react";

interface LifecycleStage {
  id: string;
  name: string;
  badge: string;
  title: string;
  desc: string;
  metric: string;
  image: string;
  link: string;
  bullets: string[];
  icon: LucideIcon;
  isAiLayer?: boolean;
}

const stages: LifecycleStage[] = [
  {
    id: "hire",
    name: "1. Hire",
    badge: "Recruitment & Screening",
    title: "Autonomous Live Interview & Candidate Screening",
    desc: "AI conducts structured technical and behavioral first rounds 24/7. Evaluates real architectural reasoning, generates explainable rubrics, and submits candidates for final human sign-off.",
    metric: "70% Reduction in Time-to-Hire",
    image: "/dashboards/ai-interview-dashboard.png",
    link: "/platform/hire",
    bullets: [
      "24/7 live AI interview with adaptive questioning",
      "Automated rubric scoring against role competencies",
      "Human-in-the-loop sign-off before any decision"
    ],
    icon: UsersIcon
  },
  {
    id: "onboard",
    name: "2. Onboard",
    badge: "Digital Provisioning",
    title: "Zero-Delay Hardware & Account Provisioning",
    desc: "Turn accepted offer letters into active employee records in minutes. Automatically issue digital asset assignments, collect verified KYC tax forms, and sync email/Slack accounts.",
    metric: "Day-One Work Readiness",
    image: "/dashboards/assets-core-hr-dashboard.png",
    link: "/platform/onboard",
    bullets: [
      "Digital document collection & automated KYC checks",
      "Asset tracking & IT serial number allocation",
      "Automated Google Workspace & Slack provisioning"
    ],
    icon: LaptopIcon
  },
  {
    id: "manage",
    name: "3. Manage",
    badge: "Workforce Operations",
    title: "Biometric Attendance & Single Employee Master",
    desc: "Real-time sync between physical biometric turnstiles, mobile geofenced check-ins, and shift rosters. Never lose a work hour to manual spreadsheets or attendance disputes.",
    metric: "100% Real-Time Attendance Sync",
    image: "/dashboards/attendance_calendar_view.png",
    link: "/platform/manage",
    bullets: [
      "ZKTeco & Matrix biometric hardware gateway",
      "Dynamic shift planning & overtime rules",
      "Self-service leave requests with automated manager alerts"
    ],
    icon: ClockIcon
  },
  {
    id: "pay",
    name: "4. Pay",
    badge: "Statutory Payroll",
    title: "Automated Multi-Tier Statutory Payroll Runs",
    desc: "Seamless payroll calculations directly connected to biometric attendance telemetry. Enforces 100% statutory compliance for PF, ESI, TDS, and Gratuity with one-click bank disbursals.",
    metric: "99.99% Statutory Payroll Accuracy",
    image: "/dashboards/payroll_final_settlement.png",
    link: "/platform/pay",
    bullets: [
      "Automated PF, ESI, Professional Tax & TDS withholding",
      "Direct bank integration (HDFC, ICICI, RazorpayX)",
      "Instant password-protected digital payslip delivery"
    ],
    icon: CreditCardIcon
  },
  {
    id: "grow",
    name: "5. Grow",
    badge: "Performance & OKRs",
    title: "Continuous 360 Feedback & Objective OKRs",
    desc: "Move beyond stressful annual appraisals. Track real project deliverables, peer feedback, and goal milestones to recognize top performers and address burnout early.",
    metric: "40% Higher Employee Retention",
    image: "/dashboards/performance_dashboard_16_10.png",
    link: "/platform/grow",
    bullets: [
      "Configurable 360-degree peer review cycles",
      "Goal tracking connected to team deliverables & project milestones",
      "Transparent promotion ladders & internal mobility"
    ],
    icon: LineChartIcon
  },
  {
    id: "exit",
    name: "6. Exit",
    badge: "Access Governance",
    title: "5-Gate Offboarding & Instant Access Revocation",
    desc: "Guaranteed zero zombie accounts. Enforce strict sequential sign-offs across IT hardware return, finance clearance, and HR exit interviews with automated credential revocation.",
    metric: "Zero Zombie Accounts SLA",
    image: "/dashboards/exit_clearance_gates.png",
    link: "/platform/exit",
    bullets: [
      "Mandatory 5-gate departmental clearance workflow",
      "Instant SCIM/SAML token revocation across SSO",
      "Automated Gratuity & Full-and-Final settlement ledger"
    ],
    icon: LogOutIcon
  }
];

export function LifecycleStepper() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stages[activeStageIndex];

  return (
    <section id="lifecycle" className="bg-[#FAF7F2] py-16 md:py-24 border-b border-neutral-200" aria-labelledby="lifecycle-title">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading with Hire → Exit explicitly on second line */}
        <div className="max-w-3xl">
          <p className="pretitle text-primary">Continuous Workforce Automation</p>
          <h2 id="lifecycle-title" className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            <span>The Complete Employee Lifecycle:</span>
            <span className="block mt-1">Hire → Exit</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Every transition is unified in a single system of record. Select any stage to inspect the live software workflow.
          </p>
        </div>

        {/* Interactive Stepper Navigation Bar: 6 stages (identical styling across all screens) */}
        <div className="mt-10 flex overflow-x-auto lg:grid lg:grid-cols-6 gap-2 border-b border-neutral-300 pb-4 no-scrollbar">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStageIndex === idx;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`flex flex-col items-start p-3 text-left transition-all duration-200 cursor-pointer rounded-none border-b-2 shrink-0 min-w-[130px] lg:min-w-0 ${
                  isActive
                    ? "border-primary bg-white shadow-xs -mb-[18px] pb-[16px]"
                    : "border-transparent hover:bg-neutral-100/80 text-neutral-600"
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon
                    size={15}
                    className={isActive ? "text-primary" : "text-neutral-400"}
                  />
                  <span
                    className={`text-xs font-bold ${
                      isActive ? "text-primary" : "text-neutral-800"
                    }`}
                  >
                    {stage.name}
                  </span>
                </div>
                <span className="text-[11px] font-medium truncate w-full text-neutral-500">
                  {stage.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Interactive Showcase */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center bg-white border border-neutral-200 p-6 md:p-10 shadow-sm">
          {/* Left Column: Capability details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold mb-3 bg-teal-50 border border-teal-200 text-teal-800">
                <CheckCircle2Icon size={13} className="text-teal-600" />
                {activeStage.metric}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                {activeStage.title}
              </h3>

              <p className="mt-3 text-sm text-neutral-600 leading-relaxed font-normal">
                {activeStage.desc}
              </p>

              <ul className="mt-6 space-y-2.5">
                {activeStage.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-medium">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full shrink-0 bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
              <Link
                to={activeStage.link}
                className="inline-flex items-center gap-2 text-xs font-bold transition-colors text-primary hover:text-teal-700"
              >
                Inspect detailed architecture
                <ArrowRightIcon size={14} />
              </Link>

              <span className="text-[11px] text-neutral-400 font-mono">
                Stage {activeStageIndex + 1} of 6
              </span>
            </div>
          </div>

          {/* Right Column: Live Screenshot Showcase */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-none border border-neutral-300 bg-[#0A0E17] shadow-xl">
              {/* macOS Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 bg-[#0E1724] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2 font-mono text-[11px] text-neutral-400 truncate">
                    app.sqalible.com/{activeStage.id}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-bold text-teal-400 bg-teal-950/80 border border-teal-500/30 px-2 py-0.5 rounded-full">
                  {activeStage.badge}
                </span>
              </div>

              {/* Swappable Screenshot Display */}
              <div className="p-2 sm:p-3 bg-neutral-950">
                <img
                  key={activeStage.image}
                  src={activeStage.image}
                  alt={activeStage.title}
                  className="w-full h-[320px] sm:h-[400px] object-cover object-top border border-neutral-800"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
