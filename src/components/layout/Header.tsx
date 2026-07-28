import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { MobileNav } from "@/components/layout/MobileNav";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

const dropdownLinkClass =
  "flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-white";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
              Services
            </button>
            <div className="invisible absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-navy-900 p-3 shadow-2xl">
                {services.map((service) => (
                  <Link key={service.slug} href={`/services/${service.slug}`} className={dropdownLinkClass}>
                    <service.icon className="mt-0.5 size-4 shrink-0 text-brand-light" />
                    <span>
                      <span className="block font-medium text-white">{service.shortName}</span>
                      <span className="mt-0.5 block text-xs text-white/50">{service.tagline}</span>
                    </span>
                  </Link>
                ))}
                <Link
                  href="/services"
                  className={cn(dropdownLinkClass, "col-span-2 justify-center font-semibold text-brand-light hover:text-white")}
                >
                  View all services
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
              Work
            </button>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy-900 p-3 shadow-2xl">
                <Link href="/portfolio" className={dropdownLinkClass}>
                  Portfolio
                </Link>
                <Link href="/case-studies" className={dropdownLinkClass}>
                  Case Studies
                </Link>
              </div>
            </div>
          </div>

          <Link href="/industries" className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
            Industries
          </Link>
          <Link href="/blog" className="rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
            Blog
          </Link>

          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white">
              Company
            </button>
            <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-navy-900 p-3 shadow-2xl">
                <Link href="/about" className={dropdownLinkClass}>
                  About
                </Link>
                <Link href="/technologies" className={dropdownLinkClass}>
                  Technologies
                </Link>
                <Link href="/careers" className={dropdownLinkClass}>
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="text-sm font-medium text-white/80 transition-colors hover:text-white">
            Contact
          </Link>
          <Link
            href="/contact?type=consultation"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
          >
            Book a Consultation
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
