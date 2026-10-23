import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from "lucide-react";
import { industries } from "../data/home";
import {
  SolutionItem,
  SolutionTabId,
  solutionTabs,
  solutionsByRegion,
  solutionsBySize,
  solutionsByTeam
} from "../data/solutions";
import { SolutionCard } from "./SolutionCard";
import { IntegrationLogo } from "./IntegrationLogo";

const listByTab: Record<SolutionTabId, SolutionItem[]> = {
  industry: industries,
  size: solutionsBySize,
  team: solutionsByTeam,
  region: solutionsByRegion
};

interface PartnerItem {
  name: string;
  displayName?: string;
  category: "Communication" | "Identity" | "Job boards" | "Biometrics" | "Banking" | "Accounting";
}

const partners: PartnerItem[] = [
  { name: "HDFC / ICICI Corporate Banking", displayName: "HDFC / ICICI Banking", category: "Banking" },
  { name: "RazorpayX Payroll", category: "Banking" },
  { name: "QuickBooks & Zoho Books", displayName: "QuickBooks & Zoho", category: "Accounting" },
  { name: "Jira Software", category: "Communication" },
  { name: "Slack", category: "Communication" },
  { name: "Microsoft Teams", category: "Communication" },
  { name: "Google Workspace", category: "Identity" },
  { name: "Microsoft Entra (Azure AD)", displayName: "Microsoft Entra", category: "Identity" },
  { name: "Okta", category: "Identity" },
  { name: "LinkedIn Jobs", category: "Job boards" },
  { name: "Indeed", category: "Job boards" },
  { name: "ZKTeco Biometrics", category: "Biometrics" },
  { name: "Matrix Comsec", category: "Biometrics" },
  { name: "DeskTime & Toggl", category: "Biometrics" }
];

export function EcosystemSection() {
  const [tab, setTab] = useState<SolutionTabId>("industry");
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );

  // Filter tabs that have content; hide any empty tab
  const activeTabs = useMemo(() => {
    return solutionTabs.filter((t) => (listByTab[t.id] ?? []).length > 0);
  }, []);

  const rawItems = listByTab[tab] ?? [];
  const items = [...rawItems, ...rawItems, ...rawItems];
  const [currentIndex, setCurrentIndex] = useState(rawItems.length);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Card width matching old design: responsive width with smooth peek
  const cardWidth = useMemo(() => {
    if (windowWidth >= 1024) {
      return Math.min(460, Math.max(340, (windowWidth - 72) / 3.4));
    }
    if (windowWidth >= 640) {
      return Math.min(400, (windowWidth - 48) / 2.2);
    }
    return Math.min(330, Math.max(280, windowWidth - 56));
  }, [windowWidth]);

  const targetX = useMemo(() => {
    const centerOffset = (windowWidth - cardWidth) / 2;
    return centerOffset - currentIndex * (cardWidth + 24);
  }, [windowWidth, cardWidth, currentIndex]);

  const scrollOneCard = (dir: 1 | -1) => {
    setCurrentIndex((prev) => {
      const next = prev + dir;
      if (next >= rawItems.length * 2) return rawItems.length;
      if (next < rawItems.length) return rawItems.length * 2 - 1;
      return next;
    });
  };

  // Continuous auto-scroll when not hovered
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      scrollOneCard(1);
    }, 3800);
    return () => clearInterval(timer);
  }, [isHovered, rawItems.length]);

  useEffect(() => {
    setCurrentIndex(rawItems.length);
  }, [tab, rawItems.length]);

  return (
    <section id="ecosystem" className="bg-accent-light py-16 md:py-24 overflow-hidden border-b border-neutral-200" aria-labelledby="ecosystem-title">
      {/* 1. Solutions Header & Tab Selector */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex-1">
            <p className="pretitle text-primary">Tailored Architecture</p>
            <h2 id="ecosystem-title" className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Solutions for Every Size, Industry & Region
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-2xl leading-relaxed">
              Pre-configured statutory compliance rules, role rubrics, and biometric policies tailored for your operating environment.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => scrollOneCard(-1)}
              aria-label="Previous solution"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-xs hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <ChevronLeftIcon size={18} />
            </button>
            <Link
              to="/solutions"
              className="inline-flex h-9 items-center justify-center rounded-full border border-neutral-300 bg-white px-4 text-xs font-bold text-neutral-800 shadow-xs hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              View all
            </Link>
            <button
              type="button"
              onClick={() => scrollOneCard(1)}
              aria-label="Next solution"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-xs hover:border-primary hover:text-primary transition-colors cursor-pointer"
            >
              <ChevronRightIcon size={18} />
            </button>
          </div>
        </div>

        {/* Tab Filter Pills (hides any tab without content) */}
        <div role="tablist" aria-label="Solution categories" className="mt-6 flex flex-wrap gap-2">
          {activeTabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`h-9 rounded-full border px-4 text-xs font-semibold transition-all cursor-pointer ${
                tab === t.id
                  ? "border-neutral-900 bg-neutral-900 text-white shadow-xs"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500 hover:bg-neutral-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Solutions Carousel Track (Same size as old design, smooth auto-scroll, with cloned sets marked aria-hidden and tabindex=-1) */}
      <div
        className="mt-8 w-full overflow-hidden select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <motion.div
          animate={{ x: targetX }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="flex gap-6 w-max"
        >
          {items.map((item, idx) => {
            // First and third sets are purely visual infinite-loop clones: mark aria-hidden and tabindex="-1"
            const isClone = idx < rawItems.length || idx >= rawItems.length * 2;
            return (
              <div
                key={`${item.name}-${idx}`}
                style={{ width: cardWidth }}
                className="shrink-0 flex flex-col"
                aria-hidden={isClone ? "true" : undefined}
              >
                <SolutionCard
                  item={item}
                  noBorderRadius={true}
                  tabIndex={isClone ? -1 : 0}
                  ariaHidden={isClone}
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* 2. Integrations Marquee (Full-color SVGs, dark pill styling, hover effect matching Image 4) */}
      <div className="mt-16 bg-[#070D14] py-12 md:py-14 border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 mb-8 text-center relative">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-teal-400">
            Integrations
          </p>
          <h3 className="mt-1.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Works with the tools you already use
          </h3>
        </div>

        <div className="group relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-20 sm:w-32 bg-gradient-to-r from-[#070D14] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-20 sm:w-32 bg-gradient-to-l from-[#070D14] to-transparent" />

          <ul
            className="marquee flex w-max gap-3 sm:gap-4 items-center py-2 group-hover:[animation-play-state:paused]"
          >
            {/* Primary accessible set: Tab-accessible for screen readers and keyboard users */}
            {partners.map((item) => (
              <li key={`orig-${item.name}`}>
                <Link
                  to={`/integrations?category=${encodeURIComponent(item.category)}`}
                  className="group/tile flex h-11 sm:h-12 shrink-0 items-center justify-center gap-2.5 sm:gap-3 rounded-xl border border-white/10 bg-[#0B121E] hover:border-slate-400 hover:bg-[#132032] hover:shadow-md transition-all duration-200 px-4 sm:px-5 cursor-pointer select-none"
                  title={`View ${item.displayName || item.name} in ${item.category} integrations`}
                >
                  <IntegrationLogo name={item.name} monochrome={false} className="w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">
                    {item.displayName || item.name}
                  </span>
                </Link>
              </li>
            ))}

            {/* Cloned loop set: Marked aria-hidden="true" and tabIndex={-1} for WCAG accessibility */}
            {partners.map((item, i) => (
              <li key={`clone-${item.name}-${i}`} aria-hidden="true">
                <Link
                  to={`/integrations?category=${encodeURIComponent(item.category)}`}
                  tabIndex={-1}
                  className="group/tile flex h-11 sm:h-12 shrink-0 items-center justify-center gap-2.5 sm:gap-3 rounded-xl border border-white/10 bg-[#0B121E] hover:border-slate-400 hover:bg-[#132032] hover:shadow-md transition-all duration-200 px-4 sm:px-5 cursor-pointer select-none"
                >
                  <IntegrationLogo name={item.name} monochrome={false} className="w-5 h-5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">
                    {item.displayName || item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
