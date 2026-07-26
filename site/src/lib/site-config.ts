// Central place for brand contact details. Edit here to update site-wide.
export const siteConfig = {
  name: "Kalpa Creations",
  tagline: "3D Printed. Artfully Crafted.",
  categories: ["Lamps", "Furniture", "Vases", "Decor"] as const,
  instagramHandle: "kalpa.creations_",
  instagramUrl: "https://instagram.com/kalpa.creations_",
  email: "creationkalpa@gmail.com",
};

export function mailtoHref(opts: {
  subject: string;
  body: string;
}): string {
  const params = new URLSearchParams({
    subject: opts.subject,
    body: opts.body,
  });
  return `mailto:${siteConfig.email}?${params.toString()}`;
}
