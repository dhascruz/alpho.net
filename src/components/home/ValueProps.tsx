import { ShieldCheck, Gauge, Users, GitBranch } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: Users,
    title: "One accountable team",
    description:
      "No handoffs between a design agency, a dev shop, and an IT vendor. One team owns your product from architecture to production.",
  },
  {
    icon: Gauge,
    title: "Built to scale",
    description:
      "We design data models and infrastructure for where your business is going, not just where it is today — so growth doesn't force a rewrite.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first delivery",
    description:
      "OWASP best practices, encryption at rest, role-based access, and audit logs are part of how we build, not an afterthought.",
  },
  {
    icon: GitBranch,
    title: "Transparent engagement",
    description:
      "Clear scopes, milestone-based delivery, and direct access to the engineers working on your system — not just an account manager.",
  },
];

export function ValueProps() {
  return (
    <Section tone="light">
      <Container>
        <SectionHeading
          eyebrow="Why Alpho"
          title="A development partner that behaves like an in-house team"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
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
  );
}
