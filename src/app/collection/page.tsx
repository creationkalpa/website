import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import CollectionGrid from "@/components/CollectionGrid";

export const metadata: Metadata = {
  title: "Collection",
  description:
    "Browse the full Kalpa Creations lamp collection — sculptural, 3D-printed table lamps made to order.",
};

export default function CollectionPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>The Collection</Eyebrow>
          <h1 className="font-serif-display mt-3 text-4xl text-charcoal sm:text-5xl">
            Lamps
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-charcoal-soft sm:text-base">
            Every piece is made to order. Custom colours, sizes, and finishes
            are available on request —{" "}
            <Link href="/custom-orders" className="text-gold-deep underline underline-offset-2">
              start a custom order
            </Link>
            .
          </p>
        </div>

        <div className="mt-14">
          <Suspense fallback={<CollectionGridFallback />}>
            <CollectionGrid />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

function CollectionGridFallback() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[4/5] bg-ivory-deep" />
          <div className="mt-4 h-3 w-1/3 bg-ivory-deep" />
          <div className="mt-2 h-4 w-2/3 bg-ivory-deep" />
        </div>
      ))}
    </div>
  );
}
