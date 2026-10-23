import React from "react";
import { IntegrationLogo } from "./IntegrationLogo";

interface PartnerItem {
  name: string;
  displayName?: string;
}

const partners: PartnerItem[] = [
  { name: "Slack" },
  { name: "Microsoft Teams" },
  { name: "Google Workspace" },
  { name: "Microsoft Entra (Azure AD)", displayName: "Microsoft Entra" },
  { name: "Okta" },
  { name: "LinkedIn Jobs" },
  { name: "Indeed" },
  { name: "ZKTeco Biometrics" },
  { name: "Matrix Comsec" },
  { name: "DeskTime & Toggl" },
  { name: "HDFC / ICICI Corporate Banking", displayName: "HDFC / ICICI Banking" },
  { name: "RazorpayX Payroll" },
  { name: "QuickBooks & Zoho Books", displayName: "QuickBooks & Zoho" },
  { name: "Jira Software" }
];

export function IntegrationsSection() {
  return (
    <section
      className="overflow-hidden bg-[#0A1118] py-16 md:py-20 border-y border-neutral-800"
      aria-labelledby="integrations-title"
    >
      <div className="mx-auto max-w-7xl px-6 text-center mb-10 md:mb-12">
        <p className="pretitle text-teal-400">Integrations</p>
        <h2
          id="integrations-title"
          className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight"
        >
          Works with the tools you already use
        </h2>
      </div>

      {/* Single-row continuous marquee with smooth fade edges - stops on hover with NO glow effect */}
      <div className="group relative w-full overflow-hidden">
        {/* Left & Right gradient edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-[#0A1118] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-[#0A1118] to-transparent" />

        <ul className="marquee flex w-max gap-4 sm:gap-5 items-center py-2 group-hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((item, i) => (
            <li
              key={`${item.name}-${i}`}
              aria-hidden={i >= partners.length}
              className="flex h-[68px] sm:h-[72px] shrink-0 items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#0E1722]/80 hover:bg-white/[0.06] hover:border-white/25 transition-colors duration-200 px-6 cursor-pointer select-none"
            >
              <div className="flex items-center gap-2.5">
                <IntegrationLogo name={item.name} className="w-5 h-5 shrink-0" />
                <span className="text-[15px] sm:text-[16px] font-semibold text-white whitespace-nowrap">
                  {item.displayName || item.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}