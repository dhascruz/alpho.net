import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { technologyGroups } from "@/data/technologies";

const stats = [
  { value: `${services.length}`, label: "Core service lines" },
  { value: `${technologyGroups.reduce((sum, group) => sum + group.items.length, 0)}+`, label: "Technologies in our stack" },
  { value: `${industries.length}`, label: "Industries served" },
  { value: "24/7", label: "Support plans available" },
];

export function StatsStrip() {
  return (
    <div className="border-y border-border bg-white">
      <Container className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <div className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-1 text-sm text-muted">{stat.label}</div>
          </div>
        ))}
      </Container>
    </div>
  );
}
