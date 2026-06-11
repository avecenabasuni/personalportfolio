import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BadgeCheckIcon,
  BriefcaseBusinessIcon,
  FileTextIcon,
  MapPinIcon,
  NetworkIcon,
  RadarIcon,
} from "lucide-react";
import { ContactDialog } from "@/components/contact/ContactDialog";
import Footer from "@/components/layout/Footer";
import Navigation from "@/components/layout/Navigation";
import { hiringProfiles } from "@/lib/data";
import type { HiringProfile } from "@/lib/types";

export const metadata: Metadata = {
  title: "Hire Avecena Basuni | SRE, Observability, Solutions Architect",
  description:
    "Recruiter-ready overview for SRE, Observability Engineer, and reliability-focused Solutions Architect roles.",
  alternates: {
    canonical: "/hire",
  },
  openGraph: {
    title: "Hire Avecena Basuni | SRE, Observability, Solutions Architect",
    description:
      "Role fit, proof links, case studies, certifications, and contact path for hiring teams.",
    url: "https://avecenabasuni.my.id/hire",
    images: ["/images/foto-avecenabasuni.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Avecena Basuni | SRE, Observability, Solutions Architect",
    description:
      "Role fit, proof links, case studies, certifications, and contact path for hiring teams.",
    images: ["/images/foto-avecenabasuni.jpg"],
  },
};

const profileIcons = {
  sre: BriefcaseBusinessIcon,
  observability: RadarIcon,
  "solutions-architect": NetworkIcon,
};

const quickFacts = [
  {
    label: "Systems",
    value: "76+ enterprise environments instrumented",
    icon: RadarIcon,
  },
  {
    label: "Credentials",
    value: "20+ across New Relic, AWS, GCP, and Nutanix",
    icon: BadgeCheckIcon,
  },
  {
    label: "Location",
    value: "Jakarta based, open to remote and relocation",
    icon: MapPinIcon,
  },
];

function EvidenceLink({
  evidence,
  profile,
}: {
  evidence: HiringProfile["evidence"][number];
  profile: HiringProfile;
}) {
  const isDocument = evidence.type === "resume";
  const className =
    "group inline-flex min-h-11 min-w-0 items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 font-sans text-sm text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground";
  const content = (
    <>
      <span className="min-w-0 truncate">{evidence.label}</span>
      <ArrowUpRightIcon
        aria-hidden
        size={14}
        className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </>
  );

  if (isDocument) {
    return (
      <a
        href={evidence.href}
        target="_blank"
        rel="noopener noreferrer"
        data-track-event="hire_evidence_open"
        data-track-section="hire"
        data-track-label={`${profile.title}: ${evidence.label}`}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={evidence.href}
      data-track-event="hire_evidence_open"
      data-track-section="hire"
      data-track-label={`${profile.title}: ${evidence.label}`}
      className={className}
    >
      {content}
    </Link>
  );
}

export default function HirePage() {
  const hirePageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Hire Avecena Basuni",
    description:
      "Recruiter-ready overview for SRE, Observability Engineer, and reliability-focused Solutions Architect roles.",
    url: "https://avecenabasuni.my.id/hire",
    mainEntity: {
      "@type": "Person",
      name: "Avecena Basuni",
      jobTitle: "SRE & Observability Engineer",
      email: "mailto:hello@avecenabasuni.my.id",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
      knowsAbout: [
        "Site Reliability Engineering",
        "Observability",
        "New Relic",
        "Cloud Infrastructure",
        "Solutions Architecture",
      ],
    },
  };

  return (
    <>
      <Navigation />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(hirePageJsonLd).replace(/</g, "\\u003c"),
          }}
        />

        <section className="relative min-h-[78vh] overflow-hidden px-4 pt-28 pb-14 md:px-6 md:pt-32 lg:px-8 xl:px-10 2xl:px-12">
          <Image
            src="/images/foto-avecenabasuni.jpg"
            alt="Avecena Basuni"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center] opacity-[0.62]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,18,24,0.98)_0%,rgba(13,18,24,0.9)_36%,rgba(13,18,24,0.42)_100%)]"
          />
          <div className="relative flex min-h-[calc(78vh-10.5rem)] items-end">
            <div className="max-w-4xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Recruiter brief
              </p>
              <h1 className="mt-4 max-w-[13ch] font-display text-[clamp(3rem,6vw,6.25rem)] font-normal leading-[0.96] tracking-[-0.035em] text-foreground">
                Hire for reliability work that reaches production.
              </h1>
              <p className="mt-5 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground md:text-xl">
                I fit best where teams need SRE ownership, observability
                implementation, or architecture work that connects technical
                constraints to operational outcomes.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ContactDialog
                  intent="role"
                  contextLabel="Recruiter conversation"
                  defaultSubject="Discuss a hiring fit"
                  trackLabel="Hire hero CTA"
                  trackingSource="hire:hero"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-sans text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                >
                  Discuss hiring fit
                  <ArrowRightIcon size={14} />
                </ContactDialog>
                <a
                  href="/documents/Avecena-Basuni-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track-event="resume_open"
                  data-track-section="hire"
                  data-track-label="Hire hero resume"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-5 py-2.5 font-sans text-sm font-medium text-foreground transition-colors hover:border-white/24 hover:bg-white/[0.07]"
                >
                  View resume
                  <FileTextIcon size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
          <div className="grid gap-3 md:grid-cols-3">
            {quickFacts.map((fact) => {
              const Icon = fact.icon;

              return (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-foreground">
                    <Icon size={17} />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/62">
                    {fact.label}
                  </p>
                  <p className="mt-2 font-sans text-base leading-snug text-foreground">
                    {fact.value}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="px-4 py-12 md:px-6 md:py-16 lg:px-8 xl:px-10 2xl:px-12">
          <div className="mb-8 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Role fit
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.35rem,4vw,4.2rem)] font-normal leading-[1.02] tracking-[-0.03em] text-foreground">
              Three ways I can plug into a team.
            </h2>
          </div>

          <div className="space-y-5">
            {hiringProfiles.map((profile) => {
              const Icon = profileIcons[profile.id];

              return (
                <section
                  key={profile.id}
                  id={profile.id}
                  className="scroll-mt-28 border-t border-white/8 py-8 first:border-t-0 md:py-10"
                >
                  <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                    <div>
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-full border border-white/10 bg-black/20 text-foreground">
                          <Icon size={18} />
                        </div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/62">
                          {profile.audience}
                        </p>
                      </div>
                      <h3 className="font-display text-3xl font-normal leading-[1.05] text-foreground md:text-4xl">
                        {profile.title}
                      </h3>
                      <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                        {profile.summary}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {profile.strengths.map((strength) => (
                          <span
                            key={strength}
                            className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/78"
                          >
                            {strength}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div>
                        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/62">
                          Outcomes
                        </p>
                        <ul className="grid gap-2">
                          {profile.outcomes.map((outcome) => (
                            <li
                              key={outcome}
                              className="rounded-xl border border-white/8 bg-black/15 px-4 py-3 font-sans text-sm leading-relaxed text-muted-foreground"
                            >
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/62">
                          Proof links
                        </p>
                        <div className="grid gap-2 sm:grid-cols-2">
                          {profile.evidence.map((evidence) => (
                            <EvidenceLink
                              key={`${profile.id}-${evidence.label}`}
                              evidence={evidence}
                              profile={profile}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <ContactDialog
                          intent="role"
                          contextLabel={profile.title}
                          defaultSubject={profile.ctaLabel}
                          trackLabel={profile.trackLabel}
                          trackingSource={`hire:${profile.id}`}
                          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-foreground px-5 font-sans text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                        >
                          {profile.ctaLabel}
                          <ArrowRightIcon size={14} />
                        </ContactDialog>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
