"use client";

import { stats } from "@/lib/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedStatValue({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] || "";

    if (!isInView) {
      setDisplayValue(`0${suffix}`);
      return;
    }

    let frameId = 0;
    const start = performance.now();
    const duration = 700;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(target * eased);
      setDisplayValue(`${current}${suffix}`);
      if (t < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, value]);

  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-60px" }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="mb-2 font-display text-4xl leading-none text-foreground md:text-5xl"
    >
      {displayValue}
    </motion.p>
  );
}

export default function StatsBar() {
  return (
    <section className="relative -mt-px bg-[#0d1218] px-4 pt-8 pb-4 md:px-6 md:pt-10 md:pb-6 lg:px-8 xl:px-10 2xl:px-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[rgba(11,16,24,0.32)] to-transparent"
      />
      <div className="relative w-full">
        <FadeIn>
          <div className="relative grid gap-6 border-b border-white/8 pb-8 md:grid-cols-2 md:gap-10">
            <div>
              <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/76">
                Why teams bring me in
              </p>
              <h2 className="max-w-[18ch] font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
                Spend less time guessing and more time shipping.
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                I consolidate fragmented telemetry, tune alerting, and build
                workflows that make incident response faster when the pressure
                is highest.
              </p>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                The result is less context-switching, fewer blind spots, and
                observability systems engineers can actually trust in
                production.
              </p>
            </div>
          </div>
        </FadeIn>

        <div className="relative mt-5 grid grid-cols-2 gap-y-7 md:grid-cols-4 md:gap-x-0 md:divide-x md:divide-white/8">
          {stats.map((stat, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className="px-0 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <AnimatedStatValue value={stat.value} />
              <p className="max-w-[15rem] font-sans text-xs leading-snug text-muted-foreground">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
