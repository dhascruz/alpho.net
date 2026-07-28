import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className}>
      <span className="text-xl font-extrabold tracking-tight text-white">
        Alpho<span className="text-brand-light">.</span>
      </span>
    </Link>
  );
}
