import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="bg-[#060e1d] py-6 text-center text-slate-600 text-sm border-t border-blue-900/20">
        © {new Date().getFullYear()} José Serrano — Ing. de Sistemas &amp; Experto en Seguridad Informática. Panamá.
      </footer>
    </>
  );
}
