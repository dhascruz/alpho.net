import Link from "next/link";
import { LogoMark } from "@/components/layout/LogoMark";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="size-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-tight text-white">Alpho</span>
        <span className="mt-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
          Consultancy
        </span>
      </span>
    </Link>
  );
}
