import { FadeIn } from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section
      id="about"
      className="px-4 pt-10 pb-14 md:px-6 md:pt-12 md:pb-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <div className="grid gap-5 md:grid-cols-[8.25rem_minmax(0,1fr)] md:gap-6 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-8">
          {/* Label col */}
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
              About
            </p>
          </div>

          {/* Content col */}
          <FadeIn className="w-full space-y-5">
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
