import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRightIcon } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="px-4 py-14 md:px-6 md:py-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <FadeIn className="w-full">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Education
          </p>
          <h2 className="mb-6 font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
            Where it started.
          </h2>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:gap-8">
            <div>
              <p className="mb-1 font-sans text-base font-medium text-foreground">
                Bachelor of Engineering - Electrical Engineering
              </p>
              <p className="font-sans text-sm text-muted-foreground">
                Universitas Indonesia
              </p>

              <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                Minor: Electronics Engineering
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                Relevant coursework: Artificial Intelligence, Control Systems,
                Microcontroller Programming, Network Communication, Embedded Systems.
              </p>
              <p className="mt-3 font-sans text-sm text-muted-foreground/80">
                Graduated in 3 years 4 months
              </p>

              <a
                href="https://lib.ui.ac.id/detail?id=9999920516718&lokasi=lokal"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 font-sans text-sm text-muted-foreground underline decoration-white/25 underline-offset-4 transition-colors hover:text-foreground"
              >
                Design and Implementation of Potentiostat for Cyclic Voltammetry Analysis Using ESP32 Microcontroller
                <ArrowUpRightIcon size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href="/documents/syringepump-patent.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-sans text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground"
              >
                Review syringe pump patent
                <ArrowUpRightIcon size={14} />
              </a>
            </div>

            <div className="text-left md:text-right">
              <p className="font-mono text-xs text-muted-foreground/70">
                Aug 2019 - Jan 2023
              </p>
              <p className="mt-1 font-mono text-xs text-foreground/80">
                GPA 3.87 · Cum Laude
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
