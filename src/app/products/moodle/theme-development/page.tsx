import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Moodle Theme Development",
  description:
    "Custom Moodle theme development and ready-made Moodle themes such as Tresa: responsive, branded, and accessible.",
  alternates: { canonical: "/products/moodle/theme-development" },
};

const services = [
  "Custom child and standalone themes",
  "Branding: colors, typography, logos, and login pages",
  "Dashboard, course page, and navigation layout",
  "Mobile-first responsive design",
  "Accessibility improvements",
  "Compatibility with your Moodle version and plugins",
];

const process = [
  { title: "Discovery", text: "We review your brand, users, Moodle version, and installed plugins." },
  { title: "Design", text: "You approve layouts and styles before development begins." },
  { title: "Build", text: "The theme is built and tested on a staging copy of your site." },
  { title: "Launch", text: "We deploy, check compatibility, and hand over with documentation." },
];

export default function MoodleThemeDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Products · Moodle · Theme Development"
        title="Moodle themes that look like your brand"
        description="Custom-built or ready-made themes that give learners a clean, responsive experience on every device."
      />

      <Section tone="light">
        <Container>
          <SectionHeading eyebrow="Custom themes" title="What we build" />
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3 text-muted">
                <Check className="mt-1 size-4 shrink-0 text-brand" />
                {s}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeading eyebrow="How it works" title="From brief to launch" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Card key={step.title} hover={false}>
                <p className="font-mono text-xs font-semibold text-brand">0{i + 1}</p>
                <h3 className="mt-3 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <SectionHeading eyebrow="Ready-made themes" title="Moodle themes" />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link href="/products/moodle/tresa" className="group">
              <Card className="h-full overflow-hidden !p-0">
                <Image
                  src="/products/tresa-screenshot.png"
                  alt="Tresa Moodle theme preview"
                  width={1440}
                  height={900}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
                <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-brand">
                  Tresa
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  A modern, responsive, and customizable Moodle theme. $30 USD, one-time payment.
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  View Tresa
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
                </div>
              </Card>
            </Link>
          </div>
          <Button href="/contact" size="lg" className="mt-10">
            Request a custom theme
          </Button>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
