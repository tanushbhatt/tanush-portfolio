import { profile } from "../data/profile.js";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons.jsx";
import Tagline from "./Tagline.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__id">
          <p className="site-footer__name">{profile.name}</p>
          <Tagline className="tagline--small" />
        </div>

        <ul className="site-footer__links" aria-label="Contact links">
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)">
              <GitHubIcon size={18} />
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)">
              <LinkedInIcon size={18} />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`}>
              <MailIcon size={18} />
              <span>Email</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="container site-footer__bottom">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>Built with React and Vite.</p>
      </div>
    </footer>
  );
}
