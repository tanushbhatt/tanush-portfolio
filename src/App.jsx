import { useEffect } from "react";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import { navItems } from "./data/navigation.js";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";
import { useScrollSpy } from "./hooks/useScrollSpy.js";
import About from "./sections/About.jsx";
import Certifications from "./sections/Certifications.jsx";
import Contact from "./sections/Contact.jsx";
import Education from "./sections/Education.jsx";
import Experience from "./sections/Experience.jsx";
import Hackathons from "./sections/Hackathons.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";

const SECTION_IDS = navItems.map((item) => item.id);

export default function App() {
  const activeId = useScrollSpy(SECTION_IDS);
  useRevealOnScroll();

  // The page renders client-side, so jump to a #section in the URL after the first render.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar activeId={activeId} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Hackathons />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
