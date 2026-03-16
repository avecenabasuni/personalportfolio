"use client";

import { ArrowRightIcon, DownloadIcon, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="px-4 py-14 md:px-6 md:py-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="mb-3 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Let's talk
          </p>
          <h2 className="mb-5 font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
            Ready to talk?
          </h2>
          <p className="mb-10 font-sans text-base leading-relaxed text-muted-foreground max-w-lg">
            I'm currently open to SRE and cloud infrastructure roles. If your
            team is dealing with alert noise, slow root cause analysis, or
            monitoring that nobody trusts, I'd like to hear about it.
            <br />
            <span className="mt-2 block text-muted-foreground/70 text-sm">
              No commitment. Just a conversation.
            </span>
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="mailto:hello@avecenabasuni.my.id"
              whileHover={{ scale: 1.04, backgroundColor: "#232323" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-sans text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              Email me
              <ArrowRightIcon size={14} />
            </motion.a>
            <motion.a
              href="/documents/Avecena-Basuni-CV.pdf"
              download
              whileHover={{ scale: 1.04, backgroundColor: "#232323" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-sans text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <DownloadIcon size={14} />
              Download CV
            </motion.a>
            <a
              href="https://linkedin.com/in/avecenabasuni"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-sans text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            >
              <LinkedinIcon size={14} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
