import SectionHeading from "../components/SectionHeading.jsx";
import { aboutFacts, aboutFocus, aboutParagraphs } from "../data/profile.js";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading id="about" number="01" eyebrow="About" title="About me" />

        <div className="about">
          <div className="about__copy" data-reveal>
            {aboutParagraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <ul className="chips about__focus" aria-label="Areas of focus">
              {aboutFocus.map((item) => (
                <li key={item} className="chip chip--accent">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <dl className="card facts" data-reveal style={{ "--reveal-delay": "100ms" }}>
            {aboutFacts.map((fact) => (
              <div key={fact.label} className="facts__row">
                <dt className="label">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
