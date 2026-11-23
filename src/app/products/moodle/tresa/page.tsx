import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Tresa Moodle Theme",
  description:
    "Tresa is a modern, responsive, and customizable Moodle theme for $30 USD, one-time payment.",
  alternates: { canonical: "/products/moodle/tresa" },
};

const highlights = [
  "Attractive, responsive layout for desktop, tablet, and mobile",
  "User-friendly learning environment",
  "Customizable to suit institutions, trainers, and organizations",
  "One-time payment, no recurring charges",
];

const facts = [
  ["Product", "Tresa Moodle Theme"],
  ["Price", "$30 USD"],
  ["Payment", "One-time"],
  ["Delivery", "As specified at checkout or on the Moodle Marketplace listing"],
];

export default function TresaPage() {
  return (
    <>
      <PageHero
        eyebrow="Products · Moodle · Theme Development"
        title="Tresa Moodle Theme"
        description="A modern and customizable theme that helps you create an engaging online learning experience."
      />

      <Section tone="light">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Overview" title="Why Tresa" />
            <ul className="mt-8 space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3 text-muted">
                  <Check className="mt-1 size-4 shrink-0 text-brand" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <dl className="divide-y divide-border">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3 text-sm">
                  <dt className="font-semibold text-foreground">{k}</dt>
                  <dd className="text-right text-muted">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Buy or ask a question</Button>
              <Button href="/products/moodle/tresa/terms-of-sale" variant="outline">
                Terms of Sale
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeading eyebrow="Preview" title="Tresa in action" />
          <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-lg">
            <Image
              src="/products/tresa-screenshot.png"
              alt="Tresa Moodle theme home page with hero slider on learn.alpho.net"
              width={1440}
              height={900}
              className="h-auto w-full"
              priority
            />
          </div>
          <p className="mt-4 text-sm text-muted">
            Live demo:{" "}
            <a
              href="https://learn.alpho.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand hover:underline"
            >
              learn.alpho.net
            </a>
          </p>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
