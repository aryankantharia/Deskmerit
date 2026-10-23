import React from "react";
import { GlobeIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Logo } from "./Logo";
import { footerColumns, footerDescription, languages, socialLinks, globalOffices } from "../data/navigation";

function SocialIcon({ title }: { title: string }) {
  switch (title) {
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.5a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
        </svg>
      );
    case "X":
      return (
        <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "Facebook":
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    default:
      return <span>{title[0]}</span>;
  }
}

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Brand & Action Strip */}
        <div className="border-b border-neutral-800 py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <Logo inverted />
            <p className="mt-4 text-sm text-neutral-400 leading-relaxed">{footerDescription}</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
            <div className="text-xs text-neutral-400">
              <span className="font-semibold text-white">Direct Advisory:</span>{" "}
              <a href="mailto:hello@sqalible.com" className="hover:text-teal-300 transition-colors">
                hello@sqalible.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-teal-700 transition-colors"
              >
                Start free trial
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-5 py-2.5 text-xs font-bold text-white hover:border-neutral-500 hover:bg-neutral-800 transition-colors"
              >
                Book a demo
              </a>
            </div>
          </div>
        </div>

        {/* 5-Column Navigation Grid Covering All Mega Menu Items */}
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col">
              <p className="text-xs font-extrabold uppercase tracking-wider text-white">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-[13px] text-neutral-400 transition-colors duration-150 hover:text-white block py-0.5 leading-snug"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Global Offices Strip */}
        <div className="border-t border-neutral-800 py-10">
          <p className="text-caption font-semibold uppercase tracking-wider text-teal-400">
            Global Delivery Centers & Client Offices
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {globalOffices.map((office) => (
              <div key={office.country} className="rounded-none border border-neutral-800 bg-neutral-850 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-body2 font-semibold text-white flex items-center gap-1.5">
                    <MapPinIcon size={15} className="text-teal-400 shrink-0" />
                    {office.country}
                  </span>
                  <span className="rounded bg-neutral-800 px-2 py-0.5 text-[11px] font-medium text-neutral-400">
                    {office.type}
                  </span>
                </div>
                <p className="mt-3 text-caption text-neutral-400 leading-relaxed">
                  {office.address}
                </p>
                <p className="mt-3 text-caption text-teal-300 font-medium flex items-center gap-1.5">
                  <PhoneIcon size={13} />
                  {office.phone}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright & policies */}
        <div className="flex flex-col gap-4 border-t border-neutral-800 py-8 text-caption text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2026 Sqalible. All rights reserved.</p>
            <span className="text-neutral-700">|</span>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/security" className="hover:text-white transition-colors">Security</a>
            <a href="/responsible-ai" className="hover:text-white transition-colors">Responsible AI</a>
            <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
          </div>
          <div className="flex items-center gap-6">
            <ul className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <li key={s.title}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.title}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-colors duration-150 hover:border-teal-400 hover:text-white"
                  >
                    <SocialIcon title={s.title} />
                  </a>
                </li>
              ))}
            </ul>
            <label className="flex items-center gap-2">
              <GlobeIcon size={16} strokeWidth={1.75} aria-hidden="true" />
              <span className="sr-only">Language</span>
              <select
                defaultValue="English (US)"
                className="rounded-md border border-neutral-700 bg-neutral-900 px-2.5 py-1 text-caption text-neutral-200 outline-none focus:border-teal-400"
              >
                {languages.map((lang) => (
                  <option key={lang}>{lang}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>
    </footer>
  );
}