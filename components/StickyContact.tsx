"use client";

import {
  ArrowRightIcon,
  FileTextIcon,
  LinkedinIcon,
  MailIcon,
  XIcon,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

export default function StickyContact() {
  return (
    <Dialog>
      {/* Trigger — fixed floating button */}
      <DialogTrigger
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 font-sans text-sm font-medium text-background shadow-lg hover:bg-foreground/90 active:scale-95 transition-all duration-200"
        aria-label="Open contact options"
      >
        <MailIcon size={14} />
        Get in touch
      </DialogTrigger>

      {/* Modal */}
      <DialogContent
        className="max-w-sm bg-card border border-border shadow-2xl rounded-2xl p-0 overflow-hidden"
        showCloseButton={false}
      >
        {/* Header */}
        <div className="relative px-6 pt-6 pb-5 border-b border-border">
          <DialogClose className="absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground transition-colors">
            <XIcon size={16} />
            <span className="sr-only">Close</span>
          </DialogClose>
          <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase mb-2">
            Contact
          </p>
          <h3 className="font-display text-2xl font-normal text-foreground leading-snug">
            Ready to talk?
          </h3>
          <p className="mt-2 font-sans text-sm text-muted-foreground leading-relaxed">
            Open to SRE and cloud infrastructure roles. No commitment — just a
            conversation.
          </p>
        </div>

        {/* Actions */}
        <div className="px-6 py-6 space-y-3">
          <a
            href="mailto:hello@avecenabasuni.my.id"
            className="flex items-center justify-between w-full rounded-xl border border-border bg-background px-4 py-3.5 hover:border-foreground/30 hover:bg-muted transition-colors group"
          >
            <div className="flex items-center gap-3">
              <MailIcon size={15} className="text-muted-foreground" />
              <div>
                <p className="font-sans text-sm font-medium text-foreground">
                  Email me
                </p>
                <p className="font-mono text-[11px] text-muted-foreground/70">
                  hello@avecenabasuni.my.id
                </p>
              </div>
            </div>
            <ArrowRightIcon
              size={14}
              className="text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all"
            />
          </a>

          <a
            href="https://linkedin.com/in/avecenabasuni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full rounded-xl border border-border bg-background px-4 py-3.5 hover:border-foreground/30 hover:bg-muted transition-colors group"
          >
            <div className="flex items-center gap-3">
              <LinkedinIcon size={15} className="text-muted-foreground" />
              <p className="font-sans text-sm font-medium text-foreground">
                LinkedIn
              </p>
            </div>
            <ArrowRightIcon
              size={14}
              className="text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all"
            />
          </a>

          <a
            href="/documents/Avecena-Basuni-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full rounded-xl border border-border bg-background px-4 py-3.5 hover:border-foreground/30 hover:bg-muted transition-colors group"
          >
            <div className="flex items-center gap-3">
              <FileTextIcon size={15} className="text-muted-foreground" />
              <p className="font-sans text-sm font-medium text-foreground">
                View Resume
              </p>
            </div>
            <ArrowRightIcon
              size={14}
              className="text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all"
            />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
