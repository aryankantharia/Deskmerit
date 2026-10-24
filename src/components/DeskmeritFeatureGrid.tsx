import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FeatureCard {
  title: string;
  href: string;
  description: string;
  tag: string;
  image: string;
  highlight?: boolean;
}

export function DeskmeritFeatureGrid() {

  const features: FeatureCard[] = [
    {
      title: "Tracker Plus for Jira & DevOps",
      href: "/features/tracker-plus",
      description:
        "Start tracking directly from the PM task itself. Automatic bi-directional work log sync with zero second login.",
      tag: "Flagship ★",
      image:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
      highlight: true,
    },
    {
      title: "Automatic Time Tracking",
      href: "/features/automatic-time-tracking",
      description:
        "Tracks computer time in the background from the moment the agent starts. No manual timers to forget.",
      tag: "Zero-effort",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Productivity & App Analytics",
      href: "/features/productivity-tracking",
      description:
        "App, URL, and document-title scoring per person, team, and organization with role-aware rubrics.",
      tag: "Role-aware",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Attendance & Daily Presence",
      href: "/features/attendance-tracking",
      description:
        "Daily presence from tracked computer work, calendar meetings, and logged offline time. Zero invasive biometrics.",
      tag: "No biometrics",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Project Time & Billing",
      href: "/features/project-time-tracking",
      description:
        "Rates per person and project, defensible cost totals, budget-versus-actual alerts, and client invoices.",
      tag: "Defensible revenue",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Shifts & Leave Scheduling",
      href: "/features/shift-scheduling",
      description:
        "Overnight shift templates crossing midnight, late and overtime flags, leave requests, and a team calendar.",
      tag: "Rosters & holiday",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Live Team Status Feed",
      href: "/features/live-status",
      description:
        "Real-time activity pulse updated every 60 seconds so managers see active tasks without micromanaging.",
      tag: "60s refresh",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Document Tracking",
      href: "/features/document-tracking",
      description:
        "Window title and document verification without keystroke logging, clipboard sniffing, or webcam recording.",
      tag: "Privacy-first",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E6E2D8]/80 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title and Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] mb-3">
              Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F1730] tracking-[-0.03em] leading-[1.12]">
              Everything you'd expect.
              <span className="block text-[#0F1730] mt-1">
                Plus one click that does three jobs.
              </span>
            </h2>
          </div>

          {/* Top Right: View all features CTA (no arrow inside per request) */}
          <div className="shrink-0 mb-1">
            <Link
              to="/features"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white border border-slate-300 hover:border-[#0F1730] text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] shadow-xs hover:shadow-sm transition-all"
            >
              <span>View all features</span>
            </Link>
          </div>
        </div>

        {/* Continuous Auto-Scrolling Cards Marquee (Screenshot Reference) */}
        <div className="relative">
          {/* Subtle Left & Right Edge Gradient Fade Masks */}
          <div className="absolute left-0 top-0 bottom-6 w-10 sm:w-24 bg-gradient-to-r from-[#FBF9F5] via-[#FBF9F5]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-6 w-10 sm:w-24 bg-gradient-to-l from-[#FBF9F5] via-[#FBF9F5]/80 to-transparent z-10 pointer-events-none" />

          {/* Horizontally Auto-Scrolling Marquee Container */}
          <div className="flex overflow-hidden py-2 select-none">
            <div className="features-marquee flex gap-6 sm:gap-7 shrink-0 pb-6 pt-2">
              {[...features, ...features].map((item, idx) => (
                <div
                  key={`${item.title}-${idx}`}
                  className={`group shrink-0 w-[300px] sm:w-[350px] lg:w-[380px] rounded-3xl p-5 sm:p-6 bg-white transition-all duration-300 flex flex-col justify-between shadow-subtle hover:shadow-card hover:-translate-y-1.5 ${
                    item.highlight
                      ? "border-2 border-[#FF5A36] ring-4 ring-[#FF5A36]/10"
                      : "border border-slate-200/90 hover:border-slate-300"
                  }`}
                >
                  <div>
                    {/* Framed Feature Image with Floating Pill Tag */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 mb-5 border border-slate-100 shadow-xs">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1730]/40 via-transparent to-transparent opacity-60" />

                      {/* Floating Pill Tag */}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold shadow-sm backdrop-blur-md ${
                            item.highlight
                              ? "bg-[#FFE6DF]/95 text-[#C2361A] border border-[#FFD4CA]"
                              : "bg-white/95 text-[#0F1730] border border-slate-200/80"
                          }`}
                        >
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl font-extrabold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2.5">
                      {item.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Pill Action Button */}
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 bg-white hover:bg-[#0F1730] hover:text-white hover:border-[#0F1730] text-xs font-bold text-[#0F1730] shadow-xs transition-all w-max group/btn"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
