import React from "react";
import { Button } from "../Button";

export function PageCta({
  title = "Ready to experience the AI-native HRMS difference?",
  className = "bg-white pt-6 pb-14 md:pt-8 md:pb-16"
}: {
  title?: string;
  className?: string;
}) {
  return (
    <section className={className} aria-labelledby="page-cta-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 rounded-none bg-primary px-8 py-10 md:flex-row md:items-center md:px-12 shadow-md">
          <div className="flex-1">
            <p className="pretitle text-primary-light">Get Started</p>
            <h2 id="page-cta-title" className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
              {title}
            </h2>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            <Button size="lg" variant="inverse" href="/signup" className="!rounded-full shadow-sm hover:scale-105 transition-all">
              Start free trial
            </Button>
            <a
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/60 px-6 text-body1 font-semibold text-white transition-all hover:bg-white/10 hover:border-white"
            >
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}