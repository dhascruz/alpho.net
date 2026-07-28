import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ValueProps } from "@/components/home/ValueProps";
import { FeaturedCaseStudy } from "@/components/home/FeaturedCaseStudy";
import { IndustriesStrip } from "@/components/home/IndustriesStrip";
import { TechMarquee } from "@/components/home/TechMarquee";
import { CTABanner } from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ServicesGrid />
      <ValueProps />
      <FeaturedCaseStudy />
      <IndustriesStrip />
      <TechMarquee />
      <CTABanner />
    </>
  );
}
