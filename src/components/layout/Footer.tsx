import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/data/nav";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Alpho builds scalable digital products and managed IT solutions
              that help businesses grow faster — from Laravel, Next.js, and
              NestJS development to LMS platforms, ecommerce, Ledgerly
              accounting software, cloud infrastructure, and 24/7 remote IT
              support.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-brand-light" />
                <a href="mailto:cruzconsultancy@gmail.com" className="hover:text-white">
                  cruzconsultancy@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-brand-light" />
                <a href="tel:+919790805532" className="hover:text-white">
                  +91 97908 05532
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-brand-light" />
                Remote-first, serving clients worldwide
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-5">
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-white/40">
                Services
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {footerNav.services.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/70 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-white/40">
                Company
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-white/70 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-white/40">
              Stay updated
            </h3>
            <p className="mt-4 text-sm text-white/60">
              Occasional notes on engineering, cloud, and product — no spam.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Alpho. All rights reserved.</p>
          <p>Built with Next.js.</p>
        </div>
      </Container>
    </footer>
  );
}
