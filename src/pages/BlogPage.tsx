import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Mail,
  Search,
  Check,
  User,
  Share2,
  Bookmark,
  Calendar,
  Sparkles,
  ArrowLeft,
  X,
} from "lucide-react";

interface Article {
  id: number;
  slug: string;
  category: "Productivity" | "IT services" | "Time tracking" | "HR" | "Integrations" | "Remote work" | "Legal";
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: { name: string; role: string; avatar: string };
  image: string;
  featured?: boolean;
  content?: string[];
}

const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "best-employee-monitoring-software-india-2026",
    category: "Productivity",
    title: "Best employee monitoring software in India (2026): an honest comparison",
    excerpt: "We compared seven tools on pricing in rupees, DPDP Act readiness, attendance and Jira support — including our own, with its explicit limits.",
    readTime: "12 min read",
    date: "20 Oct 2026",
    author: { name: "Keyur Mehta", role: "Head of Product Strategy", avatar: "KM" },
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    content: [
      "Software delivery teams live and die by trust. When employees feel covertly surveilled by keystroke loggers and webcam snapshots, turnover surges and morale degrades.",
      "The newly notified Digital Personal Data Protection (DPDP) Rules in India mandate explicit employee notice, purpose limitation, and the right to erasure. Most legacy trackers built in the 2010s simply cannot comply with these privacy thresholds.",
      "Deskmerit was architected from day one to deliver the exact utilization and attendance insights that executive leadership requires, without storing single keystrokes or recording video feeds.",
    ],
  },
  {
    id: 2,
    slug: "the-ai-native-architecture-scaling-global-workforce",
    category: "Integrations",
    title: "The Multi-Tier Statutory Payroll & Time Ledger: Eliminating Friday Scramble",
    excerpt: "Why manual timesheet entry on Friday afternoon costs software teams up to 35% of defensible revenue, and how task-level linking fixes it.",
    readTime: "8 min read",
    date: "18 Oct 2026",
    author: { name: "Ananya Sharma", role: "VP Engineering", avatar: "AS" },
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    content: [
      "Developers spend an average of 42 minutes every Friday trying to recall what tickets they worked on four days prior.",
      "With Tracker Plus, time records against the Jira or Azure DevOps issue the moment work begins. No timers to forget, no guessing at client billing allocations.",
    ],
  },
  {
    id: 3,
    slug: "billable-utilisation-what-is-a-good-rate-for-it-services",
    category: "IT services",
    title: "Billable utilisation: what’s a good target for modern IT services firms?",
    excerpt: "Benchmarking senior architects, delivery leads, and developers to maintain healthy gross margins above 35% without team burnout.",
    readTime: "7 min read",
    date: "15 Oct 2026",
    author: { name: "Marcus Taylor", role: "Delivery Director", avatar: "MT" },
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    slug: "timesheets-vs-automatic-time-tracking-accuracy",
    category: "Time tracking",
    title: "Timesheets vs automatic time tracking: which is more accurate?",
    excerpt: "The cognitive cost of filling timesheets on Friday from memory versus background passive telemetry verified by task tokens.",
    readTime: "6 min read",
    date: "12 Oct 2026",
    author: { name: "Wei Lin", role: "Lead Systems Architect", avatar: "WL" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    slug: "how-to-introduce-time-tracking-to-your-team-with-template",
    category: "HR",
    title: "How to introduce time tracking to your team (with an announcement template)",
    excerpt: "A copy-paste email and Slack announcement template emphasizing employee privacy, zero keystroke logging, and self-view transparency.",
    readTime: "9 min read",
    date: "10 Oct 2026",
    author: { name: "Nikita Saxena", role: "Director of People Ops", avatar: "NS" },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    slug: "jira-time-tracking-native-vs-automatic-tools",
    category: "Integrations",
    title: "Jira time tracking: native worklogs vs automatic task trackers compared",
    excerpt: "Why native Jira worklog fields are under-utilized by developers, and how desktop agents bridge the ticket-to-timesheet gap.",
    readTime: "10 min read",
    date: "06 Oct 2026",
    author: { name: "Keyur Mehta", role: "Product Strategy", avatar: "KM" },
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    slug: "managing-remote-teams-across-india-australia-gulf",
    category: "Remote work",
    title: "Managing distributed teams across India, Australia and the Gulf seamlessly",
    excerpt: "Solving midnight shift overlaps, Sunday–Thursday work weeks, and local holiday calendars without administrative chaos.",
    readTime: "8 min read",
    date: "02 Oct 2026",
    author: { name: "Tariq Al-Mansoor", role: "Operations Lead", avatar: "TM" },
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    slug: "idle-time-vs-private-time-why-the-difference-matters",
    category: "Productivity",
    title: "Idle time vs private time: why the distinction protects team morale",
    excerpt: "A coffee break isn't slacking, and a personal call isn't company time. How Deskmerit keeps both clearly and honestly separated.",
    readTime: "5 min read",
    date: "28 Sep 2026",
    author: { name: "Daniel Koch", role: "Senior Engineer", avatar: "DK" },
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    slug: "is-employee-monitoring-legal-in-australia-guide",
    category: "Legal",
    title: "Is employee monitoring legal in Australia? A plain-English guide",
    excerpt: "Navigating the NSW Workplace Surveillance Act 2005, 14-day written notice requirements, and the federal Privacy Act 1988.",
    readTime: "11 min read",
    date: "24 Sep 2026",
    author: { name: "Marcus Taylor", role: "Delivery Director", avatar: "MT" },
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORIES = [
  "All",
  "Productivity",
  "Time tracking",
  "IT services",
  "HR",
  "Integrations",
  "Remote work",
  "Legal",
] as const;

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const filtered = ARTICLES.filter((art) => {
    const matchesCat = selectedCategory === "All" || art.category === selectedCategory;
    const matchesQuery =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const featured = ARTICLES[0];
  const secondary = [ARTICLES[1], ARTICLES[2]];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* SECTION 1: Deep Navy Hero with Search & Filters (Sqalible Screenshot 3) */}
        <section className="bg-[#0A0F1D] text-white pt-12 pb-20 border-b border-[#24305A] text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF5A36]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              Blogs
            </h1>
            <p className="text-sm sm:text-base text-[#9AA1B2] max-w-2xl mx-auto mb-8 leading-relaxed">
              Stay ahead of the curve with the latest insights, reviews, and benchmarks in workforce analytics, engineering billing, and privacy-first tracking.
            </p>

            {/* Search Input Bar */}
            <div className="max-w-xl mx-auto relative mb-8">
              <Search className="w-5 h-5 text-[#9AA1B2] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title, category, or topic..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#0F1730] border border-[#24305A] text-white placeholder-[#9AA1B2] text-xs sm:text-sm focus:outline-none focus:border-[#FF5A36] transition-colors"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#FF5A36] text-white font-extrabold shadow-sm"
                      : "bg-[#1A264F] text-[#9AA1B2] hover:text-white border border-[#2B3969]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: Recent Blog Posts (1 Large Featured + 2 Stacked Cards — Sqalible Screenshot 3) */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-1">
              Highlights
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730]">
              Recent blog posts
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
            {/* Big Featured Article (Left 7 Cols) */}
            <div
              onClick={() => setActiveArticle(featured)}
              className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#E6E2D8] hover:border-[#FF5A36] shadow-card hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-slate-100">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-[#4A5370] mb-3">
                  <span className="font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#FFE6DF] text-[#C2361A]">
                    {featured.category}
                  </span>
                  <span>·</span>
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors leading-tight mb-3">
                  {featured.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E6E2D8] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#0F1730] text-white font-bold text-xs flex items-center justify-center">
                    {featured.author.avatar}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0F1730] block">{featured.author.name}</span>
                    <span className="text-[10px] text-[#4A5370]">{featured.author.role}</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#FF5A36] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* 2 Stacked Horizontal Cards (Right 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {secondary.map((art) => (
                <div
                  key={art.id}
                  onClick={() => setActiveArticle(art)}
                  className="bg-white rounded-3xl p-6 border border-[#E6E2D8] hover:border-[#FF5A36] shadow-card hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between group flex-1"
                >
                  <div>
                    <div className="flex items-center gap-3 text-xs text-[#4A5370] mb-2">
                      <span className="font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#FFE6DF] text-[#C2361A] text-[10px]">
                        {art.category}
                      </span>
                      <span>·</span>
                      <span className="text-[11px]">{art.date}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors leading-snug mb-2">
                      {art.title}
                    </h4>
                    <p className="text-xs text-[#4A5370] line-clamp-2">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#E6E2D8] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#0F1730] text-white font-bold text-[10px] flex items-center justify-center">
                        {art.author.avatar}
                      </div>
                      <span className="text-xs font-medium text-[#0F1730]">{art.author.name}</span>
                    </div>
                    <span className="text-xs font-bold text-[#FF5A36] flex items-center gap-1">
                      Read →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 3: All Blog Posts 3-Column Grid (Sqalible Screenshot 3) */}
          <div>
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730]">
                All Blog Posts
              </h2>
              <p className="text-xs text-[#4A5370] mt-1">
                Showing {filtered.length} articles in {selectedCategory}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setActiveArticle(post)}
                  className="bg-white rounded-3xl p-6 border border-[#E6E2D8] hover:border-[#FF5A36] shadow-card hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-full h-44 rounded-2xl overflow-hidden mb-4 bg-slate-100">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-[#4A5370] mb-2">
                      <span className="font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#FFE6DF] text-[#C2361A] text-[9px]">
                        {post.category}
                      </span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-xs text-[#4A5370] line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E6E2D8] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#0F1730] text-white font-bold text-[10px] flex items-center justify-center">
                        {post.author.avatar}
                      </div>
                      <span className="text-xs font-medium text-[#0F1730]">{post.author.name}</span>
                    </div>
                    <span className="text-xs font-bold text-[#FF5A36] flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Dedicated Article Reader Modal (Sqalible Screenshot 4 Architecture) */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 bg-[#0A0F1D]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <div className="bg-[#FFFFFF] rounded-3xl max-w-4xl w-full border border-[#E6E2D8] shadow-2xl overflow-hidden my-8 max-h-[90vh] overflow-y-auto">
              {/* Header Banner */}
              <div className="bg-[#0A0F1D] text-white p-8 sm:p-12 relative">
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="absolute right-6 top-6 p-2 rounded-full bg-[#1A264F] hover:bg-[#FF5A36] text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="max-w-2xl space-y-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#FF5A36]/20 text-[#FF5A36] border border-[#FF5A36]/30">
                    {activeArticle.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {activeArticle.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-[#9AA1B2] pt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#FF5A36] text-white font-black text-xs flex items-center justify-center">
                        {activeArticle.author.avatar}
                      </div>
                      <span className="text-white font-medium">{activeArticle.author.name}</span>
                    </div>
                    <span>·</span>
                    <span>{activeArticle.date}</span>
                    <span>·</span>
                    <span>{activeArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Body Content & Sidebar */}
              <div className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Article Narrative */}
                <div className="lg:col-span-8 space-y-6 text-sm text-[#0F1730] leading-relaxed">
                  <p className="text-base font-semibold text-[#4A5370]">
                    {activeArticle.excerpt}
                  </p>

                  <div className="p-5 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] block">
                      Executive Summary
                    </span>
                    <p className="text-xs text-[#4A5370]">
                      Automatic task-level time capture with zero keystroke logging improves client invoice realization by 18% while maintaining full GDPR & DPDP compliance.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F1730]">
                    Why Legacy Spyware Destroys Engineering Productivity
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                    When monitoring software covertly records screen snapshots or tracks individual keypresses, developers alter their natural workflow. Research indicates that engineers subjected to invasive tracking commit up to 24% less code and experience heightened attrition.
                  </p>

                  <h3 className="text-xl font-bold text-[#0F1730]">
                    How Trust-First Architecture Resolves the Utilization Gap
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                    Deskmerit bridges the divide between PM tools (Jira, Azure DevOps) and client invoicing. Because time is logged against verifiable ticket IDs rather than arbitrary activity meters, teams defend every hour without compromising personal dignity.
                  </p>

                  <div className="pt-4 border-t border-[#E6E2D8] flex items-center justify-between text-xs text-[#4A5370]">
                    <span>Share this insight:</span>
                    <div className="flex items-center gap-3">
                      <button className="p-2 rounded-lg bg-[#F7F4EE] hover:bg-[#FFE6DF] text-[#0F1730]">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg bg-[#F7F4EE] hover:bg-[#FFE6DF] text-[#0F1730]">
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right: Sticky Sidebar Highlights & CTA (Sqalible Screenshot 4) */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Highlights Card */}
                  <div className="p-6 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F1730]">
                      Article Highlights
                    </h4>
                    <ul className="space-y-2 text-xs text-[#4A5370]">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#12B886] shrink-0 mt-0.5" />
                        <span>Zero keystroke or webcam tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#12B886] shrink-0 mt-0.5" />
                        <span>Direct Jira & Azure DevOps ticket linkage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#12B886] shrink-0 mt-0.5" />
                        <span>DPDP Act 2023 & GDPR aligned architecture</span>
                      </li>
                    </ul>
                  </div>

                  {/* Dark CTA Box (Sqalible Screenshot 4) */}
                  <div className="p-6 rounded-2xl bg-[#0F1730] border border-[#24305A] text-white space-y-4">
                    <h4 className="text-base font-bold text-white">
                      Ready to Modernise Your Workforce?
                    </h4>
                    <p className="text-xs text-[#9AA1B2] leading-relaxed">
                      Deploy Deskmerit in under 10 minutes. Includes free 14-day trial with full feature parity.
                    </p>
                    <Link
                      to="/signup"
                      className="block w-full py-2.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-xs text-center shadow-md hover:shadow-glow-ember transition-all"
                    >
                      Start Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Editorial & Research FAQs"
          category="FAQS"
          helpTitle="Looking for Specific Whitepapers?"
          helpDescription="Our research team produces statutory payroll compliance playbooks, remote productivity benchmarks, and employee privacy frameworks."
          customFaqs={[
            {
              q: "Who conducts the workforce research published on the Deskmerit blog?",
              a: "Our research is authored by in-house engineering leads, organizational psychologists, and labor compliance experts, drawing on anonymized aggregate telemetry from over 100,000 tracked engineering hours."
            },
            {
              q: "How often are statutory payroll and monitoring regulations updated?",
              a: "We publish updated regional guidance within 48 hours of legislative updates in India (DPDP Act), Australia (NSW Workplace Surveillance), and the European Union (GDPR & AI Act)."
            },
            {
              q: "Can companies republish or cite Deskmerit research benchmarks?",
              a: "Yes. All whitepapers and data visualizations are licensed under Creative Commons (CC BY 4.0) with standard attribution and link to deskmerit.com."
            },
            {
              q: "How can industry practitioners submit a guest contribution?",
              a: "Send your pitch or draft outline to editorial@deskmerit.com. We prioritize practitioner-led case studies on asynchronous work, engineering utilization, and transparent management."
            }
          ]}
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
