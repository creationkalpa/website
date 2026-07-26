import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Divider from "@/components/Divider";
import CustomOrderForm from "@/components/CustomOrderForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kalpa Creations via Instagram or email for enquiries, custom orders, and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="font-serif-display mt-3 text-4xl text-charcoal sm:text-5xl">
            Say Hello
          </h1>
          <Divider className="mt-8" />
          <p className="mt-8 text-base leading-relaxed text-charcoal-soft">
            The fastest way to reach us is Instagram. For anything longer —
            enquiries, custom orders, or collaborations — email works too.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-gold-deep hover:underline"
            >
              @{siteConfig.instagramHandle}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-charcoal-soft hover:text-gold-deep"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-2xl border-t border-gold-pale/60 pt-16">
          <h2 className="font-serif-display text-2xl text-charcoal">
            Or send a message directly
          </h2>
          <div className="mt-8">
            <CustomOrderForm general />
          </div>
        </div>
      </Container>
    </div>
  );
}
