import Image from "next/image";
import Link from "next/link";
import type { Lamp } from "@/data/lamps";
import { formatPrice, lampImagePath } from "@/data/lamps";

export default function ProductCard({ lamp }: { lamp: Lamp }) {
  const [primary, secondary] = lamp.images;

  return (
    <Link href={`/collection/${lamp.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-ivory-deep">
        <Image
          src={lampImagePath(lamp, primary)}
          alt={`${lamp.name} — ${lamp.colour}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className={`object-cover transition-opacity duration-500 ${
            secondary ? "group-hover:opacity-0" : ""
          }`}
        />
        {secondary && (
          <Image
            src={lampImagePath(lamp, secondary)}
            alt={`${lamp.name} — ${lamp.colour}, alternate view`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}
        {!lamp.available && (
          <span className="font-label absolute left-3 top-3 bg-charcoal/85 px-2.5 py-1 text-[0.6rem] text-ivory">
            Sold Out
          </span>
        )}
      </div>

      <div className="mt-4">
        <p className="font-label text-[0.65rem] text-gold-deep">
          {lamp.productType}
        </p>
        <h3 className="font-serif-display mt-1 text-xl text-charcoal">
          {lamp.name}
          <span className="ml-2 text-base italic text-charcoal-soft">
            {lamp.colour}
          </span>
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-charcoal-soft line-clamp-1">
          {lamp.description}
        </p>
        <p className="font-label mt-2 text-[0.65rem] text-charcoal">
          {formatPrice(lamp.price)}
        </p>
      </div>
    </Link>
  );
}
