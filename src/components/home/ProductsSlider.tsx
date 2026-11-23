"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { productSlides } from "@/data/products";

export function ProductsSlider({ tone = "light" }: { tone?: "light" | "surface" }) {
  const track = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 380), behavior: "smooth" });
  };

  return (
    <Section tone={tone}>
      <Container>
        <div className="flex items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Products"
            title="Moodle, Odoo, and ERP products"
            description="Scroll through what we build and sell, including the Tresa Moodle theme."
          />
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Scroll products left"
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Scroll products right"
              className="flex size-11 items-center justify-center rounded-full border border-border text-foreground hover:border-brand hover:text-brand"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={track}
          className="-mx-6 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-4 [scrollbar-width:thin] lg:-mx-8 lg:px-8"
          tabIndex={0}
          aria-label="Products"
        >
          {productSlides.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              className="group w-[85%] shrink-0 snap-start sm:w-[22rem]"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lg">
                {s.image ? (
                  <Image
                    src={s.image}
                    alt={`${s.name} preview`}
                    width={1440}
                    height={900}
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex aspect-[16/10] w-full items-center justify-center bg-brand-tint text-brand">
                    <s.icon className="size-14" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-brand">
                    {s.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-brand">
                    {s.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    {s.cta}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
