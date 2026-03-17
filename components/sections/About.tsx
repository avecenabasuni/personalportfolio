import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 pt-10 pb-14 md:px-6 md:pt-12 md:pb-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <FadeIn className="w-full">
          <div className="mb-4 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10">
              <Image
                src="/images/foto-avecenabasuni.jpg"
                alt="Avecena Basuni"
                fill
                className="object-cover object-top"
                priority
                sizes="48px"
              />
            </div>
            <p className="font-sans text-sm text-muted-foreground/78">Avecena Basuni</p>
          </div>

          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            About
          </p>
          <h2 className="mb-4 font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
            A bit about me.
          </h2>

          <div className="space-y-5">
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              I'm Avecena, an Electrical Engineer from Universitas Indonesia who
              somehow ended up obsessed with making cloud systems reliable and
              observable. The transition from debugging microcontrollers to
              instrumenting distributed systems felt natural. The same instinct
              that makes you add a serial monitor to an Arduino makes you
              instrument an API endpoint.
            </p>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Outside of work I'm lifting at the gym, on the minisoccer or
              football pitch on weekends, and occasionally getting humbled by
              Dota 2. I think being a team sport person shapes how I work too.
              Observability is fundamentally a team problem. It only works if
              everyone on the team can see what's happening, not just the person
              who built the dashboard.
            </p>
            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              Right now I'm looking for an SRE role where I can go deep on
              reliability engineering, incident response, and building
              observability that engineers actually use. Jakarta based. Open to
              remote and relocation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
