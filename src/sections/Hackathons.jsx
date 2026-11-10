import { TerminalIcon } from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { hackathons } from "../data/hackathons.js";

export default function Hackathons() {
  return (
    <section id="hackathons" className="section" aria-labelledby="hackathons-title">
      <div className="container">
        <SectionHeading
          id="hackathons"
          number="07"
          eyebrow="Hackathons"
          title="Hackathons"
          intro="Hackathons I’ve taken part in."
        />

        <ul className="hackathons">
          {hackathons.map((event, index) => (
            <li
              key={event.id}
              className="card card--interactive hackathons__item"
              data-reveal
              style={{ "--reveal-delay": `${index * 80}ms` }}
            >
              <div className="hackathons__top">
                <span className="icon-tile" aria-hidden="true">
                  <TerminalIcon size={20} />
                </span>
                <span className="chip chip--mono">{event.date}</span>
              </div>
              <h3 className="hackathons__name">{event.name}</h3>
              <p className="hackathons__text">{event.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
