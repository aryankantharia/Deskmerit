import React from "react";
import { ArrowRightIcon, ChevronRightIcon } from "lucide-react";

type Crumb = { title: string; href?: string };

type PageHeroProps = {
  crumbs: Crumb[];
  pretitle?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  aside?: React.ReactNode;
  showActions?: boolean;
  actions?: React.ReactNode;
  accent?: "primary" | "ai";
};

function getDefaultHeroImage(title: string, pretitle?: string): string {
  const t = title.toLowerCase();
  const text = `${title} ${pretitle || ""}`.toLowerCase();

  // 1. Attendance, Shifts & Time Tracking
  if (
    t.includes("attendance") ||
    t.includes("shift") ||
    t.includes("roster") ||
    t.includes("punch") ||
    t.includes("time tracking")
  ) {
    return "/dashboards/test_attendance.png";
  }

  // 2. Leave Management, PTO & Accruals
  if (
    t.includes("leave") ||
    t.includes("pto") ||
    t.includes("vacation") ||
    t.includes("holiday") ||
    t.includes("sick")
  ) {
    return "/figma-screens/employee-leave.png";
  }

  // 3. Core HR, Employee Records, Directory & Profile Master
  if (
    t.includes("core hr") ||
    t.includes("employee record") ||
    t.includes("employee") ||
    t.includes("directory") ||
    t.includes("staff") ||
    t === "manage"
  ) {
    return "/figma-screens/employee-profile.png";
  }

  // Organization Chart & Company Structure
  if (
    text.includes("org chart") ||
    text.includes("organization") ||
    text.includes("structure") ||
    text.includes("hierarchy") ||
    text.includes("reporting line")
  ) {
    return "/figma-screens/org-chart.png";
  }

  // Internal Mobility & Career Paths
  if (
    text.includes("mobility") ||
    text.includes("career path") ||
    text.includes("internal job") ||
    text.includes("transfer")
  ) {
    return "/figma-screens/internal-mobility.png";
  }

  // IT Provisioning & Hardware Asset Allocation
  if (
    text.includes("provisioning") ||
    text.includes("hardware") ||
    text.includes("asset") ||
    text.includes("inventory") ||
    text.includes("equipment") ||
    text.includes("recovery")
  ) {
    return "/dashboards/assets-core-hr-dashboard.png";
  }

  // Performance, Goals & OKRs, 360 Feedback, Reviews
  if (
    text.includes("performance") ||
    text.includes("okr") ||
    text.includes("goal") ||
    text.includes("key result") ||
    text.includes("appraisal")
  ) {
    return "/figma-screens/performance-dashboard.png";
  }
  if (text.includes("360") || text.includes("feedback") || text.includes("review")) {
    return "/figma-screens/feedback-360.png";
  }
  if (text.includes("meeting") || text.includes("1:1") || text.includes("1-on-1") || text.includes("check-in")) {
    return "/figma-screens/performance-meetings.png";
  }
  if (text.includes("question") || text.includes("template") || text.includes("rubric") || text.includes("learning")) {
    return "/figma-screens/question-templates.png";
  }

  // Hiring, Sourcing, Recruiting, Requisitions
  if (text.includes("hiring request") || text.includes("requisition") || text.includes("approval")) {
    return "/figma-screens/hiring-requests.png";
  }
  if (text.includes("sourcing") || text.includes("posting") || text.includes("job board") || text.includes("job listing")) {
    return "/figma-screens/sourcing-dashboard.png";
  }
  if (text.includes("candidate") || text.includes("applicant") || text.includes("resume") || text.includes("talent pool")) {
    return "/figma-screens/candidates.png";
  }
  if (text.includes("interview") || text.includes("screening") || text.includes("panel") || text.includes("assessment")) {
    return "/figma-screens/scheduled-interviews.png";
  }
  if (text.includes("vendor") || text.includes("referral") || text.includes("agency") || text.includes("portal") || text.includes("partner")) {
    return "/figma-screens/vendor-portal.png";
  }
  if (text.includes("career") || text.includes("job") || text.includes("opening") || text.includes("hire") || text.includes("recruitment")) {
    return "/figma-screens/recruitment-dashboard.png";
  }

  // Offboarding, Exit, Settlements
  if (text.includes("knowledge transfer") || text.includes("handover") || text.includes("kt") || text.includes("alumni")) {
    return "/figma-screens/knowledge-transfer.png";
  }
  if (text.includes("exit interview")) {
    return "/figma-screens/exit-interview.png";
  }
  if (text.includes("retention") || text.includes("attrition") || text.includes("risk") || text.includes("churn")) {
    return "/figma-screens/retention-risk.png";
  }
  if (text.includes("exit") || text.includes("offboarding") || text.includes("resignation") || text.includes("separation")) {
    return "/figma-screens/exit-process.png";
  }

  // Payroll, Compensation, F&F Settlement, Statutory, Taxes
  if (text.includes("settlement") || text.includes("fnf") || text.includes("gratuity") || text.includes("calculator") || text.includes("expense") || text.includes("claim")) {
    return "/dashboards/payroll_final_settlement.png";
  }
  if (
    text.includes("payroll") ||
    text.includes("salary") ||
    text.includes("compensation") ||
    text.includes("statutory") ||
    text.includes("tax") ||
    text.includes("benefit") ||
    text.includes("pay")
  ) {
    return "/figma-screens/final-settlement.png";
  }

  // Integrations & Connectors
  if (text.includes("integration") || text.includes("connector") || text.includes("biometric") || text.includes("api") || text.includes("device")) {
    return "/dashboards/biometric_devices.png";
  }

  // AI HR Assistant (Chatbot & Q&A)
  if (t.includes("assistant") || t.includes("chat") || t.includes("copilot")) {
    return "/figma-screens/ai-hr-assistant.png";
  }

  // Engagement & Workforce Insights
  if (t.includes("engagement") || t.includes("workforce insight") || t.includes("health summary")) {
    return "/figma-screens/workforce-insights.png";
  }

  // Attrition Risk Management
  if (t.includes("attrition") || t.includes("flight risk") || t.includes("retention")) {
    return "/figma-screens/attrition-risk-management.png";
  }

  // Workforce Planning
  if (t.includes("planning") || t.includes("headcount")) {
    return "/figma-screens/open-jobs.png";
  }

  // ScalForce & Global Shared Employment
  if (text.includes("scalforce") || text.includes("shared employment") || text.includes("eor") || text.includes("employer of record")) {
    if (text.includes("vs") || text.includes("compare") || text.includes("direct")) {
      return "/heroes/scalforce-compare-hero.jpg";
    }
    return "/heroes/scalforce-global-hero.jpg";
  }

  // Company Pages (About, Careers, Partners, Press)
  if (text.includes("about") || text.includes("company") || text.includes("career") || text.includes("partner") || text.includes("press")) {
    if (text.includes("career") || text.includes("culture") || text.includes("open role")) return "/heroes/company-careers-hero.jpg";
    if (text.includes("partner") || text.includes("ecosystem")) return "/heroes/company-partners-hero.jpg";
    if (text.includes("press") || text.includes("media") || text.includes("news")) return "/heroes/company-press-hero.jpg";
    return "/heroes/company-about-hero.jpg";
  }

  // Resources & Knowledge Pages (Human or generic images; no product screens)
  if (text.includes("resource") || text.includes("guide") || text.includes("webinar") || text.includes("customer") || text.includes("template") || text.includes("playbook") || text.includes("knowledge") || text.includes("status") || text.includes("calculator")) {
    if (text.includes("status")) return "/heroes/resources-status-hero.jpg";
    if (text.includes("gratuity")) return "/heroes/resources-calc-gratuity.jpg";
    if (text.includes("ctc") || text.includes("salary")) return "/heroes/resources-calc-ctc.jpg";
    if (text.includes("notice")) return "/heroes/resources-calc-notice.jpg";
    if (text.includes("webinar")) return "/heroes/resources-webinars-hero.jpg";
    if (text.includes("customer") || text.includes("case stud")) return "/heroes/resources-customers-hero.jpg";
    if (text.includes("help") || text.includes("wellbeing") || text.includes("support")) return "/heroes/resources-help-hero.jpg";
    if (text.includes("template")) return "/heroes/resources-templates-hero.jpg";
    if (text.includes("guide") || text.includes("ebook") || text.includes("playbook")) return "/heroes/resources-guides-hero.jpg";
    if (text.includes("blog")) return "/heroes/resources-blog-hero.jpg";
    return "/heroes/resources-hub-hero.jpg";
  }

  // Solutions Hub & Workforces (Must use relevant product UI screens)
  if (text.includes("solution") || text.includes("tailored hr") || text.includes("industry solution") || text.includes("workforce solutions")) {
    if (text.includes("mid-market")) return "/figma-screens/core-dashboard.png";
    if (text.includes("enterprise")) return "/dashboards/assets-core-hr-dashboard.png";
    return "/figma-screens/core-dashboard.png";
  }

  // Executive Platform & Enterprise Dashboard fallback
  return "/figma-screens/performance-dashboard.png";
}

const CANONICAL_PARENT_MAP: Record<string, string> = {
  platform: "/platform",
  hire: "/platform/hire",
  onboard: "/platform/onboard",
  manage: "/platform/manage",
  pay: "/platform/pay",
  grow: "/platform/grow",
  exit: "/platform/exit",
  ai: "/platform/ai",
  "sqalible ai": "/platform/ai",
  solutions: "/solutions",
  "why sqalible": "/why-sqalible",
  resources: "/resources",
  company: "/about",
  about: "/about",
  pricing: "/pricing",
  tools: "/tools/templates",
  blog: "/blog",
  blogs: "/blog",
  customers: "/customers"
};

export function PageHero({
  crumbs,
  pretitle,
  title,
  description,
  image,
  imageAlt = "",
  aside,
  showActions = true,
  actions,
  accent = "primary"
}: PageHeroProps) {
  const heroImage = image === "none" ? null : image || (aside ? null : getDefaultHeroImage(title, pretitle));
  const hasSide = Boolean(heroImage || aside);

  // Normalize crumbs: every ancestor crumb gets a valid link; only the leaf is unlinked
  const resolvedCrumbs = crumbs.map((c, idx) => {
    const isLast = idx === crumbs.length - 1;
    if (isLast) {
      return { ...c, href: undefined, isCurrent: true };
    }
    if (c.href) {
      return { ...c, isCurrent: false };
    }
    const cleanKey = c.title.toLowerCase().trim();
    const fallbackHref = CANONICAL_PARENT_MAP[cleanKey] || (idx === 0 ? "/platform" : undefined);
    return { ...c, href: fallbackHref, isCurrent: false };
  });

  // Schema.org BreadcrumbList structured data
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sqalible.com/"
      },
      ...resolvedCrumbs.map((c, idx) => {
        const itemObj: { "@type": string; position: number; name: string; item?: string } = {
          "@type": "ListItem",
          position: idx + 2,
          name: c.title
        };
        if (c.href) {
          itemObj.item = `https://sqalible.com${c.href.startsWith("/") ? c.href : `/${c.href}`}`;
        }
        return itemObj;
      })
    ]
  };

  return (
    <section className="relative overflow-hidden bg-neutral-900 pb-14 pt-32 md:pb-18 md:pt-36 text-white" aria-labelledby="page-title">
      {/* Schema.org BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="absolute -top-32 -left-32 h-[450px] w-[450px] rounded-full bg-teal-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full bg-[#047B72]/20 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1.5 text-caption text-neutral-400">
            <li>
              <a href="/" className="hover:text-white transition-colors">Home</a>
            </li>
            {resolvedCrumbs.map((c) => (
              <li key={c.title} className="flex items-center gap-1.5">
                <ChevronRightIcon size={12} strokeWidth={1.75} aria-hidden="true" />
                {c.href ? (
                  <a href={c.href} className="hover:text-white transition-colors underline-offset-2 hover:underline">
                    {c.title}
                  </a>
                ) : (
                  <span className="text-teal-300 font-medium" aria-current="page">
                    {c.title}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className={`mt-6 grid items-center gap-8 lg:gap-12 ${hasSide ? "lg:grid-cols-12" : ""}`}>
          <div className={hasSide ? "lg:col-span-7" : "w-full"}>
            {pretitle && (
              <p className={`pretitle mb-2 ${accent === "ai" ? "text-[#C4B5FD]" : "text-teal-400"}`}>
                {pretitle}
              </p>
            )}
            <h1 id="page-title" className="text-[32px] font-extrabold leading-[40px] tracking-tight text-white md:text-[46px] md:leading-[54px]">
              {title}
            </h1>
            <p className={`mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed ${hasSide ? "max-w-2xl" : "w-full"}`}>
              {description}
            </p>
            {actions ? (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {actions}
              </div>
            ) : showActions ? (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/signup"
                  className="rounded-full bg-primary hover:bg-teal-600 px-7 py-3.5 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105"
                >
                  Start free trial
                  <ArrowRightIcon size={16} strokeWidth={2} className="inline ml-1.5" aria-hidden="true" />
                </a>
                <a
                  href="/contact"
                  className="rounded-full border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 px-6 py-3.5 text-xs font-semibold text-neutral-200 transition-colors"
                >
                  Book a demo
                </a>
              </div>
            ) : null}
          </div>

          {hasSide && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-[540px] xl:max-w-[580px] rounded-xl overflow-hidden border border-neutral-700/60 bg-[#0E1620] shadow-2xl shadow-black/60 group hover:border-teal-500/40 transition-all duration-300">
                {/* Modern Window Title Bar */}
                <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#080D14] border-b border-white/10 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-neutral-400 font-mono">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span>
                      {heroImage?.startsWith("/figma-screens/") || heroImage?.startsWith("/dashboards/")
                        ? "app.sqalible.com"
                        : "sqalible.com"}
                    </span>
                  </div>
                  <div className="w-10" />
                </div>

                {/* Screenshot Frame Area */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-neutral-950">
                  {heroImage ? (
                    <img
                      src={heroImage}
                      alt={imageAlt || title}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    aside
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}