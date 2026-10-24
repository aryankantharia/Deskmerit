import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PulseTrackHeader } from "../components/PulseTrackHeader";
import { PulseTrackFooter } from "../components/PulseTrackFooter";
import { BookOpen, Clock, ArrowRight, Mail, Search, Check } from "lucide-react";

interface Article {
  id: number;
  slug: string;
  category: "Productivity" | "IT services" | "Time tracking" | "HR" | "Integrations" | "Remote work" | "Product" | "Law";
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "best-employee-monitoring-software-india-2026",
    category: "Productivity",
    title: "Best employee monitoring software in India (2026): an honest comparison",
    excerpt: "We compared seven tools on pricing in rupees, DPDP readiness, attendance and Jira support — including our own, with its limits.",
    readTime: "12 min read",
    date: "20 Oct 2026",
    featured: true,
  },
  {
    id: 2,
    slug: "how-to-track-employee-productivity-without-micromanaging",
    category: "Productivity",
    title: "How to track employee productivity without micromanaging",
    excerpt: "Why keystroke loggers destroy trust, and how outcome-based activity scoring delivers real clarity.",
    readTime: "8 min read",
    date: "18 Oct 2026",
  },
  {
    id: 3,
    slug: "billable-utilisation-what-is-a-good-rate-for-it-services",
    category: "IT services",
    title: "Billable utilisation: what’s a good rate for IT services firms?",
    excerpt: "Benchmarks across junior devs, senior architects, and team leads to keep margins above 35%.",
    readTime: "7 min read",
    date: "15 Oct 2026",
  },
  {
    id: 4,
    slug: "timesheets-vs-automatic-time-tracking-accuracy",
    category: "Time tracking",
    title: "Timesheets vs automatic time tracking: which is more accurate?",
    excerpt: "The cognitive cost of filling timesheets on Friday from memory versus background passive tracking.",
    readTime: "6 min read",
    date: "12 Oct 2026",
  },
  {
    id: 5,
    slug: "how-to-introduce-time-tracking-to-your-team-with-template",
    category: "HR",
    title: "How to introduce time tracking to your team (with an announcement template)",
    excerpt: "A step-by-step communication plan and copy-paste email template that addresses surveillance anxiety.",
    readTime: "9 min read",
    date: "10 Oct 2026",
  },
  {
    id: 6,
    slug: "jira-time-tracking-native-vs-automatic-tools-compared",
    category: "Integrations",
    title: "Jira time tracking: native vs automatic tools compared",
    excerpt: "How Tracker Plus connects personal access tokens directly to issue keys without manual worklogs.",
    readTime: "10 min read",
    date: "06 Oct 2026",
  },
  {
    id: 7,
    slug: "managing-remote-teams-across-india-australia-gulf",
    category: "Remote work",
    title: "Managing remote teams across India, Australia and the Gulf",
    excerpt: "Solving midnight boundaries, Sunday–Thursday shifts, and timezone fairness across distributed offices.",
    readTime: "8 min read",
    date: "02 Oct 2026",
  },
  {
    id: 8,
    slug: "idle-time-vs-private-time-why-the-difference-matters",
    category: "Product",
    title: "Idle time vs private time: why the difference matters",
    excerpt: "A coffee break isn't slacking and a personal call isn't company time. How to separate them honestly.",
    readTime: "5 min read",
    date: "28 Sep 2026",
  },
  {
    id: 9,
    slug: "is-employee-monitoring-legal-in-australia-plain-english-guide",
    category: "Law",
    title: "Is employee monitoring legal in Australia? A plain-English guide",
    excerpt: "NSW Workplace Surveillance Act 14-day written notice requirements and Privacy Act 1988 alignment.",
    readTime: "11 min read",
    date: "24 Sep 2026",
  },
  {
    id: 10,
    slug: "attendance-tracking-without-biometric-machines",
    category: "HR",
    title: "Attendance tracking without biometric machines",
    excerpt: "Why computer presence signals and calendar events eliminate hardware turnstile maintenance bottlenecks.",
    readTime: "7 min read",
    date: "20 Sep 2026",
  },
  {
    id: 11,
    slug: "desktime-vs-hubstaff-vs-pulsetrack-breakdown",
    category: "Time tracking",
    title: "DeskTime vs Hubstaff vs PulseTrack: 2026 comparison",
    excerpt: "An objective feature-by-feature evaluation of pricing, PM task integration, and surveillance philosophy.",
    readTime: "9 min read",
    date: "16 Sep 2026",
  },
  {
    id: 12,
    slug: "how-staffing-firms-stop-revenue-leakage-from-unlogged-hours",
    category: "IT services",
    title: "How staffing firms can stop revenue leakage from unlogged hours",
    excerpt: "Reclaiming the 35% of engineering work that slips into non-billable gaps during client projects.",
    readTime: "8 min read",
    date: "12 Sep 2026",
  },
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const categories = [
    "All",
    "Productivity",
    "IT services",
    "Time tracking",
    "HR",
    "Integrations",
    "Remote work",
    "Product",
    "Law",
  ];

  const featured = ARTICLES.find((a) => a.featured)!;
  const filteredArticles = ARTICLES.filter((a) => {
    if (activeCategory === "All") return true;
    return a.category === activeCategory;
  });

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <PulseTrackHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">Blog</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] mb-4 shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#FF5A36]" />
            <span>The PulseTrack Blog</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-4">
            Better work weeks, backed by data.
          </h1>

          <p className="text-base sm:text-lg text-[#4A5370] max-w-2xl mx-auto font-normal">
            Practical ideas on productivity, remote work, attendance and billing — for managers, HR and finance teams.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 bg-[#FFFFFF] rounded-2xl border border-[#E6E2D8] max-w-fit mx-auto shadow-subtle">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActiveCategory(c)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === c
                    ? "bg-[#0F1730] text-white shadow-sm"
                    : "text-[#4A5370] hover:text-[#0F1730]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article Card */}
        {activeCategory === "All" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card hover:border-[#FF5A36] transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FFE6DF] text-[#C2361A]">
                    Featured · Comparison
                  </span>
                  <span className="text-xs text-[#4A5370] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featured.readTime} · {featured.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F1730] leading-snug">
                  {featured.title}
                </h2>

                <p className="text-sm sm:text-base text-[#4A5370] leading-relaxed">
                  {featured.excerpt}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A36] hover:underline">
                    Read complete breakdown <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#F7F4EE] rounded-2xl p-6 border border-[#E6E2D8] text-xs text-[#4A5370] space-y-2">
                <div className="font-bold text-[#0F1730] text-sm">Key comparison factors:</div>
                <div>• INR pricing & GST compliance</div>
                <div>• Digital Personal Data Protection (DPDP) Act rules</div>
                <div>• Jira & Azure DevOps ticket synchronization</div>
                <div>• Keystroke & webcam privacy policies compared</div>
              </div>
            </div>
          </div>
        )}

        {/* All Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF] px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-[#4A5370] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-[#0F1730] leading-snug mb-2 hover:text-[#FF5A36] transition-colors cursor-pointer">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#4A5370] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E2D8]/60 flex items-center justify-between text-xs text-[#4A5370]">
                  <span>{article.date}</span>
                  <span className="font-bold text-[#0F1730] hover:text-[#FF5A36] flex items-center gap-1 cursor-pointer">
                    Read article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription Strip */}
        <section className="bg-[#0F1730] text-white py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              One useful email a fortnight.
            </h3>
            <p className="text-xs sm:text-sm text-[#9AA1B2]">
              Productivity research, templates and product news. No spam, ever.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#12B886]/20 border border-[#12B886] text-xs text-[#12B886] flex items-center justify-center gap-2 max-w-md mx-auto font-semibold">
                <Check className="w-4 h-4" /> You're on the list! First issue arriving next Tuesday.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubscribed(true);
                }}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto pt-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email..."
                  className="w-full sm:flex-1 px-4 py-3 rounded-[12px] bg-[#172348] border border-[#24305A] text-xs text-white placeholder-[#9AA1B2] focus:outline-none focus:border-[#FF5A36]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-[#FF5A36] hover:bg-[#E94A27] text-[#0F1730] font-bold text-xs transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <PulseTrackFooter />
    </div>
  );
}
