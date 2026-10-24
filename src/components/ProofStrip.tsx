import React from "react";
import { ShieldCheck, CheckCircle2, Award, Lock } from "lucide-react";

export function ProofStrip() {
  const proofs = [
    { label: "Zero Keystroke Keylogging", icon: Lock },
    { label: "No Webcam or Audio Snooping", icon: ShieldCheck },
    { label: "Screenshots Off by Default", icon: CheckCircle2 },
    { label: "DPDP Act 2023 & NSW Aligned", icon: Award },
    { label: "Enterprise Data Residency (IN, AU, UAE, US)", icon: CheckCircle2 },
  ];

  return (
    <section className="border-b border-[#24305A] bg-[#0F1730] py-4 text-white" aria-label="PulseTrack Trust & Compliance Guarantees">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 w-full whitespace-nowrap overflow-x-auto scrollbar-none py-0.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#9AA1B2] uppercase tracking-wider shrink-0">
            <span className="h-2 w-2 rounded-full bg-[#FF5A36] shrink-0 animate-pulse" />
            <span>PulseTrack Trust & Privacy Guarantees:</span>
          </div>

          <div className="flex items-center gap-x-5 xl:gap-x-7 text-xs text-[#E6E2D8] shrink-0">
            {proofs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-1.5 font-medium hover:text-[#FF5A36] transition-colors shrink-0">
                  <Icon size={14} className="text-[#FF5A36] shrink-0" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
