export default function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className="h-px w-12 bg-gold-pale" />
      <span className="mx-3 h-1.5 w-1.5 rounded-full bg-gold" />
      <span className="h-px w-12 bg-gold-pale" />
    </div>
  );
}
