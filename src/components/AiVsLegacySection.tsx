import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck } from "lucide-react";

export function AiVsLegacySection() {
  const comparisonRows = [
    {
      capability: "Keystroke & Input Logging",
      legacy: "Keyloggers capture sensitive passwords, client Slack messages, and internal notes.",
      pulsetrack: "Hardware input detection checks activity only — never records what is typed.",
    },
    {
      capability: "Webcam & Audio Monitoring",
      legacy: "Random webcam snaps and audio sniffing that cause anxiety and employee turnover.",
      pulsetrack: "Strictly zero webcam or audio code in desktop agent binary under any tier.",
    },
    {
      capability: "PM Ticket Integration (Tracker Plus)",
      legacy: "Separate timer tabs, manual worklog copy-pasting, and messy duplicate project names.",
      pulsetrack: "Direct Jira, Azure DevOps & OpenProject sync with personal access tokens.",
    },
    {
      capability: "Meeting & Offline Attendance",
      legacy: "Client meetings and whiteboard sessions marked absent due to no keyboard activity.",
      pulsetrack: "Calendar meetings and logged offline workshops count toward fair presence.",
    },
    {
      capability: "Employee Privacy & Self-View",
      legacy: "Secret supervisor feeds; employees only find out when reprimanded.",
      pulsetrack: "Employees see their own complete day, scores and timesheets before anyone else.",
    },
    {
      capability: "Private Time Pause",
      legacy: "Personal breaks merged into idle slacking and penalised on scores.",
      pulsetrack: "One-click Private Time pause, explicitly isolated and never counted as idle.",
    },
  ];

  return (
    <section id="why" className="border-b border-[#E6E2D8] bg-[#FFFFFF] py-20" aria-labelledby="why-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
              Architectural Benchmark
            </p>
            <h2 id="why-title" className="mt-1 text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight">
              Trust-First Tracker vs Legacy Surveillance Software
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#4A5370] max-w-2xl leading-relaxed">
              Monitoring software fails when people feel watched. PulseTrack is designed for both sides of the screen: managers get defensible answers, employees keep their dignity.
            </p>
          </div>
          <Link
            to="/compare"
            className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold text-[#FF5A36] hover:text-[#E94A27] transition-colors"
          >
            See full competitor comparison
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 3-Column Table (Capability | Legacy Trackers | PulseTrack) */}
        <div className="overflow-hidden rounded-2xl border border-[#E6E2D8] bg-[#FFFFFF] shadow-card">
          {/* Header Row */}
          <div className="grid grid-cols-12 border-b border-[#E6E2D8] font-semibold text-xs">
            <div className="col-span-3 px-6 py-4 bg-[#F7F4EE] text-[#0F1730] uppercase tracking-wider font-bold">
              Capability
            </div>
            <div className="col-span-4 px-6 py-4 border-x border-[#E6E2D8] bg-[#F7F4EE]/70 text-[#4A5370] font-bold">
              Legacy Trackers (DeskTime, Hubstaff, Time Doctor)
            </div>
            <div className="col-span-5 flex items-center justify-between bg-[#0F1730] text-white px-6 py-4">
              <span className="text-white text-xs sm:text-sm font-extrabold tracking-tight">
                PulseTrack (Trust-First)
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0F1730] bg-[#FF5A36] px-2.5 py-0.5 rounded-full">
                Recommended
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#E6E2D8]">
            {comparisonRows.map((row, i) => (
              <div key={row.capability} className="grid grid-cols-12 items-stretch group hover:bg-[#F7F4EE]/40 transition-colors text-xs">
                {/* Capability Column */}
                <div className="col-span-3 p-5 flex flex-col justify-center bg-white group-hover:bg-[#F7F4EE]/40 font-bold text-[#0F1730]">
                  {row.capability}
                </div>

                {/* Legacy Column */}
                <div className="col-span-4 p-5 flex items-start gap-2.5 border-x border-[#E6E2D8] text-[#4A5370] bg-[#FAF8F5]">
                  <XCircle className="w-4 h-4 text-[#E5484D] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.legacy}</span>
                </div>

                {/* PulseTrack Column */}
                <div className="col-span-5 p-5 flex items-start gap-2.5 bg-[#FFF9F7] text-[#0F1730] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#12B886] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{row.pulsetrack}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
