import type { Metadata } from "next";
import { Target, Layers3, ShieldCheck, Rocket } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Alpho",
  description:
    "Alpho is a software development and managed IT services company helping startups, SMEs, and enterprises grow with secure, scalable digital products.",
};

const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "We start by understanding your business processes, constraints, and goals — not just the feature list.",
  },
  {
    step: "02",
    title: "Design & scope",
    description:
      "Architecture, technology choices, and milestones are agreed upfront so there are no surprises mid-project.",
  },
  {
    step: "03",
    title: "Build & iterate",
    description:
      "Short delivery cycles with visible progress, so you're reviewing working software, not status reports.",
  },
  {
    step: "04",
    title: "Ship & support",
    description:
      "Launch is the start, not the end — we stay on for monitoring, iteration, and managed support.",
  },
];

const values = [
  {
    icon: Target,
    title: "Outcomes over output",
    description: "We measure success by the business problem solved, not lines of code shipped.",
  },
  {
    icon: Layers3,
    title: "Right-sized architecture",
    description: "We build for the scale you need next, not a hypothetical scale you may never reach.",
  },
  {
    icon: ShieldCheck,
    title: "Security by default",
    description: "Encryption, access control, and audit logging are part of the base build, not an add-on.",
  },
  {
    icon: Rocket,
    title: "Momentum",
    description: "Short feedback loops and clear milestones keep projects moving instead of stalling in scope debates.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Alpho"
        title="We build the software and infrastructure behind growing businesses"
        description="Alpho builds scalable digital products and managed IT solutions that help businesses grow faster."
      />

      <Section tone="light">
        <Container className="max-w-3xl">
          <SectionHeading
            eyebrow="Our positioning"
            title="Secure, high-performance solutions tailored to your business goals"
          />
          <p className="mt-6 text-lg leading-relaxed text-muted">
            From Laravel, Next.js, and NestJS development to LMS platforms,
            ecommerce, Ledgerly accounting software, cloud infrastructure, and
            24/7 remote IT support, we deliver secure, high-performance
            solutions tailored to your business goals — combining technical
            expertise with a clear focus on business value.
          </p>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeading eyebrow="How we work" title="A predictable process, from discovery to support" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <span className="font-mono text-sm font-semibold text-brand">{item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <SectionHeading eyebrow="What we value" title="Principles that shape every engagement" />
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title}>
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <value.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
