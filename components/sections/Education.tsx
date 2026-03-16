import { FadeIn } from "@/components/ui/FadeIn";

export default function Education() {
  return (
    <section
      id="education"
      className="px-4 py-14 md:px-6 md:py-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <div className="grid gap-6 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-8 lg:grid-cols-[9.5rem_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              Education
            </p>
          </div>

          <FadeIn className="w-full">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="font-sans text-base font-medium text-foreground mb-1">
                  Bachelor of Engineering — Electrical Engineering
                </p>
                <p className="font-sans text-sm text-muted-foreground">
                  Universitas Indonesia
                </p>
              </div>
              <div className="text-right">
                <p className="font-mono text-xs text-muted-foreground/70">
                  Aug 2019 – Jan 2023
                </p>
                <p className="font-mono text-xs text-foreground/80 mt-1">
                  GPA 3.87 · Cum Laude
                </p>
              </div>
            </div>

            <p className="mt-6 font-sans text-sm text-muted-foreground leading-relaxed">
              Specialization in Electronics Engineering. Relevant coursework:
              Artificial Intelligence, Control Systems, Microcontroller
              Programming, Network Communication, Embedded Systems.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
