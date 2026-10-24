import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { Check, ArrowRight, ToggleLeft, ToggleRight, Sparkles, ShieldCheck } from "lucide-react";

export function HrmsAddonPage() {
  const [addonEnabled, setAddonEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">HRMS add-on (Sqalible)</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm">
                <span className="pulse-dot" />
                <span>Sqalible Native Integration</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight">
                Time tracking,{" "}
                <span className="text-[#FF5A36] block font-normal">switched on inside your HRMS.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
                If you run Sqalible, Deskmerit is one toggle away. No new vendor, no new login, no new invoice — attendance and work-time data flow straight into the HRMS you already use.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center text-xs font-extrabold text-white bg-[#FF5A36] hover:bg-[#E94A27] px-6 py-3.5 rounded-[12px] shadow-md hover:shadow-glow-ember transition-all"
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
            </div>

            {/* Right: Interactive Sqalible UI Mock-up with Working Toggle */}
            <div className="lg:col-span-6 bg-[#FFFFFF] rounded-[24px] p-6 sm:p-8 border border-[#E6E2D8] shadow-card">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6E2D8] text-xs">
                <div className="flex items-center gap-2 font-bold text-[#0F1730]">
                  <span className="w-5 h-5 rounded bg-[#0F1730] text-white flex items-center justify-center text-[10px]">
                    S
                  </span>
                  <span>Sqalible HRMS</span>
                  <span className="text-[#4A5370] font-normal">Admin · Settings › Add-ons</span>
                </div>
                <span className="text-[10px] font-semibold text-[#4A5370]">Live mock-up</span>
              </div>

              {/* Module Toggle Card */}
              <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8] flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0F1730] text-white flex items-center justify-center font-display font-bold text-base">
                    p
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0F1730]">Deskmerit</h4>
                    <p className="text-xs text-[#4A5370]">Automatic time tracking & attendance</p>
                  </div>
                </div>

                {/* Interactive toggle switch */}
                <button
                  type="button"
                  onClick={() => setAddonEnabled(!addonEnabled)}
                  className={`relative inline-flex h-7 w-12 items-center rounded-full transition-colors ${
                    addonEnabled ? "bg-[#FF5A36]" : "bg-[#9AA1B2]"
                  }`}
                  aria-label="Toggle Deskmerit Add-on"
                >
                  <span
                    className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                      addonEnabled ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              {/* Addon Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8]/60">
                  <div className="text-[11px] text-[#4A5370]">Employees provisioned</div>
                  <div className="text-xl font-bold text-[#0F1730] mt-0.5 font-display tnum">
                    {addonEnabled ? "142" : "0"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8]/60">
                  <div className="text-[11px] text-[#4A5370]">Agents installed</div>
                  <div className="text-xl font-bold text-[#12B886] mt-0.5 font-display tnum">
                    {addonEnabled ? "131 · 92%" : "Inactive"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8]/60">
                  <div className="text-[11px] text-[#4A5370]">Present today</div>
                  <div className="text-xl font-bold text-[#0F1730] mt-0.5 font-display tnum">
                    {addonEnabled ? "118" : "—"}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8]/60">
                  <div className="text-[11px] text-[#4A5370]">On invoice</div>
                  <div className="text-xl font-bold text-[#0F1730] mt-0.5 font-display">
                    {addonEnabled ? "Line item" : "Excluded"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Steps How It Works */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                How it works
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                Live in an afternoon.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Enable", desc: "Your HRMS admin switches Deskmerit on in Sqalible settings." },
                { step: "02", title: "Provision", desc: "Employees are created automatically from your existing directory." },
                { step: "03", title: "Install", desc: "Staff sign in to the desktop agent with their regular HRMS login." },
                { step: "04", title: "Report", desc: "Attendance, productivity and project time appear inside Sqalible." },
              ].map((s) => (
                <div key={s.step} className="p-6 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8]">
                  <span className="text-sm font-mono font-extrabold text-[#C2361A] bg-[#FFE6DF] px-2.5 py-1 rounded-md inline-block mb-4">
                    {s.step}
                  </span>
                  <h3 className="text-base font-bold text-[#0F1730] mb-2">{s.title}</h3>
                  <p className="text-xs text-[#4A5370] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on vs Standalone Comparison */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730]">
              Add-on or standalone? Same product.
            </h3>
            <p className="text-xs text-[#4A5370] mt-1">
              The tracking agent, data accuracy and reports are identical. Only the front door is different.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl border border-[#E6E2D8] overflow-hidden shadow-card">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#F7F4EE] border-b border-[#E6E2D8] text-[#4A5370]">
                  <th className="py-3 px-6 font-semibold">Aspect</th>
                  <th className="py-3 px-6 font-bold text-[#C2361A]">Inside Sqalible HRMS</th>
                  <th className="py-3 px-6 font-bold text-[#0F1730]">Deskmerit standalone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E2D8]/60 text-[#0F1730]">
                <tr>
                  <td className="py-4 px-6 font-semibold">Sign-in</td>
                  <td className="py-4 px-6">Your regular HRMS credentials</td>
                  <td className="py-4 px-6">Deskmerit login or company SAML SSO</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Employees</td>
                  <td className="py-4 px-6">Auto-provisioned from HRMS directory</td>
                  <td className="py-4 px-6">Invited by email or SCIM bridge</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Reports</td>
                  <td className="py-4 px-6">Inside Sqalible dashboards</td>
                  <td className="py-4 px-6">Deskmerit web dashboard</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Billing</td>
                  <td className="py-4 px-6">Simple line item on Sqalible invoice</td>
                  <td className="py-4 px-6">Card (Stripe) or Enterprise PO invoice</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Calendar</td>
                  <td className="py-4 px-6">Handled natively by the HRMS</td>
                  <td className="py-4 px-6">Connect Google or Outlook calendar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Sqalible HRMS Add-On FAQs"
          category="INTEGRATION FAQS"
          helpTitle="Have Existing Biometric or Payroll Systems?"
          helpDescription="Our solutions architects can configure zero-disruption sync between your current biometric logs, Jira workflows, and Sqalible payroll."
          customFaqs={[
            {
              q: "How do I activate Deskmerit inside my Sqalible HRMS account?",
              a: "Navigate to your Sqalible Admin Portal > Add-ons Marketplace, and toggle 'Deskmerit Automatic Time Tracking' to On. Your employee master directory and project codes sync instantly."
            },
            {
              q: "Do employees need a separate password or portal login?",
              a: "No. Employees authenticate using their standard Sqalible credentials or company SAML SSO. There are no secondary passwords to manage or forget."
            },
            {
              q: "How does timesheet data transfer into monthly payroll?",
              a: "Deskmerit's verified attendance hours, approved overtime, and project timesheets populate directly into Sqalible's payroll calculation engine automatically. No CSV downloads or manual ledger entry required."
            },
            {
              q: "Can we activate Deskmerit for only select departments?",
              a: "Yes. You can enable Deskmerit per department, role, or team. For instance, you can turn on Tracker Plus for engineering and delivery squads while keeping back-office staff on standard attendance."
            },
            {
              q: "How are public holidays and approved leaves reconciled?",
              a: "Because Deskmerit is natively unified with Sqalible HRMS, approved leaves and gazetted holidays on the company calendar are automatically accounted for, so team members on leave are never erroneously flagged as absent."
            }
          ]}
        />

        <DeskmeritCtaBand
          title="Already on Sqalible? Switch it on today."
          subtitle="Talk to your Kombee account manager or enable Deskmerit from your admin panel."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
