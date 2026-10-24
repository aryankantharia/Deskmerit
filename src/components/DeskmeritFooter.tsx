import React from "react";
import { Link } from "react-router-dom";
import { DeskmeritLogo } from "./DeskmeritLogo";
import { FOOTER_SECTIONS, LEGAL_LINKS } from "../data/deskmeritNav";
import { Linkedin, Twitter, Youtube, ShieldCheck, MapPin, Phone, Mail } from "lucide-react";

export function DeskmeritFooter() {
  return (
    <footer className="bg-[#0A0F1D] text-[#F7F4EE] pt-16 pb-12 border-t border-[#24305A] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 pb-12 border-b border-[#24305A]">
          {/* Brand info column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
            <DeskmeritLogo variant="reverse" endorsement={true} size="md" />

            <p className="text-xs sm:text-sm text-[#9AA1B2] max-w-sm mt-3 leading-relaxed">
              Time tracking people trust. Most tools are designed for the person watching. Deskmerit is designed for both sides of the screen.
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1A264F] text-xs text-[#E6E2D8] border border-[#2E3C6B]">
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
                className="w-8 h-8 rounded-lg bg-[#1A264F] hover:bg-[#FF5A36] text-white flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-8 h-8 rounded-lg bg-[#1A264F] hover:bg-[#FF5A36] text-white flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube demo channel"
                className="w-8 h-8 rounded-lg bg-[#1A264F] hover:bg-[#FF5A36] text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_SECTIONS.slice(0, 5).map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2]">
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
                        className="text-[#9AA1B2] hover:text-[#FF5A36] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-[#9AA1B2] hover:text-[#FF5A36] transition-colors"
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

        {/* Global Support Centers & Client Offices (Sqalible Pattern) */}
        <div className="py-10 border-b border-[#24305A]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#12B886]" />
            <span>Global Support Centers & Client Offices</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* India Center */}
            <div className="p-5 rounded-2xl bg-[#0F1730] border border-[#24305A] hover:border-[#FF5A36]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>🇮🇳</span> India (R&D & Delivery)
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1A264F] text-[#38BDF8]">
                    Development Center
                  </span>
                </div>
                <p className="text-xs text-[#9AA1B2] leading-relaxed mt-1">
                  Kombee Tech Campus, Baner High St, Pune, Maharashtra 411045
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#24305A] flex items-center justify-between text-xs text-[#9AA1B2]">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#12B886]" /> +91 (020) 6700-KOMBEE
                </span>
                <span className="text-[11px] text-[#38BDF8]">IST Zone</span>
              </div>
            </div>

            {/* Australia Center */}
            <div className="p-5 rounded-2xl bg-[#0F1730] border border-[#24305A] hover:border-[#FF5A36]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>🇦🇺</span> Australia (Sydney HQ)
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1A264F] text-[#38BDF8]">
                    Regional Office
                  </span>
                </div>
                <p className="text-xs text-[#9AA1B2] leading-relaxed mt-1">
                  Level 14, 175 Pitt Street, Sydney NSW 2000, Australia
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#24305A] flex items-center justify-between text-xs text-[#9AA1B2]">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#12B886]" /> +61 (2) 8000-KOMBEE
                </span>
                <span className="text-[11px] text-[#38BDF8]">AEST Zone</span>
              </div>
            </div>

            {/* New Zealand & Gulf */}
            <div className="p-5 rounded-2xl bg-[#0F1730] border border-[#24305A] hover:border-[#FF5A36]/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span>🇳🇿 🇦🇪</span> New Zealand & Gulf
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#1A264F] text-[#38BDF8]">
                    Partner Hub
                  </span>
                </div>
                <p className="text-xs text-[#9AA1B2] leading-relaxed mt-1">
                  Level 3, Innovation Precinct, Auckland & Dubai Internet City, UAE
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#24305A] flex items-center justify-between text-xs text-[#9AA1B2]">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#12B886]" /> +971 4 400-KOMBEE
                </span>
                <span className="text-[11px] text-[#38BDF8]">NZST & GST</span>
              </div>
            </div>
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
