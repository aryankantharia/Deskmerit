import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "lucide-react";

interface DashboardItem {
  id: string;
  title: string;
  detail: string;
  image: string;
  liveTag: string;
  urlSubtitle: string;
}

const dashboardItems: DashboardItem[] = [
  {
    id: "telemetry",
    title: "Operational Telemetry & Reporting",
    detail: "Real-time visibility into interview volume, candidate pass rates, competency distributions, and cross-department workforce velocity.",
    image: "/dashboards/performance_dashboard_16_10.png",
    liveTag: "Live Telemetry",
    urlSubtitle: "app.sqalible.com • Workforce Intelligence & Telemetry"
  },
  {
    id: "interviews",
    title: "Candidate First-Round Interviews",
    detail: "Structured technical evaluations, explainable scoring criteria, and audio transcripts with 100% human recruitment authority.",
    image: "/dashboards/ai-interview-dashboard.png",
    liveTag: "Live Screening",
    urlSubtitle: "app.sqalible.com • AI Interviewer Analytics & Scorecards"
  },
  {
    id: "payroll",
    title: "Statutory Payroll & Disbursal Audits",
    detail: "Instant variance detection and 100% statutory compliance for PF, ESI, TDS, and Gratuity linked directly to live biometric attendance logs.",
    image: "/dashboards/payroll_final_settlement.png",
    liveTag: "Statutory Audit",
    urlSubtitle: "app.sqalible.com • Payroll & Final Settlements"
  },
  {
    id: "offboarding",
    title: "Employee Offboarding & Access Revocation",
    detail: "Guaranteed zero zombie accounts. Enforce sequential 5-gate departmental clearances with automated SCIM/SAML token revocation.",
    image: "/dashboards/exit_clearance_gates.png",
    liveTag: "Zero-Trust",
    urlSubtitle: "app.sqalible.com • Offboarding & Access Revocation Gates"
  },
  {
    id: "attendance",
    title: "Biometric Attendance & Leave Verification",
    detail: "Live shift logs, geofenced mobile check-ins, automated regularization workflows, and instant overtime reconciliation.",
    image: "/dashboards/attendance_calendar_view.png",
    liveTag: "Biometric Sync",
    urlSubtitle: "app.sqalible.com • Attendance & Leave Calendar"
  }
];

export function DashboardShowcase() {
  const [activeId, setActiveId] = useState<string>("telemetry");

  const activeItem = dashboardItems.find((item) => item.id === activeId) || dashboardItems[0];

  const handleToggle = (id: string) => {
    setActiveId(id);
  };

  return (
    <section
      className="relative overflow-hidden bg-[#FAF7F2] py-12 md:py-16 text-neutral-900 border-b border-neutral-200"
      aria-labelledby="dashboard-showcase-title"
    >
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Mac Window Mockup with Dynamic Dashboard Screenshot (Col-span 7) */}
          <div className="lg:col-span-7 xl:col-span-7 order-2 lg:order-1">
            <div className="overflow-hidden rounded-none border border-neutral-300 bg-[#0A0E17] shadow-xl transition-all">
              {/* macOS Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 bg-[#0E1724] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  <span className="ml-2.5 text-[11px] font-medium text-neutral-400 font-mono hidden sm:inline">
                    {activeItem.urlSubtitle}
                  </span>
                </div>
                <span className="text-[10px] font-bold text-teal-400 bg-teal-950/80 border border-teal-500/30 px-2 py-0.5 rounded-full uppercase">
                  {activeItem.liveTag}
                </span>
              </div>

              {/* Dynamic Dashboard High-Fidelity Screenshot */}
              <div className="relative w-full overflow-hidden bg-neutral-950 p-2 sm:p-2.5 min-h-[300px] flex items-center justify-center">
                <img
                  key={activeItem.image}
                  src={activeItem.image}
                  alt={`Sqalible HRMS - ${activeItem.title}`}
                  className="w-full h-auto object-contain border border-neutral-800/80 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Title and Kombee-Style Accordion (Col-span 5) */}
          <div className="lg:col-span-5 xl:col-span-5 order-1 lg:order-2 space-y-5">
            <div>
              <p className="pretitle text-primary mb-1">Workforce Intelligence</p>
              <h2
                id="dashboard-showcase-title"
                className="text-xl sm:text-2xl lg:text-[28px] font-bold tracking-tight text-neutral-900 leading-snug"
              >
                Powerful Dashboards. <br />
                <span className="text-primary">Clearer Operational Insights.</span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Gain complete operational clarity across your entire employee lifecycle with real-time audit logs, statutory controls, and live telemetry.
              </p>
            </div>

            {/* Accordion Headings matching user's design reference */}
            <div className="border-t border-neutral-300 pt-1">
              {dashboardItems.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <div key={item.id} className="border-b border-neutral-300 transition-colors">
                    <button
                      type="button"
                      onClick={() => handleToggle(item.id)}
                      className="w-full py-3.5 sm:py-4 flex items-center justify-between text-left group cursor-pointer focus:outline-hidden"
                      aria-expanded={isActive}
                    >
                      <span
                        className={`text-sm sm:text-[15px] font-bold transition-colors ${
                          isActive
                            ? "text-primary"
                            : "text-neutral-900 group-hover:text-primary"
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="shrink-0 ml-3 text-neutral-500 group-hover:text-primary transition-colors">
                        {isActive ? (
                          <MinusIcon size={16} strokeWidth={2} className="text-primary" />
                        ) : (
                          <PlusIcon size={16} strokeWidth={2} />
                        )}
                      </span>
                    </button>

                    {isActive && (
                      <div className="pb-3.5 pt-0.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                        {item.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
