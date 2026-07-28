"use client";

import { useMemo, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/data/portfolio";

export function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const industries = useMemo(
    () => Array.from(new Set(projects.map((project) => project.industry))),
    [projects]
  );
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const filtered = activeIndustry
    ? projects.filter((project) => project.industry === activeIndustry)
    : projects;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveIndustry(null)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeIndustry === null
              ? "bg-brand text-white"
              : "bg-surface-strong text-muted hover:text-foreground"
          )}
        >
          All
        </button>
        {industries.map((industry) => (
          <button
            key={industry}
            type="button"
            onClick={() => setActiveIndustry(industry)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              activeIndustry === industry
                ? "bg-brand text-white"
                : "bg-surface-strong text-muted hover:text-foreground"
            )}
          >
            {industry}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <Card key={project.slug} hover={false}>
            <div className="flex items-center justify-between gap-2">
              <Badge tone="brand">{project.industry}</Badge>
              <Badge tone="neutral">{project.serviceName}</Badge>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{project.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="font-mono text-xs text-muted/80">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
