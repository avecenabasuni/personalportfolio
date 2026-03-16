"use client";

import { experience } from "@/lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-4 py-14 md:px-6 md:py-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Experience
          </p>
          <h2 className="mb-4 font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
            The roles changed.
          </h2>
          <p className="mb-10 max-w-xl font-sans text-base text-muted-foreground leading-relaxed">
            The instinct to understand how systems behave did not.
          </p>
        </motion.div>

        <div className="space-y-0 divide-y divide-border">
          {experience.map((role, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: i * 0.1,
              }}
              className="py-10 grid md:grid-cols-[220px_1fr] gap-6 md:gap-12"
            >
              {/* Left: role meta */}
              <div>
                <p className="mb-1 font-sans text-base font-medium text-foreground md:text-lg">
                  {role.company}
                </p>
                <p className="mb-3 font-mono text-sm text-muted-foreground/70">
                  {role.period}
                </p>
                <p className="font-sans text-base text-muted-foreground md:text-lg">
                  {role.title}
                </p>
              </div>

              {/* Right: content */}
              <div>
                <p className="mb-5 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                  {role.summary}
                </p>
                <ul className="space-y-2.5">
                  {role.highlights.map((point, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                      <p className="font-sans text-base leading-relaxed text-muted-foreground/80 md:text-lg">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
