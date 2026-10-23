import React, { useState } from "react";
import { formatINR } from "../../utils/gratuity";
import { CalculatorIcon, CheckCircle2Icon, InfoIcon, ShieldCheckIcon, WalletIcon } from "lucide-react";

export function CtcCalculator() {
  const [ctc, setCtc] = useState<number>(1200000);
  const [basicPercent, setBasicPercent] = useState<number>(50); // Usually 40% - 50%

  // Calculations:
  const annualCtc = Math.max(100000, ctc);
  const basic = annualCtc * (basicPercent / 100);
  const monthlyBasic = basic / 12;

  // Employer PF: 12% of basic (statutory cap is ₹1,800/mo or ₹21,600/yr if opted)
  const employerPf = Math.min(basic * 0.12, 21600);
  // Statutory Gratuity provision: 4.81% of basic
  const gratuity = Math.round(basic * 0.0481);
  // Gross Salary = CTC - Employer PF - Gratuity
  const grossSalary = annualCtc - employerPf - gratuity;

  // Component breakdown:
  const hra = Math.round(basic * 0.5); // 50% of basic in Metro
  const specialAllowance = Math.max(0, grossSalary - basic - hra);

  // Employee Deductions:
  const employeePf = employerPf;
  const professionalTax = 2400; // Annual ₹2,400 across most states
  const totalDeductions = employeePf + professionalTax;

  // Monthly in-hand (Net Take-home before income tax TDS)
  const annualInHand = grossSalary - totalDeductions;
  const monthlyInHand = Math.round(annualInHand / 12);

  return (
    <div className="overflow-hidden rounded-none border border-neutral-200 bg-white shadow-sm grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
      {/* Left Input & Configuration Panel */}
      <div className="p-6 md:p-8 md:col-span-6 space-y-6">
        <div>
          <h3 className="text-h4 font-semibold text-neutral-900">CTC Structure Parameters</h3>
          <p className="mt-1 text-caption text-neutral-500">
            Define your Cost to Company (CTC) and customize basic salary weighting.
          </p>
        </div>

        {/* Annual CTC Input */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label htmlFor="ctcInput" className="text-caption font-semibold text-neutral-700">
              Annual Cost to Company (CTC)
            </label>
            <span className="text-caption font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full">
              {formatINR(ctc)} / year
            </span>
          </div>
          <input
            id="ctcInput"
            type="number"
            min={100000}
            step={50000}
            value={ctc}
            onChange={(e) => setCtc(Math.max(0, Number(e.target.value)))}
            className="w-full h-11 rounded-xl border border-neutral-300 px-4 text-body1 text-neutral-900 outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20 transition-all"
          />
          {/* Quick preset buttons */}
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {[600000, 1000000, 1500000, 2400000].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setCtc(preset)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold border transition-all ${
                  ctc === preset
                    ? "border-primary bg-primary-light text-primary"
                    : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
                }`}
              >
                {formatINR(preset)}
              </button>
            ))}
          </div>
        </div>

        {/* Basic Salary Weighting Slider */}
        <div className="rounded-none border border-neutral-100 bg-neutral-50/80 p-4">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="basicSlider" className="text-caption font-semibold text-neutral-800">
              Basic Salary Percentage
            </label>
            <span className="text-xs font-bold text-teal-700">{basicPercent}% of CTC</span>
          </div>
          <input
            id="basicSlider"
            type="range"
            min={30}
            max={60}
            step={5}
            value={basicPercent}
            onChange={(e) => setBasicPercent(Number(e.target.value))}
            className="w-full accent-teal-600 cursor-pointer"
          />
          <p className="mt-1 text-[11px] text-neutral-500">
            Standard benchmark is 40%–50% to optimize retirement contributions and take-home pay.
          </p>
        </div>

        {/* Structured Salary Breakdown */}
        <div>
          <h4 className="text-caption font-semibold text-neutral-700 uppercase tracking-wider mb-2.5">
            Component Breakdown (Annual)
          </h4>
          <div className="space-y-2 rounded-none border border-neutral-100 bg-white p-3 text-caption">
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-600">Basic Salary ({basicPercent}%):</span>
              <span className="font-semibold text-neutral-900">{formatINR(Math.round(basic))}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-600">House Rent Allowance (HRA):</span>
              <span className="font-semibold text-neutral-900">{formatINR(Math.round(hra))}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-100">
              <span className="text-neutral-600">Special Allowance:</span>
              <span className="font-semibold text-neutral-900">{formatINR(Math.round(specialAllowance))}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-neutral-100 text-neutral-500">
              <span>Employer PF Contribution:</span>
              <span>{formatINR(Math.round(employerPf))}</span>
            </div>
            <div className="flex justify-between py-1 text-neutral-500">
              <span>Gratuity Accrual (4.81%):</span>
              <span>{formatINR(Math.round(gratuity))}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Output & Net In-Hand Panel */}
      <div className="p-6 md:p-8 md:col-span-6 bg-neutral-50/70 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
            <span className="text-caption font-semibold text-neutral-500 uppercase tracking-wider">
              Estimated Monthly Take-Home
            </span>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full">
              <WalletIcon size={12} /> Pre-TDS In-Hand
            </span>
          </div>

          {/* Big Amount Card */}
          <div className="mt-5 rounded-none bg-white border border-teal-100 p-6 shadow-sm">
            <p className="text-caption text-neutral-500">Monthly Net In-Hand (Approx.)</p>
            <p className="mt-1 text-4xl sm:text-5xl font-extrabold text-teal-800 tracking-tight">
              {formatINR(monthlyInHand)}
            </p>
            <p className="mt-1.5 text-[12px] text-neutral-500">
              Per month · Annualized net: {formatINR(annualInHand)}
            </p>

            {/* Visual Progress Bar */}
            <div className="mt-5 pt-4 border-t border-neutral-100">
              <div className="flex justify-between text-[11px] font-semibold text-neutral-600 mb-1.5">
                <span>In-Hand ({Math.round((annualInHand / annualCtc) * 100)}%)</span>
                <span>Deductions & Benefits ({Math.round(((annualCtc - annualInHand) / annualCtc) * 100)}%)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-neutral-200 overflow-hidden flex">
                <div
                  className="bg-teal-600 h-full rounded-l-full transition-all duration-300"
                  style={{ width: `${(annualInHand / annualCtc) * 100}%` }}
                />
                <div
                  className="bg-amber-400 h-full rounded-r-full transition-all duration-300"
                  style={{ width: `${((annualCtc - annualInHand) / annualCtc) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Deductions Summary */}
          <div className="mt-5 rounded-none border border-neutral-200 bg-white p-4 space-y-2.5 text-caption">
            <div className="flex justify-between text-neutral-600">
              <span>Employee Provident Fund (EPF):</span>
              <span className="font-semibold text-neutral-900">{formatINR(Math.round(employeePf / 12))} / mo</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>Professional Tax (PT):</span>
              <span className="font-semibold text-neutral-900">{formatINR(Math.round(professionalTax / 12))} / mo</span>
            </div>
            <div className="flex justify-between border-t border-neutral-100 pt-2 text-neutral-900 font-semibold">
              <span>Total Monthly Deductions:</span>
              <span className="text-amber-800">{formatINR(Math.round(totalDeductions / 12))} / mo</span>
            </div>
          </div>
        </div>

        {/* HR Compliance Note */}
        <p className="mt-6 text-[11px] text-neutral-500 leading-relaxed">
          * Calculated based on standard Indian payroll structures with basic salary at {basicPercent}% of CTC and PF statutory limits. Final in-hand salary may vary based on chosen tax regime (Old vs New), section 80C exemptions, and specific company flexi-benefit plans.
        </p>
      </div>
    </div>
  );
}