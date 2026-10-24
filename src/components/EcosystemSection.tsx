import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Users2, Briefcase, PhoneCall, Calculator, Compass, Boxes } from "lucide-react";

export function EcosystemSection() {
  const [activeTab, setActiveTab] = useState<"industry" | "team" | "region">("industry");

  const solutions = {
    industry: [
      { title: "IT Services", href: "/solutions/it-services", desc: "Prove every billable hour straight from Jira and Azure DevOps tickets.", icon: Code2, metric: "94% billable capture" },
      { title: "Staff Augmentation", href: "/solutions/staff-augmentation", desc: "Connect each client's Jira token without crossing confidential data boundaries.", icon: Users2, metric: "Multi-tenant tokens" },
      { title: "Agencies", href: "/solutions/agencies", desc: "Spot retainer scope creep and unlogged revisions before month-end billing.", icon: Briefcase, metric: "Budget overrun alerts" },
      { title: "BPO & Contact Centres", href: "/solutions/bpo", desc: "Fair overnight shift logic crossing midnight with roster adherence tracking.", icon: PhoneCall, metric: "Midnight fairness" },
      { title: "Consulting & Accounting", href: "/solutions/professional-services", desc: "Capture lost 6-minute billing units automatically from document and meeting time.", icon: Calculator, metric: "Defensible proof" },
    ],
    team: [
      { title: "Remote Teams", href: "/solutions/remote-teams", desc: "Outcomes over webcams. Timezones handled at local midnight for all cities.", icon: Compass, metric: "Zero webcams" },
      { title: "Hybrid Teams", href: "/solutions/hybrid-teams", desc: "One fair record for office days and home days without biometric hardware.", icon: Users2, metric: "Unified presence" },
      { title: "HR Teams", href: "/solutions/hr", desc: "Presence records and correction audit trails that HR can stand behind for payroll.", icon: Briefcase, metric: "Full audit trails" },
      { title: "Managers", href: "/solutions/managers", desc: "Lead teams with transparent facts rather than feelings or intrusive hovering.", icon: Code2, metric: "Shared self-view" },
      { title: "Finance Teams", href: "/solutions/finance", desc: "Turn tracked engineering hours into defensible margins and client invoices.", icon: Calculator, metric: "Cost vs margin" },
    ],
    region: [
      { title: "India (₹ INR)", href: "/en-in", desc: "DPDP Act 2023 readiness, GST tax invoices, and support in IST from Pune.", icon: Compass, metric: "₹299/mo Pro" },
      { title: "Australia (A$ AUD)", href: "/en-au", desc: "NSW Workplace Surveillance Act 14-day notice generator and Privacy Act 1988 alignment.", icon: Briefcase, metric: "A$8/mo Pro" },
      { title: "New Zealand (NZ$ NZD)", href: "/en-nz", desc: "Transparent tracking in line with Privacy Act 2020 openness principles.", icon: Users2, metric: "NZ$9/mo Pro" },
      { title: "UAE & Saudi Arabia", href: "/en-ae", desc: "Sunday–Thursday and Monday–Friday week support with regional cloud data residency.", icon: PhoneCall, metric: "AED 19/mo" },
      { title: "Sqalible HRMS Add-on", href: "/hrms-add-on", desc: "Already on Sqalible? Turn on Deskmerit in one click from your admin console.", icon: Code2, metric: "Single invoice" },
    ],
  };

  const currentList = solutions[activeTab];

  const integrationPartners = [
    "Jira Software",
    "Azure DevOps",
    "OpenProject",
    "Google Calendar",
    "Outlook 365",
    "Slack",
    "Microsoft Teams",
    "Zapier",
    "Make.com",
    "Sqalible HRMS",
    "Claude MCP Server",
    "REST API",
  ];

  return (
    <section className="py-20 bg-[#F7F4EE] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
            Tailored Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
            Built for your industry, team, and country.
          </h2>
          <p className="text-sm text-[#4A5370] mt-3">
            Whether billing clients by the hour or managing remote developers across timezones, choose the workflow built for you.
          </p>

          {/* 3 Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="p-1 bg-[#FFFFFF] rounded-2xl border border-[#E6E2D8] flex items-center shadow-subtle">
              <button
                type="button"
                onClick={() => setActiveTab("industry")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "industry" ? "bg-[#0F1730] text-white shadow-sm" : "text-[#4A5370] hover:text-[#0F1730]"
                }`}
              >
                By Industry
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("team")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "team" ? "bg-[#0F1730] text-white shadow-sm" : "text-[#4A5370] hover:text-[#0F1730]"
                }`}
              >
                By Team
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("region")}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === "region" ? "bg-[#0F1730] text-white shadow-sm" : "text-[#4A5370] hover:text-[#0F1730]"
                }`}
              >
                By Region
              </button>
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {currentList.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.href}
                className="group bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F7F4EE] group-hover:bg-[#FFE6DF] text-[#0F1730] group-hover:text-[#C2361A] flex items-center justify-center transition-colors border border-[#E6E2D8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F7F4EE] text-[#4A5370] border border-[#E6E2D8]">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#4A5370] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E2D8]/60 flex items-center justify-between text-xs font-semibold text-[#0F1730] group-hover:text-[#FF5A36]">
                  <span>Explore workflow</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Integrations Marquee Strip */}
        <div className="pt-8 border-t border-[#E6E2D8]">
          <div className="text-center text-xs font-semibold text-[#4A5370] uppercase tracking-wider mb-6">
            Works natively with your engineering and productivity stack:
          </div>

          <div className="overflow-hidden py-3">
            <div className="marquee-content flex items-center gap-6">
              {[...integrationPartners, ...integrationPartners].map((tool, i) => (
                <div
                  key={i}
                  className="px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-bold text-[#0F1730] shadow-subtle shrink-0 flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF5A36]" />
                  <span>{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
