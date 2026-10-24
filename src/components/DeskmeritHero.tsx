import React from "react";
import { Link } from "react-router-dom";
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

  const partnerTools = [
    {
      name: "Jira Software",
      category: "Task Sync",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <path d="M11.53 2c0 5.25 4.25 9.5 9.5 9.5h.97v-1.94c0-4.17-3.39-7.56-7.56-7.56H11.53z" fill="#0052CC"/>
          <path d="M6.78 6.75c0 5.25 4.25 9.5 9.5 9.5h.97v-1.94c0-4.17-3.39-7.56-7.56-7.56H6.78z" fill="#2684FF"/>
          <path d="M2.03 11.5c0 5.25 4.25 9.5 9.5 9.5h.97v-1.94c0-4.17-3.39-7.56-7.56-7.56H2.03z" fill="#0052CC"/>
        </svg>
      ),
    },
    {
      name: "Azure DevOps",
      category: "Sprint Boards",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <path d="M22 6.84L14.7 2 6.5 5.5v4.3l5.2 2.3-5.2 2.3v4.1L14.7 22 22 17.16V6.84z" fill="#0078D7"/>
          <path d="M6.5 9.8l5.2 2.3-5.2 2.3L2 12l4.5-2.2z" fill="#005A9E"/>
        </svg>
      ),
    },
    {
      name: "OpenProject",
      category: "Open Source",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#1A5380"/>
          <circle cx="12" cy="12" r="5" fill="#35C4EE"/>
          <circle cx="12" cy="12" r="2.2" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: "Google Calendar",
      category: "Meeting Presence",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="3" y="4" width="18" height="17" rx="3" fill="#FFFFFF" stroke="#4285F4" strokeWidth="1.5"/>
          <path d="M3 8h18" stroke="#4285F4" strokeWidth="1.5"/>
          <circle cx="8" cy="12" r="1.3" fill="#EA4335"/>
          <circle cx="12" cy="12" r="1.3" fill="#FBBC05"/>
          <circle cx="16" cy="12" r="1.3" fill="#34A853"/>
          <circle cx="8" cy="16" r="1.3" fill="#4285F4"/>
          <circle cx="12" cy="16" r="1.3" fill="#EA4335"/>
          <circle cx="16" cy="16" r="1.3" fill="#34A853"/>
        </svg>
      ),
    },
    {
      name: "Outlook 365",
      category: "Calendar Work",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="7" y="4" width="14" height="16" rx="2" fill="#0078D4"/>
          <rect x="3" y="7" width="9" height="10" rx="1.5" fill="#005A9E"/>
          <circle cx="7.5" cy="12" r="2.3" fill="#FFFFFF" fillOpacity="0.9"/>
        </svg>
      ),
    },
    {
      name: "Slack",
      category: "/status Command",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M6 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 2 2v-5H7v3z" fill="#E01E5A"/>
          <path d="M9 6a2 2 0 1 1-2-2v2h2zm0 1a2 2 0 1 1 2 2H6V7h3z" fill="#36C5F0"/>
          <path d="M18 9a2 2 0 1 1 2 2h-2V9zm-1 0a2 2 0 1 1-2-2v5h2V9z" fill="#2EB67D"/>
          <path d="M15 18a2 2 0 1 1 2 2v-2h-2zm0-1a2 2 0 1 1-2-2h5v2h-3z" fill="#ECB22E"/>
        </svg>
      ),
    },
    {
      name: "Microsoft Teams",
      category: "Daily Feed",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="7" y="4" width="14" height="16" rx="3" fill="#5059C9"/>
          <rect x="3" y="7" width="9" height="10" rx="2" fill="#7B83EB"/>
          <path d="M6 10h3v4H6z" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: "Sqalible HRMS",
      category: "Native 1-Click Module",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="#0F1730"/>
          <circle cx="12" cy="12" r="5" fill="#FF5A36"/>
          <circle cx="12" cy="12" r="2" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: "Claude MCP Server",
      category: "AI Workforce Query",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="#CC785C"/>
          <path d="M12 6l1.8 4.2L18 12l-4.2 1.8L12 18l-1.8-4.2L6 12l4.2-1.8L12 6z" fill="#FFFFFF"/>
        </svg>
      ),
    },
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

            {/* Direct High-Converting CTAs (Email input removed as requested) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E04422] text-white font-bold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.32)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all"
              >
                <span>Start free trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0F1730] font-bold text-sm border border-slate-300 shadow-sm hover:border-slate-400 transition-all"
              >
                <span>Book a demo</span>
              </Link>
            </div>

            {/* Standalone Trust & Platform Badges (Clean, Responsive, Independent Modern Pills) */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-50/80 border border-emerald-200/80 text-xs font-bold text-[#0F1730] shadow-xs hover:border-emerald-300 transition-colors">
                <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#12B886] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>14-day free trial</span>
                <span className="text-[11px] font-normal text-emerald-800">· No card needed</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-[#0F1730] shadow-xs hover:border-slate-300 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-200/80 flex items-center justify-center text-[#0F1730] shrink-0 text-[10px] font-mono font-black">
                  OS
                </span>
                <span>Windows, macOS & Linux</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFE6DF]/70 border border-[#FFD4CA] text-xs font-bold text-[#0F1730] shadow-xs hover:border-[#FF5A36] transition-colors">
                <span className="w-5 h-5 rounded-full bg-[#FFE6DF] flex items-center justify-center text-[#FF5A36] shrink-0">
                  <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>10-minute setup</span>
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

        {/* Integration Partner Badges (Screenshot 2: Horizontally Scrollable Track + Prominent Large Logos) */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-100 relative">
          <p className="text-center text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-6">
            Trusted by modern delivery teams across Jira, Azure DevOps, and Sqalible HRMS
          </p>

          {/* Left & Right gradient edge masks indicating horizontal scroll */}
          <div className="absolute left-0 top-16 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-16 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Horizontally scrollable single track */}
          <div className="overflow-x-auto no-scrollbar scroll-smooth py-2 px-4 sm:px-8">
            <div className="flex items-center gap-3.5 sm:gap-4 w-max mx-auto">
              {partnerTools.map((tool) => (
                <div
                  key={tool.name}
                  className="group shrink-0 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/90 hover:border-[#FF5A36] shadow-subtle hover:shadow-md transition-all flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5 group-hover:scale-105 transition-transform">
                    {tool.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#0F1730] whitespace-nowrap">
                      {tool.name}
                    </div>
                    <div className="text-[10px] text-[#4A5370] whitespace-nowrap">
                      {tool.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
