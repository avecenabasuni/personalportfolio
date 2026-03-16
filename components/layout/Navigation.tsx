"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const navLinks = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "Work", href: "#case-studies", sectionId: "case-studies" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  {
    label: "Certifications",
    href: "#certifications",
    sectionId: "certifications",
  },
  { label: "Contact", href: "#contact", sectionId: "contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const getNavHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  useEffect(() => {
    if (pathname !== "/") {
      setScrolled(true);
      setActiveSection("");
      return;
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const threshold = window.innerHeight * 0.35;
      const inViewSection = navLinks.find((link) => {
        const el = document.getElementById(link.sectionId);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= threshold && rect.bottom >= threshold;
      });

      if (inViewSection) {
        setActiveSection(inViewSection.sectionId);
        return;
      }

      const offsets = navLinks.map((link) => {
        const el = document.getElementById(link.sectionId);
        if (!el) return Number.POSITIVE_INFINITY;
        return Math.abs(el.getBoundingClientRect().top - threshold);
      });

      const nearestIdx = offsets.indexOf(Math.min(...offsets));
      setActiveSection(
        navLinks[nearestIdx]?.sectionId || navLinks[0].sectionId,
      );
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-transparent/40 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-none items-center justify-between px-4 py-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/images/logo-avecenabasuni.png"
            alt="Avecena Basuni"
            width={28}
            height={28}
            className="block opacity-90 transition-opacity group-hover:opacity-100"
          />
          <span className="font-mono text-sm tracking-tight text-muted-foreground transition-colors group-hover:text-foreground">
            avecenabasuni
          </span>
        </Link>

        <ul className="hidden max-w-[min(62vw,72rem)] items-center gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 md:flex [&::-webkit-scrollbar]:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <motion.div
                whileHover={{ scale: 1.04, y: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-flex rounded-full"
              >
                <Link
                  href={getNavHref(link.href)}
                  className={`inline-flex whitespace-nowrap rounded-full px-3.5 py-1.5 font-sans text-[0.84rem] transition-colors ${
                    activeSection === link.sectionId
                      ? "bg-white/[0.12] text-foreground"
                      : "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>

        <a
          href="mailto:hello@avecenabasuni.my.id"
          className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-4 py-1.5 font-sans text-sm text-foreground transition-colors duration-200 hover:bg-foreground hover:text-background md:inline-flex"
        >
          Get in touch
        </a>

        <Dialog>
          <DialogTrigger
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
            aria-label="Open navigation menu"
          >
            <MenuIcon size={18} />
          </DialogTrigger>
          <DialogContent
            showCloseButton={false}
            className="top-5 left-1/2 w-[calc(100%-1.5rem)] max-w-none -translate-x-1/2 translate-y-0 rounded-2xl border border-white/10 bg-[#111214]/98 p-0 text-left shadow-2xl sm:max-w-none"
          >
            <div className="border-b border-white/8 px-5 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <DialogTitle className="font-display text-2xl font-normal text-foreground">
                    Navigation
                  </DialogTitle>
                  <DialogDescription className="mt-1 font-sans text-sm text-muted-foreground">
                    Explore the portfolio and jump directly to the important
                    sections.
                  </DialogDescription>
                </div>
                <DialogClose className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground">
                  <XIcon size={16} />
                  <span className="sr-only">Close menu</span>
                </DialogClose>
              </div>
            </div>

            <div className="px-3 py-3">
              <ul className="space-y-1">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <DialogClose
                      render={
                        <Link
                          href={getNavHref(link.href)}
                          className="flex items-center justify-between rounded-xl px-3 py-3 text-left transition-colors hover:bg-white/[0.04]"
                        />
                      }
                    >
                      <div>
                        <p className="font-sans text-sm font-medium text-foreground">
                          {link.label}
                        </p>
                        <p className="mt-0.5 font-mono text-[11px] text-muted-foreground/60">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>
                      <ArrowRightIcon
                        size={14}
                        className="text-muted-foreground/60"
                      />
                    </DialogClose>
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-white/8 px-2 pt-4 pb-2">
                <a
                  href="mailto:hello@avecenabasuni.my.id"
                  className="flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 font-sans text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Get in touch
                  <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </nav>
    </header>
  );
}
