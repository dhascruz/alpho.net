import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTABanner } from "@/components/home/CTABanner";
import { ProductsSlider } from "@/components/home/ProductsSlider";
import { productLines } from "@/data/products";

export const metadata: Metadata = {
  title: "Products – Odoo Plugins, ERP & Moodle",
  description:
    "Odoo plugins, ERP implementation, and Moodle plugin development, theme development, upgrades, and implementation support.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Odoo, ERP, and Moodle — built and supported by one team"
        description="Plugins, themes, upgrades, and implementation support for the platforms your business and learners rely on."
      />

      <Section tone="light">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {productLines.map((p) => (
              <Link key={p.slug} href={p.href} className="group">
                <Card className="h-full">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`${p.name} preview`}
                      width={1914}
                      height={900}
                      className="-mx-6 -mt-6 mb-6 aspect-[16/9] w-[calc(100%+3rem)] max-w-none rounded-t-2xl object-cover object-top"
                    />
                  ) : null}
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                    <p.icon className="size-5" />
                  </div>
                  <h2 className="mt-5 text-xl font-semibold text-foreground group-hover:text-brand">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-muted">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    {p.href === "/contact" ? "Talk to us" : "Explore Moodle"}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <ProductsSlider tone="surface" />

      <CTABanner />
    </>
  );
}
