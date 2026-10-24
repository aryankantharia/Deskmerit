import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PulseTrackHeader } from "../components/PulseTrackHeader";
import { PulseTrackFooter } from "../components/PulseTrackFooter";
import { PulseTrackCtaBand } from "../components/PulseTrackCtaBand";
import { useCurrency } from "../utils/currencyContext";
import {
  ShieldCheck,
  Check,
  Building,
  CreditCard,
  WifiOff,
  Headphones,
  ArrowRight,
  HelpCircle,
  FileText,
} from "lucide-react";

export function IndiaPage() {
  const { setCurrencyCode } = useCurrency();

  useEffect(() => {
    setCurrencyCode("INR");
  }, [setCurrencyCode]);

  const cards = [
    {
      title: "Priced in INR, invoiced with GST",
      desc: "Pay in rupees by UPI, card or bank transfer, with GST-compliant tax invoices. Pro ₹299 and Premium ₹499 per user per month.",
      icon: CreditCard,
    },
    {
      title: "Ready for the DPDP Act",
      desc: "The DPDP Rules were notified on 13 Nov 2025; core obligations apply from May 2027. PulseTrack ships clear employee notices and erasure on request.",
      icon: ShieldCheck,
    },
    {
      title: "Made for IT services & staffing",
      desc: "Tracker Plus starts time directly from your client’s Jira or Azure DevOps ticket — the way Indian delivery teams already work.",
      icon: Building,
    },
    {
      title: "Built into Sqalible HRMS",
      desc: "Already on Sqalible? Turn PulseTrack on in one click from your admin console and keep a single consolidated vendor invoice.",
      icon: Check,
    },
    {
      title: "Patchy Wi-Fi? Still tracked.",
      desc: "Offline tracking queues on the laptop and syncs without any gaps when broadband or mobile hotspot reconnects.",
      icon: WifiOff,
    },
    {
      title: "Support in your hours",
      desc: "Dedicated onboarding, SLA response and customer success from Kombee's engineering team in Pune & Bengaluru in IST.",
      icon: Headphones,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <PulseTrackHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">India (भा रत)</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm">
                <span>🇮🇳 INDIA · भा रत</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight">
                Employee time tracking and monitoring software,{" "}
                <span className="text-[#FF5A36] block font-normal">built in India for Indian teams.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
                From IT services in Bengaluru and Pune to agencies in Mumbai and BPOs in Gurugram, PulseTrack gives Indian companies accurate attendance, billable utilisation and productivity data — priced in rupees and designed for India’s new data protection rules.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center text-xs font-bold text-[#0F1730] bg-[#FF5A36] hover:bg-[#E94A27] px-6 py-3.5 rounded-[12px] shadow-sm transition-all"
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

              <p className="text-xs text-[#4A5370]">
                Pro ₹299 / user / month · Premium ₹499 · GST-compliant invoicing · Support in IST
              </p>
            </div>

            {/* Right: Indian Pricing Highlight Card */}
            <div className="lg:col-span-5 bg-[#FFFFFF] rounded-[24px] p-6 sm:p-8 border border-[#E6E2D8] shadow-card">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6E2D8]">
                <span className="text-xs font-bold text-[#0F1730]">Pro Plan in India</span>
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#FFE6DF] text-[#C2361A]">
                  Save 20% Annual
                </span>
              </div>

              <div className="text-center py-4">
                <div className="text-5xl font-extrabold text-[#0F1730] font-display tnum">
                  ₹299
                </div>
                <div className="text-xs text-[#4A5370] mt-1 font-medium">
                  / user / month · Billed annually with GST invoice
                </div>
              </div>

              <ul className="space-y-3 py-6 border-t border-[#E6E2D8] text-xs text-[#0F1730]">
                {[
                  "Tracker Plus for Jira, Azure DevOps & OpenProject",
                  "Attendance tracking without biometric punch machines",
                  "Google & Outlook meeting work time detection",
                  "DPDP Act compliant employee transparency notices",
                  "GST tax invoice with input credit support",
                ].map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#12B886] shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/signup?plan=pro&currency=INR"
                className="w-full py-3.5 rounded-[12px] bg-[#FF5A36] hover:bg-[#E94A27] text-[#0F1730] font-bold text-xs text-center transition-colors block"
              >
                Start 14-day free trial in Rupees
              </Link>
            </div>
          </div>
        </section>

        {/* 6 Reasons Indian Teams Choose PulseTrack */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                Why Indian teams choose PulseTrack
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                Local where it matters.{" "}
                <span className="block text-[#4A5370]">World-class everywhere else.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className="p-7 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] text-[#C2361A] flex items-center justify-center mb-4 border border-[#E6E2D8]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-base text-[#0F1730] mb-2">{c.title}</h3>
                      <p className="text-xs text-[#4A5370] leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Is it legal? India DPDP Guide Callout */}
        <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E6E2D8] shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                Is it legal?
              </span>
              <h3 className="text-2xl font-bold text-[#0F1730]">
                Employee monitoring in India, explained.
              </h3>
              <p className="text-xs text-[#4A5370] max-w-xl leading-relaxed">
                Our plain-English guide covers employee notices, consent rules and what you can and can't track under India's DPDP Act 2023 — with a free monitoring policy template.
              </p>
              <div className="text-[11px] text-[#9AA1B2]">General information, not formal legal advice.</div>
            </div>

            <Link
              to="/guides/employee-monitoring-laws/india"
              className="px-6 py-3.5 rounded-[12px] bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs shrink-0 transition-colors flex items-center gap-1.5"
            >
              Read the India guide <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Questions from Indian Teams FAQ */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#0F1730] mb-6">Questions from Indian teams</h3>
          <div className="space-y-3">
            {[
              {
                q: "Is employee monitoring legal in India?",
                a: "Generally yes, when employees are properly informed and tracking is limited strictly to legitimate work purposes. PulseTrack provides clear DPDP-compliant notice templates.",
              },
              {
                q: "Do you offer INR billing and GST tax invoices?",
                a: "Yes, on all paid plans. You can pay via UPI, Indian credit/debit cards, or NEFT/RTGS bank transfer with GST details listed.",
              },
              {
                q: "Does it work for work-from-home teams?",
                a: "Yes! PulseTrack's Rust-based agent queues sessions on the computer and syncs when broadband or mobile hotspots reconnect.",
              },
              {
                q: "Can we host data in India?",
                a: "Yes, Enterprise customers can choose the AWS Mumbai (ap-south-1) data residency region.",
              },
            ].map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E6E2D8]">
                <h4 className="font-bold text-sm text-[#0F1730] mb-1.5">{faq.q}</h4>
                <p className="text-xs text-[#4A5370] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <PulseTrackCtaBand
          title="Start tracking in rupees today."
          subtitle="14-day free trial, GST invoices, support in IST."
        />
      </main>

      <PulseTrackFooter />
    </div>
  );
}
