import SectionHeading from "../components/SectionHeading.jsx";
import { skillGroups } from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills"
          number="03"
          eyebrow="Skills"
          title="Skills"
          intro="The languages, libraries, and tools I work with, grouped by area. I’m still learning and building in all of them."
        />

        <div className="skills">
          {skillGroups.map((group, index) => (
            <article
              key={group.id}
              className={`card skills__group skills__group--${group.id}${group.primary ? " skills__group--primary" : ""}`}
              data-reveal
              style={{ "--reveal-delay": `${(index % 3) * 70}ms` }}
            >
              <div className="skills__head">
                <h3 className="skills__title">{group.title}</h3>
                {group.primary && <span className="badge">Primary focus</span>}
              </div>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
