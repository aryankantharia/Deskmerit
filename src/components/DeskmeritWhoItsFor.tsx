import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

type SolutionTab = "industry" | "size" | "team" | "region";

interface SolutionCard {
  title: string;
  badge: string;
  description: string;
  image: string;
  href: string;
}

export function DeskmeritWhoItsFor() {
  const [activeTab, setActiveTab] = useState<SolutionTab>("industry");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const solutionsData: Record<SolutionTab, SolutionCard[]> = {
    industry: [
      {
        title: "Software & IT Services",
        badge: "High-volume hiring",
        description:
          "Direct Jira and Azure DevOps ticket links mean clients never dispute an engineering sprint invoice.",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
        href: "/solutions/it-services",
      },
      {
        title: "Manufacturing",
        badge: "Shifts & biometrics",
        description:
          "Shift scheduling, biometric attendance integration, and geofencing across every plant and factory floor.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        href: "/features/shift-scheduling",
      },
      {
        title: "Healthcare",
        badge: "Credentials",
        description:
          "Shift rosters, credential verification, and audit-ready statutory compliance without manual paperwork.",
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
        href: "/solutions/staff-augmentation",
      },
      {
        title: "Retail",
        badge: "Store-level",
        description:
          "Store-level attendance, overtime calculation, and rapid shift swaps across multi-outlet retail chains.",
        image:
          "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
        href: "/features/attendance-tracking",
      },
    ],
    size: [
      {
        title: "Fast-Growing Startups (5-20)",
        badge: "Zero overhead",
        description:
          "Zero-friction desktop tracking that sets up in 10 minutes so founders can focus on product traction.",
        image:
          "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        href: "/solutions/startups",
      },
      {
        title: "Scaleups (20-200)",
        badge: "Department budgets",
        description:
          "Cross-department analytics, timesheet sign-offs, and automated budget burn alerts before month-end.",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
        href: "/solutions/scaleups",
      },
      {
        title: "Enterprise & Regulated (200+)",
        badge: "SOC2 & Compliance",
        description:
          "Strict employee privacy controls, role-based access, SSO, and full compliance reporting.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        href: "/security",
      },
      {
        title: "Multi-Entity Groups",
        badge: "Cross-subsidiary",
        description:
          "Consolidated multi-currency reporting and org-wide visibility across global operating entities.",
        image:
          "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
        href: "/pricing",
      },
    ],
    team: [
      {
        title: "Engineering & QA",
        badge: "Sprint sync",
        description:
          "Auto-log time to Jira issues, Azure DevOps boards, and Git branches with zero manual entries.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        href: "/features/tracker-plus",
      },
      {
        title: "Consulting & Delivery",
        badge: "Defensible proof",
        description:
          "Prove exact hours worked with transparent, dispute-free audit trails for demanding enterprise clients.",
        image:
          "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
        href: "/solutions/it-services",
      },
      {
        title: "Remote & Hybrid Workers",
        badge: "Dignity-first",
        description:
          "Accurate attendance in each person's timezone with zero intrusive webcam or screen surveillance.",
        image:
          "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80",
        href: "/solutions/remote-teams",
      },
      {
        title: "Operations & HR",
        badge: "Payroll ready",
        description:
          "Approved timesheet hours flow straight into Sqalible HRMS and payroll without spreadsheet wrangling.",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
        href: "/hrms-add-on",
      },
    ],
    region: [
      {
        title: "India & South Asia",
        badge: "Statutory PF & ESI",
        description:
          "Native module with Sqalible HRMS for instant compliance with local labor and shift laws.",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
        href: "/hrms-add-on",
      },
      {
        title: "Australia & New Zealand",
        badge: "Fair Work Act",
        description:
          "Overtime thresholds, rest break monitoring, and compliant timesheets for ANZ engineering hubs.",
        image:
          "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=800&q=80",
        href: "/solutions/it-services",
      },
      {
        title: "Gulf & Middle East",
        badge: "WPS compliant",
        description:
          "Wage Protection System validation, prayer break scheduling, and cross-border project billing.",
        image:
          "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        href: "/pricing",
      },
      {
        title: "North America & UK",
        badge: "SOC2 & GDPR",
        description:
          "State labor wage parity, exempt vs non-exempt rules, and multi-tenant client billing.",
        image:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        href: "/security",
      },
    ],
  };

  const currentCards = solutionsData[activeTab];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E6E2D8]/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header: Tailored Architecture + Controls (Screenshot 3 Reference) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-6">
          <div className="max-w-3xl">
            <div className="text-[12px] font-bold uppercase tracking-wider text-[#12B886] mb-2.5">
              Tailored Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F1730] tracking-[-0.03em] leading-[1.12]">
              Solutions for Every Size, Industry & Region
            </h2>
            <p className="text-sm sm:text-base text-[#4A5370] mt-3 leading-relaxed">
              Pre-configured statutory compliance rules, role rubrics, and biometric policies tailored for your operating environment.
            </p>
          </div>

          {/* Right Navigation Controls (< View all >) */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={scrollLeft}
              className="w-10 h-10 rounded-full bg-white border border-slate-200/90 hover:border-[#0F1730] flex items-center justify-center text-[#0F1730] shadow-xs transition-colors"
              aria-label="Previous solution"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <Link
              to="/solutions"
              className="px-4 py-2 rounded-full bg-white border border-slate-200/90 hover:border-[#0F1730] text-xs font-bold text-[#0F1730] shadow-xs transition-colors"
            >
              View all
            </Link>
            <button
              type="button"
              onClick={scrollRight}
              className="w-10 h-10 rounded-full bg-white border border-slate-200/90 hover:border-[#0F1730] flex items-center justify-center text-[#0F1730] shadow-xs transition-colors"
              aria-label="Next solution"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills Row (Screenshot 3 Reference) */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-6 pt-1">
          <button
            type="button"
            onClick={() => setActiveTab("industry")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all shadow-xs shrink-0 ${
              activeTab === "industry"
                ? "bg-[#0F1730] text-white"
                : "bg-white border border-slate-200 text-[#0F1730] hover:border-slate-400"
            }`}
          >
            By industry
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("size")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all shadow-xs shrink-0 ${
              activeTab === "size"
                ? "bg-[#0F1730] text-white"
                : "bg-white border border-slate-200 text-[#0F1730] hover:border-slate-400"
            }`}
          >
            By company size
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("team")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all shadow-xs shrink-0 ${
              activeTab === "team"
                ? "bg-[#0F1730] text-white"
                : "bg-white border border-slate-200 text-[#0F1730] hover:border-slate-400"
            }`}
          >
            By team
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("region")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all shadow-xs shrink-0 ${
              activeTab === "region"
                ? "bg-[#0F1730] text-white"
                : "bg-white border border-slate-200 text-[#0F1730] hover:border-slate-400"
            }`}
          >
            By region
          </button>
        </div>

        {/* Cards Row (Screenshot 3 Reference: Dark Navy Cards + Top Photo & Pill Tag) */}
        <div
          ref={scrollContainerRef}
          className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 pt-2"
        >
          {currentCards.map((card) => (
            <Link
              key={card.title}
              to={card.href}
              className="group shrink-0 w-[290px] sm:w-[320px] lg:w-auto rounded-3xl overflow-hidden bg-[#0A1020] border border-slate-800 shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header with Floating Overlay Tag */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1020] via-transparent to-transparent opacity-80" />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-[#0A1020] backdrop-blur-md shadow-sm">
                      {card.badge}
                    </span>
                  </div>
                </div>

                {/* Card Content in Dark Theme */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#12B886] transition-colors mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Bottom Explore Link */}
              <div className="p-6 pt-0 border-t border-slate-800/80 mt-2 flex items-center justify-between text-xs font-bold text-[#12B886] group-hover:text-[#38D9A9]">
                <span>Explore</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
