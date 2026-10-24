import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { Check, ArrowRight, ShieldCheck, Download, CheckCircle2, Clock } from "lucide-react";
import { useCurrency } from "../utils/currencyContext";

export function TrialSignupPage() {
  const navigate = useNavigate();
  const { currency } = useCurrency();

  const [step, setStep] = useState<"form" | "provisioning" | "ready">("form");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    plan: "pro",
    region: "India (Mumbai · ap-south-1)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("provisioning");
    setTimeout(() => {
      setStep("ready");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main className="py-12 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card">
          {step === "form" && (
            <div className="space-y-8">
              <div className="text-center max-w-xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFE6DF] text-xs font-semibold text-[#C2361A] mb-4">
                  <span className="pulse-dot" />
                  <span>14-day full feature trial</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  Start your Deskmerit workspace.
                </h1>
                <p className="text-xs sm:text-sm text-[#4A5370] mt-2">
                  No credit card required. Includes Tracker Plus (Jira, Azure DevOps, OpenProject), attendance tracking, and REST/MCP API.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Full name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ananya Sharma"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Work email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ananya@company.com"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Company name *</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Cognitive Scale Solutions"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F1730] mb-1">Trial Plan</label>
                    <select
                      value={formData.plan}
                      onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730]"
                    >
                      <option value="pro">Pro (Tracker Plus + Calendars)</option>
                      <option value="premium">Premium (White-label + Reseller)</option>
                      <option value="enterprise">Enterprise (SSO + SCIM + Residency)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F1730] mb-1">Data Residency Region</label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730]"
                    >
                      <option value="India (Mumbai · ap-south-1)">India (Mumbai · ap-south-1)</option>
                      <option value="Australia (Sydney · ap-southeast-2)">Australia (Sydney · ap-southeast-2)</option>
                      <option value="Middle East (UAE · me-central-1)">Middle East (UAE · me-central-1)</option>
                      <option value="United States (N. Virginia · us-east-1)">United States (N. Virginia · us-east-1)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-[12px] bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-xs shadow-md hover:shadow-glow-ember transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  Create workspace →
                </button>

                <div className="text-[11px] text-[#9AA1B2] text-center pt-2">
                  🔒 No credit card required. You agree to our <Link to="/legal/terms" className="underline">Terms</Link> and <Link to="/legal/privacy" className="underline">Privacy Policy</Link>.
                </div>
              </form>
            </div>
          )}

          {step === "provisioning" && (
            <div className="text-center py-16 space-y-4">
              <div className="w-12 h-12 rounded-full border-4 border-[#FF5A36] border-t-transparent animate-spin mx-auto" />
              <h3 className="text-xl font-bold text-[#0F1730]">Setting up your secure workspace...</h3>
              <p className="text-xs text-[#4A5370]">
                Configuring tenant isolation in {formData.region}
              </p>
            </div>
          )}

          {step === "ready" && (
            <div className="text-center py-8 space-y-6 max-w-xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-[#12B886]/20 text-[#12B886] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0F1730]">
                  Workspace created for {formData.company}!
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] mt-1.5 leading-relaxed">
                  Your 14-day full trial is now active. Next step: download the lightweight desktop agent to start tracking from your Jira or Azure tickets.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8] text-left text-xs space-y-2">
                <div className="font-bold text-[#0F1730]">Quick Setup Steps:</div>
                <div className="flex items-center gap-2 text-[#4A5370]">
                  <Check className="w-3.5 h-3.5 text-[#12B886]" /> 1. Download the agent for your OS below
                </div>
                <div className="flex items-center gap-2 text-[#4A5370]">
                  <Check className="w-3.5 h-3.5 text-[#12B886]" /> 2. Sign in with <strong>{formData.email}</strong>
                </div>
                <div className="flex items-center gap-2 text-[#4A5370]">
                  <Check className="w-3.5 h-3.5 text-[#12B886]" /> 3. Connect your Jira personal access token and press Start
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  to="/download"
                  className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-[#FF5A36] text-white font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-[#E94A27] shadow-md hover:shadow-glow-ember transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Desktop Agent
                </Link>
                <Link
                  to="/"
                  className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-[#FFFFFF] border border-[#0F1730] text-[#0F1730] font-semibold text-xs text-center hover:bg-[#F7F4EE]"
                >
                  Go to dashboard preview
                </Link>
              </div>
            </div>
          )}
        </div>

        {step === "form" && (
          <DeskmeritFaq
            title="Trial & Onboarding FAQs"
            category="FAQS"
            helpTitle="Need Help Rolling Out to Your Team?"
            helpDescription="Our enterprise onboarding engineers can pre-provision your team workspaces, configure Jira tokens, and coordinate pilot trials."
            customFaqs={[
              {
                q: "Is a credit card required to start the 14-day free trial?",
                a: "No. You never need to enter credit card details to start a trial. At the end of the 14 days, you can decide whether to upgrade or continue on our free tier."
              },
              {
                q: "Can I invite other team members during the trial period?",
                a: "Yes. All trial workspaces support unlimited seat invitations with full access to Tracker Plus, calendar sync, and payroll reporting."
              },
              {
                q: "What happens to our tracked data after the trial ends?",
                a: "All your team members' time records, projects, and custom settings remain securely saved in your tenant. If you do not upgrade immediately, your workspace gracefully shifts to the free Starter plan."
              },
              {
                q: "Can we switch between Pro and Premium during the trial?",
                a: "Yes. You can switch plan features anytime within your Workspace Settings to test white-label reporting, API webhooks, or additional PM tool integrations."
              }
            ]}
          />
        )}
      </main>

      <DeskmeritFooter />
    </div>
  );
}
