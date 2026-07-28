"use client";

import { useMemo, useState } from "react";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

const projectTypes = [
  { value: "mvp", label: "Startup MVP", base: 8000 },
  { value: "website", label: "Marketing website", base: 4000 },
  { value: "ecommerce", label: "Ecommerce store", base: 12000 },
  { value: "lms", label: "LMS platform", base: 20000 },
  { value: "erp", label: "Custom ERP / CRM", base: 30000 },
  { value: "saas", label: "SaaS product", base: 25000 },
];

const featureOptions = [
  { id: "auth", label: "User accounts & auth", cost: 2000 },
  { id: "payments", label: "Payments / billing", cost: 3500 },
  { id: "admin", label: "Admin dashboard", cost: 4000 },
  { id: "api", label: "Public API", cost: 3000 },
  { id: "mobile", label: "Mobile app", cost: 9000 },
  { id: "integrations", label: "Third-party integrations", cost: 2500 },
];

const timelines = [
  { value: "standard", label: "Standard", multiplier: 1 },
  { value: "expedited", label: "Expedited", multiplier: 1.25 },
];

export function CostCalculator() {
  const [projectType, setProjectType] = useState(projectTypes[0].value);
  const [features, setFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState(timelines[0].value);

  const estimate = useMemo(() => {
    const base = projectTypes.find((type) => type.value === projectType)?.base ?? 0;
    const featureCost = features.reduce((sum, id) => {
      const feature = featureOptions.find((item) => item.id === id);
      return sum + (feature?.cost ?? 0);
    }, 0);
    const multiplier = timelines.find((item) => item.value === timeline)?.multiplier ?? 1;
    const low = Math.round(((base + featureCost) * multiplier) / 500) * 500;
    const high = Math.round((low * 1.4) / 500) * 500;
    return { low, high };
  }, [projectType, features, timeline]);

  function toggleFeature(id: string) {
    setFeatures((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">Project type</label>
        <select
          value={projectType}
          onChange={(event) => setProjectType(event.target.value)}
          className="w-full rounded-xl border border-border bg-white px-4 py-2.5 text-sm focus:border-brand focus:outline-none"
        >
          {projectTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-foreground">Add-ons</label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {featureOptions.map((feature) => (
            <label
              key={feature.id}
              className={cn(
                "flex cursor-pointer items-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm transition-colors",
                features.includes(feature.id) && "border-brand bg-brand-tint"
              )}
            >
              <input
                type="checkbox"
                checked={features.includes(feature.id)}
                onChange={() => toggleFeature(feature.id)}
                className="size-4 accent-[var(--brand)]"
              />
              {feature.label}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-foreground">Timeline</label>
        <div className="grid grid-cols-2 gap-2">
          {timelines.map((option) => (
            <label key={option.value} className="relative">
              <input
                type="radio"
                name="timeline"
                value={option.value}
                checked={timeline === option.value}
                onChange={() => setTimeline(option.value)}
                className="peer sr-only"
              />
              <span className="block cursor-pointer rounded-xl border border-border px-3 py-2.5 text-center text-sm text-muted transition-colors peer-checked:border-brand peer-checked:bg-brand-tint peer-checked:text-brand-strong">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl bg-navy-950 p-6 text-center text-white">
        <p className="font-mono text-xs uppercase tracking-widest text-white/50">Estimated range</p>
        <p className="mt-2 text-3xl font-extrabold">
          ${estimate.low.toLocaleString()} – ${estimate.high.toLocaleString()}
        </p>
      </div>

      <p className="mt-4 flex items-start gap-2 text-xs text-muted">
        <Info className="mt-0.5 size-3.5 shrink-0" />
        This is a rough, non-binding estimate to help you plan. Actual pricing
        depends on scope — request a proposal for an accurate quote.
      </p>
    </div>
  );
}
