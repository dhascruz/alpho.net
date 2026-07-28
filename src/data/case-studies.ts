export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  serviceSlug: string;
  serviceName: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
};

/**
 * Representative, illustrative engagement scenarios that describe the type
 * of work Alpho does and how we approach it — not case studies of named
 * clients. See /case-studies for the disclosure shown alongside this content.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-vendor-marketplace",
    title: "Scaling a Retail Marketplace to Hundreds of Vendors",
    industry: "Retail & Ecommerce",
    serviceSlug: "ecommerce-development",
    serviceName: "Ecommerce Development",
    summary:
      "A regional retail marketplace needed to onboard independent sellers without turning support and payouts into a manual bottleneck.",
    challenge:
      "The existing storefront had no concept of multiple vendors — every product, payout, and invoice had to be handled manually by a small ops team, which capped how many sellers the business could realistically onboard.",
    solution:
      "We rebuilt the storefront as a headless Next.js frontend over a Laravel commerce backend, adding vendor onboarding, split payments, per-vendor inventory, and automated GST-compliant invoicing.",
    outcome:
      "Vendor onboarding moved from a manual, support-heavy process to a self-serve flow, and payout reconciliation that used to take the ops team most of a week now runs automatically.",
    technologies: ["Next.js", "Laravel", "PostgreSQL", "Stripe Connect"],
  },
  {
    slug: "corporate-training-lms",
    title: "One Platform for a Multi-Location Training Provider",
    industry: "Education",
    serviceSlug: "lms",
    serviceName: "Learning Management System",
    summary:
      "A training provider ran live classes and assessments across five locations using a mix of spreadsheets, video call links, and email.",
    challenge:
      "Attendance, quiz results, and certification records lived in different spreadsheets per location, making it hard to report on outcomes or guarantee consistent delivery across branches.",
    solution:
      "We built a single LMS with a teacher dashboard, live class scheduling, an in-platform quiz engine, automated certificate generation, and centralized attendance and reporting.",
    outcome:
      "All five locations now run on one platform, with certification and attendance reporting available instantly instead of being compiled by hand at the end of each term.",
    technologies: ["Laravel", "Next.js", "WebRTC", "PostgreSQL"],
  },
  {
    slug: "cloud-migration-mid-market-retailer",
    title: "Moving Off Aging On-Premise Servers",
    industry: "Retail",
    serviceSlug: "cloud-infrastructure",
    serviceName: "Cloud Infrastructure Management",
    summary:
      "A mid-market retailer's inventory and POS systems ran on aging on-premise servers with no automated backups or monitoring.",
    challenge:
      "Unplanned downtime during a hardware failure had previously taken systems offline for a full business day, with no automated disaster recovery in place.",
    solution:
      "We migrated the retailer's systems to containerized deployments on AWS, added CI/CD pipelines for safer releases, and set up 24/7 monitoring with automated backups and a documented disaster recovery plan.",
    outcome:
      "Deployments that used to require a maintenance window now ship with zero downtime, and the business has a tested recovery plan instead of an unverified backup tape.",
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    slug: "enterprise-hrms-rollout",
    title: "Replacing Spreadsheet-Based HR Across Regional Offices",
    industry: "Enterprise",
    serviceSlug: "custom-software-development",
    serviceName: "Custom Software Development",
    summary:
      "A growing enterprise managed onboarding, leave, and performance reviews through shared spreadsheets across several regional offices.",
    challenge:
      "HR data was fragmented by office, leave approvals happened over email, and there was no single source of truth for headcount or performance review status.",
    solution:
      "We delivered a company-wide HRMS covering onboarding workflows, leave management, payroll-system integration, and performance review tracking, rolled out region by region.",
    outcome:
      "HR now works from one system across every office, with leave approvals and review cycles tracked in-platform instead of over email threads.",
    technologies: ["Laravel", "Next.js", "MySQL"],
  },
];
