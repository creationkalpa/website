"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import {
  getAllLamps,
  getColours,
  silhouetteFamilies,
  type SilhouetteFamily,
} from "@/data/lamps";

type SortOption = "newest" | "alphabetical";

const ALL = "All";

export default function CollectionGrid() {
  const searchParams = useSearchParams();
  const initialFamily = searchParams.get("family");

  const [family, setFamily] = useState<string>(
    initialFamily && silhouetteFamilies.includes(initialFamily as SilhouetteFamily)
      ? initialFamily
      : ALL
  );
  const [colour, setColour] = useState<string>(ALL);
  const [sort, setSort] = useState<SortOption>("newest");
  const [search, setSearch] = useState("");

  const lamps = getAllLamps();
  const colours = getColours();

  const filtered = useMemo(() => {
    let result = lamps.filter((lamp) => {
      if (family !== ALL && lamp.family !== family) return false;
      if (colour !== ALL && lamp.colour !== colour) return false;
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        const haystack = `${lamp.name} ${lamp.colour}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    result = [...result].sort((a, b) => {
      if (sort === "alphabetical") {
        return a.name.localeCompare(b.name) || a.colour.localeCompare(b.colour);
      }
      return b.addedAt.localeCompare(a.addedAt);
    });

    return result;
  }, [lamps, family, colour, sort, search]);

  const selectClass =
    "font-label border border-gold-pale bg-ivory px-4 py-2.5 text-xs text-charcoal focus:border-gold-deep focus:outline-none";

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-gold-pale/60 pb-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          <select
            className={selectClass}
            value={family}
            onChange={(e) => setFamily(e.target.value)}
            aria-label="Filter by silhouette family"
          >
            <option value={ALL}>All Families</option>
            {silhouetteFamilies.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>

          <select
            className={selectClass}
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            aria-label="Filter by colourway"
          >
            <option value={ALL}>All Colourways</option>
            {colours.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <select
            className={selectClass}
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            aria-label="Sort collection"
          >
            <option value="newest">Newest</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </div>

        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search lamps…"
          aria-label="Search lamps"
          className="w-full border border-gold-pale bg-ivory px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal-soft/70 focus:border-gold-deep focus:outline-none sm:w-64"
        />
      </div>

      <p className="mt-6 font-label text-[0.65rem] text-charcoal-soft">
        {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-3">
          {filtered.map((lamp) => (
            <ProductCard key={lamp.slug} lamp={lamp} />
          ))}
        </div>
      ) : (
        <div className="mt-20 text-center text-charcoal-soft">
          <p className="font-serif-display text-2xl text-charcoal">
            No pieces match those filters.
          </p>
          <p className="mt-2 text-sm">
            Try clearing a filter, or reach out — we may be able to make it
            for you.
          </p>
        </div>
      )}
    </div>
  );
}
