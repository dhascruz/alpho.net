export type PortfolioProject = {
  slug: string;
  title: string;
  industry: string;
  serviceSlug: string;
  serviceName: string;
  summary: string;
  technologies: string[];
};

/**
 * Illustrative project profiles representative of the type of work Alpho
 * delivers. These are not tied to named clients — see /portfolio for the
 * disclosure shown alongside this content.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "multi-vendor-ecommerce-platform",
    title: "Multi-Vendor Ecommerce Platform",
    industry: "Retail",
    serviceSlug: "ecommerce-development",
    serviceName: "Ecommerce Development",
    summary:
      "A headless storefront supporting hundreds of independent sellers, with vendor onboarding, split payments, and GST-compliant invoicing.",
    technologies: ["Next.js", "Laravel", "PostgreSQL", "Stripe Connect"],
  },
  {
    slug: "corporate-training-lms",
    title: "Corporate Training LMS",
    industry: "Education",
    serviceSlug: "lms",
    serviceName: "Learning Management System",
    summary:
      "A learning platform for a multi-location training provider with live classes, quiz-based certification, and attendance tracking.",
    technologies: ["Laravel", "Next.js", "WebRTC", "PostgreSQL"],
  },
  {
    slug: "clinic-management-system",
    title: "Clinic Management System",
    industry: "Healthcare",
    serviceSlug: "custom-software-development",
    serviceName: "Custom Software Development",
    summary:
      "Appointment scheduling, patient records, and billing for a multi-branch clinic network, replacing a paper-based workflow.",
    technologies: ["Laravel", "MySQL", "Docker"],
  },
  {
    slug: "logistics-fleet-dashboard",
    title: "Logistics Fleet Dashboard",
    industry: "Logistics",
    serviceSlug: "custom-software-development",
    serviceName: "Custom Software Development",
    summary:
      "Real-time fleet tracking, route planning, and delivery-proof capture for a regional logistics operator.",
    technologies: ["NestJS", "React", "PostgreSQL", "WebSockets"],
  },
  {
    slug: "b2b-saas-billing-platform",
    title: "B2B SaaS Billing Platform",
    industry: "SaaS",
    serviceSlug: "nestjs-development",
    serviceName: "NestJS Development",
    summary:
      "A multi-tenant subscription billing backend with usage-based pricing, invoicing, and a partner API.",
    technologies: ["NestJS", "PostgreSQL", "Redis", "Stripe"],
  },
  {
    slug: "gst-accounting-dashboard",
    title: "GST Accounting Dashboard",
    industry: "Accounting",
    serviceSlug: "ledgerly",
    serviceName: "Ledgerly Accounting Software",
    summary:
      "A Ledgerly deployment for a growing accounting practice, consolidating client books, GST filing, and payroll in one dashboard.",
    technologies: ["Laravel", "Next.js", "PostgreSQL"],
  },
  {
    slug: "cloud-migration-mid-market-retailer",
    title: "Cloud Migration for a Mid-Market Retailer",
    industry: "Retail",
    serviceSlug: "cloud-infrastructure",
    serviceName: "Cloud Infrastructure Management",
    summary:
      "Migration from on-premise servers to AWS with containerized deployments, CI/CD, and 24/7 monitoring.",
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    slug: "enterprise-hrms-rollout",
    title: "Enterprise HRMS Rollout",
    industry: "Enterprise",
    serviceSlug: "custom-software-development",
    serviceName: "Custom Software Development",
    summary:
      "A company-wide HR system covering onboarding, leave, payroll integration, and performance reviews across multiple regional offices.",
    technologies: ["Laravel", "Next.js", "MySQL"],
  },
];
