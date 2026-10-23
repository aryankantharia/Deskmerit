import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon, SparklesIcon, ClockIcon, LayersIcon } from "lucide-react";
import { recommenderIndustries, recommenderNeeds, getRecommendation } from "../data/recommender";

const ease = [0.23, 1, 0.32, 1] as const;

export function Recommender() {
  const [industry, setIndustry] = useState<string>("Technology & SaaS");
  const [need, setNeed] = useState<string>("Web App Development");
  const [step, setStep] = useState<1 | 2>(1);

  const result = getRecommendation(industry, need);

  const selectIndustry = (ind: string) => {
    setIndustry(ind);
    setStep(2);
  };

  const selectNeed = (n: string) => {
    setNeed(n);
  };

  return (
    <section id="ai-selector" className="bg-neutral-900 py-20 md:py-24" aria-labelledby="recommender-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto w-full text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/30 bg-teal-950/60 px-3.5 py-1 text-caption font-semibold text-teal-300">
            <SparklesIcon size={13} />
            AI Service Selector
          </span>
          <h2 id="recommender-title" className="mt-4 text-h1 text-white md:text-[38px] md:leading-[46px]">
            Get Personalized Service Recommendations in Seconds
          </h2>
          <p className="mt-3 text-body1 text-neutral-400">
            Answer 2 quick questions, and let our recommendation engine match your specific industry and technical needs with the right architecture.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Question / Selection Column */}
          <div className="lg:col-span-6">
            <div className="rounded-none border border-neutral-700/80 bg-neutral-800/80 p-6 sm:p-8 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-neutral-700 pb-4">
                <span className="text-body2 font-semibold text-white">
                  <span className="text-teal-400">Question {step} of 2:</span>{" "}
                  {step === 1 ? "What is your industry?" : "What is your primary business need?"}
                </span>
                {step === 2 && (
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1 text-caption font-medium text-neutral-400 hover:text-white transition-colors"
                  >
                    <ArrowLeftIcon size={13} />
                    Back
                  </button>
                )}
              </div>

              <div className="mt-6">
                <AnimatePresence mode="wait">
                  {step === 1 ? (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18, ease }}
                      className="grid grid-cols-2 gap-2.5 sm:grid-cols-2"
                    >
                      {recommenderIndustries.map((ind) => {
                        const isSelected = industry === ind;
                        return (
                          <button
                            key={ind}
                            type="button"
                            onClick={() => selectIndustry(ind)}
                            className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-body2 transition-all duration-150 ${
                              isSelected
                                ? "border-primary bg-primary text-white font-medium shadow-sm"
                                : "border-neutral-700 bg-neutral-800/60 text-neutral-300 hover:border-neutral-500 hover:text-white"
                            }`}
                          >
                            <span>{ind}</span>
                            {isSelected && <CheckIcon size={16} className="text-white shrink-0 ml-1" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18, ease }}
                      className="grid grid-cols-1 gap-2.5 sm:grid-cols-2"
                    >
                      {recommenderNeeds.map((nd) => {
                        const isSelected = need === nd;
                        return (
                          <button
                            key={nd}
                            type="button"
                            onClick={() => selectNeed(nd)}
                            className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-body2 transition-all duration-150 ${
                              isSelected
                                ? "border-primary bg-primary text-white font-medium shadow-sm"
                                : "border-neutral-700 bg-neutral-800/60 text-neutral-300 hover:border-neutral-500 hover:text-white"
                            }`}
                          >
                            <span>{nd}</span>
                            {isSelected && <CheckIcon size={16} className="text-white shrink-0 ml-1" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {step === 2 && (
                <div className="mt-6 pt-4 border-t border-neutral-700 flex items-center justify-between">
                  <span className="text-caption text-neutral-400">
                    Selected Industry: <strong className="text-white">{industry}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-caption text-teal-400 hover:underline"
                  >
                    Change industry
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Real-time Recommendation Result Card */}
          <div className="lg:col-span-6">
            <div className="rounded-none border border-teal-500/40 bg-gradient-to-br from-neutral-800 via-neutral-850 to-neutral-900 p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 px-3 py-1 text-caption font-semibold text-teal-300">
                  <SparklesIcon size={12} />
                  Tailored For {industry}
                </span>
                <span className="rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-caption font-medium text-neutral-300">
                  {result.badge}
                </span>
              </div>

              <h3 className="mt-4 text-h2 text-white">
                {result.primaryService}
              </h3>
              <p className="mt-2 text-body2 text-neutral-300 leading-relaxed">
                {result.description}
              </p>

              <div className="mt-6 border-t border-neutral-700/80 pt-5">
                <p className="text-caption font-semibold uppercase tracking-wider text-teal-300 flex items-center gap-1.5">
                  <LayersIcon size={14} /> Key Deliverables & Modules:
                </p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {result.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-body2 text-neutral-200">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
                        ✓
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-700/80 pt-5">
                <div className="flex items-center gap-2 text-caption text-neutral-300">
                  <ClockIcon size={14} className="text-teal-400" />
                  <span>Est. Timeline: <strong className="text-white">{result.timeline}</strong></span>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {result.suggestedStack.map((st) => (
                    <span key={st} className="rounded bg-neutral-700/60 px-2 py-0.5 text-[11px] font-mono text-neutral-300">
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href="/pricing"
                  className="flex-1 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-5 text-body2 font-semibold text-white hover:bg-primary-hover transition-colors shadow-xs"
                >
                  Explore Pricing Plans
                  <ArrowRightIcon size={15} />
                </a>
                <a
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-neutral-600 px-5 text-body2 font-medium text-white hover:bg-neutral-800 transition-colors"
                >
                  Book a demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}