import { useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import ProjectModal from "../components/ProjectModal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects"
          number="02"
          eyebrow="Projects"
          title="Projects"
          intro="Selected work in machine learning, AI, and Python development. AgriYield AI is the one closest to my data science goals."
        />

        <div className="projects">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} featured onOpen={setSelected} />
          ))}
          <div className="projects__grid">
            {others.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onOpen={setSelected} />
            ))}
          </div>
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
