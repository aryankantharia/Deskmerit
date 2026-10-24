import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
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
} from "lucide-react";

export function TrackerPlusPage() {
  const [billableOnly, setBillableOnly] = useState(false);
  const [manualProject, setManualProject] = useState("Client workshop prep");
  const [manualTask, setManualTask] = useState("Slides for Northwind QBR");
  const [manualTrackingStarted, setManualTrackingStarted] = useState(false);

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

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <Link to="/features" className="hover:text-[#0F1730]">Features</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">Tracker Plus</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm">
                <span className="pulse-dot" />
                <span>Tracker Plus Feature</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight">
                Pick a task. Press Start.{" "}
                <span className="text-[#FF5A36] block font-normal">Everything else is automatic.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
                Other trackers can log time against a Jira issue; Tracker Plus goes further. Your people choose the task they’re working on straight from your project-management tool, inside the Deskmerit agent. One click logs time, fills attendance and updates billing — with no extra login.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center text-xs font-bold text-[#0F1730] bg-[#FF5A36] hover:bg-[#E94A27] px-6 py-3.5 rounded-[12px] shadow-sm transition-all"
                >
                  Start free 14-day trial →
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center text-xs font-semibold text-[#0F1730] bg-[#FFFFFF] hover:bg-[#E6E2D8]/50 border border-[#0F1730] px-6 py-3.5 rounded-[12px] transition-all"
                >
                  Book a demo
                </Link>
              </div>

              <div className="pt-2 text-xs text-[#4A5370] flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-medium text-[#0fa678]">
                  <Check className="w-4 h-4 text-[#12B886]" /> Live tasks from Jira, Azure DevOps & OpenProject
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <InteractiveTrackerWidget />
            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                How it works
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                From ticket to timesheet in four steps.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Connect once",
                  desc: "Your admin enables Jira, Azure DevOps or OpenProject with one consent click. No tenant-side setup.",
                },
                {
                  step: "2",
                  title: "Add your token",
                  desc: "Each employee pastes a personal access token. Deskmerit shows which account it belongs to before saving.",
                },
                {
                  step: "3",
                  title: "Pick & start",
                  desc: "The agent lists your assigned tasks, live. Choose one and press Start — even offline.",
                },
                {
                  step: "4",
                  title: "Everything fills in",
                  desc: "Time lands on the task, client and rate. Attendance and billing update in the background.",
                },
              ].map((s) => (
                <div key={s.step} className="p-6 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8]">
                  <span className="w-9 h-9 rounded-xl bg-[#FF5A36] text-[#0F1730] font-extrabold text-sm flex items-center justify-center font-display mb-4">
                    {s.step}
                  </span>
                  <h3 className="text-base font-bold text-[#0F1730] mb-2">{s.title}</h3>
                  <p className="text-xs text-[#4A5370] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timesheet Table & No Duplicates Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Interactive Timesheet Table */}
            <div className="lg:col-span-7 bg-[#FFFFFF] rounded-[24px] p-6 sm:p-8 border border-[#E6E2D8] shadow-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#E6E2D8] gap-3">
                <div>
                  <h3 className="font-bold text-base text-[#0F1730]">Project time · this week</h3>
                  <p className="text-xs text-[#4A5370]">Live rollup across Jira, Azure DevOps, and OpenProject</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setBillableOnly(!billableOnly)}
                    className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-colors ${
                      billableOnly
                        ? "bg-[#FFE6DF] text-[#C2361A] border-[#FF5A36]/40"
                        : "bg-[#F7F4EE] text-[#0F1730] border-[#E6E2D8]"
                    }`}
                  >
                    {billableOnly ? "✓ Billable only" : "All tasks"}
                  </button>

                  <button
                    type="button"
                    onClick={() => alert("Simulated CSV exported: 5 line items downloaded.")}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#0F1730] text-white font-semibold hover:bg-[#24305A] transition-colors"
                  >
                    Export CSV
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-[#E6E2D8] text-[#4A5370] uppercase tracking-wider text-[10px]">
                      <th className="py-2.5">Client</th>
                      <th className="py-2.5">Task</th>
                      <th className="py-2.5">Source</th>
                      <th className="py-2.5">Time</th>
                      <th className="py-2.5">Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E6E2D8]/60 text-[#0F1730]">
                    {filteredTimesheet.map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#F7F4EE]/60 transition-colors">
                        <td className="py-3 font-semibold">{row.client}</td>
                        <td className="py-3">
                          <div className="font-medium truncate max-w-[170px]">{row.task}</div>
                          {row.alert && (
                            <span className="text-[10px] text-[#C2361A] font-bold block mt-0.5">
                              {row.alert}
                            </span>
                          )}
                        </td>
                        <td className="py-3">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#F7F4EE] text-[#4A5370] border border-[#E6E2D8]">
                            {row.source}
                          </span>
                        </td>
                        <td className="py-3 font-mono font-semibold tnum">{row.time}</td>
                        <td className="py-3 font-semibold text-[#12B886]">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Duplicate Protection Logic */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                No duplicates
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730] leading-tight">
                Two projects called “Website”?{" "}
                <span className="text-[#FF5A36]">Never merged.</span>
              </h3>
              <p className="text-sm text-[#4A5370] leading-relaxed">
                Tasks are stored by connected tool and canonical ID, never by loose display name. So identically named projects in different client tools stay strictly segregated in every report and invoice.
              </p>

              {/* Manual Entry Fallback Widget */}
              <div className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E6E2D8] shadow-subtle space-y-3">
                <div className="text-xs font-bold text-[#0F1730] uppercase tracking-wider">
                  Manual, always: No ticket? No problem.
                </div>
                <p className="text-xs text-[#4A5370]">
                  Working on something outside your PM tools? Type a project and task name and track just the same.
                </p>

                <div className="space-y-2 pt-1">
                  <input
                    type="text"
                    value={manualProject}
                    onChange={(e) => setManualProject(e.target.value)}
                    placeholder="Project name"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                  />
                  <input
                    type="text"
                    value={manualTask}
                    onChange={(e) => setManualTask(e.target.value)}
                    placeholder="Task name"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setManualTrackingStarted(true);
                      setTimeout(() => setManualTrackingStarted(false), 2500);
                    }}
                    className="w-full py-2.5 rounded-[10px] bg-[#FF5A36] text-[#0F1730] font-bold text-xs hover:bg-[#E94A27] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    {manualTrackingStarted ? "Tracking manually..." : "Start tracking"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tracker Plus FAQ */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#0F1730] mb-6">Tracker Plus questions</h3>
          <div className="space-y-3">
            {[
              {
                q: "Does Tracker Plus write anything back to Jira?",
                a: "At launch it reads assigned projects and tasks only. It never modifies, updates or deletes your tickets.",
              },
              {
                q: "What if a token is revoked mid-session?",
                a: "The session keeps tracking safely offline and prompts the employee to reconnect. No logged work time is lost.",
              },
              {
                q: "Can two employees link the same Jira account?",
                a: "No. Each external PM account can be claimed by one authenticated employee only, ensuring audit integrity.",
              },
              {
                q: "Which plans include Tracker Plus?",
                a: "Pro, Premium, Enterprise and the native Sqalible HRMS add-on.",
              },
            ].map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E6E2D8]">
                <h4 className="font-bold text-sm text-[#0F1730] mb-1.5">{faq.q}</h4>
                <p className="text-xs text-[#4A5370] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <DeskmeritCtaBand
          title="Your team already works in tickets. Now time does too."
          subtitle="Install in minutes, start from a task, and get your first report this week."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
