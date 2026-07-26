import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "solid" | "outline" | "ghost";

const base =
  "font-label inline-flex items-center justify-center gap-2 text-xs px-7 py-3.5 transition-colors duration-200 border";

const variants: Record<Variant, string> = {
  solid:
    "bg-charcoal text-ivory border-charcoal hover:bg-gold hover:border-gold",
  outline:
    "bg-transparent text-charcoal border-gold-deep hover:bg-gold hover:text-ivory hover:border-gold",
  ghost:
    "bg-transparent text-charcoal border-transparent hover:text-gold-deep",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
  /** Renders an inert, faded button with a "Coming Soon" tooltip instead of a link. */
  disabled?: boolean;
}

type ButtonAsLink = CommonProps &
  ComponentProps<typeof Link> & { href: string };

export function ButtonLink({
  variant = "solid",
  className = "",
  children,
  href,
  disabled = false,
  ...props
}: ButtonAsLink) {
  const isExternal = href.startsWith("http");

  if (disabled) {
    return (
      <span
        className={`${base} ${variants[variant]} ${className} cursor-not-allowed opacity-40`}
        title="Coming Soon"
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Link>
  );
}
