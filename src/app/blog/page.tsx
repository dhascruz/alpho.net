import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering, cloud, and product notes from the Alpho team — Laravel, Next.js, NestJS, cloud migration, and accounting software.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes on engineering, cloud, and product"
        description="Practical write-ups from the kind of work we do day to day."
      />

      <Section tone="light">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <Card className="h-full">
                  <Badge tone="brand">{post.category}</Badge>
                  <h2 className="mt-5 text-lg font-semibold leading-snug text-foreground group-hover:text-brand">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between text-xs text-muted">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>{post.readMinutes} min read</span>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Read post
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
