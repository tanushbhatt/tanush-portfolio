import { useEffect, useRef } from "react";
import { asset } from "../utils/asset.js";
import Button from "./Button.jsx";
import { ArrowUpRightIcon, CloseIcon, GitHubIcon } from "./Icons.jsx";

/**
 * Project details in a native <dialog>: the browser handles the focus trap,
 * the Escape key and the backdrop, which keeps it accessible with little code.
 */
export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();

    // Stop the page behind the dialog from scrolling.
    document.documentElement.classList.add("modal-open");
    return () => document.documentElement.classList.remove("modal-open");
  }, []);

  const closeDialog = () => dialogRef.current?.close();

  // The dialog fills its own box, so a click on the dialog element itself is a backdrop click.
  const onDialogClick = (event) => {
    if (event.target === dialogRef.current) closeDialog();
  };

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={onDialogClick}
    >
      <div className="modal__content">
        <button
          type="button"
          className="modal__close"
          aria-label="Close project details"
          onClick={closeDialog}
        >
          <CloseIcon size={20} />
        </button>

        <div className="modal__media">
          <img src={asset(project.image)} alt={project.imageAlt} width="1600" height="900" />
        </div>

        <div className="modal__body">
          {project.featured && <p className="badge">Featured project</p>}
          <h3 id="project-modal-title" className="modal__title">
            {project.title}
          </h3>
          <p className="project-card__role">
            <span className="label">Role</span> {project.role}
          </p>
          <p className="modal__summary">{project.summary}</p>

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
              View on GitHub
            </Button>
            {project.demo && (
              <Button
                href={project.demo}
                external
                variant="secondary"
                iconAfter={<ArrowUpRightIcon size={16} />}
              >
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </div>
    </dialog>
  );
}
