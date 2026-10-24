import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PulseTrackHeader } from "../components/PulseTrackHeader";
import { PulseTrackFooter } from "../components/PulseTrackFooter";
import { PulseTrackCtaBand } from "../components/PulseTrackCtaBand";
import {
  Calendar,
  Clock,
  Globe2,
  Moon,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

export function AttendanceTrackingPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(18);
  const [minPresentHours, setMinPresentHours] = useState(6);

  // June 2026 calendar days: 1 is Monday, 30 days total
  const calendarDays = [
    { day: 1, status: "Present" },
    { day: 2, status: "Present" },
    { day: 3, status: "Present" },
    { day: 4, status: "Present" },
    { day: 5, status: "Present" },
    { day: 6, status: "Weekend" },
    { day: 7, status: "Weekend" },
    { day: 8, status: "Present" },
    { day: 9, status: "Present" },
    { day: 10, status: "Leave" },
    { day: 11, status: "Leave" },
    { day: 12, status: "Present" },
    { day: 13, status: "Weekend" },
    { day: 14, status: "Weekend" },
    { day: 15, status: "Present" },
    { day: 16, status: "Present" },
    { day: 17, status: "Present" },
    { day: 18, status: "Corrected", note: "18 Jun · corrected by HR (Nikita S.) — client workshop logged as other work · before: Absent → after: Present" },
    { day: 19, status: "Present" },
    { day: 20, status: "Weekend" },
    { day: 21, status: "Weekend" },
    { day: 22, status: "Present" },
    { day: 23, status: "Present" },
    { day: 24, status: "Present" },
    { day: 25, status: "Present" },
    { day: 26, status: "Present" },
    { day: 27, status: "Weekend" },
    { day: 28, status: "Weekend" },
    { day: 29, status: "Present" },
    { day: 30, status: "Present" },
  ];

  const timezones = [
    { city: "Bengaluru", zone: "Asia/Kolkata", week: "Mon–Fri · closes 00:00 local" },
    { city: "Dubai", zone: "Asia/Dubai", week: "Mon–Fri · closes 00:00 local" },
    { city: "Riyadh", zone: "Asia/Riyadh", week: "Sun–Thu · closes 00:00 local" },
    { city: "Sydney", zone: "Australia/Sydney", week: "Mon–Fri · DST aware · closes 00:00" },
    { city: "Auckland", zone: "Pacific/Auckland", week: "Mon–Fri · DST aware · closes 00:00" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <PulseTrackHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <Link to="/features" className="hover:text-[#0F1730]">Features</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">Attendance tracking</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm">
                <span className="pulse-dot" />
                <span>Fair Attendance</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight">
                Attendance that reflects real work,{" "}
                <span className="text-[#FF5A36] block font-normal">not just a login.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed">
                PulseTrack computes daily attendance from tracked work, accepted calendar meetings and manually logged off-computer time — so someone in client workshops all day is never marked absent. No biometric fingerprint machines needed.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center text-xs font-bold text-[#0F1730] bg-[#FF5A36] hover:bg-[#E94A27] px-6 py-3.5 rounded-[12px] shadow-sm transition-all"
                >
                  Start free 14-day trial →
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center text-xs font-semibold text-[#0F1730] bg-[#FFFFFF] hover:bg-[#E6E2D8]/50 border border-[#0F1730] px-6 py-3.5 rounded-[12px] transition-all"
                >
                  Book a demo
                </Link>
              </div>
            </div>

            {/* Right: Ananya R. June 2026 Attendance Calendar */}
            <div className="lg:col-span-6 bg-[#FFFFFF] rounded-[24px] p-6 sm:p-8 border border-[#E6E2D8] shadow-card">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E6E2D8]">
                <div>
                  <h3 className="font-bold text-base text-[#0F1730]">Ananya R. · June 2026</h3>
                  <div className="text-xs text-[#4A5370]">Asia/Kolkata · Mon–Fri · min. 6h present day</div>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FFE6DF] text-[#C2361A]">
                  21 present · 2 leave
                </span>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-[#4A5370] mb-2 uppercase">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1.5 text-center">
                {calendarDays.map((d) => {
                  const isSelected = selectedDay === d.day;
                  return (
                    <button
                      key={d.day}
                      type="button"
                      onClick={() => setSelectedDay(d.day)}
                      className={`p-2 rounded-xl text-xs transition-all flex flex-col items-center justify-between min-h-[50px] border ${
                        d.status === "Weekend"
                          ? "bg-[#F7F4EE]/50 border-transparent text-[#9AA1B2]"
                          : d.status === "Leave"
                          ? "bg-amber-50 border-amber-200 text-amber-800"
                          : d.status === "Corrected"
                          ? "bg-[#FFE6DF] border-[#FF5A36] text-[#C2361A] font-bold ring-2 ring-[#FF5A36]/30"
                          : "bg-[#FFFFFF] border-[#E6E2D8] text-[#0F1730] hover:border-[#12B886]"
                      } ${isSelected ? "ring-2 ring-[#0F1730]" : ""}`}
                    >
                      <span className="font-semibold text-[11px]">{d.day}</span>
                      <span className="text-[9px] mt-1 font-medium">
                        {d.status === "Weekend" ? "" : d.status}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Correction Log Banner */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#FFE6DF]/60 border border-[#FF5A36]/30 text-xs text-[#C2361A] flex items-start gap-2">
                <FileCheck className="w-4 h-4 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>18 Jun · corrected by HR (Nikita S.):</strong> client workshop logged as other work · before: <em>Absent</em> → after: <em>Present</em>. Full audit trail logged with reason.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Every Timezone & Overnight Work Sections */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Timezones handled */}
              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                  Every time zone
                </div>
                <h2 className="text-3xl font-extrabold text-[#0F1730]">
                  Every employee’s own day.
                </h2>
                <p className="text-sm text-[#4A5370] leading-relaxed">
                  Days close at each person’s local midnight, so a team split across Bengaluru, Dubai, Riyadh, Sydney and Auckland gets accurate days for everyone — not one office’s clock.
                </p>

                <div className="space-y-2.5">
                  {timezones.map((tz) => (
                    <div
                      key={tz.city}
                      className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8] flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-[#0F1730]">{tz.city}</span>
                        <span className="text-[#4A5370] ml-2">({tz.zone})</span>
                      </div>
                      <span className="text-[#4A5370] font-medium">{tz.week}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Overnight work, judged fairly */}
              <div className="space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                  Fair for late nights
                </div>
                <h2 className="text-3xl font-extrabold text-[#0F1730]">
                  Overnight work, judged fairly.
                </h2>
                <p className="text-sm text-[#4A5370] leading-relaxed">
                  A session crossing midnight is split across both calendar days, and an overnight shift is judged as a whole against your minimum threshold — so a 6-hour night shift counts as present work, not two absences.
                </p>

                <div className="bg-[#F7F4EE] rounded-2xl p-6 border border-[#E6E2D8] space-y-4">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#0F1730]">
                    <span>Mon 21:00</span>
                    <span className="text-[#FF5A36] font-bold">00:00 (Midnight boundary)</span>
                    <span>Tue 03:00</span>
                  </div>

                  {/* Visual timeline bar crossing midnight */}
                  <div className="h-6 rounded-full bg-[#E6E2D8] overflow-hidden flex items-center">
                    <div className="h-full bg-[#12B886] w-1/2 flex items-center justify-center text-[10px] text-white font-bold">
                      Mon · 3h
                    </div>
                    <div className="h-full bg-[#12B886]/80 w-1/2 flex items-center justify-center text-[10px] text-white font-bold">
                      Tue · 3h
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FFFFFF] border border-[#E6E2D8] text-xs text-[#0F1730] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#12B886] shrink-0" />
                    <span>Session 21:00–03:00 meets the 6h threshold as a whole across the shift.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Attendance Rules HR Can Stand Behind */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730]">
              Corrections HR can stand behind.
            </h3>
            <p className="text-sm text-[#4A5370] mt-2">
              Set the minimum time that counts as a present day. Admins can correct any day; every correction is logged with before and after values and is never silently overwritten.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E6E2D8] shadow-card space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-[#E6E2D8] text-xs">
              <span className="font-semibold text-[#0F1730]">Minimum present day</span>
              <span className="font-bold text-[#0F1730]">{minPresentHours}h 00m</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#E6E2D8] text-xs">
              <span className="font-semibold text-[#0F1730]">Count calendar meetings</span>
              <span className="text-[#12B886] font-semibold">Accepted only</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#E6E2D8] text-xs">
              <span className="font-semibold text-[#0F1730]">All-day calendar events</span>
              <span className="text-[#4A5370]">Excluded by default</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-[#E6E2D8] text-xs">
              <span className="font-semibold text-[#0F1730]">Offline detection</span>
              <span className="text-[#4A5370]">3 missed 60s check-ins</span>
            </div>
            <div className="flex items-center justify-between py-2 text-xs">
              <span className="font-semibold text-[#0F1730]">Manual corrections</span>
              <span className="text-[#C2361A] font-bold">Logged · never overwritten</span>
            </div>
          </div>
        </section>

        <PulseTrackCtaBand
          title="Attendance without the punch clock."
          subtitle="Install in minutes, start from a task, and get your first report this week."
        />
      </main>

      <PulseTrackFooter />
    </div>
  );
}
