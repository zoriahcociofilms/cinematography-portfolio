import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { projects, site, stock } from "./content/site";
import { StockFigure, ReferenceFilm } from "./components/Media";
import { ProjectDetail, ProjectGrid } from "./components/Projects";
import { ContactCta, Eyebrow, PageIntro, TextLink } from "./components/Shared";
import { asset } from "./lib";

export function Home() {
  return (
    <>
      <section
        className="home-opening wrap"
        aria-label="An introduction to Zoriah Cocio"
      >
        <StockFigure
          photo={stock.coyote}
          className="opening-photo"
          priority
          sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1600px) calc(100vw - 96px), 1504px"
        />
        <div className="signature-block">
          <h1>{site.hero}</h1>
          <p>Wildlife · Natural history · Documentary</p>
        </div>
      </section>
      <section className="home-intro wrap">
        <p>
          I’m Zoriah, an Arizona-based cinematographer drawn to animal behavior,
          wild places, and the stories that connect them.
        </p>
        <div>
          <TextLink page="work">Selected work</TextLink>
          <TextLink page="about">About me</TextLink>
        </div>
      </section>
      <section className="nature-section wrap" aria-label="Arizona wildlife">
        <div className="nature-heading">
          <h2>Arizona wildlife</h2>
        </div>
        <div className="nature-grid">
          <StockFigure
            photo={stock.owl}
            sizes="(max-width: 640px) calc(100vw - 32px), 50vw"
          />
          <StockFigure
            photo={stock.desert}
            sizes="(max-width: 640px) calc(100vw - 32px), 50vw"
          />
        </div>
      </section>
      <section
        className="reference-film-section wrap"
        aria-label="Arizona wildlife video"
      >
        <ReferenceFilm />
      </section>
      <ContactCta />
    </>
  );
}

export function Work() {
  const id = new URLSearchParams(window.location.search).get("project");
  if (id) {
    const project = projects.find(
      (item) => item.id === id && item.status === "published",
    );
    return project ? <ProjectDetail project={project} /> : <NotFound />;
  }
  const published = projects.filter(
    (project) => project.status === "published",
  );
  return (
    <>
      <PageIntro
        title="Selected work"
        text="Original films, showreels, and observations from the field."
      />
      <section className="work-page wrap">
        {published.length ? (
          <ProjectGrid />
        ) : (
          <div className="work-empty">
            <div>
              <Eyebrow>A body of work, taking shape</Eyebrow>
              <h2>Original films are on their way.</h2>
              <p>
                A considered selection will appear here.
                <br />
                Only my own filmmaking will be presented in this space.
              </p>
              <TextLink page="contact">Discuss a documentary project</TextLink>
            </div>
          </div>
        )}
      </section>
      <ContactCta />
    </>
  );
}

export function About() {
  return (
    <>
      <PageIntro title="About" />
      <section className="about-grid wrap">
        <figure className="about-photo about-portrait">
          <img
            src={asset(site.portrait.src)}
            alt={site.portrait.alt}
            width={site.portrait.width}
            height={site.portrait.height}
            fetchPriority="high"
            decoding="async"
          />
        </figure>
        <div className="about-copy">
          <h2>{site.name}</h2>
          <Eyebrow>Wildlife & documentary cinematographer</Eyebrow>
          {site.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <section id="natural-history" className="about-philosophy">
            <h3>A patient approach</h3>
            <p>{site.philosophy}</p>
            <p>
              I’m interested in conservation and environmental storytelling,
              alongside select documentary and commercial projects that share
              this creative direction.
            </p>
          </section>
          <dl id="equipment" className="about-facts">
            <div>
              <dt>Education</dt>
              <dd>Bachelor’s degree in Digital Cinematography</dd>
            </div>
            <div>
              <dt>Camera</dt>
              <dd>{site.equipment.owned} · Currently owned</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{site.location}</dd>
            </div>
          </dl>
          <TextLink page="contact">Start a conversation</TextLink>
        </div>
      </section>
      <ContactCta />
    </>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setCopyError(false);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopyError(true);
    }
  }
  const socials = site.socials.filter((social) => social.url);
  return (
    <>
      <PageIntro
        title="Contact"
        text="For professional inquiries, documentary collaborations, and equipment partnerships."
      />
      <section className="contact-grid wrap">
        <div className="contact-direct">
          <Eyebrow>Get in touch</Eyebrow>
          {site.email ? (
            <>
              <a className="email-link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <button className="copy-button" onClick={copyEmail}>
                {copied ? (
                  <Check size={14} aria-hidden="true" />
                ) : (
                  <Copy size={14} aria-hidden="true" />
                )}
                {copied ? "Email copied" : "Copy email address"}
              </button>
              <p className="sr-only" role="status">
                {copied
                  ? "Email address copied"
                  : copyError
                    ? `Copy unavailable. Email ${site.email}`
                    : ""}
              </p>
            </>
          ) : (
            <div className="contact-placeholder">
              <p>Contact details coming soon.</p>
              <span>A direct inquiry address will appear here.</span>
            </div>
          )}
          <p className="location">{site.location}</p>
          {socials.length > 0 && (
            <div className="social-links">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="contact-context">
          <h2>Conversations I welcome</h2>
          <ul>
            {site.inquiries.map((inquiry) => (
              <li key={inquiry}>
                {site.email ? (
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(inquiry)}`}
                  >
                    {inquiry}
                  </a>
                ) : (
                  inquiry
                )}
              </li>
            ))}
          </ul>
          <section id="partnerships" className="partnership-note">
            <h3>Equipment partnerships</h3>
            <p>{site.partnership}</p>
          </section>
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  return (
    <section className="not-found wrap">
      <Eyebrow>404</Eyebrow>
      <h1>This page is out of frame.</h1>
      <TextLink page="">Return home</TextLink>
    </section>
  );
}
