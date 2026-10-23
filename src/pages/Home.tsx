import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ProofStrip } from "../components/ProofStrip";
import { LifecycleStepper } from "../components/LifecycleStepper";
import { InterviewFeature } from "../components/InterviewFeature";
import { DashboardShowcase } from "../components/DashboardShowcase";
import { AiVsLegacySection } from "../components/AiVsLegacySection";
import { EcosystemSection } from "../components/EcosystemSection";
import { PageCta } from "../components/layout/PageCta";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <div className="min-h-screen w-full bg-accent-light font-sans text-neutral-900">
      <Header />
      <main>
        {/* Beat 1: Hero with headline, 2 CTAs, live product UI (not stock) */}
        <Hero />

        {/* Beat 2: Slim logo bar / proof strip directly under hero */}
        <ProofStrip />

        {/* Beat 3: Lifecycle stepper: Hire → ... → Exit (click a step to swap screenshot) */}
        <LifecycleStepper />

        {/* Beat 4: Signature moment: interactive and simple AI interview demo */}
        <InterviewFeature />

        {/* Beat 5: Dashboard / analytics with 3 callouts */}
        <DashboardShowcase />

        {/* Beat 6: AI-native vs Legacy (compact, 5 rows) */}
        <AiVsLegacySection />

        {/* Beat 7: Solutions tabs + integrations marquee + trust tiles */}
        <EcosystemSection />

        {/* Beat 8: Reused PageCta card matching application standard */}
        <PageCta title="Experience Hiring Requests & Approvals in action with our HRMS engineering specialists." />
      </main>
      <Footer />
    </div>
  );
}