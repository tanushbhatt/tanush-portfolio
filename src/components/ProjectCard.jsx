import { asset } from "../utils/asset.js";
import Button from "./Button.jsx";
import { GitHubIcon, ArrowUpRightIcon } from "./Icons.jsx";

/** One project card. The featured project gets a wider two-column layout. */
export default function ProjectCard({ project, featured = false, index = 0, onOpen }) {
  return (
    <article
      className={`card card--interactive project-card${featured ? " project-card--featured" : ""}`}
      data-reveal
      style={{ "--reveal-delay": `${index * 90}ms` }}
    >
      <div className="project-card__media">
        <img
          src={asset(project.image)}
          alt={project.imageAlt}
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="project-card__body">
        {featured && <p className="badge">Featured project</p>}
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__role">
          <span className="label">Role</span> {project.role}
        </p>
        <p className="project-card__summary">{project.summary}</p>

        {project.highlights && (
          <div className="project-card__group">
            <p className="label">Key areas</p>
            <ul className="chips">
              {project.highlights.map((item) => (
                <li key={item} className="chip chip--accent">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="project-card__group">
          <p className="label">Tech stack</p>
          <ul className="chips">
            {project.stack.map((item) => (
              <li key={item} className="chip">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-card__actions">
          <Button
            href={project.github}
            external
            variant="primary"
            icon={<GitHubIcon size={18} />}
            aria-label={`${project.title} on GitHub`}
          >
            GitHub
          </Button>
          {project.demo && (
            <Button
              href={project.demo}
              external
              variant="secondary"
              iconAfter={<ArrowUpRightIcon size={16} />}
              aria-label={`${project.title} live demo`}
            >
              Live Demo
            </Button>
          )}
          <Button
            variant="ghost"
            aria-haspopup="dialog"
            aria-label={`View details for ${project.title}`}
            onClick={() => onOpen(project)}
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
