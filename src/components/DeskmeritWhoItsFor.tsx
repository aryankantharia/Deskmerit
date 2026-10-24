import React from "react";
import { Link } from "react-router-dom";
import { Code2, Users2, Briefcase, PhoneCall, Calculator, Compass, ArrowRight } from "lucide-react";

export function DeskmeritWhoItsFor() {
  const industries = [
    {
      title: "IT services",
      href: "/solutions/it-services",
      tagline: "Prove every billable hour",
      description: "Direct Jira and Azure DevOps ticket links mean clients never dispute an engineering invoice.",
      icon: Code2,
      metrics: "94% billable capture",
    },
    {
      title: "Staff augmentation",
      href: "/solutions/staff-augmentation",
      tagline: "One tracker across all clients",
      description: "Engineers connect each client's Jira token securely without crossing confidential data boundaries.",
      icon: Users2,
      metrics: "Multi-tenant tokens",
    },
    {
      title: "Agencies",
      href: "/solutions/agencies",
      tagline: "Know which clients are profitable",
      description: "Spot retainer creep and over-servicing in real time before monthly invoices go out.",
      icon: Briefcase,
      metrics: "Budget-vs-actual alerts",
    },
    {
      title: "BPO & contact centres",
      href: "/solutions/bpo",
      tagline: "Shift adherence and attendance",
      description: "Fair overnight shift logic crossing midnight, with clear tolerances for late starts and breaks.",
      icon: PhoneCall,
      metrics: "Roster compliance",
    },
    {
      title: "Consulting & accounting",
      href: "/solutions/professional-services",
      tagline: "Capture time you give away",
      description: "Automatic meeting and document title logging stops lost 6-minute billing increments at 7pm.",
      icon: Calculator,
      metrics: "Defensible proof",
    },
    {
      title: "Remote & hybrid teams",
      href: "/solutions/remote-teams",
      tagline: "Outcomes, not webcams",
      description: "Accurate attendance computed in each person's own timezone without invasive screen micromanagement.",
      icon: Compass,
      metrics: "Trust-first tracking",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
            Who it's for
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
            Built for teams that bill by the hour —{" "}
            <span className="block text-[#4A5370]">or prove their hours.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A5370] mt-4">
            Designed for distributed knowledge teams across software engineering, consulting, client delivery, and professional services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.title}
                to={ind.href}
                className="group bg-[#F7F4EE] hover:bg-[#FFFFFF] rounded-2xl p-7 border border-[#E6E2D8] hover:border-[#FF5A36] hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFFFFF] group-hover:bg-[#FFE6DF] text-[#0F1730] group-hover:text-[#C2361A] flex items-center justify-center transition-colors border border-[#E6E2D8]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFFFFF] text-[#4A5370] border border-[#E6E2D8]">
                      {ind.metrics}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors">
                    {ind.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#FF5A36] mt-0.5 mb-2">
                    {ind.tagline}
                  </div>
                  <p className="text-xs text-[#4A5370] leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6E2D8]/60 flex items-center justify-between text-xs font-semibold text-[#0F1730] group-hover:text-[#FF5A36]">
                  <span>Explore solution</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
