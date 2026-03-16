import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CaseStudies from "@/components/sections/CaseStudies";
import About from "@/components/sections/About";
import Writing from "@/components/sections/Writing";
import CurrentlyWorkingOn from "@/components/sections/CurrentlyWorkingOn";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import Vault from "@/components/sections/Vault";
import Education from "@/components/sections/Education";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <Hero />
        <StatsBar />
        <CaseStudies />
        <About />
        <Writing />
        <CurrentlyWorkingOn />
        <Experience />
        <Certifications />
        <TechnicalSkills />
        <Vault />
        <Education />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
