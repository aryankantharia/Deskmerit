import React, { useState } from "react";
import { TrendingUp, Users, Clock, ShieldCheck, ChevronRight } from "lucide-react";

interface TeamMember {
  name: string;
  initials: string;
  avatarBg: string;
  time: string;
  status: "Tracking" | "Idle" | "Private";
  task: string;
  billable: boolean;
  timeline: { type: "tracking" | "idle" | "private" | "offline" | "unproductive"; width: string; time: string }[];
}

const TEAM_DATA: TeamMember[] = [
  {
    name: "Ananya R.",
    initials: "AR",
    avatarBg: "bg-amber-100 text-amber-800",
    time: "6h 12m",
    status: "Tracking",
    task: "Jira KMB-482 · Checkout API refactor",
    billable: true,
    timeline: [
      { type: "tracking", width: "45%", time: "09:00 - 13:00 (Productive)" },
      { type: "private", width: "10%", time: "13:00 - 13:45 (Lunch)" },
      { type: "tracking", width: "35%", time: "13:45 - 17:30 (Sprint task)" },
      { type: "idle", width: "10%", time: "17:30 - 18:00 (Meeting call)" },
    ],
  },
  {
    name: "Daniel K.",
    initials: "DK",
    avatarBg: "bg-blue-100 text-blue-800",
    time: "5h 40m",
    status: "Private",
    task: "Private Time · Doctor appointment",
    billable: false,
    timeline: [
      { type: "tracking", width: "35%", time: "09:30 - 12:30 (Frontend)" },
      { type: "private", width: "20%", time: "12:30 - 14:00 (Personal pause)" },
      { type: "tracking", width: "40%", time: "14:00 - 17:30 (PR Review)" },
      { type: "idle", width: "5%", time: "17:30 - 18:00" },
    ],
  },
  {
    name: "Fatima A.",
    initials: "FA",
    avatarBg: "bg-rose-100 text-rose-800",
    time: "6h 51m",
    status: "Tracking",
    task: "Azure DevOps AD-904 · Northwind export",
    billable: true,
    timeline: [
      { type: "tracking", width: "55%", time: "08:30 - 13:30 (DB migrations)" },
      { type: "unproductive", width: "5%", time: "13:30 - 13:50 (News)" },
      { type: "tracking", width: "40%", time: "13:50 - 17:40 (Client QA)" },
    ],
  },
  {
    name: "Wei L.",
    initials: "WL",
    avatarBg: "bg-indigo-100 text-indigo-800",
    time: "5h 58m",
    status: "Idle",
    task: "Client meeting on Teams (no input)",
    billable: true,
    timeline: [
      { type: "tracking", width: "40%", time: "10:00 - 13:00 (Architecture)" },
      { type: "idle", width: "25%", time: "13:00 - 14:30 (Vendor review)" },
      { type: "tracking", width: "35%", time: "14:30 - 17:30 (Code review)" },
    ],
  },
  {
    name: "Olivia M.",
    initials: "OM",
    avatarBg: "bg-emerald-100 text-emerald-800",
    time: "4h 47m",
    status: "Tracking",
    task: "OpenProject OP-312 · Security audit",
    billable: true,
    timeline: [
      { type: "tracking", width: "60%", time: "10:00 - 14:00 (Pen-testing)" },
      { type: "private", width: "15%", time: "14:00 - 14:45" },
      { type: "tracking", width: "25%", time: "14:45 - 16:30" },
    ],
  },
];

export function TeamLiveOverviewWidget() {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const getColorClass = (type: string) => {
    switch (type) {
      case "tracking":
        return "bg-[#12B886]"; // Mint
      case "idle":
        return "bg-[#F5A524]"; // Amber
      case "private":
        return "bg-[#5B6CFF]"; // Iris
      case "unproductive":
        return "bg-[#E5484D]"; // Rose
      case "offline":
      default:
        return "bg-[#9AA1B2]"; // Fog
    }
  };

  return (
    <div className="w-full bg-[#FFFFFF] rounded-[24px] p-6 shadow-elevated border border-[#E6E2D8] text-[#0F1730]">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E6E2D8]">
        <div>
          <h3 className="font-bold text-base text-[#0F1730]">Team overview</h3>
          <p className="text-xs text-[#4A5370]">Real-time work signals · Updated every 60s</p>
        </div>

        {/* Live Status Indicators */}
        <div className="flex items-center gap-3 text-xs font-semibold">
          <span className="flex items-center gap-1.5 text-[#12B886]">
            <span className="w-2 h-2 rounded-full bg-[#12B886] animate-pulse" />
            14 Tracking
          </span>
          <span className="flex items-center gap-1.5 text-[#F5A524]">
            <span className="w-2 h-2 rounded-full bg-[#F5A524]" />
            3 Idle
          </span>
          <span className="flex items-center gap-1.5 text-[#5B6CFF]">
            <span className="w-2 h-2 rounded-full bg-[#5B6CFF]" />
            2 Private
          </span>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="grid grid-cols-3 gap-3 py-4 border-b border-[#E6E2D8]">
        <div className="bg-[#F7F4EE] rounded-xl p-3 border border-[#E6E2D8]/60">
          <div className="text-[11px] font-semibold text-[#4A5370]">Productive time</div>
          <div className="text-xl font-bold text-[#0F1730] mt-0.5 tnum">82%</div>
          <div className="text-[10px] font-semibold text-[#12B886] flex items-center gap-0.5 mt-0.5">
            <TrendingUp className="w-3 h-3" /> ▲ 4% vs last week
          </div>
        </div>

        <div className="bg-[#F7F4EE] rounded-xl p-3 border border-[#E6E2D8]/60">
          <div className="text-[11px] font-semibold text-[#4A5370]">Tracked today</div>
          <div className="text-xl font-bold text-[#0F1730] mt-0.5 tnum">118h 40m</div>
          <div className="text-[10px] text-[#4A5370] font-medium mt-0.5 flex items-center gap-1">
            <Users className="w-3 h-3" /> 19 people active
          </div>
        </div>

        <div className="bg-[#F7F4EE] rounded-xl p-3 border border-[#E6E2D8]/60">
          <div className="text-[11px] font-semibold text-[#4A5370]">Billable</div>
          <div className="text-xl font-bold text-[#0F1730] mt-0.5 tnum">71%</div>
          <div className="text-[10px] font-semibold text-[#12B886] flex items-center gap-0.5 mt-0.5">
            <TrendingUp className="w-3 h-3" /> ▲ 2% vs target
          </div>
        </div>
      </div>

      {/* Team Activity Rows with The Day Line */}
      <div className="pt-4 space-y-3.5">
        <div className="flex items-center justify-between text-[11px] font-semibold text-[#4A5370] uppercase tracking-wider">
          <span>Employee & Task</span>
          <span>Today's timeline</span>
        </div>

        {TEAM_DATA.map((member) => (
          <div
            key={member.name}
            className="group p-2 -mx-2 rounded-xl hover:bg-[#F7F4EE] transition-all cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${member.avatarBg}`}
                >
                  {member.initials}
                </span>
                <span className="text-xs font-bold text-[#0F1730]">{member.name}</span>
                <span className="text-[11px] text-[#4A5370] hidden sm:inline truncate max-w-[180px]">
                  · {member.task}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold text-[#0F1730] tnum">
                  {member.time}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    member.status === "Tracking"
                      ? "bg-[#12B886]/15 text-[#0fa678]"
                      : member.status === "Private"
                      ? "bg-[#5B6CFF]/15 text-[#5B6CFF]"
                      : "bg-[#F5A524]/15 text-[#b97810]"
                  }`}
                >
                  {member.status}
                </span>
              </div>
            </div>

            {/* The Day Line signature bar */}
            <div className="h-2.5 w-full bg-[#E6E2D8] rounded-full overflow-hidden flex transition-all group-hover:h-3">
              {member.timeline.map((seg, idx) => (
                <div
                  key={idx}
                  style={{ width: seg.width }}
                  className={`h-full ${getColorClass(seg.type)} transition-opacity hover:opacity-80`}
                  title={`${member.name}: ${seg.time}`}
                  onMouseEnter={() => setHoveredSegment(`${member.name}: ${seg.time}`)}
                  onMouseLeave={() => setHoveredSegment(null)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Hover tooltip or legend */}
      <div className="mt-4 pt-3 border-t border-[#E6E2D8] flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#4A5370]">
        {hoveredSegment ? (
          <span className="font-semibold text-[#0F1730] truncate">
            {hoveredSegment}
          </span>
        ) : (
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#12B886]" /> Tracking
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#F5A524]" /> Idle
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#5B6CFF]" /> Private
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#E5484D]" /> Unproductive
            </span>
          </div>
        )}
        <span className="text-[10px] text-[#9AA1B2]">Sample data</span>
      </div>
    </div>
  );
}
