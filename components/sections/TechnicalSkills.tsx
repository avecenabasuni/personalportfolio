"use client";

import { skillGroups } from "@/lib/data";
import { sectionContent } from "@/lib/content";
import { motion } from "framer-motion";

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
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.domain}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: idx * 0.1,
              }}
              whileHover={{ y: -2 }}
              className="rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] px-6 py-8 transition-colors hover:border-white/20 hover:bg-[linear-gradient(180deg,rgba(110,136,255,0.08),rgba(255,255,255,0.04))]"
            >
              <p className="mb-1 font-sans text-sm font-medium text-foreground">
                {group.domain}
              </p>
              <p className="mb-5 font-mono text-[11px] text-muted-foreground/60">
                {group.context}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08, backgroundColor: "#232323" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-full border border-border px-3 py-1 font-sans text-xs text-muted-foreground hover:text-foreground hover:border-border/60 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
