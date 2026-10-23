import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, MenuIcon, XIcon, UserIcon, ArrowRightIcon, BriefcaseIcon, ScaleIcon } from "lucide-react";
import { Logo } from "./Logo";
import { MenuPanel } from "./header/MenuPanel";
import { navItems } from "../data/navigation";
import { NavMenu } from "../types/navigation";

const ease = [0.23, 1, 0.32, 1] as const;

export function Header() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const activeMega = navItems.find(
    (item): item is NavMenu => item.type === "menu" && item.layout === "mega" && item.key === openKey
  );

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleOpen = (key: string) => {
    clearCloseTimeout();
    setOpenKey(key);
  };

  const handleScheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setOpenKey(null);
    }, 180);
  };

  const closeImmediate = () => {
    clearCloseTimeout();
    setOpenKey(null);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeImmediate();
        setMobileOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeImmediate();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", handleClickOutside);

    onScroll();

    return () => {
      clearCloseTimeout();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Keyboard navigation for top nav items
  const handleNavKeyDown = (e: React.KeyboardEvent, index: number, itemKey: string) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIdx = (index + 1) % navItems.length;
      navLinksRef.current[nextIdx]?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIdx = (index - 1 + navItems.length) % navItems.length;
      navLinksRef.current[prevIdx]?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      handleOpen(itemKey);
    }
  };

  return (
    <header
      ref={headerRef}
      onMouseEnter={clearCloseTimeout}
      onMouseLeave={handleScheduleClose}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-neutral-200 shadow-md"
          : "bg-white border-neutral-200/90 shadow-2xs"
      }`}
    >
      {/* Edge-to-Edge full width navigation bar */}
      <nav
        aria-label="Main Navigation"
        className={`w-full px-6 lg:px-10 flex items-center justify-between text-neutral-800 transition-all duration-200 ${
          scrolled ? "h-[56px]" : "h-[68px]"
        }`}
      >
        {/* Left: Brand Logo & Navigation Links */}
        <div className="flex items-center gap-8 xl:gap-10 h-full">
          <div className="flex items-center shrink-0">
            <Logo />
          </div>

          {/* Navigation Items (Desktop) */}
          <div className="hidden h-full items-center gap-1 xl:gap-2 xl:flex" role="menubar">
            {navItems.map((item, idx) =>
              item.type === "link" ? (
                <a
                  key={item.key}
                  ref={(el) => (navLinksRef.current[idx] = el)}
                  href={item.href}
                  role="menuitem"
                  onClick={closeImmediate}
                  onKeyDown={(e) => handleNavKeyDown(e, idx, item.key)}
                  className="rounded-md px-3 py-1.5 text-xs xl:text-sm font-semibold text-neutral-700 transition-colors duration-150 hover:text-primary hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {item.title}
                </a>
              ) : (
                <div
                  key={item.key}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleOpen(item.key)}
                >
                  <div
                    className={`flex items-center rounded-md transition-all duration-150 ${
                      openKey === item.key
                        ? "text-primary border border-primary/40 bg-teal-50/60 shadow-2xs"
                        : "text-neutral-700 hover:text-primary hover:bg-neutral-50 border border-transparent"
                    }`}
                  >
                    {/* 1. Clickable Text Link to Overview Page */}
                    <a
                      ref={(el) => (navLinksRef.current[idx] = el)}
                      href={item.href || "#"}
                      role="menuitem"
                      aria-haspopup="true"
                      aria-expanded={openKey === item.key}
                      onClick={closeImmediate}
                      onFocus={() => handleOpen(item.key)}
                      onKeyDown={(e) => handleNavKeyDown(e, idx, item.key)}
                      className="px-2.5 py-1.5 text-xs xl:text-sm font-semibold transition-colors focus-visible:outline-none"
                    >
                      {item.name}
                    </a>

                    {/* 2. Chevron Button for Click / Touch Toggle */}
                    <button
                      type="button"
                      aria-label={`Toggle ${item.name} menu`}
                      aria-expanded={openKey === item.key}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        clearCloseTimeout();
                        setOpenKey(openKey === item.key ? null : item.key);
                      }}
                      className="pr-2 pl-0.5 py-1.5 cursor-pointer text-neutral-400 hover:text-primary transition-colors focus-visible:outline-none"
                    >
                      <ChevronDownIcon
                        size={13}
                        strokeWidth={2}
                        className={`transition-transform duration-200 ${
                          openKey === item.key ? "rotate-180 text-primary" : "text-neutral-400"
                        }`}
                      />
                    </button>
                  </div>

                  {/* 3. Compact Dropdown Menu Variant (e.g. ScalForce) */}
                  {item.layout === "dropdown" && (
                    <AnimatePresence>
                      {openKey === item.key && (
                        <motion.div
                          role="menu"
                          aria-label={`${item.name} submenu`}
                          onMouseEnter={clearCloseTimeout}
                          initial={{ opacity: 0, y: 6, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.15, ease }}
                          className="absolute top-[calc(100%-2px)] left-0 w-80 sm:w-[380px] bg-white border border-neutral-200/90 rounded-2xl shadow-xl p-3 z-50 text-neutral-800"
                        >
                          <div className="px-3 pt-2 pb-1.5 border-b border-neutral-100 flex items-center justify-between">
                            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                              {item.heading || "ScalForce Solutions"}
                            </span>
                            <span className="text-[10px] font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200/60">
                              Shared Infrastructure
                            </span>
                          </div>

                          <div className="mt-2 space-y-1">
                            {item.subMenus.flatMap((sub) => sub.links).map((link) => {
                              const isCompare = link.href.includes("vs");
                              return (
                                <a
                                  key={link.title}
                                  href={link.href}
                                  role="menuitem"
                                  onClick={closeImmediate}
                                  className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-teal-50/70 border border-transparent hover:border-teal-200/60 transition-all cursor-pointer text-left"
                                >
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 group-hover:bg-primary group-hover:text-white transition-colors mt-0.5">
                                    {isCompare ? <ScaleIcon size={18} /> : <BriefcaseIcon size={18} />}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-primary transition-colors">
                                        {link.title}
                                      </span>
                                      {link.tag && (
                                        <span className="text-[9px] font-bold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded">
                                          {link.tag}
                                        </span>
                                      )}
                                    </div>
                                    <p className="text-[11px] sm:text-xs text-neutral-500 line-clamp-2 mt-0.5 leading-snug">
                                      {link.description}
                                    </p>
                                  </div>
                                </a>
                              );
                            })}
                          </div>

                          <div className="mt-2 pt-2 border-t border-neutral-100 px-3 pb-1 flex items-center justify-between text-[11px] text-neutral-500">
                            <span>Powered by Sqalible AI</span>
                            <a
                              href="/contact"
                              onClick={closeImmediate}
                              className="font-semibold text-primary hover:text-teal-700 flex items-center gap-1"
                            >
                              Request consultation →
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Right: Actions Cluster (Desktop) */}
        <div className="hidden items-center gap-3 xl:gap-4 xl:flex shrink-0">
          {/* 1. Login as text link */}
          <a
            href="https://app.sqalible.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 text-xs font-semibold text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-primary"
          >
            <UserIcon size={14} className="text-neutral-400" />
            Login
          </a>

          {/* 2. Book a Demo as secondary outline button */}
          <a
            href="/contact"
            className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border border-neutral-300 bg-white text-neutral-800 hover:bg-neutral-50 hover:border-neutral-400 px-4 text-xs font-semibold transition-all shadow-2xs hover:scale-105"
          >
            Book a demo
          </a>

          {/* 3. Start Free Trial as the ONLY filled primary button */}
          <a
            href="/signup"
            className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-primary hover:bg-teal-700 px-5 text-xs font-semibold text-white transition-all shadow-xs hover:shadow-md hover:scale-105"
          >
            Start free trial
          </a>
        </div>

        {/* Mobile Header Bar: CTA + Hamburger Menu button */}
        <div className="flex items-center gap-2 xl:hidden shrink-0">
          <a
            href="/contact"
            className="inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-primary hover:bg-teal-700 px-3.5 text-xs font-semibold text-white shadow-xs transition-colors"
          >
            Book a demo
          </a>

          <button
            type="button"
            className="rounded-full p-2 text-neutral-700 hover:bg-neutral-100 focus-visible:outline-none"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <XIcon size={22} strokeWidth={2} /> : <MenuIcon size={22} strokeWidth={2} />}
          </button>
        </div>
      </nav>

      {/* Edge-to-Edge Mega Menu Panel */}
      <AnimatePresence>
        {activeMega && (
          <motion.div
            key="desktop-mega-panel"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease }}
            className="absolute top-full left-0 right-0 w-full hidden xl:block z-50 bg-white border-b border-neutral-200 shadow-2xl"
          >
            <MenuPanel menu={activeMega} onNavigate={closeImmediate} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer (includes Login and Book a demo as requested) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="w-full border-b border-neutral-200 bg-white p-6 shadow-2xl xl:hidden max-h-[calc(100vh-68px)] overflow-y-auto text-neutral-900"
          >
            {/* Top Mobile Actions */}
            <div className="pb-4 mb-4 border-b border-neutral-200 flex items-center justify-between gap-3">
              <a
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="flex-1 inline-flex h-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-800 hover:bg-neutral-50 text-xs font-semibold"
              >
                Start free trial
              </a>
              <a
                href="https://app.sqalible.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-9 items-center justify-center px-4 text-xs font-semibold text-neutral-700 hover:text-neutral-900 gap-1.5"
              >
                <UserIcon size={14} className="text-neutral-500" />
                Login
              </a>
            </div>

            {/* Navigation Accordion */}
            <div className="space-y-1">
              {navItems.map((item) =>
                item.type === "link" ? (
                  <div key={item.key} className="border-b border-neutral-200 pb-3 pt-1">
                    <div className="flex w-full items-center justify-between py-2">
                      <a
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-body1 font-bold text-neutral-900 hover:text-primary flex items-center"
                      >
                        <span>{item.title}</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div key={item.key} className="border-b border-neutral-200 pb-3 pt-1">
                    <div className="flex w-full items-center justify-between py-2">
                      <a
                        href={item.href || "#"}
                        onClick={() => setMobileOpen(false)}
                        className="text-body1 font-bold text-neutral-900 hover:text-primary flex items-center"
                      >
                        <span>{item.name}</span>
                      </a>
                      <button
                        type="button"
                        aria-label={`Toggle ${item.name} submenus`}
                        onClick={() => setMobileSection(mobileSection === item.key ? null : item.key)}
                        className="p-1 text-neutral-500 hover:text-neutral-900 cursor-pointer"
                      >
                        <ChevronDownIcon
                          size={18}
                          className={`transition-transform duration-200 ${
                            mobileSection === item.key ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {mobileSection === item.key && (
                      <div className="mt-2 pl-3 space-y-3">
                        {item.subMenus.map((sub) => (
                          <div key={sub.name} className="border-l-2 border-teal-200 pl-3 py-1">
                            {item.layout !== "dropdown" && (
                              <a
                                href={sub.href || "#"}
                                onClick={() => setMobileOpen(false)}
                                className="text-xs font-bold text-primary hover:underline block"
                              >
                                {sub.name}
                              </a>
                            )}
                            <ul className="mt-1 space-y-1.5">
                              {sub.links.map((link) => (
                                <li key={link.title}>
                                  <a
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-0.5 text-xs text-neutral-700 hover:text-primary font-medium"
                                  >
                                    {link.title}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}