import {
  Blocks,
  Boxes,
  GraduationCap,
  Puzzle,
  Palette,
  ArrowUpCircle,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export type ProductLine = {
  slug: string;
  name: string;
  href: string;
  summary: string;
  icon: LucideIcon;
  highlights: string[];
};

export const productLines: ProductLine[] = [
  {
    slug: "odoo-plugins",
    name: "Odoo Plugins",
    href: "/contact",
    summary:
      "Custom Odoo modules and integrations that extend Odoo to fit the way your business actually works.",
    icon: Blocks,
    highlights: ["Custom module development", "Third-party integrations", "Odoo version upgrades"],
  },
  {
    slug: "erp",
    name: "ERP",
    href: "/contact",
    summary:
      "ERP implementation and tailoring for finance, inventory, sales, purchasing, and operations.",
    icon: Boxes,
    highlights: ["Requirements & workflow mapping", "Data migration", "Training & rollout"],
  },
  {
    slug: "moodle",
    name: "Moodle",
    href: "/products/moodle",
    summary:
      "Everything for your Moodle LMS: plugin development, theme development, upgrades, and implementation support.",
    icon: GraduationCap,
    highlights: ["Plugin development", "Theme development", "Upgrades & implementation support"],
  },
];

export type MoodleOffering = {
  name: string;
  summary: string;
  icon: LucideIcon;
  href?: string;
  points: string[];
};

export const moodleOfferings: MoodleOffering[] = [
  {
    name: "Plugin Development",
    summary:
      "Custom Moodle plugins built to Moodle coding standards: activity modules, blocks, local plugins, reports, and integrations.",
    icon: Puzzle,
    points: [
      "Activity, block, local, and report plugins",
      "Integrations with external systems and APIs",
      "Privacy API, backup/restore, and Behat/PHPUnit support",
      "Fixes and compatibility updates for existing plugins",
    ],
  },
  {
    name: "Theme Development",
    summary:
      "Responsive, brandable Moodle themes that give learners a clean, modern experience on every device.",
    icon: Palette,
    href: "/products/moodle/theme-development",
    points: [
      "Custom child and standalone themes",
      "Branding, layout, and accessibility improvements",
      "Mobile-first responsive design",
      "Ready-made themes such as Tresa",
    ],
  },
  {
    name: "Upgrading To the Latest Moodle",
    summary:
      "Safe, planned upgrades to the current Moodle release with minimal downtime and no lost data.",
    icon: ArrowUpCircle,
    points: [
      "Pre-upgrade audit of plugins, themes, and customizations",
      "Staging-first upgrade with full backups",
      "Plugin and theme compatibility fixes",
      "Post-upgrade testing and rollback plan",
    ],
  },
  {
    name: "Implementation Support",
    summary:
      "Hands-on help getting Moodle live and working well: hosting, configuration, migration, and training.",
    icon: LifeBuoy,
    points: [
      "Installation, hosting, and performance tuning",
      "Course, user, and data migration",
      "Roles, authentication (SSO), and plugin configuration",
      "Admin and teacher training, ongoing support",
    ],
  },
];

export const productsMenu = [
  { label: "All Products", href: "/products" },
  { label: "Odoo Plugins", href: "/products" },
  { label: "ERP", href: "/products" },
  { label: "Moodle", href: "/products/moodle" },
  { label: "Moodle Theme Development", href: "/products/moodle/theme-development" },
  { label: "Tresa Moodle Theme", href: "/products/moodle/tresa" },
];
