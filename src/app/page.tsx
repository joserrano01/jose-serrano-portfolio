import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProfessionalImpact from "@/components/ProfessionalImpact";
import CoreExpertise from "@/components/CoreExpertise";
import ProductionSupport from "@/components/ProductionSupport";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AiLab from "@/components/AiLab";
import CareerTimeline from "@/components/CareerTimeline";
import Certifications from "@/components/Certifications";
import RemoteAbout from "@/components/RemoteAbout";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <ProfessionalImpact />
        <CoreExpertise />
        <ProductionSupport />
        <Experience />
        <Projects />
        <AiLab />
        <CareerTimeline />
        <Certifications />
        <RemoteAbout />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
