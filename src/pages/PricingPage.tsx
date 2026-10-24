import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { useCurrency, CURRENCIES, CurrencyCode } from "../utils/currencyContext";
import {
  Check,
  Minus,
  ArrowRight,
  Sparkles,
  Building2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sliders,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

export function PricingPage() {
  const { currencyCode, setCurrencyCode, billingInterval, setBillingInterval, currency } = useCurrency();
  const [teamSize, setTeamSize] = useState(25);
  const [selectedPlanForCalc, setSelectedPlanForCalc] = useState<"pro" | "premium">("pro");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isAnnual = billingInterval === "annual";
  const proRate = isAnnual ? currency.annual.pro : currency.monthly.pro;
  const premiumRate = isAnnual ? currency.annual.premium : currency.monthly.premium;

  const activeRate = selectedPlanForCalc === "pro" ? proRate : premiumRate;
  const totalCalculated = (teamSize * activeRate).toLocaleString();

  const billingFaqs = [
    {
      q: "Can I change plans or seat count any time?",
      a: "Yes. Upgrades and seat adjustments are prorated automatically. Any unused days apply directly toward your next billing cycle.",
    },
    {
      q: "What happens if a payment fails?",
      a: "You get a 7-day grace period. After that, your workspace is paused — never deleted — and any active sessions in progress finish and sync safely first.",
    },
    {
      q: "Do you offer annual invoicing and purchase orders?",
      a: "Yes, available on Pro, Premium, and Enterprise. Enterprise accounts can be paid via annual bank wire (NEFT/RTGS/ACH/SWIFT) or quarterly true-ups.",
    },
    {
      q: "Do you provide GST-compliant invoices in India?",
      a: "Yes. Indian companies receive automated GST-compliant tax invoices with GSTIN validation and reverse-charge accounting support.",
    },
    {
      q: "Is there a discount for non-profits or open-source projects?",
      a: "Yes! We offer a 30% discount for registered non-profits, academic institutions, and open-source foundation teams. Contact sales@deskmerit.com.",
    },
  ];

  const matrixSections = [
    {
      category: "Time & Activity Tracking",
      features: [
        { name: "Automatic background tracking", starter: true, pro: true, premium: true, ent: true },
        { name: "App, URL & window title tracking", starter: true, pro: true, premium: true, ent: true },
        { name: "Role-based productivity scoring", starter: "Basic", pro: "Advanced", premium: "Custom rules", ent: "Enterprise matrix" },
        { name: "Private Time one-click pause", starter: true, pro: true, premium: true, ent: true },
        { name: "Offline tracking & automatic queue", starter: true, pro: true, premium: true, ent: true },
      ],
    },
    {
      category: "Project & Task Management",
      features: [
        { name: "Tracker Plus (Jira, Azure DevOps, OpenProject)", starter: false, pro: true, premium: true, ent: true },
        { name: "Multi-tenant engineer tokens", starter: false, pro: true, premium: true, ent: true },
        { name: "Billable vs non-billable categorization", starter: false, pro: true, premium: true, ent: true },
        { name: "Client billing rates per role/project", starter: false, pro: true, premium: true, ent: true },
        { name: "Budget overrun alerts (90% & 100%)", starter: false, pro: true, premium: true, ent: true },
      ],
    },
    {
      category: "Attendance & Workforce",
      features: [
        { name: "Calendar-aware attendance (Google & Outlook)", starter: false, pro: true, premium: true, ent: true },
        { name: "Overnight shift logic crossing midnight", starter: false, pro: true, premium: true, ent: true },
        { name: "Leave request & team absence calendar", starter: false, pro: true, premium: true, ent: true },
        { name: "Audited HR attendance corrections", starter: false, pro: true, premium: true, ent: true },
      ],
    },
    {
      category: "Security & Governance",
      features: [
        { name: "Optional screenshots (off by default)", starter: false, pro: "Blurred only", premium: "Configurable", ent: "Configurable + Audit" },
        { name: "REST API & Claude MCP Server", starter: false, pro: true, premium: true, ent: true },
        { name: "White-label & reseller branding", starter: false, false: false, premium: true, ent: true },
        { name: "SAML 2.0 / OIDC SSO & SCIM", starter: false, pro: false, premium: false, ent: true },
        { name: "Dedicated database & data residency choice", starter: false, pro: false, premium: false, ent: true },
        { name: "99.9% Uptime SLA & 24/7 Priority Support", starter: false, pro: false, premium: false, ent: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* SECTION 1: Deep Navy Hero Matching Sqalible Screenshot 2 */}
        <section className="bg-[#0A0F1D] text-white pt-10 pb-20 border-b border-[#24305A] text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FF5A36]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-[#9AA1B2] flex items-center justify-center gap-1.5 mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="font-semibold text-white">Pricing</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A264F] border border-[#2E3C6B] text-xs font-semibold text-[#38BDF8] mb-6">
              <span className="pulse-dot mr-1" />
              <span>Transparent, Predictable Pricing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-4">
              Simple plans, predictable pricing.
            </h1>
            <p className="text-base sm:text-lg text-[#9AA1B2] max-w-2xl mx-auto">
              Every plan starts with a 14-day full trial with every feature included. No credit card required.
            </p>
          </div>
        </section>

        {/* SECTION 2: 3-Tier Cards with Highlighted Pro Tier (Sqalible Screenshot 2) */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
              Flexible Subscriptions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
              Plans that scale with your workforce
            </h2>

            {/* Monthly / Annual Toggle */}
            <div className="mt-6 inline-flex items-center p-1.5 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-sm">
              <button
                type="button"
                onClick={() => setBillingInterval("monthly")}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                  !isAnnual ? "bg-[#0F1730] text-white shadow-sm" : "text-[#4A5370] hover:text-[#0F1730]"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingInterval("annual")}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                  isAnnual ? "bg-[#0F1730] text-white shadow-sm" : "text-[#4A5370] hover:text-[#0F1730]"
                }`}
              >
                <span>Annual</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] bg-[#FFE6DF] text-[#C2361A] font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* 3 Main Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* 1. Starter */}
            <div className="rounded-3xl p-8 bg-white border border-[#E6E2D8] shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5370] bg-[#F7F4EE] px-3 py-1 rounded-full border border-[#E6E2D8] inline-block mb-4">
                  Starter Plan
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F1730]">Free</h3>
                <p className="text-xs text-[#4A5370] mt-1 mb-6">
                  For freelancers and small bootstrapped teams up to 5 seats.
                </p>

                <div className="mb-6 pb-6 border-b border-[#E6E2D8]">
                  <span className="text-4xl font-extrabold text-[#0F1730]">Free</span>
                  <span className="text-xs text-[#4A5370] ml-2">up to 5 users forever</span>
                </div>

                <ul className="space-y-3 text-xs text-[#0F1730] mb-8">
                  {[
                    "Automatic background time tracking",
                    "Productivity scoring per app and URL",
                    "Private Time one-click pause",
                    "Basic attendance presence tracking",
                    "Windows, macOS & Linux agents",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/signup"
                className="w-full py-3.5 rounded-xl border border-[#0F1730] hover:bg-[#F7F4EE] text-[#0F1730] font-bold text-xs text-center transition-all"
              >
                Start free forever
              </Link>
            </div>

            {/* 2. Pro (Highlighted Middle Card with Sqalible Styling) */}
            <div className="rounded-3xl p-8 bg-white border-2 border-[#FF5A36] shadow-2xl relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5A36] text-[#0F1730] text-[10px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                ★ Most Popular
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF] px-3 py-1 rounded-full inline-block mb-4 mt-2">
                  Pro Plan
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F1730]">Growing Teams</h3>
                <p className="text-xs text-[#4A5370] mt-1 mb-6">
                  For agencies and engineering teams that bill client time.
                </p>

                <div className="mb-6 pb-6 border-b border-[#E6E2D8]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#0F1730]">{currency.symbol}{proRate}</span>
                    <span className="text-xs text-[#4A5370]">/ user / month</span>
                  </div>
                  <span className="text-[11px] text-[#FF5A36] font-semibold mt-1 block">
                    Billed {isAnnual ? "annually (20% off)" : "monthly"}
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-[#0F1730] mb-8">
                  {[
                    "Everything in Starter, plus:",
                    "Tracker Plus (Jira, Azure DevOps, OpenProject)",
                    "Calendar integration (Google & Outlook)",
                    "Optional blurred screenshots with notifications",
                    "Project billing, rates & budget alerts",
                    "Shifts scheduling & leave calendar",
                    "Slack, Teams, Zapier & Make integrations",
                    "REST API & Claude MCP server",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span className={i === 0 ? "font-bold text-[#FF5A36]" : ""}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/signup"
                className="w-full py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-[#0F1730] font-bold text-xs text-center transition-all shadow-md hover:shadow-glow-ember"
              >
                Start 14-day free trial →
              </Link>
            </div>

            {/* 3. Enterprise */}
            <div className="rounded-3xl p-8 bg-white border border-[#E6E2D8] shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5370] bg-[#F7F4EE] px-3 py-1 rounded-full border border-[#E6E2D8] inline-block mb-4">
                  Enterprise
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F1730]">Regulated & Large</h3>
                <p className="text-xs text-[#4A5370] mt-1 mb-6">
                  For 200+ seat organizations requiring governance & compliance.
                </p>

                <div className="mb-6 pb-6 border-b border-[#E6E2D8]">
                  <span className="text-4xl font-extrabold text-[#0F1730]">Custom</span>
                  <span className="text-xs text-[#4A5370] ml-2">Annual invoice billing</span>
                </div>

                <ul className="space-y-3 text-xs text-[#0F1730] mb-8">
                  {[
                    "Everything in Pro, plus:",
                    "SAML 2.0 / OIDC SSO & SCIM directory sync",
                    "Custom roles & IP allowlisting",
                    "Dedicated database & data residency selection",
                    "Audit-log streaming to SIEM",
                    "Custom MSA, DPA & 99.9% uptime SLA",
                    "Dedicated Customer Success Manager in your timezone",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span className={i === 0 ? "font-bold text-[#0F1730]" : ""}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/demo"
                className="w-full py-3.5 rounded-xl bg-[#0F1730] hover:bg-[#1A264F] text-white font-bold text-xs text-center transition-all"
              >
                Talk to enterprise sales
              </Link>
            </div>
          </div>

          {/* Sqalible HRMS Add-on Banner (Sqalible Screenshot 2) */}
          <div className="mt-12 p-6 rounded-2xl bg-[#E6F4EA] border border-[#B7E1CD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#12B886] text-white flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-[#0F1730] block">
                  Already using Sqalible HRMS?
                </span>
                <span className="text-xs text-[#4A5370]">
                  Turn Deskmerit on from your HRMS admin console. Billed as a single consolidated line-item on your Sqalible invoice.
                </span>
              </div>
            </div>
            <Link
              to="/hrms-add-on"
              className="text-xs font-bold text-[#0F1730] hover:text-[#12B886] flex items-center gap-1 shrink-0"
            >
              Explore HRMS add-on →
            </Link>
          </div>
        </section>

        {/* SECTION 3: Deep Dark Interactive Cost Calculator Card (Sqalible Screenshot 2) */}
        <section className="py-16 sm:py-20 bg-[#0A0F1D] text-white border-b border-[#24305A]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111A33] rounded-[28px] p-8 sm:p-12 border border-[#24305A] shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Interactive Controls */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A264F] text-xs font-semibold text-[#FF5A36]">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Live Cost Estimator</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Calculate your exact monthly investment
                  </h3>

                  {/* Plan Picker */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#9AA1B2]">Select plan:</span>
                    <button
                      type="button"
                      onClick={() => setSelectedPlanForCalc("pro")}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedPlanForCalc === "pro"
                          ? "bg-[#FF5A36] text-[#0F1730]"
                          : "bg-[#1A264F] text-white border border-[#2B3969]"
                      }`}
                    >
                      Pro Plan ({currency.symbol}{proRate}/mo)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPlanForCalc("premium")}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedPlanForCalc === "premium"
                          ? "bg-[#FF5A36] text-[#0F1730]"
                          : "bg-[#1A264F] text-white border border-[#2B3969]"
                      }`}
                    >
                      Premium Plan ({currency.symbol}{premiumRate}/mo)
                    </button>
                  </div>

                  {/* Slider */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#9AA1B2]">Team size:</span>
                      <span className="font-extrabold text-white text-base font-mono">{teamSize} seats</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={250}
                      step={5}
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="w-full accent-[#FF5A36] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#9AA1B2] font-mono">
                      <span>5 seats</span>
                      <span>50</span>
                      <span>100</span>
                      <span>150</span>
                      <span>200</span>
                      <span>250+</span>
                    </div>
                  </div>
                </div>

                {/* Right: Estimated Output Badge */}
                <div className="lg:col-span-5 bg-[#0A0F1D] rounded-2xl p-8 border border-[#24305A] text-center space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9AA1B2]">
                    Total Estimated Investment
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                    {currency.symbol}{totalCalculated}
                    <span className="text-xs font-normal text-[#9AA1B2] ml-1">/ mo</span>
                  </div>
                  <p className="text-xs text-[#9AA1B2] leading-relaxed">
                    Includes all Tracker Plus features, unlimited Jira tasks, attendance automation, and live customer support.
                  </p>

                  <Link
                    to="/signup"
                    className="block w-full py-3 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-[#0F1730] font-bold text-xs text-center transition-all shadow-sm"
                  >
                    Start 14-day free trial for {teamSize} users
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Full Feature Matrix by Module (Sqalible Screenshot 2) */}
        <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                Detailed Comparison
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                Full feature matrix by module
              </h2>
            </div>

            <div className="overflow-x-auto border border-[#E6E2D8] rounded-2xl shadow-card">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#0F1730] text-white">
                    <th className="py-4 px-6 font-bold text-sm">Capability</th>
                    <th className="py-4 px-4 font-bold text-center">Starter</th>
                    <th className="py-4 px-4 font-bold text-center bg-[#FF5A36] text-[#0F1730]">Pro</th>
                    <th className="py-4 px-4 font-bold text-center">Premium</th>
                    <th className="py-4 px-4 font-bold text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E2D8]">
                  {matrixSections.map((sec, secIdx) => (
                    <React.Fragment key={secIdx}>
                      <tr className="bg-[#F7F4EE]">
                        <td colSpan={5} className="py-3 px-6 font-extrabold text-xs text-[#0F1730] uppercase tracking-wider">
                          {sec.category}
                        </td>
                      </tr>
                      {sec.features.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#F7F4EE]/50 transition-colors">
                          <td className="py-3.5 px-6 font-medium text-[#0F1730]">{row.name}</td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof row.starter === "boolean" ? (
                              row.starter ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />
                            ) : (
                              <span className="font-semibold text-[#4A5370]">{row.starter}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center bg-[#FFE6DF]/30">
                            {typeof row.pro === "boolean" ? (
                              row.pro ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />
                            ) : (
                              <span className="font-bold text-[#FF5A36]">{row.pro}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof row.premium === "boolean" ? (
                              row.premium ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />
                            ) : (
                              <span className="font-semibold text-[#0F1730]">{row.premium}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof row.ent === "boolean" ? (
                              row.ent ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />
                            ) : (
                              <span className="font-semibold text-[#0F1730]">{row.ent}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 5: Signature FAQ Layout (Left Dark Mesh Card + Right Accordion) */}
        <section className="py-20 lg:py-28 bg-[#F7F4EE] border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Dark Card */}
              <div className="lg:col-span-5 bg-[#0F1730] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden border border-[#24305A] shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5A36]/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10 space-y-6">
                  <div className="w-10 h-10 rounded-xl bg-[#FF5A36]/20 text-[#FF5A36] flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Need a Custom Enterprise Quote?
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9AA1B2] leading-relaxed">
                    Have 200+ employees, specific data residency requirements, or need custom MSA and DPA terms? Our executive team can prepare a tailor-made proposal.
                  </p>

                  <div className="pt-4">
                    <Link
                      to="/demo"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#0F1730] hover:bg-[#F7F4EE] text-xs font-bold transition-all shadow"
                    >
                      <span>Request Enterprise Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Accordion */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                  Clear Answers
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730] mb-8">
                  Frequently asked pricing questions
                </h2>

                <div className="divide-y divide-[#E6E2D8]">
                  {billingFaqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className="py-4">
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full flex items-center justify-between text-left py-2 font-bold text-sm sm:text-base text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                        >
                          <span>{faq.q}</span>
                          <span className="text-[#FF5A36] shrink-0 ml-4">
                            {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </span>
                        </button>
                        {isOpen && (
                          <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mt-2 pt-2 pb-2">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <DeskmeritFooter />
    </div>
  );
}