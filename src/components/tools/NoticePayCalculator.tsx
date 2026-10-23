import React, { useState } from "react";
import { formatINR } from "../../utils/gratuity";
import { AlertCircleIcon, CheckCircle2Icon, ClockIcon, InfoIcon, ShieldAlertIcon } from "lucide-react";

export function NoticePayCalculator() {
  const [monthlySalary, setMonthlySalary] = useState<number>(65000);
  const [contractualNoticeDays, setContractualNoticeDays] = useState<number>(60);
  const [servedNoticeDays, setServedNoticeDays] = useState<number>(20);
  const [calculationBasis, setCalculationBasis] = useState<"30" | "working">("30");

  const divisor = calculationBasis === "30" ? 30 : 26;
  const perDaySalary = Math.round(monthlySalary / divisor);
  const shortfallDays = Math.max(0, contractualNoticeDays - servedNoticeDays);
  const isFullNoticeServed = shortfallDays === 0;
  const noticePayAmount = shortfallDays * perDaySalary;

  return (
    <div className="overflow-hidden rounded-none border border-neutral-200 bg-white shadow-sm grid md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
      {/* Left Input Panel */}
      <div className="p-6 md:p-8 md:col-span-6 space-y-6">
        <div>
          <h3 className="text-h4 font-semibold text-neutral-900">Notice Period & Salary Inputs</h3>
          <p className="mt-1 text-caption text-neutral-500">
            Calculate notice buyout amount for shortfall or early exit.
          </p>
        </div>

        {/* Monthly Gross Salary */}
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label htmlFor="monthlySalary" className="text-caption font-semibold text-neutral-700">
              Monthly Salary for Notice Calculation (₹)
            </label>
            <span className="text-caption font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full">
              {formatINR(monthlySalary)} / mo
            </span>
          </div>
          <input
            id="monthlySalary"
            type="number"
            min={5000}
            step={5000}
            value={monthlySalary}
            onChange={(e) => setMonthlySalary(Math.max(0, Number(e.target.value)))}
            className="w-full h-11 rounded-xl border border-neutral-300 px-4 text-body1 text-neutral-900 outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20 transition-all"
            placeholder="e.g. 65000"
          />
          <p className="mt-1 text-[11px] text-neutral-500">
            Verify whether your contract specifies <strong>Basic Salary</strong> or <strong>Gross Salary</strong> for notice buyout.
          </p>
        </div>

        {/* Notice Days Inputs */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="contractualNotice" className="block text-caption font-semibold text-neutral-700 mb-1.5">
              Contractual Notice (Days)
            </label>
            <input
              id="contractualNotice"
              type="number"
              min={0}
              max={180}
              value={contractualNoticeDays}
              onChange={(e) => setContractualNoticeDays(Math.max(0, Number(e.target.value)))}
              className="w-full h-11 rounded-xl border border-neutral-300 px-4 text-body1 text-neutral-900 outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20 transition-all"
            />
          </div>
          <div>
            <label htmlFor="servedNotice" className="block text-caption font-semibold text-neutral-700 mb-1.5">
              Actual Days Served
            </label>
            <input
              id="servedNotice"
              type="number"
              min={0}
              max={contractualNoticeDays}
              value={servedNoticeDays}
              onChange={(e) => setServedNoticeDays(Math.max(0, Number(e.target.value)))}
              className="w-full h-11 rounded-xl border border-neutral-300 px-4 text-body1 text-neutral-900 outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20 transition-all"
            />
          </div>
        </div>

        {/* Divisor Basis */}
        <div className="rounded-none border border-neutral-100 bg-neutral-50 p-3.5">
          <span className="block text-caption font-semibold text-neutral-800 mb-2">
            Per-Day Salary Calculation Basis
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setCalculationBasis("30")}
              className={`rounded-lg py-2 px-3 text-caption font-semibold border transition-all ${
                calculationBasis === "30"
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
              }`}
            >
              Calendar Month (30 Days)
            </button>
            <button
              type="button"
              onClick={() => setCalculationBasis("working")}
              className={`rounded-lg py-2 px-3 text-caption font-semibold border transition-all ${
                calculationBasis === "working"
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
              }`}
            >
              Working Days (26 Days)
            </button>
          </div>
        </div>
      </div>

      {/* Right Output Panel */}
      <div className="p-6 md:p-8 md:col-span-6 bg-neutral-50/70 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
            <span className="text-caption font-semibold text-neutral-500 uppercase tracking-wider">
              Notice Pay Recovery Summary
            </span>
            {isFullNoticeServed ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                <CheckCircle2Icon size={13} /> Full Notice Served
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                <AlertCircleIcon size={13} /> {shortfallDays} Days Shortfall
              </span>
            )}
          </div>

          {/* Amount Box */}
          <div className="mt-5 rounded-none bg-white border border-teal-100 p-6 shadow-sm">
            <p className="text-caption text-neutral-500">Estimated Notice Pay Recoverable / Payable</p>
            <p className="mt-1 text-4xl sm:text-5xl font-extrabold text-teal-800 tracking-tight">
              {formatINR(noticePayAmount)}
            </p>
            <p className="mt-2 text-caption text-neutral-600">
              {shortfallDays} unserved days × {formatINR(perDaySalary)} / day (using {divisor}-day divisor)
            </p>
          </div>

          {/* Breakdown Rows */}
          <div className="mt-5 rounded-none border border-neutral-200 bg-white p-4 space-y-2.5 text-caption">
            <div className="flex justify-between text-neutral-600">
              <span>Required Notice:</span>
              <span className="font-semibold text-neutral-900">{contractualNoticeDays} Days</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>Days Actually Served:</span>
              <span className="font-semibold text-neutral-900">{servedNoticeDays} Days</span>
            </div>
            <div className="flex justify-between text-neutral-600 border-t border-neutral-100 pt-2">
              <span>Notice Shortfall:</span>
              <span className="font-bold text-amber-700">{shortfallDays} Days</span>
            </div>
            <div className="flex justify-between text-neutral-600">
              <span>Per-Day Wage Rate:</span>
              <span className="font-semibold text-neutral-900">{formatINR(perDaySalary)}</span>
            </div>
          </div>
        </div>

        {/* HR Advisory Note */}
        <p className="mt-6 text-[11px] text-neutral-500 leading-relaxed">
          * Notice pay buyout calculations are subject to waiver approvals from management and specific terms in the appointment letter. In full-and-final settlements (FnF), notice shortfall may be adjusted against accumulated earned leave (EL) encashment.
        </p>
      </div>
    </div>
  );
}