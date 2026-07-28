import {
  Code2,
  Layers,
  Flame,
  Triangle,
  Hexagon,
  GraduationCap,
  ShoppingCart,
  Calculator,
  Cloud,
  Headset,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  heroDescription: string;
  icon: LucideIcon;
  features: string[];
  technologies: string[];
  whoItsFor: string[];
  seoTitle: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    shortName: "Custom Software",
    tagline: "Enterprise applications built around how your business actually runs.",
    summary:
      "Bespoke enterprise applications, business automation, and industry-specific systems designed around your workflows, not the other way around.",
    heroDescription:
      "We design and build enterprise applications, ERP, CRM, HRMS, inventory, healthcare, and logistics software that automate manual work and scale with your business — using a modern, maintainable stack instead of legacy platforms that lock you in.",
    icon: Code2,
    features: [
      "Enterprise applications",
      "Business process automation",
      "ERP systems",
      "CRM platforms",
      "HRMS",
      "Inventory management systems",
      "Healthcare systems",
      "Logistics software",
    ],
    technologies: ["Laravel", "NestJS", "Next.js", "React", "Vue", "PostgreSQL", "MySQL", "Docker"],
    whoItsFor: ["SMEs replacing spreadsheets or legacy tools", "Enterprises automating manual processes", "Teams needing an industry-specific system"],
    seoTitle: "Custom Software Development Company",
    seoDescription:
      "Alpho designs and builds custom enterprise software — ERP, CRM, HRMS, inventory, healthcare, and logistics systems — tailored to your business processes.",
  },
  {
    slug: "full-stack-development",
    name: "Full Stack Development",
    shortName: "Full Stack",
    tagline: "One team, front to back, database to deployment.",
    summary:
      "End-to-end product teams covering frontend, backend, database design, and deployment — a single accountable partner instead of stitching together contractors.",
    heroDescription:
      "From Next.js and React interfaces to Laravel and NestJS APIs, PostgreSQL and MongoDB data layers, and AWS or Azure deployment — we own the full stack so nothing falls through the cracks between teams.",
    icon: Layers,
    features: [
      "Product architecture & technical strategy",
      "Frontend application development",
      "Backend API development",
      "Database design & optimization",
      "CI/CD & cloud deployment",
      "Ongoing maintenance & support",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Laravel",
      "NestJS",
      "Node.js",
      "REST API",
      "GraphQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Azure",
      "DigitalOcean",
      "Docker",
    ],
    whoItsFor: ["Startups building an MVP", "SMEs needing one accountable dev partner", "Enterprises replacing fragmented vendor teams"],
    seoTitle: "Full Stack Development Company",
    seoDescription:
      "End-to-end full stack development with Next.js, React, Laravel, NestJS, and modern cloud deployment — one team across your entire product.",
  },
  {
    slug: "laravel-development",
    name: "Laravel Development",
    shortName: "Laravel",
    tagline: "Robust PHP backends for SaaS, dashboards, and enterprise systems.",
    summary:
      "Custom web applications, SaaS platforms, admin dashboards, CRM/ERP systems, and APIs built on Laravel's mature, battle-tested ecosystem.",
    heroDescription:
      "Our Laravel team builds custom web applications, multi-tenant SaaS products, admin dashboards, CRM and ERP systems, secure payment integrations, queue-driven background processing, and Laravel microservices for teams that need reliability at scale.",
    icon: Flame,
    features: [
      "Custom web applications",
      "SaaS platforms",
      "Admin dashboards",
      "CRM & ERP systems",
      "API development",
      "Payment integration",
      "Queue systems",
      "Microservices",
    ],
    technologies: ["Laravel 12", "PHP", "MySQL", "PostgreSQL", "Redis", "Docker", "Sanctum"],
    whoItsFor: ["SMEs needing a dependable admin/back-office system", "SaaS founders", "Teams migrating off legacy PHP"],
    seoTitle: "Laravel Development Company",
    seoDescription:
      "Alpho is a Laravel development company building custom SaaS, admin dashboards, CRM/ERP systems, APIs, and payment integrations on Laravel 12.",
  },
  {
    slug: "nextjs-development",
    name: "Next.js Development",
    shortName: "Next.js",
    tagline: "Fast, SEO-ready frontends and dashboards that convert.",
    summary:
      "SEO-optimized marketing sites, enterprise dashboards, ecommerce storefronts, and SaaS frontends built on Next.js 15 for speed and search visibility.",
    heroDescription:
      "We build SEO-first websites, enterprise dashboards, ecommerce experiences, landing pages, SaaS frontends, progressive web apps, and static sites on Next.js — engineered for Core Web Vitals, not just visual polish.",
    icon: Triangle,
    features: [
      "SEO-optimized websites",
      "Enterprise dashboards",
      "Ecommerce frontends",
      "High-conversion landing pages",
      "SaaS frontend applications",
      "Progressive web apps",
      "Static websites",
    ],
    technologies: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Vercel", "GraphQL"],
    whoItsFor: ["Marketing teams needing SEO performance", "SaaS products needing a fast frontend", "Enterprises modernizing dashboards"],
    seoTitle: "Next.js Development Services",
    seoDescription:
      "Next.js development services for SEO-optimized websites, enterprise dashboards, ecommerce, and SaaS frontends — built for speed and Core Web Vitals.",
  },
  {
    slug: "nestjs-development",
    name: "NestJS Development",
    shortName: "NestJS",
    tagline: "Structured, testable backends for serious APIs.",
    summary:
      "Type-safe REST and GraphQL APIs, authentication, multi-tenant SaaS backends, and real-time systems built on NestJS's opinionated architecture.",
    heroDescription:
      "For teams that have outgrown a loosely structured Node backend, our NestJS team builds REST APIs, authentication and authorization, multi-tenant SaaS backends, GraphQL APIs, WebSocket-based real-time features, microservices, and enterprise-grade backend systems.",
    icon: Hexagon,
    features: [
      "REST APIs",
      "Authentication & authorization",
      "Multi-tenant SaaS backends",
      "GraphQL APIs",
      "WebSockets & real-time features",
      "Microservices",
      "Enterprise backend systems",
    ],
    technologies: ["NestJS", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "Docker", "JWT"],
    whoItsFor: ["SaaS platforms scaling their backend", "Enterprises needing a structured API layer", "Teams adopting microservices"],
    seoTitle: "NestJS Development Company",
    seoDescription:
      "NestJS development for REST and GraphQL APIs, multi-tenant SaaS backends, authentication, and microservices — structured, type-safe, and testable.",
  },
  {
    slug: "lms",
    name: "Learning Management System (LMS)",
    shortName: "LMS",
    tagline: "Purpose-built LMS platforms for schools, colleges, and corporate training.",
    summary:
      "Student portals, teacher dashboards, live classes, quizzes, certificates, and payments — LMS platforms built for schools, colleges, training institutes, and corporate L&D.",
    heroDescription:
      "We build learning management systems for schools, colleges, training institutes, and corporate training teams — with student portals, teacher dashboards, live classes, a quiz engine, assignments, certificates, attendance tracking, payment gateways, mobile apps, and reporting.",
    icon: GraduationCap,
    features: [
      "Student portal",
      "Teacher dashboard",
      "Live classes",
      "Quiz engine",
      "Assignments",
      "Certificates",
      "Attendance tracking",
      "Payment gateway",
      "Mobile app",
      "Reports & analytics",
    ],
    technologies: ["Laravel", "Next.js", "PostgreSQL", "WebRTC", "Redis"],
    whoItsFor: ["Schools & colleges", "Training institutes", "Corporate training teams"],
    seoTitle: "LMS Development Company",
    seoDescription:
      "Custom LMS development for schools, colleges, training institutes, and corporate training — student portals, live classes, quizzes, and certification.",
  },
  {
    slug: "ecommerce-development",
    name: "Ecommerce Development",
    shortName: "Ecommerce",
    tagline: "Storefronts and marketplaces that handle real order volume.",
    summary:
      "Product catalogs, payments, inventory, multi-vendor marketplaces, and GST-ready invoicing across Laravel commerce, Shopify, WooCommerce, or fully headless builds.",
    heroDescription:
      "Whether you need a Laravel-powered storefront, a Shopify or WooCommerce build, or a fully headless commerce architecture, we deliver product management, payment gateways, inventory, coupons, analytics, multi-vendor marketplaces, shipping integrations, GST invoicing, and mobile-responsive experiences.",
    icon: ShoppingCart,
    features: [
      "Product management",
      "Payment gateway integration",
      "Inventory management",
      "Coupons & promotions",
      "Analytics & reporting",
      "Multi-vendor marketplaces",
      "Shipping integrations",
      "GST invoicing",
      "Mobile-responsive storefronts",
    ],
    technologies: ["Laravel Commerce", "Shopify", "WooCommerce", "Next.js", "Headless CMS"],
    whoItsFor: ["Retail businesses", "Multi-vendor marketplace operators", "Brands outgrowing an off-the-shelf storefront"],
    seoTitle: "Ecommerce Development Company",
    seoDescription:
      "Ecommerce development across Laravel Commerce, Shopify, WooCommerce, and headless commerce — payments, inventory, multi-vendor, and GST invoicing.",
  },
  {
    slug: "ledgerly",
    name: "Ledgerly Accounting Software",
    shortName: "Ledgerly",
    tagline: "Cloud accounting built for growing SMEs.",
    summary:
      "Ledgerly is Alpho's cloud accounting software for SMEs — accounts, sales, purchase, GST, banking, payroll, inventory, and reporting in one dashboard.",
    heroDescription:
      "Ledgerly brings accounts, sales, purchase, GST compliance, banking reconciliation, payroll, inventory, and reporting together in a single cloud dashboard built for SMEs — with CRM, HR, POS, and manufacturing modules on the roadmap.",
    icon: Calculator,
    features: [
      "Accounts",
      "Sales",
      "Purchase",
      "GST compliance",
      "Banking reconciliation",
      "Payroll",
      "Inventory",
      "Reports",
      "Dashboard",
    ],
    technologies: ["Laravel", "Next.js", "PostgreSQL", "Redis"],
    whoItsFor: ["Accounting firms", "SMEs managing GST compliance", "Businesses replacing spreadsheet-based bookkeeping"],
    seoTitle: "Accounting Software Development",
    seoDescription:
      "Ledgerly is a cloud accounting platform for SMEs covering accounts, sales, purchase, GST, banking, payroll, inventory, and reporting.",
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud Infrastructure Management",
    shortName: "Cloud Infrastructure",
    tagline: "Migration, DevOps, and monitoring across every major cloud.",
    summary:
      "Cloud migration, DevOps, Kubernetes and Docker, CI/CD pipelines, monitoring, security, backup, and disaster recovery across AWS, Azure, GCP, DigitalOcean, and Oracle Cloud.",
    heroDescription:
      "We manage cloud migration, DevOps practice, container orchestration with Kubernetes and Docker, CI/CD pipelines, monitoring, security hardening, backup strategy, and disaster recovery across AWS, Azure, Google Cloud, DigitalOcean, and Oracle Cloud.",
    icon: Cloud,
    features: [
      "Cloud migration",
      "DevOps",
      "Kubernetes",
      "Docker",
      "CI/CD pipelines",
      "Monitoring & alerting",
      "Security hardening",
      "Backup strategy",
      "Disaster recovery",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Oracle Cloud", "Kubernetes", "Docker", "GitHub Actions"],
    whoItsFor: ["IT teams scaling infrastructure", "Companies migrating off on-prem servers", "Products needing 24/7 uptime"],
    seoTitle: "Cloud Infrastructure Management",
    seoDescription:
      "Cloud infrastructure management across AWS, Azure, GCP, and DigitalOcean — migration, DevOps, Kubernetes, CI/CD, monitoring, and disaster recovery.",
  },
  {
    slug: "remote-it-support",
    name: "Remote IT Support",
    shortName: "Remote IT Support",
    tagline: "A managed IT team for companies without one.",
    summary:
      "Business, Enterprise, and 24/7 support plans covering help desk, server monitoring, endpoint protection, and Microsoft 365 / Google Workspace administration.",
    heroDescription:
      "For companies without an in-house IT department, we provide Business, Enterprise, and 24/7 remote IT support plans — help desk, Windows and Linux support, server monitoring, email support, security updates, VPN, Office 365 and Google Workspace administration, antivirus, and endpoint protection.",
    icon: Headset,
    features: [
      "Help desk",
      "Windows support",
      "Linux support",
      "Server monitoring",
      "Email support",
      "Security updates",
      "VPN management",
      "Office 365 administration",
      "Google Workspace administration",
      "Antivirus & endpoint protection",
    ],
    technologies: ["Windows Server", "Linux", "Microsoft 365", "Google Workspace", "VPN", "Endpoint Protection"],
    whoItsFor: ["Companies without an IT department", "Remote-first teams", "SMEs needing predictable IT costs"],
    seoTitle: "Remote IT Support Services",
    seoDescription:
      "Managed remote IT support plans — help desk, server monitoring, Office 365 and Google Workspace administration, and endpoint protection.",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
