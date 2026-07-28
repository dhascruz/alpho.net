import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("section-shell bg-navy-950 py-20 text-white sm:py-24", className)}>
      <div className="blob blob-indigo -left-32 -top-32 size-96" />
      <Container className="relative z-10">
        {eyebrow ? (
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{description}</p>
        ) : null}
      </Container>
    </div>
  );
}
