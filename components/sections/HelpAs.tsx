import Link from "next/link";
import {
  ArrowRightIcon,
  BriefcaseBusinessIcon,
  NetworkIcon,
  RadarIcon,
} from "lucide-react";
import { hiringProfiles } from "@/lib/data";

const iconByProfile = {
  sre: BriefcaseBusinessIcon,
  observability: RadarIcon,
  "solutions-architect": NetworkIcon,
};

export default function HelpAs() {
  return (
    <section className="bg-[#0d1218] px-4 pt-8 pb-6 md:px-6 md:pt-10 md:pb-8 lg:px-8 xl:px-10 2xl:px-12">
      <div className="w-full">
        <div className="grid gap-6 border-b border-white/8 pb-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start lg:gap-10">
          <div>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/76">
              I can help as
            </p>
            <h2 className="max-w-[18ch] font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
              One reliability practice, three ways to bring me in.
            </h2>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {hiringProfiles.map((profile) => {
              const Icon = iconByProfile[profile.id];

              return (
                <Link
                  key={profile.id}
                  href={`/hire#${profile.id}`}
                  data-track-event="hire_profile_open"
                  data-track-section="help-as"
                  data-track-label={profile.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/18 hover:bg-white/[0.045]"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-foreground">
                      <Icon size={17} />
                    </div>
                    <span className="max-w-[9rem] text-right font-mono text-[10px] uppercase leading-snug tracking-[0.16em] text-muted-foreground/62">
                      {profile.audience}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-sans text-base font-medium text-foreground">
                      {profile.shortTitle}
                    </h3>
                    <ArrowRightIcon
                      size={14}
                      className="mt-1 shrink-0 text-muted-foreground/55 transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
                    />
                  </div>
                  <p className="mt-3 min-h-[5.25rem] font-sans text-sm leading-relaxed text-muted-foreground">
                    {profile.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {profile.strengths.slice(0, 3).map((signal) => (
                      <span
                        key={signal}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/76"
                      >
                        {signal}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
