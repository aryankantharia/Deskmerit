import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { DeskmeritLogo } from "./DeskmeritLogo";

export function DeskmeritHeader() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = (menu: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Top Announcement Bar */}
      <div className="bg-[#0F1730] text-white py-2 px-4 text-xs font-medium border-b border-[#24305A]">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="pulse-dot mr-1 shrink-0" />
          <span className="text-[#FFE6DF] font-semibold">Introducing Tracker Plus:</span>
          <span className="text-slate-300 hidden sm:inline">
            start tracking directly from Jira, Azure DevOps or OpenProject tasks
          </span>
          <Link
            to="/features/tracker-plus"
            className="inline-flex items-center gap-1 text-[#FF5A36] hover:text-[#FFA994] font-semibold underline underline-offset-4 ml-1 transition-colors"
          >
            See how it works <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Clean Luminous Navigation Bar (Exact Stripe Header Structure) */}
      <nav
        className={`w-full transition-all duration-300 bg-white ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_-5px_rgba(15,23,48,0.08)] border-b border-slate-200/80 py-3.5"
            : "border-b border-slate-100 py-4"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Logo & Nav Links */}
          <div className="flex items-center gap-8 xl:gap-10">
            {/* Clean Single-Line Logo Without Kombee Sub-line */}
            <DeskmeritLogo variant="horizontal" size="md" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 font-semibold text-[14px] text-[#0A2540]">
              {/* Product Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("product")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                    activeMenu === "product"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/50"
                      : "text-[#0A2540] hover:text-[#FF5A36] hover:bg-slate-50"
                  }`}
                  aria-expanded={activeMenu === "product"}
                >
                  Products <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "product" ? "rotate-180 text-[#FF5A36]" : "text-slate-400"}`} />
                </button>

                {/* Stripe-Style Mega Menu: 4 Main Columns + 1 "More" Sidebar Column + Image Card */}
                <AnimatePresence>
                  {activeMenu === "product" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.99 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-0 top-full pt-3 w-[920px]"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_30px_70px_-15px_rgba(15,23,48,0.22),0_15px_30px_-5px_rgba(15,23,48,0.08)] border border-slate-200/80 overflow-hidden text-[#0F1730]">
                        <div className="p-8 grid grid-cols-12 gap-8">
                          {/* 4 Main Columns (9 cols) */}
                          <div className="col-span-9 grid grid-cols-4 gap-6">
                            {/* Col 1: Tracking */}
                            <div className="space-y-4">
                              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                                Tracking
                              </h4>
                              <ul className="space-y-3.5">
                                <li>
                                  <Link to="/features/automatic-time-tracking" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Automatic tracking
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Background computer time
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/features/productivity-tracking" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Productivity scores
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      App & URL scoring per role
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/features/document-tracking" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Document tracking
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Window titles only
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/features/live-status" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Live status
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Refreshed every 60s
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/features/focus-timer" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Focus timer
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Pomodoro work intervals
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            {/* Col 2: Bill & Report */}
                            <div className="space-y-4">
                              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                                Bill & Report
                              </h4>
                              <ul className="space-y-3.5">
                                <li>
                                  <Link to="/features/tracker-plus" className="group block">
                                    <div className="flex items-center gap-1 font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      <span>Tracker Plus</span>
                                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-[#FFE6DF] text-[#C2361A]">
                                        ★ Key
                                      </span>
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Start from Jira/Azure task
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/features/project-time-tracking" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Project time & billing
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Rates, costs & budget alerts
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/features/timesheets-and-reports" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Timesheets & reports
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Audit-matched CSV/Excel
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/solutions/it-services" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Utilisation metrics
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Bench & margin visibility
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            {/* Col 3: People & Shifts */}
                            <div className="space-y-4">
                              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                                People & Shifts
                              </h4>
                              <ul className="space-y-3.5">
                                <li>
                                  <Link to="/features/attendance-tracking" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Attendance tracking
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Calendar & work presence
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/features/shift-scheduling" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Shift scheduling
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Templates & overtime flags
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/features/leave-management" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Leave management
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Shared absence calendar
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/features/idle-and-private-time" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Idle & Private Time
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Visible pause, never idle
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/features/screenshots" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Optional screenshots
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Off & blurred by default
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            {/* Col 4: Integrations */}
                            <div className="space-y-4">
                              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                                Embedded Modules
                              </h4>
                              <ul className="space-y-3.5">
                                <li>
                                  <Link to="/hrms-add-on" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Sqalible HRMS Add-on
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Native 1-click toggle
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/integrations/jira" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Jira & DevOps Sync
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Scoped personal tokens
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/developers/mcp-server" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      Claude MCP Server
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      Ask AI who is working
                                    </div>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/developers" className="group block">
                                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                                      REST API & Webhooks
                                    </div>
                                    <div className="text-[11px] text-[#4A5370] leading-tight mt-0.5">
                                      OpenAPI documentation
                                    </div>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* 5th Column: Right "More" Sidebar + Featured Promo Card (Stripe Style) */}
                          <div className="col-span-3 pl-6 border-l border-slate-100 flex flex-col justify-between">
                            <div className="space-y-4">
                              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                                More
                              </h4>
                              <ul className="space-y-2.5">
                                <li>
                                  <Link to="/privacy-promise" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors">
                                    Privacy promise
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/security" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors">
                                    Security & encryption
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/download" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors">
                                    Download desktop app
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/compare" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors">
                                    Competitor comparisons
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            {/* Stripe Sessions-Style Highlight Card */}
                            <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                              <div className="w-full h-20 rounded-lg bg-gradient-to-tr from-[#0F1730] to-[#24305A] p-3 text-white flex flex-col justify-between">
                                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FF5A36]">
                                  Tracker Plus
                                </span>
                                <span className="text-xs font-bold text-white leading-tight">
                                  Start tracking from Jira tasks.
                                </span>
                              </div>
                              <p className="text-[11px] text-[#4A5370] leading-snug">
                                See how engineering teams capture defensible hours without micromanagement.
                              </p>
                              <Link
                                to="/features/tracker-plus"
                                className="text-xs font-bold text-[#FF5A36] hover:underline flex items-center gap-1"
                              >
                                Watch demo <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Full Width Bottom Link Strip */}
                        <div className="px-8 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                          <Link to="/features" className="font-bold text-[#0A2540] hover:text-[#FF5A36] flex items-center gap-1">
                            See all features <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <span className="text-[11px] text-[#4A5370] flex items-center gap-1 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" /> Zero keystroke logging · Pure trust
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Solutions Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                    activeMenu === "solutions"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/50"
                      : "text-[#0A2540] hover:text-[#FF5A36] hover:bg-slate-50"
                  }`}
                  aria-expanded={activeMenu === "solutions"}
                >
                  Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "solutions" ? "rotate-180 text-[#FF5A36]" : "text-slate-400"}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === "solutions" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.99 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-[-80px] top-full pt-3 w-[840px]"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_30px_70px_-15px_rgba(15,23,48,0.22),0_15px_30px_-5px_rgba(15,23,48,0.08)] border border-slate-200/80 overflow-hidden text-[#0F1730]">
                        <div className="p-8 grid grid-cols-4 gap-6">
                          {/* By Industry */}
                          <div className="space-y-4">
                            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                              By Industry
                            </h4>
                            <ul className="space-y-3">
                              <li>
                                <Link to="/solutions/it-services" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">IT services</div>
                                  <div className="text-[11px] text-[#4A5370]">Prove billable hours</div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/staff-augmentation" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">Staff augmentation</div>
                                  <div className="text-[11px] text-[#4A5370]">Multi-client tokens</div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/agencies" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">Agencies</div>
                                  <div className="text-[11px] text-[#4A5370]">Retainer profitability</div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/bpo" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">BPO & contact centres</div>
                                  <div className="text-[11px] text-[#4A5370]">Shift adherence</div>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* By Team */}
                          <div className="space-y-4">
                            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                              By Team
                            </h4>
                            <ul className="space-y-3">
                              <li>
                                <Link to="/solutions/remote-teams" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">Remote teams</div>
                                  <div className="text-[11px] text-[#4A5370]">Outcomes over webcams</div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/hybrid-teams" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">Hybrid teams</div>
                                  <div className="text-[11px] text-[#4A5370]">One fair record</div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/office-teams" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">Office teams</div>
                                  <div className="text-[11px] text-[#4A5370]">Zero hardware</div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/solutions/hr" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">For HR</div>
                                  <div className="text-[11px] text-[#4A5370]">Audited attendance</div>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* By Region */}
                          <div className="space-y-4">
                            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                              By Region
                            </h4>
                            <ul className="space-y-3">
                              <li>
                                <Link to="/en-in" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">India (₹ INR)</div>
                                  <div className="text-[11px] text-[#4A5370]">DPDP Act & GST invoices</div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/en-au" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">Australia (A$ AUD)</div>
                                  <div className="text-[11px] text-[#4A5370]">NSW 14-day notice support</div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/en-nz" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">New Zealand (NZ$)</div>
                                  <div className="text-[11px] text-[#4A5370]">Privacy Act 2020 open data</div>
                                </Link>
                              </li>
                              <li>
                                <Link to="/en-ae" className="group block">
                                  <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36]">UAE & Saudi Arabia</div>
                                  <div className="text-[11px] text-[#4A5370]">Sun–Thu shift rules</div>
                                </Link>
                              </li>
                            </ul>
                          </div>

                          {/* Ecosystem & Add-on Highlight */}
                          <div className="space-y-4 pl-4 border-l border-slate-100 flex flex-col justify-between">
                            <div>
                              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540] mb-3">
                                Ecosystem
                              </h4>
                              <Link to="/hrms-add-on" className="block p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#FF5A36] transition-colors">
                                <span className="text-[10px] font-bold text-[#12B886] uppercase block">
                                  Native Add-on
                                </span>
                                <span className="font-bold text-xs text-[#0A2540] block mt-1">
                                  Sqalible HRMS Add-on
                                </span>
                                <span className="text-[11px] text-[#4A5370] block mt-0.5">
                                  Switch on directly in your HRMS console.
                                </span>
                              </Link>
                            </div>
                            <Link to="/partners/white-label" className="text-xs font-bold text-[#FF5A36] hover:underline flex items-center gap-1">
                              White-label for resellers <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Integrations Direct Link */}
              <Link
                to="/integrations"
                className="px-3 py-2 rounded-lg text-[#0A2540] hover:text-[#FF5A36] hover:bg-slate-50 transition-colors"
              >
                Integrations
              </Link>

              {/* Resources Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                    activeMenu === "resources"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/50"
                      : "text-[#0A2540] hover:text-[#FF5A36] hover:bg-slate-50"
                  }`}
                  aria-expanded={activeMenu === "resources"}
                >
                  Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "resources" ? "rotate-180 text-[#FF5A36]" : "text-slate-400"}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === "resources" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.99 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-[-160px] top-full pt-3 w-[720px]"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_30px_70px_-15px_rgba(15,23,48,0.22),0_15px_30px_-5px_rgba(15,23,48,0.08)] border border-slate-200/80 overflow-hidden p-8 text-[#0F1730]">
                        <div className="grid grid-cols-3 gap-8">
                          <div className="space-y-3">
                            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                              Learn
                            </h4>
                            <ul className="space-y-2.5">
                              <li>
                                <Link to="/blog" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors block">
                                  Blog & guides
                                </Link>
                              </li>
                              <li>
                                <Link to="/compare" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors block">
                                  DeskTime alternative
                                </Link>
                              </li>
                              <li>
                                <Link to="/privacy-promise" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors block">
                                  Employee privacy promise
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                              Support
                            </h4>
                            <ul className="space-y-2.5">
                              <li>
                                <Link to="/demo" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors block">
                                  Book product walkthrough
                                </Link>
                              </li>
                              <li>
                                <Link to="/download" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors block">
                                  Download desktop agent
                                </Link>
                              </li>
                              <li>
                                <Link to="/developers" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors block">
                                  Developer REST & MCP API
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                              Company
                            </h4>
                            <ul className="space-y-2.5">
                              <li>
                                <Link to="/about" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors block">
                                  About Deskmerit
                                </Link>
                              </li>
                              <li>
                                <Link to="/contact" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors block">
                                  Contact sales & support
                                </Link>
                              </li>
                              <li>
                                <Link to="/legal/privacy" className="text-xs font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors block">
                                  Privacy policy
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing Direct Link */}
              <Link
                to="/pricing"
                className="px-3 py-2 rounded-lg text-[#0A2540] hover:text-[#FF5A36] hover:bg-slate-50 transition-colors"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Right Action Items — Crisp, Single Line, No Wrapping */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Sign in / Log in (Never wraps) */}
            <a
              href="https://app.deskmerit.com"
              target="_blank"
              rel="noreferrer"
              className="text-[14px] font-semibold text-[#0A2540] hover:text-[#FF5A36] transition-colors px-2 py-1.5 whitespace-nowrap"
            >
              Sign in
            </a>

            {/* Book a Demo Button */}
            <Link
              to="/demo"
              className="px-4 py-2 rounded-xl text-[13px] font-semibold text-[#0A2540] bg-white border border-slate-300 hover:border-[#0A2540] hover:bg-slate-50 transition-all shadow-sm whitespace-nowrap"
            >
              Book a demo
            </Link>

            {/* Start Free Trial Primary Button */}
            <Link
              to="/signup"
              className="px-5 py-2.5 rounded-xl text-[13px] font-bold text-white bg-[#FF5A36] hover:bg-[#E94A27] transition-all shadow-[0_2px_10px_rgba(255,90,54,0.3)] hover:shadow-[0_4px_14px_rgba(255,90,54,0.4)] flex items-center gap-1.5 whitespace-nowrap group"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#0A2540] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-slate-200 bg-white text-[#0F1730] px-4 py-6 space-y-6 overflow-hidden max-h-[85vh] overflow-y-auto shadow-xl"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                    Product
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Link to="/features" className="p-2.5 rounded-lg bg-slate-50 text-xs font-semibold hover:text-[#FF5A36]">
                      All Features Overview
                    </Link>
                    <Link to="/features/tracker-plus" className="p-2.5 rounded-lg bg-[#FFE6DF]/50 text-xs font-bold text-[#C2361A]">
                      Tracker Plus ★ Key
                    </Link>
                    <Link to="/features/attendance-tracking" className="p-2.5 rounded-lg bg-slate-50 text-xs font-semibold hover:text-[#FF5A36]">
                      Attendance Tracking
                    </Link>
                    <Link to="/download" className="p-2.5 rounded-lg bg-slate-50 text-xs font-semibold hover:text-[#FF5A36]">
                      Download Desktop Agent
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                    Solutions
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Link to="/solutions/it-services" className="p-2.5 rounded-lg bg-slate-50 text-xs font-semibold hover:text-[#FF5A36]">
                      IT Services & Engineers
                    </Link>
                    <Link to="/hrms-add-on" className="p-2.5 rounded-lg bg-slate-50 text-xs font-semibold hover:text-[#FF5A36]">
                      Sqalible HRMS Add-on
                    </Link>
                    <Link to="/en-in" className="p-2.5 rounded-lg bg-slate-50 text-xs font-semibold hover:text-[#FF5A36]">
                      India (DPDP & GST)
                    </Link>
                    <Link to="/compare" className="p-2.5 rounded-lg bg-slate-50 text-xs font-semibold hover:text-[#FF5A36]">
                      DeskTime Alternative
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2 border-t border-slate-200 text-xs font-semibold">
                  <Link to="/integrations" className="py-1.5 hover:text-[#FF5A36]">
                    Integrations & MCP Server
                  </Link>
                  <Link to="/pricing" className="py-1.5 hover:text-[#FF5A36]">
                    Pricing
                  </Link>
                  <Link to="/privacy-promise" className="py-1.5 hover:text-[#FF5A36]">
                    Employee Privacy Promise
                  </Link>
                  <Link to="/about" className="py-1.5 hover:text-[#FF5A36]">
                    About Deskmerit
                  </Link>
                  <Link to="/blog" className="py-1.5 hover:text-[#FF5A36]">
                    Blog & Guides
                  </Link>
                </div>

                <div className="pt-4 flex flex-col gap-2.5">
                  <Link
                    to="/signup"
                    className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-[#FF5A36] shadow-sm"
                  >
                    Start free 14-day trial
                  </Link>
                  <Link
                    to="/demo"
                    className="w-full py-3 rounded-xl text-center text-xs font-semibold text-[#0F1730] border border-slate-300 bg-white"
                  >
                    Book a demo
                  </Link>
                  <a
                    href="https://app.deskmerit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center text-xs text-[#4A5370] py-1"
                  >
                    Already have an account? Sign in
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
