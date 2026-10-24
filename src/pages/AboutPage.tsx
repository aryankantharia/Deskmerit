import React from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { ShieldCheck, HeartHandshake, MousePointer, Lock, MapPin, ArrowRight } from "lucide-react";

export function AboutPage() {
  const beliefs = [
    {
      title: "Trust first",
      desc: "If an employee would be embarrassed by a feature, we don't build it. No keystroke keyloggers, no secret webcam snaps.",
      icon: ShieldCheck,
    },
    {
      title: "One click",
      desc: "Every extra login or manual step is a tax on creative engineering work. We start from the ticket and remove friction.",
      icon: MousePointer,
    },
    {
      title: "Your data stays yours",
      desc: "Isolated at the database level, encrypted in transit and at rest, fully exportable in standard formats, and erasable upon request.",
      icon: Lock,
    },
  ];

  const offices = [
    { country: "India", role: "Headquarters, Engineering & Support", location: "Pune & Bengaluru", flag: "🇮🇳" },
    { country: "Middle East", role: "Sales & Customer Success", location: "Dubai, UAE", flag: "🇦🇪" },
    { country: "Australia & NZ", role: "Sales & Strategic Partnerships", location: "Sydney, NSW", flag: "🇦🇺" },
    { country: "United States", role: "Enterprise Sales & Accounts", location: "San Francisco, CA", flag: "🇺🇸" },
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
            <span className="font-semibold text-[#0F1730]">About</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm mb-6">
            <span>ABOUT DESKMERIT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
            We believe time data should be honest —{" "}
            <span className="text-[#FF5A36] block font-normal">and fair to both sides.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
            Deskmerit is built by Kombee Technologies, a technology services company working across India, the US, the Middle East and Australia/New Zealand. We built it because we needed it: our own delivery teams bill by the hour, and we saw how often timesheets, trackers and invoices disagreed.
          </p>

          <blockquote className="font-human text-2xl text-[#0F1730] italic max-w-xl mx-auto pt-2 pb-4">
            “We are the colleague who keeps good notes — not the supervisor behind the glass.”
          </blockquote>
        </section>

        {/* What We Believe */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                Our philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                What we believe
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {beliefs.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#FFE6DF] text-[#C2361A] flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F1730] mb-3">{b.title}</h3>
                    <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Where We Work */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
              Global Presence
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
              Where we work
            </h2>
            <p className="text-xs text-[#4A5370] mt-1">
              Serving distributed delivery and software teams worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((off) => (
              <div key={off.country} className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E6E2D8] shadow-subtle">
                <span className="text-3xl block mb-3">{off.flag}</span>
                <h3 className="font-bold text-base text-[#0F1730] mb-1">{off.country}</h3>
                <div className="text-xs font-semibold text-[#FF5A36] mb-2">{off.location}</div>
                <p className="text-xs text-[#4A5370]">{off.role}</p>
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
