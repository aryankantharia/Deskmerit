import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { Shield, FileText, CheckCircle2, Lock, ShieldCheck, Download } from "lucide-react";

export function LegalPage() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  let activeDoc = "terms";
  let title = "Terms of Service";
  let subtitle = "These terms govern your subscription and use of Deskmerit software and services.";

  if (path.includes("privacy")) {
    activeDoc = "privacy";
    title = "Privacy Policy";
    subtitle = "Our strict commitments to data minimization, employee privacy, and non-intrusive monitoring.";
  } else if (path.includes("dpa")) {
    activeDoc = "dpa";
    title = "Data Processing Agreement (DPA)";
    subtitle = "Standard contractual clauses, GDPR, DPDP Act 2023, and global data privacy terms for enterprise controllers.";
  } else if (path.includes("subprocessors")) {
    activeDoc = "subprocessors";
    title = "Sub-processors List";
    subtitle = "Approved third-party cloud infrastructure and telemetry subprocessors utilized by Deskmerit.";
  } else if (path.includes("cookies")) {
    activeDoc = "cookies";
    title = "Cookie Policy";
    subtitle = "Information regarding essential session tokens, performance cookies, and opt-out preferences.";
  } else if (path.includes("sla")) {
    activeDoc = "sla";
    title = "Service Level Agreement (SLA)";
    subtitle = "99.9% availability commitment, priority support response times, and disaster recovery objectives.";
  }

  const legalDocs = [
    { slug: "terms", label: "Terms of Service", href: "/legal/terms" },
    { slug: "privacy", label: "Privacy Policy", href: "/legal/privacy" },
    { slug: "dpa", label: "Data Processing Agreement", href: "/legal/dpa" },
    { slug: "subprocessors", label: "Sub-processors", href: "/legal/subprocessors" },
    { slug: "cookies", label: "Cookie Policy", href: "/legal/cookies" },
    { slug: "sla", label: "Service Level Agreement", href: "/legal/sla" },
  ];

  const subprocessors = [
    { name: "Amazon Web Services (AWS)", purpose: "Cloud infrastructure, encrypted RDS database hosting, KMS key management", location: "US, India (Mumbai), Australia (Sydney)" },
    { name: "Stripe, Inc.", purpose: "Payment processing and tax calculations", location: "Global" },
    { name: "Cloudflare, Inc.", purpose: "Edge CDN, DDoS mitigation and DNS routing", location: "Global" },
    { name: "WorkOS, Inc.", purpose: "Enterprise SAML SSO and SCIM directory sync", location: "United States" },
    { name: "Sentry (Functional Software)", purpose: "Application error monitoring and crash diagnostics (anonymised)", location: "United States" },
    { name: "Grafana Labs", purpose: "Infrastructure telemetry and cluster metrics", location: "United States" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Breadcrumb & Legal Nav Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-[#4A5370]">
            <div className="flex items-center gap-1.5">
              <Link to="/" className="hover:text-[#0F1730]">Home</Link>
              <span>/</span>
              <span className="text-[#4A5370]">Legal</span>
              <span>/</span>
              <span className="font-semibold text-[#0F1730]">{title}</span>
            </div>

            {/* Quick Switcher Across All 6 Legal Documents */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[11px] font-semibold text-slate-500 mr-1 hidden md:inline">
                Legal Documents:
              </span>
              {legalDocs.map((doc) => (
                <Link
                  key={doc.slug}
                  to={doc.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    activeDoc === doc.slug
                      ? "bg-[#0F1730] text-white border-[#0F1730]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {doc.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Document Content Card */}
        <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card space-y-8">
            <div className="border-b border-[#E6E2D8] pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] block mb-1">
                  Deskmerit Legal Governance
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">{title}</h1>
                <p className="text-xs text-[#4A5370] mt-1.5">{subtitle}</p>
                <div className="text-[11px] text-[#9AA1B2] mt-2">
                  Effective Date: October 2026 · Kombee Technologies (India) Pvt. Ltd.
                </div>
              </div>

              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  window.print();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F7F4EE] hover:bg-[#E6E2D8] text-xs font-bold text-[#0F1730] shrink-0 self-start transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Print / Save PDF
              </a>
            </div>

            {/* Document Body depending on active legal slug */}
            {activeDoc === "subprocessors" ? (
              <div className="space-y-4">
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Deskmerit utilizes the following third-party infrastructure and sub-processors to deliver high-availability services. Each vendor undergoes strict security, SOC 2, and DPA reviews:
                </p>
                <div className="overflow-x-auto pt-2">
                  <table className="w-full text-left text-xs border border-[#E6E2D8] rounded-xl overflow-hidden">
                    <thead className="bg-[#F7F4EE] text-[#0F1730]">
                      <tr className="border-b border-[#E6E2D8]">
                        <th className="py-3 px-4 font-bold">Sub-processor</th>
                        <th className="py-3 px-4 font-bold">Purpose</th>
                        <th className="py-3 px-4 font-bold">Location</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E2D8] text-[#4A5370]">
                      {subprocessors.map((s, idx) => (
                        <tr key={idx}>
                          <td className="py-3 px-4 font-semibold text-[#0F1730]">{s.name}</td>
                          <td className="py-3 px-4">{s.purpose}</td>
                          <td className="py-3 px-4">{s.location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : activeDoc === "sla" ? (
              <div className="space-y-6 text-xs text-[#4A5370] leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">1. 99.9% Monthly Uptime Commitment</h3>
                  <p>
                    Deskmerit commits to providing at least 99.9% uptime availability for the cloud syncing API and web reporting platform across each calendar month.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">2. Service Credits</h3>
                  <p>
                    If monthly uptime falls below 99.9%, customers are entitled to service credits on their next billing cycle:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>99.0% to 99.89%: 10% credit of monthly billing</li>
                    <li>95.0% to 98.99%: 25% credit of monthly billing</li>
                    <li>Below 95.0%: 50% credit of monthly billing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">3. Recovery Point & Recovery Time</h3>
                  <p>
                    • Recovery Point Objective (RPO): 15 minutes via continuous encrypted WAL streaming.
                    <br />
                    • Recovery Time Objective (RTO): 4 hours. Automated hot standby database replication.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">4. Local Offline Resilience</h3>
                  <p>
                    Because the Deskmerit desktop agent operates fully offline, local time recording and task capture continue without interruption even during upstream network outages.
                  </p>
                </div>
              </div>
            ) : activeDoc === "privacy" ? (
              <div className="space-y-6 text-xs text-[#4A5370] leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">1. Purpose Limitation & Data Minimization</h3>
                  <p>
                    We collect only the telemetry strictly required to attribute work time to client projects and verify active work hours. We do not inspect personal emails, bank accounts, or non-work applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">2. Non-Negotiable Privacy Tenets</h3>
                  <p>
                    • No Keystroke Logging: We never record typed keys or passwords.
                    <br />
                    • No Secret Webcam or Microphone Access: The application contains zero audio/video capture hardware hooks.
                    <br />
                    • Screenshots Blurred by Default: Screenshots are optional, announced, and blurred by default.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">3. Employee Private Time</h3>
                  <p>
                    Every team member retains unilateral control to activate Private Time with one click. When Private Time is active, all monitoring is paused entirely and no data is transmitted to managers.
                  </p>
                </div>
              </div>
            ) : activeDoc === "cookies" ? (
              <div className="space-y-6 text-xs text-[#4A5370] leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">1. Essential Authentication Tokens</h3>
                  <p>
                    We use secure HTTP-only cookies strictly for user session state, SAML single sign-on authentication, and CSRF protection. These cannot be disabled.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">2. Analytics & Preferences</h3>
                  <p>
                    We store your preferred currency (INR, AUD, NZD, AED, SAR, USD) and UI density locally in browser storage to provide a seamless browsing experience.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 text-xs text-[#4A5370] leading-relaxed">
                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">1. License & Subscription</h3>
                  <p>
                    Deskmerit licenses its desktop tracking client and web reporting suite on a per-active-seat subscription basis. Subscriptions renew automatically until cancelled.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">2. Acceptable Use Policy</h3>
                  <p>
                    The software must be deployed in accordance with applicable labor laws. Employers are responsible for providing mandatory statutory employee notices (such as the 14-day notice required under NSW Workplace Surveillance laws or DPDP Act notices in India).
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#0F1730] mb-1.5">3. Data Ownership & Deletion</h3>
                  <p>
                    Customer retains full and unencumbered ownership of all tracked records. Upon termination of service, customers may request complete cryptographic erasure of all stored databases and backups within 30 days.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <DeskmeritFooter />
    </div>
  );
}
