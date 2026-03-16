import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

export default function BackPageLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeftIcon size={14} />
      {label}
    </Link>
  );
}
