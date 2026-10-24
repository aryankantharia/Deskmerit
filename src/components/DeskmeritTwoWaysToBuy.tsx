import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Laptop, Building2, ToggleRight } from "lucide-react";

export function DeskmeritTwoWaysToBuy() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EE] border-b border-[#E6E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
            Two ways to buy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
            Use it on its own, or inside your HRMS.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5370] mt-4">
            Whether you want a modern standalone tracker or a native module embedded in Sqalible HRMS, the tracking agent and reports are identical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Standalone */}
          <div className="bg-[#FFFFFF] rounded-2xl p-8 border border-[#E6E2D8] shadow-card hover:shadow-elevated transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4A5370] bg-[#F7F4EE] px-3 py-1 rounded-full border border-[#E6E2D8]">
                  Standalone
                </span>
                <Laptop className="w-6 h-6 text-[#0F1730]" />
              </div>

              <h3 className="text-2xl font-bold text-[#0F1730] mb-3">
                Deskmerit on its own
              </h3>
              <p className="text-sm text-[#4A5370] leading-relaxed mb-6">
                Sign up, invite your team and start tracking today. Your own web dashboard and login, with single sign-on and SCIM on Enterprise.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Self-serve in under 10 minutes",
                  "Free Starter plan for up to 5 users",
                  "SSO, SCIM and data residency on Enterprise",
                  "Card payment or annual PO invoicing",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-[#0F1730]">
                    <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/signup"
              className="w-full py-3.5 px-4 rounded-[12px] bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-xs text-center transition-colors shadow-md hover:shadow-glow-ember flex items-center justify-center gap-2"
            >
              Start free trial
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: HRMS Add-on */}
          <div className="bg-[#0F1730] text-white rounded-2xl p-8 border border-[#24305A] shadow-card hover:shadow-elevated transition-all flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A36]/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFE6DF] bg-[#24305A] px-3 py-1 rounded-full border border-[#334173]">
                  HRMS Add-on
                </span>
                <ToggleRight className="w-6 h-6 text-[#FF5A36]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Deskmerit for Sqalible HRMS
              </h3>
              <p className="text-sm text-[#9AA1B2] leading-relaxed mb-6">
                Already on Sqalible? Switch Deskmerit on from your HRMS admin panel. Employees are auto-provisioned from your directory and reports appear inside the HRMS — on the same invoice.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "One toggle, no new vendor or paperwork",
                  "Same login as your Sqalible HRMS account",
                  "Billed as a simple line item on your Sqalible invoice",
                  "Attendance feeds payroll calculations directly",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-[#E6E2D8]">
                    <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/hrms-add-on"
              className="w-full py-3.5 px-4 rounded-[12px] bg-[#24305A] hover:bg-[#334173] text-white font-bold text-xs text-center border border-[#334173] transition-colors flex items-center justify-center gap-2"
            >
              Explore the HRMS add-on
              <ArrowRight className="w-3.5 h-3.5 text-[#FF5A36]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
