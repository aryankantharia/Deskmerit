import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronRightIcon,
  SparklesIcon,
  CheckCircle2Icon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CpuIcon,
  UsersIcon,
  BuildingIcon,
  ClockIcon,
  HelpCircleIcon,
  CheckIcon,
  LoaderIcon,
  FileCheck2Icon,
  ScaleIcon,
  ActivityIcon,
  LockIcon
} from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FaqSection } from "../components/FaqSection";
import { PageCta } from "../components/layout/PageCta";
import { InlineScheduler } from "../components/InlineScheduler";

const availableModules = [
  "AI Live Interview Screening",
  "Core HR & Employee Records",
  "Statutory Payroll Compliance",
  "Attendance, Shifts & Biometrics",
  "Predictive Attrition Telemetry"
];

const trialFaqs = [
  {
    q: "Is a credit card required to start the free trial?",
    a: "No. You can spin up an isolated trial workspace immediately without providing any credit card or payment billing details. Your trial includes 14 days of full feature access."
  },
  {
    q: "Does the trial workspace come pre-populated with data?",
    a: "Yes. To let you evaluate Sqalible immediately, your workspace comes preloaded with realistic synthetic candidates, live interview replay transcripts, an employee roster, and sample statutory payroll rules."
  },
  {
    q: "Can I invite colleagues or recruiters to my trial workspace?",
    a: "Yes. You can invite team members with role-based access control (RBAC)—including recruiters, hiring managers, and HR administrators—to test collaboration workflows."
  },
  {
    q: "What happens at the end of the 14-day trial?",
    a: "At the end of 14 days, you can choose to transition to a Startup, Mid-Market, or Dedicated Enterprise tier. You can also export your evaluation rubrics and test scores with zero data lock-in."
  }
];

export function TrialSignupPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    employeeCount: "50 - 250 Employees"
  });

  const [includeOnboardingCall, setIncludeOnboardingCall] = useState(true);
  const [selectedDate, setSelectedDate] = useState("Thu, Oct 23");
  const [selectedTime, setSelectedTime] = useState("02:00 PM");
  const [selectedTimezone, setSelectedTimezone] = useState("America/New_York");

  const [agreedTerms, setAgreedTerms] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [provisionStep, setProvisionStep] = useState(0);

  const workspaceSlug = (formData.company.trim() || "acme-corp")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-");

  const handleStartTrial = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid work email";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!agreedTerms) newErrors.terms = "You must accept the evaluation terms";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsProvisioning(true);
    setProvisionStep(1);

    setTimeout(() => setProvisionStep(2), 600);
    setTimeout(() => setProvisionStep(3), 1200);
    setTimeout(() => {
      sessionStorage.setItem(
        "sqalible_trial_session",
        JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company.trim(),
          workspaceSlug,
          employeeCount: formData.employeeCount,
          selectedModules: availableModules,
          scheduledOnboarding: includeOnboardingCall
            ? {
                date: selectedDate,
                time: selectedTime,
                timezone: selectedTimezone,
                host: "Priya Sharma",
                link: "https://meet.google.com/sqa-onboarding"
              }
            : null,
          startedAt: new Date().toISOString()
        })
      );
      navigate(`/trial?workspace=${encodeURIComponent(formData.company.trim())}&module=full`);
    }, 1800);
  };

  const handleInstantSandbox = () => {
    sessionStorage.setItem(
      "sqalible_trial_session",
      JSON.stringify({
        fullName: "Trial Guest",
        email: "guest@sandbox.sqalible.com",
        company: "Acme Technologies",
        workspaceSlug: "acme-technologies",
        employeeCount: "100 - 500 Employees",
        selectedModules: availableModules,
        startedAt: new Date().toISOString()
      })
    );
    navigate("/trial?workspace=Acme%20Technologies&module=full");
  };

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] font-sans text-neutral-900 selection:bg-teal-500 selection:text-white">
      <Header />

      <main>
        {/* ========================================================= */}
        {/* SECTION 1: TRIAL REGISTRATION & INSTANT PROVISIONING      */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden bg-[#080D14] text-white pt-32 pb-16 md:pt-36 md:pb-24 px-6">
          {/* Subtle Ambient Background matching ContactPage & PlatformPage */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#047B7212_1px,transparent_1px),linear-gradient(to_bottom,#047B7212_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-[#047B72]/20 blur-[150px] pointer-events-none" />

          <div className="relative mx-auto max-w-7xl">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex flex-wrap items-center gap-1.5 text-caption text-neutral-400">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-1.5">
                  <ChevronRightIcon size={12} strokeWidth={1.75} aria-hidden="true" />
                  <span className="text-teal-300 font-medium" aria-current="page">
                    Free Trial
                  </span>
                </li>
              </ol>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Brand Accent, Title, Value Prop & Live Contacts */}
              <div className="lg:col-span-5 pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-950/60 px-4 py-1.5 text-xs font-semibold text-teal-300">
                  <SparklesIcon size={14} className="text-teal-400" />
                  Self-Service Evaluation · 14-Day Free Access
                </span>

                <h1 className="mt-5 text-[34px] font-extrabold leading-[42px] md:text-[46px] md:leading-[54px] text-white tracking-tight">
                  Start Your 14-Day Free Trial
                </h1>

                <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
                  Spin up an isolated sandbox workspace preloaded with candidate interviews, ATS pipelines, and core HR records. No credit card required.
                </p>

                {/* Direct Highlights Matching ContactPage Structure */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-neutral-200">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-teal-400">
                      <CpuIcon size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-neutral-400">AI Live Interview Studio</p>
                      <p className="font-semibold text-neutral-100">
                        Test candidate video replay & explainable rubrics
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-neutral-200">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-teal-400">
                      <UsersIcon size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-neutral-400">Preloaded ATS Pipeline</p>
                      <p className="font-semibold text-neutral-100">
                        18 synthetic candidates across tech & product roles
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-neutral-200">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-teal-400">
                      <ShieldCheckIcon size={18} />
                    </span>
                    <div>
                      <p className="text-xs text-neutral-400">Responsible AI Framework</p>
                      <p className="font-semibold text-neutral-100">
                        Strict 100% human final decision sign-off authority
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2 text-xs text-neutral-400">
                    <ClockIcon size={14} className="text-teal-400" />
                    <span>Instant workspace activation in &lt; 60 seconds. Zero wait time.</span>
                  </div>
                </div>

                {/* Instant Guest Shortcut */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs text-neutral-400">
                    Want to test the software right now without entering an email?
                  </p>
                  <button
                    type="button"
                    onClick={handleInstantSandbox}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-white transition-colors"
                  >
                    <span>Launch Instant Guest Sandbox Directly</span>
                    <ArrowRightIcon size={14} />
                  </button>
                </div>
              </div>

              {/* Right Column: Clean Form Card Following Brand Guidelines (rounded-none, shadow-2xl, border-neutral-100) */}
              <div className="lg:col-span-7">
                <div className="rounded-none bg-white p-8 md:p-10 text-neutral-900 shadow-2xl border border-neutral-100">
                  {isProvisioning ? (
                    <div className="py-12 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-primary">
                        <LoaderIcon size={36} className="animate-spin" />
                      </div>
                      <h2 className="mt-5 text-2xl font-bold text-neutral-900">
                        Provisioning Your Sandbox Workspace...
                      </h2>
                      <p className="mt-3 text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                        Setting up tenant isolation for <strong className="text-neutral-900">{formData.company || "Acme Technologies"}</strong>.
                      </p>

                      <div className="mt-8 max-w-sm mx-auto space-y-3 text-left">
                        <div className="flex items-center gap-3 text-xs">
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${
                              provisionStep >= 1 ? "bg-teal-600 text-white" : "bg-neutral-200 text-neutral-600"
                            }`}
                          >
                            {provisionStep >= 1 ? <CheckIcon size={12} /> : "1"}
                          </span>
                          <span className={provisionStep >= 1 ? "font-semibold text-neutral-900" : "text-neutral-500"}>
                            Allocating dedicated tenant subdomain ({workspaceSlug}.sqalible.com)
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${
                              provisionStep >= 2 ? "bg-teal-600 text-white" : "bg-neutral-200 text-neutral-600"
                            }`}
                          >
                            {provisionStep >= 2 ? <CheckIcon size={12} /> : "2"}
                          </span>
                          <span className={provisionStep >= 2 ? "font-semibold text-neutral-900" : "text-neutral-500"}>
                            Populating synthetic candidates & AI rubrics
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs">
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${
                              provisionStep >= 3 ? "bg-teal-600 text-white" : "bg-neutral-200 text-neutral-600"
                            }`}
                          >
                            {provisionStep >= 3 ? <CheckIcon size={12} /> : "3"}
                          </span>
                          <span className={provisionStep >= 3 ? "font-semibold text-neutral-900" : "text-neutral-500"}>
                            Launching interactive trial workspace
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleStartTrial} noValidate>
                      <div className="flex items-center justify-between pb-2">
                        <div>
                          <h2 className="text-xl sm:text-2xl font-bold text-neutral-900">
                            Configure Your Free Trial
                          </h2>
                          <p className="mt-1 text-xs sm:text-sm text-neutral-500">
                            14 days full feature access · No credit card required
                          </p>
                        </div>
                        <span className="hidden sm:inline-flex rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-semibold text-primary">
                          Self-Serve
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

                        {/* Shortened Field: Company Name & Workspace Preview */}
                        <div>
                          <label className="block text-xs font-semibold text-neutral-700">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Acme Health"
                            className={`mt-1 w-full rounded-md border px-3 py-2 text-xs sm:text-sm outline-none transition-colors ${
                              errors.company ? "border-red-500 bg-red-50/30" : "border-neutral-300 focus:border-primary"
                            }`}
                          />
                          {errors.company && <p className="mt-1 text-[11px] text-red-500">{errors.company}</p>}

                          <div className="mt-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 flex items-center justify-between text-xs">
                            <span className="text-neutral-500 font-medium text-[11px]">Subdomain:</span>
                            <span className="font-mono font-semibold text-primary truncate text-[11px]">
                              https://{workspaceSlug}.sqalible.com
                            </span>
                          </div>
                        </div>

                        {/* INLINE SCHEDULER SELECTION: Book Onboarding at moment of intent */}
                        <div className="pt-2 border-t border-neutral-200">
                          <div className="flex items-center justify-between mb-2.5">
                            <label className="text-xs font-bold text-neutral-900">
                              Guided Onboarding Walkthrough
                            </label>
                            <div className="flex items-center rounded-full bg-neutral-100 p-0.5 border border-neutral-300">
                              <button
                                type="button"
                                onClick={() => setIncludeOnboardingCall(true)}
                                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                                  includeOnboardingCall
                                    ? "bg-primary text-white shadow-2xs"
                                    : "text-neutral-600 hover:text-neutral-900"
                                }`}
                              >
                                Include 15-min Call
                              </button>
                              <button
                                type="button"
                                onClick={() => setIncludeOnboardingCall(false)}
                                className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all cursor-pointer ${
                                  !includeOnboardingCall
                                    ? "bg-white text-neutral-900 shadow-2xs"
                                    : "text-neutral-600 hover:text-neutral-900"
                                }`}
                              >
                                Self-Serve Only
                              </button>
                            </div>
                          </div>

                          {includeOnboardingCall ? (
                            <InlineScheduler
                              selectedDate={selectedDate}
                              onSelectDate={setSelectedDate}
                              selectedTime={selectedTime}
                              onSelectTime={setSelectedTime}
                              selectedTimezone={selectedTimezone}
                              onSelectTimezone={setSelectedTimezone}
                              durationMinutes={15}
                              hostName="Priya Sharma"
                              hostRole="Lead Onboarding & HR Specialist"
                            />
                          ) : (
                            <div className="p-3 bg-neutral-50 border border-neutral-200 rounded-sm text-xs text-neutral-600">
                              <p className="font-semibold text-neutral-800">Direct Self-Serve Sandbox</p>
                              <p className="mt-0.5 text-[11px] text-neutral-500">
                                You can explore all preloaded data and features independently without a call.
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Terms checkbox */}
                        <div className="pt-1">
                          <label className="flex items-start gap-2 text-[11px] text-neutral-500 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={agreedTerms}
                              onChange={(e) => setAgreedTerms(e.target.checked)}
                              className="mt-0.5 rounded border-neutral-300 text-primary focus:ring-primary"
                            />
                            <span>
                              I accept the{" "}
                              <Link to="/terms" className="text-primary underline">
                                Evaluation Agreement
                              </Link>{" "}
                              and{" "}
                              <Link to="/privacy" className="text-primary underline">
                                Privacy Policy
                              </Link>
                              . No credit card required.
                            </span>
                          </label>
                          {errors.terms && <p className="mt-1 text-[11px] text-red-500">{errors.terms}</p>}
                        </div>

                        {/* Submit button */}
                        <div className="pt-1">
                          <button
                            type="submit"
                            className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary hover:bg-teal-700 px-6 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.01] cursor-pointer"
                          >
                            <span>
                              {includeOnboardingCall
                                ? `Launch Trial & Confirm Setup for ${selectedDate} at ${selectedTime}`
                                : "Launch Instant Free Trial Workspace"}
                            </span>
                            <ArrowRightIcon size={16} />
                          </button>
                        </div>

                        <p className="text-center text-xs text-neutral-500 pt-1">
                          Need custom enterprise architecture or procurement review?{" "}
                          <Link to="/contact" className="text-primary font-semibold hover:underline">
                            Book an Architecture Demo
                          </Link>
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 2: TELEMETRY STRIP (PlatformPage Style)           */}
        {/* ========================================================= */}
        <section className="border-y border-neutral-800 bg-[#06090F] text-white py-6" aria-label="Trial Telemetry">
          <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">14 Days</p>
              <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider font-medium">Full Feature Access</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">Zero</p>
              <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider font-medium">Credit Card Required</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">100%</p>
              <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider font-medium">Human-in-the-Loop Sign-off</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">&lt; 60s</p>
              <p className="mt-1 text-xs text-neutral-400 uppercase tracking-wider font-medium">Instant Tenant Spin-up</p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 3: ARCHITECTURAL PILLARS (ContactPage Style)      */}
        {/* ========================================================= */}
        <section className="bg-white py-16 md:py-20 border-b border-neutral-200 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="w-full mb-12">
              <p className="pretitle text-primary">Trial Capabilities</p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                What You Can Test in Your Sandbox
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600">
                Your trial environment comes pre-configured with synthetic candidates, live rubrics, and statutory rules.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card 1 */}
              <div className="group rounded-none border border-neutral-200 bg-white p-8 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-5 [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <CpuIcon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
                    AI Live Interview Studio
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Inspect turn-taking video replays, test candidate depth on system design and concurrency, and review explainable scorecards.
                  </p>
                  <p className="mt-4 text-xs font-semibold text-neutral-800">
                    Preloaded: 4 complete technical interview sessions
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={handleInstantSandbox}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-teal-700"
                  >
                    Test Studio in Sandbox <ArrowRightIcon size={13} />
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group rounded-none border border-neutral-200 bg-white p-8 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-5 [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <UsersIcon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
                    Applicant Tracking Pipeline
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Move candidates across stages, inspect algorithmic code scoring, and test one-click recruiter advancement authority.
                  </p>
                  <p className="mt-4 text-xs font-semibold text-neutral-800">
                    Preloaded: 18 applicants across engineering & product
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={handleInstantSandbox}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-teal-700"
                  >
                    View ATS Kanban <ArrowRightIcon size={13} />
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group rounded-none border border-neutral-200 bg-white p-8 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shadow-xs mb-5 [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                    <ScaleIcon size={22} />
                  </span>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
                    Core HR & Statutory Rules
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    Approve live leave requests, inspect biometric sync, and query the permission-aware AI copilot for gratuity formulas.
                  </p>
                  <p className="mt-4 text-xs font-semibold text-neutral-800">
                    Preloaded: 24 active employees with leave history
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <button
                    type="button"
                    onClick={handleInstantSandbox}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-teal-700"
                  >
                    Test HR & Copilot <ArrowRightIcon size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION 4: FAQS (Branded 2-Column Design)                 */}
        {/* ========================================================= */}
        <FaqSection
          faqs={trialFaqs}
          title="Frequently Asked Questions"
          pretitle="Questions & Answers"
          className="bg-[#FAFAFA] py-16 md:py-24"
        />

        {/* ========================================================= */}
        {/* SECTION 5: BRANDE PAGE CTA                                */}
        {/* ========================================================= */}
        <PageCta title="Accelerate your workforce operations with Sqalible today." />
      </main>

      <Footer />
    </div>
  );
}
