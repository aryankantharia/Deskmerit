import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { useCurrency, CURRENCIES, CurrencyCode } from "../utils/currencyContext";
import { Check, ArrowRight, Sparkles, Building2, HelpCircle, ChevronDown, Plus, Minus } from "lucide-react";

export function PricingPage() {
  const { currencyCode, setCurrencyCode, billingInterval, setBillingInterval, currency } = useCurrency();
  const [teamSize, setTeamSize] = useState(15);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isAnnual = billingInterval === "annual";
  const proRate = isAnnual ? currency.annual.pro : currency.monthly.pro;
  const premiumRate = isAnnual ? currency.annual.premium : currency.monthly.premium;

  const totalProMonthly = (teamSize * proRate).toFixed(0);
  const totalPremiumMonthly = (teamSize * premiumRate).toFixed(0);

  const billingFaqs = [
    {
      q: "Can I change plans any time?",
      a: "Yes. Upgrades and seat count changes are prorated automatically. Any unused credits apply toward your next invoice.",
    },
    {
      q: "What happens if a payment fails?",
      a: "You get a 7-day grace period. After that, your account is paused — never deleted — and any tracking session in progress finishes and syncs safely first.",
    },
    {
      q: "Do you offer annual invoicing?",
      a: "Yes, on Enterprise and Premium with a fixed seat count or quarterly true-up. Bank transfers (wire/NEFT/RTGS) and purchase orders are accepted.",
    },
    {
      q: "Is there a discount for non-profits or education?",
      a: "Yes, we offer up to a 30% discount for qualified non-profit organisations, universities, and open-source foundations. Reach out to our team at sales@deskmerit.io.",
    },
    {
      q: "Do you charge GST or VAT?",
      a: "GST / VAT is applied based on your billing address at checkout. Indian customers receive fully GST-compliant invoices with GSTIN validation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Header */}
        <div className="py-16 sm:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] mb-6 shadow-sm">
            <span className="pulse-dot" />
            <span>Pricing</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
            Simple pricing.{" "}
            <span className="text-[#FF5A36] block sm:inline font-normal">
              Every plan starts with a 14-day full trial.
            </span>
          </h1>

          <p className="text-lg text-[#4A5370] max-w-2xl mx-auto mb-8 font-normal">
            No credit card needed. After the trial you move to the free Starter plan unless you choose a paid plan.
          </p>

          {/* Toggle Controls: Monthly/Annual + Currency Selector */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Billing interval toggle */}
            <div className="bg-[#FFFFFF] p-1.5 rounded-xl border border-[#E6E2D8] flex items-center shadow-subtle">
              <button
                type="button"
                onClick={() => setBillingInterval("monthly")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  !isAnnual
                    ? "bg-[#0F1730] text-white shadow-sm"
                    : "text-[#4A5370] hover:text-[#0F1730]"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingInterval("annual")}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isAnnual
                    ? "bg-[#0F1730] text-white shadow-sm"
                    : "text-[#4A5370] hover:text-[#0F1730]"
                }`}
              >
                <span>Annual</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#FF5A36] text-[#0F1730] font-extrabold">
                  save 20%
                </span>
              </button>
            </div>

            {/* Currency selector */}
            <div className="flex items-center gap-1 bg-[#FFFFFF] p-1.5 rounded-xl border border-[#E6E2D8] shadow-subtle">
              {(["USD", "INR", "AUD", "NZD", "AED", "SAR"] as CurrencyCode[]).map((code) => {
                const item = CURRENCIES[code];
                const active = currencyCode === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setCurrencyCode(code)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      active
                        ? "bg-[#FFE6DF] text-[#C2361A]"
                        : "text-[#4A5370] hover:text-[#0F1730]"
                    }`}
                  >
                    <span>{item.flag} </span>
                    <span>{code}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="text-xs text-[#4A5370] mt-3">
            {currency.taxNotice}
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Starter */}
            <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6E2D8] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="text-base font-bold text-[#0F1730]">Starter</div>
                <div className="text-xs text-[#4A5370] mt-1 mb-5">
                  For freelancers and small teams
                </div>

                <div className="pb-6 border-b border-[#E6E2D8]">
                  <div className="text-3xl font-extrabold text-[#0F1730]">
                    Free
                  </div>
                  <div className="text-xs text-[#4A5370] mt-1">up to 5 users permanently</div>
                </div>

                <ul className="space-y-3 py-6 text-xs text-[#0F1730]">
                  {[
                    "Automatic time tracking",
                    "Productivity scores",
                    "Idle & Private Time",
                    "Attendance tracking",
                    "Basic reports & CSV export",
                    "Windows, macOS & Linux",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/signup"
                className="w-full py-3 rounded-[12px] bg-[#FFFFFF] border border-[#0F1730] text-[#0F1730] font-bold text-xs text-center hover:bg-[#F7F4EE] transition-colors"
              >
                Start free
              </Link>
            </div>

            {/* Pro (Highlighted) */}
            <div className="bg-[#FFFFFF] rounded-2xl p-7 border-2 border-[#FF5A36] shadow-elevated relative flex flex-col justify-between ring-1 ring-[#FF5A36]/30">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF5A36] text-[#0F1730] text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Most popular
              </div>

              <div>
                <div className="text-base font-bold text-[#0F1730]">Pro</div>
                <div className="text-xs text-[#4A5370] mt-1 mb-5">
                  For growing teams that bill time
                </div>

                <div className="pb-6 border-b border-[#E6E2D8]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#0F1730] font-display tnum">
                      {currency.symbol}{proRate}
                    </span>
                    <span className="text-xs text-[#4A5370]">/ user / mo</span>
                  </div>
                  <div className="text-xs text-[#C2361A] font-semibold mt-1">
                    {isAnnual ? "Billed annually" : "Billed monthly"}
                  </div>
                </div>

                <ul className="space-y-3 py-6 text-xs text-[#0F1730]">
                  <li className="font-bold text-[#0F1730] flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" />
                    <span>Everything in Starter, plus:</span>
                  </li>
                  {[
                    "Tracker Plus: Jira, Azure DevOps, OpenProject",
                    "Google & Outlook calendar sync",
                    "Optional screenshots (blurred by default)",
                    "Project billing, shifts & leave",
                    "Slack, Teams, Zapier & Make",
                    "REST API & MCP server for AI queries",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#12B886] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/signup?plan=pro"
                className="w-full py-3 rounded-[12px] bg-[#FF5A36] hover:bg-[#E94A27] text-[#0F1730] font-bold text-xs text-center shadow transition-colors"
              >
                Start 14-day trial
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6E2D8] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="text-base font-bold text-[#0F1730]">Premium</div>
                <div className="text-xs text-[#4A5370] mt-1 mb-5">
                  For agencies, IT services & resellers
                </div>

                <div className="pb-6 border-b border-[#E6E2D8]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-[#0F1730] font-display tnum">
                      {currency.symbol}{premiumRate}
                    </span>
                    <span className="text-xs text-[#4A5370]">/ user / mo</span>
                  </div>
                  <div className="text-xs text-[#4A5370] mt-1">
                    {isAnnual ? "Billed annually" : "Billed monthly"}
                  </div>
                </div>

                <ul className="space-y-3 py-6 text-xs text-[#0F1730]">
                  <li className="font-bold text-[#0F1730] flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" />
                    <span>Everything in Pro, plus:</span>
                  </li>
                  {[
                    "Advanced profitability reporting",
                    "White-label & reseller sub-organisations",
                    "Custom client portal branding",
                    "Priority support with dedicated Slack channel",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#12B886] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/signup?plan=premium"
                className="w-full py-3 rounded-[12px] bg-[#FFFFFF] border border-[#0F1730] text-[#0F1730] font-bold text-xs text-center hover:bg-[#F7F4EE] transition-colors"
              >
                Start 14-day trial
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-[#0F1730] text-white rounded-2xl p-7 border border-[#24305A] shadow-subtle flex flex-col justify-between">
              <div>
                <div className="text-base font-bold text-white">Enterprise</div>
                <div className="text-xs text-[#9AA1B2] mt-1 mb-5">
                  For 200+ seats & regulated teams
                </div>

                <div className="pb-6 border-b border-[#24305A]">
                  <div className="text-3xl font-extrabold text-white">
                    Custom
                  </div>
                  <div className="text-xs text-[#9AA1B2] mt-1">Annual PO invoice billing</div>
                </div>

                <ul className="space-y-3 py-6 text-xs text-[#E6E2D8]">
                  <li className="font-bold text-white flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" />
                    <span>Everything in Premium, plus:</span>
                  </li>
                  {[
                    "SAML/OIDC SSO & SCIM provisioning",
                    "Custom roles & IP allowlisting",
                    "Data residency (IN, AU, UAE, US)",
                    "Audit-log streaming to Datadog/Splunk",
                    "Custom MSA, DPA & 99.9% uptime SLA",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#12B886] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/demo"
                className="w-full py-3 rounded-[12px] bg-[#24305A] hover:bg-[#334173] text-white font-bold text-xs text-center border border-[#334173] transition-colors"
              >
                Talk to sales
              </Link>
            </div>
          </div>
        </div>

        {/* Interactive Team Size Calculator */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E6E2D8] shadow-card">
            <h3 className="text-xl font-bold text-[#0F1730] mb-2">Estimate your monthly cost</h3>
            <p className="text-xs text-[#4A5370] mb-6">
              Drag the slider to calculate the exact price for your team:
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-[#0F1730]">
                <span>Team size: <strong className="text-sm font-bold text-[#FF5A36]">{teamSize} seats</strong></span>
                <span>{isAnnual ? "Annual rate (20% off)" : "Monthly rate"}</span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-[#FF5A36] h-2 bg-[#E6E2D8] rounded-lg cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-[#E6E2D8] text-center">
              <div className="p-4 rounded-xl bg-[#F7F4EE]">
                <div className="text-xs text-[#4A5370]">Pro plan total</div>
                <div className="text-2xl font-bold text-[#0F1730] mt-1 font-display tnum">
                  {currency.symbol}{totalProMonthly} <span className="text-xs font-normal text-[#4A5370]">/ month</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFE6DF]/60">
                <div className="text-xs text-[#C2361A]">Premium plan total</div>
                <div className="text-2xl font-bold text-[#C2361A] mt-1 font-display tnum">
                  {currency.symbol}{totalPremiumMonthly} <span className="text-xs font-normal text-[#C2361A]">/ month</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Already on Sqalible HRMS Banner (Page 7 wireframe) */}
        <section className="py-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFE6DF] rounded-2xl p-6 sm:p-8 border border-[#FF5A36]/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-[#FF5A36] text-[#0F1730] font-bold text-lg flex items-center justify-center shrink-0 font-display">
                p
              </span>
              <div>
                <h4 className="font-bold text-base text-[#0F1730]">
                  Already on Sqalible HRMS?
                </h4>
                <p className="text-xs text-[#4A5370] mt-1 max-w-xl">
                  Turn Deskmerit on from your HRMS admin panel. It's billed as a simple line item on your Sqalible invoice — no separate contract.
                </p>
              </div>
            </div>

            <Link
              to="/hrms-add-on"
              className="px-5 py-3 rounded-[12px] bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs shrink-0 transition-colors flex items-center gap-1.5"
            >
              Explore the HRMS add-on <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Billing FAQ Accordion */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730]">
              Fair, flexible, no surprises.
            </h3>
            <p className="text-xs text-[#4A5370] mt-1">Billing & licensing questions answered</p>
          </div>

          <div className="space-y-3">
            {billingFaqs.map((faq, idx) => (
              <div key={idx} className="bg-[#FFFFFF] rounded-xl border border-[#E6E2D8] p-5 shadow-subtle">
                <h4 className="font-bold text-sm text-[#0F1730] mb-1.5">{faq.q}</h4>
                <p className="text-xs text-[#4A5370] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}