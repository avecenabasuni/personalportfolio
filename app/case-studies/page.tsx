import type { Metadata } from "next";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CaseStudies from "@/components/sections/CaseStudies";
import BackPageLink from "@/components/ui/BackPageLink";

export const metadata: Metadata = {
  title: "Case Studies | Avecena Basuni",
  description:
    "Production observability and infrastructure case studies across enterprise client environments.",
  openGraph: {
    title: "Case Studies | Avecena Basuni",
    description:
      "Production observability and infrastructure case studies across enterprise client environments.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Avecena Basuni",
    description:
      "Production observability and infrastructure case studies across enterprise client environments.",
    images: ["/opengraph-image"],
  },
};

export default function AllCaseStudiesPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies | Avecena Basuni",
    description:
      "Production observability and infrastructure case studies across enterprise client environments.",
    url: "https://avecenabasuni.my.id/case-studies",
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://avecenabasuni.my.id/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: "https://avecenabasuni.my.id/case-studies",
      },
    ],
  };

  return (
    <>
      <Navigation />
      <main className="px-4 pt-24 pb-16 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="space-y-6">
          <BackPageLink href="/#case-studies" label="Back to home" />
          <CaseStudies
            showViewAllButton={false}
            topPaddingClass="pt-0 md:pt-0"
            horizontalPaddingClass="px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
