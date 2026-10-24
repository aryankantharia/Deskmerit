import React from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { InteractiveTrackerWidget } from "../components/InteractiveTrackerWidget";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  VideoOff,
  FileCheck,
  Server,
  ArrowRight,
  Database,
  Key,
} from "lucide-react";

export function PrivacyPromisePage() {
  const promises = [
    {
      num: "01",
      title: "We never record keystroke content.",
      desc: "Idle detection monitors only whether hardware input occurred, never individual keystrokes, passwords, or personal messages.",
    },
    {
      num: "02",
      title: "We never use the webcam or microphone.",
      desc: "Not under any plan, toggle or setting. There is no media recording code in our desktop application binary.",
    },
    {
      num: "03",
      title: "We never read the content of your documents — titles only.",
      desc: "Deskmerit records active window titles to calculate project time, and never scans, uploads, or inspects document bodies.",
    },
    {
      num: "04",
      title: "Screenshots are off unless your employer enables them, blurred by default, and you are told.",
      desc: "If an enterprise admin switches on screenshot capture for a compliance contract, the capture is blurred by default and employees receive an explicit notification.",
    },
    {
      num: "05",
      title: "Private Time is yours: nothing is tracked during it, and it is never labelled idle.",
      desc: "One single click puts you in Private Time. App names, URLs, window titles and timers stop immediately until you choose to resume.",
    },
    {
      num: "06",
      title: "You can always see your own data.",
      desc: "Every team member has access to their personal dashboard showing the exact same numbers, hours and scores their manager sees.",
    },
    {
      num: "07",
      title: "Nothing is tracked before you have seen the consent screen.",
      desc: "When the desktop agent is installed, a clear consent modal explicitly details what will and won't be recorded before any telemetry starts.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">Employee privacy promise</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" />
            <span>Binding Transparency Contract</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
            What Deskmerit{" "}
            <span className="text-[#FF5A36] block font-normal">will never do.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4A5370] max-w-2xl mx-auto mb-8 font-normal">
            We build time tracking for people we’d want to work with. These promises hold on every plan and cannot be switched off by any admin.
          </p>

          <blockquote className="font-human text-2xl sm:text-3xl text-[#0F1730] italic max-w-xl mx-auto pt-2 pb-4">
            “Every hour, honestly accounted for.”
          </blockquote>
        </section>

        {/* The 7 Promises Numbered List */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {promises.map((p) => (
              <div
                key={p.num}
                className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E6E2D8] shadow-subtle flex items-start gap-5 hover:border-[#FF5A36] transition-all"
              >
                <span className="w-10 h-10 rounded-xl bg-[#FFE6DF] text-[#C2361A] font-extrabold text-sm flex items-center justify-center font-mono shrink-0">
                  {p.num}
                </span>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F1730] mb-1.5">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Your Data, First Section */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                  What employees see
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  Your data, first.
                </h2>
                <p className="text-sm sm:text-base text-[#4A5370] leading-relaxed">
                  Every employee has a self-view of their own day, timeline and productivity scores — the same numbers their manager sees. No secret calculations, no covert surveillance feeds, no surprise reviews.
                </p>

                <div className="space-y-2 text-xs text-[#0F1730]">
                  <div className="p-3 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#12B886]" />
                    <span>Personal timeline reviewable at any point of the day</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#12B886]" />
                    <span>One-click export of your own timesheets and attendance history</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <InteractiveTrackerWidget />
              </div>
            </div>
          </div>
        </section>

        {/* Backed By How We Build (Infrastructure & Security) */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
              Security architecture
            </div>
            <h3 className="text-3xl font-extrabold text-[#0F1730]">
              Backed by how we build.
            </h3>
            <p className="text-xs text-[#4A5370] mt-1">
              Engineered with enterprise-grade tenant isolation, cryptography and audit trails.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Database-level isolation",
                desc: "Row-level security enforced directly on Postgres tables; no client data can bleed across tenants.",
                icon: Database,
              },
              {
                title: "Encrypted everywhere",
                desc: "TLS 1.3 in transit and AES-256 at rest; encryption keys managed via dedicated AWS KMS.",
                icon: Lock,
              },
              {
                title: "Full audit trail",
                desc: "Every configuration toggle and manual correction is immutably logged with before and after states.",
                icon: FileCheck,
              },
              {
                title: "Your region",
                desc: "Enterprise customers select their AWS data region: India (Mumbai), Australia (Sydney), UAE, or US.",
                icon: Server,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E6E2D8] shadow-subtle">
                  <div className="w-10 h-10 rounded-xl bg-[#FFE6DF] text-[#C2361A] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#0F1730] mb-1.5">{item.title}</h4>
                  <p className="text-xs text-[#4A5370] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] text-center max-w-2xl mx-auto text-xs text-[#4A5370]">
            <strong className="text-[#0F1730]">Compliance Roadmap:</strong> SOC 2 Type II and ISO 27001 programmes are actively in progress with third-party auditors. Security questionnaires and DPAs available upon request.
          </div>
        </section>

        <DeskmeritCtaBand
          title="Tracking your team won't resent."
          subtitle="Install in minutes, start from a task, and get your first report this week."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
