import React from "react";
import { Quote } from "lucide-react";

export function DeskmeritTestimonials() {
  const testimonials = [
    {
      quote:
        "“We closed the 357-hour gap between Jira tasks and client invoices in our first month. The delivery team never has to fill a Friday timesheet from memory again.”",
      name: "Ananya Sharma",
      role: "VP Engineering",
      company: "Cognitive Scale · Pune",
    },
    {
      quote:
        "“Our engineers didn't want another surveillance tracker. Deskmerit's privacy promise — no keystrokes, no webcams, employee-first view — won over the entire team.”",
      name: "Marcus Taylor",
      role: "Delivery Director",
      company: "Apex Digital · Sydney",
    },
    {
      quote:
        "“Running teams between Dubai and Riyadh used to mean constant attendance mismatches across different work weeks. Deskmerit solved Sunday–Thursday shifts out of the box.”",
      name: "Tariq Al-Mansoor",
      role: "Head of Operations",
      company: "Gulf Tech Logistics · Dubai",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
            What early teams say
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
            Trusted by distributed engineering & delivery teams.
          </h2>
          <p className="text-sm text-[#4A5370] mt-2 font-human italic text-base">
            Every hour, honestly accounted for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F7F4EE] rounded-2xl p-7 border border-[#E6E2D8] hover:border-[#FF5A36] transition-all flex flex-col justify-between shadow-subtle"
            >
              <div>
                <Quote className="w-6 h-6 text-[#FF5A36] mb-4 opacity-70" />
                <p className="text-sm text-[#0F1730] leading-relaxed font-medium mb-6">
                  {t.quote}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6E2D8] flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FFE6DF] text-[#C2361A] font-bold text-xs flex items-center justify-center">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F1730]">{t.name}</div>
                  <div className="text-[11px] text-[#4A5370]">{t.role} · {t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
