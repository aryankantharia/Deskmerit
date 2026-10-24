import React, { useState } from "react";
import { ChevronDown, Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function DeskmeritFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Deskmerit?",
      a: "Deskmerit is automatic time tracking and productivity software for teams. A light desktop agent records time on apps, websites and tasks, then turns it into attendance, billable hours and productivity reports — without keystroke logging, webcam feeds or covert surveillance.",
    },
    {
      q: "Does Deskmerit record keystrokes or use the webcam?",
      a: "No. Deskmerit never captures keystroke content, webcam video or audio, under any configuration. Idle detection uses only whether input happened, not what was typed.",
    },
    {
      q: "Are screenshots mandatory?",
      a: "No. Screenshots are off by default for every organisation. If an admin enables them, they are blurred by default and employees receive a separate notification and full transparency.",
    },
    {
      q: "Which operating systems are supported?",
      a: "Windows 10 & 11 (.exe / .msi), macOS 12+ (Apple silicon & Intel, notarised), and Linux (.deb, .rpm, AppImage) — with feature parity across all three platforms.",
    },
    {
      q: "Does it work offline?",
      a: "Yes. Tracking starts locally and instantly even without an internet connection. Sessions queue securely on the device and sync automatically when you are back online with zero data gaps.",
    },
    {
      q: "Can I use Deskmerit with my HRMS?",
      a: "Yes! Deskmerit is built directly into Sqalible HRMS as a 1-click native add-on (unified login, directory provisioning, single invoice). Other HRMS systems can connect seamlessly through our versioned REST API.",
    },
    {
      q: "How long is the free trial?",
      a: "14 days with every feature included on all tiers. No credit card is required. After 14 days, your workspace automatically moves to the free Starter plan (up to 5 users) unless you choose a paid plan.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EE] border-b border-[#E6E2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
              Questions, answered honestly.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A36] hover:underline shrink-0"
          >
            Can't find what you need? Talk to a human <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E6E2D8] overflow-hidden transition-all shadow-subtle"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-base text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <span className="w-7 h-7 rounded-full bg-[#F7F4EE] flex items-center justify-center shrink-0 text-[#0F1730]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#4A5370] leading-relaxed border-t border-[#E6E2D8]/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
