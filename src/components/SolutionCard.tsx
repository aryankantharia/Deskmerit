import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export interface SolutionCardItem {
  name: string;
  href: string;
  text: string;
  tag?: string;
  image?: string;
  meta?: string;
  actionLabel?: string;
}

export function SolutionCard({
  item,
  noBorderRadius = false,
  tabIndex,
  ariaHidden
}: {
  item: SolutionCardItem;
  noBorderRadius?: boolean;
  tabIndex?: number;
  ariaHidden?: boolean;
}) {
  return (
    <Link
      to={item.href}
      tabIndex={tabIndex}
      aria-hidden={ariaHidden}
      className="group flex h-full w-full flex-col overflow-hidden rounded-none bg-[#0B0F19] border border-neutral-800 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div
        className="relative aspect-[16/11] w-full overflow-hidden rounded-none bg-neutral-900"
      >
        <img
          src={item.image || "/dashboards/ai-interview-dashboard.png"}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {item.tag && (
          <span className="absolute top-3.5 right-3.5 rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-primary shadow-sm backdrop-blur-xs">
            {item.tag}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 bg-[#0B0F19]">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-teal-300 transition-colors line-clamp-1">
            {item.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
            {item.text}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-teal-400">
          <span className="inline-flex items-center gap-1.5 group-hover:text-teal-300 transition-colors">
            {item.actionLabel || "Explore"}
            <ArrowRightIcon
              size={14}
              strokeWidth={2}
              className="transition-transform duration-150 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
          {item.meta && (
            <span className="text-[11px] font-medium text-neutral-400 truncate max-w-[150px]">
              {item.meta}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
