import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import {
  ShieldCheck,
  MousePointer,
  Lock,
  ArrowRight,
  Briefcase,
  Users,
  Building,
  Award,
  Download,
  Share2,
  CheckCircle2,
  Sparkles,
  FileText,
  Mail,
  Send,
} from "lucide-react";

export function AboutPage() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const isCareers = path.includes("careers");
  const isPartners = path.includes("partners");
  const isPress = path.includes("press");
  const isAbout = !isCareers && !isPartners && !isPress;

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

  const openRoles = [
    {
      title: "Senior Rust Systems Engineer",
      dept: "Desktop Engineering",
      location: "Remote (India / APAC)",
      type: "Full-Time",
      desc: "Optimize Deskmerit's lightweight native desktop client across macOS, Windows, and Linux (< 25MB RAM footprint).",
    },
    {
      title: "Staff Full-Stack Engineer (React & TypeScript)",
      dept: "Web & Analytics Platform",
      location: "Bengaluru, Pune or Remote",
      type: "Full-Time",
      desc: "Build lightning-fast timesheet visualizations, custom report builders, and real-time WebSocket sync engines.",
    },
    {
      title: "Integration Solutions Architect",
      dept: "Product & Ecosystem",
      location: "Sydney or Remote",
      type: "Full-Time",
      desc: "Deepen our integrations with Jira, Azure DevOps, OpenProject, and develop new MCP (Model Context Protocol) AI tooling.",
    },
    {
      title: "Enterprise Customer Success Lead",
      dept: "Growth & Operations",
      location: "Dubai or Pune",
      type: "Full-Time",
      desc: "Partner with CTOs, VP Eng, and HR leaders rolling out transparent productivity and time tracking for 500+ seat delivery teams.",
    },
  ];

  const partnerTiers = [
    {
      name: "White-Label & Reseller",
      desc: "Deliver Deskmerit under your own brand and domain with your logo, custom domain URL, and unified client billing.",
      benefit: "30% recurring margin",
      features: ["Custom white-label domain", "Branded desktop agent installer", "Multi-tenant master admin panel", "Dedicated reseller support manager"],
    },
    {
      name: "MSP & IT Services Partner",
      desc: "Standardize client time tracking and billable efficiency across all your managed service contracts.",
      benefit: "Volume tiered discounts",
      features: ["Consolidated partner invoicing", "Direct Jira & Azure DevOps tokens", "Client onboarding assistance", "Quarterly business reviews"],
    },
    {
      name: "HRMS & Ecosystem ISV",
      desc: "Deep API and webhook integration connecting Deskmerit's attendance telemetry into your HRMS or payroll engine.",
      benefit: "Co-marketing & marketplace listing",
      features: ["REST API & Webhooks sandbox", "Pre-built sync connectors", "Joint press releases and webinars", "Certified partner badge"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Breadcrumb & Section Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#4A5370]">
            <div className="flex items-center gap-1.5">
              <Link to="/" className="hover:text-[#0F1730]">Home</Link>
              <span>/</span>
              <span className="text-[#4A5370]">Company</span>
              <span>/</span>
              <span className="font-semibold text-[#0F1730]">
                {isCareers ? "Careers" : isPartners ? "Partners" : isPress ? "Press & Media Kit" : "About"}
              </span>
            </div>

            {/* Quick Pill Switcher between the Company Section Pages */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline">
                Company Pages:
              </span>
              <Link
                to="/about"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  isAbout
                    ? "bg-[#0F1730] text-white border-[#0F1730]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  isCareers
                    ? "bg-[#0F1730] text-white border-[#0F1730]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                Careers (4 open)
              </Link>
              <Link
                to="/partners"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  isPartners
                    ? "bg-[#0F1730] text-white border-[#0F1730]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                Partners & Resellers
              </Link>
              <Link
                to="/press"
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                  isPress
                    ? "bg-[#0F1730] text-white border-[#0F1730]"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                Press & Media Kit
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Content based on which Company page is active */}
        {isCareers ? (
          /* ================= CAREERS PAGE ================= */
          <section className="py-12 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm mb-6">
                <span>CAREERS AT DESKMERIT</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
                Build software that respects{" "}
                <span className="text-[#FF5A36] block font-normal">the craft of knowledge work.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
                We are a distributed engineering and product team solving one of the most fraught challenges in modern work: honest proof of work without dehumanizing surveillance.
              </p>
            </div>

            {/* Culture / Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle">
                <span className="text-2xl mb-3 block">🌍</span>
                <h3 className="font-bold text-base text-[#0F1730] mb-2">Remote-First & Async</h3>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  We judge outcomes, not green status dots. Work when and where you are most productive.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle">
                <span className="text-2xl mb-3 block">🦀</span>
                <h3 className="font-bold text-base text-[#0F1730] mb-2">High Craft Standards</h3>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Rust on the desktop, TypeScript on the web, robust WebSocket replication. We care deeply about sub-20ms interactions.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle">
                <span className="text-2xl mb-3 block">🤝</span>
                <h3 className="font-bold text-base text-[#0F1730] mb-2">Ethical Integrity</h3>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  We never build features we wouldn't want running on our own personal computers.
                </p>
              </div>
            </div>

            {/* Open Roles List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0F1730] mb-6">Open Positions</h2>
              {openRoles.map((role) => (
                <div
                  key={role.title}
                  className="p-6 rounded-2xl bg-white border border-[#E6E2D8] hover:border-[#FF5A36] transition-all shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-base text-[#0F1730]">{role.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FFE6DF] text-[#C2361A] text-[10px] font-bold">
                        {role.type}
                      </span>
                    </div>
                    <div className="text-xs text-[#4A5370]">
                      {role.dept} · {role.location}
                    </div>
                    <p className="text-xs text-[#4A5370] leading-relaxed pt-1 max-w-2xl">
                      {role.desc}
                    </p>
                  </div>

                  <a
                    href="mailto:careers@deskmerit.com?subject=Application for Senior Role"
                    className="px-5 py-2.5 rounded-xl bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs shrink-0 transition-colors flex items-center gap-1.5 self-start md:self-center"
                  >
                    Apply for role <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ) : isPartners ? (
          /* ================= PARTNERS PAGE ================= */
          <section className="py-12 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm mb-6">
                <span>DESKMERIT PARTNER PROGRAM</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
                Grow your consulting or MSP practice with{" "}
                <span className="text-[#FF5A36] block font-normal">transparent time tracking.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
                Whether you want to white-label Deskmerit under your agency domain, earn recurring referral commissions, or build custom HR integrations, we give partners high margins and dedicated engineering backing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {partnerTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="p-7 rounded-2xl bg-white border border-[#E6E2D8] shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#FFE6DF] text-[#C2361A] inline-block mb-3">
                      {tier.benefit}
                    </span>
                    <h3 className="font-bold text-lg text-[#0F1730] mb-2">{tier.name}</h3>
                    <p className="text-xs text-[#4A5370] leading-relaxed mb-6">{tier.desc}</p>
                    <ul className="space-y-2.5 text-xs text-[#0F1730] border-t border-[#E6E2D8] pt-4">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#12B886] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E6E2D8]">
                    <Link
                      to="/contact?type=partner"
                      className="w-full py-2.5 rounded-xl bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs text-center block transition-colors"
                    >
                      Apply as Partner
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : isPress ? (
          /* ================= PRESS & MEDIA KIT ================= */
          <section className="py-12 lg:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm mb-6">
                <span>PRESS & BRAND ASSETS</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
                Press, brand guidelines, and{" "}
                <span className="text-[#FF5A36] block font-normal">official media assets.</span>
              </h1>
              <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
                Download verified high-resolution SVG and PNG logos, brand guidelines, executive bios, and company boilerplate.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Brand Logo Assets Card */}
              <div className="p-8 rounded-2xl bg-white border border-[#E6E2D8] shadow-subtle space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-[#0F1730]">Official Brand Assets</h3>
                  <Download className="w-5 h-5 text-[#FF5A36]" />
                </div>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Includes full vector SVGs, PNG marks on dark and light backgrounds, and our signature Ember flame emblem.
                </p>
                <div className="p-6 bg-[#0F1730] rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold tracking-tight text-white font-display">
                    desk<span className="text-[#FF5A36]">merit</span>
                  </span>
                </div>
                <a
                  href="/download"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F7F4EE] hover:bg-[#E6E2D8] text-xs font-bold text-[#0F1730] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Download Media Package (.ZIP)
                </a>
              </div>

              {/* Media Inquiries & Press Contact */}
              <div className="p-8 rounded-2xl bg-white border border-[#E6E2D8] shadow-subtle space-y-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-[#0F1730] mb-2">Media & Press Inquiries</h3>
                  <p className="text-xs text-[#4A5370] leading-relaxed mb-4">
                    For interview requests with founders, briefings on workplace monitoring trends, or background commentary:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-[#0F1730]">
                      <Mail className="w-4 h-4 text-[#FF5A36]" />
                      <span className="font-bold">press@deskmerit.com</span>
                    </div>
                    <div className="text-[#4A5370]">Average turnaround: under 4 business hours.</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6E2D8]">
                  <Link
                    to="/demo"
                    className="w-full py-2.5 rounded-xl bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs text-center block transition-colors"
                  >
                    Request Executive Interview
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* ================= ABOUT US (DEFAULT) ================= */
          <>
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
          </>
        )}

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Company & Partnership FAQs"
          category="FAQS"
          helpTitle="Looking to Partner with Deskmerit?"
          helpDescription="Whether you are an MSP reseller, HR technology ISV, or delivery consultancy, connect with our alliances team to explore partnership tiers."
          customFaqs={[
            {
              q: "What is Deskmerit's founding mission and philosophy?",
              a: "Deskmerit was founded on the conviction that software teams and agencies deserve transparent, auditable time data without invasive employee surveillance. We build high-trust productivity tooling that starts from the task token, not from webcam or keystroke snooping."
            },
            {
              q: "Where is Deskmerit hosted and where is customer data stored?",
              a: "Deskmerit provides multi-region data residency across AWS data centers in India (Mumbai), Australia (Sydney), UAE (me-central-1), and the United States (us-east-1), complying fully with local DPDP, NSW, and GDPR frameworks."
            },
            {
              q: "How does Deskmerit partner with IT services providers and MSPs?",
              a: "Our MSP and Reseller program provides multi-tenant agency dashboards, white-label client reporting, volume seat tier discounts, and dedicated priority migration assistance."
            },
            {
              q: "What open career opportunities are currently available?",
              a: "We hire globally across distributed engineering, product design, and enterprise customer success. View our open roles on this page or email careers@deskmerit.com."
            },
            {
              q: "How can journalists and media outlets request press briefings?",
              a: "Download our media kit directly from the Press tab, or reach out to press@deskmerit.com for executive commentary and high-resolution brand assets."
            }
          ]}
        />

        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
