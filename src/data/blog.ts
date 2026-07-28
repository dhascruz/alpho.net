export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "laravel-vs-nestjs-choosing-a-backend",
    title: "Laravel vs. NestJS: Choosing the Right Backend for Your Next Project",
    category: "Engineering",
    excerpt:
      "Both are mature, well-documented frameworks. The right choice depends less on the language and more on your team, your timeline, and how the system needs to grow.",
    date: "2026-06-02",
    readMinutes: 7,
    body: [
      "Laravel and NestJS solve similar problems with different philosophies. Laravel gives you a batteries-included ecosystem — auth, queues, ORM, scheduling — that lets a small team ship a full application quickly. NestJS gives you a strongly-typed, modular architecture that scales well across larger engineering teams and long-lived codebases.",
      "If you're building an admin-heavy internal tool, an ERP, or a CRM where speed of delivery and ecosystem maturity matter most, Laravel is usually the pragmatic choice. If you're building a multi-tenant SaaS product with a growing engineering team, or you need first-class TypeScript across the stack, NestJS tends to pay off over a longer horizon.",
      "In practice, we've shipped both stacks in production for the same class of problem. The deciding factor is rarely 'which framework is better' — it's which one your team can maintain confidently three years from now.",
    ],
  },
  {
    slug: "signs-youve-outgrown-spreadsheet-accounting",
    title: "5 Signs Your Business Has Outgrown Spreadsheet-Based Accounting",
    category: "Accounting & Finance",
    excerpt:
      "Spreadsheets work well until they don't. Here's how to tell when it's time to move to a proper accounting system before it costs you a compliance deadline.",
    date: "2026-05-18",
    readMinutes: 5,
    body: [
      "Spreadsheets are flexible, which is exactly why they become a liability as a business grows. The most common failure mode isn't a dramatic crash — it's a slow accumulation of manual reconciliation, version conflicts, and GST filings that take longer every quarter.",
      "Watch for these signals: multiple people editing the same ledger file, GST returns that require a full day of manual cross-checking, payroll calculated separately from your books, and no real-time view of cash position without someone compiling a report.",
      "A cloud accounting platform like Ledgerly consolidates accounts, sales, purchase, GST, banking, and payroll into one system with a shared source of truth — so compliance becomes a byproduct of daily work instead of a monthly fire drill.",
    ],
  },
  {
    slug: "cloud-migration-checklist-for-smes",
    title: "A Cloud Migration Checklist for SMEs Still Running On-Premise Servers",
    category: "Cloud & DevOps",
    excerpt:
      "Migrating off aging on-premise infrastructure is less about the cloud provider you pick and more about the sequencing — what moves first, and what has to be true before it does.",
    date: "2026-04-27",
    readMinutes: 6,
    body: [
      "Most failed cloud migrations aren't failures of the cloud provider — they're failures of sequencing. Moving a monolith and its database at the same time, with no rollback plan, is how a routine migration turns into a multi-day outage.",
      "Before migrating anything, document what's actually running: which services talk to which databases, what the backup story is today, and what your real recovery time objective is. Then migrate in order of lowest risk to highest — stateless services first, stateful services last, database migration as its own carefully rehearsed step.",
      "Once you're in the cloud, the job isn't done. Monitoring, automated backups, and a documented disaster recovery plan are what actually prevent the next outage from becoming a full day of downtime.",
    ],
  },
  {
    slug: "what-a-good-lms-rollout-requires",
    title: "What a Good LMS Rollout Actually Requires (Beyond the Software)",
    category: "Education Technology",
    excerpt:
      "The platform is the easy part. The rollouts that succeed are the ones that plan for teacher adoption and data migration from day one.",
    date: "2026-03-14",
    readMinutes: 5,
    body: [
      "It's tempting to treat an LMS rollout as a software procurement decision. In practice, the technical build is usually the smaller half of the project — the larger half is getting teachers and administrators to actually use it instead of falling back to spreadsheets and email.",
      "The rollouts that go well share a pattern: a single source of truth for student records from day one, a teacher dashboard simple enough to use without training, and a phased rollout by location or cohort rather than a single big-bang launch.",
      "Attendance, quiz results, and certificates should live in the same system, not bolt-on tools — otherwise you've just moved the fragmentation problem from spreadsheets into disconnected software.",
    ],
  },
  {
    slug: "api-first-architecture-for-multi-tenant-saas",
    title: "Designing API-First Architecture for Multi-Tenant SaaS",
    category: "Engineering",
    excerpt:
      "Multi-tenancy decisions made in week one of a SaaS product are expensive to undo in year two. Here's what to get right early.",
    date: "2026-02-09",
    readMinutes: 8,
    body: [
      "The core decision in any multi-tenant SaaS backend is how tenant isolation is enforced — at the database level (separate schemas or databases per tenant) or at the application level (a shared schema with tenant scoping on every query). Both are valid; the wrong choice is picking one without understanding your compliance and scale requirements.",
      "An API-first approach — building the backend as a versioned API from day one, even before a public API is on the roadmap — pays off because it forces clean separation between business logic and presentation. It also means your web app, mobile app, and any future partner integrations consume the same contract.",
      "Authentication and authorization deserve the same early rigor: role-based access control and tenant-scoped permissions are far easier to design in from the start than to retrofit once customer data from different tenants is already commingled in application code.",
    ],
  },
];
