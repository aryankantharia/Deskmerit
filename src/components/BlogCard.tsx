import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, FileTextIcon, VideoIcon, BookOpenIcon, CheckCircle2Icon } from "lucide-react";

export interface BlogCardProps {
  title: string;
  excerpt?: string;
  text?: string;
  category?: string;
  tag?: string;
  date?: string;
  meta?: string;
  image?: string;
  href?: string;
  author?: string;
  authorRole?: string;
  authorAvatar?: string;
  actionLabel?: string;
}

export function BlogCard({
  title,
  excerpt,
  text,
  category,
  tag,
  date,
  meta,
  image,
  href = "#",
  author,
  authorRole,
  authorAvatar,
  actionLabel = "Read More"
}: BlogCardProps) {
  const displayTag = tag || category || "Resource";
  const displayMeta = date || meta;
  const description = excerpt || text;
  const isExternal = href.startsWith("http");

  // Default fallback image
  const cardImage = image || "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg";

  // Category badge icon
  const getBadgeIcon = () => {
    const lower = `${displayTag} ${title}`.toLowerCase();
    if (lower.includes("webinar") || lower.includes("session")) return <VideoIcon size={12} />;
    if (lower.includes("ebook") || lower.includes("playbook")) return <BookOpenIcon size={12} />;
    if (lower.includes("checklist") || lower.includes("template")) return <CheckCircle2Icon size={12} />;
    return <FileTextIcon size={12} />;
  };

  const CardInner = (
    <article className="group flex h-full flex-col justify-between rounded-none border border-neutral-200 bg-white p-5 sm:p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer">
      <div className="flex flex-col h-full justify-between">
        <div>
          {/* Card Image: Sharp edges matching reference design */}
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-none bg-neutral-100 mb-4">
            <img
              src={cardImage}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg";
              }}
            />
            {displayTag && (
              <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-primary shadow-xs backdrop-blur-xs">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-700 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-200">
                  {getBadgeIcon()}
                </span>
                <span>{displayTag}</span>
              </span>
            )}
          </div>

          {/* Category & Date / Format Meta */}
          <p className="text-xs font-semibold text-primary">
            {displayTag} {displayMeta ? `· ${displayMeta}` : ""}
          </p>

          {/* Title */}
          <h3 className="mt-2 text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            {title}
          </h3>

          {/* Excerpt / Summary */}
          {description && (
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        {/* Unified Footer: Author / Team Avatar + Pill Action Button matching PlatformCards reference */}
        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src={authorAvatar || "/team/dishant-mehta.jpg"}
              alt={author || "Sqalible Team"}
              className="h-8 w-8 rounded-full object-cover border border-neutral-200 shrink-0"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/team/dishant-mehta.jpg";
              }}
            />
            <div className="min-w-0">
              <p className="text-xs font-bold text-neutral-900 leading-tight truncate">
                {author ? `By ${author}` : "By Sqalible Team"}
              </p>
              <p className="text-[11px] text-neutral-500 leading-tight mt-0.5 truncate">
                {authorRole || displayMeta || "Sqalible Team"}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-transparent px-3.5 py-1.5 text-xs font-semibold text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-200 shrink-0">
            {actionLabel}
            <ArrowRightIcon size={13} />
          </span>
        </div>
      </div>
    </article>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardInner}
      </a>
    );
  }

  return (
    <Link to={href} className="block h-full">
      {CardInner}
    </Link>
  );
}
