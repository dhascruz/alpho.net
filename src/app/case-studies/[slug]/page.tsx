import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Info, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/home/CTABanner";
import { caseStudies } from "@/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};
  return { title: study.title, description: study.summary };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <>
      <PageHero
        eyebrow={study.industry}
        title={study.title}
        description={study.summary}
      />

      <Section tone="light">
        <Container className="max-w-3xl">
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-border bg-surface px-5 py-4 text-sm text-muted">
            <Info className="mt-0.5 size-4 shrink-0 text-brand" />
            This is an illustrative engagement scenario describing the type
            of work Alpho does, not a case study of a named client.
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <Badge key={tech} tone="neutral">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                Challenge
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">{study.challenge}</p>
            </div>
            <div>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                Solution
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">{study.solution}</p>
            </div>
            <div>
              <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                Outcome
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground">{study.outcome}</p>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row">
            <Button href={`/services/${study.serviceSlug}`} variant="outline">
              Explore {study.serviceName}
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/contact?type=consultation">Book a Consultation</Button>
          </div>

          <Link href="/case-studies" className="mt-8 inline-block text-sm text-muted hover:text-brand">
            ← Back to all case studies
          </Link>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
