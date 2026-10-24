import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import {
  Download,
  Laptop,
  Check,
  X,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  Terminal,
  Smartphone,
} from "lucide-react";

export function DownloadPage() {
  const [detectedOs, setDetectedOs] = useState<"Windows" | "macOS" | "Linux">("macOS");
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("win")) {
      setDetectedOs("Windows");
    } else if (userAgent.includes("mac")) {
      setDetectedOs("macOS");
    } else if (userAgent.includes("linux")) {
      setDetectedOs("Linux");
    }
  }, []);

  const handleDownload = (osName: string, filename: string) => {
    setDownloadSuccess(`Deskmerit for ${osName} (${filename}) download simulated.`);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="text-xs text-[#4A5370] flex items-center gap-1.5">
            <Link to="/" className="hover:text-[#0F1730]">Home</Link>
            <span>/</span>
            <span className="font-semibold text-[#0F1730]">Download</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E6E2D8] text-xs font-semibold text-[#0F1730] shadow-sm mb-6">
            <span className="pulse-dot" />
            <span>Lightweight Desktop Agent</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mb-6">
            Download Deskmerit for your computer.
          </h1>

          <p className="text-base sm:text-lg text-[#4A5370] max-w-2xl mx-auto font-normal">
            One lightweight, signed desktop agent. Pick your system and you’ll be tracking in minutes.
          </p>

          {downloadSuccess && (
            <div className="mt-4 p-3.5 rounded-xl bg-[#12B886]/15 border border-[#12B886] text-xs text-[#0fa678] font-bold max-w-md mx-auto flex items-center justify-center gap-2">
              <Check className="w-4 h-4" /> {downloadSuccess}
            </div>
          )}
        </section>

        {/* 3 OS Download Cards Grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Windows */}
            <div
              className={`bg-[#FFFFFF] rounded-2xl p-7 border transition-all flex flex-col justify-between ${
                detectedOs === "Windows"
                  ? "border-[#FF5A36] shadow-card ring-2 ring-[#FF5A36]/30"
                  : "border-[#E6E2D8] shadow-subtle"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-bold text-[#0F1730]">Windows</span>
                  {detectedOs === "Windows" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFE6DF] text-[#C2361A]">
                      Detected
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#4A5370] mb-6">
                  Windows 10 and 11 · .exe / .msi silent installer
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleDownload("Windows", "deskmerit-setup-v1.0.exe")}
                  className="w-full py-3 rounded-[12px] bg-[#FF5A36] hover:bg-[#E94A27] text-[#0F1730] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download for Windows
                </button>
                <div className="text-[11px] text-[#9AA1B2] text-center mt-2">
                  v1.2.4 · 22 MB · Signed MSI
                </div>
              </div>
            </div>

            {/* macOS */}
            <div
              className={`bg-[#FFFFFF] rounded-2xl p-7 border transition-all flex flex-col justify-between ${
                detectedOs === "macOS"
                  ? "border-[#FF5A36] shadow-card ring-2 ring-[#FF5A36]/30"
                  : "border-[#E6E2D8] shadow-subtle"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-bold text-[#0F1730]">macOS</span>
                  {detectedOs === "macOS" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFE6DF] text-[#C2361A]">
                      Detected
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#4A5370] mb-6">
                  macOS 12+ · Apple silicon & Intel · Apple Notarised
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleDownload("macOS", "Deskmerit-v1.0-Universal.dmg")}
                  className="w-full py-3 rounded-[12px] bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download for Mac
                </button>
                <div className="text-[11px] text-[#9AA1B2] text-center mt-2">
                  v1.2.4 · 28 MB · Universal binary
                </div>
              </div>
            </div>

            {/* Linux */}
            <div
              className={`bg-[#FFFFFF] rounded-2xl p-7 border transition-all flex flex-col justify-between ${
                detectedOs === "Linux"
                  ? "border-[#FF5A36] shadow-card ring-2 ring-[#FF5A36]/30"
                  : "border-[#E6E2D8] shadow-subtle"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-base font-bold text-[#0F1730]">Linux</span>
                  {detectedOs === "Linux" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#FFE6DF] text-[#C2361A]">
                      Detected
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#4A5370] mb-6">
                  Ubuntu, Debian, Fedora, Arch · .deb · .rpm · AppImage
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleDownload("Linux", "deskmerit-linux.AppImage")}
                  className="w-full py-3 rounded-[12px] bg-[#FFFFFF] border border-[#0F1730] text-[#0F1730] hover:bg-[#F7F4EE] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download for Linux
                </button>
                <div className="text-[11px] text-[#9AA1B2] text-center mt-2">
                  v1.2.4 · 19 MB · Tarball & AppImage
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First Launch Consent Screen Preview (Wireframe Page 17) */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-5">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                  First launch
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  You’ll see exactly what’s tracked — before anything is.
                </h2>
                <p className="text-sm text-[#4A5370] leading-relaxed">
                  A mandatory one-time consent screen explains clearly what Deskmerit records and what it never does. Nothing is tracked until you’ve seen it and clicked proceed.
                </p>
                <div className="pt-2">
                  <Link
                    to="/privacy-promise"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2361A] hover:underline"
                  >
                    Read our full employee privacy promise <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Consent Screen Interactive Simulation */}
              <div className="lg:col-span-6 max-w-md mx-auto w-full">
                <div className="bg-[#0F1730] text-white rounded-[24px] p-7 border border-[#24305A] shadow-2xl space-y-5">
                  <div className="flex items-center gap-2.5 pb-4 border-b border-[#24305A]">
                    <span className="w-7 h-7 rounded-lg bg-[#FF5A36] text-[#0F1730] font-bold text-sm flex items-center justify-center font-display">
                      p
                    </span>
                    <h4 className="font-bold text-sm text-white">Before we start</h4>
                  </div>

                  <p className="text-xs text-[#9AA1B2]">
                    Your organisation uses Deskmerit to record working time and build honest timesheets.
                  </p>

                  <div className="space-y-2 py-1 text-xs">
                    <div className="flex items-center gap-2 text-[#E6E2D8]">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>Apps, websites and window titles</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#E6E2D8]">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>Active vs idle time (not what you type)</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#E6E2D8]">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>The task you choose to track</span>
                    </div>

                    <div className="border-t border-[#24305A] my-3 pt-3 space-y-2">
                      <div className="flex items-center gap-2 text-[#E5484D]">
                        <X className="w-4 h-4 text-[#E5484D] shrink-0" />
                        <span>Keystrokes, webcam or microphone (Never)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#E5484D]">
                        <X className="w-4 h-4 text-[#E5484D] shrink-0" />
                        <span>Document body content (Titles only)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#E5484D]">
                        <X className="w-4 h-4 text-[#E5484D] shrink-0" />
                        <span>Anything during Private Time (Never)</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => alert("Consent confirmed! Tracking ready.")}
                      className="flex-1 py-2.5 rounded-[10px] bg-[#FF5A36] hover:bg-[#E94A27] text-[#0F1730] font-bold text-xs transition-colors text-center"
                    >
                      I understand — continue
                    </button>
                    <Link
                      to="/privacy-promise"
                      className="px-4 py-2.5 rounded-[10px] bg-[#24305A] hover:bg-[#334173] text-white font-medium text-xs text-center"
                    >
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3 Feature Highlights (Built in Rust, Signed, Silent install) */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-[#FFE6DF] text-[#C2361A] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#0F1730] mb-2">Rolling out to a team?</h3>
              <p className="text-xs text-[#4A5370] leading-relaxed">
                Silent install with MSI and MDM profiles (Jamf, Intune, Microsoft Endpoint Manager).
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-[#FFE6DF] text-[#C2361A] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#0F1730] mb-2">Light on resources</h3>
              <p className="text-xs text-[#4A5370] leading-relaxed">
                Engineered in Rust with sub-25MB memory footprint and no noticeable impact on CPU performance.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle">
              <div className="w-10 h-10 rounded-xl bg-[#FFE6DF] text-[#C2361A] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#0F1730] mb-2">Signed & notarised</h3>
              <p className="text-xs text-[#4A5370] leading-relaxed">
                EV Code-signed on Windows, Apple Notarised on macOS, with staged release rings and instant rollback.
              </p>
            </div>
          </div>

          <div className="mt-10 p-4 rounded-xl bg-[#FFFFFF] border border-[#E6E2D8] text-center text-xs text-[#4A5370] max-w-xl mx-auto">
            📱 <strong>Note:</strong> Deskmerit tracks computer work. There is no mobile phone app — phones aren't tracked.
          </div>
        </section>

        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
