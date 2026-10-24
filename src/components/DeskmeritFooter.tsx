import React from "react";
import { Link } from "react-router-dom";
import { DeskmeritLogo } from "./DeskmeritLogo";
import { FOOTER_SECTIONS, LEGAL_LINKS } from "../data/deskmeritNav";
import { Linkedin, Twitter, Youtube, ShieldCheck } from "lucide-react";

export function DeskmeritFooter() {
  return (
    <footer className="bg-[#0F1730] text-[#F7F4EE] pt-16 pb-12 border-t border-[#24305A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 pb-12 border-b border-[#24305A]">
          {/* Brand info column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
            <DeskmeritLogo variant="reverse" endorsement={true} size="md" />

            <p className="text-sm text-[#9AA1B2] max-w-sm mt-3 leading-relaxed">
              Time tracking people trust. Most tools are designed for the person watching. Deskmerit is designed for both sides of the screen.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#24305A] text-xs text-[#E6E2D8] border border-[#334173]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#12B886]" />
                <span>Zero keystrokes · No webcams · Pure trust</span>
              </span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-[#24305A] hover:bg-[#FF5A36] text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-[#24305A] hover:bg-[#FF5A36] text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube demo channel"
                className="w-8 h-8 rounded-lg bg-[#24305A] hover:bg-[#FF5A36] text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_SECTIONS.slice(0, 5).map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#9AA1B2]">
                {section.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#E6E2D8] hover:text-[#FF5A36] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[#E6E2D8] hover:text-[#FF5A36] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Company & Regional highlights */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#9AA1B2] border-b border-[#24305A]/60">
          <div>
            <span className="font-semibold text-white block mb-1">India</span>
            <span>Headquarters, engineering and support in IST. GST compliant INR invoicing.</span>
          </div>
          <div>
            <span className="font-semibold text-white block mb-1">Australia & New Zealand</span>
            <span>NSW 14-day notice template, Privacy Act 2020 aligned. AUD & NZD pricing.</span>
          </div>
          <div>
            <span className="font-semibold text-white block mb-1">Middle East (UAE & Saudi Arabia)</span>
            <span>PDPL-ready notices, Sunday–Thursday or Monday–Friday week support, SAR/AED.</span>
          </div>
          <div>
            <span className="font-semibold text-white block mb-1">United States & Global</span>
            <span>Enterprise data residency, SOC 2 Type II in progress, USD pricing & MSA terms.</span>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9AA1B2]">
          <div className="text-center md:text-left">
            <span>© 2026 Kombee Technologies (India) Pvt. Ltd. · </span>
            <span className="font-medium text-[#E6E2D8]">A Kombee Technologies product</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {LEGAL_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="hover:text-[#FF5A36] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
