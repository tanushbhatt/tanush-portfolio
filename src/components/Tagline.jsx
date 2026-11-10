import { Fragment } from "react";
import { profile } from "../data/profile.js";

/**
 * "Computer Engineering Student | Aspiring Data Scientist | Python & AI"
 * The middle part is emphasised because it states the career direction.
 * On small screens the parts stack and the "|" separators are hidden.
 */
export default function Tagline({ className = "" }) {
  return (
    <p className={`tagline ${className}`.trim()}>
      {profile.taglineParts.map((part, index) => (
        <Fragment key={part}>
          {index > 0 && (
            <span className="tagline__sep" aria-hidden="true">
              |
            </span>
          )}
          <span className={index === 1 ? "tagline__part tagline__part--accent" : "tagline__part"}>
            {part}
          </span>
        </Fragment>
      ))}
    </p>
  );
}
