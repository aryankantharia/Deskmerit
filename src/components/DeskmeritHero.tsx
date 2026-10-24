import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  Clock,
  Layers,
  Users,
  Lock,
  BarChart3,
  FileSpreadsheet,
  Cpu,
  UserCheck,
  CheckCircle2,
} from "lucide-react";

export function DeskmeritHero() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleStartTrial = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  const partnerTools = [
    { name: "Jira Software", category: "Task Sync" },
    { name: "Azure DevOps", category: "Sprint Boards" },
    { name: "OpenProject", category: "Open Source" },
    { name: "Google Calendar", category: "Meeting Presence" },
    { name: "Outlook 365", category: "Calendar Work" },
    { name: "Slack", category: "/status Command" },
    { name: "Microsoft Teams", category: "Daily Feed" },
    { name: "Sqalible HRMS", category: "Native 1-Click Module" },
    { name: "Claude MCP Server", category: "AI Workforce Query" },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#FFFFFF] font-sans">
      {/* Background Subtle Technical Grid (Reference Image 4) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0F1730 1px, transparent 1px), linear-gradient(90deg, #0F1730 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bold Typography & Lead Capture (Reference Image 4) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-slate-200 shadow-sm text-xs font-semibold text-[#0F1730]">
              <span className="pulse-dot" />
              <span>Automatic time tracking for modern teams</span>
            </div>

            {/* H1 Headline Matching Reference Image 4 Style */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A2540] tracking-[-0.035em] leading-[1.08]">
              Know where the work goes.{" "}
              <span className="block text-[#FF5A36]">
                Without watching over shoulders.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed max-w-xl font-normal">
              Deskmerit is the automatic time tracking software your team will actually trust.
              Connect Jira or Azure DevOps, press start, and defensible client hours and attendance build on their own.
            </p>

            {/* Email Input Lead Capture (Exact Match with Image 4 [Enter email] [Let's talk]) */}
            <form onSubmit={handleStartTrial} className="pt-2 max-w-lg">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-300 focus-within:border-[#FF5A36] focus-within:ring-2 focus-within:ring-[#FF5A36]/20 shadow-sm transition-all">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="w-full px-4 py-3 text-xs sm:text-sm text-[#0F1730] placeholder-slate-400 bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 px-6 py-3 rounded-xl bg-[#0F1730] hover:bg-[#FF5A36] text-white font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span>Start free trial</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* Secondary Option & Trust Microcopy */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center gap-4 text-xs font-medium text-[#4A5370]">
                <span>or</span>
                <Link
                  to="/demo"
                  className="font-bold text-[#FF5A36] hover:underline flex items-center gap-1"
                >
                  Book a 20-minute product demo <ArrowRight className="w-3 h-3" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-[#9AA1B2]">
                <span className="flex items-center gap-1 text-[#4A5370]">
                  <Check className="w-3.5 h-3.5 text-[#12B886]" /> No credit card required
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 text-[#4A5370]">
                  <Check className="w-3.5 h-3.5 text-[#12B886]" /> Windows, macOS & Linux
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 text-[#4A5370]">
                  <Clock className="w-3.5 h-3.5 text-[#FF5A36]" /> Setup in under 10 minutes
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Exact Visual Composition Matching Reference Image 4 */}
          <div className="lg:col-span-6 relative">
            {/* Background Circular Orbit Guide Line (from Reference Image 4) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-slate-200/80 pointer-events-none -z-0" />

            <div className="relative z-10 grid grid-cols-12 gap-4 items-center">
              {/* Left & Center Block (Cols 1-8): Real Team Photo + Satellite UI Cards */}
              <div className="col-span-12 sm:col-span-8 relative">
                {/* 1. Center Team Photograph Card (Image 4 Centerpiece) */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 max-h-[340px] relative">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Engineers reviewing Jira sprint time and deliverables"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1730]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#0F1730]/80 px-2.5 py-0.5 rounded-full inline-block backdrop-blur-sm">
                      Engineering Pod Pune & Sydney
                    </span>
                    <p className="text-xs font-semibold mt-1">Sprint KMB-482: 100% Billable & Tracked</p>
                  </div>
                </div>

                {/* 2. Top-Left Floating Card: "Accounting / Jira Task" (Matching Image 4 Top Left Card) */}
                <div className="absolute -top-7 -left-5 sm:-left-8 bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-xl z-20 w-56 animate-fade-in">
                  <div className="flex items-center justify-between text-[10px] text-[#4A5370] mb-1.5 pb-1 border-b border-slate-100">
                    <span className="font-bold text-[#0F1730]">Jira Ticket Link</span>
                    <span className="text-[#12B886] font-bold">● Active</span>
                  </div>
                  <div className="font-bold text-xs text-[#0F1730] truncate">KMB-482 · API Refactor</div>
                  <div className="text-[10px] text-[#4A5370] mt-0.5 flex justify-between">
                    <span>Acme Retail</span>
                    <span className="font-mono font-bold text-[#FF5A36]">$65/hr</span>
                  </div>
                </div>

                {/* 3. Bottom-Left Floating Card: "Finance Bar Chart" (Matching Image 4 Bottom Left Card) */}
                <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xl z-20 w-52">
                  <div className="flex items-center justify-between text-[11px] font-bold text-[#0F1730] mb-2">
                    <span>Utilization</span>
                    <span className="text-[#12B886] font-mono text-[10px]">82% Prod</span>
                  </div>
                  {/* Vertical Bar Chart matching Image 4 */}
                  <div className="flex items-end justify-between h-14 gap-1.5 pt-1">
                    {[
                      { h: "60%", day: "M" },
                      { h: "75%", day: "T" },
                      { h: "90%", day: "W" },
                      { h: "100%", day: "T" },
                      { h: "85%", day: "F" },
                    ].map((bar, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-[#FF5A36] rounded-t-sm transition-all"
                          style={{ height: bar.h }}
                        />
                        <span className="text-[9px] text-slate-400 font-mono">{bar.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Bottom-Right Floating Card: "Payroll / Attendance" (Matching Image 4 Bottom Right Card) */}
                <div className="absolute -bottom-7 right-2 sm:-right-6 bg-white rounded-2xl p-3 border border-slate-200/90 shadow-xl z-20 w-48">
                  <div className="flex items-center justify-between text-[10px] font-bold text-[#0F1730] mb-1.5">
                    <span>Payroll Ready</span>
                    <span className="w-4 h-4 rounded-full bg-[#FF5A36] text-white flex items-center justify-center text-[9px] font-bold">
                      $
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#FFE6DF] text-[#C2361A] text-[9px] font-bold flex items-center justify-center">
                      AR
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#0F1730]">Ananya R.</div>
                      <div className="text-[9px] text-[#12B886] font-mono">6h 12m Present</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Vertical Stack of 3 Benefit Cards (Exact Match with Image 4 Stack) */}
              <div className="col-span-12 sm:col-span-4 flex flex-col gap-3 pt-6 sm:pt-0 z-20">
                {/* Stack Card 1: Extension of your team */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex items-center gap-3 hover:border-[#FF5A36] transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center shrink-0">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F1730]">Extension of tools</div>
                    <div className="text-[10px] text-[#4A5370]">Jira, Azure & OpenProject</div>
                  </div>
                </div>

                {/* Stack Card 2: Partner as you scale */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex items-center gap-3 hover:border-[#FF5A36] transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F1730]">Zero keylogging</div>
                    <div className="text-[10px] text-[#4A5370]">Privacy-first architecture</div>
                  </div>
                </div>

                {/* Stack Card 3: Technology expertise */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-md flex items-center gap-3 hover:border-[#FF5A36] transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F1730]">Rust desktop engine</div>
                    <div className="text-[10px] text-[#4A5370]">100% offline sync queue</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Partner Badges (Clean Continuous Row) */}
        <div className="mt-20 pt-10 border-t border-slate-100">
          <p className="text-center text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-6">
            Trusted by modern delivery teams across Jira, Azure DevOps, and Sqalible HRMS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {partnerTools.map((tool) => (
              <div
                key={tool.name}
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2 hover:border-[#FF5A36] transition-colors"
              >
                <span className="text-xs font-bold text-[#0F1730]">{tool.name}</span>
                <span className="text-[10px] text-[#4A5370] bg-white px-1.5 py-0.5 rounded border border-slate-200/50">
                  {tool.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
