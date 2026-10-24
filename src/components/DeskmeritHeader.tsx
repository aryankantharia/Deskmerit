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
  Layers,
  Laptop,
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
    setCurrencyMenuOpen(false);
  }, [location.pathname]);

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
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-200">
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

      {/* Main Luminous Navigation Bar — Stripe Style */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(15,23,48,0.08)] border-b border-slate-200/80 py-3.5"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-4"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Navigation Links */}
          <div className="flex items-center gap-8 xl:gap-10">
            <DeskmeritLogo variant="horizontal" endorsement={true} size="md" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 font-semibold text-[13px] text-[#0F1730]">
              {/* Product Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("product")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                    activeMenu === "product"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/60"
                      : "text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100/60"
                  }`}
                  aria-expanded={activeMenu === "product"}
                >
                  Product <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "product" ? "rotate-180 text-[#FF5A36]" : "text-slate-400"}`} />
                </button>

                {/* Stripe-Style Product Mega Menu Panel */}
                <AnimatePresence>
                  {activeMenu === "product" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.99 }}
                      transition={{ duration: 0.16 }}
                      className="absolute left-0 top-full pt-3 w-[840px]"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(15,23,48,0.2),0_10px_25px_-5px_rgba(15,23,48,0.08)] border border-slate-200/80 overflow-hidden p-7 text-[#0F1730]">
                        <div className="grid grid-cols-12 gap-8">
                          {/* 3 Main Product Columns (8 cols) */}
                          <div className="col-span-8 grid grid-cols-3 gap-6">
                            {PRODUCT_MENU.columns.map((col) => (
                              <div key={col.title} className="space-y-3">
                                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2]">
                                  {col.title}
                                </h4>
                                <ul className="space-y-2">
                                  {col.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        to={item.href}
                                        className="group block p-1.5 -mx-1.5 rounded-lg hover:bg-[#F7F4EE] transition-all"
                                      >
                                        <div className="flex items-center gap-1 font-semibold text-xs text-[#0F1730] group-hover:text-[#FF5A36]">
                                          <span>{item.name}</span>
                                          {item.isPopular && (
                                            <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-[#FFE6DF] text-[#C2361A]">
                                              ★ Key
                                            </span>
                                          )}
                                        </div>
                                        {item.description && (
                                          <p className="text-[11px] text-[#4A5370] line-clamp-1 mt-0.5 font-normal">
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

                          {/* Right Highlight Card (Stripe Feature Spotlight Style) */}
                          <div className="col-span-4 pl-4 border-l border-slate-100 flex flex-col justify-between">
                            <div className="space-y-3">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF] px-2.5 py-0.5 rounded-full inline-block">
                                Flagship Innovation
                              </span>
                              <h5 className="text-sm font-bold text-[#0F1730] leading-snug">
                                Tracker Plus: Jira, Azure DevOps & OpenProject
                              </h5>
                              <p className="text-xs text-[#4A5370] leading-relaxed">
                                Start tracking directly from your PM task. One click updates attendance, Jira worklogs, and client billing.
                              </p>
                            </div>

                            <div className="pt-4">
                              <Link
                                to="/features/tracker-plus"
                                className="w-full inline-flex items-center justify-between p-3 rounded-xl bg-[#0F1730] text-white hover:bg-[#1A264F] transition-all text-xs font-semibold group shadow-sm"
                              >
                                <span>Explore Tracker Plus</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#FF5A36] group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Full-Width Mega Menu Bottom Strip */}
                        <div className="mt-6 pt-4 border-t border-slate-100 -mx-7 -mb-7 px-7 py-3 bg-[#F8FAFC] flex items-center justify-between text-xs text-[#4A5370]">
                          <div className="flex items-center gap-6">
                            {PRODUCT_MENU.bottomLinks.map((link) => (
                              <Link
                                key={link.label}
                                to={link.href}
                                className="text-[#0F1730] hover:text-[#FF5A36] font-semibold transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                          <span className="text-[11px] text-[#4A5370] flex items-center gap-1 font-medium">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" /> Zero keystroke logging · 100% Privacy by default
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
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                    activeMenu === "solutions"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/60"
                      : "text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100/60"
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
                      className="absolute left-[-100px] top-full pt-3 w-[840px]"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(15,23,48,0.2),0_10px_25px_-5px_rgba(15,23,48,0.08)] border border-slate-200/80 overflow-hidden p-7 text-[#0F1730]">
                        <div className="grid grid-cols-12 gap-8">
                          <div className="col-span-8 grid grid-cols-3 gap-6">
                            {SOLUTIONS_MENU.columns.map((col) => (
                              <div key={col.title} className="space-y-3">
                                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2]">
                                  {col.title}
                                </h4>
                                <ul className="space-y-2">
                                  {col.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        to={item.href}
                                        className="group block p-1.5 -mx-1.5 rounded-lg hover:bg-[#F7F4EE] transition-all"
                                      >
                                        <div className="font-semibold text-xs text-[#0F1730] group-hover:text-[#FF5A36]">
                                          {item.name}
                                        </div>
                                        {item.description && (
                                          <p className="text-[11px] text-[#4A5370] line-clamp-1 mt-0.5 font-normal">
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

                          {/* Right Highlight Box for Sqalible HRMS Add-on */}
                          <div className="col-span-4 pl-4 border-l border-slate-100 flex flex-col justify-between">
                            <div className="space-y-3">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#12B886] bg-[#E6F4EA] px-2.5 py-0.5 rounded-full inline-block">
                                Native HRMS Module
                              </span>
                              <h5 className="text-sm font-bold text-[#0F1730] leading-snug">
                                Deskmerit for Sqalible HRMS
                              </h5>
                              <p className="text-xs text-[#4A5370] leading-relaxed">
                                Already on Sqalible? Switch Deskmerit on in one click. Single directory, unified sign-in, and one monthly invoice.
                              </p>
                            </div>

                            <div className="pt-4">
                              <Link
                                to="/hrms-add-on"
                                className="w-full inline-flex items-center justify-between p-3 rounded-xl bg-[#0F1730] text-white hover:bg-[#1A264F] transition-all text-xs font-semibold group shadow-sm"
                              >
                                <span>Explore HRMS add-on</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#12B886] group-hover:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 -mx-7 -mb-7 px-7 py-3 bg-[#F8FAFC] flex items-center justify-between text-xs text-[#4A5370]">
                          <span className="text-[#0F1730] font-semibold">Specialized for engineering & IT services firms</span>
                          <Link to="/solutions/it-services" className="font-bold text-[#FF5A36] hover:underline flex items-center gap-1">
                            IT services solution details <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Integrations Direct Link */}
              <Link
                to="/integrations"
                className="px-3 py-2 rounded-lg text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100/60 transition-colors"
              >
                Integrations
              </Link>

              {/* Pricing Direct Link */}
              <Link
                to="/pricing"
                className="px-3 py-2 rounded-lg text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100/60 transition-colors"
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
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                    activeMenu === "resources"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/60"
                      : "text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100/60"
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
                      <div className="bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(15,23,48,0.2),0_10px_25px_-5px_rgba(15,23,48,0.08)] border border-slate-200/80 overflow-hidden p-7 text-[#0F1730]">
                        <div className="grid grid-cols-3 gap-6">
                          {RESOURCES_MENU.columns.map((col) => (
                            <div key={col.title} className="space-y-3">
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2]">
                                {col.title}
                              </h4>
                              <ul className="space-y-2">
                                {col.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      to={item.href}
                                      className="group block p-1.5 -mx-1.5 rounded-lg hover:bg-[#F7F4EE] transition-all"
                                    >
                                      <div className="font-semibold text-xs text-[#0F1730] group-hover:text-[#FF5A36]">
                                        {item.name}
                                      </div>
                                      {item.description && (
                                        <p className="text-[11px] text-[#4A5370] line-clamp-1 mt-0.5 font-normal">
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
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                    activeMenu === "compare"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/60"
                      : "text-[#0F1730] hover:text-[#FF5A36] hover:bg-slate-100/60"
                  }`}
                  aria-expanded={activeMenu === "compare"}
                >
                  Compare <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === "compare" ? "rotate-180 text-[#FF5A36]" : "text-slate-400"}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === "compare" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.99 }}
                      transition={{ duration: 0.16 }}
                      className="absolute right-0 top-full pt-3 w-[360px]"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_25px_60px_-15px_rgba(15,23,48,0.2),0_10px_25px_-5px_rgba(15,23,48,0.08)] border border-slate-200/80 overflow-hidden p-5 text-[#0F1730]">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#9AA1B2] px-2 pb-2">
                          Direct Competitor Alternatives
                        </div>
                        <ul className="space-y-1">
                          {COMPARE_MENU.items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="group block p-2 rounded-xl hover:bg-[#F7F4EE] transition-all"
                              >
                                <div className="font-semibold text-xs text-[#0F1730] group-hover:text-[#FF5A36]">
                                  {item.name}
                                </div>
                                <div className="text-[11px] text-[#4A5370] line-clamp-1">
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

          {/* Right Action Items — Stripe Style */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Currency Pill */}
            <div className="relative" ref={currencyMenuRef}>
              <button
                type="button"
                onClick={() => setCurrencyMenuOpen(!currencyMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#0F1730] bg-slate-100/80 hover:bg-slate-200/70 border border-slate-200/60 transition-all"
                aria-label="Select currency"
              >
                <span>{currency.flag}</span>
                <span>{currency.code}</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${currencyMenuOpen ? "rotate-180" : ""}`} />
              </button>

              {currencyMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50">
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
                        className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                          isSelected ? "text-[#FF5A36] font-bold bg-[#FFE6DF]/30" : "text-[#0F1730]"
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
              className="text-xs font-semibold text-[#4A5370] hover:text-[#0F1730] transition-colors px-2 py-1"
            >
              Log in
            </a>

            {/* Book a Demo Outline Button */}
            <Link
              to="/demo"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-[#0F1730] bg-white border border-slate-300 hover:border-[#0F1730] hover:bg-slate-50 transition-all shadow-sm"
            >
              Book a demo
            </Link>

            {/* Start Free Trial Primary Pill Button */}
            <Link
              to="/signup"
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#FF5A36] hover:bg-[#E94A27] transition-all shadow-[0_2px_10px_rgba(255,90,54,0.3)] hover:shadow-[0_4px_14px_rgba(255,90,54,0.4)] flex items-center gap-1 group"
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
              className="p-2 rounded-xl text-[#0F1730] hover:bg-slate-100 transition-colors"
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
                {/* Product Section */}
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                    Product
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Link to="/features" className="p-2.5 rounded-lg bg-slate-50 text-xs font-medium hover:text-[#FF5A36]">
                      All Features Overview
                    </Link>
                    <Link to="/features/tracker-plus" className="p-2.5 rounded-lg bg-[#FFE6DF]/40 text-xs font-bold text-[#C2361A]">
                      Tracker Plus ★ Flagship
                    </Link>
                    <Link to="/features/attendance-tracking" className="p-2.5 rounded-lg bg-slate-50 text-xs font-medium hover:text-[#FF5A36]">
                      Attendance Tracking
                    </Link>
                    <Link to="/download" className="p-2.5 rounded-lg bg-slate-50 text-xs font-medium hover:text-[#FF5A36]">
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
                    <Link to="/solutions/it-services" className="p-2.5 rounded-lg bg-slate-50 text-xs font-medium hover:text-[#FF5A36]">
                      IT Services & Engineers
                    </Link>
                    <Link to="/hrms-add-on" className="p-2.5 rounded-lg bg-slate-50 text-xs font-medium hover:text-[#FF5A36]">
                      Sqalible HRMS Add-on
                    </Link>
                    <Link to="/en-in" className="p-2.5 rounded-lg bg-slate-50 text-xs font-medium hover:text-[#FF5A36]">
                      India (DPDP & GST)
                    </Link>
                    <Link to="/compare" className="p-2.5 rounded-lg bg-slate-50 text-xs font-medium hover:text-[#FF5A36]">
                      DeskTime Alternative
                    </Link>
                  </div>
                </div>

                {/* Direct Links */}
                <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
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
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-[10px] uppercase font-bold text-[#9AA1B2] mb-2">
                    Currency ({currency.code})
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cCode) => (
                      <button
                        key={cCode}
                        onClick={() => setCurrencyCode(cCode)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          currencyCode === cCode
                            ? "bg-[#FF5A36] text-white font-bold"
                            : "bg-slate-100 text-[#0F1730] border border-slate-200"
                        }`}
                      >
                        {CURRENCIES[cCode].flag} {CURRENCIES[cCode].code}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile CTAs */}
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
