import {
  Rocket,
  Building2,
  School,
  Store,
  Landmark,
  Receipt,
  Server,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  need: string;
  description: string;
  icon: LucideIcon;
  relatedServiceSlugs: string[];
};

export const industries: Industry[] = [
  {
    slug: "startups",
    name: "Startups",
    need: "MVP development",
    description:
      "Ship a production-ready MVP fast, on a stack that can carry you from first users to Series A without a rewrite.",
    icon: Rocket,
    relatedServiceSlugs: ["full-stack-development", "nextjs-development", "custom-software-development"],
  },
  {
    slug: "smes",
    name: "SMEs",
    need: "ERP, CRM, HRMS, Ecommerce",
    description:
      "Replace spreadsheets and disconnected tools with a system built around how your team actually works.",
    icon: Building2,
    relatedServiceSlugs: ["custom-software-development", "laravel-development", "ecommerce-development"],
  },
  {
    slug: "educational-institutions",
    name: "Educational Institutions",
    need: "Learning Management Systems",
    description:
      "Give schools, colleges, and training institutes a single platform for classes, assessment, and student records.",
    icon: School,
    relatedServiceSlugs: ["lms", "theme-design-customization"],
  },
  {
    slug: "retail-businesses",
    name: "Retail Businesses",
    need: "Ecommerce",
    description:
      "Sell online without sacrificing inventory accuracy, GST compliance, or checkout speed.",
    icon: Store,
    relatedServiceSlugs: ["ecommerce-development", "theme-design-customization"],
  },
  {
    slug: "enterprises",
    name: "Enterprises",
    need: "Digital transformation",
    description:
      "Modernize legacy systems and workflows with software built for scale, security, and long-term ownership.",
    icon: Landmark,
    relatedServiceSlugs: ["custom-software-development", "full-stack-development", "cloud-infrastructure"],
  },
  {
    slug: "accounting-firms",
    name: "Accounting Firms",
    need: "Ledgerly accounting software",
    description:
      "Manage accounts, GST, payroll, and reporting for every client from one cloud dashboard.",
    icon: Receipt,
    relatedServiceSlugs: ["ledgerly"],
  },
  {
    slug: "it-teams",
    name: "IT Teams",
    need: "Cloud infrastructure management",
    description:
      "Offload migration, DevOps, monitoring, and disaster recovery to a team that lives in AWS, Azure, and GCP.",
    icon: Server,
    relatedServiceSlugs: ["cloud-infrastructure"],
  },
  {
    slug: "no-it-department",
    name: "Companies Without an IT Department",
    need: "Remote IT support",
    description:
      "Get help desk, monitoring, and endpoint protection without hiring a full-time IT team.",
    icon: LifeBuoy,
    relatedServiceSlugs: ["remote-it-support"],
  },
];
