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

  return (
    <>
      <Navigation />
      <main>
        <CaseStudyDetail caseStudy={caseStudy} />
      </main>
      <Footer />
    </>
  );
}
