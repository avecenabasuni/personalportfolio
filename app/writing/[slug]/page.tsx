import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackPageLink from "@/components/ui/BackPageLink";

export default function WritingArticlePage() {
  return (
    <>
      <Navigation />
      <main className="px-4 pt-24 pb-16 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <section className="w-full space-y-6">
          <BackPageLink href="/writing" label="Back to writing" />
          <div className="space-y-4">
            <h1 className="max-w-[16ch] font-display text-[clamp(2.62rem,5vw,4.24rem)] leading-[1.02] tracking-[-0.035em] text-foreground">
              Article preview page
            </h1>
            <p className="max-w-3xl font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              This route is reserved for internal writing detail pages. Current
              published articles are hosted on Medium and open in a new tab from
              the writing list.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
