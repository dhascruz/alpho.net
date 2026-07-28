import type { Metadata } from "next";
import { Laptop, Clock, GraduationCap, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles and culture at Alpho — a remote-first software and IT services team.",
};

const perks = [
  { icon: Laptop, title: "Remote-first", description: "Work from anywhere — we hire for output, not office hours." },
  { icon: Clock, title: "Flexible schedule", description: "Structure your day around focused work, not fixed shifts." },
  { icon: GraduationCap, title: "Learning budget", description: "Support for courses, certifications, and conferences." },
  { icon: HeartHandshake, title: "Real ownership", description: "Work directly with clients — no filtered-down requirements." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build software that businesses actually depend on"
        description="We're a small, remote-first team working across Laravel, Next.js, NestJS, cloud infrastructure, and managed IT."
      />

      <Section tone="light">
        <Container>
          <SectionHeading eyebrow="Why Alpho" title="What it's like to work here" />
          <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div key={perk.title}>
                <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <perk.icon className="size-5" />
                </div>
                <h3 className="mt-5 font-semibold text-foreground">{perk.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{perk.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container className="max-w-2xl text-center">
          <SectionHeading
            eyebrow="Open roles"
            title="No open positions right now"
            align="center"
            description="We're not actively hiring at the moment, but we're always glad to hear from strong Laravel, Next.js, NestJS, or DevOps engineers. Send us your resume and a short note about what you'd want to work on."
            className="mx-auto"
          />
          <Button href="mailto:cruzconsultancy@gmail.com" size="lg" className="mt-8">
            Email cruzconsultancy@gmail.com
          </Button>
        </Container>
      </Section>
    </>
  );
}
