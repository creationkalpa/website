import { ButtonLink } from "@/components/Button";
import { mailtoHref, siteConfig } from "@/lib/site-config";

export default function EnquireActions({
  subject,
  body,
  instagramLabel = `Message @${siteConfig.instagramHandle}`,
  emailLabel = "Email Us",
  layout = "row",
}: {
  subject: string;
  body: string;
  instagramLabel?: string;
  emailLabel?: string;
  layout?: "row" | "column";
}) {
  return (
    <div
      className={`flex gap-4 ${
        layout === "row" ? "flex-col sm:flex-row" : "flex-col"
      }`}
    >
      <ButtonLink href={siteConfig.instagramUrl} variant="solid">
        {instagramLabel}
      </ButtonLink>
      <ButtonLink href={mailtoHref({ subject, body })} variant="outline">
        {emailLabel}
      </ButtonLink>
    </div>
  );
}
