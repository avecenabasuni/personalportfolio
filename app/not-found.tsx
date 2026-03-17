import Link from "next/link";
import Navigation from "@/components/layout/Navigation";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#0d1218] px-4 pt-28 pb-16 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <section className="mx-auto w-full max-w-5xl rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
            Error
          </p>
          <h1 className="mt-3 font-display text-[clamp(4rem,12vw,9rem)] leading-[0.95] tracking-[-0.04em] text-foreground">
            404
          </h1>
          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
            This page doesn&apos;t exist. Maybe it was moved, or maybe it never
            existed.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:border-white/20"
          >
            Go home →
          </Link>
        </section>
      </main>
    </>
  );
}
