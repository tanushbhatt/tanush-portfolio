import Button from "../components/Button.jsx";
import { ArrowRightIcon, FileTextIcon, GitHubIcon, LinkedInIcon, MailIcon } from "../components/Icons.jsx";
import Tagline from "../components/Tagline.jsx";
import { focusPath, profile } from "../data/profile.js";
import { asset } from "../utils/asset.js";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title" data-reveal>
            {profile.name}
          </h1>
          <div data-reveal style={{ "--reveal-delay": "80ms" }}>
            <Tagline />
          </div>
          <p className="hero__bio" data-reveal style={{ "--reveal-delay": "160ms" }}>
            {profile.bio}
          </p>

          <div className="hero__actions" data-reveal style={{ "--reveal-delay": "240ms" }}>
            <Button href="#projects" variant="primary" iconAfter={<ArrowRightIcon size={18} />}>
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" icon={<MailIcon size={18} />}>
              Contact Me
            </Button>
          </div>
          <div className="hero__links" data-reveal style={{ "--reveal-delay": "300ms" }}>
            <Button href={profile.github} external variant="ghost" icon={<GitHubIcon size={18} />}>
              GitHub
            </Button>
            <Button href={profile.linkedin} external variant="ghost" icon={<LinkedInIcon size={18} />}>
              LinkedIn
            </Button>
            <Button
              href={asset(profile.resume)}
              external
              variant="ghost"
              icon={<FileTextIcon size={18} />}
            >
              Resume
            </Button>
          </div>
        </div>

        <aside
          className="focus-card"
          aria-labelledby="focus-title"
          data-reveal
          style={{ "--reveal-delay": "200ms" }}
        >
          <div className="focus-card__header">
            <h2 id="focus-title" className="focus-card__title">
              Focus path
            </h2>
            <span className="chip chip--mono chip--accent">learning + building</span>
          </div>
          <ol className="focus-path">
            {focusPath.map((step, index) => (
              <li key={step.name} style={{ "--i": index }}>
                <span className="focus-path__node" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="focus-path__text">
                  <span className="focus-path__name">{step.name}</span>
                  <span className="focus-path__note">{step.note}</span>
                </span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
