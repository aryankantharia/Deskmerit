import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShieldCheckIcon,
  LockIcon,
  FileTextIcon,
  EyeIcon,
  ScaleIcon,
  UserCheckIcon,
  DatabaseIcon,
  ServerIcon,
  CheckCircle2Icon,
  ArrowRightIcon,
  DownloadIcon,
  SparklesIcon,
  CpuIcon,
  AlertCircleIcon,
  LayersIcon,
  KeyRoundIcon,
  ActivityIcon
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { PageCta } from "../components/layout/PageCta";
import { SecurityTrustHeroCard, ResponsibleAiHeroCard } from "../components/layout/HeroCards";
import { legalPages, trustPages } from "../data/pages";
import { NotFound } from "./NotFound";

export function InfoPage() {
  const { pathname } = useLocation();

  if (pathname === "/responsible-ai") {
    return <ResponsibleAiPage />;
  }

  if (pathname === "/security" || pathname === "/security-policy") {
    return <SecurityTrustPage />;
  }

  const trust = trustPages[pathname];
  const content = trust ?? legalPages[pathname];
  if (!content) return <NotFound />;

  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: content.pretitle, href: trust ? "/why-sqalible" : undefined }, { title: content.title }]}
        pretitle={content.pretitle}
        title={content.title}
        description={content.description}
        showActions={Boolean(trust)}
      />

      <section className="bg-white py-10 md:py-14" aria-label={content.title}>
        <div className="mx-auto max-w-7xl px-6">
          {!trust && (
            <div className="mb-8 flex items-center justify-between border-b border-neutral-200 pb-4">
              <p className="text-caption text-neutral-500">Document Version: 3.2 • Effective Date: 1 October 2026</p>
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                Verified Legal Policy
              </span>
            </div>
          )}
          <ol className={`grid gap-px bg-neutral-200 ${trust ? "md:grid-cols-2 lg:grid-cols-3" : "mt-6 max-w-3xl"}`}>
            {content.sections.map((s, i) => (
              <li key={s.title} className="bg-white p-6 md:p-8">
                <h2 className="text-h3 text-neutral-900 font-bold">
                  {!trust && <span className="mr-2 text-teal-600 font-mono">{i + 1}.</span>}
                  {s.title}
                </h2>
                <p className="mt-3 text-body2 text-neutral-600 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      {trust && <PageCta />}
    </PageLayout>
  );
}

function ResponsibleAiPage() {
  const principles = [
    {
      icon: UserCheckIcon,
      title: "Mandatory Human Sign-Off",
      summary: "AI assists and accelerates; people make the final determination.",
      desc: "Our models generate candidate summaries, skill match scores, and interview rubrics. However, every hiring decision, promotion, disciplinary action, and offboarding step requires review and explicit approval by an authenticated HR professional."
    },
    {
      icon: EyeIcon,
      title: "Explainability & Evidence Grounding",
      summary: "Zero black-box decisions. Every score references verbatim source data.",
      desc: "When Sqalible ranks an applicant or highlights experience, it surfaces the exact lines from the resume, portfolio, or live interview transcript. Reviewers can inspect the reasoning path and verify facts before proceeding."
    },
    {
      icon: CheckCircle2Icon,
      title: "Candidate Consent First",
      summary: "Proactive transparency and opt-in before any automated screening.",
      desc: "Applicants receive clear disclosures before voice screening or live avatar interviews. Candidates can review interview rubrics in advance and request human-led alternative sessions without penalty."
    },
    {
      icon: ScaleIcon,
      title: "Continuous Adverse-Impact Auditing",
      summary: "Rigorous statistical testing against bias in recruitment models.",
      desc: "Screening algorithms are audited on a scheduled cadence for disparate impact across gender, ethnicity, and age cohorts following EEOC four-fifths rule principles. Outlier detection triggers automatic human escalation."
    },
    {
      icon: LockIcon,
      title: "Permission-Aware AI Assistant",
      summary: "Conversational answers constrained strictly by enterprise RBAC.",
      desc: "The Sqalible AI assistant inherits the query user's exact permissions. A line manager cannot query compensation bands, medical records, or confidential peer feedback that they are not explicitly authorized to view."
    },
    {
      icon: DatabaseIcon,
      title: "Zero Model Training on Customer Data",
      summary: "Your employee records remain strictly confidential and isolated.",
      desc: "Enterprise prompts, resumes, interview recordings, and performance appraisals are never used to train or fine-tune public foundation models. All inference occurs in isolated, zero-retention runtime environments."
    }
  ];

  const [openPrinciples, setOpenPrinciples] = useState<Record<string, boolean>>({
    "Mandatory Human Sign-Off": true
  });

  const togglePrinciple = (title: string) => {
    setOpenPrinciples((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: "Why Sqalible", href: "/why-sqalible" }, { title: "Responsible AI" }]}
        pretitle="AI Governance Framework"
        title="Responsible AI in Enterprise Human Resources"
        description="We believe artificial intelligence in human capital management must be ethical, transparent, and accountable. Our platform ensures clear guardrails, auditable reasoning, and humans firmly in control."
        image="none"
        aside={<ResponsibleAiHeroCard />}
      />

      {/* Assurance Metric Strip */}
      <section className="border-y border-neutral-200 bg-neutral-900 text-white py-8" aria-label="Governance Metrics">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">100%</p>
            <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">Human Decision Sign-Off</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">Zero</p>
            <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">Customer Data Used for Training</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">Quarterly</p>
            <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">Adverse-Impact Bias Audits</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">Verbatim</p>
            <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">Citations for All Scores</p>
          </div>
        </div>
      </section>

      {/* 6 Core Principles Kombee Dropdown */}
      <section className="bg-white py-12 md:py-16" aria-labelledby="principles-heading">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-10">
            <p className="pretitle text-primary">Core Ethical Pillars</p>
            <h2 id="principles-heading" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              How We Safeguard Workforce Fairness
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Every AI capability across hiring, performance, and workforce analytics conforms to strict ethical standards. Click any pillar to view its operational safeguards.
            </p>
          </div>

          {/* Kombee Dropdown Accordion List */}
          <div className="border-t border-neutral-300">
            {principles.map((p) => {
              const Icon = p.icon;
              const isOpen = Boolean(openPrinciples[p.title]);
              return (
                <div key={p.title} className="border-b border-neutral-300 transition-colors">
                  <button
                    type="button"
                    onClick={() => togglePrinciple(p.title)}
                    aria-expanded={isOpen}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <h3 className="text-lg sm:text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors tracking-tight">
                      {p.title}
                    </h3>
                    <span className="text-2xl sm:text-3xl font-light text-neutral-800 shrink-0 ml-4 group-hover:text-primary transition-colors select-none w-8 text-right">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-6">
                          <div className="group rounded-none border border-neutral-200 bg-white p-6 sm:p-7 flex flex-col md:flex-row md:items-start gap-5 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200 shrink-0 shadow-xs [&>svg]:transition-colors group-hover:[&>svg]:text-white">
                              <Icon size={24} />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-base font-bold text-neutral-900 group-hover:text-primary transition-colors">{p.summary}</h4>
                              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Workflow Diagram Banner */}
          <div className="mt-16 rounded-none border border-neutral-200 bg-neutral-900 p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-300 mb-3">
                <SparklesIcon size={13} /> The Decision Safeguard Flow
              </span>
              <h3 className="text-2xl font-bold text-white">How Sqalible Keeps Humans in Control</h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                Our architecture enforces non-autonomous execution for all high-impact employee touchpoints.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-4">
              <div className="rounded-none border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-400/20">1</span>
                  Input
                </div>
                <h4 className="mt-3 text-sm font-semibold text-white">Candidate Application</h4>
                <p className="mt-1 text-xs text-neutral-400 leading-relaxed">Explicit consent recorded with transparent rubric overview.</p>
              </div>
              <div className="rounded-none border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-400/20">2</span>
                  Synthesis
                </div>
                <h4 className="mt-3 text-sm font-semibold text-white">Explainable AI Scoring</h4>
                <p className="mt-1 text-xs text-neutral-400 leading-relaxed">Skills evaluated against job requirements with exact source citations.</p>
              </div>
              <div className="rounded-none border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-400">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-400/20">3</span>
                  Inspection
                </div>
                <h4 className="mt-3 text-sm font-semibold text-white">Recruiter Verification</h4>
                <p className="mt-1 text-xs text-neutral-400 leading-relaxed">Full transcript, code reasoning, and audio clips reviewed by hiring team.</p>
              </div>
              <div className="rounded-none border border-teal-500/40 bg-teal-950/30 p-5">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-400 text-neutral-950 font-bold">4</span>
                  Authority
                </div>
                <h4 className="mt-3 text-sm font-semibold text-white">Human Approval</h4>
                <p className="mt-1 text-xs text-teal-200/80 leading-relaxed">Named manager signs off. AI cannot reject or advance autonomously.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta title="Learn how our responsible AI principles protect your organization." />
    </PageLayout>
  );
}

function SecurityTrustPage() {
  const securityPillars = [
    {
      category: "Data Protection & Encryption",
      items: [
        {
          title: "AES-256 Encryption at Rest",
          desc: "All multi-tenant database clusters, document storage volumes, and database backups are encrypted with AES-256 using managed Cloud KMS keys."
        },
        {
          title: "TLS 1.3 in Transit",
          desc: "All network communication between browsers, native mobile apps, and Sqalible microservices requires modern TLS 1.3 cryptographic suites."
        },
        {
          title: "PII Field-Level Tokenization",
          desc: "Sensitive employee attributes (PAN, Aadhaar, SSN, bank accounts) receive application-layer field encryption prior to database writes."
        }
      ]
    },
    {
      category: "Identity & Access Governance",
      items: [
        {
          title: "Enterprise SSO (SAML 2.0 / OIDC)",
          desc: "Seamless authentication integration with Okta, Microsoft Entra ID (Azure AD), Google Workspace, and Ping Identity."
        },
        {
          title: "Mandatory Multi-Factor Auth (MFA)",
          desc: "Hardware token (FIDO2/WebAuthn) and TOTP authenticator app enforcement for all tenant administrators and payroll managers."
        },
        {
          title: "Granular Role-Based Access Control",
          desc: "Least-privilege permission schemas ensure managers only access designated team records, with automated quarterly entitlement reviews."
        }
      ]
    },
    {
      category: "Tenant Isolation & Reliability",
      items: [
        {
          title: "Logical Tenant Isolation",
          desc: "Every database query enforces tenant ID constraints at the ORM layer, preventing cross-tenant leakage. Dedicated DB options for Enterprise."
        },
        {
          title: "Immutable Audit Trails",
          desc: "Every record view, export, salary adjustment, and AI query is logged with timestamp, user ID, and IP address for compliance audits."
        },
        {
          title: "99.9% Uptime SLA & Multi-Region RPO",
          desc: "High-availability clustering across redundant availability zones with automated hourly snapshots and sub-15-minute RPO failover."
        }
      ]
    }
  ];

  const [openPillars, setOpenPillars] = useState<Record<string, boolean>>({
    "Data Protection & Encryption": true
  });

  const togglePillar = (cat: string) => {
    setOpenPillars((prev) => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: "Why Sqalible", href: "/why-sqalible" }, { title: "Security & Trust" }]}
        pretitle="Enterprise Infrastructure"
        title="Security & Trust Centre"
        description="Your employee records, payroll compensation details, and corporate data are protected with enterprise-grade encryption, zero-trust tenant isolation, and strict regional compliance."
        image="none"
        aside={<SecurityTrustHeroCard />}
      />

      {/* Security Health Metrics */}
      <section className="border-y border-neutral-200 bg-[#0A0E17] text-white py-8" aria-label="Security Metrics">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">99.9%</p>
            <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">Uptime Availability SLA</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">AES-256</p>
            <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">Encryption at Rest</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">TLS 1.3</p>
            <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">Modern In-Transit Security</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-teal-400">&lt; 15 min</p>
            <p className="mt-1 text-xs text-neutral-300 uppercase tracking-wider font-medium">Disaster Recovery RPO</p>
          </div>
        </div>
      </section>

      {/* Architecture Pillars Kombee Dropdown */}
      <section className="bg-white py-12 md:py-16" aria-labelledby="security-pillars-title">
        <div className="mx-auto max-w-7xl px-6">
          <div className="w-full mb-10">
            <p className="pretitle text-primary">Defence-in-Depth</p>
            <h2 id="security-pillars-title" className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Built on Zero-Trust Principles
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              We apply continuous verification, strict boundary enforcement, and end-to-end data stewardship across every tier. Click any domain to expand its security architecture.
            </p>
          </div>

          {/* Kombee Dropdown Accordion for Security Pillars */}
          <div className="border-t border-neutral-300">
            {securityPillars.map((pillar) => {
              const isOpen = Boolean(openPillars[pillar.category]);
              return (
                <div key={pillar.category} className="border-b border-neutral-300 transition-colors">
                  <button
                    type="button"
                    onClick={() => togglePillar(pillar.category)}
                    aria-expanded={isOpen}
                    className="w-full py-5 sm:py-6 flex items-center justify-between text-left group cursor-pointer"
                  >
                    <h3 className="text-lg sm:text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors tracking-tight">
                      {pillar.category}
                    </h3>
                    <span className="text-2xl sm:text-3xl font-light text-neutral-800 shrink-0 ml-4 group-hover:text-primary transition-colors select-none w-8 text-right">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-8">
                          <div className="grid gap-6 md:grid-cols-3">
                            {pillar.items.map((item) => (
                              <div
                                key={item.title}
                                className="rounded-none border border-neutral-200 bg-neutral-50/60 p-6 flex flex-col justify-between hover:bg-white hover:border-neutral-300 hover:shadow-xs transition-all"
                              >
                                <div>
                                  <h4 className="text-base font-bold text-neutral-900">{item.title}</h4>
                                  <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Regional Compliance & Regulatory Alignment - Kombee Architectural Grid */}
      <section className="bg-[#0B0F19] py-20 md:py-28 text-white relative overflow-hidden" aria-label="Regional Compliance & Sovereignty">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-teal-400 mb-3">
              Regional Compliance & Sovereignty
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Global Compliance & Regional Data Residency
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              We design our HRMS infrastructure to respect regional sovereignty laws. We do not transfer personal records outside designated customer geographies unless authorized by explicit data processing agreements.
            </p>
          </div>

          {/* Architectural Line-Divided Structure Matching Reference */}
          <div className="border-t border-b border-white/15">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/15">
              {/* Column 1 - India */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ShieldCheckIcon size={38} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1">India</span>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  DPDP Act 2023
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Consent logging, purpose limitation, and local data residency options.
                </p>
              </div>

              {/* Column 2 - European Union */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <LockIcon size={38} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1">European Union</span>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  GDPR Compliant
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Right to erasure, portability, and EU-domiciled Frankfurt hosting.
                </p>
              </div>

              {/* Column 3 - United States */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ScaleIcon size={38} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1">United States</span>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  CCPA & CPRA
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Zero third-party sale of personal data with automated SAR workflows.
                </p>
              </div>

              {/* Column 4 - Middle East */}
              <div className="py-8 px-6 sm:py-10 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                <div className="text-teal-400 mb-6 group-hover:scale-105 transition-transform duration-200">
                  <ServerIcon size={38} strokeWidth={1.5} />
                </div>
                <span className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1">Middle East</span>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  UAE Data Law
                </h4>
                <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  In-region data tenancy alignment with bilateral enterprise terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageCta title="Request our full enterprise security packet and architecture whitepaper." />
    </PageLayout>
  );
}