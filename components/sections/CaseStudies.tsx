"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";
import { cn } from "@/lib/utils";

const cardGradients = [
  "from-violet-950/60 via-purple-950/40 to-background",
  "from-blue-950/60 via-indigo-950/40 to-background",
  "from-teal-950/60 via-emerald-950/40 to-background",
  "from-rose-950/60 via-pink-950/40 to-background",
];

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
      {text}
    </p>
  );
}

export default function CaseStudies({
  showViewAllButton = true,
  topPaddingClass = "pt-14 md:pt-16",
  horizontalPaddingClass = "px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12",
}: {
  showViewAllButton?: boolean;
  topPaddingClass?: string;
  horizontalPaddingClass?: string;
}) {
  return (
    <section
      id="case-studies"
      className={`${horizontalPaddingClass} pb-14 md:pb-16 ${topPaddingClass}`}
    >
      <div className="w-full">
        <div className="grid gap-8 border-b border-white/8 pb-8 md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] md:items-start md:gap-8 lg:gap-10">
          <div>
            <SectionLabel text="Work" />
            <h2 className="max-w-[19ch] font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
              Here&apos;s what the work actually looks like.
            </h2>
          </div>
          <div className="flex flex-col items-start gap-5 md:items-end md:pb-2">
            {showViewAllButton ? (
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 font-sans text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-white/20 hover:text-foreground md:px-6 md:py-3"
              >
                View all case studies
                <ArrowUpRightIcon size={14} />
              </Link>
            ) : null}

            <p className="max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
              Four engagements across enterprise observability, open-source
              tooling, and infrastructure automation. Open each one for the full
              breakdown.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-5">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: idx * 0.12,
              }}
            >
              <Link
                href={`/case-studies/${cs.id}`}
                data-track-event="case_study_open"
                data-track-section="case-studies"
                data-track-label={cs.title}
                className="block rounded-[1.6rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <motion.article
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group overflow-hidden rounded-[1.6rem] border border-white/8 bg-[#141519]/82 shadow-[0_20px_90px_rgba(0,0,0,0.22)] transition-colors hover:border-white/16"
                >
                  <div
                    className={cn(
                      "relative overflow-hidden bg-gradient-to-br px-5 py-5 md:px-7 md:py-7",
                      cardGradients[idx],
                    )}
                  >
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="grid min-w-0 gap-8 md:grid-cols-[minmax(0,1fr)_17rem] md:items-end md:gap-10 xl:grid-cols-[minmax(0,1fr)_20rem]">
                      <div className="flex min-w-0 items-start gap-4 md:gap-5">
                        <span className="mt-1 hidden w-6 shrink-0 font-mono text-xs text-muted-foreground/46 md:block">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 max-w-2xl text-left">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/68">
                              Case Study
                            </span>
                            {cs.isOpenSource && (
                              <span className="rounded-full border border-teal-800/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-teal-300/80">
                                Open Source
                              </span>
                            )}
                            {cs.stars ? (
                              <span className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/72">
                                {cs.stars} star
                              </span>
                            ) : null}
                          </div>
                          <p className="mt-3 max-w-[18ch] font-display text-[1.85rem] leading-[1.02] tracking-[-0.03em] text-foreground md:text-[2.3rem]">
                            {cs.title}
                          </p>
                          <p className="mt-4 max-w-xl font-sans text-base leading-relaxed text-muted-foreground/88">
                            {cs.summary}
                          </p>
                          <div className="mt-5 flex flex-wrap gap-1.5">
                            {cs.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/82"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="hidden md:block">
                        <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-black/20 shadow-[0_10px_40px_rgba(0,0,0,0.28)]">
                          <div className="relative aspect-[1.18]">
                            <Image
                              src={cs.image}
                              alt={cs.imageAlt}
                              fill
                              className="object-cover object-top opacity-88 transition-transform duration-500 group-hover:scale-[1.02]"
                              sizes="320px"
                            />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 via-black/30 to-transparent px-4 py-3">
                            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                              Read case study
                            </span>
                            <ArrowUpRightIcon
                              size={14}
                              className="text-white/70"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
