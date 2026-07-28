import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "brand",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "neutral" | "amber" | "invert";
}) {
  const tones = {
    brand: "bg-brand-tint text-brand-strong",
    neutral: "bg-surface-strong text-muted",
    amber: "bg-amber-50 text-amber-700",
    invert: "bg-white/10 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
