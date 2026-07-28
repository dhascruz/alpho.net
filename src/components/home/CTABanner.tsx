import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <Section tone="navy" className="py-20">
      <div className="blob blob-indigo -bottom-32 left-1/4 size-96" />
      <Container className="relative z-10 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to build something that scales?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Tell us what you&apos;re working on. We&apos;ll follow up with next
          steps for a free consultation or technical audit.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href="/contact?type=consultation" size="lg">
            Book a Free Consultation
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/contact?type=audit" variant="outline-invert" size="lg">
            Request a Free Technical Audit
          </Button>
        </div>
      </Container>
    </Section>
  );
}
