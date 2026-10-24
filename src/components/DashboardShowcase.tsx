import React, { useState } from "react";
import { Plus, Minus, ArrowRight, CheckCircle2, Clock, Shield, BarChart3, Bot, Layers } from "lucide-react";
import { Link } from "react-router-dom";

interface DashboardItem {
  id: string;
  title: string;
  detail: string;
  badge: string;
  link: string;
  renderVisual: () => React.ReactNode;
}

export function DashboardShowcase() {
  const [activeId, setActiveId] = useState<string>("telemetry");

  const dashboardItems: DashboardItem[] = [
    {
      id: "telemetry",
      title: "Team Overview & The Day Line",
      detail: "Real-time visibility into who is Tracking, Idle, on Private Time or Offline. Colored day line bar displays daily focus patterns without invading personal privacy.",
      badge: "Real-Time Signals",
      link: "/features/live-status",
      renderVisual: () => (
        <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E6E2D8] space-y-4 text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#E6E2D8]">
            <span className="font-bold text-[#0F1730]">Live Activity Rollup</span>
            <span className="text-[10px] font-semibold text-[#12B886]">● 14 Tracking Active</span>
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-3 bg-[#F7F4EE] rounded-xl">
              <div className="text-[10px] text-[#4A5370]">Productive</div>
              <div className="text-xl font-bold text-[#0F1730]">82%</div>
            </div>
            <div className="p-3 bg-[#F7F4EE] rounded-xl">
              <div className="text-[10px] text-[#4A5370]">Tracked</div>
              <div className="text-xl font-bold text-[#0F1730]">118h 40m</div>
            </div>
            <div className="p-3 bg-[#F7F4EE] rounded-xl">
              <div className="text-[10px] text-[#4A5370]">Billable</div>
              <div className="text-xl font-bold text-[#12B886]">71%</div>
            </div>
          </div>
          <div className="space-y-2 pt-2">
            <div className="text-[11px] font-semibold text-[#4A5370]">The Day Line (Ananya R. · 6h 12m):</div>
            <div className="h-3 rounded-full bg-[#E6E2D8] flex overflow-hidden">
              <div className="h-full bg-[#12B886] w-[60%]" title="Tracking" />
              <div className="h-full bg-[#5B6CFF] w-[15%]" title="Private Time" />
              <div className="h-full bg-[#F5A524] w-[15%]" title="Idle" />
              <div className="h-full bg-[#E5484D] w-[10%]" title="Unproductive" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "tracker",
      title: "Tracker Plus Ticket Synchronization",
      detail: "Direct live fetching from Jira, Azure DevOps and OpenProject. Each employee uses their own token so they only see tasks they are authorized to work on.",
      badge: "No Second Login",
      link: "/features/tracker-plus",
      renderVisual: () => (
        <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E6E2D8] space-y-3 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#E6E2D8]">
            <span className="font-bold text-[#0F1730]">Connected PM Accounts</span>
            <span className="text-emerald-700 font-semibold text-[10px]">✓ Sync Verified</span>
          </div>
          <div className="space-y-2">
            <div className="p-2.5 rounded-xl bg-[#F7F4EE] flex items-center justify-between">
              <span className="font-bold">Jira Software (Acme Retail)</span>
              <span className="font-mono text-[#0fa678]">KMB-482 ●</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F7F4EE] flex items-center justify-between">
              <span className="font-bold">Azure DevOps (Northwind)</span>
              <span className="font-mono text-[#0fa678]">AD-904 ●</span>
            </div>
            <div className="p-2.5 rounded-xl bg-[#F7F4EE] flex items-center justify-between">
              <span className="font-bold">OpenProject (Contoso)</span>
              <span className="font-mono text-[#4A5370]">OP-312</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "attendance",
      title: "Attendance & Overnight Shift Rules",
      detail: "Daily presence computed from work on the computer, calendar events, and manual entries. Days close at local midnight with fair split for overnight shifts.",
      badge: "Timezone Aware",
      link: "/features/attendance-tracking",
      renderVisual: () => (
        <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E6E2D8] space-y-3 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#E6E2D8]">
            <span className="font-bold text-[#0F1730]">Attendance Engine</span>
            <span className="text-[10px] font-semibold text-[#0F1730]">June 2026</span>
          </div>
          <div className="p-3 bg-[#F7F4EE] rounded-xl space-y-1.5">
            <div className="flex justify-between font-semibold">
              <span>Bengaluru (IST)</span> <span>Closes 00:00 local</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Dubai (GST)</span> <span>Closes 00:00 local</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Riyadh (AST)</span> <span>Sun–Thu work week</span>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-[#FFE6DF]/60 text-[#C2361A] font-semibold text-[11px]">
            ✓ 18 Jun · Corrected by HR (Nikita S.) logged with audit trail
          </div>
        </div>
      ),
    },
    {
      id: "margins",
      title: "Project Margins & Budget Overrun Alerts",
      detail: "Hourly cost rates multiplied by tracked hours compared against client contract ceilings. Alerts trigger before the monthly invoice surprises clients.",
      badge: "Defensible Revenue",
      link: "/solutions/it-services",
      renderVisual: () => (
        <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E6E2D8] space-y-3 text-xs">
          <div className="font-bold text-[#0F1730] pb-2 border-b border-[#E6E2D8]">
            Budget vs Actual (October 2026)
          </div>
          <div className="space-y-2">
            <div>
              <div className="flex justify-between text-[11px] mb-1 font-semibold">
                <span>Acme Retail</span> <span>72%</span>
              </div>
              <div className="h-2 rounded-full bg-[#E6E2D8] overflow-hidden">
                <div className="h-full bg-[#12B886] w-[72%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] mb-1 font-semibold text-[#C2361A]">
                <span>Northwind · Pipeline Export</span> <span>108% ⚠ Alert</span>
              </div>
              <div className="h-2 rounded-full bg-[#E6E2D8] overflow-hidden">
                <div className="h-full bg-[#E5484D] w-[100%]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "mcp",
      title: "Model Context Protocol (MCP) AI Assistant",
      detail: "Let Claude or your enterprise AI assistant query attendance, project margins, and timesheet records directly using the exact same scoped keys as the REST API.",
      badge: "AI-Powered",
      link: "/developers/mcp-server",
      renderVisual: () => (
        <div className="bg-[#0F1730] text-white rounded-2xl p-6 border border-[#24305A] space-y-3 text-xs">
          <div className="flex items-center justify-between pb-2 border-b border-[#24305A]">
            <span className="font-bold">Deskmerit MCP Server</span>
            <span className="text-[#FF5A36] font-semibold text-[10px]">Connected to Claude</span>
          </div>
          <div className="p-2.5 rounded-xl bg-[#172348] text-neutral-300">
            <strong>Prompt:</strong> &ldquo;Who worked more than 45 hours last week?&rdquo;
          </div>
          <div className="p-2.5 rounded-xl bg-[#172348] text-[#12B886]">
            <strong>Response:</strong> 3 people: Wei L. (47h 20m), Rohan P. (46h 05m), Ananya R. (45h 40m).
          </div>
        </div>
      ),
    },
  ];

  const activeItem = dashboardItems.find((item) => item.id === activeId) || dashboardItems[0];

  return (
    <section className="py-20 bg-[#F7F4EE] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
            Interactive Dashboards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
            Clarity for managers, dignity for teams.
          </h2>
          <p className="text-sm text-[#4A5370] mt-3">
            Click through our 5 core modules to preview real time tracking telemetry, ticket synchronization and attendance rules.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Accordion */}
          <div className="lg:col-span-6 space-y-3">
            {dashboardItems.map((item) => {
              const isOpen = item.id === activeId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`rounded-2xl border transition-all cursor-pointer p-5 ${
                    isOpen
                      ? "bg-[#FFFFFF] border-[#FF5A36] shadow-card ring-1 ring-[#FF5A36]/30"
                      : "bg-[#FFFFFF] border-[#E6E2D8] hover:border-[#4A5370]/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-base text-[#0F1730]">
                      {item.title}
                    </span>
                    <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                      isOpen ? "bg-[#FFE6DF] text-[#C2361A]" : "bg-[#F7F4EE] text-[#4A5370]"
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </div>

                  {isOpen && (
                    <div className="mt-3 pt-3 border-t border-[#E6E2D8]/60 text-xs text-[#4A5370] leading-relaxed space-y-3">
                      <p>{item.detail}</p>
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-1 font-bold text-[#FF5A36] hover:underline"
                      >
                        Explore module features <ArrowRight size={12} />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Visual Card */}
          <div className="lg:col-span-6 sticky top-28">
            <div className="bg-[#FFFFFF] rounded-[24px] p-6 border border-[#E6E2D8] shadow-elevated">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6E2D8]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5A36]" />
                  <span className="font-bold text-xs text-[#0F1730] uppercase tracking-wider">
                    {activeItem.badge}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#4A5370]">app.deskmerit.io</span>
              </div>

              {activeItem.renderVisual()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
