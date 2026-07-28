import type { Metadata } from "next";
import { Suspense } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { LeadForm } from "@/components/forms/LeadForm";
import { CostCalculator } from "@/components/forms/CostCalculator";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free consultation, request a proposal, schedule a demo, or get a free technical audit from Alpho.",
};

const faqs = [
  {
    question: "How quickly can we get started?",
    answer:
      "Most engagements start with a discovery call within a few days of first contact, followed by a scoped proposal within a week.",
  },
  {
    question: "Do you work with fixed-price or time & materials contracts?",
    answer:
      "Both — well-defined projects usually work best as fixed-price milestones, while ongoing product work is typically time & materials with a monthly cap.",
  },
  {
    question: "Can you take over an existing codebase?",
    answer:
      "Yes. We start with a short technical audit to assess code quality, security, and scalability before committing to a scope.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes — Business, Enterprise, and 24/7 support plans are available for both software we've built and existing systems.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you're building"
        description="Book a free consultation, request a proposal, schedule a demo, or ask for a free technical audit — one form, straight to our team."
      />

      <Section tone="light">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Suspense fallback={null}>
                <LeadForm />
              </Suspense>
            </div>

            <div className="space-y-6 lg:col-span-2">
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold text-foreground">Prefer to reach out directly?</h3>
                <ul className="mt-4 space-y-3 text-sm">
                  <li className="flex items-center gap-3">
                    <Mail className="size-4 text-brand" />
                    <a href="mailto:cruzconsultancy@gmail.com" className="text-muted hover:text-brand">
                      cruzconsultancy@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="size-4 text-brand" />
                    <a href="tel:+919790805532" className="text-muted hover:text-brand">
                      +91 97908 05532
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <MessageCircle className="size-4 text-brand" />
                    <span className="text-muted">WhatsApp — use the button in the corner</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-6 text-sm text-muted">
                We typically reply within one business day. For urgent
                production issues on an active support plan, use your
                dedicated support channel instead of this form.
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Rough numbers"
            title="Get a ballpark estimate"
            description="Not ready to talk yet? Get a non-binding estimate based on the type of project you have in mind."
          />
          <div className="mx-auto mt-10 max-w-2xl">
            <CostCalculator />
          </div>
        </Container>
      </Section>

      <Section tone="light">
        <Container className="max-w-2xl">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <div className="mt-10">
            <Accordion items={faqs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
