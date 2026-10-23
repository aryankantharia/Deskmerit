import React from "react";
import { CalendarIcon, ClockIcon, Globe2Icon } from "lucide-react";

export interface ScheduledSlot {
  date: string;
  dayLabel: string;
  time: string;
  timezone: string;
}

export const defaultDates = [
  { fullDate: "Wed, Oct 22", day: "Wed", dayNum: "22", month: "Oct" },
  { fullDate: "Thu, Oct 23", day: "Thu", dayNum: "23", month: "Oct" },
  { fullDate: "Fri, Oct 24", day: "Fri", dayNum: "24", month: "Oct" },
  { fullDate: "Mon, Oct 27", day: "Mon", dayNum: "27", month: "Oct" },
  { fullDate: "Tue, Oct 28", day: "Tue", dayNum: "28", month: "Oct" }
];

export const defaultTimeSlots = [
  "10:00 AM",
  "11:30 AM",
  "02:00 PM",
  "03:30 PM",
  "04:45 PM"
];

export const timezones = [
  { value: "America/New_York", label: "Eastern Time (US & Canada) - EST" },
  { value: "America/Los_Angeles", label: "Pacific Time (US & Canada) - PST" },
  { value: "Europe/London", label: "London / Dublin - GMT" },
  { value: "Asia/Kolkata", label: "India Standard Time - IST (UTC+5:30)" },
  { value: "Asia/Dubai", label: "Gulf Standard Time - Dubai (UTC+4)" },
  { value: "Asia/Singapore", label: "Singapore / Hong Kong (UTC+8)" }
];

interface InlineSchedulerProps {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  selectedTime: string;
  onSelectTime: (time: string) => void;
  selectedTimezone: string;
  onSelectTimezone: (tz: string) => void;
  durationMinutes?: number;
  hostName?: string;
  hostRole?: string;
  compact?: boolean;
}

export function InlineScheduler({
  selectedDate,
  onSelectDate,
  selectedTime,
  onSelectTime,
  selectedTimezone,
  onSelectTimezone,
  durationMinutes = 20,
  hostName = "Arjun Mehta",
  hostRole = "Lead HRMS Solutions Architect",
  compact = false
}: InlineSchedulerProps) {
  return (
    <div className="rounded-none border border-neutral-200 bg-neutral-50/70 p-4 sm:p-5">
      {/* Header with Host & Duration */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3.5 border-b border-neutral-200">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-xs">
            {hostName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="text-xs font-bold text-neutral-900">{hostName}</p>
            <p className="text-[11px] text-neutral-500">{hostRole}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs text-neutral-600">
          <span className="inline-flex items-center gap-1 font-semibold text-primary bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
            <ClockIcon size={12} />
            {durationMinutes} Min Session
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-neutral-500">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Google Meet
          </span>
        </div>
      </div>

      {/* 1. Date Selector Strip */}
      <div className="pt-3.5">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold text-neutral-800 flex items-center gap-1.5">
            <CalendarIcon size={13} className="text-primary" />
            Select Preferred Date
          </label>
          <span className="text-[11px] text-neutral-500 font-medium">Next available business days</span>
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          {defaultDates.map((d) => {
            const isSelected = selectedDate === d.fullDate;
            return (
              <button
                key={d.fullDate}
                type="button"
                onClick={() => onSelectDate(d.fullDate)}
                className={`flex flex-col items-center justify-center py-2 px-1 rounded-sm border transition-all cursor-pointer ${
                  isSelected
                    ? "border-primary bg-primary text-white shadow-2xs font-bold scale-[1.02]"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100"
                }`}
              >
                <span className={`text-[10px] uppercase font-semibold ${isSelected ? "text-teal-100" : "text-neutral-500"}`}>
                  {d.day}
                </span>
                <span className="text-sm font-extrabold leading-tight">{d.dayNum}</span>
                <span className={`text-[9px] ${isSelected ? "text-teal-200" : "text-neutral-400"}`}>{d.month}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Time Slot Selector */}
      <div className="pt-3.5">
        <label className="text-xs font-bold text-neutral-800 flex items-center gap-1.5 mb-2">
          <ClockIcon size={13} className="text-primary" />
          Select Time Slot ({selectedDate})
        </label>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
          {defaultTimeSlots.map((time) => {
            const isSelected = selectedTime === time;
            return (
              <button
                key={time}
                type="button"
                onClick={() => onSelectTime(time)}
                className={`py-1.5 px-2 rounded-sm border text-xs font-semibold transition-all cursor-pointer text-center ${
                  isSelected
                    ? "border-primary bg-teal-50 text-primary ring-1 ring-primary font-bold shadow-2xs"
                    : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100"
                }`}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Timezone Selector */}
      <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
          <Globe2Icon size={12} className="text-neutral-400" />
          <span>Timezone:</span>
        </div>
        <select
          value={selectedTimezone}
          onChange={(e) => onSelectTimezone(e.target.value)}
          className="bg-white border border-neutral-300 rounded-sm px-2 py-1 text-[11px] font-medium text-neutral-700 outline-none focus:border-primary max-w-full sm:max-w-xs"
        >
          {timezones.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
