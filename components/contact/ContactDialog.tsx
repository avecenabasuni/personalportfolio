"use client";

import { useMemo, useState } from "react";
import type { CSSProperties, FormEvent, ReactNode } from "react";
import emailjs from "@emailjs/browser";
import { SendIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type ContactIntent = "role" | "project";

const contactDialogCopy: Record<
  ContactIntent,
  { subject: string; title: string; description: string; placeholder: string }
> = {
  role: {
    subject: "Discuss a role",
    title: "Discuss a role",
    description:
      "Share the role, team context, and the reliability work that matters most.",
    placeholder:
      "Tell me about the team, role, stack, and what needs to get better.",
  },
  project: {
    subject: "Talk about a project",
    title: "Talk about a project",
    description:
      "Share the project scope, current pain points, and what outcome you need.",
    placeholder:
      "Tell me about the project, timeline, constraints, and target outcome.",
  },
};

type ContactDialogProps = {
  children: ReactNode;
  className: string;
  intent?: ContactIntent;
  style?: CSSProperties;
  trackLabel?: string;
};

export function ContactDialog({
  children,
  className,
  intent = "role",
  style,
  trackLabel,
}: ContactDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const emailConfig = useMemo(
    () => ({
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      toEmail:
        process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@avecenabasuni.my.id",
    }),
    [],
  );

  const copy = contactDialogCopy[intent];

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
    const subject = String(formData.get("subject") || copy.subject).trim();
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
          subject,
          from_name: fromName,
          from_email: fromEmail,
          reply_to: fromEmail,
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
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          setStatus("idle");
        }
      }}
    >
      <DialogTrigger
        data-track-event="contact_modal_open"
        data-track-section="contact"
        data-track-label={trackLabel || copy.subject}
        onClick={() => setStatus("idle")}
        className={className}
        style={style}
      >
        {children}
      </DialogTrigger>
      <DialogContent className="w-[min(94vw,36rem)] max-w-[36rem] border-white/10 bg-[#10141b]/96 p-0">
        <div className="border-b border-white/8 px-6 py-4 pr-16">
          <DialogTitle className="font-display text-2xl font-normal text-foreground">
            {copy.title}
          </DialogTitle>
          <DialogDescription className="mt-1 font-sans text-sm leading-relaxed text-muted-foreground">
            {copy.description}
          </DialogDescription>
        </div>
        <form onSubmit={onSubmit} className="grid min-w-0 gap-3 p-5 md:grid-cols-2">
          <input type="hidden" name="subject" value={copy.subject} />
          <input
            name="from_name"
            placeholder="Your name"
            required
            className="min-w-0 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-white/30"
          />
          <input
            name="from_email"
            type="email"
            placeholder="Your email"
            required
            className="min-w-0 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-white/30"
          />
          <textarea
            name="message"
            placeholder={copy.placeholder}
            required
            rows={6}
            className="min-w-0 w-full max-w-full resize-none rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-white/30 md:col-span-2"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-sans text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:cursor-not-allowed disabled:opacity-70 md:col-span-2"
          >
            {isSubmitting ? "Sending..." : "Send message"}
            <SendIcon size={14} />
          </button>
          <p className="min-h-5 font-sans text-sm text-muted-foreground md:col-span-2">
            {status === "success" &&
              "Message sent. I will get back to you soon."}
            {status === "error" &&
              "Unable to send message. Please try again or email me directly."}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
