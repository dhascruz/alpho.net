"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex size-10 items-center justify-center rounded-full text-white/80 hover:text-white"
      >
        <Menu className="size-6" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 bg-navy-950">
          <div className="flex h-18 items-center justify-between px-6">
            <span className="text-xl font-extrabold tracking-tight text-white">
              Alpho<span className="text-brand-light">.</span>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex size-10 items-center justify-center rounded-full text-white/80 hover:text-white"
            >
              <X className="size-6" />
            </button>
          </div>

          <div className="h-[calc(100%-4.5rem)] overflow-y-auto px-6 pb-10">
            <p className="mb-2 mt-4 font-mono text-xs uppercase tracking-widest text-white/40">Services</p>
            <div className="flex flex-col gap-1 border-b border-white/10 pb-6">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {service.shortName}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-1 border-b border-white/10 py-6">
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Industries", href: "/industries" },
                { label: "Technologies", href: "/technologies" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2 font-medium text-white hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <Link
              href="/contact?type=consultation"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white"
            >
              Book a Consultation
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
