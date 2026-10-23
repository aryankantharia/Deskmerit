import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon
} from "lucide-react";
import { allBlogs, blogCategories, BlogPost } from "../data/blogs";

const POSTS_PER_PAGE = 6;

export function BlogListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return allBlogs.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesQuery =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Featured Recent Blog Posts (aligned with Home: 1 large left, 2 stacked right)
  const recentBig = allBlogs[0];
  const recentRight1 = allBlogs[1];
  const recentRight2 = allBlogs[2];

  // Grid posts for "All Blog Posts"
  const gridPosts = useMemo(() => {
    if (selectedCategory !== "All" || searchQuery.trim()) {
      return filteredPosts;
    }
    return allBlogs.slice(3);
  }, [filteredPosts, selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(gridPosts.length / POSTS_PER_PAGE) || 1;
  const paginatedGridPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return gridPosts.slice(start, start + POSTS_PER_PAGE);
  }, [gridPosts, currentPage]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const gridElem = document.getElementById("all-blogs-section");
      if (gridElem) {
        gridElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#FAF7F2] font-sans text-neutral-900 selection:bg-teal-500 selection:text-white">
      {/* Fixed White Edge-to-Edge Navigation */}
      <Header />

      <main className="pt-[68px]">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (Dark Sqalible theme + Mockup + Search)   */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden bg-[#0A1A24] text-white pt-16 pb-20 md:pt-20 md:pb-24 px-6 border-b border-neutral-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900/35 via-[#0A161D] to-[#060D12]" />
          <div className="absolute top-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-teal-500/15 blur-[140px] pointer-events-none" />
          <div className="absolute top-1/4 -right-40 h-[500px] w-[500px] rounded-full bg-[#047B72]/20 blur-[150px] pointer-events-none" />


          <div className="relative mx-auto max-w-4xl text-center z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Blogs
            </h1>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              Stay ahead of the curve with the latest insights, reviews, and breakthroughs in the world of technology. Explore cutting-edge innovations, product launches, and the future of digital transformation.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-xl mx-auto relative">
              <SearchIcon size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search blogs by title, categories or tags"
                className="w-full rounded-full bg-[#FAF7F2] text-neutral-900 placeholder-neutral-400 pl-12 pr-6 py-3.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary shadow-inner border border-neutral-300/60"
              />
            </div>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {blogCategories.map((cat) => {
                const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => handleCategoryChange(cat)}
                    className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary text-white shadow-md scale-[1.03]"
                        : "border border-white/25 bg-white/5 text-neutral-200 hover:border-white hover:text-white backdrop-blur-xs"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. RECENT BLOG POSTS SECTION (Sharp Cards matching Home)  */}
        {/* ========================================================= */}
        {selectedCategory === "All" && !searchQuery.trim() && (
          <section className="py-14 md:py-20 px-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8">
                <p className="pretitle text-primary">Blogs</p>
                <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  Recent blog posts
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                {/* Left Large Featured Card (Sharp Edges matching PlatformCards) */}
                <article className="rounded-none border border-neutral-300 bg-white p-5 sm:p-6 shadow-xs hover:border-neutral-500 transition-colors flex flex-col justify-between group">
                  <Link to={`/blogs/${recentBig.slug}`} className="flex flex-col h-full justify-between focus-visible:outline-none">
                    <div>
                      {/* Top Image: Sharp edges */}
                      <div className="overflow-hidden rounded-none bg-neutral-100 aspect-[16/10] w-full">
                        <img
                          src={recentBig.image}
                          alt={recentBig.title}
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* Category & Date */}
                      <div className="mt-4 sm:mt-5">
                        <p className="text-xs font-semibold text-primary">
                          {recentBig.category} · {recentBig.date}
                        </p>
                        <h3 className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors leading-snug">
                          {recentBig.title}
                        </h3>
                        <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                          {recentBig.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Author block + Action Button */}
                    <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <img
                          src={recentBig.authorAvatar}
                          alt={recentBig.author}
                          className="h-9 w-9 rounded-full object-cover border border-neutral-200 shrink-0"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/team/dishant-mehta.jpg";
                          }}
                        />
                        <div className="min-w-0">
                          <p className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight truncate">By {recentBig.author}</p>
                          <p className="text-[11px] sm:text-xs text-neutral-500 leading-tight mt-0.5 truncate">{recentBig.authorRole}</p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-transparent px-4 py-1.5 text-xs font-semibold text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-200 shrink-0">
                        Read Article
                        <ArrowRightIcon size={13} />
                      </span>
                    </div>
                  </Link>
                </article>

                {/* Right Stacked 2 Horizontal Cards (Sharp Edges matching PlatformCards) */}
                <div className="flex flex-col gap-6 justify-between">
                  {/* Card 1 */}
                  <article className="rounded-none border border-neutral-300 bg-white p-5 sm:p-6 shadow-xs hover:border-neutral-500 transition-colors flex-1 flex flex-col justify-between group">
                    <Link to={`/blogs/${recentRight1.slug}`} className="flex flex-col sm:flex-row gap-5 h-full items-start sm:items-stretch focus-visible:outline-none">
                      <div className="shrink-0 w-full sm:w-44 md:w-48 aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-none bg-neutral-100">
                        <img
                          src={recentRight1.image}
                          alt={recentRight1.title}
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between h-full">
                        <div>
                          <p className="text-xs font-semibold text-primary">
                            {recentRight1.category} · {recentRight1.date}
                          </p>
                          <h3 className="mt-1 text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            {recentRight1.title}
                          </h3>
                          <p className="mt-1.5 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                            {recentRight1.excerpt}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <img
                              src={recentRight1.authorAvatar}
                              alt={recentRight1.author}
                              className="h-8 w-8 rounded-full object-cover border border-neutral-200 shrink-0"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/team/chirag-parmar.jpg";
                              }}
                            />
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-neutral-900 leading-tight truncate">By {recentRight1.author}</p>
                              <p className="text-[11px] text-neutral-500 leading-tight mt-0.5 truncate">{recentRight1.authorRole}</p>
                            </div>
                          </div>

                          <span className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-transparent px-3 py-1 text-[11px] font-semibold text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-200 shrink-0">
                            Read
                            <ArrowRightIcon size={12} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>

                  {/* Card 2 */}
                  <article className="rounded-none border border-neutral-300 bg-white p-5 sm:p-6 shadow-xs hover:border-neutral-500 transition-colors flex-1 flex flex-col justify-between group">
                    <Link to={`/blogs/${recentRight2.slug}`} className="flex flex-col sm:flex-row gap-5 h-full items-start sm:items-stretch focus-visible:outline-none">
                      <div className="shrink-0 w-full sm:w-44 md:w-48 aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-none bg-neutral-100">
                        <img
                          src={recentRight2.image}
                          alt={recentRight2.title}
                          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between h-full">
                        <div>
                          <p className="text-xs font-semibold text-primary">
                            {recentRight2.category} · {recentRight2.date}
                          </p>
                          <h3 className="mt-1 text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                            {recentRight2.title}
                          </h3>
                          <p className="mt-1.5 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                            {recentRight2.excerpt}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <img
                              src={recentRight2.authorAvatar}
                              alt={recentRight2.author}
                              className="h-8 w-8 rounded-full object-cover border border-neutral-200 shrink-0"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/team/dishant-mehta.jpg";
                              }}
                            />
                            <div className="min-w-0">
                              <p className="text-xs font-bold text-neutral-900 leading-tight truncate">By {recentRight2.author}</p>
                              <p className="text-[11px] text-neutral-500 leading-tight mt-0.5 truncate">{recentRight2.authorRole}</p>
                            </div>
                          </div>

                          <span className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-transparent px-3 py-1 text-[11px] font-semibold text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-200 shrink-0">
                            Read
                            <ArrowRightIcon size={12} />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* 3. ALL BLOG POSTS GRID (Sharp Cards matching PlatformCards design) */}
        {/* ========================================================= */}
        <section id="all-blogs-section" className="py-14 md:py-20 px-6 border-t border-neutral-200">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                {selectedCategory === "All" && !searchQuery.trim()
                  ? "All Blog Posts"
                  : `Filtered Results (${gridPosts.length})`}
              </h2>

              {(selectedCategory !== "All" || searchQuery.trim()) && (
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-xs font-semibold text-primary hover:underline cursor-pointer"
                >
                  Clear Filters
                </button>
              )}
            </div>

            {gridPosts.length === 0 ? (
              <div className="rounded-none border border-neutral-300 bg-white p-12 text-center my-8">
                <p className="text-base font-semibold text-neutral-700">No blog posts found matching your search.</p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white shadow-xs"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {paginatedGridPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group flex flex-col justify-between rounded-none border border-neutral-300 bg-white p-5 sm:p-6 shadow-xs hover:border-neutral-500 transition-colors cursor-pointer"
                  >
                    <Link to={`/blogs/${post.slug}`} className="flex flex-col h-full justify-between focus-visible:outline-none">
                      <div>
                        {/* Card Image: Sharp edges */}
                        <div className="w-full aspect-[4/3] sm:aspect-[16/10] rounded-none overflow-hidden bg-neutral-100 mb-4 relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                          />
                        </div>

                        {/* Category & Date */}
                        <p className="text-xs font-semibold text-primary">
                          {post.category} · {post.date}
                        </p>

                        {/* Title */}
                        <h3 className="mt-2 text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="mt-2 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Author Footer + Pill Action Button matching PlatformCards */}
                      <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            className="h-8 w-8 rounded-full object-cover border border-neutral-200 shrink-0"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/team/dishant-mehta.jpg";
                            }}
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-neutral-900 leading-tight truncate">By {post.author}</p>
                            <p className="text-[11px] text-neutral-500 leading-tight mt-0.5 truncate">{post.authorRole}</p>
                          </div>
                        </div>

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-transparent px-3.5 py-1.5 text-xs font-semibold text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-200 shrink-0">
                          Read
                          <ArrowRightIcon size={12} />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}

            {/* ========================================================= */}
            {/* 4. PAGINATION (Sharp Edges matching card aesthetic)      */}
            {/* ========================================================= */}
            {totalPages > 1 && (
              <div className="mt-14 flex items-center justify-between border-t border-neutral-200 pt-6">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                    currentPage === 1
                      ? "text-neutral-400 cursor-not-allowed"
                      : "text-neutral-700 hover:text-primary cursor-pointer"
                  }`}
                >
                  <ChevronLeftIcon size={16} />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`h-9 w-9 rounded-none text-xs font-bold transition-all cursor-pointer flex items-center justify-center border ${
                        currentPage === page
                          ? "bg-primary text-white border-primary shadow-xs"
                          : "border-neutral-300 text-neutral-700 hover:bg-neutral-100"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                    currentPage === totalPages
                      ? "text-neutral-400 cursor-not-allowed"
                      : "text-neutral-700 hover:text-primary cursor-pointer"
                  }`}
                >
                  <span>Next</span>
                  <ChevronRightIcon size={16} />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
