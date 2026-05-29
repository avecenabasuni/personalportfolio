"use client";

import { MailIcon } from "lucide-react";
import { ContactDialog } from "@/components/contact/ContactDialog";

export default function StickyContact() {
  return (
    <ContactDialog
      intent="role"
      trackLabel="Sticky get in touch"
      className="fixed right-6 z-50 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 font-sans text-sm font-medium text-background shadow-lg transition-all duration-200 hover:bg-foreground/90 active:scale-95"
      style={{ bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <MailIcon size={14} />
      Get in touch
    </ContactDialog>
  );
}
