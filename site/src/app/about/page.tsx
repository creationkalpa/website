import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Divider from "@/components/Divider";
import { ButtonLink } from "@/components/Button";
import { lampImagePath, getLampBySlug } from "@/data/lamps";

export const metadata: Metadata = {
  title: "About & Our Process",
  description:
    "The story behind Kalpa Creations and how each 3D-printed lamp is designed and made, layer by layer.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Design",
    copy: "Every silhouette starts as a 3D model — we sketch the curves, ribbing, and proportions digitally before a single layer is printed.",
  },
  {
    step: "02",
    title: "Print",
    copy: "A printer builds each piece from the base up, tracing the design one fine layer of filament at a time until the form is complete.",
  },
  {
    step: "03",
    title: "Finish",
    copy: "Every piece is cleaned, checked, and fitted with its wiring and fittings by hand before it's ready to leave the studio.",
  },
  {
    step: "04",
    title: "Ship",
    copy: "Because each order is printed to spec, we make your piece after you order it — in your chosen colour, size, and finish.",
  },
];

export default function AboutPage() {
  const hero = getLampBySlug("nimbus-white")!;

  return (
    <div className="py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>About Kalpa Creations</Eyebrow>
          <h1 className="font-serif-display mt-3 text-4xl text-charcoal sm:text-5xl">
            Light, printed layer by layer.
          </h1>
          <Divider className="mt-8" />
          <p className="mt-8 text-base leading-relaxed text-charcoal-soft">
            Every piece in this collection begins as a single filament and is
            built upward, one fine layer at a time, until it holds light the
            way we intended. Kalpa Creations designs and 3D-prints original
            lamp forms — sculptural, organic, and quietly precise — for homes
            that notice detail.
          </p>
          <p className="mt-5 text-base leading-relaxed text-charcoal-soft">
            Our collection is grouped by silhouette family, and where a
            design is offered in more than one colourway, that variant
            carries its own name alongside it. All pieces are made to order,
            and custom colours, sizes, and finishes are available on request.
          </p>
        </div>

        <div className="relative mt-16 aspect-[16/9] w-full overflow-hidden">
          <Image
            src={lampImagePath(hero, hero.images[0])}
            alt="Nimbus table lamp"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Container>

      <div className="mt-24 bg-ivory-deep py-24">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <Eyebrow>How It&rsquo;s Made</Eyebrow>
            <h2 className="font-serif-display mt-3 text-3xl text-charcoal sm:text-4xl">
              Our process
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-charcoal-soft">
              No moulds, no mass production — just a printer, a spool of
              filament, and a design built to hold light beautifully.
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step}>
                <p className="font-serif-display text-3xl text-gold-deep">
                  {s.step}
                </p>
                <h3 className="font-serif-display mt-2 text-xl text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                  {s.copy}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <div className="mx-auto mt-24 max-w-xl text-center">
          <h2 className="font-serif-display text-3xl text-charcoal">
            Have a piece in mind?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
            Every lamp can be made in a colour, size, or finish beyond what
            you see in the collection.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/custom-orders" variant="solid">
              Start a Custom Order
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
