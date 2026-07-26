// ---------------------------------------------------------------------------
// Kalpa Creations — lamp catalogue.
//
// This file is the site's "CMS". To add a new lamp or colourway:
//   1. Drop its photos into /public/images/lamps/<slug>/ as 1.jpg, 2.jpg, ...
//   2. Copy one of the entries below and edit the fields.
//   3. If it's a new colourway of an existing lamp, add its slug to the
//      `relatedSlugs` list of its siblings (and add theirs to its own list)
//      so the product page cross-links them under "Available in other
//      colours".
// That's it — the home page, collection grid, and product pages all read
// from this one array.
// ---------------------------------------------------------------------------

export type SilhouetteFamily = "Mushroom Silhouettes" | "Sculptural Forms";

export interface Lamp {
  /** URL-safe unique id, e.g. "aura-blue" */
  slug: string;
  /** Lamp/design name, e.g. "Aura" */
  name: string;
  /** Short colour label used for the colourway filter, e.g. "Blue" */
  colour: string;
  family: SilhouetteFamily;
  productType: "Table Lamp";
  /** Price in INR. 0 means "not yet priced" — not displayed as ₹0 on the site. */
  price: number;
  description: string;
  /** Filenames inside /public/images/lamps/<slug>/ */
  images: string[];
  tags: string[];
  /** Slugs of sibling colourways of the same silhouette */
  relatedSlugs: string[];
  featuredOnHome: boolean;
  available: boolean;
  /** ISO date — drives the "Newest" sort on the Collection page */
  addedAt: string;
}

const BASE_TAGS = ["3D-Printed", "Made to Order", "Kalpa Creations"];

export const lamps: Lamp[] = [
  // --- Mushroom Silhouettes -------------------------------------------------
  {
    slug: "ambar-ivory",
    name: "Ambar",
    colour: "Ivory",
    family: "Mushroom Silhouettes",
    productType: "Table Lamp",
    price: 0,
    description:
      "Our most classic form: a fluted cylinder resting on a rounded bulb base. Clean lines, warm amber light.",
    images: ["1.jpg"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [],
    featuredOnHome: true,
    available: false,
    addedAt: "2026-07-01",
  },
  {
    slug: "aura-ivory",
    name: "Aura",
    colour: "Ivory",
    family: "Mushroom Silhouettes",
    productType: "Table Lamp",
    price: 0,
    description:
      "A rippling, hourglass silhouette with soft undulating curves — sculptural by day, glowing by night.",
    images: ["1.jpg"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["aura-blue"],
    featuredOnHome: false,
    available: false,
    addedAt: "2026-07-01",
  },
  {
    slug: "aura-blue",
    name: "Aura",
    colour: "Blue",
    family: "Mushroom Silhouettes",
    productType: "Table Lamp",
    price: 0,
    description:
      "The Aura silhouette in cool ocean blue, a calm and contemplative presence for a study or bedroom.",
    images: ["1.jpg"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["aura-ivory"],
    featuredOnHome: false,
    available: false,
    addedAt: "2026-07-01",
  },
  {
    slug: "totem-walnut",
    name: "Totem",
    colour: "Walnut",
    family: "Mushroom Silhouettes",
    productType: "Table Lamp",
    price: 0,
    description:
      "A tall, dome-capped column in walnut-toned print, standing like a small pillar of light.",
    images: ["1.jpg"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [],
    featuredOnHome: false,
    available: false,
    addedAt: "2026-07-01",
  },

  // --- Sculptural Forms ------------------------------------------------------
  {
    slug: "arco-ivory",
    name: "Arco",
    colour: "Ivory",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 0,
    description:
      "An arch cut from light itself — a single ribbed form that glows from within, no shade required.",
    images: ["1.jpg"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [],
    featuredOnHome: false,
    available: false,
    addedAt: "2026-07-01",
  },
  {
    slug: "shell-blue",
    name: "Shell",
    colour: "Blue",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1349,
    description:
      "The Shell silhouette in cool blue, its pleated cap catching light like a wave about to break.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "shell-green",
      "shell-terracotta",
      "shell-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "shell-green",
    name: "Shell",
    colour: "Green",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1349,
    description:
      "The Shell silhouette in fresh green, its ribbed base and pleated cap bringing a garden-fresh calm.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "shell-blue",
      "shell-terracotta",
      "shell-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "shell-terracotta",
    name: "Shell",
    colour: "Terracotta",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1349,
    description:
      "The Shell silhouette in warm terracotta, its spiralling folds glowing like sun-baked clay.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "shell-blue",
      "shell-green",
      "shell-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "shell-white",
    name: "Shell",
    colour: "White",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1349,
    description:
      "The Shell silhouette in crisp white, a clean and versatile take on its signature pleated form.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "shell-blue",
      "shell-green",
      "shell-terracotta",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "nimbus-blue",
    name: "Nimbus",
    colour: "Blue",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Nimbus silhouette in cool blue, its cloud-like folds catching light like a clear sky.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "nimbus-cherry",
      "nimbus-green",
      "nimbus-peach",
      "nimbus-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "nimbus-cherry",
    name: "Nimbus",
    colour: "Cherry",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Nimbus silhouette in rich cherry red, a bold pop of colour with its signature soft folds.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "nimbus-blue",
      "nimbus-green",
      "nimbus-peach",
      "nimbus-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "nimbus-green",
    name: "Nimbus",
    colour: "Green",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Nimbus silhouette in fresh green, its organic folds echoing leaves caught mid-fall.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "nimbus-blue",
      "nimbus-cherry",
      "nimbus-peach",
      "nimbus-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "nimbus-peach",
    name: "Nimbus",
    colour: "Peach",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Nimbus silhouette in warm peach, soft and inviting, like the last light of evening.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "nimbus-blue",
      "nimbus-cherry",
      "nimbus-green",
      "nimbus-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "nimbus-white",
    name: "Nimbus",
    colour: "White",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Nimbus silhouette in crisp white, a clean and versatile presence for any room.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "nimbus-blue",
      "nimbus-cherry",
      "nimbus-green",
      "nimbus-peach",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "flame-coral",
    name: "Flame",
    colour: "Coral",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 0,
    description:
      "A tall, spiralling silhouette in coral red, its waves catching the light like a flame held still.",
    images: ["1.jpg", "2.jpg"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["flame-ivory", "flame-sage"],
    featuredOnHome: true,
    available: false,
    addedAt: "2026-07-01",
  },
  {
    slug: "flame-ivory",
    name: "Flame",
    colour: "Ivory",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 0,
    description:
      "The Flame silhouette in soft ivory, its vertical waves glowing warm from within.",
    images: ["1.jpg"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["flame-coral", "flame-sage"],
    featuredOnHome: false,
    available: false,
    addedAt: "2026-07-22",
  },
  {
    slug: "flame-sage",
    name: "Flame",
    colour: "Sage",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 0,
    description:
      "The Flame silhouette in deep sage green, a bold sculptural note for a console or shelf.",
    images: ["1.jpg"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["flame-coral", "flame-ivory"],
    featuredOnHome: false,
    available: false,
    addedAt: "2026-07-22",
  },
  {
    slug: "ember-green",
    name: "Ember",
    colour: "Green",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Ember silhouette in fresh green, its wave texture glowing with a garden-fresh warmth.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "ember-orange",
      "ember-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "ember-orange",
    name: "Ember",
    colour: "Orange",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Ember silhouette in bold orange, its round wave-textured orb glowing like a true ember.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "ember-green",
      "ember-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "ember-white",
    name: "Ember",
    colour: "White",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Ember silhouette in crisp white, a clean and versatile take on its signature glowing orb.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "ember-green",
      "ember-orange",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "luna-ivory",
    name: "Luna",
    colour: "Ivory",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 0,
    description:
      "A full, moon-round silhouette in soft ivory ribbing — simple, quiet, and complete.",
    images: ["1.jpg"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [],
    featuredOnHome: false,
    available: false,
    addedAt: "2026-07-01",
  },
  {
    slug: "marea-green",
    name: "Marea",
    colour: "Green",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1499,
    description:
      "The Marea silhouette in fresh green, its folding waves settling into a calm, garden-fresh glow.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "marea-orange",
      "marea-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "marea-orange",
    name: "Marea",
    colour: "Orange",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1499,
    description:
      "The Marea silhouette in bold orange, its rippling waves catching light like a sunset tide.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "marea-green",
      "marea-white",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "marea-white",
    name: "Marea",
    colour: "White",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1499,
    description:
      "The Marea silhouette in crisp white, a clean and versatile take on its signature folding waves.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: [
      "marea-green",
      "marea-orange",
    ],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },

  // --- New arrivals: Dune & Willow --------------------------------------------
  {
    slug: "dune-blue",
    name: "Dune",
    colour: "Blue",
    family: "Mushroom Silhouettes",
    productType: "Table Lamp",
    price: 1349,
    description:
      "A classic mushroom silhouette — a wide, pleated conical shade over a tapered fluted stem, its spiralling ridges cast in cool blue.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["dune-green", "dune-peach", "dune-white"],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "dune-green",
    name: "Dune",
    colour: "Green",
    family: "Mushroom Silhouettes",
    productType: "Table Lamp",
    price: 1349,
    description:
      "The Dune silhouette in fresh sage green, its spiralling ridges giving a quiet, garden-fresh glow.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["dune-blue", "dune-peach", "dune-white"],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "dune-peach",
    name: "Dune",
    colour: "Peach",
    family: "Mushroom Silhouettes",
    productType: "Table Lamp",
    price: 1349,
    description:
      "The Dune silhouette in warm peach, its fluted cap and stem glowing soft at dusk.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["dune-blue", "dune-green", "dune-white"],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "dune-white",
    name: "Dune",
    colour: "White",
    family: "Mushroom Silhouettes",
    productType: "Table Lamp",
    price: 1349,
    description:
      "The Dune silhouette in crisp white, a clean and versatile take on its classic mushroom form.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["dune-blue", "dune-green", "dune-peach"],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "willow-blue",
    name: "Willow",
    colour: "Blue",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "A wave-textured drum shade in soft ombre blue, set on slender tripod legs for a lighter, more textile-like silhouette.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["willow-green", "willow-orange", "willow-white"],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "willow-green",
    name: "Willow",
    colour: "Green",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Willow silhouette in fresh green, its wave-textured shade catching light on slender tripod legs.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["willow-blue", "willow-orange", "willow-white"],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "willow-orange",
    name: "Willow",
    colour: "Orange",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Willow silhouette in warm orange, its rippling shade glowing atop slender tripod legs.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["willow-blue", "willow-green", "willow-white"],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
  {
    slug: "willow-white",
    name: "Willow",
    colour: "White",
    family: "Sculptural Forms",
    productType: "Table Lamp",
    price: 1399,
    description:
      "The Willow silhouette in crisp white, a clean and versatile take on its wave-textured tripod form.",
    images: ["1.png"],
    tags: [...BASE_TAGS, "Table Lamp"],
    relatedSlugs: ["willow-blue", "willow-green", "willow-orange"],
    featuredOnHome: false,
    available: true,
    addedAt: "2026-07-27",
  },
];

export function getAllLamps(): Lamp[] {
  return lamps;
}

export function getLampBySlug(slug: string): Lamp | undefined {
  return lamps.find((l) => l.slug === slug);
}

export function getFeaturedLamps(): Lamp[] {
  return lamps.filter((l) => l.featuredOnHome);
}

export function getRelatedLamps(lamp: Lamp): Lamp[] {
  return lamp.relatedSlugs
    .map((slug) => getLampBySlug(slug))
    .filter((l): l is Lamp => Boolean(l));
}

export const silhouetteFamilies: SilhouetteFamily[] = [
  "Mushroom Silhouettes",
  "Sculptural Forms",
];

export function getColours(): string[] {
  return Array.from(new Set(lamps.map((l) => l.colour))).sort();
}

export function getProductTypes(): Lamp["productType"][] {
  return Array.from(new Set(lamps.map((l) => l.productType)));
}

export function lampImagePath(lamp: Lamp, filename: string): string {
  return `/images/lamps/${lamp.slug}/${filename}`;
}

/** Formats a lamp's price for display. Returns "Price on Request" while price is 0. */
export function formatPrice(price: number): string {
  if (!price) return "Price on Request";
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
