"use client";

import { ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const traceRows = [
    { service: "api-gateway", offset: 0, duration: 88, color: "bg-sky-400/80" },
    { service: "auth-service", offset: 12, duration: 30, color: "bg-cyan-300/80" },
    { service: "feature-flags", offset: 18, duration: 14, color: "bg-teal-300/80" },
    { service: "catalog-service", offset: 27, duration: 42, color: "bg-blue-300/80" },
    { service: "postgres-primary", offset: 34, duration: 22, color: "bg-emerald-300/80" },
    { service: "redis-cache", offset: 38, duration: 10, color: "bg-lime-300/80" },
    { service: "payment-worker", offset: 52, duration: 24, color: "bg-violet-300/80" },
    { service: "notification-bus", offset: 66, duration: 16, color: "bg-indigo-300/80" },
  ];

  return (
    <section id="home" className="radix-surface radix-arcs relative flex min-h-[100vh] items-center overflow-hidden bg-[#0d1218] px-4 pt-28 pb-14 md:px-6 md:pt-16 md:pb-16 lg:px-8 xl:px-10 2xl:px-12">
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

          <motion.div
            className="relative w-full self-center overflow-hidden lg:mt-2 lg:w-[26rem] lg:max-w-none xl:w-[27rem] lg:justify-self-end"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.2 }}
          >
            <div className="absolute inset-x-4 -top-5 h-10 rounded-full bg-blue-500/10 blur-2xl" />
            <div className="space-y-3">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#121316]/80 p-4 shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-sm">
                <div className="mb-3 flex items-center justify-between rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">
                    Distributed Trace Waterfall
                  </p>
                  <motion.span
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-300/80"
                  >
                    trace id 7fa1
                  </motion.span>
                </div>

                <div className="rounded-[1rem] border border-white/8 bg-white/[0.03] p-3.5">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/62">
                      latency timeline (ms)
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/82">
                      p95 342
                    </p>
                  </div>

                  <div className="mb-2 grid grid-cols-[8.25rem_minmax(0,1fr)] items-center gap-2 text-[9px] text-muted-foreground/50">
                    <span className="font-mono uppercase tracking-[0.14em]">service</span>
                    <div className="relative h-4 font-mono uppercase tracking-[0.13em]">
                      {[0, 25, 50, 75, 100].map((mark) => (
                        <span
                          key={mark}
                          className="absolute -translate-x-1/2"
                          style={{ left: `${mark}%` }}
                        >
                          {mark * 4}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    {traceRows.map((row, idx) => (
                      <div key={row.service} className="grid grid-cols-[8.25rem_minmax(0,1fr)] items-center gap-2">
                        <p className="truncate font-mono text-[10px] uppercase tracking-[0.13em] text-muted-foreground/72">
                          {row.service}
                        </p>
                        <div className="relative h-4 rounded-sm bg-white/[0.04]">
                          <motion.div
                            className={`absolute top-0 h-4 rounded-sm ${row.color}`}
                            style={{ left: `${row.offset}%` }}
                            animate={{
                              width: [`${row.duration * 0.7}%`, `${row.duration}%`, `${row.duration * 0.82}%`, `${row.duration}%`],
                              opacity: [0.6, 1, 0.78, 1],
                            }}
                            transition={{ duration: 2.6, delay: idx * 0.12, repeat: Infinity, ease: "easeInOut" }}
                          />
                          <motion.div
                            className="absolute top-0 h-4 w-[3px] rounded-full bg-white/90"
                            style={{ left: `${row.offset + row.duration}%` }}
                            animate={{ opacity: [0.2, 0.95, 0.2] }}
                            transition={{ duration: 1.7, delay: idx * 0.09, repeat: Infinity }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-3 rounded-[1rem] border border-white/8 bg-white/[0.03] px-3.5 py-3">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/62">
                      critical path
                    </p>
                    <p className="font-sans text-xs text-foreground/90">checkout request</p>
                  </div>
                  <div className="relative h-[18px] rounded-full bg-white/[0.05]">
                    <motion.div
                      className="absolute left-0 top-[8px] h-[2px] bg-fuchsia-300/75"
                      animate={{ width: ["68%", "82%", "74%", "86%", "68%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.span
                      className="absolute top-[5px] h-2.5 w-2.5 rounded-full bg-fuchsia-200"
                      animate={{ left: ["67%", "81%", "73%", "85%", "67%"], boxShadow: ["0 0 0px rgba(244,114,182,0.2)", "0 0 14px rgba(244,114,182,0.7)", "0 0 0px rgba(244,114,182,0.2)"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
