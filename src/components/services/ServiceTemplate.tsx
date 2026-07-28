import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { services, type Service } from "@/data/services";

export function ServiceTemplate({ service }: { service: Service }) {
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <div className="section-shell bg-navy-950 py-20 text-white sm:py-24">
        <div className="blob blob-indigo -left-32 -top-32 size-96" />
        <Container className="relative z-10">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-brand-light">
            <service.icon className="size-7" />
          </div>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {service.heroDescription}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={`/contact?type=proposal&service=${service.slug}`} size="lg">
              Request a Proposal
              <ArrowRight className="size-4" />
            </Button>
            <Button href="/contact?type=consultation" variant="outline-invert" size="lg">
              Book a Consultation
            </Button>
          </div>
        </Container>
      </div>

      <Section tone="light">
        <Container className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="What's included" title="Deliverables" />
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-14">
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
                Technology
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <Badge key={tech} tone="neutral">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
              Who it&apos;s for
            </h3>
            <ul className="mt-4 space-y-3">
              {service.whoItsFor.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
              <p className="text-sm font-semibold text-foreground">Not sure this is the right fit?</p>
              <p className="mt-2 text-sm text-muted">
                Request a free technical audit and we&apos;ll recommend the right approach.
              </p>
              <Button href="/contact?type=audit" variant="outline" size="sm" className="mt-4">
                Request a Free Technical Audit
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <SectionHeading eyebrow="Explore more" title="Related services" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group rounded-2xl border border-border bg-white p-6 transition-colors hover:border-brand/40"
              >
                <item.icon className="size-6 text-brand" />
                <h4 className="mt-4 font-semibold text-foreground group-hover:text-brand">
                  {item.name}
                </h4>
                <p className="mt-2 text-sm text-muted">{item.tagline}</p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
