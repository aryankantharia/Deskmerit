import React, { useState } from "react";
import { SparklesIcon, XIcon, MessageSquareIcon, SendIcon } from "lucide-react";

type Message = {
  sender: "user" | "ai";
  text: string;
  actions?: { label: string; href?: string; onClick?: () => void }[];
};

export function SqalibleAssistantModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! I am Sqalible AI assistant. How can I assist you with employee lifecycle automation, live AI interviews, or HR tools today?",
      actions: [
        { label: "Explore Platform", href: "/platform/hire" },
        { label: "AI Live Interview", href: "/platform/ai-live-interview" },
        { label: "View Pricing", href: "/pricing" }
      ]
    }
  ]);

  const handleSend = (textToSend?: string) => {
    const q = textToSend || input;
    if (!q.trim()) return;

    const userMsg: Message = { sender: "user", text: q };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // AI responses based on HRMS product knowledge
    setTimeout(() => {
      let aiReply: Message;
      const lower = q.toLowerCase();

      if (lower.includes("cost") || lower.includes("price") || lower.includes("calculator") || lower.includes("quote") || lower.includes("plan")) {
        aiReply = {
          sender: "ai",
          text: "Sqalible offers transparent pooled hosting and dedicated enterprise tiers with pay-as-you-go metered AI add-ons. We also offer free online calculators for Gratuity, CTC breakdown, and Notice Pay.",
          actions: [
            { label: "View Pricing Plans", href: "/pricing" },
            { label: "Free HR Calculators", href: "/tools/gratuity-calculator" },
            { label: "Book a demo", href: "/contact" }
          ]
        };
      } else if (lower.includes("interview") || lower.includes("screening") || lower.includes("hire") || lower.includes("recruitment")) {
        aiReply = {
          sender: "ai",
          text: "Sqalible Hire features our flagship AI Live Interview—adaptive conversational avatar interviews that evaluate coding approach, problem solving, and communication with human-in-the-loop sign-off.",
          actions: [
            { label: "Try AI Live Interview", href: "/platform/ai-live-interview" },
            { label: "AI Resume Screening", href: "/platform/ai-resume-screening" }
          ]
        };
      } else if (lower.includes("leave") || lower.includes("attendance") || lower.includes("payroll") || lower.includes("policy")) {
        aiReply = {
          sender: "ai",
          text: "Sqalible Core manages employee databases, biometric clock-in sync, leave approvals, and multi-country statutory payroll compliance starting with India gratuity and PF.",
          actions: [
            { label: "Leave Management", href: "/platform/leave" },
            { label: "Attendance & Shifts", href: "/platform/attendance" },
            { label: "Payroll Compliance", href: "/platform/payroll-compliance" }
          ]
        };
      } else {
        aiReply = {
          sender: "ai",
          text: "Thank you for asking! Sqalible is the unified AI-native HRMS engineered to automate hiring, onboarding, attendance, compliance, and employee lifecycle operations.",
          actions: [
            { label: "Explore Platform", href: "/platform/hire" },
            { label: "Solutions by Industry", href: "/solutions/it-staffing" },
            { label: "Book a demo", href: "/contact" }
          ]
        };
      }

      setMessages((prev) => [...prev, aiReply]);
    }, 600);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-14 items-center gap-2.5 rounded-full bg-primary px-5 text-body2 font-semibold text-white shadow-xl transition-all duration-200 hover:bg-primary-hover hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Ask Sqalible AI"
        >
          <SparklesIcon size={18} className="animate-pulse text-teal-200" />
          <span>Ask Sqalible AI</span>
        </button>
      </div>

      {/* Chat Drawer / Modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] rounded-none border border-teal-200 bg-white shadow-2xl overflow-hidden font-sans">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-teal-600 bg-gradient-to-r from-primary to-[#03544E] px-5 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20">
                <SparklesIcon size={16} />
              </div>
              <div>
                <p className="text-body2 font-bold leading-tight">Ask Sqalible AI</p>
                <p className="text-[11px] text-teal-100">Intelligent Architecture Assistant</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-white/80 hover:bg-white/20 hover:text-white"
            >
              <XIcon size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="h-80 overflow-y-auto p-4 space-y-3.5 bg-neutral-50/50 text-body2">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-2.5 leading-relaxed text-caption ${
                    m.sender === "user"
                      ? "bg-primary text-white rounded-br-none"
                      : "border border-teal-100 bg-white text-neutral-800 rounded-bl-none shadow-sm"
                  }`}
                >
                  {m.text}
                </div>

                {m.actions && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {m.actions.map((act) => (
                      <a
                        key={act.label}
                        href={act.href}
                        onClick={act.onClick}
                        className="rounded-full border border-teal-200 bg-white px-2.5 py-1 text-[11px] font-medium text-teal-900 hover:bg-teal-50 hover:border-teal-300 transition-colors shadow-2xs"
                      >
                        {act.label} →
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-4 py-2 bg-white border-t border-neutral-100 flex gap-1.5 overflow-x-auto text-[11px]">
            <button
              type="button"
              onClick={() => handleSend("How much does a web app cost?")}
              className="shrink-0 rounded-md bg-neutral-100 px-2 py-1 text-neutral-600 hover:bg-neutral-200"
            >
              Cost Estimate?
            </button>
            <button
              type="button"
              onClick={() => handleSend("How can I hire developers?")}
              className="shrink-0 rounded-md bg-neutral-100 px-2 py-1 text-neutral-600 hover:bg-neutral-200"
            >
              Hire Developers?
            </button>
            <button
              type="button"
              onClick={() => handleSend("How many leave days do I have left?")}
              className="shrink-0 rounded-md bg-neutral-100 px-2 py-1 text-neutral-600 hover:bg-neutral-200"
            >
              Leave Days?
            </button>
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2 border-t border-neutral-200 p-3 bg-white"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about projects or services..."
              className="flex-1 text-caption text-neutral-900 outline-none px-2"
            />
            <button
              type="submit"
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors"
            >
              <SendIcon size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
