import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
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

const listByTab: Record<SolutionTabId, SolutionItem[]> = {
  industry: industries,
  size: solutionsBySize,
  team: solutionsByTeam,
  region: solutionsByRegion
};

export function SolutionsSection() {
  const [tab, setTab] = useState<SolutionTabId>("industry");
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );

  const rawItems = listByTab[tab];
  // Triple the items to allow continuous smooth looping in both directions
  const items = [...rawItems, ...rawItems, ...rawItems];
  const [currentIndex, setCurrentIndex] = useState(rawItems.length);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Responsive card width calculation so 4 cards show on desktop with first and last cutting through window
  const cardWidth = useMemo(() => {
    if (windowWidth >= 1024) {
      // Desktop: 4 cards visible with first and last card cutting through left/right window edges
      return Math.min(460, Math.max(340, (windowWidth - 72) / 3.4));
    }
    if (windowWidth >= 640) {
      return Math.min(400, (windowWidth - 48) / 2.2);
    }
    return Math.max(280, windowWidth * 0.82);
  }, [windowWidth]);

  // Center the 2 middle cards and let the edge cards cut through the desktop window
  const targetX = useMemo(() => {
    const centerOffset = windowWidth / 2 - 12 - cardWidth;
    return centerOffset - currentIndex * (cardWidth + 24);
  }, [windowWidth, cardWidth, currentIndex]);

  const scrollOneCard = (dir: 1 | -1) => {
    setCurrentIndex((prev) => {
      const next = prev + dir;
      // Seamless loop within the duplicated array
      if (next >= rawItems.length * 2) return rawItems.length;
      if (next < rawItems.length) return rawItems.length * 2 - 1;
      return next;
    });
  };

  // Auto-scrolls 1 card every 3.5 seconds when not hovered/touched
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      scrollOneCard(1);
    }, 3500);

    return () => clearInterval(timer);
  }, [isHovered, rawItems.length]);

  // Reset to middle set when tab changes
  useEffect(() => {
    setCurrentIndex(rawItems.length);
  }, [tab, rawItems.length]);

  return (
    <section
      id="solutions"
      className="bg-accent-light py-16 md:py-20 overflow-hidden"
      aria-labelledby="solutions-title"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* Total Section Container: Header & Tabs stay intact inside max-w-7xl mx-auto px-6 */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="flex-1">
            <p className="pretitle text-primary">
              Solutions
            </p>
            <h2 id="solutions-title" className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Tailored to your size, industry, team and region
            </h2>
          </div>

          {/* Top-Right Navigation Controls (Left Arrow, View All Pill, Right Arrow) */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => scrollOneCard(-1)}
              aria-label="Previous solutions"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-xs transition-all duration-150 hover:border-primary hover:text-primary hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronLeftIcon size={18} strokeWidth={2} />
            </button>
            <Link
              to="/solutions"
              className="inline-flex h-10 items-center justify-center rounded-full border border-neutral-300 bg-white px-5 text-xs font-bold text-neutral-800 shadow-xs transition-all duration-150 hover:border-primary hover:text-primary hover:scale-105 cursor-pointer"
            >
              View all
            </Link>
            <button
              type="button"
              onClick={() => scrollOneCard(1)}
              aria-label="Next solutions"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-700 shadow-xs transition-all duration-150 hover:border-primary hover:text-primary hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ChevronRightIcon size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Tab Filters */}
        <div role="tablist" aria-label="Solution categories" className="mt-6 flex flex-wrap gap-2">
          {solutionTabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              type="button"
              aria-selected={tab === t.id}
              aria-controls="solutions-panel"
              onClick={() => setTab(t.id)}
              className={`h-10 rounded-full border px-5 text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                tab === t.id
                  ? "border-neutral-900 bg-neutral-900 text-white shadow-sm"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-500 hover:bg-neutral-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Full-Bleed 4-Card Track: First and last cards cut through the desktop window edges */}
      <div id="solutions-panel" role="tabpanel" className="mt-8 w-full overflow-hidden select-none">
        <motion.div
          animate={{ x: targetX }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="flex gap-6 w-max"
        >
          {items.map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              style={{ width: cardWidth }}
              className="shrink-0 flex flex-col"
            >
              <SolutionCard item={item} noBorderRadius={true} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}