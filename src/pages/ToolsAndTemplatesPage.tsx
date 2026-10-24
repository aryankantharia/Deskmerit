import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PulseTrackHeader } from "../components/PulseTrackHeader";
import { PulseTrackFooter } from "../components/PulseTrackFooter";
import { PulseTrackCtaBand } from "../components/PulseTrackCtaBand";
import {
  Calculator,
  Download,
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";

export function ToolsAndTemplatesPage() {
  const location = useLocation();
  const path = location.pathname;

  // Active tool mode
  const isOvertime = path.includes("overtime");
  const isTimesheet = path.includes("timesheet");
  const isPolicy = path.includes("policy");

  // Utilisation Calculator State
  const [billableHours, setBillableHours] = useState(32);
  const [availableHours, setAvailableHours] = useState(40);
  const utilisationRate = availableHours > 0 ? ((billableHours / availableHours) * 100).toFixed(1) : "0.0";

  // Overtime Calculator State
  const [hourlyRate, setHourlyRate] = useState(35);
  const [standardHours, setStandardHours] = useState(40);
  const [actualHours, setActualHours] = useState(48);
  const [otMultiplier, setOtMultiplier] = useState(1.5);

  const otHours = Math.max(0, actualHours - standardHours);
  const basePay = Math.min(actualHours, standardHours) * hourlyRate;
  const otPay = otHours * hourlyRate * otMultiplier;
  const totalPay = basePay + otPay;

  // Policy Generator State
  const [companyName, setCompanyName] = useState("Acme Technologies");
  const [copiedPolicy, setCopiedPolicy] = useState(false);

  const handleCopyPolicy = () => {
    navigator.clipboard.writeText(`EMPLOYEE WORKPLACE TIME TRACKING POLICY (${companyName})
1. Purpose: Accurate client billing and objective presence accounting.
2. Transparency: No keystroke logging, no webcam, and screenshots off by default.
3. Private Time: Staff may activate Private Time at any moment for personal breaks.
4. Access: Every employee retains full access to their own recorded logs and timesheets.`);
    setCopiedPolicy(true);
    setTimeout(() => setCopiedPolicy(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <PulseTrackHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <Link to="/resources" className="hover:text-[#0F1730]">Resources</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">
              {isOvertime
                ? "Overtime calculator"
                : isTimesheet
                ? "Timesheet template"
                : isPolicy
                ? "Employee monitoring policy"
                : "Utilisation calculator"}
            </span>
          </div>
        </div>

        {/* Navigation Tabs between Free Tools */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1 bg-[#FFFFFF] rounded-2xl border border-[#E6E2D8] shadow-subtle max-w-fit mx-auto">
            <Link
              to="/tools/utilisation-calculator"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                !isOvertime && !isTimesheet && !isPolicy
                  ? "bg-[#0F1730] text-white shadow-sm"
                  : "text-[#4A5370] hover:text-[#0F1730]"
              }`}
            >
              Utilisation calculator
            </Link>
            <Link
              to="/tools/overtime-calculator"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isOvertime
                  ? "bg-[#0F1730] text-white shadow-sm"
                  : "text-[#4A5370] hover:text-[#0F1730]"
              }`}
            >
              Overtime calculator
            </Link>
            <Link
              to="/templates/timesheet-template"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isTimesheet
                  ? "bg-[#0F1730] text-white shadow-sm"
                  : "text-[#4A5370] hover:text-[#0F1730]"
              }`}
            >
              Timesheet template
            </Link>
            <Link
              to="/templates/employee-monitoring-policy"
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                isPolicy
                  ? "bg-[#0F1730] text-white shadow-sm"
                  : "text-[#4A5370] hover:text-[#0F1730]"
              }`}
            >
              Policy template
            </Link>
          </div>
        </div>

        {/* Content depending on active tab */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isOvertime && !isTimesheet && !isPolicy && (
            /* UTILISATION CALCULATOR */
            <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                  Free Tool
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  Calculate billable utilisation in seconds.
                </h1>
                <p className="text-xs sm:text-sm text-[#4A5370] mt-2">
                  Billable hours ÷ available hours, with team benchmarks and automated tracking.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-2">
                    Billable hours logged this week: <strong className="text-sm font-bold text-[#FF5A36]">{billableHours}h</strong>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={billableHours}
                    onChange={(e) => setBillableHours(Number(e.target.value))}
                    className="w-full accent-[#FF5A36] h-2 bg-[#E6E2D8] rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-2">
                    Total available working hours: <strong className="text-sm font-bold text-[#0F1730]">{availableHours}h</strong>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={availableHours}
                    onChange={(e) => setAvailableHours(Number(e.target.value))}
                    className="w-full accent-[#0F1730] h-2 bg-[#E6E2D8] rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Result Callout */}
              <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] text-center space-y-2">
                <div className="text-xs font-semibold text-[#4A5370] uppercase tracking-wider">
                  Calculated Billable Utilisation
                </div>
                <div className="text-5xl font-extrabold text-[#0F1730] font-display tnum">
                  {utilisationRate}%
                </div>
                <div className="text-xs text-[#12B886] font-semibold pt-1">
                  {Number(utilisationRate) >= 80 ? "✓ Healthy billable rate for IT services" : "⚠ Below standard 80% delivery target"}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#4A5370]">
                  Tired of manual formulas? PulseTrack tracks billable rates automatically from Jira.
                </div>
                <Link
                  to="/signup"
                  className="px-5 py-2.5 rounded-[12px] bg-[#FF5A36] hover:bg-[#E94A27] text-[#0F1730] font-bold text-xs transition-colors shrink-0"
                >
                  Automate utilisation →
                </Link>
              </div>
            </div>
          )}

          {isOvertime && (
            /* OVERTIME CALCULATOR */
            <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                  Free Tool
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  Work out overtime hours and pay.
                </h1>
                <p className="text-xs sm:text-sm text-[#4A5370] mt-2">
                  Hours, threshold and overtime multiplier with presets for IN, AU, NZ and UAE.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Base hourly rate ($ or ₹)</label>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Standard weekly hours (Threshold)</label>
                  <input
                    type="number"
                    value={standardHours}
                    onChange={(e) => setStandardHours(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Actual hours worked</label>
                  <input
                    type="number"
                    value={actualHours}
                    onChange={(e) => setActualHours(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Overtime multiplier</label>
                  <select
                    value={otMultiplier}
                    onChange={(e) => setOtMultiplier(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE]"
                  >
                    <option value={1.5}>1.5x (Time and a half - standard)</option>
                    <option value={2.0}>2.0x (Double time - weekend/public holiday)</option>
                    <option value={1.25}>1.25x (125% rate)</option>
                  </select>
                </div>
              </div>

              {/* Overtime Results */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8]">
                  <div className="text-xs text-[#4A5370]">Overtime hours</div>
                  <div className="text-2xl font-bold text-[#0F1730] mt-1 font-display tnum">{otHours}h</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8]">
                  <div className="text-xs text-[#4A5370]">Overtime pay</div>
                  <div className="text-2xl font-bold text-[#C2361A] mt-1 font-display tnum">${otPay.toFixed(2)}</div>
                </div>
                <div className="p-4 rounded-xl bg-[#FFE6DF] border border-[#FF5A36]/30">
                  <div className="text-xs text-[#C2361A] font-semibold">Total pay</div>
                  <div className="text-2xl font-bold text-[#0F1730] mt-1 font-display tnum">${totalPay.toFixed(2)}</div>
                </div>
              </div>
            </div>
          )}

          {isTimesheet && (
            /* TIMESHEET TEMPLATE */
            <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                  Free Template
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  Free weekly timesheet template.
                </h1>
                <p className="text-xs sm:text-sm text-[#4A5370] mt-2">
                  Clean, printable and formula-ready Excel & Google Sheets template — or let PulseTrack fill it for you.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E6E2D8]">
                  <span className="font-bold text-xs text-[#0F1730]">Template Preview: Weekly_Timesheet_v1.0.xlsx</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Formula enabled
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#E6E2D8] text-[#4A5370]">
                        <th className="py-2">Day</th>
                        <th className="py-2">Task / Project</th>
                        <th className="py-2">Start</th>
                        <th className="py-2">End</th>
                        <th className="py-2">Hours</th>
                        <th className="py-2">Billable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E2D8]/60 text-[#0F1730]">
                      <tr>
                        <td className="py-2">Mon</td>
                        <td>Acme Retail (Checkout API)</td>
                        <td>09:00</td>
                        <td>17:30</td>
                        <td className="font-mono">8.0h</td>
                        <td className="text-[#12B886]">Yes</td>
                      </tr>
                      <tr>
                        <td className="py-2">Tue</td>
                        <td>Northwind (Pipeline fix)</td>
                        <td>09:30</td>
                        <td>18:00</td>
                        <td className="font-mono">8.0h</td>
                        <td className="text-[#12B886]">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => alert("Downloaded Weekly_Timesheet_Template.csv")}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F1730] text-white text-xs font-bold hover:bg-[#24305A] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Template (.xlsx)
                  </button>
                </div>
              </div>
            </div>
          )}

          {isPolicy && (
            /* POLICY TEMPLATE */
            <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E6E2D8] shadow-card space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                  Free Policy Template
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  A fair employee monitoring policy you can adapt.
                </h1>
                <p className="text-xs sm:text-sm text-[#4A5370] mt-2">
                  Aligned with PulseTrack's privacy promise, India DPDP Act, and NSW Workplace Surveillance rules.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F1730] mb-1">Company name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full max-w-md px-3 py-2 text-xs rounded-xl border border-[#E6E2D8] bg-[#F7F4EE] text-[#0F1730]"
                />
              </div>

              <div className="p-6 rounded-2xl bg-[#0F1730] text-white font-mono text-xs leading-relaxed space-y-3 relative">
                <button
                  type="button"
                  onClick={handleCopyPolicy}
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[#24305A] hover:bg-[#FF5A36] text-white text-[11px] font-sans font-bold flex items-center gap-1.5 transition-colors"
                >
                  {copiedPolicy ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedPolicy ? "Copied!" : "Copy text"}
                </button>

                <div className="text-[#FF5A36] font-bold font-sans">
                  EMPLOYEE WORKPLACE TIME TRACKING POLICY ({companyName})
                </div>
                <p className="text-[#9AA1B2]">
                  1. Purpose: {companyName} records computer work time strictly for billing accuracy, project budgeting, and payroll presence.
                </p>
                <p className="text-[#9AA1B2]">
                  2. Privacy Non-Negotiables: No keystrokes are recorded. Webcam and microphones are permanently disabled.
                </p>
                <p className="text-[#9AA1B2]">
                  3. Private Time: Every team member has the unilateral right to engage Private Time without explanation.
                </p>
                <p className="text-[#9AA1B2]">
                  4. Employee First-View: Employees may review their complete timeline before weekly timesheets are finalized.
                </p>
              </div>
            </div>
          )}
        </section>

        <PulseTrackCtaBand />
      </main>

      <PulseTrackFooter />
    </div>
  );
}
