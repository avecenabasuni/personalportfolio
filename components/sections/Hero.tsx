"use client";

import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="radix-surface radix-arcs relative flex min-h-[100vh] items-center overflow-hidden bg-[#0d1218] px-4 py-14 md:px-6 md:py-16 lg:px-8 xl:px-10 2xl:px-12">
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-44 right-[-12rem] h-[42rem] w-[42rem] rounded-full opacity-[0.12] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.54 0.16 267) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 left-[-10rem] h-[34rem] w-[34rem] rounded-full opacity-[0.1] blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.52 0.12 219) 0%, transparent 70%)",
        }}
      />
      <div className="relative w-full max-w-full">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_26rem] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_27rem] xl:gap-10">
          <motion.div
            className="max-w-none self-center"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.21, 0.47, 0.32, 0.98],
              delay: 0.1,
            }}
          >
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px]">
              SRE · Observability · Cloud Infrastructure
            </p>

            <h1 className="max-w-[24ch] font-display text-[clamp(2.75rem,4.8vw,6rem)] font-normal leading-[0.98] tracking-[-0.032em] text-foreground sm:max-w-[22ch] sm:text-[clamp(3.25rem,5.2vw,6rem)] lg:max-w-[24ch] xl:max-w-[25ch]">
              I started building affordable medical devices so more people could
              access care.
            </h1>

            <p className="mt-4 max-w-[40ch] font-display text-[clamp(1.35rem,2.45vw,2.5rem)] font-normal leading-[1.06] tracking-[-0.02em] text-foreground/62 sm:mt-5 sm:max-w-[32ch] sm:text-[clamp(1.55rem,2.7vw,2.7rem)] lg:max-w-[40ch] lg:whitespace-nowrap">
              Now I build reliable systems so more people can stay online.
            </p>

            <div className="mt-5 h-px w-full max-w-[64ch] bg-foreground/25" />

            <p className="mt-5 max-w-[64ch] font-sans text-[17px] leading-relaxed text-muted-foreground md:text-[1.15rem]">
              Electrical engineer turned SRE. I instrument distributed systems,
              reduce alert noise, and design observability workflows engineers
              can trust under pressure.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:mt-6 md:gap-4">
              <a
                href="mailto:hello@avecenabasuni.my.id"
                className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-2.5 font-sans text-sm font-medium text-background transition-colors duration-200 hover:bg-foreground/92 md:px-6 md:py-3"
              >
                Get in touch
                <ArrowRightIcon size={14} />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 font-sans text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-white/20 hover:text-foreground md:px-6 md:py-3"
              >
                See my work
              </a>
            </div>
          </motion.div>

          <motion.div className="relative mx-auto mt-1 w-full max-w-[19rem] self-center sm:max-w-[21rem] lg:mt-2 lg:w-[26rem] lg:max-w-none xl:w-[27rem] lg:justify-self-end">
            <div className="absolute inset-x-4 -top-5 h-10 rounded-full bg-blue-500/10 blur-2xl" />
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#121316]/80 p-4 shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <div className="mb-4 flex items-center justify-between rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-3.5">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/60">
                      Profile
                    </p>
                    <p className="mt-1 font-sans text-sm text-foreground">
                      Avecena Basuni
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-300/80">
                    Open
                  </span>
                </div>

                <div className="relative aspect-[0.98] overflow-hidden rounded-[1.1rem] border border-white/8">
                  <Image
                    src="/images/foto-avecenabasuni.jpg"
                    alt="Avecena Basuni"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
