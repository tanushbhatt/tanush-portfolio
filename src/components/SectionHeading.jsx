/** Eyebrow label + h2 (+ optional intro) used at the top of every section. */
export default function SectionHeading({ id, number, eyebrow, title, intro }) {
  return (
    <div className="section-heading" data-reveal>
      <p className="eyebrow">
        <span className="eyebrow__num">{number}</span>
        <span>{eyebrow}</span>
      </p>
      <h2 id={`${id}-title`} className="section-heading__title">
        {title}
      </h2>
      {intro && <p className="section-heading__intro">{intro}</p>}
    </div>
  );
}
