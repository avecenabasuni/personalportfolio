import Image from "next/image";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

const footerLinks = [
  {
    heading: "Work",
    links: [
      { label: "Case Studies", href: "#case-studies" },
      { label: "Currently Building", href: "#currently-building" },
      { label: "Vault", href: "#vault" },
    ],
  },
  {
    heading: "Profile",
    links: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Education", href: "#education" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Email", href: "mailto:hello@avecenabasuni.my.id" },
      { label: "LinkedIn", href: "https://linkedin.com/in/avecenabasuni" },
      { label: "GitHub", href: "https://github.com/avecenabasuni" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="px-4 py-12 md:px-6 md:py-14 lg:px-8 xl:px-10 2xl:px-12">
      <div className="w-full">
        <div className="w-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
            <div className="relative overflow-hidden border-b border-white/8 px-6 py-10 md:px-8 md:py-12 lg:border-r lg:border-b-0 lg:px-10 lg:py-14">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-[0.14] blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.49 0.16 266) 0%, transparent 70%)",
                }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full opacity-[0.1] blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.52 0.12 219) 0%, transparent 72%)",
                }}
              />

              <div className="relative max-w-xl">
                <div className="mb-6 flex items-center gap-2.5">
                  <Image
                    src="/images/logo-avecenabasuni.png"
                    alt="Avecena Basuni"
                    width={26}
                    height={26}
                    className="opacity-85"
                  />
                  <span className="font-mono text-sm text-muted-foreground">
                    avecenabasuni
                  </span>
                </div>

                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/58">
                  Closing note
                </p>
                <h3 className="mt-3 max-w-[12ch] font-display text-4xl font-normal leading-[1.02] tracking-[-0.03em] text-foreground md:text-5xl">
                  Built for teams that need calmer systems.
                </h3>
                <p className="mt-5 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground">
                  SRE & Observability Engineer. Jakarta based. Open to remote
                  and relocation. If your incident response still depends on
                  guesswork, I can help make the system legible.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="mailto:hello@avecenabasuni.my.id"
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-sans text-sm text-foreground transition-colors hover:bg-white/[0.07]"
                  >
                    hello@avecenabasuni.my.id
                  </a>
                  <span className="inline-flex items-center rounded-full border border-white/8 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Available for SRE roles
                  </span>
                </div>
              </div>
            </div>

            <div className="grid gap-8 px-6 py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
              <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
                {footerLinks.map((col) => (
                  <div key={col.heading}>
                    <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/54">
                      {col.heading}
                    </p>
                    <ul className="space-y-3">
                      {col.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                    {col.heading === "Connect" ? (
                      <div className="mt-4 flex items-center gap-2">
                        <a
                          href="https://linkedin.com/in/avecenabasuni"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <LinkedinIcon size={18} />
                        </a>
                        <a
                          href="https://github.com/avecenabasuni"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <GithubIcon size={18} />
                        </a>
                        <a
                          href="https://instagram.com/avecenabasuni"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-colors hover:text-foreground"
                        >
                          <InstagramIcon size={18} />
                        </a>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="border-t border-white/8 pt-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/54">
                      What this site is for
                    </p>
                    <p className="mt-3 max-w-sm font-sans text-sm leading-relaxed text-muted-foreground">
                      A public record of the systems work, observability
                      thinking, and engineering instincts I want to keep
                      compounding.
                    </p>
                  </div>
                  <div className="sm:text-right">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/54">
                      Location
                    </p>
                    <p className="mt-3 font-sans text-sm text-foreground">
                      Jakarta, Indonesia
                    </p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground/54">
                      © {new Date().getFullYear()} Avecena Basuni
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
