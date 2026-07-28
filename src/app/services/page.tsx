import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/home/CTABanner";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Software Development & IT Services",
  description:
    "Custom software development, Laravel, Next.js, and NestJS development, LMS, ecommerce, Ledgerly accounting software, cloud infrastructure, and remote IT support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Ten service lines. One team you can actually reach."
        description="Whatever stage your business is at — from a first MVP to enterprise digital transformation — we cover the software and infrastructure work behind it."
      />

      <Section tone="light">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                <Card className="h-full">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <service.icon className="size-5" />
                  </div>
                  <h2 className="mt-5 text-lg font-semibold text-foreground group-hover:text-brand">
                    {service.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Learn more
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
