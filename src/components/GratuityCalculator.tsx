import React, { useState } from "react";
import { formatINR } from "../utils/gratuity";
import { CheckCircle2Icon, AlertCircleIcon, InfoIcon, CalculatorIcon, ArrowRightIcon, ShieldCheckIcon } from "lucide-react";

export function GratuityCalculator() {
  const [basicSalary, setBasicSalary] = useState<number>(75000);
  const [yearsOfService, setYearsOfService] = useState<number>(6);
  const [monthsOfService, setMonthsOfService] = useState<number>(4);
  const [isCoveredUnderAct, setIsCoveredUnderAct] = useState<boolean>(true);

  // If service in the last year > 6 months, round up to next year under the Gratuity Act
  const effectiveYears = monthsOfService > 6 ? yearsOfService + 1 : yearsOfService;
  const isEligible = yearsOfService >= 5;

  // Formula:
  // Covered under Act 1972: (15 * (Basic + DA) * Tenure) / 26
  // Not covered: (15 * (Basic + DA) * Tenure) / 30
  const divisor = isCoveredUnderAct ? 26 : 30;
  const calculatedGratuity = Math.round((15 * basicSalary * effectiveYears) / divisor);

  // Statutory Tax Exemption Limit in India is ₹20,00,000 (20 Lakhs)
  const STATUTORY_CAP = 2000000;
  const taxFreeAmount = Math.min(calculatedGratuity, STATUTORY_CAP);
  const taxableAmount = Math.max(0, calculatedGratuity - STATUTORY_CAP);

  return (
    <section className="bg-white pt-10 pb-6 md:pt-12 md:pb-8" aria-labelledby="gratuity-calc-title">
      <div className="mx-auto max-w-5xl px-6">
        {/* Intro Banner */}
        <div className="mb-8 rounded-none border border-teal-100 bg-teal-50/60 p-6 text-neutral-800">
          <div className="flex items-start gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-white">
              <CalculatorIcon size={18} />
            </span>
            <div>
              <h2 id="gratuity-calc-title" className="text-h3 font-semibold text-neutral-900">
                Statutory Gratuity Estimation
              </h2>
              <p className="mt-1 text-body2 text-neutral-600 leading-relaxed">
                Gratuity is a statutory monetary benefit paid by an employer to an employee for their dedicated service, governed under the <strong>Payment of Gratuity Act, 1972</strong>. Use this tool to estimate statutory entitlements, tax-exempt ceilings, and eligibility criteria.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Panel Calculator Card */}
        <div className="overflow-hidden rounded-none border border-neutral-200 bg-white shadow-sm grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {/* Left Panel: Inputs */}
          <div className="p-6 md:p-8 md:col-span-6 space-y-6">
            <h3 className="text-h4 font-semibold text-neutral-900 border-b border-neutral-100 pb-3">
              Salary & Tenure Parameters
            </h3>

            {/* Basic Salary + DA Input */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="basicSalary" className="text-caption font-semibold text-neutral-700">
                  Last Drawn Monthly Basic + DA (₹)
                </label>
                <span className="text-caption font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full">
                  {formatINR(basicSalary)}
                </span>
              </div>
              <input
                id="basicSalary"
                type="number"
                min={1000}
                step={1000}
                value={basicSalary}
                onChange={(e) => setBasicSalary(Math.max(0, Number(e.target.value)))}
                className="w-full h-11 rounded-xl border border-neutral-300 px-4 text-body1 text-neutral-900 outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20 transition-all"
                placeholder="e.g. 75000"
              />
              <p className="mt-1 text-[11px] text-neutral-500">
                Only Basic Salary and Dearness Allowance are counted. Allowances (HRA, Special, Bonus) are excluded.
              </p>
            </div>

            {/* Years of Service */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="yearsOfService" className="block text-caption font-semibold text-neutral-700 mb-1.5">
                  Completed Years
                </label>
                <input
                  id="yearsOfService"
                  type="number"
                  min={0}
                  max={50}
                  value={yearsOfService}
                  onChange={(e) => setYearsOfService(Math.max(0, Number(e.target.value)))}
                  className="w-full h-11 rounded-xl border border-neutral-300 px-4 text-body1 text-neutral-900 outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20 transition-all"
                />
              </div>
              <div>
                <label htmlFor="monthsOfService" className="block text-caption font-semibold text-neutral-700 mb-1.5">
                  Additional Months
                </label>
                <select
                  id="monthsOfService"
                  value={monthsOfService}
                  onChange={(e) => setMonthsOfService(Number(e.target.value))}
                  className="w-full h-11 rounded-xl border border-neutral-300 px-3 text-body2 text-neutral-900 outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20 bg-white transition-all"
                >
                  {[...Array(12).keys()].map((m) => (
                    <option key={m} value={m}>
                      {m} month{m === 1 ? "" : "s"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Covered under Act Toggle */}
            <div className="rounded-none border border-neutral-100 bg-neutral-50 p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isCoveredUnderAct}
                  onChange={(e) => setIsCoveredUnderAct(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-neutral-300 text-teal-600 focus:ring-teal-500"
                />
                <div>
                  <span className="text-caption font-semibold text-neutral-900">
                    Organisation covered under Gratuity Act, 1972 (10+ employees)
                  </span>
                  <p className="text-[11px] text-neutral-500 mt-0.5">
                    Uses standard 26-day monthly working divisor. (Uncovered uses 30-day divisor).
                  </p>
                </div>
              </label>
            </div>

            {/* Quick Helper Notes */}
            <div className="space-y-2 pt-2 text-[12px] text-neutral-500">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon size={14} className="text-teal-600 shrink-0" />
                <span>Effective tenure calculated: <strong>{effectiveYears} years</strong> {monthsOfService > 6 ? "(rounded up since >6 mos)" : ""}</span>
              </div>
              <div className="flex items-center gap-2">
                <InfoIcon size={14} className="text-neutral-400 shrink-0" />
                <span>Tax exemption statutory ceiling: <strong>₹20,00,000</strong></span>
              </div>
            </div>
          </div>

          {/* Right Panel: Output & Breakdown */}
          <div className="p-6 md:p-8 md:col-span-6 bg-neutral-50/70 flex flex-col justify-between">
            <div>
              {/* Eligibility Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <span className="text-caption font-semibold text-neutral-500 uppercase tracking-wider">
                  Calculation Result
                </span>
                {isEligible ? (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                    <CheckCircle2Icon size={14} /> Eligible (5+ Years Served)
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    <AlertCircleIcon size={14} /> Not yet 5 Years (Estimated Entitlement)
                  </span>
                )}
              </div>

              {/* Main Calculated Amount Display */}
              <div className="mt-6">
                <p className="text-caption text-neutral-600">Estimated Total Gratuity Amount</p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-neutral-900 sm:text-5xl tracking-tight text-teal-800">
                    {formatINR(calculatedGratuity)}
                  </span>
                </div>
                {!isEligible && (
                  <p className="mt-1 text-[11px] text-amber-700 font-medium">
                    * Note: 5 years of continuous service is legally required to claim gratuity on resignation/retirement.
                  </p>
                )}
              </div>

              {/* Breakdown Table */}
              <div className="mt-6 rounded-none border border-neutral-200 bg-white p-4 space-y-3 text-body2">
                <div className="flex justify-between items-center text-caption border-b border-neutral-100 pb-2">
                  <span className="text-neutral-500">Tax-Free Exemption Portion:</span>
                  <span className="font-semibold text-emerald-700">{formatINR(taxFreeAmount)}</span>
                </div>
                {taxableAmount > 0 && (
                  <div className="flex justify-between items-center text-caption border-b border-neutral-100 pb-2">
                    <span className="text-neutral-500">Taxable Portion (Above ₹20L cap):</span>
                    <span className="font-semibold text-red-600">{formatINR(taxableAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-caption">
                  <span className="text-neutral-500">15 Days Wage Multiplier:</span>
                  <span className="font-medium text-neutral-800">{formatINR(Math.round((15 * basicSalary) / divisor))}</span>
                </div>
                <div className="flex justify-between items-center text-caption">
                  <span className="text-neutral-500">Statutory Formula:</span>
                  <span className="font-mono text-neutral-700 text-[11px] bg-neutral-100 px-2 py-0.5 rounded">
                    (15 × {basicSalary} × {effectiveYears}) ÷ {divisor}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom HR Note */}
            <div className="mt-6 rounded-none bg-teal-50 border border-teal-100 p-3.5 text-[11px] text-teal-900 leading-relaxed">
              <strong>HR Compliance Notice:</strong> Sqalible automatically tracks gratuity accruals, provisions, and full-and-final settlement calculations compliant with statutory labor codes and audit logs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}