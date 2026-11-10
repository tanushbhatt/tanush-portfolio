import { AwardIcon } from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { certifications } from "../data/certifications.js";

export default function Certifications() {
  return (
    <section id="certifications" className="section section--alt" aria-labelledby="certifications-title">
      <div className="container">
        <SectionHeading
          id="certifications"
          number="06"
          eyebrow="Certifications"
          title="Certifications"
          intro="Courses and simulations I’ve completed alongside my degree."
        />

        <ul className="certs">
          {certifications.map((cert, index) => (
            <li
              key={cert.id}
              className="card card--interactive certs__item"
              data-reveal
              style={{ "--reveal-delay": `${(index % 2) * 80}ms` }}
            >
              <span className="icon-tile" aria-hidden="true">
                <AwardIcon size={20} />
              </span>
              <div>
                <h3 className="certs__title">{cert.title}</h3>
                <p className="certs__issuer">{cert.issuer}</p>
                <p className="chip chip--accent certs__focus">{cert.focus}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
