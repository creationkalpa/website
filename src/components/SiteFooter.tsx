import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site-config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-gold-pale/60 bg-ivory">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-serif-display text-lg text-charcoal">
            Kalpa Creations
          </p>
          <p className="font-label mt-2 text-[0.6rem] text-gold-deep">
            {siteConfig.tagline}
          </p>
          <p className="mt-4 max-w-[22ch] text-sm text-charcoal-soft">
            Made to order, one fine layer at a time.
          </p>
        </div>

        <div>
          <p className="font-label mb-4 text-xs text-charcoal">Explore</p>
          <ul className="space-y-2.5 text-sm text-charcoal-soft">
            <li>
              <Link href="/collection" className="hover:text-gold-deep">
                Collection
              </Link>
            </li>
            <li>
              <Link href="/custom-orders" className="hover:text-gold-deep">
                Custom Orders
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold-deep">
                About &amp; Process
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-deep">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-label mb-4 text-xs text-charcoal">Categories</p>
          <ul className="space-y-2.5 text-sm text-charcoal-soft">
            {siteConfig.categories.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-label mb-4 text-xs text-charcoal">Say Hello</p>
          <ul className="space-y-2.5 text-sm text-charcoal-soft">
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-deep"
              >
                @{siteConfig.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-gold-deep"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="pt-1 text-xs text-charcoal-soft/80">
              All pieces made to order.
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-gold-pale/60 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-center text-[0.65rem] text-charcoal-soft sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Kalpa Creations. All rights
            reserved.
          </p>
          <p className="font-label tracking-[0.2em]">
            3D PRINTING · PREMIUM LAMPS · FURNITURE &amp; MORE
          </p>
        </Container>
      </div>
    </footer>
  );
}
