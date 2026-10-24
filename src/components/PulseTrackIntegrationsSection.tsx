import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Terminal, Bot, ArrowRight, Check, Sparkles, MessageSquare } from "lucide-react";

export function PulseTrackIntegrationsSection() {
  const [activePrompt, setActivePrompt] = useState(0);

  const prompts = [
    {
      query: "Who worked more than 45 hours last week?",
      response:
        "3 people: Wei L. (47h 20m), Rohan P. (46h 05m), Ananya R. (45h 40m). Most overtime was logged against Northwind · Cloud billing export.",
      toolCall: "pulsetrack.timesheets.summary · scope: reports:read",
    },
    {
      query: "Which projects have crossed 90% of their billable budget?",
      response:
        "2 projects: Northwind Billing Export is at 108% (Alert triggered), and Fabrikam Microservices is at 91%. Acme Retail is healthy at 72%.",
      toolCall: "pulsetrack.projects.margins · scope: billing:read",
    },
    {
      query: "Who is currently marked on Private Time or Idle?",
      response:
        "Daniel K. is on Private Time (12:30 - present). Wei L. is currently marked Idle (no mouse/key input for 8 mins, Teams call in progress).",
      toolCall: "pulsetrack.live.status · scope: presence:read",
    },
  ];

  const tools = [
    { name: "Jira", role: "Tracker Plus", badge: "Live sync", icon: "J", color: "bg-blue-600" },
    { name: "Azure DevOps", role: "Tracker Plus", badge: "Work items", icon: "AD", color: "bg-sky-600" },
    { name: "OpenProject", role: "Tracker Plus", badge: "Self-hosted", icon: "OP", color: "bg-teal-600" },
    { name: "Google Calendar", role: "Meetings as work", badge: "Auto-present", icon: "GC", color: "bg-amber-600" },
    { name: "Outlook 365", role: "Meetings as work", badge: "Auto-present", icon: "OC", color: "bg-blue-700" },
    { name: "Slack", role: "Summaries & /status", badge: "Bot", icon: "S", color: "bg-fuchsia-600" },
    { name: "Microsoft Teams", role: "Daily status feed", badge: "App", icon: "MT", color: "bg-indigo-600" },
    { name: "Zapier", role: "7,000+ app connectors", badge: "No-code", icon: "Z", color: "bg-orange-600" },
    { name: "Sqalible HRMS", role: "Native 1-click toggle", badge: "Built-in", icon: "SH", color: "bg-[#0F1730]" },
    { name: "MCP Server", role: "AI Assistant Query", badge: "New ★", icon: "MCP", color: "bg-[#FF5A36]" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EE] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
              Integrations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
              Works with the tools{" "}
              <span className="block text-[#4A5370]">your team already lives in.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4A5370] mt-3 max-w-xl">
              Project tools feed Tracker Plus, calendars feed attendance, chat gets daily summaries — and the REST API & MCP server connect everything else.
            </p>
          </div>
          <Link
            to="/integrations"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors shrink-0"
          >
            Browse all integrations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {tools.map((item) => (
            <div
              key={item.name}
              className="bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`w-9 h-9 rounded-xl ${item.color} text-white font-bold text-xs flex items-center justify-center shadow-sm`}
                >
                  {item.icon}
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#F7F4EE] text-[#4A5370] border border-[#E6E2D8]">
                  {item.badge}
                </span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-[#0F1730]">{item.name}</h4>
                <p className="text-xs text-[#4A5370] mt-0.5 font-normal">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MCP Server Spotlight Highlight (Dark card with live AI dialogue) */}
        <div className="bg-[#0F1730] text-white rounded-[24px] p-6 sm:p-10 border border-[#24305A] shadow-elevated relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24305A] text-xs font-semibold text-[#FFE6DF] border border-[#334173]">
                <Bot className="w-3.5 h-3.5 text-[#FF5A36]" />
                <span>NEW · MCP SERVER</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ask your AI assistant who's in today.
              </h3>

              <p className="text-sm text-[#9AA1B2] leading-relaxed">
                PulseTrack's Model Context Protocol (MCP) server lets AI assistants like Claude query attendance and productivity data directly — with exactly the same keys and scopes as the REST API.
              </p>

              <div className="pt-2">
                <Link
                  to="/developers/mcp-server"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FF5A36] hover:text-[#FFA994] transition-colors"
                >
                  Read developer MCP docs <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Live Interactive Prompt Simulation */}
            <div className="lg:col-span-7 bg-[#172348] rounded-2xl p-5 border border-[#24305A]">
              <div className="text-xs font-semibold text-[#9AA1B2] mb-3">
                Try a sample prompt:
              </div>

              {/* Sample Prompt Chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {prompts.map((p, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePrompt(idx)}
                    className={`text-xs px-3 py-1.5 rounded-lg border transition-all text-left ${
                      activePrompt === idx
                        ? "bg-[#FF5A36] text-[#0F1730] font-bold border-[#FF5A36]"
                        : "bg-[#0F1730] text-[#E6E2D8] border-[#24305A] hover:border-[#4A5370]"
                    }`}
                  >
                    "{p.query}"
                  </button>
                ))}
              </div>

              {/* Chat Simulation Window */}
              <div className="bg-[#0F1730] rounded-xl p-4 border border-[#24305A] space-y-3">
                {/* User Prompt */}
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#24305A] text-xs font-bold flex items-center justify-center shrink-0">
                    U
                  </span>
                  <div className="text-xs text-white bg-[#24305A]/70 px-3 py-2 rounded-xl">
                    {prompts[activePrompt].query}
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-[#FF5A36] text-[#0F1730] text-xs font-bold flex items-center justify-center shrink-0">
                    AI
                  </span>
                  <div className="space-y-1.5 flex-1">
                    <div className="text-xs text-[#E6E2D8] bg-[#172348] px-3.5 py-2.5 rounded-xl border border-[#24305A]">
                      {prompts[activePrompt].response}
                    </div>
                    <div className="text-[10px] text-[#9AA1B2] font-mono px-2 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-[#12B886]" />
                      <span>{prompts[activePrompt].toolCall}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
