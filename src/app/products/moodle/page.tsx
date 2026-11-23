import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/home/CTABanner";
import { moodleOfferings } from "@/data/products";

export const metadata: Metadata = {
  title: "Moodle Plugin & Theme Development, Upgrades, Implementation Support",
  description:
    "Moodle plugin development, theme development, upgrading to the latest Moodle, and implementation support.",
  alternates: { canonical: "/products/moodle" },
};

export default function MoodleProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products · Moodle"
        title="Moodle development, upgrades, and support"
        description="From custom plugins and themes to safe upgrades and full implementation support."
      />

      <Section tone="light">
        <Container>
          <SectionHeading eyebrow="What we do" title="Four ways we help with Moodle" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {moodleOfferings.map((o) => (
              <Card key={o.name} hover={false}>
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <o.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{o.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{o.summary}</p>
                <ul className="mt-4 space-y-2">
                  {o.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-muted">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      {pt}
                    </li>
                  ))}
                </ul>
                {o.href === "/products/moodle/theme-development" ? (
                  <Link
                    href="/products/moodle/tresa"
                    className="group mt-5 block overflow-hidden rounded-xl border border-border"
                  >
                    <Image
                      src="/products/tresa-screenshot.png"
                      alt="Tresa Moodle theme preview"
                      width={1440}
                      height={900}
                      className="aspect-[16/8] w-full object-cover object-top"
                    />
                    <div className="flex items-center justify-between px-4 py-3">
                      <span className="text-sm font-semibold text-foreground group-hover:text-brand">
                        Tresa Moodle Theme · $30
                      </span>
                      <span className="text-sm font-semibold text-brand">View</span>
                    </div>
                  </Link>
                ) : null}
                {o.href ? (
                  <Link
                    href={o.href}
                    className="mt-5 inline-block text-sm font-semibold text-brand hover:underline"
                  >
                    Learn more
                  </Link>
                ) : null}
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="max-w-2xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Themes"
            title="Tresa Moodle Theme"
            description="A modern, responsive Moodle theme for $30 USD, one-time payment."
            className="mx-auto"
          />
          <Link
            href="/products/moodle/tresa"
            className="mt-6 inline-block text-sm font-semibold text-brand hover:underline"
          >
            View Tresa
          </Link>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
