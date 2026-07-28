import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export function ServicesGrid() {
  return (
    <Section tone="surface">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What we do"
            title="Everything you need to ship and run software"
            description="Ten focused service lines, one accountable team — from first line of code to the infrastructure that keeps it running."
          />
          <Button href="/services" variant="outline" size="md" className="hidden sm:inline-flex">
            View all services
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="group">
              <Card className="h-full">
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <service.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground group-hover:text-brand">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.tagline}</p>
              </Card>
            </Link>
          ))}
        </div>

        <Button href="/services" variant="outline" size="md" className="mt-8 w-full sm:hidden">
          View all services
          <ArrowRight className="size-4" />
        </Button>
      </Container>
    </Section>
  );
}
