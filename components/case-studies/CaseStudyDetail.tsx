import Image from "next/image";
import { ArrowUpRightIcon } from "lucide-react";
import ImageLightbox from "@/components/ui/ImageLightbox";
import BackPageLink from "@/components/ui/BackPageLink";
import type { CaseStudy } from "@/lib/types";

export default function CaseStudyDetail({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  return (
    <section className="px-4 pt-28 pb-16 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <div className="relative w-full max-w-full space-y-6">
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
              {caseStudy.result}
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
      </div>
    </section>
  );
}
