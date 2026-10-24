import React from "react";
import { AlertCircle, ArrowLeftRight, Clock, DollarSign, FileSpreadsheet } from "lucide-react";

export function PulseTrackProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EE] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: The Problem Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
              The problem
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em] leading-tight">
              Your timesheets say one thing.{" "}
              <span className="block text-[#4A5370]">Your invoices say another.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
              Manual timesheets are filled in on Friday from memory. Trackers live in one tab, tasks in another, attendance in a third. The result is hours nobody can defend. PulseTrack closes that gap by recording time where the work actually happens.
            </p>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E2D8] flex items-center gap-4 text-xs text-[#4A5370]">
              <span className="w-8 h-8 rounded-full bg-[#FFE6DF] text-[#C2361A] flex items-center justify-center shrink-0">
                <AlertCircle className="w-4 h-4" />
              </span>
              <span>
                Figures from an internal Kombee client delivery review, anonymised: 357 hours vanished between disjointed tracking tools in a single quarter.
              </span>
            </div>
          </div>

          {/* Right Column: Statistics & System Disconnect Visual */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 shadow-card border border-[#E6E2D8]">
              <div className="grid grid-cols-2 gap-6 pb-6 border-b border-[#E6E2D8]">
                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#C2361A] font-display tnum">
                    357h
                  </div>
                  <div className="text-xs text-[#4A5370] mt-1 font-medium">
                    gap between two tracking systems in one client review
                  </div>
                </div>

                <div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#FF5A36] font-display tnum">
                    ~35%
                  </div>
                  <div className="text-xs text-[#4A5370] mt-1 font-medium">
                    of logged hours landed in non-billable categories
                  </div>
                </div>
              </div>

              {/* System Disconnect Diagram */}
              <div className="pt-6">
                <div className="text-xs font-semibold text-[#0F1730] mb-3">
                  The disjointed workflow teams suffer from:
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-[#F7F4EE] border border-[#E6E2D8] text-xs font-medium text-[#0F1730]">
                    Timesheet
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F7F4EE] border border-[#E6E2D8] text-xs font-medium text-[#0F1730]">
                    Tracker
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F7F4EE] border border-[#E6E2D8] text-xs font-medium text-[#0F1730]">
                    PM Tool
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F7F4EE] border border-[#E6E2D8] text-xs font-medium text-[#0F1730]">
                    HRMS
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-[#FFE6DF]/60 text-[#C2361A] text-xs font-semibold text-center flex items-center justify-center gap-1.5">
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  PulseTrack replaces all four with one unified click
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
