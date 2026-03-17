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
  return (
    <>
      <Navigation />
      <main className="px-4 pt-24 pb-16 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
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
