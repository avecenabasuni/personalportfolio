"use client";

import { workInProgress } from "@/lib/data";
import { motion } from "framer-motion";

export default function CurrentlyWorkingOn() {
  return (
    <section
      id="currently-building"
      className="px-4 pt-6 pb-14 md:px-6 md:pt-8 md:pb-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <div className="grid gap-6 md:grid-cols-[8.5rem_minmax(0,1fr)] md:gap-8 lg:grid-cols-[9.5rem_minmax(0,1fr)] lg:gap-10">
          {/* Label col */}
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase mb-2">
              Currently Building
            </p>
            <p className="font-sans text-sm text-muted-foreground/70 leading-relaxed">
              Always building something. Here's what's in progress right now.
            </p>
          </div>

          {/* Items */}
          <ul className="w-full space-y-6">
            {workInProgress.map((item, i) => (
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
                className="flex gap-4"
              >
                {/* Pulse indicator */}
                <div className="mt-1.5 shrink-0">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
                  </span>
                </div>
                <div>
                  <p className="font-mono text-sm font-medium text-foreground mb-1">
                    {item.title}
                  </p>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
