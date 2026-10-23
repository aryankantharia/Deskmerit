import React from "react";
import { ShieldCheckIcon, CheckCircle2Icon, AwardIcon, LockIcon } from "lucide-react";

export function ProofStrip() {
  const proofs = [
    { label: "SOC 2 Type II Certified", icon: LockIcon },
    { label: "ISO 27001 Certified", icon: ShieldCheckIcon },
    { label: "GDPR & DPDP Compliant", icon: CheckCircle2Icon },
    { label: "99.99% Statutory Payroll Accuracy", icon: AwardIcon },
    { label: "100k+ Active Employees Managed", icon: CheckCircle2Icon }
  ];

  return (
    <section className="border-b border-neutral-800 bg-[#0E1620] py-4 text-white" aria-label="Enterprise Trust & Certifications">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 w-full whitespace-nowrap overflow-x-auto scrollbar-none py-0.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider shrink-0">
            <span className="h-2 w-2 rounded-full bg-teal-400 shrink-0" />
            <span>Enterprise Security & Compliance Proof:</span>
          </div>

          <div className="flex items-center gap-x-5 xl:gap-x-7 text-xs text-neutral-300 shrink-0">
            {proofs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-1.5 font-medium hover:text-white transition-colors shrink-0">
                  <Icon size={14} className="text-teal-400 shrink-0" />
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
