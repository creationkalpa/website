import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Divider from "@/components/Divider";
import ProductCard from "@/components/ProductCard";
import { ButtonLink } from "@/components/Button";
import { getFeaturedLamps, lampImagePath, getLampBySlug } from "@/data/lamps";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const featured = getFeaturedLamps();
  const mushroomExample = getLampBySlug("aura-blue")!;
  const sculpturalExample = getLampBySlug("nimbus-white")!;

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[92vh] min-h-[640px] w-full items-end overflow-hidden">
        <Image
          src="/images/hero-ember.jpg"
          alt="Ember table lamp glowing warm amber light"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/15 to-charcoal/10" />

        <Container className="relative z-10 pb-20 pt-40 text-ivory">
          <Image
            src="/images/logo-mark.png"
            alt="Kalpa Creations monogram"
            width={64}
            height={82}
            className="mb-6 h-16 w-auto drop-shadow-lg"
          />
          <p className="font-label text-xs text-gold-pale">
            {siteConfig.categories.join(" · ")}
          </p>
          <h1 className="font-serif-display mt-5 max-w-2xl text-5xl leading-[1.08] sm:text-6xl">
            3D Printed.
            <br />
            Artfully Crafted.
          </h1>
          <p className="mt-6 max-w-lg text-sm leading-relaxed text-ivory/85 sm:text-base">
            Every piece begins as a single filament and is built upward, one
            fine layer at a time, until it holds light the way we intended.
            Kalpa Creations designs and 3D-prints original lamp forms —
            sculptural, organic, and quietly precise — for homes that notice
            detail.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href="/collection"
              variant="solid"
              className="border-gold bg-gold text-charcoal hover:border-ivory hover:bg-ivory"
            >
              View the Collection
            </ButtonLink>
            <ButtonLink
              href="/custom-orders"
              variant="outline"
              className="border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal"
              disabled
            >
              Start a Custom Order
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Category strip */}
      <section className="border-b border-gold-pale/60 bg-ivory">
        <Container className="grid grid-cols-2 divide-gold-pale/60 sm:grid-cols-4 sm:divide-x">
          {siteConfig.categories.map((category) => {
            const isLamps = category === "Lamps";
            const content = (
              <div className="flex flex-col items-center justify-center gap-1 px-4 py-8 text-center">
                <span className="font-serif-display text-lg text-charcoal">
                  {category}
                </span>
                <span className="font-label text-[0.6rem] text-gold-deep">
                  {isLamps ? "Shop Now" : "Coming Soon"}
                </span>
              </div>
            );
            return isLamps ? (
              <Link
                key={category}
                href="/collection"
                className="border-b border-gold-pale/60 transition-colors hover:bg-ivory-deep sm:border-b-0"
              >
                {content}
              </Link>
            ) : (
              <div
                key={category}
                className="border-b border-gold-pale/60 opacity-50 sm:border-b-0"
              >
                {content}
              </div>
            );
          })}
        </Container>
      </section>

      {/* Featured collection */}
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow>Featured Pieces</Eyebrow>
            <h2 className="font-serif-display mt-3 text-3xl text-charcoal sm:text-4xl">
              A few from the collection
            </h2>
            <Divider className="mt-6" />
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {featured.map((lamp) => (
              <ProductCard key={lamp.slug} lamp={lamp} />
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <ButtonLink href="/collection" variant="outline">
              View Full Collection
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Silhouette families */}
      <section className="bg-ivory-deep py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow>Two Silhouette Families</Eyebrow>
            <h2 className="font-serif-display mt-3 text-3xl text-charcoal sm:text-4xl">
              Every design belongs to a family
            </h2>
            <Divider className="mt-6" />
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {[
              {
                family: "Mushroom Silhouettes",
                copy: "Rounded caps and fluted bases — the classic Kalpa form, warm and familiar.",
                example: mushroomExample,
              },
              {
                family: "Sculptural Forms",
                copy: "Arches, clouds, and waves — organic silhouettes that read as sculpture first, light second.",
                example: sculpturalExample,
              },
            ].map(({ family, copy, example }) => (
              <Link
                key={family}
                href={`/collection?family=${encodeURIComponent(family)}`}
                className="group block"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={lampImagePath(example, example.images[0])}
                    alt={family}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif-display mt-5 text-2xl text-charcoal">
                  {family}
                </h3>
                <p className="mt-2 max-w-[45ch] text-sm leading-relaxed text-charcoal-soft">
                  {copy}
                </p>
                <span className="font-label mt-3 inline-block text-xs text-gold-deep group-hover:underline">
                  Explore {family}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Custom orders teaser */}
      <section className="bg-charcoal py-24 text-ivory">
        <Container className="mx-auto max-w-2xl text-center">
          <Eyebrow dark>Custom Orders</Eyebrow>
          <h2 className="font-serif-display mt-4 text-3xl leading-tight sm:text-4xl">
            Don&rsquo;t see the colour, size, or finish you want?
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-ivory/80 sm:text-base">
            Custom colours, sizes, and finishes are available on request.
            Send us a message for custom orders, bulk enquiries, or
            collaborations.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href="/custom-orders"
              variant="solid"
              className="border-gold bg-gold text-charcoal hover:border-ivory hover:bg-ivory"
              disabled
            >
              Start a Custom Order
            </ButtonLink>
            <ButtonLink
              href={siteConfig.instagramUrl}
              variant="outline"
              className="border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal"
            >
              Message @{siteConfig.instagramHandle}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
