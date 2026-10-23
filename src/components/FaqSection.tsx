import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { faqs as defaultFaqs } from "../data/home";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqSectionProps {
  title?: string;
  pretitle?: string;
  faqs?: FaqItem[];
  className?: string;
  containerClassName?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardButtonText?: string;
  cardButtonHref?: string;
}

export function FaqSection({
  title = "Frequently Asked Questions",
  pretitle = "Frequently Asked Questions",
  faqs = defaultFaqs,
  className = "bg-white py-16 md:py-24",
  containerClassName = "mx-auto max-w-7xl px-6",
  cardTitle = "Need Help Choosing the Right HRMS Solution?",
  cardDescription = "Build smarter with AI-powered hiring, attendance, payroll compliance, and enterprise workflows tailored to your business.",
  cardButtonText = "Book a demo",
  cardButtonHref = "/contact"
}: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  const isDefaultTitle = title === "Frequently Asked Questions";

  // Generate structured JSON-LD FAQPage schema for SEO and accessibility
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className={className} aria-labelledby="faq-title">
      {/* JSON-LD Structured Data Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={containerClassName}>
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 text-left">
          {pretitle && (
            <p className="pretitle text-primary mb-2">
              {pretitle}
            </p>
          )}
          <h2 id="faq-title" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            {isDefaultTitle ? (
              <>
                Everything you need to know about <span className="text-primary">Sqalible</span>
              </>
            ) : (
              title
            )}
          </h2>
        </div>

        {/* 2-Column Split: Left Promo Card + Right Underlined Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Branded Gradient Promo Card */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-none bg-gradient-to-br from-[#06151B] via-[#052930] to-[#044841] p-8 sm:p-10 text-white shadow-xl border border-teal-500/20 flex flex-col justify-between min-h-[460px] lg:min-h-[500px]">
            {/* Ambient Graphic Waves / Sweeping Concentric Arcs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Ambient corner glows for rich depth */}
              <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-teal-400/20 blur-3xl pointer-events-none" />
              <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-emerald-500/15 blur-2xl pointer-events-none" />

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 450 560"
                preserveAspectRatio="xMaxYMax slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="faqArcStroke" x1="1" y1="1" x2="0.1" y2="0.2">
                    <stop offset="0%" stopColor="#5EEAD4" stopOpacity="1" />
                    <stop offset="35%" stopColor="#2DD4BF" stopOpacity="0.85" />
                    <stop offset="70%" stopColor="#14B8A6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#044E48" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                <g>
                  {Array.from({ length: 24 }, (_, i) => {
                    const rx = 50 + i * 16;
                    const ry = 75 + i * 22;
                    const cx = 450;
                    const cy = 520;

                    // Angles: 186 deg (bottom) to 82 deg (top-right)
                    const radStart = (186 * Math.PI) / 180;
                    const radEnd = (82 * Math.PI) / 180;

                    const startX = cx + rx * Math.cos(radStart);
                    const startY = cy - ry * Math.sin(radStart);
                    const endX = cx + rx * Math.cos(radEnd);
                    const endY = cy - ry * Math.sin(radEnd);

                    const strokeWidth = i % 4 === 0 ? 1.4 : 1.0;
                    const opacity = Math.min(0.85, 0.22 + (i / 24) * 0.58);

                    return (
                      <path
                        key={i}
                        d={`M ${startX.toFixed(1)} ${startY.toFixed(1)} A ${rx.toFixed(1)} ${ry.toFixed(1)} 0 0 1 ${endX.toFixed(1)} ${endY.toFixed(1)}`}
                        stroke="url(#faqArcStroke)"
                        strokeWidth={strokeWidth}
                        strokeOpacity={opacity}
                        strokeLinecap="round"
                      />
                    );
                  })}
                </g>
              </svg>
            </div>

            {/* Card Content Top */}
            <div className="relative z-10">
              <div className="mb-8">
                <Logo inverted />
              </div>
              <h3 className="text-2xl sm:text-[28px] font-extrabold text-white leading-tight mb-4">
                {cardTitle}
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-sm">
                {cardDescription}
              </p>
            </div>

            {/* Card Content Bottom */}
            <div className="relative z-10 mt-8 pt-6">
              <Link
                to={cardButtonHref}
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-bold text-[#0A1118] shadow-md transition-all duration-200 hover:bg-neutral-100 hover:shadow-lg hover:scale-105 active:scale-[0.98]"
              >
                {cardButtonText}
              </Link>
            </div>
          </div>

          {/* Right Underlined Accordions */}
          <div className="lg:col-span-7 divide-y divide-neutral-300 border-t border-neutral-300">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q} className="py-5 sm:py-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-header-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between text-left font-bold text-base sm:text-lg text-neutral-900 hover:text-primary transition-colors cursor-pointer gap-4 group"
                  >
                    <span className="pr-2 group-hover:text-primary transition-colors leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`text-2xl sm:text-3xl font-light shrink-0 leading-none select-none transition-colors ${
                        isOpen ? "text-primary" : "text-neutral-500 group-hover:text-primary"
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-header-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3.5 pr-6 sm:pr-10 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}