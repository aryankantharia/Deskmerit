import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Terminal, Bot, ArrowRight, Check, Sparkles, MessageSquare } from "lucide-react";

// Authentic Official SVG Logos for Integrations
function JiraLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M11.571 0H2.083C.932 0 0 .933 0 2.083v9.488C0 6.012 4.417 1.595 9.976 1.595h1.595V0z" fill="#0052CC"/>
      <path d="M11.917 5.952H6.071c-.932 0-1.69.758-1.69 1.69v4.262c0 3.286 2.667 5.953 5.953 5.953h1.583V5.952z" fill="#2684FF"/>
      <path d="M23.833 11.905h-9.488c-5.559 0-9.976 4.417-9.976 9.976v.036c0 1.15.932 2.083 2.083 2.083h9.488c5.559 0 9.976-4.417 9.976-9.976v-.036c0-1.15-.932-2.083-2.083-2.083z" fill="#0052CC"/>
    </svg>
  );
}

function AzureDevopsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M24 8.784l-4.706-4.5-8.529 3.098L4.235 2.5 0 6.647v10.706l3.97 4.147 6.471-2.47 8.853 2.47L24 16.588V8.784zm-4.706 7.442l-7.765-2.206v-3.882l7.765-2.206v8.294z" fill="#0078D7"/>
      <path d="M19.294 8.353l-7.765 2.206v3.882l7.765 2.206V8.353z" fill="#008AD7"/>
      <path d="M4.235 2.5l6.53 4.882-6.53 2.47V2.5z" fill="#0078D7"/>
    </svg>
  );
}

function OpenProjectLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#006699" />
      <circle cx="12" cy="12" r="6.5" fill="#1DA1F2" />
      <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
    </svg>
  );
}

function GoogleCalendarLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
      <path d="M18 2H6C3.79 2 2 3.79 2 6v2h20V6c0-2.21-1.79-4-4-4z" fill="#4285F4"/>
      <path d="M2 8v10c0 2.21 1.79 4 4 4h2V8H2z" fill="#34A853"/>
      <path d="M8 22h8c2.21 0 4-1.79 4-4v-2H8v6z" fill="#FBBC05"/>
      <path d="M20 16V8h2v8c0 2.21-1.79 4-4 4h-2v-4h4z" fill="#EA4335"/>
      <text x="12" y="16" textAnchor="middle" fontSize="9" fontWeight="800" fill="#1A73E8" fontFamily="sans-serif">31</text>
    </svg>
  );
}

function OutlookLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect x="6" y="3" width="15" height="18" rx="2.5" fill="#0072C6"/>
      <path d="M13.5 7.5h7.5l-7.5 5.5V7.5z" fill="#005A9E"/>
      <rect x="3" y="6" width="12" height="12" rx="2.5" fill="#0078D4" stroke="#FFFFFF" strokeWidth="0.8"/>
      <text x="9" y="14.5" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">O</text>
    </svg>
  );
}

function SlackLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" fill="#E01E5A"/>
      <path d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" fill="#36C5F0"/>
      <path d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" fill="#2EB67D"/>
      <path d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="#ECB22E"/>
    </svg>
  );
}

function TeamsLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="16.5" cy="7.5" r="3" fill="#5059C9"/>
      <path d="M12.5 13c0-2.2 2-3.5 4-3.5s4 1.3 4 3.5v3h-8v-3z" fill="#5059C9"/>
      <circle cx="9" cy="6" r="3.5" fill="#7B83EB"/>
      <path d="M4 12c0-2.5 2.5-4 5-4s5 1.5 5 4v6H4v-6z" fill="#7B83EB"/>
      <rect x="2" y="10" width="8" height="8" rx="1.5" fill="#4B53BC"/>
      <text x="6" y="16" textAnchor="middle" fontSize="6.5" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">T</text>
    </svg>
  );
}

function ZapierLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#FFF3EE"/>
      <path d="M10.8 4h2.4v5.3l3.8-3.8 1.7 1.7-3.8 3.8H20v2.4h-5.1l3.8 3.8-1.7 1.7-3.8-3.8V20h-2.4v-5.1l-3.8 3.8-1.7-1.7 3.8-3.8H4v-2.4h5.3l-3.8-3.8 1.7-1.7 3.8 3.8V4z" fill="#FF4F00"/>
    </svg>
  );
}

function SqalibleLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <img src="/sqalible-logo.png" alt="Sqalible HRMS" className={`${className} object-contain`} />
  );
}

function McpServerLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#FFF0ED"/>
      <path d="M12 2L14.2 8.3L20.5 10.5L14.2 12.7L12 19L9.8 12.7L3.5 10.5L9.8 8.3L12 2Z" fill="#FF5A36"/>
      <circle cx="18" cy="17" r="2.2" fill="#FF8364"/>
      <circle cx="6" cy="6" r="1.5" fill="#FF8364"/>
    </svg>
  );
}

export function DeskmeritIntegrationsSection() {
  const [activePrompt, setActivePrompt] = useState(0);

  const prompts = [
    {
      query: "Who worked more than 45 hours last week?",
      response:
        "3 people: Wei L. (47h 20m), Rohan P. (46h 05m), Ananya R. (45h 40m). Most overtime was logged against Northwind · Cloud billing export.",
      toolCall: "deskmerit.timesheets.summary · scope: reports:read",
    },
    {
      query: "Which projects have crossed 90% of their billable budget?",
      response:
        "2 projects: Northwind Billing Export is at 108% (Alert triggered), and Fabrikam Microservices is at 91%. Acme Retail is healthy at 72%.",
      toolCall: "deskmerit.projects.margins · scope: billing:read",
    },
    {
      query: "Who is currently marked on Private Time or Idle?",
      response:
        "Daniel K. is on Private Time (12:30 - present). Wei L. is currently marked Idle (no mouse/key input for 8 mins, Teams call in progress).",
      toolCall: "deskmerit.live.status · scope: presence:read",
    },
  ];

  const tools = [
    {
      name: "Jira",
      role: "Tracker Plus",
      badge: "Live sync",
      logo: <JiraLogo className="w-5 h-5" />,
    },
    {
      name: "Azure DevOps",
      role: "Tracker Plus",
      badge: "Work items",
      logo: <AzureDevopsLogo className="w-5 h-5" />,
    },
    {
      name: "OpenProject",
      role: "Tracker Plus",
      badge: "Self-hosted",
      logo: <OpenProjectLogo className="w-5 h-5" />,
    },
    {
      name: "Google Calendar",
      role: "Meetings as work",
      badge: "Auto-present",
      logo: <GoogleCalendarLogo className="w-5 h-5" />,
    },
    {
      name: "Outlook 365",
      role: "Meetings as work",
      badge: "Auto-present",
      logo: <OutlookLogo className="w-5 h-5" />,
    },
    {
      name: "Slack",
      role: "Summaries & /status",
      badge: "Bot",
      logo: <SlackLogo className="w-5 h-5" />,
    },
    {
      name: "Microsoft Teams",
      role: "Daily status feed",
      badge: "App",
      logo: <TeamsLogo className="w-5 h-5" />,
    },
    {
      name: "Zapier",
      role: "7,000+ app connectors",
      badge: "No-code",
      logo: <ZapierLogo className="w-5 h-5" />,
    },
    {
      name: "Sqalible HRMS",
      role: "Native 1-click toggle",
      badge: "Built-in",
      logo: <SqalibleLogo className="w-5 h-5" />,
    },
    {
      name: "MCP Server",
      role: "AI Assistant Query",
      badge: "New ★",
      logo: <McpServerLogo className="w-5 h-5" />,
    },
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
              className="group bg-[#FFFFFF] rounded-2xl p-4 sm:p-5 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200/90 shadow-2xs flex items-center justify-center p-2 group-hover:scale-105 group-hover:border-[#FF5A36]/40 transition-all">
                  {item.logo}
                </div>
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
                Deskmerit's Model Context Protocol (MCP) server lets AI assistants like Claude query attendance and productivity data directly — with exactly the same keys and scopes as the REST API.
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
