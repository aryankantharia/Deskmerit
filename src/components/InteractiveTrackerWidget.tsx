import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Square, Shield, Clock, CheckCircle2, ChevronRight, Layers, Sparkles } from "lucide-react";

interface TaskItem {
  id: string;
  source: "Jira" | "Azure DevOps" | "OpenProject" | "Manual";
  client: string;
  title: string;
  category: "Productive" | "Neutral";
}

const SAMPLE_TASKS: TaskItem[] = [
  { id: "KMB-482", source: "Jira", client: "Acme Retail", title: "Checkout API refactor", category: "Productive" },
  { id: "KMB-479", source: "Jira", client: "Acme Retail", title: "Fix cart rounding bug", category: "Productive" },
  { id: "AD-904", source: "Azure DevOps", client: "Northwind", title: "Cloud billing pipeline export", category: "Productive" },
  { id: "OP-312", source: "OpenProject", client: "Contoso", title: "Infrastructure security audit", category: "Productive" },
  { id: "KMB-455", source: "Manual", client: "Internal", title: "Weekly sprint sync & planning", category: "Neutral" },
];

export function InteractiveTrackerWidget() {
  const [activeSource, setActiveSource] = useState<"Jira" | "Azure DevOps" | "OpenProject" | "Manual">("Jira");
  const [selectedTask, setSelectedTask] = useState<TaskItem>(SAMPLE_TASKS[0]);
  const [isTracking, setIsTracking] = useState(true);
  const [isPrivateTime, setIsPrivateTime] = useState(false);
  const [seconds, setSeconds] = useState(8049); // 02:14:09 default start
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Timer loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTracking && !isPrivateTime) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTracking, isPrivateTime]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleToggleTracking = () => {
    if (isTracking) {
      setIsTracking(false);
      setIsPrivateTime(false);
      showToast("Tracking stopped. Session synced locally.");
    } else {
      setIsTracking(true);
      setIsPrivateTime(false);
      showToast(`Tracking started for ${selectedTask.id}`);
    }
  };

  const handleTogglePrivateTime = () => {
    if (isPrivateTime) {
      setIsPrivateTime(false);
      setIsTracking(true);
      showToast("Private Time ended. Work tracking resumed.");
    } else {
      setIsPrivateTime(true);
      showToast("Private Time active: No apps, titles or keystrokes logged.");
    }
  };

  const handleSelectTask = (task: TaskItem) => {
    setSelectedTask(task);
    setIsPrivateTime(false);
    setIsTracking(true);
    showToast(`Switched task to ${task.id} (${task.title})`);
  };

  // Format seconds to HH:MM:SS
  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const filteredTasks = SAMPLE_TASKS.filter(
    (t) => activeSource === "Manual" || t.source === activeSource || activeSource === "Jira"
  );

  return (
    <div className="relative">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 bg-[#0F1730] text-white text-xs px-4 py-2 rounded-full shadow-elevated border border-[#24305A] flex items-center gap-2 whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-[#12B886]" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Widget Window */}
      <div className="w-full max-w-[430px] mx-auto bg-[#0F1730] text-white rounded-[20px] p-5 shadow-2xl border border-[#24305A] transition-all">
        {/* Widget Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#24305A]">
          <div className="flex items-center gap-2">
            {/* Mini Live Loop */}
            <svg width="22" height="22" viewBox="0 0 64 64" fill="none">
              <path
                d="M 21 52 L 21 25 A 13 13 0 1 1 43.19 34.19"
                stroke="#FFFFFF"
                strokeWidth="8.5"
                strokeLinecap="round"
              />
              <circle cx="31.2" cy="37.7" r="5.4" fill="#FF5A36" />
            </svg>
            <span className="font-bold text-sm tracking-tight text-white">Deskmerit</span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-[#9AA1B2] ml-1">
              Desktop
            </span>
          </div>

          {/* Status Pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#24305A] border border-[#334173]">
            {isPrivateTime ? (
              <>
                <span className="w-2 h-2 rounded-full bg-[#5B6CFF]" />
                <span className="text-[#5B6CFF]">Private Time</span>
              </>
            ) : isTracking ? (
              <>
                <span className="w-2 h-2 rounded-full bg-[#12B886] animate-pulse" />
                <span className="text-[#12B886]">Tracking</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-full bg-[#9AA1B2]" />
                <span className="text-[#9AA1B2]">Paused</span>
              </>
            )}
          </div>
        </div>

        {/* Current Working Task & Big Digital Timer */}
        <div className="py-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#9AA1B2]">
                {selectedTask.source} · {selectedTask.id}
              </div>
              <h4 className="font-bold text-base text-white mt-0.5 truncate max-w-[210px]">
                {selectedTask.title}
              </h4>
              <p className="text-xs text-[#9AA1B2] mt-0.5">{selectedTask.client}</p>
            </div>

            {/* Stopwatch */}
            <div className="text-right">
              <div className="font-mono text-2xl font-bold tracking-tight text-white tnum">
                {formatTime(seconds)}
              </div>
              <div className="text-[10px] text-[#12B886] font-medium flex items-center justify-end gap-1 mt-0.5">
                <CheckCircle2 className="w-3 h-3" /> Auto-syncing
              </div>
            </div>
          </div>

          {/* Buttons: 12px radius, 48px height matching brand guidelines */}
          <div className="grid grid-cols-2 gap-2.5 mt-5">
            <button
              type="button"
              onClick={handleToggleTracking}
              className={`h-11 px-4 rounded-[12px] font-extrabold text-xs flex items-center justify-center gap-2 transition-all ${
                isTracking && !isPrivateTime
                  ? "bg-[#24305A] hover:bg-[#334173] text-white border border-[#384574]"
                  : "bg-[#FF5A36] hover:bg-[#E94A27] text-white shadow-md hover:shadow-glow-ember"
              }`}
            >
              {isTracking && !isPrivateTime ? (
                <>
                  <Square className="w-3.5 h-3.5 fill-current text-[#FF5A36]" /> Stop
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" /> Start tracking
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleTogglePrivateTime}
              className={`h-11 px-4 rounded-[12px] font-semibold text-xs border transition-all flex items-center justify-center gap-1.5 ${
                isPrivateTime
                  ? "bg-[#5B6CFF] text-white border-[#5B6CFF]"
                  : "bg-[#24305A] text-[#F7F4EE] border-[#334173] hover:bg-[#2c3b6f]"
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              {isPrivateTime ? "Resume work" : "Private Time"}
            </button>
          </div>
        </div>

        {/* Integration Task Picker Tabs */}
        <div className="pt-3 border-t border-[#24305A]">
          <div className="text-[11px] font-semibold text-[#9AA1B2] mb-2 flex items-center justify-between">
            <span>Live tasks from PM tools</span>
            <span className="text-[10px] text-[#12B886]">Connected live</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 p-1 bg-[#24305A]/70 rounded-lg text-xs font-medium mb-3">
            {(["Jira", "Azure DevOps", "OpenProject", "Manual"] as const).map((source) => (
              <button
                key={source}
                type="button"
                onClick={() => setActiveSource(source)}
                className={`flex-1 py-1 px-1.5 rounded-md text-[11px] transition-colors truncate ${
                  activeSource === source
                    ? "bg-[#0F1730] text-white font-semibold shadow-sm"
                    : "text-[#9AA1B2] hover:text-white"
                }`}
              >
                {source}
              </button>
            ))}
          </div>

          {/* Task List */}
          <div className="space-y-1.5 max-h-[145px] overflow-y-auto pr-1">
            {filteredTasks.map((task) => {
              const isSelected = selectedTask.id === task.id;
              return (
                <button
                  key={task.id}
                  type="button"
                  onClick={() => handleSelectTask(task)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between ${
                    isSelected
                      ? "bg-[#24305A] border border-[#FF5A36]/50 text-white"
                      : "bg-[#172348]/40 hover:bg-[#24305A]/70 text-[#9AA1B2]"
                  }`}
                >
                  <div className="min-w-0 pr-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-[#0F1730] text-[#9AA1B2]">
                        {task.id}
                      </span>
                      <span className="text-xs font-medium text-white truncate">
                        {task.title}
                      </span>
                    </div>
                    <div className="text-[10px] text-[#9AA1B2] mt-0.5">
                      {task.client} · {task.source}
                    </div>
                  </div>
                  <div className="shrink-0">
                    {isSelected ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A36] inline-block animate-pulse" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5 text-[#9AA1B2]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer info: Today summary */}
        <div className="mt-4 pt-3 border-t border-[#24305A] flex items-center justify-between text-xs text-[#9AA1B2]">
          <span className="flex items-center gap-1 text-white font-medium">
            <Clock className="w-3.5 h-3.5 text-[#FF5A36]" /> Today: 6h 12m
          </span>
          <span className="text-[#12B886] font-semibold">
            Productive 84%
          </span>
        </div>
      </div>
    </div>
  );
}
