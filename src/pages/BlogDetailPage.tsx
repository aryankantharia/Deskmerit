import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  Calendar,
  Clock,
  Eye,
  Sparkles,
  ThumbsUp,
  Copy,
  Check,
  Linkedin,
  Twitter,
  Facebook,
  Share2,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight
} from "lucide-react";
import { allBlogs, BlogPost } from "../data/blogs";
import { BlogCard } from "../components/BlogCard";

interface SectionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // Find current blog post or fallback to the flagship HRMS article
  const post: BlogPost =
    allBlogs.find((p) => p.slug === slug) ||
    allBlogs.find((p) => p.slug === "scaling-global-workforce-operations-from-10-to-1000-employees") ||
    allBlogs[0];

  // Active section tracking for AI highlights
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(true);
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(142);
  const [hasLiked, setHasLiked] = useState(false);

  // Other articles for "More Articles" section
  const moreArticles = allBlogs.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Article sections
  const sections: SectionItem[] = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-800">
          <p>
            When an organization grows from 10 to 1,000 employees, the sheer operational volume of people management changes dramatically. What once worked through shared Google Sheets, manual email approvals, and ad-hoc calendar invites rapidly collapses under the weight of fragmented point software.
          </p>
          <div className="font-serif italic text-neutral-900 border-l-2 border-primary pl-4 py-2 text-lg bg-neutral-50/50 rounded-r-xl">
            &ldquo;Why do we need six different logins just to hire, onboard, pay, and retain one engineer?&rdquo; is the defining question asked by modern CTOs and CHROs.
            <br />
            <span className="font-sans font-medium text-base text-neutral-700 not-italic block mt-1">
              Legacy HRMS platforms were built as passive databases. The future belongs to autonomous execution.
            </span>
          </div>
          <p>
            An organization with 500 team members coordinates hundreds of monthly shift changes, scores dozens of first-round candidate interviews, tracks hardware assets, and calculates complex statutory payroll withholdings across multiple states and entities.
          </p>
          <p>
            Without a unified data layer, HR leaders spend over 40% of their working hours manually reconciling CSV files, chasing managers for attendance approvals, and resolving preventable payroll discrepancies.
          </p>
          <p>
            An AI-native HRMS fundamentally solves this challenge by embedding autonomous agentic execution directly into a single, cryptographic employee record.
          </p>
        </div>
      )
    },
    {
      id: "unified-employee-master",
      title: "Unified Employee Master vs Fragmented Point Systems",
      content: (
        <div className="space-y-5 text-[16px] leading-[1.8] text-neutral-800">
          <p>
            The fundamental architecture of workforce operations dictates how cleanly an enterprise scales. The table below illustrates the structural difference between legacy disconnected point tools and a unified AI-native architecture:
          </p>
          <div className="overflow-x-auto my-6 rounded-2xl border border-neutral-300 bg-white shadow-xs">
            <table className="w-full text-left text-sm text-neutral-800 border-collapse">
              <thead className="bg-neutral-100 text-xs uppercase tracking-wider text-neutral-900 border-b border-neutral-300">
                <tr>
                  <th className="py-3 px-4 font-bold border-r border-neutral-300">Operational Domain</th>
                  <th className="py-3 px-4 font-bold border-r border-neutral-300">Legacy Point Solutions</th>
                  <th className="py-3 px-4 font-bold">Sqalible AI-Native Master</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-300 text-neutral-700">
                <tr className="hover:bg-neutral-50/70">
                  <td className="py-3.5 px-4 font-semibold text-neutral-900 border-r border-neutral-300">Candidate Screening & ATS</td>
                  <td className="py-3.5 px-4 border-r border-neutral-300">Siloed resume files, keyword filters, manual data re-entry upon hiring</td>
                  <td className="py-3.5 px-4 font-semibold text-neutral-900">Autonomous live avatar interviews, calibrated rubrics, instant master sync</td>
                </tr>
                <tr className="hover:bg-neutral-50/70">
                  <td className="py-3.5 px-4 font-semibold text-neutral-900 border-r border-neutral-300">Attendance & Rostering</td>
                  <td className="py-3.5 px-4 border-r border-neutral-300">Monthly CSV batch exports from biometrics with delayed dispute resolution</td>
                  <td className="py-3.5 px-4 font-semibold text-neutral-900">Real-time ZKTeco & mobile geofenced sync directly to payroll calculation engine</td>
                </tr>
                <tr className="hover:bg-neutral-50/70">
                  <td className="py-3.5 px-4 font-semibold text-neutral-900 border-r border-neutral-300">Statutory Payroll</td>
                  <td className="py-3.5 px-4 border-r border-neutral-300">2-3 days of manual spreadsheet formulas for PF, ESI, TDS, and bonus adjustments</td>
                  <td className="py-3.5 px-4 font-semibold text-neutral-900">Sub-second automated payroll calculation with 1-click direct bank disbursal</td>
                </tr>
                <tr className="hover:bg-neutral-50/70">
                  <td className="py-3.5 px-4 font-semibold text-neutral-900 border-r border-neutral-300">Offboarding & IT Access</td>
                  <td className="py-3.5 px-4 border-r border-neutral-300">Unenforced email checklists creating persistent zombie accounts in SaaS tools</td>
                  <td className="py-3.5 px-4 font-semibold text-neutral-900">5 mandatory compliance gates with automated SSO revocation and hardware return</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            When every event—from the initial interview scorecard to the final settlement—writes to a single record, reconciliation overhead drops to zero.
          </p>
        </div>
      )
    },
    {
      id: "autonomous-live-interviews",
      title: "Where Autonomous AI Delivers Real Talent Velocity",
      content: (
        <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-800">
          <p>
            Traditional recruitment funnels suffer from a severe calendar bottleneck: scheduling first-round screening calls. Recruiters spend up to 15 hours every week asking standard baseline questions, while top technical candidates drop off due to scheduling delays.
          </p>
          <p>
            Autonomous live AI interviews fundamentally shift this dynamic. Candidates schedule their technical or behavioral conversation 24/7 at the moment of peak intent. The AI interviewer conducts an adaptive, resume-aware conversation, evaluating real engineering reasoning rather than keyword memorization.
          </p>
          <div className="p-5 rounded-none border border-teal-200 bg-teal-50/50 my-3">
            <h4 className="font-bold text-teal-950 mb-2">Anti-Bias Acoustic Filtering & Transparent Rubrics</h4>
            <p className="text-sm text-teal-900 leading-relaxed mb-3">
              By removing acoustic pitch and accent variations, the evaluation engine scores strictly on demonstrated domain competencies, system design decisions, and structured logic.
            </p>
            <h4 className="font-bold text-neutral-900 mb-2">Human-in-the-Loop Authority</h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Every interview produces a verbatim timestamped transcript, rubric breakdown, and code replay. Human hiring managers retain 100% final sign-off authority before advancing any candidate.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "realtime-telemetry-attendance",
      title: "Real-Time Telemetry: Stopping Attendance & Overtime Leakage",
      content: (
        <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-800">
          <p>
            For distributed teams, healthcare facilities, and manufacturing plants operating 24/7 shifts, attendance tracking is a mission-critical operational bottleneck.
          </p>
          <p>
            Legacy biometric setups record clock-ins to a local machine that is exported at the end of the month. By the time discrepancies in overtime or loss-of-pay (LOP) are discovered, payroll cutoff has passed, creating employee friction and compliance disputes.
          </p>
          <p>
            Sqalible integrates directly with ZKTeco and Matrix biometric hardware gateways alongside mobile geofenced check-ins. Clock-in telemetry updates in real-time, automatically applying dynamic shift rules, grace periods, and overtime multipliers.
          </p>
        </div>
      )
    },
    {
      id: "zero-error-statutory-payroll",
      title: "Zero-Error Statutory Payroll: 100% Precision at Scale",
      content: (
        <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-800">
          <p>
            Statutory payroll compliance is non-negotiable. Errors in EPF contributions, ESI thresholds, Professional Tax slabs, or TDS tax brackets expose leadership to severe legal penalties.
          </p>
          <p>
            Because attendance and leave data flow seamlessly into the calculation engine, payroll processing transforms from a stressful multi-day ordeal into a single-click verification. The engine automatically checks:
          </p>
          <ul className="list-disc list-inside space-y-2 text-neutral-800 ml-2">
            <li>Statutory EPF wage ceiling caps and voluntary provident fund (VPF) deductions.</li>
            <li>Employees' State Insurance (ESI) eligibility and gross salary limits.</li>
            <li>State-specific Professional Tax (PT) brackets and slab exemptions.</li>
            <li>New vs old regime Tax Deducted at Source (TDS) calculations with investment declarations.</li>
          </ul>
        </div>
      )
    },
    {
      id: "compliance-governance-security",
      title: "Enterprise Governance, SOC 2 Security & Compliance Gates",
      content: (
        <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-800">
          <p>
            Workforce data contains the most sensitive information an organization handles: compensation records, tax identifiers, performance evaluations, and biometric markers.
          </p>
          <p>
            Modern HRMS architecture requires strict zero-trust principles:
          </p>
          <ol className="list-decimal list-inside space-y-2.5 text-neutral-800 ml-2 font-medium">
            <li>
              <span className="font-normal"><strong className="text-neutral-900">Tenant Isolation & Data Encryption:</strong> All employee records encrypted in transit (TLS 1.3) and at rest (AES-256) within regional SOC 2 Type II data centers.</span>
            </li>
            <li>
              <span className="font-normal"><strong className="text-neutral-900">Granular Role-Based Access Control (RBAC):</strong> Managers only see relevant team performance data; salary and attrition indicators remain strictly restricted to authorized HR leadership.</span>
            </li>
            <li>
              <span className="font-normal"><strong className="text-neutral-900">Cryptographic Offboarding Audits:</strong> Hard compliance gates ensure IT, Finance, HR, and Admin sign off before an employee record is formally archived.</span>
            </li>
          </ol>
        </div>
      )
    },
    {
      id: "final-takeaway",
      title: "Final Takeaway",
      content: (
        <div className="space-y-4 text-[16px] leading-[1.8] text-neutral-800">
          <p>
            Scaling workforce operations from 10 to 1,000 employees does not require scaling HR administrative headcount at the same rate. By replacing fragmented point solutions with an AI-native HRMS architecture, modern companies maintain operational agility, eliminate compliance liabilities, and empower their people teams to focus on strategic culture rather than manual data entry.
          </p>
          <p>
            With disciplined architectural unification, high-growth enterprises achieve faster hiring velocity, zero-error payroll runs, and delightful employee experiences across every stage of the lifecycle.
          </p>
        </div>
      )
    }
  ];

  // Scroll to section with offset for fixed header
  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Scroll spy to update active highlight pill as reader scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleGenerateHighlights = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setHasGenerated(true);
    }, 500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    } else {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF7F2] font-sans text-neutral-900 selection:bg-teal-100">
      <Header />

      {/* Hero Section - Dark & Premium (Screenshot 1) */}
      <section className="relative pt-[68px] bg-[#0A1118] text-white border-b border-neutral-800">
        {/* Ambient background glows clipped safely */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 lg:pt-16 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left: Category Badge, Title, Author Details */}
            <div className="lg:col-span-7 space-y-6 pb-12 lg:pb-16">
              <div>
                <span className="inline-block rounded-full border border-neutral-700 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-extrabold leading-[1.18] tracking-tight text-white">
                {post.title}
              </h1>

              {/* Author Row */}
              <div className="flex items-center gap-4 pt-2">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-neutral-700 bg-neutral-800 shrink-0">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80";
                    }}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    By <span className="hover:text-primary transition-colors">{post.author}</span>
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">{post.authorRole}</p>
                </div>
              </div>
            </div>

            {/* Right: Featured Hero Visual extending down past the hero banner boundary */}
            <div className="lg:col-span-5 flex items-end justify-end relative z-20">
              <div className="w-full relative rounded-none translate-y-6 sm:translate-y-8 lg:translate-y-12">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto max-h-[480px] aspect-[16/11] object-cover block shadow-md"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reading Section with 2-Column Sticky Layout (Screenshots 2 & 3) */}
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-14">
        {/* Parent grid: right sticky sidebar stays pinned while scrolling inside this container,
            and naturally scrolls once reaching the bottom before 'More Articles' */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Full Blog Content */}
          <article className="lg:col-span-8 min-w-0">
            {/* Reading stats */}
            <div className="flex items-center gap-6 text-xs md:text-sm font-medium text-neutral-600 mb-8">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-neutral-500" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-neutral-500" />
                <span>{post.date}</span>
              </div>
            </div>

            {/* Structured Sections with Dot Indicators */}
            <div className="space-y-12">
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 transition-colors duration-200"
                >
                  <h2 className="text-2xl md:text-[28px] font-extrabold tracking-tight text-neutral-900 mb-4 flex items-center gap-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
                    <span>{section.title}</span>
                  </h2>
                  <div className="mt-4">{section.content}</div>
                </section>
              ))}
            </div>
          </article>

          {/* Right Column: Sticky Sidebar Panel with distance below hero visual and sticky behavior */}
          <aside className="lg:col-span-4 sticky top-24 space-y-6 self-start z-10 mt-6 lg:mt-32 xl:mt-36">
            
            {/* AI Generated Highlights Card - Rounded Card Structure with Sqalible Brand Colors */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm">
              {/* Inner container with Sqalible soft mint/teal tint and rounded-2xl radius */}
              <div className="rounded-2xl bg-[#EBF7F5] border border-[#BDE8E2] p-5">
                <h3 className="text-[17px] font-extrabold text-neutral-900 tracking-tight mb-4">
                  AI Generated Highlights
                </h3>

                {/* Highlight Pills matching reference structure */}
                <div className="space-y-2.5 max-h-[440px] overflow-y-auto pr-0.5">
                  {sections.map((section) => {
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left py-3 px-5 rounded-full text-[13.5px] leading-snug transition-all block truncate cursor-pointer ${
                          isActive
                            ? "border-2 border-primary bg-[#DEF3F0] text-[#063B44] font-bold shadow-xs"
                            : "border border-neutral-300 bg-white text-neutral-700 font-medium hover:border-primary hover:text-neutral-900"
                        }`}
                      >
                        {section.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Generate Highlights Button at bottom in Sqalible brand colors */}
              <div className="pt-3.5 px-1 pb-1">
                <button
                  type="button"
                  onClick={handleGenerateHighlights}
                  disabled={isGenerating}
                  className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#047B72] via-[#059669] to-[#0D9488] text-white font-bold text-[14.5px] flex items-center justify-center gap-2 hover:opacity-95 shadow-md shadow-teal-700/20 active:scale-[0.98] transition-all cursor-pointer"
                >
                  <Sparkles size={17} className={isGenerating ? "animate-spin" : "fill-white/30"} />
                  {isGenerating ? "Generating Highlights..." : "Generate Highlights with AI"}
                </button>
              </div>
            </div>

            {/* Like & Share Card */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Like This Blog? Share It!
                  </h4>
                  <div className="flex items-center gap-2 mt-3">
                    {/* LinkedIn */}
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-blue-700 transition-colors"
                      title="Share on LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>

                    {/* Facebook */}
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        window.location.href
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-blue-600 transition-colors"
                      title="Share on Facebook"
                    >
                      <Facebook size={16} />
                    </a>

                    {/* Twitter/X */}
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        post.title
                      )}&url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 hover:text-black transition-colors"
                      title="Share on X"
                    >
                      <Twitter size={16} />
                    </a>

                    {/* Copy Link */}
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors"
                      title="Copy Link"
                    >
                      {copied ? <Check size={16} className="text-emerald-600" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>

                {/* Thumbs Up / Like Counter */}
                <div className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={handleLike}
                    className={`p-3 rounded-full border transition-all ${
                      hasLiked
                        ? "border-[#047B72] bg-[#EBF7F5] text-[#047B72] shadow-sm"
                        : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                    }`}
                    title="Like post"
                  >
                    <ThumbsUp size={18} className={hasLiked ? "fill-[#047B72]" : ""} />
                  </button>
                  <span className="text-[11px] font-bold text-neutral-600 mt-1">{likes}</span>
                </div>
              </div>
            </div>

            {/* Sqalible Consultation / CTA Card (Branded to Sqalible with rounded-3xl radius) */}
            <div className="rounded-3xl overflow-hidden bg-gradient-to-b from-[#091D26] via-[#05232F] to-[#041620] border border-teal-500/30 p-6 text-white shadow-xl relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-300 font-bold text-xs">
                    Sq
                  </div>
                  <span className="font-extrabold tracking-tight text-white text-base">
                    Sqalible
                  </span>
                </div>

                <h3 className="text-lg md:text-xl font-extrabold text-white leading-snug">
                  Ready to Modernize Your Workforce Operations?
                </h3>

                <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                  See how Sqalible unifies autonomous AI live interviews, biometric attendance, and zero-error statutory payroll on a single employee record.
                </p>

                <div className="grid grid-cols-3 gap-2 py-3 text-center border-y border-teal-500/20">
                  <div className="p-1.5">
                    <ShieldCheck size={20} className="mx-auto text-teal-400 mb-1" />
                    <p className="text-[10px] text-neutral-300 font-semibold leading-tight">
                      Anti-Bias AI
                    </p>
                  </div>
                  <div className="p-1.5">
                    <Cpu size={20} className="mx-auto text-teal-400 mb-1" />
                    <p className="text-[10px] text-neutral-300 font-semibold leading-tight">
                      Single Record
                    </p>
                  </div>
                  <div className="p-1.5">
                    <Layers size={20} className="mx-auto text-teal-400 mb-1" />
                    <p className="text-[10px] text-neutral-300 font-semibold leading-tight">
                      100% Statutory
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 text-neutral-950 font-bold text-xs md:text-sm text-center block hover:opacity-95 shadow-md shadow-teal-500/20 transition-transform active:scale-[0.98]"
                >
                  Book a demo
                </Link>
              </div>
            </div>

          </aside>
        </div>
      </main>

      {/* "More Articles" Section at Bottom (Screenshot 4) */}
      <section className="bg-[#FAF7F2] border-t border-neutral-300/80 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 tracking-tight">
              More Articles
            </h2>
            <Link
              to="/blogs"
              className="rounded-full border border-neutral-400 bg-white px-5 py-2 text-xs md:text-sm font-bold text-neutral-800 hover:bg-neutral-900 hover:text-white transition-all shadow-2xs"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moreArticles.map((article) => (
              <BlogCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                image={article.image}
                href={`/blogs/${article.slug}`}
                author={article.author}
                authorRole={article.authorRole}
                authorAvatar={article.authorAvatar}
                actionLabel="Read Article"
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
