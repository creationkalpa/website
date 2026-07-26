"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "@/components/Container";

const NAV_LINKS = [
  { href: "/collection", label: "Collection" },
  { href: "/custom-orders", label: "Custom Orders" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-pale/60 bg-ivory/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-mark.png"
            alt="Kalpa Creations monogram"
            width={36}
            height={46}
            className="h-10 w-auto"
            priority
          />
          <span className="font-serif-display text-xl leading-none text-charcoal">
            Kalpa
            <span className="ml-1.5 font-label align-middle text-[0.55rem] tracking-[0.18em] text-gold-deep">
              Creations
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-label text-xs transition-colors hover:text-gold-deep ${
                pathname === link.href ? "text-gold-deep" : "text-charcoal"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={`block h-px w-6 bg-charcoal transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-charcoal transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {open && (
        <div className="border-t border-gold-pale/60 bg-ivory md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-label py-3 text-xs text-charcoal hover:text-gold-deep"
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
