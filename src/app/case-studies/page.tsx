import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/home/CTABanner";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "How Alpho approaches real-world engagements — challenge, solution, and outcome, across ecommerce, education, cloud, and enterprise software.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="How we approach engagements like yours"
        description="Representative scenarios showing the shape of the problems we solve and how we work through them."
      />

      <Section tone="light">
        <Container>
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-muted">
            <Info className="mt-0.5 size-4 shrink-0 text-brand" />
            These are illustrative engagement scenarios describing the type
            of work Alpho does, not case studies of named clients.
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <Link key={study.slug} href={`/case-studies/${study.slug}`} className="group">
                <Card className="h-full">
                  <div className="flex items-center gap-2">
                    <Badge tone="brand">{study.industry}</Badge>
                    <Badge tone="neutral">{study.serviceName}</Badge>
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-foreground group-hover:text-brand">
                    {study.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{study.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Read the full example
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
