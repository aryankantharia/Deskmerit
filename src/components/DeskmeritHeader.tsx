import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Menu,
  X,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  Layers,
  Cpu,
  Lock,
  Workflow,
  Clock,
  BarChart3,
  Users,
  CheckCircle2,
  Calendar,
  FileSpreadsheet,
} from "lucide-react";
import { DeskmeritLogo } from "./DeskmeritLogo";

export function DeskmeritHeader() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
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
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileSection(null);
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

      {/* Main Clean Luminous Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 bg-white relative ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_-5px_rgba(15,23,48,0.08)] border-b border-slate-200/80 py-3.5"
            : "border-b border-slate-100 py-4"
        }`}
        aria-label="Main Navigation"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Logo & Nav Links */}
          <div className="flex items-center gap-8 xl:gap-10">
            {/* Clean Single-Line Logo Without Kombee Sub-line */}
            <DeskmeritLogo variant="horizontal" size="md" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 font-semibold text-[14px] text-[#0A2540]">
              {/* Product Mega Menu Trigger */}
              <button
                type="button"
                onMouseEnter={() => handleMouseEnter("products")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                  activeMenu === "products"
                    ? "text-[#FF5A36] bg-[#FFE6DF]/50"
                    : "text-[#0A2540] hover:text-[#FF5A36] hover:bg-slate-50"
                }`}
                aria-expanded={activeMenu === "products"}
              >
                Products{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "products" ? "rotate-180 text-[#FF5A36]" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Solutions Mega Menu Trigger */}
              <button
                type="button"
                onMouseEnter={() => handleMouseEnter("solutions")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                  activeMenu === "solutions"
                    ? "text-[#FF5A36] bg-[#FFE6DF]/50"
                    : "text-[#0A2540] hover:text-[#FF5A36] hover:bg-slate-50"
                }`}
                aria-expanded={activeMenu === "solutions"}
              >
                Solutions{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "solutions" ? "rotate-180 text-[#FF5A36]" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Integrations Mega Menu Trigger */}
              <button
                type="button"
                onMouseEnter={() => handleMouseEnter("integrations")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                  activeMenu === "integrations"
                    ? "text-[#FF5A36] bg-[#FFE6DF]/50"
                    : "text-[#0A2540] hover:text-[#FF5A36] hover:bg-slate-50"
                }`}
                aria-expanded={activeMenu === "integrations"}
              >
                Integrations{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "integrations" ? "rotate-180 text-[#FF5A36]" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Resources Mega Menu Trigger */}
              <button
                type="button"
                onMouseEnter={() => handleMouseEnter("resources")}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                  activeMenu === "resources"
                    ? "text-[#FF5A36] bg-[#FFE6DF]/50"
                    : "text-[#0A2540] hover:text-[#FF5A36] hover:bg-slate-50"
                }`}
                aria-expanded={activeMenu === "resources"}
              >
                Resources{" "}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "resources" ? "rotate-180 text-[#FF5A36]" : "text-slate-400"
                  }`}
                />
              </button>

              {/* Pricing Direct Link */}
              <Link
                to="/pricing"
                onMouseEnter={() => handleMouseEnter("")}
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

        {/* FULL-WIDTH MEGA MENU (Spans 100% of max-w-7xl navbar bounds!) */}
        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.995 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 6, scale: 0.995 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full w-full pointer-events-auto z-50 pt-2"
              onMouseEnter={() => handleMouseEnter(activeMenu)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-2xl shadow-[0_30px_70px_-15px_rgba(15,23,48,0.24),0_15px_30px_-5px_rgba(15,23,48,0.08)] border border-slate-200/90 overflow-hidden text-[#0F1730]">
                  {activeMenu === "products" && renderProductsMegaMenu()}
                  {activeMenu === "solutions" && renderSolutionsMegaMenu()}
                  {activeMenu === "integrations" && renderIntegrationsMegaMenu()}
                  {activeMenu === "resources" && renderResourcesMegaMenu()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Responsive Mobile Navigation Drawer (Brand-Aligned: Exact Web Structure & Deskmerit Colors) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed inset-0 z-[100] bg-white overflow-y-auto flex flex-col justify-between px-6 py-6 lg:hidden font-sans"
            >
              <div>
                {/* Top Row: Wordmark Logo Left, Ember Close Button Right */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <DeskmeritLogo variant="horizontal" size="md" />
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-xl bg-[#FFE6DF] text-[#FF5A36] hover:bg-[#FFD4CA] flex items-center justify-center transition-colors shadow-xs"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                {/* Main Navigation List with Web-Matching Structured Accordions */}
                <div className="divide-y divide-slate-100 mt-2">
                  {/* 1. Products Section */}
                  <div className="py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(mobileSection === "products" ? null : "products")
                      }
                      className="w-full flex items-center justify-between font-extrabold text-[18px] text-[#0F1730] hover:text-[#FF5A36] transition-colors text-left"
                    >
                      <span className={mobileSection === "products" ? "text-[#FF5A36]" : ""}>
                        Products
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#FF5A36] transition-transform duration-200 ${
                          mobileSection === "products" ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === "products" && (
                      <div className="mt-3 pl-2 space-y-4 pt-1 animate-fade-in">
                        {/* Featured Tracker Plus Spotlight */}
                        <Link
                          to="/features/tracker-plus"
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-3 rounded-xl bg-[#FFE6DF]/70 border border-[#FFD4CA] text-xs font-bold text-[#C2361A] flex items-center justify-between shadow-xs"
                        >
                          <div>
                            <div className="font-extrabold text-[#C2361A]">Tracker Plus for Jira & DevOps</div>
                            <div className="text-[11px] text-[#0F1730] font-normal mt-0.5">Start work directly from sprint tasks</div>
                          </div>
                          <span className="text-[9px] uppercase px-2 py-0.5 bg-[#FF5A36] text-white rounded-md font-extrabold shrink-0">
                            ★ Key
                          </span>
                        </Link>

                        {/* Group: Tracking */}
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Tracking
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/features/automatic-time-tracking"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100 transition-colors"
                            >
                              Automatic Computer Tracking
                            </Link>
                            <Link
                              to="/features/productivity-tracking"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100 transition-colors"
                            >
                              Productivity Scores & App Analytics
                            </Link>
                            <Link
                              to="/features/document-tracking"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100 transition-colors"
                            >
                              Document Tracking (Window Titles Only)
                            </Link>
                            <Link
                              to="/features/live-status"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100 transition-colors"
                            >
                              Live Status Feed (60s Refresh)
                            </Link>
                          </div>
                        </div>

                        {/* Group: Bill & Report */}
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Bill & Report
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/features/billable-hours"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100 transition-colors"
                            >
                              Billable Hours & Client Invoicing
                            </Link>
                            <Link
                              to="/features/timesheet-approvals"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100 transition-colors"
                            >
                              Timesheet Approvals & Audit Trail
                            </Link>
                            <Link
                              to="/features/project-costing"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100 transition-colors"
                            >
                              Project Budgeting & Margins
                            </Link>
                          </div>
                        </div>

                        {/* Group: People & Shifts */}
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            People & Shifts
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/features/attendance-tracking"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100 transition-colors"
                            >
                              Attendance & Shift Scheduling
                            </Link>
                            <Link
                              to="/features/geofenced-punch"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100 transition-colors"
                            >
                              Geofenced Mobile Clock-in
                            </Link>
                            <Link
                              to="/download"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100 transition-colors"
                            >
                              Download Desktop App (Win/Mac/Linux)
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 2. Solutions Section */}
                  <div className="py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(mobileSection === "solutions" ? null : "solutions")
                      }
                      className="w-full flex items-center justify-between font-extrabold text-[18px] text-[#0F1730] hover:text-[#FF5A36] transition-colors text-left"
                    >
                      <span className={mobileSection === "solutions" ? "text-[#FF5A36]" : ""}>
                        Solutions
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#FF5A36] transition-transform duration-200 ${
                          mobileSection === "solutions" ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === "solutions" && (
                      <div className="mt-3 pl-2 space-y-4 pt-1 animate-fade-in">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            By Industry
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/solutions/it-services"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                            >
                              IT Services & Consultancies
                            </Link>
                            <Link
                              to="/solutions/software-development"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                            >
                              Software & Product Engineering
                            </Link>
                            <Link
                              to="/solutions/staff-augmentation"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                            >
                              Staff Augmentation
                            </Link>
                            <Link
                              to="/solutions/bpo-contact-centers"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                            >
                              BPO & Contact Centers
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            By Work Model & Ecosystem
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/solutions/remote-teams"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                            >
                              Remote & Hybrid Teams
                            </Link>
                            <Link
                              to="/hrms-add-on"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                            >
                              Sqalible HRMS Add-on
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 3. Integrations Section */}
                  <div className="py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(mobileSection === "integrations" ? null : "integrations")
                      }
                      className="w-full flex items-center justify-between font-extrabold text-[18px] text-[#0F1730] hover:text-[#FF5A36] transition-colors text-left"
                    >
                      <span className={mobileSection === "integrations" ? "text-[#FF5A36]" : ""}>
                        Integrations
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#FF5A36] transition-transform duration-200 ${
                          mobileSection === "integrations" ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === "integrations" && (
                      <div className="mt-3 pl-2 space-y-4 pt-1 animate-fade-in">
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Developer & Sprint Tools
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/integrations/jira"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                            >
                              Jira Software Bi-directional Sync
                            </Link>
                            <Link
                              to="/integrations/azure-devops"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                            >
                              Azure DevOps Work Items
                            </Link>
                            <Link
                              to="/developers/mcp-server"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                            >
                              Claude MCP AI Server
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-1.5">
                            Ecosystem & Directory
                          </div>
                          <div className="grid grid-cols-1 gap-1.5">
                            <Link
                              to="/developers"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                            >
                              REST API & Webhooks
                            </Link>
                            <Link
                              to="/integrations"
                              onClick={() => setMobileMenuOpen(false)}
                              className="p-2 rounded-lg bg-[#FFE6DF]/60 text-xs font-bold text-[#C2361A] hover:text-[#FF5A36] transition-colors"
                            >
                              Explore all 50+ Integrations →
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* 4. Resources Section */}
                  <div className="py-3.5">
                    <button
                      type="button"
                      onClick={() =>
                        setMobileSection(mobileSection === "resources" ? null : "resources")
                      }
                      className="w-full flex items-center justify-between font-extrabold text-[18px] text-[#0F1730] hover:text-[#FF5A36] transition-colors text-left"
                    >
                      <span className={mobileSection === "resources" ? "text-[#FF5A36]" : ""}>
                        Resources
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#FF5A36] transition-transform duration-200 ${
                          mobileSection === "resources" ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {mobileSection === "resources" && (
                      <div className="mt-3 pl-2 space-y-3 pt-1 animate-fade-in">
                        <Link
                          to="/privacy-promise"
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] block"
                        >
                          Employee Privacy Promise (Zero Keylogging)
                        </Link>
                        <Link
                          to="/compare"
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] block"
                        >
                          Competitor Comparisons (Hubstaff, Time Doctor)
                        </Link>
                        <Link
                          to="/security"
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] block"
                        >
                          Security, SOC2 & GDPR Compliance
                        </Link>
                        <Link
                          to="/blog"
                          onClick={() => setMobileMenuOpen(false)}
                          className="p-2 rounded-lg bg-slate-50 text-xs font-bold text-[#0F1730] hover:text-[#FF5A36] block"
                        >
                          Guides & Remote Playbooks
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Direct Link: Pricing */}
                  <div className="py-3.5">
                    <Link
                      to="/pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block font-extrabold text-[18px] text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                    >
                      Pricing
                    </Link>
                  </div>

                  {/* Direct Link: Sign in */}
                  <div className="py-3.5">
                    <a
                      href="https://app.deskmerit.com"
                      target="_blank"
                      rel="noreferrer"
                      className="block font-extrabold text-[18px] text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                    >
                      Sign in
                    </a>
                  </div>
                </div>

                {/* Deskmerit Brand Highlight Card (Replaces Purple Box) */}
                <Link
                  to="/features/tracker-plus"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 block p-4 rounded-2xl border border-[#FFE6DF] bg-gradient-to-br from-[#FFF9F7] via-white to-white hover:border-[#FF5A36] shadow-xs transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A36]" />
                      <span className="font-extrabold text-[14px] text-[#0F1730] group-hover:text-[#FF5A36] transition-colors">
                        Tracker Plus for Jira & DevOps
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-[#FF5A36] text-white">
                      ★ Key
                    </span>
                  </div>
                  <p className="text-xs text-[#4A5370] mt-2 leading-relaxed">
                    Synchronize billable work logs directly from Jira issues and Azure DevOps boards without manual time entry.
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-[#FF5A36]">
                    <span>Explore Tracker Plus</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>

              {/* Bottom Side-by-Side CTAs (Deskmerit Brand Colors: Ember Coral + White/Navy) */}
              <div className="pt-6 pb-2 grid grid-cols-2 gap-3 border-t border-slate-100 mt-6 bg-white">
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 px-4 rounded-xl bg-[#FF5A36] hover:bg-[#E04826] text-white font-bold text-xs sm:text-sm text-center shadow-md flex items-center justify-center gap-1.5 transition-all"
                >
                  <span>Start free trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/demo"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3.5 px-4 rounded-xl bg-white border border-slate-300 text-[#0F1730] font-bold text-xs sm:text-sm text-center hover:bg-slate-50 shadow-sm flex items-center justify-center transition-all"
                >
                  <span>Book a demo</span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );

  {/* ========================================================================= */}
  {/* 1. PRODUCTS FULL-WIDTH MEGA MENU (Stripe 4-Cols + Spotlight Card)         */}
  {/* ========================================================================= */}
  function renderProductsMegaMenu() {
    return (
      <div>
        <div className="p-8 grid grid-cols-12 gap-8">
          {/* 4 Main Structured Columns (9 Cols) */}
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

            {/* Col 4: Embedded Modules */}
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

          {/* 5th Column: Right "More" Sidebar + Featured Promo Card */}
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

            {/* Featured Highlight Card */}
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

        {/* Full-Width Bottom Link Strip */}
        <div className="px-8 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
          <Link to="/features" className="font-bold text-[#0A2540] hover:text-[#FF5A36] flex items-center gap-1">
            See all features <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[11px] text-[#4A5370] flex items-center gap-1 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" /> Zero keystroke logging · Pure trust
          </span>
        </div>
      </div>
    );
  }

  {/* ========================================================================= */}
  {/* 2. SOLUTIONS FULL-WIDTH MEGA MENU                                         */}
  {/* ========================================================================= */}
  function renderSolutionsMegaMenu() {
    return (
      <div>
        <div className="p-8 grid grid-cols-12 gap-8">
          {/* 4 Main Columns (9 Cols) */}
          <div className="col-span-9 grid grid-cols-4 gap-6">
            {/* Col 1: By Industry */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                By Industry
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/solutions/it-services" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      IT services
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Prove billable hours</div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/staff-augmentation" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Staff augmentation
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Multi-client tokens</div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/agencies" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Agencies & studios
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Retainer profitability</div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/bpo" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      BPO & contact centres
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Shift adherence</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: By Team */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                By Team Model
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/solutions/remote-teams" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Remote teams
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Outcomes over webcams</div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/hybrid-teams" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Hybrid teams
                    </div>
                    <div className="text-[11px] text-[#4A5370]">One fair record</div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/office-teams" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Office teams
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Zero hardware clocks</div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/hr" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      For HR & Ops
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Audited attendance</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: By Region */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                By Region
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/en-in" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      India (₹ INR)
                    </div>
                    <div className="text-[11px] text-[#4A5370]">DPDP Act & GST invoices</div>
                  </Link>
                </li>
                <li>
                  <Link to="/en-au" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Australia (A$ AUD)
                    </div>
                    <div className="text-[11px] text-[#4A5370]">NSW 14-day notice support</div>
                  </Link>
                </li>
                <li>
                  <Link to="/en-nz" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      New Zealand (NZ$)
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Privacy Act 2020 open data</div>
                  </Link>
                </li>
                <li>
                  <Link to="/en-ae" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      UAE & Saudi Arabia
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Sun–Thu shift rules</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: By Company Size */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                By Size
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/pricing" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Startups (1–20)
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Zero setup, instant start</div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/it-services" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Scaleups (20–150)
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Jira sprint automation</div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/staff-augmentation" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Mid-Market (150–1000)
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Role-based scoping</div>
                  </Link>
                </li>
                <li>
                  <Link to="/demo" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Enterprise (1000+)
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Dedicated tenant & SSO</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 5th Column: Ecosystem & Resellers */}
          <div className="col-span-3 pl-6 border-l border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                Ecosystem
              </h4>
              <Link to="/hrms-add-on" className="block p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#FF5A36] transition-colors">
                <span className="text-[10px] font-bold text-[#12B886] uppercase block">
                  Native Add-on
                </span>
                <span className="font-bold text-xs text-[#0A2540] block mt-1">
                  Sqalible HRMS Add-on
                </span>
                <span className="text-[11px] text-[#4A5370] block mt-0.5">
                  Switch on directly in your HRMS console with 1 click.
                </span>
              </Link>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <Link to="/partners/white-label" className="text-xs font-bold text-[#FF5A36] hover:underline flex items-center gap-1">
                White-label for resellers <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/demo" className="text-xs font-bold text-[#0A2540] hover:text-[#FF5A36] flex items-center gap-1">
                Book enterprise consultation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full Width Bottom Strip */}
        <div className="px-8 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
          <Link to="/solutions" className="font-bold text-[#0A2540] hover:text-[#FF5A36] flex items-center gap-1">
            Explore all customer solutions <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[11px] text-[#4A5370] flex items-center gap-1 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#12B886]" /> Proven across engineering, agency & BPO models
          </span>
        </div>
      </div>
    );
  }

  {/* ========================================================================= */}
  {/* 3. INTEGRATIONS FULL-WIDTH MEGA MENU                                      */}
  {/* ========================================================================= */}
  function renderIntegrationsMegaMenu() {
    return (
      <div>
        <div className="p-8 grid grid-cols-12 gap-8">
          {/* 4 Main Columns (9 Cols) */}
          <div className="col-span-9 grid grid-cols-4 gap-6">
            {/* Col 1: Issue Trackers & PM */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                Issue Trackers & PM
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/integrations/jira" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Jira Software
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Sprint sync & ticket timers</div>
                  </Link>
                </li>
                <li>
                  <Link to="/integrations/azure-devops" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Azure DevOps
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Boards & work items sync</div>
                  </Link>
                </li>
                <li>
                  <Link to="/integrations/openproject" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      OpenProject
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Open-source project tracking</div>
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      GitHub & Linear
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Issue ID auto-matching</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: HR & Payroll */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                HR & Payroll
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/hrms-add-on" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Sqalible HRMS
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Native 1-click attendance</div>
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Deel & Remote
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Cross-border payroll sync</div>
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      BambooHR
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Leave calendar import</div>
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Gusto & ADP
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Audit-ready CSV & API</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Collaboration & Calendar */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                Collaboration
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/integrations" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Slack Bot
                    </div>
                    <div className="text-[11px] text-[#4A5370]">/status commands & daily digest</div>
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Microsoft Teams
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Presence & meeting logs</div>
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Google Calendar
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Automatic meeting work time</div>
                  </Link>
                </li>
                <li>
                  <Link to="/integrations" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Outlook 365
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Calendar schedule sync</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Developer & AI */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                Developer & AI
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/developers/mcp-server" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Claude MCP Server
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Ask AI who is working & on what</div>
                  </Link>
                </li>
                <li>
                  <Link to="/developers" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      REST API v2
                    </div>
                    <div className="text-[11px] text-[#4A5370]">OpenAPI 3.0 documentation</div>
                  </Link>
                </li>
                <li>
                  <Link to="/developers" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Webhooks v2
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Real-time timer & punch events</div>
                  </Link>
                </li>
                <li>
                  <Link to="/download" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Rust Desktop Engine
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Local SQLite offline queue</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 5th Column: Integration Spotlight */}
          <div className="col-span-3 pl-6 border-l border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                Spotlight
              </h4>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FF5A36] block">
                  Tracker Plus for Jira
                </span>
                <p className="text-xs font-bold text-[#0F1730]">
                  Track directly inside Jira or Azure DevOps
                </p>
                <p className="text-[11px] text-[#4A5370] leading-snug">
                  Personal scoped tokens with zero admin credentials required.
                </p>
                <Link
                  to="/features/tracker-plus"
                  className="text-xs font-bold text-[#FF5A36] hover:underline flex items-center gap-1 pt-1"
                >
                  Learn how it connects <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link to="/developers" className="text-xs font-bold text-[#0A2540] hover:text-[#FF5A36] flex items-center gap-1">
                Request a custom integration <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full Width Bottom Strip */}
        <div className="px-8 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
          <Link to="/integrations" className="font-bold text-[#0A2540] hover:text-[#FF5A36] flex items-center gap-1">
            Browse all 50+ integrations in the directory <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[11px] text-[#4A5370] flex items-center gap-1 font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#FF5A36]" /> 2-minute API key setup · No IT ticket required
          </span>
        </div>
      </div>
    );
  }

  {/* ========================================================================= */}
  {/* 4. RESOURCES FULL-WIDTH MEGA MENU                                         */}
  {/* ========================================================================= */}
  function renderResourcesMegaMenu() {
    return (
      <div>
        <div className="p-8 grid grid-cols-12 gap-8">
          {/* 4 Main Columns (9 Cols) */}
          <div className="col-span-9 grid grid-cols-4 gap-6">
            {/* Col 1: Guides & Research */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                Guides & Research
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/blog" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      2026 Remote Report
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Global engineering benchmarks</div>
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-promise" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Employee Privacy Playbook
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Ethical tracking standards</div>
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/it-services" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Utilization Framework
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Protect billable margins</div>
                  </Link>
                </li>
                <li>
                  <Link to="/en-in" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      DPDP Compliance Guide
                    </div>
                    <div className="text-[11px] text-[#4A5370]">India data protection laws</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Alternative Comparisons */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                Comparisons
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/compare/desktime-alternative" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      DeskTime alternative
                    </div>
                    <div className="text-[11px] text-[#4A5370]">No keylogger, high trust</div>
                  </Link>
                </li>
                <li>
                  <Link to="/compare/hubstaff-alternative" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Hubstaff alternative
                    </div>
                    <div className="text-[11px] text-[#4A5370]">No webcam snapshots</div>
                  </Link>
                </li>
                <li>
                  <Link to="/compare/time-doctor-alternative" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Time Doctor alternative
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Transparent activity records</div>
                  </Link>
                </li>
                <li>
                  <Link to="/compare/activtrak-alternative" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      ActivTrak alternative
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Worker-first visibility</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Downloads & SDK */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                Downloads & SDK
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/download" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      macOS Desktop App
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Apple Silicon & Intel</div>
                  </Link>
                </li>
                <li>
                  <Link to="/download" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Windows 10/11 Agent
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Lightweight MSI installer</div>
                  </Link>
                </li>
                <li>
                  <Link to="/download" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Linux Daemon
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Debian, Ubuntu, Fedora</div>
                  </Link>
                </li>
                <li>
                  <Link to="/developers/mcp-server" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      MCP Server Package
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Install via npx deskmerit-mcp</div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Trust & Company */}
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                Trust & Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/privacy-promise" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      5 Privacy Tenets
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Non-negotiable ethical charter</div>
                  </Link>
                </li>
                <li>
                  <Link to="/security" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Security & SOC 2
                    </div>
                    <div className="text-[11px] text-[#4A5370]">AES-256 + TLS 1.3 encryption</div>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      About Deskmerit
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Our origin and team mission</div>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="group block">
                    <div className="font-bold text-[13px] text-[#0A2540] group-hover:text-[#FF5A36] transition-colors">
                      Contact Sales
                    </div>
                    <div className="text-[11px] text-[#4A5370]">Global response under 2 hours</div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 5th Column: Live Interactive Demo */}
          <div className="col-span-3 pl-6 border-l border-slate-100 flex flex-col justify-between">
            <div className="space-y-4">
              <h4 className="text-[12px] font-bold uppercase tracking-wider text-[#0A2540]">
                Interactive Tour
              </h4>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#FF5A36] block">
                  Interactive Simulator
                </span>
                <p className="text-xs font-bold text-[#0F1730]">
                  Try the desktop widget right in browser
                </p>
                <p className="text-[11px] text-[#4A5370] leading-snug">
                  Experience how Jira tasks are selected and offline sync works.
                </p>
                <Link
                  to="/demo"
                  className="text-xs font-bold text-[#FF5A36] hover:underline flex items-center gap-1 pt-1"
                >
                  Book 1-on-1 walkthrough <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <Link to="/legal/privacy" className="text-xs font-bold text-[#0A2540] hover:text-[#FF5A36] flex items-center gap-1">
                Legal & subprocessor disclosures <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Full Width Bottom Strip */}
        <div className="px-8 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
          <Link to="/blog" className="font-bold text-[#0A2540] hover:text-[#FF5A36] flex items-center gap-1">
            Visit Deskmerit Knowledge Hub & Guides <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[11px] text-[#4A5370] flex items-center gap-1 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" /> 24/7 dedicated engineering support
          </span>
        </div>
      </div>
    );
  }
}
