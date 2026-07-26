import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import EnquireActions from "@/components/EnquireActions";
import { ButtonLink } from "@/components/Button";
import {
  formatPrice,
  getAllLamps,
  getLampBySlug,
  getRelatedLamps,
  lampImagePath,
} from "@/data/lamps";

export function generateStaticParams() {
  return getAllLamps().map((lamp) => ({ slug: lamp.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lamp = getLampBySlug(slug);
  if (!lamp) return {};
  return {
    title: `${lamp.name} — ${lamp.colour}`,
    description: lamp.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lamp = getLampBySlug(slug);
  if (!lamp) notFound();

  const related = getRelatedLamps(lamp);
  const images = lamp.images.map((img) => lampImagePath(lamp, img));

  return (
    <div className="py-16">
      <Container>
        <nav className="font-label mb-10 text-[0.65rem] text-charcoal-soft">
          <Link href="/collection" className="hover:text-gold-deep">
            Collection
          </Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">
            {lamp.name} — {lamp.colour}
          </span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductGallery
            images={images}
            alt={`${lamp.name} — ${lamp.colour}`}
          />

          <div className="lg:pt-2">
            <Eyebrow>{lamp.productType}</Eyebrow>
            <h1 className="font-serif-display mt-3 text-4xl text-charcoal">
              {lamp.name}
            </h1>
            <p className="font-serif-display mt-1 text-xl italic text-charcoal-soft">
              {lamp.colour}
            </p>

            <p className="font-label mt-4 text-sm text-charcoal">
              {formatPrice(lamp.price)}
            </p>

            {!lamp.available && (
              <p className="font-label mt-4 inline-block bg-charcoal px-3 py-1 text-[0.65rem] text-ivory">
                Currently Sold Out
              </p>
            )}

            <p className="mt-6 max-w-prose text-base leading-relaxed text-charcoal-soft">
              {lamp.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {lamp.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-label border border-gold-pale px-3 py-1.5 text-[0.6rem] text-gold-deep"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 border-t border-gold-pale/60 pt-8">
              <p className="font-label mb-4 text-xs text-charcoal">
                Enquire About This Piece
              </p>
              <EnquireActions
                subject={`Enquiry: ${lamp.name} — ${lamp.colour}`}
                body={`Hi Kalpa Creations,\n\nI'd love to know more about the ${lamp.name} (${lamp.colour}).\n\n`}
              />
            </div>

            <div className="mt-6">
              <ButtonLink href="/collection" variant="ghost" className="px-0">
                ← View Full Collection
              </ButtonLink>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24 border-t border-gold-pale/60 pt-16">
            <Eyebrow>Available in Other Colours</Eyebrow>
            <h2 className="font-serif-display mt-3 text-3xl text-charcoal">
              More {lamp.name} colourways
            </h2>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-3">
              {related.map((r) => (
                <ProductCard key={r.slug} lamp={r} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
