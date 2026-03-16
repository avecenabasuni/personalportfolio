import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CaseStudies from "@/components/sections/CaseStudies";
import BackPageLink from "@/components/ui/BackPageLink";

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
