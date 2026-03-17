import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CaseStudyDetail from "@/components/case-studies/CaseStudyDetail";
import { caseStudies } from "@/lib/data";

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies.find((entry) => entry.id === slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: `${caseStudy.title} | Avecena Basuni`,
    description: caseStudy.summary,
    openGraph: {
      title: `${caseStudy.title} | Avecena Basuni`,
      description: caseStudy.summary,
      images: [`/case-studies/${caseStudy.id}/opengraph-image`],
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | Avecena Basuni`,
      description: caseStudy.summary,
      images: [`/case-studies/${caseStudy.id}/opengraph-image`],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = caseStudies.find((entry) => entry.id === slug);

  if (!caseStudy) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: caseStudy.title,
    description: caseStudy.summary,
    keywords: caseStudy.tags,
    image: `https://avecenabasuni.my.id${caseStudy.image}`,
    url: `https://avecenabasuni.my.id/case-studies/${caseStudy.id}`,
    author: {
      "@type": "Person",
      name: "Avecena Basuni",
      url: "https://avecenabasuni.my.id",
    },
  };

  return (
    <>
      <Navigation />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <CaseStudyDetail caseStudy={caseStudy} />
      </main>
      <Footer />
    </>
  );
}
