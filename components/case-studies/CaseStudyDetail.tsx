import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import ImageLightbox from "@/components/ui/ImageLightbox";
import BackPageLink from "@/components/ui/BackPageLink";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { caseStudies } from "@/lib/data";
import type { CaseStudy } from "@/lib/types";

export default function CaseStudyDetail({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  const layers = [
    ["Technical implementation", caseStudy.implementation],
    ["Architecture decision", caseStudy.architecture],
    ["Operational outcome", caseStudy.outcome],
  ];
  const relatedCaseStudies = caseStudies
    .filter((entry) => entry.id !== caseStudy.id)
    .map((entry) => ({
      entry,
      score: entry.tags.filter((tag) => caseStudy.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 2)
    .map(({ entry }) => entry);

  return (
    <section className="px-4 pt-28 pb-16 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="relative w-full max-w-full space-y-6">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Case Studies", href: "/case-studies" },
            { label: caseStudy.title },
          ]}
        />
        <BackPageLink href="/case-studies" label="Back to case studies" />

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_22rem] lg:items-start">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Case Study
            </p>
            <h1 className="mt-4 max-w-[14ch] font-display text-[clamp(2.62rem,5vw,4.24rem)] leading-[1.02] tracking-[-0.035em] text-foreground">
              {caseStudy.title}
            </h1>
            <p className="mt-5 max-w-3xl font-sans text-lg leading-relaxed text-muted-foreground">
              {caseStudy.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              {caseStudy.isOpenSource ? (
                <span className="rounded-full border border-teal-800/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.14em] text-teal-300/80">
                  Open Source
                </span>
              ) : null}
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
              Snapshot
            </p>
            <div className="relative mt-4 aspect-[1.08] overflow-hidden rounded-[1.1rem] border border-white/10">
              <ImageLightbox
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                sizes="(max-width: 1024px) 100vw, 420px"
                triggerClassName="relative h-full w-full cursor-zoom-in"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 rounded-[1rem] border border-white/8 bg-black/20 px-4 py-3">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground/70">
                Full breakdown below
              </span>
              <ArrowUpRightIcon
                size={14}
                className="text-muted-foreground/70"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {layers.map(([label, value]) => (
            <div
              key={label}
              className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/62">
                {label}
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div className="space-y-6">
            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/62">
                The Problem
              </p>
              <p className="mt-4 whitespace-pre-line font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                {caseStudy.problem}
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/62">
                What I Built
              </p>
              <p className="mt-4 whitespace-pre-line font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
                {caseStudy.what}
              </p>
            </div>
          </div>

          <aside className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(91,112,184,0.14),rgba(255,255,255,0.03))] p-6 backdrop-blur-sm lg:sticky lg:top-28">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/62">
              Outcome
            </p>
            <p className="mt-4 font-sans text-base leading-relaxed text-foreground/90 md:text-lg">
              {caseStudy.result}
            </p>
          </aside>
        </div>

        <div className="mt-12 border-t border-white/8 pt-8">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/62">
                Related
              </p>
              <h2 className="mt-2 font-display text-3xl leading-[1.05] text-foreground">
                More case studies.
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {relatedCaseStudies.map((related) => (
              <Link
                key={related.id}
                href={`/case-studies/${related.id}`}
                data-track-event="case_study_open"
                data-track-section="related-case-studies"
                data-track-label={related.title}
                className="group grid gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/18 hover:bg-white/[0.05] sm:grid-cols-[9rem_minmax(0,1fr)]"
              >
                <div className="relative aspect-[1.2] overflow-hidden rounded-xl border border-white/10 bg-black/20">
                  <Image
                    src={related.image}
                    alt={related.imageAlt}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="160px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="font-sans text-base font-medium leading-snug text-foreground">
                    {related.title}
                  </p>
                  <p className="mt-2 line-clamp-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    {related.summary}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {related.tags.slice(0, 3).map((tag) => (
                      <span
                        key={`${related.id}-${tag}`}
                        className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/78"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
