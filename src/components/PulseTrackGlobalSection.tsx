import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, MapPin, Building, Globe } from "lucide-react";
import { useCurrency } from "../utils/currencyContext";

export function PulseTrackGlobalSection() {
  const { setCurrencyCode } = useCurrency();

  const regions = [
    {
      country: "India",
      nativeName: "भा रत",
      flag: "🇮🇳",
      currencyCode: "INR" as const,
      priceBadge: "₹299 / user / mo",
      href: "/en-in",
      points: [
        "GST-compliant tax invoicing via UPI or bank transfer",
        "Ready for the Digital Personal Data Protection (DPDP) Act",
        "Support in IST hours by Kombee team in Pune & Bengaluru",
        "Built-in offline queuing for patchy office / home Wi-Fi",
      ],
    },
    {
      country: "Australia",
      nativeName: "Australia",
      flag: "🇦🇺",
      currencyCode: "AUD" as const,
      priceBadge: "A$8 / user / mo",
      href: "/en-au",
      points: [
        "NSW Workplace Surveillance Act 14-day notice generator",
        "Privacy Act 1988 openness and transparency alignment",
        "Roster templates with late-arrival and overtime alerts",
        "AUD billing with automatic GST line-item breakdowns",
      ],
    },
    {
      country: "New Zealand",
      nativeName: "Aotearoa",
      flag: "🇳🇿",
      currencyCode: "NZD" as const,
      priceBadge: "NZ$9 / user / mo",
      href: "/en-nz",
      points: [
        "NZ Privacy Act 2020 principle-of-openness compliance",
        "Every employee sees their data first with zero hidden telemetry",
        "Accurate timesheets for payroll without keystroke logging",
        "Localised NZD pricing and regional server options",
      ],
    },
    {
      country: "UAE & Saudi Arabia",
      nativeName: "Middle East",
      flag: "🇦🇪 🇸🇦",
      currencyCode: "AED" as const,
      priceBadge: "AED 19 / SAR 19 / mo",
      href: "/en-ae",
      points: [
        "Work weeks configurable: Monday–Friday (UAE) or Sunday–Thursday (KSA)",
        "UAE & Saudi PDPL-aware employee notices and consent screens",
        "Enterprise in-region cloud data residency options",
        "Attendance without biometric turnstile bottleneck queues",
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
            Global, locally
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
            Made for teams across India, Australia,{" "}
            <span className="block text-[#4A5370]">New Zealand and the Gulf.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A5370] mt-4">
            Prices in your currency, attendance computed in each employee's own time zone, and work weeks that match local business norms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((region) => (
            <div
              key={region.country}
              className="bg-[#F7F4EE] rounded-2xl p-6 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{region.flag}</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#FFFFFF] text-[#C2361A] border border-[#E6E2D8]">
                    {region.priceBadge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F1730]">
                  {region.country}
                </h3>
                <div className="text-[11px] text-[#4A5370] mb-4">
                  {region.nativeName}
                </div>

                <ul className="space-y-2.5 mb-6">
                  {region.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#4A5370]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36] shrink-0 mt-1.5" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setCurrencyCode(region.currencyCode)}
                  className="text-[11px] font-semibold text-[#4A5370] hover:text-[#0F1730] underline"
                >
                  Set currency
                </button>

                <Link
                  to={region.href}
                  className="text-xs font-bold text-[#FF5A36] hover:text-[#E94A27] flex items-center gap-1"
                >
                  Regional details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
