import { BriefcaseIcon } from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { experience } from "../data/experience.js";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading id="experience" number="04" eyebrow="Experience" title="Experience" />

        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.id} className="timeline__item" data-reveal>
              <p className="timeline__date">{job.period}</p>
              <article className="card timeline__card">
                <div className="timeline__head">
                  <span className="icon-tile" aria-hidden="true">
                    <BriefcaseIcon size={20} />
                  </span>
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                </div>
                <p className="timeline__text">{job.description}</p>
                <div className="project-card__group">
                  <p className="label">Technologies</p>
                  <ul className="chips">
                    {job.technologies.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
