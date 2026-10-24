import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import {
  Boxes,
  ArrowRight,
  Bot,
  Terminal,
  Check,
  Search,
  ExternalLink,
} from "lucide-react";

interface IntegrationItem {
  id: string;
  name: string;
  category: "pm" | "calendars" | "chat" | "automation" | "hrms" | "developers";
  tagline: string;
  badge: string;
  description: string;
  linkText: string;
  href: string;
  initials: string;
  color: string;
}

const INTEGRATIONS_LIST: IntegrationItem[] = [
  {
    id: "jira",
    name: "Jira Software",
    category: "pm",
    tagline: "Tracker Plus",
    badge: "Direct PM sync",
    description: "Pick Jira issues in the Deskmerit desktop agent and press Start. Time logs against that issue's project and client with no Jira timers.",
    linkText: "View Jira integration →",
    href: "/integrations/jira",
    initials: "J",
    color: "bg-blue-600",
  },
  {
    id: "azure-devops",
    name: "Azure DevOps",
    category: "pm",
    tagline: "Tracker Plus",
    badge: "Boards & work items",
    description: "Start tracking from any Azure DevOps work item assigned to you, alongside Jira or on its own with zero duplicate project names.",
    linkText: "View Azure DevOps integration →",
    href: "/integrations/azure-devops",
    initials: "AD",
    color: "bg-sky-600",
  },
  {
    id: "openproject",
    name: "OpenProject",
    category: "pm",
    tagline: "Tracker Plus",
    badge: "Open-source PM",
    description: "The open-source PM tool gets an automatic tracker that respects your self-hosting choices with tasks keyed strictly by ID.",
    linkText: "View OpenProject integration →",
    href: "/integrations/openproject",
    initials: "OP",
    color: "bg-[#182A44]",
  },
  {
    id: "google-calendar",
    name: "Google Calendar",
    category: "calendars",
    tagline: "Meetings count as work",
    badge: "Calendar sync",
    description: "Accepted meetings during working hours automatically count toward attendance, so meeting-heavy days are never marked absent.",
    linkText: "View Google Calendar integration →",
    href: "/integrations/google-calendar",
    initials: "GC",
    color: "bg-amber-600",
  },
  {
    id: "outlook-calendar",
    name: "Outlook Calendar",
    category: "calendars",
    tagline: "Meetings count as work",
    badge: "Microsoft 365",
    description: "Read-only calendar presence for Microsoft 365 users. Disconnect stops reads immediately without lingering tokens.",
    linkText: "View Outlook integration →",
    href: "/integrations/outlook-calendar",
    initials: "OC",
    color: "bg-blue-700",
  },
  {
    id: "slack",
    name: "Slack",
    category: "chat",
    tagline: "Summaries & /status",
    badge: "Bot",
    description: "Daily and weekly summaries posted to your team channels, and a convenient `/deskmerit status` command to look up anyone's live state.",
    linkText: "View Slack integration →",
    href: "/integrations/slack",
    initials: "S",
    color: "bg-fuchsia-600",
  },
  {
    id: "microsoft-teams",
    name: "Microsoft Teams",
    category: "chat",
    tagline: "Summaries & live status",
    badge: "Bot-based",
    description: "Automated work summaries and live status lookups inside Teams channels. No complex custom webhooks to configure.",
    linkText: "View Teams integration →",
    href: "/integrations/microsoft-teams",
    initials: "MT",
    color: "bg-indigo-600",
  },
  {
    id: "zapier",
    name: "Zapier",
    category: "automation",
    tagline: "No-code workflows",
    badge: "7,000+ apps",
    description: "Send attendance to payroll systems, post overtime alerts, or update Google Sheets and Airtable without writing code.",
    linkText: "View Zapier integration →",
    href: "/integrations/zapier",
    initials: "Z",
    color: "bg-orange-600",
  },
  {
    id: "make",
    name: "Make",
    category: "automation",
    tagline: "Visual automations",
    badge: "Published app",
    description: "Build robust visual workflows with Deskmerit triggers and actions across your enterprise tech stack.",
    linkText: "View Make integration →",
    href: "/integrations/make",
    initials: "M",
    color: "bg-purple-600",
  },
  {
    id: "sqalible",
    name: "Sqalible HRMS",
    category: "hrms",
    tagline: "Native add-on",
    badge: "1-click toggle",
    description: "Turn on time tracking inside the HRMS you already use. Auto-provision employees, single sign-on, and one consolidated invoice.",
    linkText: "View HRMS add-on →",
    href: "/hrms-add-on",
    initials: "SH",
    color: "bg-[#0F1730]",
  },
  {
    id: "rest-api",
    name: "REST API",
    category: "developers",
    tagline: "Scoped, read-only keys",
    badge: "OpenAPI specs",
    description: "Versioned, read-only REST API with 100 req/min per key by default, self-serve scopes, and guaranteed 30 days notice on breaking changes.",
    linkText: "View API docs →",
    href: "/developers",
    initials: "RA",
    color: "bg-slate-700",
  },
  {
    id: "mcp-server",
    name: "MCP Server",
    category: "developers",
    tagline: "For AI assistants",
    badge: "Claude ready",
    description: "Model Context Protocol server allowing Claude and AI agents to query attendance, project margins and timesheet summaries safely.",
    linkText: "View MCP server docs →",
    href: "/developers/mcp-server",
    initials: "MS",
    color: "bg-[#FF5A36]",
  },
];

export function IntegrationsPage() {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");

  const categories = [
    { id: "all", label: "All integrations" },
    { id: "pm", label: "Project management" },
    { id: "calendars", label: "Calendars" },
    { id: "chat", label: "Chat" },
    { id: "automation", label: "Automation" },
    { id: "hrms", label: "HRMS" },
    { id: "developers", label: "Developers" },
  ];

  const filtered = INTEGRATIONS_LIST.filter((item) => {
    const matchesCategory = filter === "all" || item.category === filter;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase()) ||
      item.tagline.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Header */}
        <div className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] mb-6 shadow-sm">
            <span className="pulse-dot" />
            <span>Ecosystem</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
            Connect Deskmerit to the tools{" "}
            <span className="text-[#FF5A36] block sm:inline font-normal">
              your team already uses.
            </span>
          </h1>

          <p className="text-lg text-[#4A5370] max-w-2xl mx-auto font-normal">
            Project tools feed Tracker Plus, calendars feed attendance, chat tools get daily summaries, and the API and MCP server connect everything else.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#FFFFFF] rounded-xl border border-[#E6E2D8] shadow-subtle">
              {categories.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setFilter(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    filter === c.id
                      ? "bg-[#0F1730] text-white"
                      : "text-[#4A5370] hover:text-[#0F1730]"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-[#9AA1B2] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools..."
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#E6E2D8] bg-[#FFFFFF] focus:outline-none focus:border-[#FF5A36]"
              />
            </div>
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-11 h-11 rounded-xl ${item.color} text-white font-bold text-xs flex items-center justify-center shadow-sm`}
                    >
                      {item.initials}
                    </span>
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#F7F4EE] text-[#4A5370] border border-[#E6E2D8]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#0F1730]">{item.name}</h3>
                  <div className="text-xs font-semibold text-[#FF5A36] mb-2">{item.tagline}</div>
                  <p className="text-xs text-[#4A5370] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E2D8]">
                  <Link
                    to={item.href}
                    className="text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] flex items-center justify-between group transition-colors"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Integrations & API FAQs"
          category="FAQS"
          helpTitle="Building a Custom Tool Integration?"
          helpDescription="Our developer advocacy team provides dedicated guidance for connecting Deskmerit Webhooks and MCP Servers with your in-house engineering systems."
          customFaqs={[
            {
              q: "How does the Jira and Azure DevOps bi-directional sync work?",
              a: "When a developer starts work on a Jira issue or Azure DevOps work item, Deskmerit binds active telemetry directly to that work key. Completed session durations and work logs sync back into your project tickets automatically."
            },
            {
              q: "Does Deskmerit have an official Model Context Protocol (MCP) server for AI assistants?",
              a: "Yes. Deskmerit includes a native MCP server allowing AI tools like Claude Code and Cursor to query team bandwidth, active project progress, and sprint velocity via secure natural language."
            },
            {
              q: "Are webhooks and REST APIs available on all plans?",
              a: "REST API tokens and webhook events (time entry created, timer started, attendance finalized) are available on Pro and Enterprise tiers with high rate limits and comprehensive Swagger/OpenAPI specifications."
            },
            {
              q: "How does Google Calendar and Outlook meeting detection work?",
              a: "Deskmerit checks your authenticated corporate calendar for accepted meetings during scheduled shift hours. Meeting slots are automatically credited as active client work without manual clock-ins."
            },
            {
              q: "Can we build a custom integration using Zapier or Make?",
              a: "Yes. The Deskmerit Zapier and webhook connector lets you trigger custom automations in thousands of apps, such as posting daily team summaries to Slack or logging client time to QuickBooks."
            }
          ]}
        />

        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}