"use client";

import { FormEvent, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  FileTextIcon,
  LinkedinIcon,
  SendIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { sectionContent } from "@/lib/content";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  const emailConfig = useMemo(
    () => ({
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      toEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@avecenabasuni.my.id",
    }),
    [],
  );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@avecenabasuni.my.id");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    if (
      !emailConfig.serviceId ||
      !emailConfig.templateId ||
      !emailConfig.publicKey
    ) {
      setStatus("error");
      return;
    }

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const fromName = String(formData.get("from_name") || "").trim();
    const fromEmail = String(formData.get("from_email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!fromName || !fromEmail || !message) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: fromName,
          from_email: fromEmail,
          message,
          to_email: emailConfig.toEmail,
        },
        { publicKey: emailConfig.publicKey },
      );
      formElement.reset();
      setStatus("success");
    } catch (error) {
      console.error("EmailJS send failed", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] lg:items-start lg:gap-10">
            <div>
              <p className="mb-3 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
                Let's talk
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
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 font-sans text-sm font-medium text-foreground transition-colors hover:bg-white/[0.07]"
                >
                  {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
                  {copied ? "Copied" : "Copy email"}
                </button>
                <motion.a
                  href="mailto:hello@avecenabasuni.my.id"
                  whileHover={{ scale: 1.04 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 font-sans text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Email me
                  <ArrowRightIcon size={14} />
                </motion.a>
                <Dialog>
                  <DialogTrigger
                    data-track-event="resume_open"
                    data-track-section="contact"
                    data-track-label="Resume Preview"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 font-sans text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    <FileTextIcon size={14} />
                    View Resume
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

            <div className="w-full lg:max-w-[36rem] lg:justify-self-end">
              <form onSubmit={onSubmit} className="grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-2">
                <input
                  name="from_name"
                  placeholder="Your name"
                  required
                  className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-white/30"
                />
                <input
                  name="from_email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-white/30"
                />
                <textarea
                  name="message"
                  placeholder="Tell me about your team, role, or project."
                  required
                  rows={5}
                  className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-white/30 md:col-span-2"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-sans text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  <SendIcon size={14} />
                </button>
                <p className="font-sans text-sm text-muted-foreground md:col-span-2">
                  {status === "success" && "Message sent. I will get back to you soon."}
                  {status === "error" &&
                    "Unable to send message. Please try again or email me directly."}
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
