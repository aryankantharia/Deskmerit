import React from "react";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { PricingSection } from "../components/PricingSection";
import { FaqSection } from "../components/FaqSection";
import { pricingFaqs } from "../data/pricing";

export function PricingPage() {
  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: "Pricing" }]}
        pretitle="Transparent Pricing"
        title="Simple plans, predictable pricing"
        description="Choose the plan that fits your workforce. Start with a 14-day free trial on pooled cloud, or deploy dedicated enterprise infrastructure with regional data residency."
        image="none"
        showActions={false}
      />

      <PricingSection />

      <FaqSection
        pretitle="Pricing FAQs"
        title="Frequently asked pricing questions"
        faqs={pricingFaqs}
        cardTitle="Need a Custom Enterprise Quote?"
        cardDescription="Our solutions team helps multi-entity organizations configure volume seat discounts, dedicated regional VPCs, and parallel payroll migration dry-runs."
        cardButtonText="Talk to sales"
        cardButtonHref="/contact"
      />
    </PageLayout>
  );
}