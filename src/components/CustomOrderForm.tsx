"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { mailtoHref, siteConfig } from "@/lib/site-config";
import { getAllLamps } from "@/data/lamps";

const inputClass =
  "w-full border border-gold-pale bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-charcoal-soft/70 focus:border-gold-deep focus:outline-none";

export default function CustomOrderForm({
  general = false,
}: {
  general?: boolean;
}) {
  const lamps = getAllLamps();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reference, setReference] = useState("");
  const [message, setMessage] = useState("");

  const href = mailtoHref({
    subject: general
      ? "General Enquiry — Kalpa Creations"
      : `Custom Order Enquiry${reference ? ` — ${reference}` : ""}`,
    body: [
      `Name: ${name || "—"}`,
      `Email: ${email || "—"}`,
      phone ? `Phone: ${phone}` : null,
      !general ? `Reference lamp: ${reference || "—"}` : null,
      "",
      general ? "Message:" : "Desired changes:",
      message || "—",
    ]
      .filter((line) => line !== null)
      .join("\n"),
  });

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = href;
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="font-label mb-2 block text-[0.65rem] text-charcoal-soft">
            Name
          </label>
          <input
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="font-label mb-2 block text-[0.65rem] text-charcoal-soft">
            Email
          </label>
          <input
            type="email"
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="font-label mb-2 block text-[0.65rem] text-charcoal-soft">
            Phone (optional)
          </label>
          <input
            className={inputClass}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+1 555 000 0000"
          />
        </div>
        {!general && (
          <div>
            <label className="font-label mb-2 block text-[0.65rem] text-charcoal-soft">
              Reference Lamp
            </label>
            <select
              className={inputClass}
              value={reference}
              onChange={(e) => setReference(e.target.value)}
            >
              <option value="">Select a lamp…</option>
              {lamps.map((lamp) => (
                <option
                  key={lamp.slug}
                  value={`${lamp.name} — ${lamp.colour}`}
                >
                  {lamp.name} — {lamp.colour}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div>
        <label className="font-label mb-2 block text-[0.65rem] text-charcoal-soft">
          {general ? "Message" : "Desired Changes"}
        </label>
        <textarea
          className={`${inputClass} min-h-32 resize-y`}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            general
              ? "How can we help?"
              : "Colour, size, finish, or anything else you have in mind…"
          }
        />
      </div>

      <p className="text-xs leading-relaxed text-charcoal-soft/80">
        This opens your email app with the details above, addressed to{" "}
        {siteConfig.email}. Prefer Instagram? Message us directly instead.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        {general ? (
          <button
            type="submit"
            className="font-label inline-flex items-center justify-center gap-2 border border-charcoal bg-charcoal px-7 py-3.5 text-xs text-ivory transition-colors hover:border-gold hover:bg-gold"
          >
            Send via Email
          </button>
        ) : (
          <button
            type="button"
            disabled
            title="Coming Soon"
            className="font-label inline-flex cursor-not-allowed items-center justify-center gap-2 border border-charcoal bg-charcoal px-7 py-3.5 text-xs text-ivory opacity-40"
          >
            Send via Email
          </button>
        )}
        <ButtonLink href={siteConfig.instagramUrl} variant="outline">
          Message @{siteConfig.instagramHandle}
        </ButtonLink>
      </div>
    </form>
  );
}
