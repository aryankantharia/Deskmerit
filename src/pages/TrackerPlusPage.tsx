import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { InteractiveTrackerWidget } from "../components/InteractiveTrackerWidget";
import {
  Check,
  AlertTriangle,
  FileSpreadsheet,
  Layers,
  ArrowRight,
  ShieldCheck,
  Plus,
  Play,
  RotateCw,
  Cpu,
  KeyRound,
  Database,
  Users2,
  Briefcase,
  Calculator,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export function TrackerPlusPage() {
  const [billableOnly, setBillableOnly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const timesheetData = [
    { client: "Acme Retail", task: "Checkout API refactor", source: "Jira", time: "42h 10m", value: "$2,530", billable: true },
    { client: "Acme Retail", task: "Cart bug fixes", source: "Jira", time: "11h 45m", value: "$705", billable: true },
    { client: "Northwind", task: "Billing export pipeline", source: "Azure DevOps", time: "26h 30m", value: "$1,590", billable: true, alert: "⚠ at 108% of budget" },
    { client: "Internal", task: "Sprint planning", source: "Manual", time: "6h 00m", value: "—", billable: false },
    { client: "Contoso", task: "Infra audit", source: "OpenProject", time: "18h 20m", value: "$1,100", billable: true },
  ];

  const filteredTimesheet = billableOnly
    ? timesheetData.filter((item) => item.billable)
    : timesheetData;

  const faqs = [
    {
      q: "Does Tracker Plus write anything back to Jira or Azure DevOps?",
      a: "At default configuration, Tracker Plus reads your assigned issues and tasks with read-only scopes. It never modifies, transitions, or edits your Jira/Azure DevOps tickets without explicit admin write-back configuration.",
    },
    {
      q: "What happens if a personal access token is revoked mid-session?",
      a: "The desktop agent preserves your current tracked session locally with zero data loss. It prompts the engineer with a non-intrusive re-auth modal while offline queuing preserves the exact start and end timestamps.",
    },
    {
      q: "Can two engineers link the same Jira or Azure DevOps account?",
      a: "No. Each external token is cryptographically bound to a single Deskmerit employee account to ensure strict audit integrity and prevent double-counting of working hours.",
    },
    {
      q: "Which plans include Tracker Plus?",
      a: "Tracker Plus is included on Pro, Premium, Enterprise, and the Sqalible HRMS native add-on.",
    },
    {
      q: "How does Tracker Plus prevent duplicate project names across tools?",
      a: "Tasks are indexed by tool protocol and unique database ID (e.g., `jira:KMB-482` vs `ado:9412`), never by display name. Two projects both called 'Website' across different clients remain completely separate.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* SECTION 1: Deep Navy Hero Matching Sqalible Screenshot 1 */}
        <section className="bg-[#0A0F1D] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#24305A] relative overflow-hidden">
          {/* Subtle glow / mesh in background */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FF5A36]/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute -bottom-20 right-0 w-[400px] h-[400px] bg-[#38BDF8]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb matching Reference */}
            <div className="text-xs text-[#20C997] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <Link to="/features" className="hover:underline text-slate-300">Product</Link>
              <span className="text-slate-500">/</span>
              <span>Tracker Plus</span>
            </div>

            <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Copy */}
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#20C997] bg-[#132338] px-3.5 py-1 rounded-full inline-block border border-[#20C997]/30">
                  FLAGSHIP INNOVATION · MULTI-TOOL TRACKER
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  Pick a task. Press Start.{" "}
                  <span className="text-[#FF5A36] block">Everything else is automatic.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  Other trackers treat Jira as an afterthought. Tracker Plus lets your team start time straight from the Jira, Azure DevOps, or OpenProject ticket. One click logs time, marks attendance, and updates billable reports.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all"
                  >
                    <span>Start free trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all"
                  >
                    <span>Book a demo</span>
                  </Link>
                </div>

                <div className="flex items-center gap-6 text-xs text-[#9AA1B2] pt-2">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#12B886]" /> No second login
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#12B886]" /> Works 100% offline
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#12B886]" /> Multi-tenant tokens
                  </span>
                </div>
              </div>

              {/* Right Framed App Mockup with macOS Header Dots */}
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                  {/* macOS Window Title Bar */}
                  <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                      <span className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                      <span className="w-3 h-3 rounded-full bg-[#62C554]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                      app.deskmerit.com/features/tracker-plus
                    </div>
                    <span className="text-[11px] font-bold text-[#20C997] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
                      Active Engine
                    </span>
                  </div>

                  <div className="p-6">
                    <InteractiveTrackerWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Key Capabilities (Matching Sqalible Screenshot 1) */}
        <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                Core Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight">
                Key Capabilities of Tracker Plus
              </h2>
              <p className="text-base text-[#4A5370] mt-3">
                Built specifically for software engineers, digital agencies, and IT services teams who bill by the ticket.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E2D8] text-[#0F1730] flex items-center justify-center mb-6 shadow-sm">
                    <Layers className="w-6 h-6 text-[#FF5A36]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1730] mb-3">
                    Multi-Tool Live Sync
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                    Connect Jira, Azure DevOps, and OpenProject simultaneously. Each engineer connects with their own scoped token, seeing only tickets assigned to them.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6E2D8] text-xs font-semibold text-[#0F1730] flex items-center justify-between">
                  <span>Jira & Azure DevOps</span>
                  <span className="text-[#12B886]">Zero cross-tenant leaks</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E2D8] text-[#0F1730] flex items-center justify-center mb-6 shadow-sm">
                    <FileSpreadsheet className="w-6 h-6 text-[#12B886]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1730] mb-3">
                    3-in-1 Automated Ledger
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                    A single Start button press automatically populates the engineering timesheet, registers daily attendance, and updates project cost versus budget.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6E2D8] text-xs font-semibold text-[#0F1730] flex items-center justify-between">
                  <span>Timesheet + Attendance + Billing</span>
                  <span className="text-[#12B886]">1 Click</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E2D8] text-[#0F1730] flex items-center justify-center mb-6 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-[#38BDF8]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1730] mb-3">
                    Collision & Duplicate Shield
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                    Identically named tasks across different clients are indexed strictly by tool protocol and task ID. Reports never merge separate client engagements.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6E2D8] text-xs font-semibold text-[#0F1730] flex items-center justify-between">
                  <span>Audit-grade keying</span>
                  <span className="text-[#12B886]">100% separate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Deep Dark Section "How Tracker Plus Operates In Practice" (Sqalible Screenshot 1) */}
        <section className="py-20 lg:py-28 bg-[#0A0F1D] text-white border-b border-[#24305A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                Technical Execution Pipeline
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                How Tracker Plus Operates in Practice
              </h2>
              <p className="text-base text-[#9AA1B2] mt-3">
                From engineer authorization to defensible invoice export: an immutable, four-step pipeline.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-[#0F1730] border border-[#24305A] relative">
                <span className="text-2xl font-black text-[#FF5A36] font-mono block mb-4">01</span>
                <h3 className="text-base font-bold text-white mb-2">Trigger / Initiation</h3>
                <p className="text-xs text-[#9AA1B2] leading-relaxed">
                  Admin enables Jira or Azure DevOps connector once. Employee pastes personal token verified securely via OAuth/PAT.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-[#0F1730] border border-[#24305A] relative">
                <span className="text-2xl font-black text-[#FF5A36] font-mono block mb-4">02</span>
                <h3 className="text-base font-bold text-white mb-2">Policy Validation & Routing</h3>
                <p className="text-xs text-[#9AA1B2] leading-relaxed">
                  Assigned issues fetch in real-time. System enforces project billable rate limits and verifies user access rights.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-[#0F1730] border border-[#24305A] relative">
                <span className="text-2xl font-black text-[#FF5A36] font-mono block mb-4">03</span>
                <h3 className="text-base font-bold text-white mb-2">Execution & Offline Telemetry</h3>
                <p className="text-xs text-[#9AA1B2] leading-relaxed">
                  Rust desktop daemon logs active intervals. Offline queue protects against spotty Wi-Fi with automatic local ledger sync.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-2xl bg-[#0F1730] border border-[#24305A] relative">
                <span className="text-2xl font-black text-[#FF5A36] font-mono block mb-4">04</span>
                <h3 className="text-base font-bold text-white mb-2">Central Sync & Ledger Stamp</h3>
                <p className="text-xs text-[#9AA1B2] leading-relaxed">
                  Hours land against client billing codes. Timesheet lock prevents retroactive tampering and prepares audited invoices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Value Delivered Across Your Organization (Sqalible Screenshot 1) */}
        <section className="py-20 lg:py-24 bg-[#F7F4EE] border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                Business Impact
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight">
                Value Delivered Across Your Organization
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Persona 1: Engineering */}
              <div className="p-8 rounded-2xl bg-white border border-[#E6E2D8] shadow-card">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FFE6DF] text-[#C2361A] mb-4 inline-block">
                  For Engineering Teams
                </span>
                <h3 className="text-xl font-bold text-[#0F1730] mb-2">
                  Zero Friday Timesheet Anxiety
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                  Developers hate filling timesheets from fuzzy memory. Tracker Plus runs in the background of their IDE and Jira tickets with zero micromanagement.
                </p>
              </div>

              {/* Persona 2: Delivery */}
              <div className="p-8 rounded-2xl bg-white border border-[#E6E2D8] shadow-card">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#E0F2FE] text-[#0369A1] mb-4 inline-block">
                  For Delivery Leads
                </span>
                <h3 className="text-xl font-bold text-[#0F1730] mb-2">
                  Real-Time Burn-Down Clarity
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                  Spot over-servicing before client budgets overrun. If a sprint ticket reaches 90% of estimated hours, team leads receive instant notifications.
                </p>
              </div>

              {/* Persona 3: Finance */}
              <div className="p-8 rounded-2xl bg-white border border-[#E6E2D8] shadow-card">
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#D1FAE5] text-[#065F46] mb-4 inline-block">
                  For Finance & Billing
                </span>
                <h3 className="text-xl font-bold text-[#0F1730] mb-2">
                  100% Defensible Invoices
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                  Deliver itemized client invoices backed by verified ticket IDs and active working time. Clients approve billing cycles in days, not weeks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Signature Split FAQ Layout (Deskmerit Standard) */}
        <DeskmeritFaq
          title="Questions, Answered Honestly"
          category="FAQS"
          customFaqs={faqs}
          helpTitle="Need Help Choosing the Right Setup?"
          helpDescription="Our solutions engineers can show you how Tracker Plus maps onto your Jira boards, Azure DevOps pipelines, or Sqalible HRMS directory in minutes."
        />

        {/* SECTION 6: High-Impact Full-Width CTA Banner */}
        <section className="bg-[#0F1730] text-white py-16 lg:py-20 border-b border-[#24305A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 bg-[#172348] p-8 sm:p-12 rounded-[24px] border border-[#2B3969] shadow-2xl">
              <div className="space-y-2 max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                  Get Started Today
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  Experience Tracker Plus in action with your own Jira tasks.
                </h3>
                <p className="text-xs sm:text-sm text-[#9AA1B2]">
                  Set up in under 10 minutes. No credit card required. Cancel anytime.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
                <Link
                  to="/signup"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-xs text-center transition-all shadow-md hover:shadow-glow-ember"
                >
                  Start free trial
                </Link>
                <Link
                  to="/demo"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#24305A] hover:bg-[#334173] text-white font-semibold text-xs text-center border border-[#384574] transition-all"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskmeritFooter />
    </div>
  );
}
