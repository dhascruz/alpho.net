import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { industries } from "@/data/industries";

export function IndustriesStrip() {
  return (
    <Section tone="surface">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Who we work with"
            title="Built for how your organization actually operates"
          />
          <Button href="/industries" variant="outline" size="md" className="hidden sm:inline-flex">
            All industries
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href="/industries"
              className="group flex flex-col items-start gap-3 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-brand/40"
            >
              <industry.icon className="size-6 text-brand" />
              <span className="text-sm font-semibold text-foreground group-hover:text-brand">
                {industry.name}
              </span>
              <span className="text-xs text-muted">{industry.need}</span>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
