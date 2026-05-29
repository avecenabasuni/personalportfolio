"use client";

import {
  ArrowRightIcon,
  FileTextIcon,
  LinkedinIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { sectionContent } from "@/lib/content";
import { ContactDialog } from "@/components/contact/ContactDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
          <div className="max-w-4xl">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                Let&apos;s talk
              </p>
              <h2 className="mb-5 font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
                {sectionContent.cta.title}
              </h2>
              <p className="mb-8 max-w-lg font-sans text-base leading-relaxed text-muted-foreground">
                {sectionContent.cta.description}
                <br />
                <span className="mt-2 block text-sm text-muted-foreground/70">
                  {sectionContent.cta.disclaimer}
                </span>
              </p>

              <div className="flex flex-wrap gap-3">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ContactDialog
                    intent="role"
                    trackLabel="Discuss a role"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 font-sans text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                  >
                    Discuss a role
                    <ArrowRightIcon size={14} />
                  </ContactDialog>
                </motion.div>
                <ContactDialog
                  intent="project"
                  trackLabel="Talk about a project"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-white/[0.07]"
                >
                  Talk about a project
                  <ArrowRightIcon size={14} />
                </ContactDialog>
                <Dialog>
                  <DialogTrigger
                    data-track-event="resume_open"
                    data-track-section="contact"
                    data-track-label="Resume Preview"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 font-sans text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    <FileTextIcon size={14} />
                    View resume
                  </DialogTrigger>
                  <DialogContent className="w-[min(96vw,70rem)] max-w-[70rem] border-white/10 bg-[#10141b]/96 p-0">
                    <div className="border-b border-white/8 px-6 py-4">
                      <DialogTitle className="font-display text-2xl font-normal text-foreground">
                        Resume Preview
                      </DialogTitle>
                      <DialogDescription className="mt-1 font-sans text-sm text-muted-foreground">
                        Previewing /documents/Avecena-Basuni-CV.pdf
                      </DialogDescription>
                    </div>
                    <div className="h-[60vh] w-full md:h-[75vh]">
                      <iframe
                        src="/documents/Avecena-Basuni-CV.pdf"
                        title="Avecena Basuni Resume"
                        className="h-full w-full"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <a
                  href="https://linkedin.com/in/avecenabasuni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 font-sans text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                >
                  <LinkedinIcon size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
