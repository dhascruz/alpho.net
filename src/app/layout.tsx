import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://alpho.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alpho | Enterprise Software Development & Managed IT Services",
    template: "%s | Alpho",
  },
  description:
    "Alpho builds scalable digital products and managed IT solutions that help businesses grow faster — Laravel, Next.js, and NestJS development, LMS platforms, ecommerce, Ledgerly accounting software, cloud infrastructure, and 24/7 remote IT support.",
  keywords: [
    "Laravel Development Company",
    "Next.js Development Services",
    "NestJS Development Company",
    "Full Stack Development Company",
    "LMS Development",
    "Ecommerce Development",
    "Cloud Infrastructure Management",
    "Managed IT Services",
    "Remote IT Support",
    "Accounting Software Development",
  ],
  openGraph: {
    title: "Alpho | Enterprise Software Development & Managed IT Services",
    description:
      "Custom software, cloud infrastructure, and managed IT services for startups, SMEs, and enterprises.",
    url: siteUrl,
    siteName: "Alpho",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpho | Enterprise Software Development & Managed IT Services",
    description:
      "Custom software, cloud infrastructure, and managed IT services for startups, SMEs, and enterprises.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Alpho",
  url: siteUrl,
  description:
    "Enterprise software development and managed IT services company specializing in Laravel, Next.js, NestJS, LMS, ecommerce, cloud infrastructure, and remote IT support.",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
