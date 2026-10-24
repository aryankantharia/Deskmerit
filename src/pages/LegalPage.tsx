import React from "react";
import { Link, useLocation } from "react-router-dom";
import { PulseTrackHeader } from "../components/PulseTrackHeader";
import { PulseTrackFooter } from "../components/PulseTrackFooter";
import { Shield, FileText, CheckCircle2, Lock } from "lucide-react";

export function LegalPage() {
  const location = useLocation();
  const path = location.pathname;

  let title = "Terms of Service";
  let content = "These terms govern your subscription to PulseTrack services.";

  if (path.includes("privacy")) {
    title = "Privacy Policy";
  } else if (path.includes("dpa")) {
    title = "Data Processing Agreement (DPA)";
  } else if (path.includes("subprocessors")) {
    title = "Sub-processors List";
  } else if (path.includes("cookies")) {
    title = "Cookie Policy";
  } else if (path.includes("sla")) {
    title = "Service Level Agreement (SLA)";
  }

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
      <PulseTrackHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <span className="text-[#4A5370]">Legal</span>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">{title}</span>
          </div>
        </div>

        <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card space-y-6">
            <div className="border-b border-[#E6E2D8] pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] block mb-2">
                PulseTrack Legal Documentation
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">{title}</h1>
              <p className="text-xs text-[#4A5370] mt-2">
                Last reviewed: 23 October 2026 · Kombee Technologies (India) Pvt. Ltd.
              </p>
            </div>

            {path.includes("subprocessors") ? (
              <div className="space-y-4">
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  PulseTrack utilizes the following third-party infrastructure and sub-processors to deliver high-availability services. Each vendor undergoes strict security and DPA reviews:
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
            ) : path.includes("sla") ? (
              <div className="space-y-4 text-xs text-[#4A5370] leading-relaxed">
                <h3 className="text-base font-bold text-[#0F1730]">99.9% Uptime Commitment</h3>
                <p>
                  PulseTrack commits to providing 99.9% availability for the cloud syncing API and web reporting platform across any given calendar month.
                </p>
                <h3 className="text-base font-bold text-[#0F1730] pt-2">Recovery Point & Recovery Time</h3>
                <p>
                  • Recovery Point Objective (RPO): 15 minutes via continuous encrypted WAL streaming.
                  <br />
                  • Recovery Time Objective (RTO): 4 hours. Automated hot standby database replication.
                </p>
                <h3 className="text-base font-bold text-[#0F1730] pt-2">Offline Resilience</h3>
                <p>
                  Because the PulseTrack desktop agent operates fully offline, local time recording and task capture continue without interruption even during upstream cloud network outages.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-xs text-[#4A5370] leading-relaxed">
                <h3 className="text-base font-bold text-[#0F1730]">1. Trust and Purpose Limitation</h3>
                <p>
                  PulseTrack software is licensed solely for legitimate work-time accounting, project billing, and attendance tracking. The software contains zero facilities for covert keylogging, microphone snooping, or webcam access.
                </p>
                <h3 className="text-base font-bold text-[#0F1730] pt-2">2. Data Ownership and Portability</h3>
                <p>
                  Customer data remains the exclusive property of the subscriber. Customers may export all raw timesheets, activity totals, and project allocations via standard CSV or REST API at any point during active subscriptions.
                </p>
                <h3 className="text-base font-bold text-[#0F1730] pt-2">3. Statutory Notice Compliance</h3>
                <p>
                  PulseTrack complies with applicable jurisdictional workplace regulations including the India DPDP Act 2023, Australia NSW Workplace Surveillance Act 2005, and New Zealand Privacy Act 2020.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <PulseTrackFooter />
    </div>
  );
}
