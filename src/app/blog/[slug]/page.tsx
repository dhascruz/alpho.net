import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/home/CTABanner";
import { blogPosts } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={`${new Date(post.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })} · ${post.readMinutes} min read`}
      />

      <Section tone="light">
        <Container className="max-w-2xl">
          <div className="prose-content space-y-6">
            {post.body.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-border pt-8">
            <Badge tone="neutral">{post.category}</Badge>
            <Link href="/blog" className="text-sm font-medium text-muted hover:text-brand">
              ← Back to all posts
            </Link>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
