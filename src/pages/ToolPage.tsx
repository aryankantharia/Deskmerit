import React from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "../components/layout/PageLayout";
import { PageHero } from "../components/layout/PageHero";
import { PageCta } from "../components/layout/PageCta";
import { GratuityCalculator } from "../components/GratuityCalculator";
import { NoticePayCalculator } from "../components/tools/NoticePayCalculator";
import { CtcCalculator } from "../components/tools/CtcCalculator";
import { NotFound } from "./NotFound";

const tools: Record<string, {title: string;description: string;}> = {
  "gratuity-calculator": {
    title: "Gratuity Calculator",
    description: "Estimate gratuity under India's Payment of Gratuity Act, including eligibility and the statutory cap."
  },
  "ctc-calculator": {
    title: "CTC / Salary Calculator",
    description: "Break an annual CTC into salary components and an estimated monthly in-hand amount."
  },
  "notice-pay-calculator": {
    title: "Notice Pay Calculator",
    description: "Work out notice pay recoverable when an employee leaves before serving their full notice period."
  }
};

const toolImages: Record<string, string> = {
  "gratuity-calculator": "/heroes/resources-calc-gratuity.jpg",
  "ctc-calculator": "/heroes/resources-calc-ctc.jpg",
  "notice-pay-calculator": "/heroes/resources-calc-notice.jpg"
};

export function ToolPage() {
  const { slug = "" } = useParams();
  const tool = tools[slug];
  if (!tool) return <NotFound />;

  return (
    <PageLayout>
      <PageHero
        crumbs={[{ title: "Free tools", href: "/tools/templates" }, { title: tool.title }]}
        pretitle="Free tools"
        title={tool.title}
        description={tool.description}
        image={toolImages[slug]}
        imageAlt={tool.title}
        showActions={false}
      />
      
      {slug === "gratuity-calculator" ? (
        <GratuityCalculator />
      ) : (
        <section className="bg-white pt-10 pb-6 md:pt-12 md:pb-8" aria-label={tool.title}>
          <div className="mx-auto max-w-5xl px-6">
            {slug === "ctc-calculator" ? <CtcCalculator /> : <NoticePayCalculator />}
          </div>
        </section>
      )}
      <PageCta
        title="Sqalible runs these calculations automatically for every employee."
        className="bg-white pt-2 pb-14 md:pt-4 md:pb-16"
      />
    </PageLayout>);

}