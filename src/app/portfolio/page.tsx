import type { Metadata } from "next";
import { Info } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/home/CTABanner";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { portfolioProjects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A look at the types of software Alpho builds — ecommerce, LMS, healthcare, logistics, SaaS, accounting, and cloud infrastructure projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="The kind of work we do"
        description="A cross-section of the project types Alpho delivers across industries and service lines."
      />

      <Section tone="light">
        <Container>
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-muted">
            <Info className="mt-0.5 size-4 shrink-0 text-brand" />
            These are illustrative project profiles representative of our
            work, not case studies of named clients. Ask us for references
            relevant to your project.
          </div>
          <PortfolioGrid projects={portfolioProjects} />
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
