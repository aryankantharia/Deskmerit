import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { blogPosts } from "../data/home";

export function BlogSection() {
  const [featured, ...rest] = blogPosts;
  const sidePosts = rest.slice(0, 2);

  return (
    <section className="bg-[#FAF7F2] py-16 md:py-24 border-b border-neutral-200" aria-labelledby="blog-title">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="pretitle text-primary">Blogs</p>
            <h2 id="blog-title" className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Recent blog posts
            </h2>
          </div>
          <a
            href="/blog"
            className="inline-flex self-start sm:self-auto items-center gap-2 rounded-full border border-neutral-300 bg-transparent px-5 py-2 text-xs sm:text-sm font-semibold text-neutral-800 hover:border-primary hover:text-primary hover:bg-teal-50 transition-all duration-200"
          >
            View All
            <ArrowRightIcon size={15} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        {/* 2-Column Grid Matching Reference Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Left Column: Big Featured Card */}
          {featured && (
            <article className="rounded-none border border-neutral-300 bg-white p-5 sm:p-6 shadow-xs hover:border-neutral-500 transition-colors flex flex-col justify-between group">
              <a href={`/blogs/${featured.slug}`} className="flex flex-col h-full justify-between focus-visible:outline-none">
                <div>
                  <div className="overflow-hidden rounded-none bg-neutral-100 aspect-[16/10] w-full">
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 sm:mt-5">
                    <p className="text-xs font-semibold text-primary">
                      {featured.category} · {featured.date}
                    </p>
                    <h3 className="mt-2 text-lg sm:text-xl lg:text-2xl font-bold text-neutral-900 group-hover:text-primary transition-colors leading-snug">
                      {featured.title}
                    </h3>
                  </div>
                </div>

                {/* Author Info + Action Button */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={featured.authorAvatar || "/team/dishant-mehta.jpg"}
                      alt={featured.author}
                      className="h-9 w-9 rounded-full object-cover border border-neutral-200 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight truncate">By {featured.author}</p>
                      <p className="text-[11px] sm:text-xs text-neutral-500 leading-tight mt-0.5 truncate">{featured.authorRole || "Sqalible Team"}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-transparent px-4 py-1.5 text-xs font-semibold text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-200 shrink-0">
                    Read Article
                    <ArrowRightIcon size={13} />
                  </span>
                </div>
              </a>
            </article>
          )}

          {/* Right Column: 2 Horizontal Stacked Cards */}
          <div className="flex flex-col gap-6 justify-between">
            {sidePosts.map((post) => (
              <article
                key={post.title}
                className="rounded-none border border-neutral-300 bg-white p-5 sm:p-6 shadow-xs hover:border-neutral-500 transition-colors flex-1 flex flex-col justify-between group"
              >
                <a href={`/blogs/${post.slug}`} className="flex flex-col sm:flex-row gap-5 h-full items-start sm:items-stretch focus-visible:outline-none">
                  {/* Left: Thumbnail Image */}
                  <div className="shrink-0 w-full sm:w-44 md:w-48 aspect-[16/10] sm:aspect-[4/3] overflow-hidden rounded-none bg-neutral-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Right: Content & Author */}
                  <div className="flex flex-1 flex-col justify-between h-full">
                    <div>
                      <p className="text-xs font-semibold text-primary">
                        {post.category} · {post.date}
                      </p>
                      <h3 className="mt-1 text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="mt-1.5 text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author Info + Action Button */}
                    <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img
                          src={post.authorAvatar || "/team/chirag-parmar.jpg"}
                          alt={post.author}
                          className="h-8 w-8 rounded-full object-cover border border-neutral-200 shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-neutral-900 leading-tight truncate">By {post.author}</p>
                          <p className="text-[11px] text-neutral-500 leading-tight mt-0.5 truncate">{post.authorRole || "Sqalible Team"}</p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-transparent px-3 py-1 text-[11px] font-semibold text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-200 shrink-0">
                        Read
                        <ArrowRightIcon size={12} />
                      </span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}