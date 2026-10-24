import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PulseTrackHeader } from "../components/PulseTrackHeader";
import { PulseTrackFooter } from "../components/PulseTrackFooter";
import { CheckCircle2, Check, ArrowRight, ShieldCheck, Clock, User, Sparkles } from "lucide-react";

export function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "16–50",
    country: "India",
    pmTool: "Jira",
    isSqalibleUser: "No",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <PulseTrackHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">Book a demo</span>
          </div>
        </div>

        <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: What you'll see in the demo */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm">
                <span className="pulse-dot" />
                <span>20-minute walkthrough</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight">
                See PulseTrack with your own workflow in 20 minutes.
              </h1>

              <p className="text-sm sm:text-base text-[#4A5370] leading-relaxed">
                We will walk you through your exact setup — whether you're syncing Jira issues, configuring attendance for Sunday–Thursday shifts, or connecting Sqalible HRMS.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  "Tracker Plus live demonstration with your own PM tool",
                  "Attendance rules tailored to your country and work week",
                  "Reports your finance & delivery team will actually defend",
                  "Transparent proposal in your local currency (INR, AUD, NZD, AED, USD)",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#0F1730]">
                    <span className="w-5 h-5 rounded-full bg-[#FFE6DF] text-[#C2361A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Product Specialist Card */}
              <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle flex items-center gap-4 mt-6">
                <div className="w-12 h-12 rounded-full bg-[#0F1730] text-[#FF5A36] font-bold text-sm flex items-center justify-center font-display shrink-0">
                  PT
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F1730]">
                    Talk to a product specialist
                  </div>
                  <div className="text-[11px] text-[#4A5370] mt-0.5">
                    Available in India (IST), Middle East (GST), and Australia/NZ (AEST) time zones.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Demo Booking Form */}
            <div className="lg:col-span-7 bg-[#FFFFFF] rounded-[24px] p-8 sm:p-10 border border-[#E6E2D8] shadow-card">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#12B886]/20 text-[#12B886] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0F1730]">Demo request received!</h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. A product specialist will email you at <strong>{formData.email}</strong> within one working day with a calendar link.
                  </p>
                  <div className="pt-4">
                    <Link
                      to="/"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A36] hover:underline"
                    >
                      Return to home page <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-[#0F1730]">Book your walkthrough</h3>
                    <p className="text-xs text-[#4A5370] mt-0.5">We’ll reply within one working day.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F1730] mb-1">
                        Full name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ananya Sharma"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F1730] mb-1">
                        Work email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ananya@company.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F1730] mb-1">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Technologies"
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F1730] mb-1">
                        Team size *
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                      >
                        <option value="1–15">1–15 seats</option>
                        <option value="16–50">16–50 seats</option>
                        <option value="51–150">51–150 seats</option>
                        <option value="151–500">151–500 seats</option>
                        <option value="500+">500+ seats</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0F1730] mb-1">
                        Country / Region *
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                      >
                        <option value="India">India (₹ INR)</option>
                        <option value="Australia">Australia (A$ AUD)</option>
                        <option value="New Zealand">New Zealand (NZ$ NZD)</option>
                        <option value="UAE">United Arab Emirates (AED)</option>
                        <option value="Saudi Arabia">Saudi Arabia (SAR)</option>
                        <option value="United States">United States (USD)</option>
                        <option value="Other">Other Region</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0F1730] mb-1">
                        Project tools you use
                      </label>
                      <input
                        type="text"
                        value={formData.pmTool}
                        onChange={(e) => setFormData({ ...formData, pmTool: e.target.value })}
                        placeholder="Jira, Azure DevOps, OpenProject, etc."
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0F1730] mb-1">
                      Already on Sqalible HRMS?
                    </label>
                    <select
                      value={formData.isSqalibleUser}
                      onChange={(e) => setFormData({ ...formData, isSqalibleUser: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730] focus:outline-none focus:border-[#FF5A36]"
                    >
                      <option value="No">No, evaluating standalone PulseTrack</option>
                      <option value="Yes">Yes, want to activate the HRMS add-on</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-[12px] bg-[#FF5A36] hover:bg-[#E94A27] text-[#0F1730] font-bold text-xs transition-colors shadow flex items-center justify-center gap-2 mt-2"
                  >
                    Book my demo →
                  </button>

                  <p className="text-[11px] text-[#9AA1B2] text-center pt-1">
                    By submitting you agree to our <Link to="/legal/privacy" className="underline hover:text-[#0F1730]">Privacy Policy</Link>. We never sell data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <PulseTrackFooter />
    </div>
  );
}
