import React from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { coreServices } from "../data/home";

export function PlatformCards() {
  // Use exactly the 3 primary platform capabilities cards as requested
  const displayServices = coreServices.slice(0, 3);

  return (
    <section id="services" className="bg-accent-light py-14 md:py-20" aria-labelledby="services-title">
      <div className="mx-auto max-w-7xl px-6">
        <div>
          <p className="pretitle text-primary">
            Platform Capabilities
          </p>
          <h2 id="services-title" className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Everything You Need to Hire, Manage & Scale
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-3xl">
            Built from the ground up as a unified, AI-native HRMS—eliminating fragmented tools, manual spreadsheets, and disconnected employee records.
          </p>
        </div>

        {/* Simple 3 Cards Grid Matching Reference Design */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayServices.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col justify-between border border-neutral-200 bg-white p-5 sm:p-6 rounded-none shadow-xs hover:border-teal-500/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="w-full aspect-[4/3] overflow-hidden bg-neutral-100 rounded-none">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover rounded-none transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors leading-snug">
                  {service.title}
                </h3>
              </div>

              <div className="mt-6 pt-2">
                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-transparent px-5 py-2 text-xs font-semibold text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-200"
                >
                  Learn More
                  <ArrowRightIcon size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}