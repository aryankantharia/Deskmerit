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
    <header className="sticky top-0 z-50 w-full">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#0F1730] text-[#F7F4EE] py-2 px-4 text-xs sm:text-sm font-medium border-b border-[#24305A] transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
          <span className="pulse-dot mr-1 shrink-0" />
          <span className="text-[#FFE6DF]">Introducing Tracker Plus:</span>
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

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#F7F4EE]/95 backdrop-blur-md shadow-card border-b border-[#E6E2D8]"
            : "bg-[#F7F4EE] border-b border-[#E6E2D8]/70"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <DeskmeritLogo variant="horizontal" endorsement={true} size="md" />

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 font-medium text-sm text-[#0F1730]">
              {/* Product Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("product")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors ${
                    activeMenu === "product"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/60"
                      : "text-[#0F1730] hover:text-[#FF5A36] hover:bg-[#E6E2D8]/40"
                  }`}
                  aria-expanded={activeMenu === "product"}
                >
                  Product <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "product" ? "rotate-180" : ""}`} />
                </button>

                {/* Product Mega Menu Panel */}
                <AnimatePresence>
                  {activeMenu === "product" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full pt-2 w-[780px]"
                    >
                      <div className="bg-[#FFFFFF] rounded-2xl shadow-elevated border border-[#E6E2D8] overflow-hidden p-6">
                        <div className="grid grid-cols-3 gap-6">
                          {PRODUCT_MENU.columns.map((col) => (
                            <div key={col.title} className="space-y-3">
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4A5370]">
                                {col.title}
                              </h4>
                              <ul className="space-y-2">
                                {col.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      to={item.href}
                                      className="group block p-2 rounded-lg hover:bg-[#F7F4EE] transition-colors"
                                    >
                                      <div className="flex items-center gap-1.5 font-semibold text-sm text-[#0F1730] group-hover:text-[#FF5A36]">
                                        <span>{item.name}</span>
                                        {item.isPopular && (
                                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FFE6DF] text-[#C2361A]">
                                            ★ Key
                                          </span>
                                        )}
                                      </div>
                                      {item.description && (
                                        <p className="text-xs text-[#4A5370] line-clamp-1 mt-0.5 font-normal">
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
                        <div className="mt-6 pt-4 border-t border-[#E6E2D8] bg-[#F7F4EE]/60 -mx-6 -mb-6 px-6 py-3 flex items-center justify-between text-xs font-semibold text-[#0F1730]">
                          <div className="flex items-center gap-6">
                            {PRODUCT_MENU.bottomLinks.map((link) => (
                              <Link
                                key={link.label}
                                to={link.href}
                                className="text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                          <span className="text-slate text-[11px] font-normal">
                            No keystrokes · No webcams · Trust-first
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
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors ${
                    activeMenu === "solutions"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/60"
                      : "text-[#0F1730] hover:text-[#FF5A36] hover:bg-[#E6E2D8]/40"
                  }`}
                  aria-expanded={activeMenu === "solutions"}
                >
                  Solutions <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "solutions" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === "solutions" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-[-100px] top-full pt-2 w-[820px]"
                    >
                      <div className="bg-[#FFFFFF] rounded-2xl shadow-elevated border border-[#E6E2D8] overflow-hidden p-6">
                        <div className="grid grid-cols-3 gap-6">
                          {SOLUTIONS_MENU.columns.map((col) => (
                            <div key={col.title} className="space-y-3">
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4A5370]">
                                {col.title}
                              </h4>
                              <ul className="space-y-2">
                                {col.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      to={item.href}
                                      className="group block p-2 rounded-lg hover:bg-[#F7F4EE] transition-colors"
                                    >
                                      <div className="font-semibold text-sm text-[#0F1730] group-hover:text-[#FF5A36]">
                                        {item.name}
                                      </div>
                                      {item.description && (
                                        <p className="text-xs text-[#4A5370] line-clamp-1 mt-0.5 font-normal">
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

                        {/* Solutions Footer */}
                        <div className="mt-6 pt-4 border-t border-[#E6E2D8] bg-[#F7F4EE]/60 -mx-6 -mb-6 px-6 py-3 flex items-center justify-between text-xs font-semibold">
                          <div className="flex items-center gap-6">
                            {SOLUTIONS_MENU.bottomLinks.map((link) => (
                              <Link
                                key={link.label}
                                to={link.href}
                                className="text-[#0F1730] hover:text-[#FF5A36] transition-colors flex items-center gap-1"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                          <span className="text-[#C2361A] text-[11px] font-medium">
                            Built for teams that bill by the hour
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Integrations Link */}
              <Link
                to="/integrations"
                className="px-3.5 py-2 rounded-lg text-[#0F1730] hover:text-[#FF5A36] hover:bg-[#E6E2D8]/40 transition-colors"
              >
                Integrations
              </Link>

              {/* Pricing Link */}
              <Link
                to="/pricing"
                className="px-3.5 py-2 rounded-lg text-[#0F1730] hover:text-[#FF5A36] hover:bg-[#E6E2D8]/40 transition-colors"
              >
                Pricing
              </Link>

              {/* Resources Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("resources")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors ${
                    activeMenu === "resources"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/60"
                      : "text-[#0F1730] hover:text-[#FF5A36] hover:bg-[#E6E2D8]/40"
                  }`}
                  aria-expanded={activeMenu === "resources"}
                >
                  Resources <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "resources" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === "resources" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-[-60px] top-full pt-2 w-[540px]"
                    >
                      <div className="bg-[#FFFFFF] rounded-2xl shadow-elevated border border-[#E6E2D8] overflow-hidden p-6">
                        <div className="grid grid-cols-2 gap-6">
                          {RESOURCES_MENU.columns.map((col) => (
                            <div key={col.title} className="space-y-3">
                              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4A5370]">
                                {col.title}
                              </h4>
                              <ul className="space-y-2">
                                {col.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      to={item.href}
                                      className="group block p-2 rounded-lg hover:bg-[#F7F4EE] transition-colors"
                                    >
                                      <div className="font-semibold text-sm text-[#0F1730] group-hover:text-[#FF5A36]">
                                        {item.name}
                                      </div>
                                      {item.description && (
                                        <p className="text-xs text-[#4A5370] line-clamp-1 mt-0.5 font-normal">
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

                        <div className="mt-6 pt-4 border-t border-[#E6E2D8] bg-[#F7F4EE]/60 -mx-6 -mb-6 px-6 py-3 flex items-center justify-between text-xs font-semibold">
                          <div className="flex items-center gap-6">
                            {RESOURCES_MENU.bottomLinks.map((link) => (
                              <Link
                                key={link.label}
                                to={link.href}
                                className="text-[#0F1730] hover:text-[#FF5A36] transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Compare Trigger */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("compare")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg transition-colors ${
                    activeMenu === "compare"
                      ? "text-[#FF5A36] bg-[#FFE6DF]/60"
                      : "text-[#0F1730] hover:text-[#FF5A36] hover:bg-[#E6E2D8]/40"
                  }`}
                  aria-expanded={activeMenu === "compare"}
                >
                  Compare <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeMenu === "compare" ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeMenu === "compare" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute right-0 top-full pt-2 w-[420px]"
                    >
                      <div className="bg-[#FFFFFF] rounded-2xl shadow-elevated border border-[#E6E2D8] overflow-hidden p-6">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-[#4A5370] mb-3">
                          Alternatives
                        </h4>
                        <ul className="space-y-1.5">
                          {COMPARE_MENU.columns[0].items.map((item) => (
                            <li key={item.name}>
                              <Link
                                to={item.href}
                                className="group block p-2 rounded-lg hover:bg-[#F7F4EE] transition-colors"
                              >
                                <div className="font-semibold text-sm text-[#0F1730] group-hover:text-[#FF5A36]">
                                  {item.name}
                                </div>
                                <p className="text-xs text-[#4A5370] line-clamp-1 mt-0.5 font-normal">
                                  {item.description}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-4 pt-3 border-t border-[#E6E2D8] text-right">
                          <Link
                            to="/compare"
                            className="text-xs font-semibold text-[#FF5A36] hover:underline"
                          >
                            All comparisons →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3">
            {/* Locale / Currency Switcher Dropdown */}
            <div className="relative" ref={currencyMenuRef}>
              <button
                type="button"
                onClick={() => setCurrencyMenuOpen(!currencyMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-[#FFFFFF] border border-[#E6E2D8] text-[#0F1730] hover:border-[#4A5370] transition-colors"
                title="Select your country & currency"
                aria-label="Currency and region selector"
              >
                <span>{currency.flag}</span>
                <span className="hidden sm:inline">{currency.code}</span>
                <span>({currency.symbol.trim()})</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#4A5370]" />
              </button>

              <AnimatePresence>
                {currencyMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-56 bg-[#FFFFFF] rounded-xl shadow-elevated border border-[#E6E2D8] p-2 z-50"
                  >
                    <div className="text-[11px] font-semibold text-[#4A5370] uppercase px-3 py-1">
                      Choose currency & region
                    </div>
                    <div className="space-y-1 mt-1">
                      {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
                        const item = CURRENCIES[code];
                        const isSelected = item.code === currencyCode;
                        return (
                          <button
                            key={code}
                            type="button"
                            onClick={() => {
                              setCurrencyCode(code);
                              setCurrencyMenuOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg text-left transition-colors ${
                              isSelected
                                ? "bg-[#FFE6DF] text-[#C2361A] font-semibold"
                                : "text-[#0F1730] hover:bg-[#F7F4EE]"
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span>{item.flag}</span>
                              <span>{item.regionName}</span>
                              <span className="text-[#4A5370] font-normal">({item.symbol.trim()})</span>
                            </span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-[#C2361A]" />}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Log in */}
            <a
              href="https://app.deskmerit.io"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex text-xs font-semibold text-[#0F1730] hover:text-[#FF5A36] px-3 py-2 transition-colors"
            >
              Log in
            </a>

            {/* Book a Demo */}
            <Link
              to="/demo"
              className="hidden sm:inline-flex items-center justify-center text-xs font-semibold text-[#0F1730] bg-[#FFFFFF] hover:bg-[#F7F4EE] border border-[#0F1730] px-4 py-2.5 rounded-[12px] transition-all duration-200"
            >
              Book a demo
            </Link>

            {/* Start Free Trial (Primary CTA: 12px radius, Ember) */}
            <Link
              to="/signup"
              className="inline-flex items-center justify-center text-xs font-bold text-[#0F1730] bg-[#FF5A36] hover:bg-[#E94A27] px-4 sm:px-5 py-2.5 rounded-[12px] shadow-sm hover:shadow transition-all duration-200 group"
            >
              Start free trial
              <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0F1730] rounded-lg hover:bg-[#E6E2D8]/50"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-[#E6E2D8] bg-[#F7F4EE] px-4 pt-4 pb-8 space-y-4 max-h-[85vh] overflow-y-auto"
            >
              <div className="space-y-1">
                <Link
                  to="/"
                  className="block py-2 text-sm font-semibold text-[#0F1730]"
                >
                  Home
                </Link>

                <div className="py-2 border-t border-[#E6E2D8]/60">
                  <div className="text-xs font-bold text-[#4A5370] uppercase mb-2">Product</div>
                  <div className="grid grid-cols-1 gap-1 pl-2">
                    {PRODUCT_MENU.columns.flatMap((c) => c.items).slice(0, 7).map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="py-1.5 text-sm text-[#0F1730] hover:text-[#FF5A36]"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link to="/features" className="py-1.5 text-xs font-bold text-[#FF5A36]">
                      See all 14 features →
                    </Link>
                  </div>
                </div>

                <div className="py-2 border-t border-[#E6E2D8]/60">
                  <div className="text-xs font-bold text-[#4A5370] uppercase mb-2">Solutions</div>
                  <div className="grid grid-cols-1 gap-1 pl-2">
                    <Link to="/solutions/it-services" className="py-1 text-sm text-[#0F1730]">IT services</Link>
                    <Link to="/solutions/staff-augmentation" className="py-1 text-sm text-[#0F1730]">Staff augmentation</Link>
                    <Link to="/solutions/remote-teams" className="py-1 text-sm text-[#0F1730]">Remote teams</Link>
                    <Link to="/hrms-add-on" className="py-1 text-sm font-semibold text-[#FF5A36]">HRMS add-on (Sqalible)</Link>
                  </div>
                </div>

                <div className="py-2 border-t border-[#E6E2D8]/60 flex flex-col gap-2">
                  <Link to="/pricing" className="text-sm font-semibold text-[#0F1730]">Pricing</Link>
                  <Link to="/integrations" className="text-sm font-semibold text-[#0F1730]">Integrations</Link>
                  <Link to="/compare" className="text-sm font-semibold text-[#0F1730]">Compare alternatives</Link>
                  <Link to="/download" className="text-sm font-semibold text-[#0F1730]">Download desktop agent</Link>
                  <Link to="/privacy-promise" className="text-sm font-semibold text-[#0F1730]">Employee privacy promise</Link>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6E2D8] flex flex-col gap-2">
                <Link
                  to="/demo"
                  className="w-full text-center py-3 text-sm font-semibold rounded-[12px] bg-[#FFFFFF] border border-[#0F1730] text-[#0F1730]"
                >
                  Book a demo
                </Link>
                <Link
                  to="/signup"
                  className="w-full text-center py-3 text-sm font-bold rounded-[12px] bg-[#FF5A36] text-[#0F1730]"
                >
                  Start free 14-day trial
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
