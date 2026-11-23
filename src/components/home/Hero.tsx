"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  actions: { label: string; href: string; variant?: "solid" | "outline-invert" }[];
};

const slides: Slide[] = [
  {
    eyebrow: "Enterprise software & managed IT services",
    title: (
      <>
        Software and IT infrastructure that help businesses grow{" "}
        <span className="text-brand-light">faster.</span>
      </>
    ),
    text: "From Laravel, Next.js, and NestJS development to LMS platforms, ecommerce, Ledgerly accounting software, Odoo, ERP and Moodle products, cloud infrastructure, and 24/7 remote IT support — we deliver secure, high-performance solutions tailored to your business goals.",
    actions: [
      { label: "Book a Free Consultation", href: "/contact?type=consultation", variant: "solid" },
      { label: "View Our Work", href: "/portfolio", variant: "outline-invert" },
      { label: "Explore Products", href: "/products", variant: "outline-invert" },
    ],
  },
  {
    eyebrow: "Moodle theme · $30 one-time",
    title: (
      <>
        Tresa — a modern <span className="text-brand-light">Moodle theme</span>
      </>
    ),
    text: "A responsive, customizable theme that gives learners an attractive, user-friendly online learning experience.",
    actions: [
      { label: "View Tresa", href: "/products/moodle/tresa", variant: "solid" },
      { label: "Terms of Sale", href: "/products/moodle/tresa/terms-of-sale", variant: "outline-invert" },
    ],
  },
  {
    eyebrow: "Moodle upgrades & implementation support",
    title: (
      <>
        Upgrade to the latest Moodle, <span className="text-brand-light">safely.</span>
      </>
    ),
    text: "Staging-first upgrades, plugin and theme compatibility fixes, migration, and hands-on implementation support.",
    actions: [{ label: "Explore Moodle", href: "/products/moodle", variant: "solid" }],
  },
  {
    eyebrow: "Moodle plugin & theme development",
    title: (
      <>
        Custom Moodle <span className="text-brand-light">plugins and themes</span>
      </>
    ),
    text: "Activity, block, local and report plugins plus branded, mobile-first themes, built to Moodle standards.",
    actions: [
      { label: "Theme development", href: "/products/moodle/theme-development", variant: "solid" },
      { label: "All Moodle services", href: "/products/moodle", variant: "outline-invert" },
    ],
  },
  {
    eyebrow: "Odoo plugins & ERP",
    title: (
      <>
        Odoo modules and ERP that fit <span className="text-brand-light">your business.</span>
      </>
    ),
    text: "Custom Odoo plugins, integrations, data migration and ERP implementation for finance, inventory, sales and operations.",
    actions: [{ label: "Talk to us", href: "/contact", variant: "solid" }],
  },
];

const INTERVAL_MS = 6000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % slides.length), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + slides.length) % slides.length);

  return (
    <div
      className="section-shell bg-navy-950 text-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="blob blob-indigo -left-40 -top-40 size-[32rem]" />
      <div className="blob blob-sky -right-32 top-10 size-96" />

      <div className="relative min-h-[40rem] sm:min-h-[36rem]" aria-roledescription="carousel">
        {slides.map((s, i) => (
          <div
            key={i}
            aria-hidden={i !== active}
            className={cn(
              "absolute inset-0 transition-opacity duration-700",
              i === active ? "z-10 opacity-100" : "pointer-events-none opacity-0"
            )}
          >
            <Container className="relative flex h-full flex-col justify-center pb-28 pt-16 sm:pt-20">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70">
                <Sparkles className="size-3.5 text-brand-light" />
                {s.eyebrow}
              </div>
              {i === 0 ? (
                <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  {s.title}
                </h1>
              ) : (
                <h2 className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                  {s.title}
                </h2>
              )}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-xl">
                {s.text}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                {s.actions.map((a, n) => (
                  <Button
                    key={a.href}
                    href={a.href}
                    variant={a.variant}
                    size="lg"
                    tabIndex={i === active ? 0 : -1}
                  >
                    {a.label}
                    {n === 0 ? <ArrowRight className="size-4" /> : null}
                  </Button>
                ))}
              </div>
            </Container>
          </div>
        ))}

        <Container className="pointer-events-none absolute inset-x-0 bottom-8 z-20 flex items-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous slide"
            className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-white text-navy-950 hover:bg-brand-light"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="pointer-events-auto flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === active ? "w-8 bg-brand-light" : "w-2 bg-white/40"
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next slide"
            className="pointer-events-auto flex size-10 items-center justify-center rounded-full bg-white text-navy-950 hover:bg-brand-light"
          >
            <ChevronRight className="size-5" />
          </button>
        </Container>
      </div>
    </div>
  );
}
