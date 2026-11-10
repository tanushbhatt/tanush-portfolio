import Button from "../components/Button.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  FileTextIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
} from "../components/Icons.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { profile } from "../data/profile.js";
import { asset } from "../utils/asset.js";

export default function Contact() {
  const resumeUrl = asset(profile.resume);

  const channels = [
    {
      id: "email",
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: MailIcon,
      external: false,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: profile.linkedinLabel,
      href: profile.linkedin,
      Icon: LinkedInIcon,
      external: true,
    },
    {
      id: "github",
      label: "GitHub",
      value: profile.githubLabel,
      href: profile.github,
      Icon: GitHubIcon,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section section--alt" aria-labelledby="contact-title">
      <div className="container contact">
        <div className="contact__intro" data-reveal>
          <SectionHeading
            id="contact"
            number="08"
            eyebrow="Contact"
            title="Let’s get in touch"
            intro="Whether it’s an opportunity, a project, or a question about my work, my inbox is open."
          />
          <p className="contact__email">
            <a className="link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
          <div className="contact__actions">
            <Button href={`mailto:${profile.email}`} variant="primary" icon={<MailIcon size={18} />}>
              Send an email
            </Button>
            <CopyEmailButton email={profile.email} />
          </div>
        </div>

        <div className="contact__side">
          <ul className="contact__channels">
            {channels.map(({ id, label, value, href, Icon, external }, index) => (
              <li key={id} data-reveal style={{ "--reveal-delay": `${index * 70}ms` }}>
                <a
                  className="card card--interactive contact__channel"
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="icon-tile" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <span className="contact__channel-text">
                    <span className="label">{label}</span>
                    <span className="contact__channel-value">{value}</span>
                  </span>
                  <ArrowUpRightIcon size={18} className="contact__channel-arrow" />
                  {external && <span className="visually-hidden">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>

          <div className="card contact__resume" data-reveal style={{ "--reveal-delay": "210ms" }}>
            <div>
              <p className="label">Resume</p>
              <p className="contact__resume-name">{profile.resumeFileName}</p>
            </div>
            <div className="contact__resume-actions">
              <Button href={resumeUrl} external variant="secondary" icon={<FileTextIcon size={18} />}>
                View Resume
              </Button>
              <Button
                href={resumeUrl}
                variant="ghost"
                icon={<DownloadIcon size={18} />}
                download={profile.resumeFileName}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
