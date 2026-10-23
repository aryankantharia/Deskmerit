import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  ArrowRightIcon,
  SearchIcon,
  BlocksIcon,
  SparklesIcon,
  CheckCircle2Icon,
  ShieldCheckIcon,
  LayersIcon,
  ExternalLinkIcon
} from "lucide-react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { PageCta } from "../components/layout/PageCta";
import { IntegrationsHeroCard } from "../components/layout/HeroCards";
import { IntegrationLogo } from "../components/IntegrationLogo";
import { integrations } from "../data/home";

export function IntegrationsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === "All") {
      searchParams.delete("category");
      setSearchParams(searchParams, { replace: true });
    } else {
      setSearchParams({ category: cat }, { replace: true });
    }
  };

  const categories = ["All", "Communication", "Identity", "Job boards", "Biometrics", "Banking", "Accounting"];

  const filteredIntegrations = integrations.filter((item) => {
    const matchesQuery = `${item.name} ${item.desc} ${item.category}`
      .toLowerCase()
      .includes(query.trim().toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesQuery && matchesCategory;
  });

  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: "Why Sqalible", href: "/why-sqalible" }, { title: "Integrations" }]}
        pretitle="Open Ecosystem"
        title="Seamless Integrations for the Modern Enterprise"
        description="Connect your identity providers, biometric timeclocks, corporate banks, and communication tools directly to Sqalible with certified native connectors."
        image="none"
        aside={<IntegrationsHeroCard />}
      />

      <section className="bg-white py-10 md:py-14" aria-label="Integration Directory">
        <div className="mx-auto max-w-7xl px-6">
          {/* Search Field & Category Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            {/* Rounded Search Bar */}
            <div className="relative w-full max-w-md">
              <SearchIcon
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search integrations by name or category..."
                className="w-full h-11 rounded-full border border-neutral-300 bg-white pl-11 pr-4 text-body2 text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-primary focus:ring-2 focus:ring-teal-500/20 transition-all shadow-xs"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleSelectCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? "bg-primary text-white shadow-xs"
                      : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Integrations Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredIntegrations.map((item) => (
              <div
                key={item.name}
                className="group flex flex-col justify-between rounded-none border border-neutral-200 bg-white p-6 shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100 group-hover:border-teal-500/30 transition-colors duration-200 shadow-2xs">
                      <IntegrationLogo name={item.name} className="w-6 h-6 shrink-0" />
                    </div>
                    <span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-semibold text-neutral-600">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xs font-medium text-neutral-400 block mb-2">{item.category}</span>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>Configuration Guide</span>
                  <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="rounded-none border border-neutral-200 bg-neutral-50 p-12 text-center">
              <p className="text-body1 text-neutral-600">No integrations found matching “{query}”.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-4 rounded-full bg-primary text-white text-xs font-semibold px-4 py-2 hover:bg-teal-600 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Custom Webhook & API Callout */}
          <div className="mt-14 rounded-none border border-neutral-800 bg-[#0A0E17] p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-300 mb-3">
                <SparklesIcon size={13} /> Open Developer API
              </span>
              <h3 className="text-xl font-bold text-white">Need a Custom In-House Connector?</h3>
              <p className="mt-2 text-sm text-neutral-300 leading-relaxed">
                Build custom sync workflows using our modern GraphQL and REST APIs. Subscribe to real-time webhooks for employee joins, leaves, promotions, and payroll events.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 rounded-full bg-primary hover:bg-teal-600 px-6 py-3 text-xs font-semibold text-white shadow-md transition-all hover:scale-105"
            >
              Request Custom Integration
            </Link>
          </div>
        </div>
      </section>

      <PageCta title="Connect your entire enterprise HR stack in minutes." />
    </PageLayout>
  );
}