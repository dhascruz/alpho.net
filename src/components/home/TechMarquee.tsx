import { Container } from "@/components/ui/Container";
import { technologyGroups } from "@/data/technologies";

const allTech = technologyGroups.flatMap((group) => group.items);

export function TechMarquee() {
  return (
    <div className="border-y border-border bg-white py-10">
      <Container>
        <p className="text-center font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          Our stack
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {allTech.map((tech) => (
            <span key={tech} className="font-mono text-sm font-medium text-foreground/70">
              {tech}
            </span>
          ))}
        </div>
      </Container>
    </div>
  );
}
