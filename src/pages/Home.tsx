import React from "react";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritHero } from "../components/DeskmeritHero";
import { DeskmeritTrustBar } from "../components/DeskmeritTrustBar";
import { DeskmeritProblemSection } from "../components/DeskmeritProblemSection";
import { DeskmeritHowItWorks } from "../components/DeskmeritHowItWorks";
import { DeskmeritFeatureGrid } from "../components/DeskmeritFeatureGrid";
import { DeskmeritTrackerPlusSpotlight } from "../components/DeskmeritTrackerPlusSpotlight";
import { DeskmeritTrustSection } from "../components/DeskmeritTrustSection";
import { AiVsLegacySection } from "../components/AiVsLegacySection";
import { DeskmeritTwoWaysToBuy } from "../components/DeskmeritTwoWaysToBuy";
import { DeskmeritIntegrationsSection } from "../components/DeskmeritIntegrationsSection";
import { DeskmeritTestimonials } from "../components/DeskmeritTestimonials";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFooter } from "../components/DeskmeritFooter";

export function Home() {
  return (
    <div className="min-h-screen w-full bg-[#F7F4EE] font-sans text-[#0F1730]">
      {/* 1. Header with top announcement banner & mega-menu */}
      <DeskmeritHeader />

      <main>
        {/* 2. Hero: Know where the work goes. Without watching over shoulders. + Team Live Overview & Desktop Tracker Simulation */}
        <DeskmeritHero />

        {/* 3. Proof / Trust Bar: No keystrokes, no webcam, screenshots off by default, data residency, offline */}
        <DeskmeritTrustBar />

        {/* 4. The Problem: Your timesheets say one thing. Your invoices say another. (357h gap, ~35% non-billable) */}
        <DeskmeritProblemSection />

        {/* 5. How It Works: One click. Three answers. (1. Pick task, 2. Press Start, 3. Get answers) */}
        <DeskmeritHowItWorks />

        {/* 6. Features Grid: Everything you'd expect. Plus one click that does three jobs. (9 cards) */}
        <DeskmeritFeatureGrid />

        {/* 7. Tracker Plus Spotlight: Start the timer from the task. That's it. (Interactive ticket picker) */}
        <DeskmeritTrackerPlusSpotlight />

        {/* 8. Built For Trust: Time tracking employees don't resent. (4 pillars + human accent) */}
        <DeskmeritTrustSection />

        {/* 9. Comparison Benchmark: Deskmerit Trust-First vs Legacy Trackers (Sqalible table) */}
        <AiVsLegacySection />

        {/* 10. Two Ways To Buy: Standalone vs Deskmerit for Sqalible HRMS */}
        <DeskmeritTwoWaysToBuy />

        {/* 11. Integrations: Works with the tools your team already lives in. + AI MCP server prompt */}
        <DeskmeritIntegrationsSection />

        {/* 14. Testimonials: Pilot stories, coming soon */}
        <DeskmeritTestimonials />

        {/* 15. FAQ: Questions, answered honestly (6 interactive accordion items) */}
        <DeskmeritFaq />

        {/* 16. Final CTA Band: See your team's real week by Friday */}
        <DeskmeritCtaBand />
      </main>

      {/* 17. Comprehensive 7-column Footer */}
      <DeskmeritFooter />
    </div>
  );
}