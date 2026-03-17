"use client";

import { workInProgress, workInProgressMeta } from "@/lib/data";
import { sectionContent } from "@/lib/content";
import { motion } from "framer-motion";

export default function CurrentlyWorkingOn() {
  return (
    <section
      id="currently-building"
      className="px-4 pt-6 pb-14 md:px-6 md:pt-8 md:pb-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <div className="grid gap-6 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-8 lg:grid-cols-[15.5rem_minmax(0,1fr)] lg:gap-10">
          {/* Label col */}
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase mb-2">
              Currently Building
            </p>
            <p className="font-sans text-sm text-muted-foreground/70 leading-relaxed">
              {sectionContent.currentlyWorkingOn.description}
            </p>
          </div>

          {/* Items */}
          <ul className="w-full space-y-5">
            {workInProgress.map((item, i) => {
              const itemMeta = workInProgressMeta[item.title];
              const isInProgress = itemMeta?.status === "in-progress";

              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    ease: [0.21, 0.47, 0.32, 0.98],
                    delay: i * 0.12,
                  }}
                  className="relative flex gap-4 rounded-xl border border-white/8 bg-white/[0.02] px-4 py-4 transition-colors hover:border-white/16 hover:bg-white/[0.04]"
                >
                  <div className="relative mt-1 shrink-0">
                    {i < workInProgress.length - 1 ? (
                      <span className="absolute left-[3px] top-3 h-[calc(100%+1.2rem)] w-px bg-white/10" />
                    ) : null}
                    <span className="relative flex h-2.5 w-2.5">
                      {isInProgress ? (
                        <>
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </>
                      ) : (
                        <span className="inline-flex h-2.5 w-2.5 rounded-full bg-muted-foreground/45" />
                      )}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-sans text-sm font-semibold text-foreground mb-1">
                        {item.title}
                      </p>
                      {isInProgress ? (
                        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-300/80">
                          In Progress
                        </span>
                      ) : (
                        <span className="rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/75">
                          Completed
                        </span>
                      )}
                    </div>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {(itemMeta?.tags ?? []).map((tag) => (
                        <span
                          key={`${item.title}-${tag}`}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
