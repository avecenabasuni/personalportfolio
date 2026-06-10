import { BriefcaseBusinessIcon, NetworkIcon, WrenchIcon } from "lucide-react";

const paths = [
  {
    title: "SRE hire",
    label: "For reliability teams",
    description:
      "I can own production reliability work across observability, incident response, alert tuning, and SLI/SLO workflows.",
    signals: ["On-call signal quality", "MTTR reduction", "SLO workflows"],
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Solutions Architect",
    label: "For cloud and platform teams",
    description:
      "I can translate business constraints into resilient cloud, Kubernetes, and observability architectures.",
    signals: ["Architecture tradeoffs", "Cloud infrastructure", "Technical validation"],
    icon: NetworkIcon,
  },
  {
    title: "Freelance consultant",
    label: "For focused project work",
    description:
      "I can help with observability setup, New Relic implementation, infrastructure review, Terraform, and alert cleanup.",
    signals: ["Observability setup", "New Relic rollout", "Terraform/IaC enablement"],
    icon: WrenchIcon,
  },
];

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
            {paths.map((path) => {
              const Icon = path.icon;

              return (
                <article
                  key={path.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/18 hover:bg-white/[0.045]"
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-foreground">
                      <Icon size={17} />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/62">
                      {path.label}
                    </span>
                  </div>
                  <h3 className="font-sans text-base font-medium text-foreground">
                    {path.title}
                  </h3>
                  <p className="mt-3 min-h-[5.25rem] font-sans text-sm leading-relaxed text-muted-foreground">
                    {path.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {path.signals.map((signal) => (
                      <span
                        key={signal}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/76"
                      >
                        {signal}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
