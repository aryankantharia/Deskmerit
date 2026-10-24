import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Globe,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  Sparkles,
  Check,
  ShieldCheck,
} from "lucide-react";
import { DeskmeritLogo } from "./DeskmeritLogo";
import {
  PRODUCT_MENU,
  SOLUTIONS_MENU,
  RESOURCES_MENU,
  COMPARE_MENU,
} from "../data/deskmeritNav";
import { useCurrency, CURRENCIES, CurrencyCode } from "../utils/currencyContext";

export function DeskmeritHeader() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyMenuOpen, setCurrencyMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { currencyCode, setCurrencyCode, currency } = useCurrency();
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currencyMenuRef = useRef<HTMLDivElement>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setCurrencyMenuOpen(false);
  }, [location.pathname]);

  // Click outside to close currency menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (currencyMenuRef.current && !currencyMenuRef.current.contains(e.target as Node)) {
        setCurrencyMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#0A0F1D] text-[#F7F4EE] py-2 px-4 text-xs font-medium border-b border-[#1E294B] transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
          <span className="pulse-dot mr-1 shrink-0" />
          <span className="text-[#FFE6DF] font-semibold">Introducing Tracker Plus:</span>
          <span className="text-gray-300 hidden sm:inline">
            start tracking from your Jira, Azure DevOps or OpenProject task
          </span>
          <Link
            to="/features/tracker-plus"
            className="inline-flex items-center gap-1 text-[#FF5A36] hover:text-[#FFA994] font-semibold underline underline-offset-4 ml-1 transition-colors"
          >
            See how it works <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Navigation Bar — Sqalible / Kombee Deep Navy Aesthetic */}
      <nav
        className={`w-full transition-all duration-300 bg-[#0F1730]/95 backdrop-blur-md border-b border-[#24305A] text-white ${
          scrolled ? "shadow-2xl py-3" : "py-4"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <DeskmeritLogo variant="reverse" endorsement={true} size="md" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 font-medium text-sm text-[#E2E8F0]">
              {/* Product Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("product")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    activeMenu === "product"
                      ? "text-[#FF5A36] bg-[#FF5A36]/15"
                      : "text-[#E2E8F0] hover:text-white hover:bg-[#1E294B]"
                  }`}
                  aria-expanded={activeMenu === "product"}
                >
                  Product <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "product" ? "rotate-180 text-[#FF5A36]" : ""}`} />
                </button>

                {/* Product Mega Menu Panel */}
                <AnimatePresence>
                  {activeMenu === "product" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-0 top-full pt-3 w-[780px]"
                    >
                      <div className="bg-[#0F1730] rounded-2xl shadow-2xl border border-[#24305A] overflow-hidden p-6 text-white">
                        <div className="grid grid-cols-3 gap-6">
                          {PRODUCT_MENU.columns.map((col) => (
                            <div key={col.title} className="space-y-3">
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2]">
                                {col.title}
                              </h4>
                              <ul className="space-y-1.5">
                                {col.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      to={item.href}
                                      className="group block p-2 rounded-xl hover:bg-[#1A264F] transition-all"
                                    >
                                      <div className="flex items-center gap-1.5 font-semibold text-xs text-white group-hover:text-[#FF5A36]">
                                        <span>{item.name}</span>
                                        {item.isPopular && (
                                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#FF5A36]/20 text-[#FF5A36] border border-[#FF5A36]/30">
                                            ★ Key
                                          </span>
                                        )}
                                      </div>
                                      {item.description && (
                                        <p className="text-[11px] text-[#9AA1B2] line-clamp-1 mt-0.5 font-normal">
                                          {item.description}
                                        </p>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        {/* Mega Menu Footer */}
                        <div className="mt-6 pt-4 border-t border-[#24305A] bg-[#0A0F1D] -mx-6 -mb-6 px-6 py-3 flex items-center justify-between text-xs text-[#9AA1B2]">
                          <div className="flex items-center gap-6">
                            {PRODUCT_MENU.bottomLinks.map((link) => (
                              <Link
                                key={link.label}
                                to={link.href}
                                className="text-[#E2E8F0] hover:text-[#FF5A36] font-medium transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                          <span className="text-[11px] text-[#9AA1B2] flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" /> Zero keystrokes · Trust-first
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
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    activeMenu === "solutions"
                      ? "text-[#FF5A36] bg-[#FF5A36]/15"
                      : "text-[#E2E8F0] hover:text-white hover:bg-[#1E294B]"
                  }`}
                  aria-expanded={activeMenu === "solutions"}
                >
                  Solutions <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "solutions" ? "rotate-180 text-[#FF5A36]" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === "solutions" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-[-100px] top-full pt-3 w-[820px]"
                    >
                      <div className="bg-[#0F1730] rounded-2xl shadow-2xl border border-[#24305A] overflow-hidden p-6 text-white">
                        <div className="grid grid-cols-3 gap-6">
                          {SOLUTIONS_MENU.columns.map((col) => (
                            <div key={col.title} className="space-y-3">
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2]">
                                {col.title}
                              </h4>
                              <ul className="space-y-1.5">
                                {col.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      to={item.href}
                                      className="group block p-2 rounded-xl hover:bg-[#1A264F] transition-all"
                                    >
                                      <div className="font-semibold text-xs text-white group-hover:text-[#FF5A36]">
                                        {item.name}
                                      </div>
                                      {item.description && (
                                        <p className="text-[11px] text-[#9AA1B2] line-clamp-1 mt-0.5 font-normal">
                                          {item.description}
                                        </p>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-[#24305A] bg-[#0A0F1D] -mx-6 -mb-6 px-6 py-3 flex items-center justify-between text-xs text-[#9AA1B2]">
                          <span className="text-white font-medium">Already using Sqalible HRMS?</span>
                          <Link
                            to="/hrms-add-on"
                            className="font-bold text-[#FF5A36] hover:underline flex items-center gap-1"
                          >
                            Explore native HRMS add-on <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Links */}
              <Link
                to="/integrations"
                className="px-3 py-2 rounded-xl text-xs font-semibold text-[#E2E8F0] hover:text-white hover:bg-[#1E294B] transition-colors"
              >
                Integrations
              </Link>

              <Link
                to="/pricing"
                className="px-3 py-2 rounded-xl text-xs font-semibold text-[#E2E8F0] hover:text-white hover:bg-[#1E294B] transition-colors"
              >
                Pricing
              </Link>

              {/* Resources Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    activeMenu === "resources"
                      ? "text-[#FF5A36] bg-[#FF5A36]/15"
                      : "text-[#E2E8F0] hover:text-white hover:bg-[#1E294B]"
                  }`}
                  aria-expanded={activeMenu === "resources"}
                >
                  Resources <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "resources" ? "rotate-180 text-[#FF5A36]" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === "resources" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-[-160px] top-full pt-3 w-[720px]"
                    >
                      <div className="bg-[#0F1730] rounded-2xl shadow-2xl border border-[#24305A] overflow-hidden p-6 text-white">
                        <div className="grid grid-cols-3 gap-6">
                          {RESOURCES_MENU.columns.map((col) => (
                            <div key={col.title} className="space-y-3">
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2]">
                                {col.title}
                              </h4>
                              <ul className="space-y-1.5">
                                {col.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      to={item.href}
                                      className="group block p-2 rounded-xl hover:bg-[#1A264F] transition-all"
                                    >
                                      <div className="font-semibold text-xs text-white group-hover:text-[#FF5A36]">
                                        {item.name}
                                      </div>
                                      {item.description && (
                                        <p className="text-[11px] text-[#9AA1B2] line-clamp-1 mt-0.5 font-normal">
                                          {item.description}
                                        </p>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Compare Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("compare")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors ${
                    activeMenu === "compare"
                      ? "text-[#FF5A36] bg-[#FF5A36]/15"
                      : "text-[#E2E8F0] hover:text-white hover:bg-[#1E294B]"
                  }`}
                  aria-expanded={activeMenu === "compare"}
                >
                  Compare <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "compare" ? "rotate-180 text-[#FF5A36]" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === "compare" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16 }}
                      className="absolute right-0 top-full pt-3 w-[340px]"
                    >
                      <div className="bg-[#0F1730] rounded-2xl shadow-2xl border border-[#24305A] overflow-hidden p-4 text-white">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2] px-3 pt-2 pb-1">
                          Honest Comparisons
                        </div>
                        <ul className="space-y-1">
                          {COMPARE_MENU.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="group block p-2.5 rounded-xl hover:bg-[#1A264F] transition-all"
                              >
                                <div className="font-semibold text-xs text-white group-hover:text-[#FF5A36]">
                                  {item.name}
                                </div>
                                <div className="text-[11px] text-[#9AA1B2] line-clamp-1">
                                  {item.description}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Currency / Region Selector */}
            <div className="relative" ref={currencyMenuRef}>
              <button
                type="button"
                onClick={() => setCurrencyMenuOpen(!currencyMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-[#E2E8F0] bg-[#1A264F] border border-[#2E3C6B] hover:bg-[#243363] transition-all"
                aria-label="Select currency and region"
              >
                <span>{currency.flag}</span>
                <span className="font-semibold">{currency.code}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#9AA1B2] transition-transform ${currencyMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {currencyMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-[#0F1730] rounded-xl shadow-2xl border border-[#24305A] py-1.5 z-50">
                  <div className="px-3 py-1 text-[10px] uppercase font-bold text-[#9AA1B2] tracking-wider">
                    Select Currency
                  </div>
                  {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => {
                    const c = CURRENCIES[cCode];
                    const isSelected = currencyCode === cCode;
                    return (
                      <button
                        key={cCode}
                        onClick={() => {
                          setCurrencyCode(cCode);
                          setCurrencyMenuOpen(false);
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-[#1A264F] transition-colors ${
                          isSelected ? "text-[#FF5A36] font-bold bg-[#FF5A36]/10" : "text-white"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{c.flag}</span>
                          <span>{c.code} ({c.symbol})</span>
                        </span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#FF5A36]" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Login Link */}
            <a
              href="https://app.deskmerit.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-[#E2E8F0] hover:text-white transition-colors"
            >
              Log in
            </a>

            {/* Book a Demo Button */}
            <Link
              to="/demo"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white border border-[#3A4A7C] hover:bg-[#1E294B] hover:border-white/40 transition-all"
            >
              Book a demo
            </Link>

            {/* Start Free Trial Primary Button */}
            <Link
              to="/signup"
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#0F1730] bg-[#FF5A36] hover:bg-[#E94A27] transition-all shadow-sm hover:shadow-glow-ember flex items-center gap-1 group"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-[#1E294B] transition-colors"
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
              className="lg:hidden border-t border-[#24305A] bg-[#0A0F1D] text-white px-4 py-6 space-y-6 overflow-hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="space-y-4">
                {/* Product Links Accordion */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                    Product
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Link to="/features" className="p-2 rounded-lg bg-[#0F1730] text-xs font-medium hover:text-[#FF5A36]">
                      All Features Overview
                    </Link>
                    <Link to="/features/tracker-plus" className="p-2 rounded-lg bg-[#0F1730] text-xs font-medium text-[#FF5A36]">
                      Tracker Plus ★ Flagship
                    </Link>
                    <Link to="/features/attendance-tracking" className="p-2 rounded-lg bg-[#0F1730] text-xs font-medium hover:text-[#FF5A36]">
                      Attendance Tracking
                    </Link>
                    <Link to="/download" className="p-2 rounded-lg bg-[#0F1730] text-xs font-medium hover:text-[#FF5A36]">
                      Download Desktop Agent
                    </Link>
                  </div>
                </div>

                {/* Solutions */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                    Solutions & Industry
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Link to="/solutions/it-services" className="p-2 rounded-lg bg-[#0F1730] text-xs font-medium hover:text-[#FF5A36]">
                      IT Services & Engineers
                    </Link>
                    <Link to="/hrms-add-on" className="p-2 rounded-lg bg-[#0F1730] text-xs font-medium hover:text-[#FF5A36]">
                      Sqalible HRMS Add-on
                    </Link>
                    <Link to="/en-in" className="p-2 rounded-lg bg-[#0F1730] text-xs font-medium hover:text-[#FF5A36]">
                      India (DPDP & GST)
                    </Link>
                    <Link to="/compare" className="p-2 rounded-lg bg-[#0F1730] text-xs font-medium hover:text-[#FF5A36]">
                      DeskTime Alternative
                    </Link>
                  </div>
                </div>

                {/* Direct Pages */}
                <div className="flex flex-col gap-2 pt-2 border-t border-[#24305A]">
                  <Link to="/integrations" className="text-xs font-semibold py-1.5 hover:text-[#FF5A36]">
                    Integrations & MCP Server
                  </Link>
                  <Link to="/pricing" className="text-xs font-semibold py-1.5 hover:text-[#FF5A36]">
                    Pricing & Calculator
                  </Link>
                  <Link to="/privacy-promise" className="text-xs font-semibold py-1.5 hover:text-[#FF5A36]">
                    Employee Privacy Promise
                  </Link>
                  <Link to="/about" className="text-xs font-semibold py-1.5 hover:text-[#FF5A36]">
                    About Deskmerit & Kombee
                  </Link>
                  <Link to="/blog" className="text-xs font-semibold py-1.5 hover:text-[#FF5A36]">
                    Blog & Guides
                  </Link>
                </div>

                {/* Currency Selector for Mobile */}
                <div className="pt-2 border-t border-[#24305A]">
                  <div className="text-[10px] uppercase font-bold text-[#9AA1B2] mb-2">
                    Currency ({currency.code})
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => (
                      <button
                        key={cCode}
                        onClick={() => setCurrencyCode(cCode)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                          currencyCode === cCode
                            ? "bg-[#FF5A36] text-[#0F1730] font-bold"
                            : "bg-[#0F1730] text-white border border-[#24305A]"
                        }`}
                      >
                        {CURRENCIES[cCode].flag} {CURRENCIES[cCode].code}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTAs */}
                <div className="pt-4 flex flex-col gap-3">
                  <Link
                    to="/signup"
                    className="w-full py-3 rounded-xl text-center text-xs font-bold text-[#0F1730] bg-[#FF5A36] shadow-sm"
                  >
                    Start free 14-day trial
                  </Link>
                  <Link
                    to="/demo"
                    className="w-full py-3 rounded-xl text-center text-xs font-semibold text-white border border-[#3A4A7C] bg-[#0F1730]"
                  >
                    Book a demo
                  </Link>
                  <a
                    href="https://app.deskmerit.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center text-xs text-[#9AA1B2] py-1"
                  >
                    Already have an account? Log in
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
