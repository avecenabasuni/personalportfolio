import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackPageLink from "@/components/ui/BackPageLink";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const readableTitle = slug
    .split("-")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");

  return {
    title: `${readableTitle || "Writing"} | Avecena Basuni`,
    description:
      "Article preview route for writing metadata and social sharing in the portfolio.",
    openGraph: {
      title: `${readableTitle || "Writing"} | Avecena Basuni`,
      description:
        "Article preview route for writing metadata and social sharing in the portfolio.",
      images: [`/writing/${slug}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${readableTitle || "Writing"} | Avecena Basuni`,
      description:
        "Article preview route for writing metadata and social sharing in the portfolio.",
      images: [`/writing/${slug}/opengraph-image`],
    },
  };
}

export default async function WritingArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const readableTitle = slug
    .split("-")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");

  const placeholderJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: readableTitle || "Article preview page",
    description:
      "Article preview route for writing metadata and social sharing in the portfolio.",
    author: {
      "@type": "Person",
      name: "Avecena Basuni",
      url: "https://avecenabasuni.my.id",
    },
    url: `https://avecenabasuni.my.id/writing/${slug}`,
    isAccessibleForFree: true,
  };

  return (
    <>
      <Navigation />
      <main className="px-4 pt-24 pb-16 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(placeholderJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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
