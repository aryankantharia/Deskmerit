import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CheckIcon,
  MinusIcon,
  SparklesIcon,
  ShieldCheckIcon,
  LockIcon,
  ArrowRightIcon,
  SlidersIcon,
  HelpCircleIcon,
  ZapIcon
} from "lucide-react";
import { Button } from "./Button";
import {
  currencies,
  CurrencyCode,
  planCards,
  featureGroups,
  PlanCell
} from "../data/pricing";

export function PricingSection() {
  const [currencyCode, setCurrencyCode] = useState<CurrencyCode>("INR");
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");
  const [interviewsCount, setInterviewsCount] = useState<number>(40);
  const [mobilePlan, setMobilePlan] = useState<"starter" | "growth" | "enterprise">("growth");
  const [mobileViewMode, setMobileViewMode] = useState<"tabs" | "table">("tabs");

  const currency = currencies[currencyCode];
  const isAnnual = billingCycle === "annual";

  // Estimated AI add-on monthly cost
  const estimatedAiCost = Math.round(interviewsCount * currency.interviewRate);

  // Cell rendering for table
  const renderCell = (value: PlanCell) => {
    if (value === true) {
      return (
        <span
          className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 shadow-2xs"
          title="Included"
        >
          <CheckIcon size={14} strokeWidth={2.5} aria-hidden="true" />
          <span className="sr-only">Included</span>
        </span>
      );
    }
    if (value === false) {
      return (
        <span
          className="inline-flex h-6 w-6 items-center justify-center text-neutral-300"
          title="Not included"
        >
          <MinusIcon size={18} strokeWidth={2} aria-hidden="true" />
          <span className="sr-only">Not included</span>
        </span>
      );
    }
    return (
      <span className="inline-block rounded-xs bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-neutral-800">
        {value}
      </span>
    );
  };

  return (
    <section id="pricing" className="bg-[#FAF7F2] py-16 md:py-20" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* ========================================================= */}
        {/* TOP CONTROLS: Currency Switcher & Billing Cycle Toggle   */}
        {/* ========================================================= */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <p className="pretitle text-primary">Transparent Pricing</p>
          <h2 id="pricing-title" className="mt-2 text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-neutral-900 tracking-tight">
            Plans that scale with your workforce
          </h2>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-neutral-600">
            Start on pooled cloud hosting, or deploy dedicated regional infrastructure. Pay for AI interview and voice screening sessions only as you need them.
          </p>

          {/* Controls Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 bg-white p-2 sm:p-2.5 rounded-full border border-neutral-300 shadow-xs">
            {/* Currency Switcher */}
            <div className="flex items-center rounded-full bg-neutral-100 p-1">
              {(Object.keys(currencies) as CurrencyCode[]).map((code) => {
                const isSelected = currencyCode === code;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setCurrencyCode(code)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-neutral-900 text-white shadow-xs"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    {currencies[code].name}
                  </button>
                );
              })}
            </div>

            <div className="hidden sm:block h-6 w-px bg-neutral-200" />

            {/* Monthly / Annual Toggle */}
            <div className="flex items-center rounded-full bg-neutral-100 p-1">
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  !isAnnual
                    ? "bg-neutral-900 text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle("annual")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isAnnual
                    ? "bg-primary text-white shadow-xs"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                <span>Annual</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide ${
                  isAnnual ? "bg-white text-primary" : "bg-emerald-100 text-emerald-800"
                }`}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Micro-Trust Strip Directly Under Controls */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-600 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckIcon size={14} className="text-primary" />
              No credit card for trial
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckIcon size={14} className="text-primary" />
              Cancel anytime
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckIcon size={14} className="text-primary" />
              Free white-glove data migration
            </span>
            <span className="text-neutral-300">•</span>
            <span className="flex items-center gap-1.5">
              <CheckIcon size={14} className="text-primary" />
              14-day full feature access
            </span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3 PLAN CARDS ABOVE THE COMPARISON TABLE                  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {planCards.map((plan) => {
            const isGrowth = plan.id === "growth";
            const isEnterprise = plan.id === "enterprise";
            const rates = currency.rates[plan.id];
            const price = isAnnual ? rates.annual : rates.monthly;

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-none p-7 sm:p-8 transition-all ${
                  isGrowth
                    ? "relative border-2 border-primary bg-gradient-to-b from-white via-white to-[#F2FBF9] shadow-xl md:-translate-y-2"
                    : "border border-neutral-300 bg-white shadow-xs hover:border-neutral-400"
                }`}
              >
                {/* Most Popular Badge */}
                {isGrowth && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-md flex items-center gap-1">
                    <SparklesIcon size={12} />
                    Most popular
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {plan.badge}
                    </span>
                    <span className="rounded bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-600">
                      {plan.seatLimit}
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-extrabold text-neutral-900">
                    {plan.name}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed min-h-[40px]">
                    {plan.bestFor}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-6 pb-6 border-b border-neutral-200">
                    {isEnterprise ? (
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-semibold text-neutral-500 uppercase">From</span>
                          <span className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                            {currency.symbol}{price}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 mt-1">
                          / employee / month · Custom volume licensing
                        </p>
                      </div>
                    ) : (
                      <div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                            {currency.symbol}{price}
                          </span>
                          <span className="text-xs text-neutral-500 font-medium">
                            / employee / month
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-500 mt-1">
                          {isAnnual
                            ? `Billed annually (${currency.symbol}${price * 12}/emp/yr)`
                            : "Billed monthly"}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* 5 Key Inclusions */}
                  <div className="mt-6 space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                      Key Inclusions:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.keyInclusions.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-neutral-700 leading-snug">
                          <CheckIcon size={15} className="text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom CTA + Security / Hosting details */}
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <Button
                    href={plan.cta.href}
                    variant={isGrowth ? "primary" : "secondary"}
                    className={`w-full justify-center !rounded-full text-xs sm:text-sm font-bold shadow-sm ${
                      isGrowth ? "hover:scale-[1.02] shadow-teal-700/20" : ""
                    }`}
                  >
                    {plan.cta.title}
                  </Button>

                  <p className="mt-3 text-center text-[11px] text-neutral-500">
                    {plan.hosting}
                  </p>

                  {/* Security Badges on Enterprise Card */}
                  {isEnterprise && (
                    <div className="mt-4 pt-3 border-t border-neutral-100 grid grid-cols-2 gap-2 text-center text-[10px] font-semibold text-neutral-600">
                      <div className="rounded bg-neutral-50 p-1.5 border border-neutral-200">
                        SOC 2 Type II
                      </div>
                      <div className="rounded bg-neutral-50 p-1.5 border border-neutral-200">
                        ISO 27001
                      </div>
                      <div className="rounded bg-neutral-50 p-1.5 border border-neutral-200">
                        AES-256 Encryption
                      </div>
                      <div className="rounded bg-neutral-50 p-1.5 border border-neutral-200">
                        DPDP & GDPR
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Micro-Link: Compare with Keka */}
        <div className="mb-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-none border border-neutral-200 bg-white">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-primary shrink-0">
              <ZapIcon size={18} />
            </span>
            <div>
              <p className="text-xs sm:text-sm font-bold text-neutral-900">
                Evaluating traditional HRMS software like Keka or greytHR?
              </p>
              <p className="text-xs text-neutral-500">
                See our comprehensive architectural breakdown and migration comparison.
              </p>
            </div>
          </div>
          <Link
            to="/compare/keka"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-hover hover:underline shrink-0"
          >
            Compare with Keka pricing
            <ArrowRightIcon size={14} />
          </Link>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE AI ADD-ON USAGE CALCULATOR (#ai-add-ons)      */}
        {/* ========================================================= */}
        <div
          id="ai-add-ons"
          className="mb-16 scroll-mt-24 rounded-none border border-teal-500/30 bg-gradient-to-br from-[#061B21] via-[#052930] to-[#041E24] p-6 sm:p-10 text-white shadow-xl relative overflow-hidden"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/30 bg-teal-950/60 px-3.5 py-1 text-xs font-semibold text-teal-300">
                  <SparklesIcon size={13} />
                  Usage-Based Pricing Control
                </span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  AI Usage Add-ons: Pay Only for What You Use
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-neutral-300 max-w-2xl leading-relaxed">
                  Turn metered uncertainty into predictable control. Scale autonomous interviews during seasonal hiring surges and pause without ongoing fees.
                </p>
              </div>

              <div className="text-left md:text-right shrink-0">
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold block">
                  Current Interview Rate
                </span>
                <span className="text-2xl font-extrabold text-teal-300">
                  {currency.symbol}{currency.interviewRate}
                </span>
                <span className="text-xs text-neutral-400"> / completed interview</span>
              </div>
            </div>

            {/* Slider and Live Calculator Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Interactive Slider */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label htmlFor="interview-slider" className="text-sm font-bold text-white flex items-center gap-2">
                      <SlidersIcon size={16} className="text-teal-400" />
                      Estimated Live AI Interviews Per Month:
                    </label>
                    <span className="rounded-full bg-teal-500/20 border border-teal-400/40 px-3 py-1 text-base font-extrabold text-teal-300">
                      {interviewsCount} interviews
                    </span>
                  </div>

                  <input
                    id="interview-slider"
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={interviewsCount}
                    onChange={(e) => setInterviewsCount(Number(e.target.value))}
                    className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-teal-400 focus:outline-none"
                  />

                  <div className="flex justify-between text-[11px] text-neutral-400 mt-2 font-medium">
                    <span>10 / mo (Starter)</span>
                    <span>100 / mo (Mid-Market)</span>
                    <span>250 / mo</span>
                    <span>500+ / mo (Enterprise)</span>
                  </div>
                </div>

                {/* Additional Voice Screening Note */}
                <div className="rounded-none border border-white/10 bg-white/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <p className="font-bold text-white">Need automated 1st-round Voice Screening calls?</p>
                    <p className="text-neutral-300 mt-0.5">Automated 5-minute phone screen assessing spoken communication & role fit.</p>
                  </div>
                  <span className="shrink-0 rounded bg-teal-500/20 border border-teal-400/30 px-2.5 py-1 text-xs font-bold text-teal-300">
                    {currency.symbol}{currency.voiceRate} / call
                  </span>
                </div>
              </div>

              {/* Right Column: Calculated Total Card */}
              <div className="lg:col-span-5 rounded-none border border-teal-400/30 bg-neutral-900/90 p-6 sm:p-7 backdrop-blur-md">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Estimated Monthly AI Investment
                </span>

                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    {currency.symbol}{estimatedAiCost.toLocaleString()}
                  </span>
                  <span className="text-xs text-neutral-400">/ month</span>
                </div>

                <div className="mt-5 space-y-2.5 text-xs text-neutral-300 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-teal-400 shrink-0" />
                    <span>20-30 min live adaptive video avatar interview</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-teal-400 shrink-0" />
                    <span>Verbatim transcript, code replay & calibrated rubrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-teal-400 shrink-0" />
                    <span>Unused credits automatically roll over for 90 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon size={14} className="text-teal-400 shrink-0" />
                    <span>Zero overage fees — alerts dispatched at 80% quota</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href="/contact"
                    className="w-full inline-flex items-center justify-center rounded-full bg-primary hover:bg-teal-500 px-5 py-2.5 text-xs font-bold text-white transition-all shadow-sm"
                  >
                    Discuss custom AI bundles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FULL FEATURE COMPARISON TABLE (DESKTOP & MOBILE)          */}
        {/* ========================================================= */}
        <div id="comparison-matrix" className="scroll-mt-20">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="pretitle text-primary">In-Depth Comparison</p>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                Full Feature Matrix by Module
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-neutral-600">
                Detailed capabilities across the entire employee lifecycle: Hire, Onboard, Manage, Grow, and Exit.
              </p>
            </div>

            {/* Mobile View Toggle */}
            <div className="block md:hidden flex items-center rounded-full bg-neutral-200 p-1 self-start">
              <button
                type="button"
                onClick={() => setMobileViewMode("tabs")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  mobileViewMode === "tabs" ? "bg-white text-neutral-900 shadow-xs" : "text-neutral-600"
                }`}
              >
                Plan View
              </button>
              <button
                type="button"
                onClick={() => setMobileViewMode("table")}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  mobileViewMode === "table" ? "bg-white text-neutral-900 shadow-xs" : "text-neutral-600"
                }`}
              >
                Full Table
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* MOBILE VIEW (Segmented Control Tabs)                      */}
          {/* ========================================================= */}
          {mobileViewMode === "tabs" && (
            <div className="block md:hidden mb-12">
              {/* Segmented Control Bar */}
              <div className="grid grid-cols-3 gap-1 bg-neutral-200 p-1 rounded-full mb-6 text-center">
                <button
                  type="button"
                  onClick={() => setMobilePlan("starter")}
                  className={`py-2 rounded-full text-xs font-bold transition-all ${
                    mobilePlan === "starter"
                      ? "bg-white text-neutral-900 shadow-xs"
                      : "text-neutral-600"
                  }`}
                >
                  Starter
                </button>
                <button
                  type="button"
                  onClick={() => setMobilePlan("growth")}
                  className={`py-2 rounded-full text-xs font-bold transition-all relative ${
                    mobilePlan === "growth"
                      ? "bg-primary text-white shadow-xs"
                      : "text-neutral-600"
                  }`}
                >
                  Growth ★
                </button>
                <button
                  type="button"
                  onClick={() => setMobilePlan("enterprise")}
                  className={`py-2 rounded-full text-xs font-bold transition-all ${
                    mobilePlan === "enterprise"
                      ? "bg-white text-neutral-900 shadow-xs"
                      : "text-neutral-600"
                  }`}
                >
                  Enterprise
                </button>
              </div>

              {/* Selected Plan Summary Banner */}
              <div className="mb-6 p-4 rounded-none bg-white border border-neutral-300 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {mobilePlan.toUpperCase()} PLAN
                  </span>
                  <span className="text-base font-extrabold text-neutral-900">
                    {currency.symbol}{currency.rates[mobilePlan][isAnnual ? "annual" : "monthly"]}
                    <span className="text-[10px] font-normal text-neutral-500"> /emp/mo</span>
                  </span>
                </div>
                <div className="mt-3">
                  <Button
                    href={mobilePlan === "enterprise" ? "/contact" : "/signup"}
                    variant={mobilePlan === "growth" ? "primary" : "secondary"}
                    className="w-full justify-center !rounded-full text-xs font-bold"
                  >
                    {mobilePlan === "enterprise" ? "Talk to sales" : "Start free trial"}
                  </Button>
                </div>
              </div>

              {/* Grouped Accordions / Feature List for Selected Plan */}
              <div className="space-y-6">
                {featureGroups.map((group) => {
                  const planIndex = mobilePlan === "starter" ? 0 : mobilePlan === "growth" ? 1 : 2;

                  return (
                    <div key={group.groupName} className="rounded-none border border-neutral-300 bg-white overflow-hidden shadow-2xs">
                      <div className="bg-neutral-100 px-4 py-2.5 border-b border-neutral-200">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                          {group.groupName}
                        </h4>
                      </div>
                      <div className="divide-y divide-neutral-100 p-2">
                        {group.features.map((feat) => {
                          const val = feat.values[planIndex];
                          return (
                            <div key={feat.name} className="flex items-center justify-between py-2.5 px-3 text-xs">
                              <span className="font-medium text-neutral-800 pr-2">
                                {feat.name}
                              </span>
                              <div className="shrink-0 text-right">
                                {renderCell(val)}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================= */}
          {/* DESKTOP TABLE VIEW (& Mobile fallback when table selected) */}
          {/* ========================================================= */}
          <div className={`${mobileViewMode === "table" ? "block" : "hidden md:block"} overflow-x-auto border border-neutral-300 bg-white shadow-xs`}>
            <table className="w-full min-w-[780px] table-fixed text-left border-collapse">
              <caption className="sr-only">Comprehensive Sqalible Plan and Feature Comparison Matrix</caption>
              
              {/* STICKY PLAN HEADER ROW */}
              <thead className="sticky top-[68px] z-20 bg-white shadow-xs border-b border-neutral-300">
                <tr className="divide-x divide-neutral-200">
                  <th scope="col" className="w-[34%] p-5 bg-white align-bottom">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-500">
                      Module / Capability
                    </span>
                  </th>
                  {planCards.map((p) => {
                    const isGrowth = p.id === "growth";
                    const rates = currency.rates[p.id];
                    const price = isAnnual ? rates.annual : rates.monthly;

                    return (
                      <th
                        key={p.id}
                        scope="col"
                        className={`w-[22%] p-5 align-top ${
                          isGrowth ? "bg-[#F3FAF8] border-t-4 border-t-primary" : "bg-white"
                        }`}
                      >
                        <div className="flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className={`text-xs font-bold uppercase tracking-wider ${isGrowth ? "text-primary" : "text-neutral-500"}`}>
                                {p.name}
                              </span>
                              {isGrowth && (
                                <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                                  Popular
                                </span>
                              )}
                            </div>
                            <div className="mt-1 flex items-baseline gap-1">
                              <span className="text-2xl font-extrabold text-neutral-900 tracking-tight">
                                {currency.symbol}{price}
                              </span>
                              <span className="text-[11px] text-neutral-500 font-medium">/emp/mo</span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <Button
                              href={p.cta.href}
                              variant={isGrowth ? "primary" : "secondary"}
                              className="w-full justify-center !rounded-full !py-1.5 !px-3 text-xs font-bold"
                            >
                              {p.cta.title}
                            </Button>
                          </div>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              {/* TABLE BODY GROUPED BY MODULE */}
              <tbody className="divide-y divide-neutral-200">
                {featureGroups.map((group) => (
                  <React.Fragment key={group.groupName}>
                    {/* Sticky Group Header */}
                    <tr className="sticky top-[162px] z-10 bg-neutral-100 border-t-2 border-neutral-300">
                      <th
                        colSpan={4}
                        scope="colgroup"
                        className="py-3 px-5 text-xs font-extrabold uppercase tracking-wider text-neutral-800 bg-neutral-100"
                      >
                        {group.groupName}
                      </th>
                    </tr>

                    {/* Features in this Group */}
                    {group.features.map((row, idx) => (
                      <tr
                        key={row.name}
                        className={`divide-x divide-neutral-200 transition-colors hover:bg-neutral-50/80 ${
                          idx % 2 === 0 ? "bg-white" : "bg-neutral-50/30"
                        }`}
                      >
                        <th
                          scope="row"
                          className="py-3.5 px-5 text-xs sm:text-[13px] font-medium text-neutral-900 leading-snug"
                        >
                          {row.name}
                        </th>
                        <td className="py-3.5 px-5 text-center">
                          {renderCell(row.values[0])}
                        </td>
                        <td className="py-3.5 px-5 text-center bg-[#F3FAF8]/50">
                          {renderCell(row.values[1])}
                        </td>
                        <td className="py-3.5 px-5 text-center">
                          {renderCell(row.values[2])}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}