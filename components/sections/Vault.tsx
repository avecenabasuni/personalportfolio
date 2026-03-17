"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { XIcon } from "lucide-react";
import { vaultEntries } from "@/lib/data";
import type { VaultEntry } from "@/lib/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Vault() {
  const [activeEntry, setActiveEntry] = useState<VaultEntry | null>(null);

  return (
    <section
      id="vault"
      className="px-4 py-14 md:px-6 md:py-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Vault
        </p>
        <h2 className="mb-4 font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
          Things that took me
          <br className="hidden md:block" /> a while to figure out.
        </h2>
        <p className="mb-10 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
          Specific debugging notes and hard-won fixes. For the technical
          audience.
        </p>

        <ul className="space-y-3">
          {vaultEntries.map((entry, idx) => (
            <motion.li
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{
                duration: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: idx * 0.1,
              }}
            >
              <button
                type="button"
                onClick={() => setActiveEntry(entry)}
                className="w-full rounded-xl border border-border bg-white/[0.02] px-6 py-5 text-left transition-colors hover:border-white/16 hover:bg-white/[0.04]"
              >
                <div className="flex min-w-0 flex-col items-start gap-1">
                  <span className="font-sans text-sm uppercase tracking-[0.14em] text-muted-foreground/58">
                    Debug Note
                  </span>
                  <span className="font-sans text-sm font-medium leading-snug text-foreground">
                    {entry.title}
                  </span>
                  <span className="font-sans text-xs leading-snug text-muted-foreground/70 md:text-sm">
                    TL;DR — {entry.tldr}
                  </span>
                </div>
              </button>
            </motion.li>
          ))}
        </ul>

        <Dialog
          open={Boolean(activeEntry)}
          onOpenChange={(open) => !open && setActiveEntry(null)}
        >
          <DialogContent
            showCloseButton={false}
            className="flex h-[min(90dvh,56rem)] w-[min(96vw,72rem)] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#10141b]/94 p-0 text-left shadow-2xl backdrop-blur-2xl"
          >
            {activeEntry ? (
              <>
                <div className="shrink-0 border-b border-white/8 bg-[#10141b]/96 px-6 py-5 md:px-7 md:py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-sans text-sm uppercase tracking-[0.14em] text-muted-foreground/64">
                        Debug Note
                      </p>
                      <DialogTitle className="mt-3 max-w-[24ch] font-display text-2xl leading-[1.08] text-foreground md:text-3xl">
                        {activeEntry.title}
                      </DialogTitle>
                      <DialogDescription className="mt-3 font-sans text-base leading-relaxed text-muted-foreground">
                        {activeEntry.tldr}
                      </DialogDescription>
                    </div>
                    <DialogClose className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground">
                      <XIcon size={16} />
                      <span className="sr-only">Close modal</span>
                    </DialogClose>
                  </div>
                </div>

                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-5 md:px-7 md:py-6">
                  <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-relaxed text-muted-foreground">
                    {activeEntry.body}
                  </pre>
                </div>
              </>
            ) : null}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
