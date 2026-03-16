import Link from "next/link";
import MediumWritingList from "@/components/writing/MediumWritingList";

export default function Writing() {
  return (
    <section
      id="writing"
      className="px-4 py-14 md:px-6 md:py-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <div className="grid gap-6 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-8 lg:grid-cols-[9.5rem_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Writing
            </p>
            <p className="font-sans text-sm leading-relaxed text-muted-foreground/70">
              I write about what I build. If something took me a while to figure
              out, I document it.
            </p>

            <div className="mt-5">
              <Link
                href="/writing"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 font-sans text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-white/20 hover:text-foreground md:px-6 md:py-3"
              >
                View all writing
              </Link>
            </div>
          </div>

          <MediumWritingList mode="home" limit={3} />
        </div>
      </div>
    </section>
  );
}
