import { skillGroups } from "@/lib/data";
import { sectionContent } from "@/lib/content";

export default function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="px-4 pt-14 pb-10 md:px-6 md:pt-16 md:pb-12 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <p className="mb-3 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
          Technical Skills
        </p>
        <h2 className="mb-10 font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
          {sectionContent.technicalSkills.title}
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.domain}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-8 transition-[border-color,background,transform] hover:-translate-y-0.5 hover:border-white/20 hover:bg-[linear-gradient(180deg,rgba(110,136,255,0.08),rgba(255,255,255,0.04))]"
            >
              <p className="mb-1 font-sans text-sm font-medium text-foreground">
                {group.domain}
              </p>
              <p className="mb-5 font-mono text-[11px] text-muted-foreground/60">
                {group.context}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border px-3 py-1 font-sans text-xs text-muted-foreground transition-[border-color,color,background,transform] hover:scale-[1.04] hover:border-border/60 hover:bg-[#232323] hover:text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
