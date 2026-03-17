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
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            About
          </p>
          <h2 className="mb-4 font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
            A bit about me.
          </h2>

          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-8">
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

              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#121316]/80 p-4 shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full border border-white/10">
                      <Image
                        src="/images/foto-avecenabasuni.jpg"
                        alt="Avecena Basuni"
                        fill
                        className="object-cover object-top"
                        priority
                        sizes="72px"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                        Profile
                      </p>
                      <p className="mt-1 font-sans text-sm text-foreground">
                        Avecena Basuni
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300/80">
                    Open
                  </span>
                </div>

                <div className="mt-2 grid grid-cols-2 gap-3">
                  <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-3.5 py-3.5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/58">
                      Based
                    </p>
                    <p className="mt-1 font-sans text-sm text-foreground">
                      Jakarta
                    </p>
                  </div>
                  <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-3.5 py-3.5">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/58">
                      Mode
                    </p>
                    <p className="mt-1 font-sans text-sm text-foreground">
                      Remote / Relocation
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[1rem] border border-white/8 bg-white/[0.03] px-3.5 py-3.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/62">
                    Focus areas
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    <li className="font-sans text-[12px] leading-relaxed text-foreground/92 md:text-[13px]">
                      Instrumenting distributed systems with traces, logs, and
                      metrics that actually converge.
                    </li>
                    <li className="font-sans text-[12px] leading-relaxed text-foreground/92 md:text-[13px]">
                      Reducing alert fatigue so teams can react faster with less
                      noise.
                    </li>
                    <li className="font-sans text-[12px] leading-relaxed text-foreground/92 md:text-[13px]">
                      Designing observability workflows engineers will still
                      trust at 2am.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
}
