import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <div className="section-shell bg-navy-950 pb-24 pt-20 text-white sm:pt-28">
      <div className="blob blob-indigo -left-40 -top-40 size-[32rem]" />
      <div className="blob blob-sky -right-32 top-10 size-96" />

      <Container className="relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
          <Sparkles className="size-3.5 text-brand-light" />
          Enterprise software &amp; managed IT services
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Software and IT infrastructure that help businesses grow{" "}
          <span className="text-brand-light">faster.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
          From Laravel, Next.js, and NestJS development to LMS platforms,
          ecommerce, Ledgerly accounting software, cloud infrastructure, and
          24/7 remote IT support — we deliver secure, high-performance
          solutions tailored to your business goals.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/contact?type=consultation" size="lg">
            Book a Free Consultation
            <ArrowRight className="size-4" />
          </Button>
          <Button href="/portfolio" variant="outline-invert" size="lg">
            View Our Work
          </Button>
        </div>
      </Container>
    </div>
  );
}
