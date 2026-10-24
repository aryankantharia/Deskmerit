import React from "react";
import { PulseTrackHeader } from "../components/PulseTrackHeader";
import { Hero } from "../components/Hero";
import { ProofStrip } from "../components/ProofStrip";
import { LifecycleStepper } from "../components/LifecycleStepper";
import { InterviewFeature } from "../components/InterviewFeature";
import { DashboardShowcase } from "../components/DashboardShowcase";
import { AiVsLegacySection } from "../components/AiVsLegacySection";
import { EcosystemSection } from "../components/EcosystemSection";
import { PageCta } from "../components/layout/PageCta";
import { PulseTrackFooter } from "../components/PulseTrackFooter";

export function Home() {
  return (
    <div className="min-h-screen w-full bg-[#F7F4EE] font-sans text-[#0F1730]">
      <PulseTrackHeader />
      <main>
        {/* Beat 1: Hero with headline, 2 CTAs, floating SaaS cards cluster */}
        <Hero />

        {/* Beat 2: Slim trust bar / proof strip directly under hero */}
        <ProofStrip />

        {/* Beat 3: Lifecycle stepper: Track → Connect → Verify → Bill → Trust */}
        <LifecycleStepper />

        {/* Beat 4: Signature moment: interactive Tracker Plus simulation demo */}
        <InterviewFeature />

        {/* Beat 5: Dashboard / analytics with live module callouts */}
        <DashboardShowcase />

        {/* Beat 6: Trust-First vs Legacy Trackers 3-column benchmark */}
        <AiVsLegacySection />

        {/* Beat 7: Solutions tabs (Industry, Team, Region) + integrations marquee */}
        <EcosystemSection />

        {/* Beat 8: Reused PageCta card matching application standard */}
        <PageCta title="See your team's real week by Friday." />
      </main>
      <PulseTrackFooter />
    </div>
  );
}