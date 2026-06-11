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
import { trackPortfolioInteraction } from "@/components/analytics/InteractionTracker";

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
  contextLabel?: string;
  defaultSubject?: string;
  intent?: ContactIntent;
  style?: CSSProperties;
  trackLabel?: string;
  trackingSource?: string;
};

export function ContactDialog({
  children,
  className,
  contextLabel,
  defaultSubject,
  intent = "role",
  style,
  trackLabel,
  trackingSource,
}: ContactDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "success" | "error" | "config"
  >("idle");

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
  const subject = defaultSubject || copy.subject;
  const trackingLabel = trackLabel || contextLabel || subject;
  const trackingSourceValue = trackingSource || intent;

  const trackContactEvent = (action: string, destination = "contact_form") => {
    trackPortfolioInteraction({
      action,
      section: "contact",
      label: trackingLabel,
      destination,
      source: trackingSourceValue,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const formSubject = String(formData.get("subject") || subject).trim();
    const fromName = String(formData.get("from_name") || "").trim();
    const fromEmail = String(formData.get("from_email") || "").trim();
    const roleContext = String(formData.get("role_context") || "").trim();
    const teamContext = String(formData.get("team_context") || "").trim();
    const stackContext = String(formData.get("stack_context") || "").trim();
    const timelineContext = String(formData.get("timeline_context") || "").trim();
    const workMode = String(formData.get("work_mode") || "").trim();
    const message = String(formData.get("message") || "").trim();

    trackContactEvent("contact_form_submit", "emailjs");

    if (
      !emailConfig.serviceId ||
      !emailConfig.templateId ||
      !emailConfig.publicKey
    ) {
      setStatus("config");
      trackContactEvent("contact_form_error", "emailjs_config");
      return;
    }

    if (!fromName || !fromEmail || !message) {
      setStatus("error");
      trackContactEvent("contact_form_error", "validation");
      return;
    }

    const contextLines = [
      roleContext ? `Role focus: ${roleContext}` : "",
      teamContext ? `Team context: ${teamContext}` : "",
      stackContext ? `Stack: ${stackContext}` : "",
      timelineContext ? `Hiring timeline: ${timelineContext}` : "",
      workMode ? `Remote/relocation preference: ${workMode}` : "",
    ].filter(Boolean);
    const emailMessage = contextLines.length
      ? `${contextLines.join("\n")}\n\nMessage:\n${message}`
      : message;

    setIsSubmitting(true);
    try {
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          subject: formSubject,
          from_name: fromName,
          from_email: fromEmail,
          reply_to: fromEmail,
          message: emailMessage,
          role_context: roleContext,
          team_context: teamContext,
          stack_context: stackContext,
          timeline_context: timelineContext,
          work_mode: workMode,
          to_email: emailConfig.toEmail,
        },
        { publicKey: emailConfig.publicKey },
      );
      formElement.reset();
      setStatus("success");
      trackContactEvent("contact_form_success", "emailjs");
    } catch (error) {
      console.error("EmailJS send failed", error);
      setStatus("error");
      trackContactEvent("contact_form_error", "emailjs");
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
        data-track-label={trackingLabel}
        data-track-destination={trackingSourceValue}
        onClick={() => setStatus("idle")}
        className={className}
        style={style}
      >
        {children}
      </DialogTrigger>
      <DialogContent className="max-h-[90dvh] w-[min(94vw,36rem)] max-w-[36rem] overflow-y-auto border-white/10 bg-[#10141b]/96 p-0">
        <div className="border-b border-white/8 px-6 py-4 pr-16">
          <DialogTitle className="font-display text-2xl font-normal text-foreground">
            {copy.title}
          </DialogTitle>
          <DialogDescription className="mt-1 font-sans text-sm leading-relaxed text-muted-foreground">
            {copy.description}
          </DialogDescription>
        </div>
        <form onSubmit={onSubmit} className="grid min-w-0 gap-3 p-5 md:grid-cols-2">
          <input type="hidden" name="subject" value={subject} />
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
          {intent === "role" ? (
            <>
              <input
                name="role_context"
                defaultValue={contextLabel}
                placeholder="Role focus"
                className="min-w-0 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-white/30"
              />
              <input
                name="team_context"
                placeholder="Team context"
                className="min-w-0 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-white/30"
              />
              <input
                name="stack_context"
                placeholder="Current stack"
                className="min-w-0 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/65 focus:border-white/30"
              />
              <select
                name="timeline_context"
                defaultValue=""
                className="min-w-0 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-white/30"
              >
                <option value="" className="bg-[#10141b] text-muted-foreground">
                  Hiring timeline
                </option>
                <option value="Now / actively hiring" className="bg-[#10141b]">
                  Now / actively hiring
                </option>
                <option value="This quarter" className="bg-[#10141b]">
                  This quarter
                </option>
                <option value="Exploratory" className="bg-[#10141b]">
                  Exploratory
                </option>
              </select>
              <select
                name="work_mode"
                defaultValue=""
                className="min-w-0 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 font-sans text-sm text-foreground outline-none transition-colors focus:border-white/30 md:col-span-2"
              >
                <option value="" className="bg-[#10141b] text-muted-foreground">
                  Remote / relocation preference
                </option>
                <option value="Remote" className="bg-[#10141b]">
                  Remote
                </option>
                <option value="Relocation" className="bg-[#10141b]">
                  Relocation
                </option>
                <option value="Jakarta / hybrid" className="bg-[#10141b]">
                  Jakarta / hybrid
                </option>
              </select>
            </>
          ) : null}
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
            {status === "config" && (
              <>
                Contact form is not configured in this environment.{" "}
                <a
                  href={`mailto:${emailConfig.toEmail}?subject=${encodeURIComponent(
                    subject,
                  )}`}
                  className="text-foreground underline underline-offset-4"
                >
                  Email me directly.
                </a>
              </>
            )}
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
