import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import {
  Code2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Users,
  Check,
  Zap,
  Clock,
  Layers,
  Sparkles,
  FileSpreadsheet,
  Workflow,
  Cpu,
} from "lucide-react";

export function ItServicesPage() {
  const [activeTab, setActiveTab] = useState<"utilization" | "tasks">("utilization");

  const budgets = [
    { project: "Acme Retail · Checkout API", percent: 72, hours: "144h / 200h", color: "bg-[#12B886]", alert: null },
    { project: "Northwind · Cloud Pipeline", percent: 108, hours: "162h / 150h", color: "bg-[#E5484D]", alert: "Exceeded budget (+8%)" },
    { project: "Contoso · Infra Audit", percent: 46, hours: "46h / 100h", color: "bg-[#12B886]", alert: null },
    { project: "Fabrikam · Core Services", percent: 91, hours: "182h / 200h", color: "bg-[#F5A524]", alert: "Approaching cap" },
  ];

  const itFaqs = [
    {
      q: "Can startups customize salary structures and rate cards?",
      a: "Yes. Deskmerit supports role-based and project-based rate cards. You can assign billable rates per engineer seniority ($45/hr to $150+/hr) and compare revenue generated against underlying payroll costs.",
    },
    {
      q: "How long does team rollout and Jira onboarding take?",
      a: "Under 10 minutes. Engineers generate a personal scoped Jira or Azure DevOps token, connect it to the Deskmerit desktop agent, and immediately start tracking time against assigned sprint backlog tasks.",
    },
    {
      q: "How does Deskmerit prevent timesheet disputes with clients?",
      a: "By tethering every minute to active issue ticket IDs (e.g., KMB-482). When invoices are generated, clients receive transparent audit logs showing exact ticket timestamps, eliminating contested hours.",
    },
    {
      q: "Can we track non-billable bench time separately?",
      a: "Yes. Deskmerit automatically distinguishes client-billable project time from internal training, bench standby, and administrative meetings, giving leadership true margin and utilization metrics.",
    },
    {
      q: "Will our developers push back against surveillance?",
      a: "No, because Deskmerit is built on a zero-surveillance architecture: zero keystroke logging, zero webcam spying, and zero covert snooping. Engineers retain full visibility into what is recorded.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* ========================================================================= */}
        {/* 1. DARK HERO SECTION (Exact Reference Image 2 Layout)                     */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-20 lg:pt-12 lg:pb-28 relative overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#12B886]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb matching Reference */}
            <div className="text-xs text-[#20C997] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <Link to="/solutions" className="hover:underline text-slate-300">Solutions</Link>
              <span className="text-slate-500">/</span>
              <span>Startups & High-Growth Scaleups</span>
            </div>

            <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headline, Overline, Description & CTAs */}
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#20C997] bg-[#20C997]/10 px-3 py-1 rounded-full inline-block border border-[#20C997]/20">
                  FOR HIGH-GROWTH SCALEUPS & IT SERVICES
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  Deskmerit for Startups & <span className="text-[#FF5A36]">High-Growth Scaleups</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  Automate delivery tracking, prove every billable hour to clients, and streamline sprint operations without micro-management or keystroke surveillance.
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
              </div>

              {/* Right Column: Browser Window Mockup with macOS Controls (Image 2 Match) */}
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                  {/* Browser Top Bar with 3 Dots */}
                  <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                      <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                      <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                      app.deskmerit.com/solutions/it-services
                    </div>
                    <div className="text-[11px] font-bold text-[#20C997] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#20C997] animate-pulse" />
                      Active Engine
                    </div>
                  </div>

                  {/* Dashboard Preview Body */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div>
                        <div className="text-xs font-bold text-white">Sprint 42 · Billable Utilization</div>
                        <div className="text-[11px] text-slate-400">8 Engineers · 3 Enterprise Accounts</div>
                      </div>
                      <div className="px-2.5 py-1 rounded-lg bg-[#20C997]/20 border border-[#20C997]/40 text-[#20C997] font-bold text-xs">
                        92% Billable
                      </div>
                    </div>

                    {/* Progress Bars (Budget vs Actual) */}
                    <div className="space-y-3">
                      {budgets.map((b) => (
                        <div key={b.project} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-slate-200">{b.project}</span>
                            <span className="font-mono text-slate-300 font-bold">{b.hours}</span>
                          </div>
                          <div className="h-2.5 rounded-full bg-slate-800 overflow-hidden flex">
                            <div
                              style={{ width: `${Math.min(b.percent, 100)}%` }}
                              className={`h-full ${b.color} transition-all`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 grid grid-cols-2 gap-3 text-center">
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Unassigned Bench</div>
                        <div className="text-base font-bold text-white mt-0.5">0 Engineers</div>
                      </div>
                      <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Audit Confidence</div>
                        <div className="text-base font-bold text-[#20C997] mt-0.5">100% Jira Verified</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. WORKFLOWS FEATURE GRID (White background matching Reference Image 2)   */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#20C997] mb-2">
                CORE CAPABILITIES / WORKFLOWS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.03em]">
                Workflows Engineered for Startups & High-Growth Scaleups
              </h2>
              <p className="text-sm sm:text-base text-[#4A5370] mt-2 max-w-2xl">
                Built specifically for rapid delivery teams needing audit-grade time tracking without administrative overhead.
              </p>
            </div>

            {/* 3 Column Cards with Icons & Checkmark Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#20C997] hover:shadow-lg transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8FBF5] text-[#20C997] flex items-center justify-center">
                    <Workflow className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ★ Key Module
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#20C997] transition-colors">
                  Autonomous Jira & DevOps Tracking
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mt-2 mb-6">
                  Engineers start tracking straight from their assigned Jira or Azure DevOps task ticket with a single shortcut key.
                </p>
                <ul className="space-y-2.5 text-xs text-[#0F1730]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#20C997] shrink-0" /> Scoped personal tokens, zero admin passwords
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#20C997] shrink-0" /> Automatic ticket number & title binding
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#20C997] shrink-0" /> Full offline sync queue via Rust daemon
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#20C997] hover:shadow-lg transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8FBF5] text-[#20C997] flex items-center justify-center">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    Billing Automation
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#20C997] transition-colors">
                  Zero-Friction Invoicing & Margins
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mt-2 mb-6">
                  Turn sprint logs into client-ready billing invoices with exact hourly rates, retainer burn rates, and budget caps.
                </p>
                <ul className="space-y-2.5 text-xs text-[#0F1730]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#20C997] shrink-0" /> Multi-tier rate cards by engineer seniority
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#20C997] shrink-0" /> Automated budget overrun warning alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#20C997] shrink-0" /> Audit-matched Excel, CSV & REST API export
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#20C997] hover:shadow-lg transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8FBF5] text-[#20C997] flex items-center justify-center">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    Resource Intelligence
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#20C997] transition-colors">
                  Real-Time Bench & Capacity Planning
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mt-2 mb-6">
                  Spot unassigned engineers and project scope creep weeks before they turn into costly unbilled overhead.
                </p>
                <ul className="space-y-2.5 text-xs text-[#0F1730]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#20C997] shrink-0" /> Weekly billable vs non-billable ratio
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#20C997] shrink-0" /> Early alert on approaching contract caps
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#20C997] shrink-0" /> 1-click sync with Sqalible HRMS attendance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. MEASURABLE IMPACT / STATS (Slate-50 background matching Image 2)       */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-[#20C997] mb-2">
                MEASURABLE IMPACT
              </div>
              <h2 className="text-3xl font-extrabold text-[#0F1730] tracking-[-0.03em]">
                Why Choose Deskmerit for Startups & High-Growth Scaleups?
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-4xl sm:text-5xl font-black text-[#0F1730] tracking-tight">10x</div>
                <div className="text-xs font-bold text-[#4A5370] mt-2">Faster client audit sign-offs</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-4xl sm:text-5xl font-black text-[#0F1730] tracking-tight">100%</div>
                <div className="text-xs font-bold text-[#4A5370] mt-2">Defensible Jira-verified hours</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-4xl sm:text-5xl font-black text-[#0F1730] tracking-tight">2 mins</div>
                <div className="text-xs font-bold text-[#4A5370] mt-2">Per-engineer rollout time</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-4xl sm:text-5xl font-black text-[#0F1730] tracking-tight">Zero</div>
                <div className="text-xs font-bold text-[#4A5370] mt-2">Keystroke or surveillance friction</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. ADDRESSING CRITICAL FRICTION (Dark navy background matching Image 2)   */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#0A1628] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#20C997] mb-2">
                CRITICAL FRICTION POINTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.03em]">
                Addressing Critical Friction for Modern Delivery Teams
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Friction 1 */}
              <div className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Manual Timesheet Bottlenecks</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Engineers guessing hours on Friday afternoons leads to under-reported billable time and invoice friction. Deskmerit logs directly as work happens.
                </p>
              </div>

              {/* Friction 2 */}
              <div className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Messy Client Retainer Disputes</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Enterprise clients dispute vague monthly timesheets. Deskmerit gives them transparent task timestamps and sprint milestone links.
                </p>
              </div>

              {/* Friction 3 */}
              <div className="p-6 rounded-2xl bg-[#0F1E36] border border-slate-800 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Scattered Records & Ghost Bench</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Disconnected HR, Jira, and spreadsheets conceal bench time until profitability takes a hit. Deskmerit unifies time and attendance in one record.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SPLIT FAQ SECTION (Matching Reference Image 2)                         */}
        {/* ========================================================================= */}
        <DeskmeritFaq
          title="Startups & High-Growth Scaleups FAQs"
          category="COMMON QUESTIONS"
          customFaqs={itFaqs}
          helpTitle="Need Help Choosing the Right Scaleup Setup?"
          helpDescription="Speak directly with our engineering delivery specialists to tailor Deskmerit for your pods, clients, and contracts."
        />

        {/* ========================================================================= */}
        {/* 6. FINAL CTA BAND                                                         */}
        {/* ========================================================================= */}
        <DeskmeritCtaBand
          title="Ready to transform workforce operations with Deskmerit for Startups & Scaleups?"
          subtitle="Install in under 2 minutes. Free 14-day trial, no credit card required."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
