import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/home/CTABanner";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Alpho works with startups, SMEs, educational institutions, retail businesses, enterprises, accounting firms, and IT teams.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for how your organization actually operates"
        description="Every industry we serve maps to a specific set of needs — and to the services designed around solving them."
      />

      <Section tone="light">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {industries.map((industry) => {
              const related = services.filter((service) =>
                industry.relatedServiceSlugs.includes(service.slug)
              );
              return (
                <Card key={industry.slug} className="h-full">
                  <industry.icon className="size-7 text-brand" />
                  <h2 className="mt-5 text-lg font-semibold text-foreground">{industry.name}</h2>
                  <p className="mt-1 text-sm font-medium text-brand">{industry.need}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{industry.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {related.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1 rounded-full bg-brand-tint px-3 py-1 text-xs font-medium text-brand-strong hover:bg-brand hover:text-white"
                      >
                        {service.shortName}
                        <ArrowRight className="size-3" />
                      </Link>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
