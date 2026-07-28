import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  tone = "light",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "surface" | "navy";
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "section-shell py-20 sm:py-28",
        tone === "light" && "bg-background",
        tone === "surface" && "bg-surface",
        tone === "navy" && "bg-navy-950 text-white",
        className
      )}
    >
      {children}
    </section>
  );
}
