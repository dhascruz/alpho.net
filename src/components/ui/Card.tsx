import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white p-6 shadow-sm",
        hover && "transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
