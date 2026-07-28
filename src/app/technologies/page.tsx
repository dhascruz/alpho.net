import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/home/CTABanner";
import { technologyGroups } from "@/data/technologies";

export const metadata: Metadata = {
  title: "Technologies We Use",
  description:
    "The frontend, backend, database, authentication, cloud, and CI/CD technologies Alpho uses to build and run software.",
};

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="A modern, maintainable stack — not a resume of every framework"
        description="We standardize on a focused set of technologies so what we build is maintainable long after launch, by us or by your own team."
      />

      <Section tone="light">
        <Container>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {technologyGroups.map((group) => (
              <div key={group.category} className="rounded-2xl border border-border bg-surface p-6">
                <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-brand">
                  {group.category}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} tone="neutral">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
