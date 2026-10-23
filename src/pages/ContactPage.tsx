import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SparklesIcon,
  HelpCircleIcon,
  ActivityIcon,
  UsersIcon
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FaqSection } from "../components/FaqSection";
import { InlineScheduler } from "../components/InlineScheduler";
import { globalOffices } from "../data/navigation";

const availableModules = [
  "AI Live Interview Screening",
  "Core HR & Employee Records",
  "Statutory Payroll Compliance",
  "Attendance, Shifts & Biometrics",
  "Goals, OKRs & Performance",
  "Offboarding & Access Revocation",
  "Workforce Analytics & Attrition",
  "Competitor HRMS Data Migration"
];

const contactFaqs = [
  {
    q: "How soon can our organization start with Sqalible?",
    a: "Self-serve and pooled accounts provision instantly. For enterprise accounts requiring custom SSO, dedicated cloud hosting, and data migration, your dedicated solutions squad typically initiates discovery within 48 hours."
  },
  {
    q: "How does Sqalible handle migration from Keka, Darwinbox, or greytHR?",
    a: "We provide automated schema mapping and historical document migration. We run parallel payroll dry-runs alongside your existing system to ensure 100% statutory match before cutover."
  },
  {
    q: "What support SLA is guaranteed for enterprise clients?",
    a: "Enterprise agreements include 24/7 dedicated telephone and private Slack/Teams coverage with a guaranteed 15-minute response SLA for critical priority incidents."
  },
  {
    q: "Where is our employee and candidate data hosted?",
    a: "We support data residency in India (AWS Mumbai), the Middle East (UAE), the United States (US-East/West), and Europe (Frankfurt/London) with strict GDPR, DPDP Act, and CCPA compliance."
  },
  {
    q: "Can candidates opt out of the live AI interview?",
    a: "Yes. In accordance with our Responsible AI framework, candidates receive explicit disclosures and can request a human-conducted panel at any time with zero penalty."
  }
];

export function ContactPage({ mode = "demo" }: { mode?: "demo" | "trial" }) {
  if (mode === "trial") {
    return <Navigate to="/signup" replace />;
  }

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    employeeCount: "50 - 250 Employees"
  });

  const [selectedDate, setSelectedDate] = useState("Thu, Oct 23");
  const [selectedTime, setSelectedTime] = useState("11:30 AM");
  const [selectedTimezone, setSelectedTimezone] = useState("America/New_York");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid work email";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] font-sans text-neutral-900 selection:bg-teal-500 selection:text-white">
      <Header />

      <main>
        {/* ========================================================= */}
        {/* SECTION 1: SALES & DEMO REQUEST                          */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden bg-[#080D14] text-white pt-32 pb-16 md:pt-36 md:pb-24 px-6">
          {/* Subtle Ambient Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#047B7212_1px,transparent_1px),linear-gradient(to_bottom,#047B7212_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-[#047B72]/20 blur-[150px] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl">
            {/* Self-Serve Free Trial vs Sales Banner */}
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-teal-500/30 bg-teal-950/40 px-5 py-3.5 backdrop-blur-md">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-teal-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 font-bold text-xs">
                  ⚡
                </span>
                <span>
                  Looking for self-service access? Spin up an instant 14-day trial sandbox with no sales call required.
                </span>
              </div>
              <Link
                to="/signup"
                className="inline-flex items-center gap-1.5 rounded-full bg-primary hover:bg-teal-600 px-4 py-1.5 text-xs font-semibold text-white transition-all shadow-xs shrink-0"
              >
                Start free trial sandbox →
              </Link>
            </div>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Sales Contact & Value Proposition */}
              <div className="lg:col-span-5 pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-950/60 px-4 py-1.5 text-xs font-semibold text-teal-300">
                  <SparklesIcon size={14} className="text-teal-400" />
                  Sales & Enterprise Inquiries
                </span>

                <h1 className="mt-5 text-[34px] font-extrabold leading-[42px] md:text-[46px] md:leading-[54px] text-white tracking-tight">
                  Let's Discuss Your Workforce Architecture
                </h1>

                <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                  Book a personalized 20-minute architectural walkthrough of our live AI interview, core HR, and statutory compliance platform.
                </p>

                {/* Direct Sales Contacts */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-neutral-200">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-teal-400">
                      <MailIcon size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-neutral-400">Direct Sales</p>
                      <a href="mailto:sales@sqalible.com" className="font-semibold hover:text-teal-300 transition-colors">
                        sales@sqalible.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-neutral-200">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-teal-400">
                      <PhoneIcon size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-neutral-400">Direct Hotline</p>
                      <a href="tel:+919769563055" className="font-semibold hover:text-teal-300 transition-colors">
                        +91 97695 63055
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-xs text-neutral-400">
                    <ClockIcon size={14} className="text-teal-400" />
                    <span>Guaranteed response within 2 hours during global business hours.</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Shortened Demo Form + Inline Interactive Scheduler */}
              <div className="lg:col-span-7">
                <div className="rounded-none bg-white p-7 md:p-9 text-neutral-900 shadow-2xl border border-neutral-100">
                  {submitted ? (
                    <div className="py-6 text-center space-y-6">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-primary">
                        <CheckCircle2Icon size={36} />
                      </div>

                      <div>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-primary border border-teal-200">
                          <CheckCircle2Icon size={12} />
                          Booking Confirmed
                        </span>
                        <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-neutral-900">
                          You're Booked with Solutions Engineering!
                        </h2>
                        <p className="mt-2 text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                          We've scheduled your 20-minute architectural walkthrough with <strong className="text-neutral-900">Arjun Mehta</strong>. A calendar invite has been sent to <strong className="text-neutral-900">{formData.email}</strong>.
                        </p>
                      </div>

                      {/* Scheduled Meeting Detail Card */}
                      <div className="mx-auto max-w-md rounded-none border border-neutral-200 bg-neutral-50/80 p-5 text-left space-y-3.5 shadow-xs">
                        <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                          <div>
                            <p className="text-xs text-neutral-500 font-medium">Session Date & Time</p>
                            <p className="text-sm font-bold text-neutral-900 mt-0.5">
                              {selectedDate} at {selectedTime}
                            </p>
                            <p className="text-[11px] text-neutral-500">{selectedTimezone}</p>
                          </div>
                          <span className="rounded-full bg-primary text-white text-[10px] font-bold px-2.5 py-1">
                            20 Mins
                          </span>
                        </div>

                        <div className="space-y-2 text-xs text-neutral-700">
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-500 font-medium">Meeting Link:</span>
                            <a
                              href="https://meet.google.com/sqa-live-demo"
                              target="_blank"
                              rel="noreferrer"
                              className="font-mono font-semibold text-primary hover:underline"
                            >
                              meet.google.com/sqa-live-demo
                            </a>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-500 font-medium">Attendee:</span>
                            <span className="font-semibold text-neutral-900">{formData.fullName} ({formData.company || "Enterprise"})</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-neutral-500 font-medium">Host:</span>
                            <span className="font-semibold text-neutral-900">Arjun Mehta (Lead Architect)</span>
                          </div>
                        </div>

                        {/* Calendar Add Links */}
                        <div className="pt-3 border-t border-neutral-200 flex flex-wrap items-center gap-2">
                          <a
                            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Sqalible HRMS Architecture Walkthrough")}&dates=20261023T153000Z/20261023T155000Z&details=${encodeURIComponent("Live AI interview and workforce telemetry walkthrough with Arjun Mehta.")}&location=${encodeURIComponent("https://meet.google.com/sqa-live-demo")}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-300 bg-white text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
                          >
                            Add to Google Calendar
                          </a>
                          <button
                            type="button"
                            onClick={() => alert("Calendar invite dispatched to your email.")}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-neutral-300 bg-white text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
                          >
                            Outlook / iCal (.ics)
                          </button>
                        </div>
                      </div>

                      <div className="pt-2 flex items-center justify-center gap-4">
                        <Link
                          to="/signup"
                          className="inline-flex h-10 items-center justify-center rounded-full bg-primary hover:bg-teal-700 px-5 text-xs font-semibold text-white transition-colors"
                        >
                          Explore Free Trial Sandbox Now →
                        </Link>
                        <button
                          type="button"
                          onClick={() => setSubmitted(false)}
                          className="text-xs text-neutral-600 hover:text-neutral-900 underline cursor-pointer"
                        >
                          Modify Booking
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">Book a Live Architecture Demo</h2>
                          <p className="mt-0.5 text-xs text-neutral-500">
                            Select your preferred time slot — booking confirmed instantly.
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/50 self-start sm:self-auto">
                          ⚡ Instant Confirmation
                        </span>
                      </div>

                      <div className="mt-5 space-y-4">
                        {/* Shortened Fields: Name & Email */}
                        <div className="grid gap-3.5 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-neutral-700">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              placeholder="e.g. Sarah Jenkins"
                              className={`mt-1 w-full rounded-md border px-3 py-2 text-xs sm:text-sm outline-none transition-colors ${
                                errors.fullName ? "border-red-500 bg-red-50/30" : "border-neutral-300 focus:border-primary"
                              }`}
                            />
                            {errors.fullName && <p className="mt-1 text-[11px] text-red-500">{errors.fullName}</p>}
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-neutral-700">
                              Work Email *
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="sarah@company.com"
                              className={`mt-1 w-full rounded-md border px-3 py-2 text-xs sm:text-sm outline-none transition-colors ${
                                errors.email ? "border-red-500 bg-red-50/30" : "border-neutral-300 focus:border-primary"
                              }`}
                            />
                            {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
                          </div>
                        </div>

                        {/* Shortened Fields: Company & Organization Size */}
                        <div className="grid gap-3.5 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold text-neutral-700">
                              Company Name
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="e.g. Acme Health"
                              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-xs sm:text-sm outline-none focus:border-primary"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-neutral-700">
                              Organization Size
                            </label>
                            <select
                              value={formData.employeeCount}
                              onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                              className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs sm:text-sm outline-none focus:border-primary"
                            >
                              <option value="1 - 50 Employees">1 - 50 Employees</option>
                              <option value="50 - 250 Employees">50 - 250 Employees</option>
                              <option value="250 - 1,000 Employees">250 - 1,000 Employees</option>
                              <option value="1,000+ Employees">1,000+ Employees (Enterprise)</option>
                            </select>
                          </div>
                        </div>

                        {/* INLINE SCHEDULER: Select Date & Time Slot at moment of intent */}
                        <div className="pt-1">
                          <InlineScheduler
                            selectedDate={selectedDate}
                            onSelectDate={setSelectedDate}
                            selectedTime={selectedTime}
                            onSelectTime={setSelectedTime}
                            selectedTimezone={selectedTimezone}
                            onSelectTimezone={setSelectedTimezone}
                            durationMinutes={20}
                            hostName="Arjun Mehta"
                            hostRole="Lead Solutions Architect"
                          />
                        </div>

                        {/* Instant Booking Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary hover:bg-teal-700 px-6 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.01] cursor-pointer"
                          >
                            <span>Confirm Demo Booking for {selectedDate} at {selectedTime}</span>
                            <ArrowRightIcon size={16} />
                          </button>
                          <p className="mt-2 text-center text-[11px] text-neutral-500">
                            Instant Google Meet invitation will be generated immediately upon confirmation.
                          </p>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: DEDICATED SUPPORT CHANNELS                     */}
        {/* ========================================================= */}
        <section className="bg-white py-16 md:py-20 border-b border-neutral-200 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="w-full mb-12">
              <p className="pretitle text-primary">Customer Support</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Dedicated Support Channels
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600">
                24/7 technical assistance, live incident reporting, and verified resolution SLAs for customer teams.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Helpdesk */}
              <div className="group rounded-none border border-neutral-200 bg-white p-8 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-5 [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <HelpCircleIcon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">Technical Helpdesk</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Submit tickets, review knowledge base playbooks, and receive assisted configuration guidance.
                  </p>
                  <p className="mt-4 text-xs font-semibold text-neutral-800">
                    Email: <a href="mailto:support@sqalible.com" className="text-primary hover:underline">support@sqalible.com</a>
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <Link to="/help" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-teal-700">
                    Visit Help Centre <ArrowRightIcon size={13} />
                  </Link>
                </div>
              </div>

              {/* System Status */}
              <div className="group rounded-none border border-neutral-200 bg-white p-8 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-5 [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <ActivityIcon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">Platform Status & Uptime</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Public telemetry monitoring cluster health, AI inference latency, and scheduled maintenance windows.
                  </p>
                  <p className="mt-4 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    All Systems Operational (99.9% Target)
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <Link to="/status" className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-teal-700">
                    View Live Telemetry <ArrowRightIcon size={13} />
                  </Link>
                </div>
              </div>

              {/* Enterprise Architecture */}
              <div className="group rounded-none border border-neutral-200 bg-white p-8 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-5 [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <ShieldCheckIcon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">Designated Solution Squad</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Direct communication channel via private Slack/Teams with your designated solutions architect.
                  </p>
                  <p className="mt-4 text-xs font-semibold text-neutral-800">
                    SLA: Guaranteed 15-minute response for critical issues
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <span className="text-xs font-semibold text-neutral-500">
                    Included with Enterprise Hosting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: GLOBAL OFFICES                                 */}
        {/* ========================================================= */}
        <section className="bg-white py-16 md:py-24 border-b border-neutral-200 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="w-full mb-12">
              <p className="pretitle text-primary">Global Footprint</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Sqalible Across the Globe
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600">
                Operating centralized engineering powerhouses with regional client relationship hubs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {globalOffices.map((office) => (
                <div
                  key={office.country}
                  className="rounded-none border border-neutral-200 bg-[#FAFAFA] p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-base font-bold text-neutral-900 flex items-center gap-2">
                        <MapPinIcon size={18} className="text-primary" />
                        {office.country.split(" ")[0]}
                      </span>
                      <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                        {office.type}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center gap-2 text-xs font-semibold text-neutral-700">
                    <PhoneIcon size={14} className="text-primary" />
                    <span>{office.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: FAQS SECTION (Branded 2-Column Design)         */}
        {/* ========================================================= */}
        <FaqSection
          faqs={contactFaqs}
          title="Frequently Asked Questions"
          pretitle="Questions & Answers"
          className="bg-[#FAFAFA] py-16 md:py-24"
        />
      </main>

      <Footer />
    </div>
  );
}