import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import MediumWritingList from "@/components/writing/MediumWritingList";
import BackPageLink from "@/components/ui/BackPageLink";

export const metadata: Metadata = {
  title: "Writing | Avecena Basuni",
  description:
    "Notes on observability, cloud infrastructure, and production reliability from real-world implementations.",
  openGraph: {
    title: "Writing | Avecena Basuni",
    description:
      "Notes on observability, cloud infrastructure, and production reliability from real-world implementations.",
    images: ["/writing/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing | Avecena Basuni",
    description:
      "Notes on observability, cloud infrastructure, and production reliability from real-world implementations.",
    images: ["/writing/opengraph-image"],
  },
};

export default function WritingPage() {
  return (
    <>
      <Navigation />
      <main className="px-4 pt-24 pb-16 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <section className="w-full space-y-6">
          <BackPageLink href="/#writing" label="Back to home" />
          <div className="space-y-4">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Writing
            </p>
            <h1 className="max-w-[16ch] font-display text-[clamp(2.62rem,5vw,4.24rem)] leading-[1.02] tracking-[-0.035em] text-foreground">
              All published articles.
            </h1>
            <p className="max-w-3xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              Notes on observability, cloud infrastructure, and production
              reliability work from real implementations.
            </p>
          </div>

          <div className="pt-2">
            <MediumWritingList mode="page" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
