import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "./Button";
import { testimonials } from "../data/home";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  const initials = item.name.
  split(" ").
  map((n) => n[0]).
  join("");

  const go = (dir: 1 | -1) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section className="bg-[#FAF7F2] py-20 md:py-24 border-t border-neutral-200/80" aria-labelledby="testimonials-title">
      <div className="mx-auto max-w-7xl px-6">
        <p className="pretitle text-primary">Customer Stories</p>
        <h2 id="testimonials-title" className="mt-2 text-h1 text-neutral-900">
          HR teams that stopped chasing paperwork
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <figure className="flex flex-col overflow-hidden rounded-none bg-neutral-900 md:flex-row lg:col-span-8 shadow-xl">
            <div className="md:w-2/5">
              {item.image ? (
                <img src={item.image} alt={item.name} className="h-64 w-full object-cover md:h-full" />
              ) : (
                <div className="flex h-64 w-full items-center justify-center bg-neutral-800 text-[56px] font-semibold text-teal-400 md:h-full">
                  {initials}
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  <blockquote className="text-h3 font-medium text-white leading-relaxed">“{item.quote}”</blockquote>
                  <figcaption className="mt-6">
                    <p className="text-body1 font-semibold text-white">{item.name}</p>
                    <p className="text-body2 text-neutral-400">
                      {item.role}, {item.company}
                    </p>
                  </figcaption>
                </motion.div>
              </AnimatePresence>
              <div className="mt-auto flex items-center justify-between pt-8 border-t border-white/10 mt-6">
                <p className="text-caption text-neutral-400" aria-live="polite">
                  {index + 1} / {testimonials.length}
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => go(-1)}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-white/5 text-white transition-colors duration-150 hover:border-teal-400 hover:bg-teal-500/20"
                  >
                    <ChevronLeftIcon size={18} strokeWidth={1.75} />
                  </button>
                  <button
                    type="button"
                    onClick={() => go(1)}
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-white/5 text-white transition-colors duration-150 hover:border-teal-400 hover:bg-teal-500/20"
                  >
                    <ChevronRightIcon size={18} strokeWidth={1.75} />
                  </button>
                </div>
              </div>
            </div>
          </figure>

          <div className="flex flex-col justify-between rounded-none bg-primary p-8 lg:col-span-4 shadow-xl">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-teal-100 border border-white/20 mb-4">
                Personalized Workflow Mapping
              </span>
              <h3 className="text-h2 text-white">Still wondering where AI fits in your HR?</h3>
              <p className="mt-3 text-body2 text-primary-light leading-relaxed">
                In 30 minutes we will map your current hiring-to-exit process and show where Sqalible saves the most time and cost.
              </p>
            </div>
            <div className="pt-8">
              <Button
                variant="inverse"
                href="/contact"
                className="!rounded-full w-full justify-center bg-white text-primary hover:bg-neutral-100 shadow-lg hover:scale-[1.02] transition-all font-semibold"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}