export default function Eyebrow({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <p
      className={`font-label text-xs ${
        dark ? "text-gold-pale" : "text-gold-deep"
      } ${className}`}
    >
      {children}
    </p>
  );
}
