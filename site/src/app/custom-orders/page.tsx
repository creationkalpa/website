import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Divider from "@/components/Divider";
import CustomOrderForm from "@/components/CustomOrderForm";
import { lampImagePath, getLampBySlug } from "@/data/lamps";

export const metadata: Metadata = {
  title: "Custom Orders",
  description:
    "Custom colours, sizes, and finishes available on request. Start a custom order with Kalpa Creations.",
};

export default function CustomOrdersPage() {
  const example = getLampBySlug("shell-white")!;

  return (
    <div className="py-20">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Custom Orders</Eyebrow>
            <h1 className="font-serif-display mt-3 max-w-md text-4xl leading-tight text-charcoal sm:text-5xl">
              Don&rsquo;t see the colour, size, or finish you want?
            </h1>
            <Divider className="mt-8 justify-start" />
            <p className="mt-8 max-w-prose text-base leading-relaxed text-charcoal-soft">
              Every Kalpa Creations piece is made to order, which means the
              versions shown in the collection are only a starting point.
              Custom colours, sizes, and finishes are available on request —
              tell us what you have in mind and we&rsquo;ll let you know
              what&rsquo;s possible.
            </p>
            <p className="mt-4 max-w-prose text-base leading-relaxed text-charcoal-soft">
              We also welcome enquiries for bulk orders and collaborations.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={lampImagePath(example, example.images[0])}
              alt={`${example.name} — ${example.colour}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-2xl border-t border-gold-pale/60 pt-16">
          <h2 className="font-serif-display text-2xl text-charcoal">
            Tell us what you&rsquo;re after
          </h2>
          <div className="mt-8">
            <CustomOrderForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
