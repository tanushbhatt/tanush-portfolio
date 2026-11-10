import { GraduationIcon, MapPinIcon } from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { education } from "../data/education.js";

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading id="education" number="05" eyebrow="Education" title="Education" />

        <div className="education">
          {education.map((item) => (
            <article key={item.id} className="card education__card" data-reveal>
              <span className="icon-tile icon-tile--lg" aria-hidden="true">
                <GraduationIcon size={24} />
              </span>
              <div className="education__main">
                <h3 className="education__degree">{item.degree}</h3>
                <p className="education__school">{item.school}</p>
                <p className="education__meta">
                  <span>{item.period}</span>
                  <span className="education__location">
                    <MapPinIcon size={15} />
                    {item.location}
                  </span>
                </p>
              </div>
              <div className="education__stat">
                <p className="label">CGPA</p>
                <p className="education__cgpa">{item.cgpa}</p>
                <p className="education__note">{item.cgpaNote}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
