import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/data/case-studies";

export function FeaturedCaseStudy() {
  const featured = caseStudies[0];

  return (
    <Section tone="light">
      <Container>
        <div className="grid grid-cols-1 gap-10 rounded-3xl border border-border bg-surface p-8 lg:grid-cols-2 lg:p-14">
          <div>
            <Badge tone="brand">Illustrative example</Badge>
            <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{featured.summary}</p>
            <Button href={`/case-studies/${featured.slug}`} variant="outline" size="md" className="mt-8">
              Read the full example
              <ArrowRight className="size-4" />
            </Button>
          </div>
          <div className="flex flex-col justify-center gap-6 border-t border-border pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                Challenge
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{featured.challenge}</p>
            </div>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                Outcome
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{featured.outcome}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
