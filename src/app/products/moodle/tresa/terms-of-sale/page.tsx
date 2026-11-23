import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms of Sale – Tresa Moodle Theme",
  description:
    "Terms of Sale for the Tresa Moodle Theme: pricing, delivery, licensing, refunds, updates and support.",
  alternates: { canonical: "/products/moodle/tresa/terms-of-sale" },
};

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. Introduction",
    body: (
      <>
        <p>
          Welcome to Tresa Moodle Theme. These Terms of Sale govern the purchase and use of the Tresa
          Moodle Theme, a modern and customizable theme designed for Moodle Learning Management
          Systems (LMS).
        </p>
        <p>By purchasing Tresa, you agree to the terms and conditions outlined below.</p>
      </>
    ),
  },
  {
    title: "2. Product Description",
    body: (
      <>
        <p>
          Tresa is a Moodle theme designed to provide an attractive, responsive, and user-friendly
          learning environment. It helps educational institutions, trainers, and organizations create
          an engaging online learning experience.
        </p>
        <p>
          The product includes the Tresa Moodle Theme and the features described in its official
          product listing.
        </p>
      </>
    ),
  },
  {
    title: "3. Pricing and Payment",
    body: (
      <>
        <ul>
          <li>Product: Tresa Moodle Theme</li>
          <li>Price: $30 USD</li>
          <li>Payment Type: One-time payment</li>
          <li>Recurring Charges: None</li>
        </ul>
        <p>
          All payments must be completed through the payment methods provided at checkout. Applicable
          taxes may be added depending on the customer&apos;s location and legal requirements.
        </p>
      </>
    ),
  },
  {
    title: "4. Product Delivery",
    body: (
      <>
        <p>
          After successful payment, customers will receive access to the purchased theme through the
          delivery method specified at checkout or on the Moodle Marketplace listing.
        </p>
        <p>
          Customers are responsible for ensuring that their Moodle installation meets the
          theme&apos;s technical requirements.
        </p>
      </>
    ),
  },
  {
    title: "5. License and Usage",
    body: (
      <>
        <p>
          The Tresa Moodle Theme is provided under the license terms specified in its product
          listing.
        </p>
        <p>
          Customers must comply with the applicable license conditions. Redistribution, resale,
          unauthorized sharing, or modification beyond the permissions granted by the license is not
          permitted.
        </p>
      </>
    ),
  },
  {
    title: "6. Refund Policy",
    body: (
      <>
        <p>If you experience a problem with your purchase, please contact our support team.</p>
        <p>
          Refund requests will be reviewed in accordance with applicable consumer protection laws and
          the refund conditions stated at the time of purchase.
        </p>
        <p>Nothing in this policy limits any rights that cannot legally be excluded.</p>
      </>
    ),
  },
  {
    title: "7. Updates and Support",
    body: (
      <>
        <p>
          Product updates, compatibility improvements, and technical support will be provided
          according to the conditions stated in the product listing.
        </p>
        <p>
          Customers should use a compatible Moodle version and follow the installation instructions.
        </p>
      </>
    ),
  },
  {
    title: "8. Compatibility and Customer Responsibilities",
    body: (
      <>
        <p>Customers are responsible for:</p>
        <ul>
          <li>Maintaining a supported Moodle installation.</li>
          <li>Backing up their Moodle website before installing or updating the theme.</li>
          <li>Ensuring compatibility with their existing Moodle plugins and customizations.</li>
          <li>Using the theme in accordance with its license.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Limitation of Liability",
    body: (
      <>
        <p>
          We make reasonable efforts to ensure that Tresa works as described. However, we cannot
          guarantee uninterrupted operation or compatibility with every third-party plugin,
          customization, or hosting environment.
        </p>
        <p>
          To the extent permitted by applicable law, we are not responsible for indirect or
          consequential losses arising from the use of the product.
        </p>
      </>
    ),
  },
  {
    title: "10. Changes to These Terms",
    body: (
      <p>
        We reserve the right to update these Terms of Sale when necessary. Updated terms will be
        published on this page with a revised effective date.
      </p>
    ),
  },
  {
    title: "11. Contact Information",
    body: (
      <>
        <p>For questions about purchases, licensing, or technical support, please contact:</p>
        <ul>
          <li>Product: Tresa Moodle Theme</li>
          <li>Developer / Seller: Alpho</li>
          <li>
            Email: <a href="mailto:cruzconsultancy@gmail.com">cruzconsultancy@gmail.com</a>
          </li>
          <li>
            Website: <a href="https://alpho.net">https://alpho.net</a>
          </li>
        </ul>
        <p>
          By purchasing Tresa Moodle Theme, you acknowledge that you have read and agreed to these
          Terms of Sale.
        </p>
      </>
    ),
  },
];

export default function TresaTermsOfSalePage() {
  return (
    <>
      <PageHero
        eyebrow="Products · Moodle · Tresa"
        title="Terms of Sale – Tresa Moodle Theme"
        description="Effective Date: November 23, 2026"
      />
      <Section tone="light">
        <Container className="max-w-3xl">
          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
                <div className="mt-3 space-y-3 leading-relaxed text-muted [&_a]:text-brand [&_a]:underline [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
