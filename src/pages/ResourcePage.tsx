import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowRightIcon,
  SearchIcon,
  CheckCircle2Icon,
  SparklesIcon
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { PageCta } from "../components/layout/PageCta";
import { BlogCard } from "../components/BlogCard";
import { Badge } from "../components/Badge";
import { resourcePages } from "../data/pages";
import { NotFound } from "./NotFound";

export function ResourcePage() {
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const content = resourcePages[pathname];
  if (!content) return <NotFound />;

  // Extract unique categories for filter pills
  const allCategories: string[] = [
    "All",
    ...Array.from(new Set(content.items.map((i) => i.tag).filter((t): t is string => Boolean(t))))
  ];

  // Filter items by search query and category
  const filteredItems = content.items.filter((it) => {
    const matchesQuery = `${it.title} ${it.text} ${it.tag ?? ""}`
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const matchesCategory = selectedCategory === "All" || it.tag === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  const isStatus = pathname === "/status";
  const isChangelog = pathname === "/changelog";
  const isWebinar = pathname === "/resources/webinars";
  const isTemplate = pathname === "/tools/templates";
  const isBlog = pathname === "/blogs" || pathname === "/blog";

  const degraded = isStatus && content.items.some((i) => i.status === "Degraded");

  const resourceHeroImage = (() => {
    if (pathname === "/resources") return "/heroes/resources-hub-hero.jpg";
    if (pathname === "/resources/guides") return "/heroes/resources-guides-hero.jpg";
    if (pathname === "/resources/webinars") return "/heroes/resources-webinars-hero.jpg";
    if (pathname === "/customers") return "/heroes/resources-customers-hero.jpg";
    if (pathname === "/help") return "/heroes/resources-help-hero.jpg";
    if (pathname === "/tools/templates") return "/heroes/resources-templates-hero.jpg";
    if (pathname === "/changelog") return "/heroes/resources-changelog-hero.jpg";
    if (pathname === "/status") return "/heroes/resources-status-hero.jpg";
    if (pathname === "/blog" || pathname === "/blogs") return "/heroes/resources-blog-hero.jpg";
    return "/heroes/resources-hub-hero.jpg";
  })();

  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: content.pretitle }, { title: content.title }]}
        pretitle={content.pretitle}
        title={content.title}
        description={content.description}
        image={resourceHeroImage}
        imageAlt={content.title}
        showActions={false}
      />

      <section className="bg-white py-10 md:py-14" aria-label={content.title}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Status System Banner */}
          {isStatus && (
            <div
              className={`mb-10 flex items-center justify-between rounded-none p-6 ${
                degraded ? "bg-amber-50 border border-amber-200 text-amber-900" : "bg-emerald-50 border border-emerald-200 text-emerald-950"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full ${
                    degraded ? "bg-amber-500 animate-pulse" : "bg-emerald-500"
                  }`}
                />
                <div>
                  <h3 className="text-body1 font-bold">
                    {degraded ? "Some microservices experiencing latency" : "All Core HR & AI Systems Operational"}
                  </h3>
                  <p className="text-caption text-neutral-600 mt-0.5">
                    99.96% uptime maintained over the past 90 consecutive days. Real-time telemetry refreshed every 60 seconds.
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-block rounded-full bg-white px-3.5 py-1 text-xs font-semibold shadow-xs border border-neutral-200">
                SOC 2 Verified SLA
              </span>
            </div>
          )}

          {/* Search Field & Category Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">
            {/* Search Field with Consistent Rounded Design */}
            {content.searchable && (
              <div className="relative w-full max-w-xs shrink-0">
                <SearchIcon
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${content.title.toLowerCase()}...`}
                  className="w-full h-11 rounded-full border border-neutral-300 bg-white pl-11 pr-4 text-body2 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20 transition-all shadow-xs"
                />
              </div>
            )}

            {/* Category Pills */}
            {allCategories.length > 2 && (
              <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap py-1">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-primary text-white shadow-xs"
                        : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Featured Content Area (If Available and not filtering) */}
          {content.featured && selectedCategory === "All" && !query.trim() && (
            <div className="mb-14 overflow-hidden rounded-none border border-neutral-300 hover:border-neutral-500 bg-white text-neutral-900 shadow-xs transition-colors grid md:grid-cols-12 items-stretch md:h-[440px]">
              <div className="p-8 md:p-10 lg:p-12 md:col-span-7 flex flex-col justify-between h-full">
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-50 border border-teal-200 px-3.5 py-1 text-xs font-semibold text-teal-800 mb-4">
                    <SparklesIcon size={13} /> {content.featured.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 leading-tight">
                    {content.featured.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed line-clamp-3 md:line-clamp-4">
                    {content.featured.text}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-teal-700 px-6 py-3 text-xs font-semibold text-white shadow-xs transition-all hover:scale-105"
                  >
                    {content.featured.downloadText || "Access Resource"}
                    <ArrowRightIcon size={14} />
                  </a>
                  <span className="text-xs text-neutral-500 font-medium">{content.featured.meta}</span>
                </div>
              </div>
              <div className="md:col-span-5 h-64 md:h-full relative overflow-hidden bg-neutral-100">
                <img
                  src={content.featured.image}
                  alt={content.featured.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          )}

          {/* Status View */}
          {isStatus ? (
            <div className="rounded-none border border-neutral-200 overflow-hidden bg-white shadow-xs">
              <div className="bg-neutral-50 px-6 py-3.5 border-b border-neutral-200 text-caption font-semibold text-neutral-600 uppercase tracking-wider">
                System Component Health
              </div>
              <ul className="divide-y divide-neutral-100">
                {filteredItems.map((it) => (
                  <li key={it.title} className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-neutral-50/50 transition-colors">
                    <div>
                      <p className="text-body2 font-semibold text-neutral-900">{it.title}</p>
                      <p className="text-caption text-neutral-500 mt-0.5">{it.text}</p>
                    </div>
                    <Badge tone={it.status === "Operational" ? "success" : "warning"}>
                      {it.status}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ) : isChangelog ? (
            /* Changelog Timeline View */
            <div className="relative pl-6 md:pl-8 border-l-2 border-teal-500/30 space-y-10">
              {filteredItems.map((it) => (
                <div key={it.title} className="relative group">
                  <span className="absolute -left-[31px] md:-left-[39px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-600 text-white ring-4 ring-white shadow-xs">
                    <CheckCircle2Icon size={14} />
                  </span>
                  <div className="rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/40 hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800">
                        {it.tag}
                      </span>
                      <span className="text-caption font-medium text-neutral-400">{it.meta}</span>
                    </div>
                    <h3 className="text-h3 font-bold text-neutral-900">{it.title}</h3>
                    <p className="mt-2 text-body2 text-neutral-600 leading-relaxed">{it.text}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Rich Cards Grid for Guides, Webinars, Customers, Templates, and Blogs using unified BlogCard style */
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((it: any, idx: number) => {
                const defaultImgs = [
                  "/30211371-c4d3-450a-a62d-25f6fb4da85e.jpg",
                  "/9aefc260-37dc-4eec-9d7b-533606bd7687.jpg",
                  "/ad085c41-6090-4ba2-b1ae-ad935dc3afd7.jpg",
                  "/2ecb6e0b-473d-4453-a856-34711b3ce29e.jpg",
                  "/00dca2be-059e-4a75-8d89-688b913d203a.jpg",
                  "/37860f0f-0b35-4f47-9b72-3dd8f24f5c63.jpg"
                ];
                const cardImg = it.image || defaultImgs[idx % defaultImgs.length];
                const slug = it.slug || it.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                const linkHref = isBlog ? `/blogs/${slug}` : it.href || pathname;
                const actionLabel = isTemplate ? "Download" : isWebinar ? "Watch Webinar" : isBlog ? "Read Article" : "Explore";

                return (
                  <BlogCard
                    key={it.title}
                    title={it.title}
                    text={it.text}
                    tag={it.tag}
                    image={cardImg}
                    meta={it.meta}
                    href={linkHref}
                    actionLabel={actionLabel}
                  />
                );
              })}
            </div>
          )}

          {filteredItems.length === 0 && (
            <div className="rounded-none border border-neutral-200 bg-neutral-50 p-12 text-center">
              <p className="text-body1 text-neutral-600">No resources found matching “{query}”.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 rounded-full bg-primary text-white text-xs font-semibold px-4 py-2 hover:bg-teal-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
      <PageCta title="Ready to modernize your workforce operations?" />
    </PageLayout>
  );
}