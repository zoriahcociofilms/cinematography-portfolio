import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { site, projects } from "./content/site";
import { asset, href } from "./lib";
import { Artwork, AssetLabel, HeroMedia } from "./components/Media";
import { ProjectGrid, ProjectDetail } from "./components/Projects";
import {
  Accordion,
  ContactCta,
  Eyebrow,
  PageIntro,
  Reveal,
  ScrollCue,
  TextLink,
} from "./components/Shared";

export function Home() {
  return (
    <>
      <section className="hero">
        <HeroMedia />
        <div className="hero-content wrap">
          <div className="hero-kicker">
            <span className="status-dot" />
            <span>Independent cinematographer</span>
            <span className="hero-place">Arizona, USA / Looking outward</span>
          </div>
          <h1>
            I wait for the world
            <br className="desktop-break" /> to <em>forget</em>
            <br />
            the camera<span className="title-period">.</span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-credit">
              <strong>{site.name}</strong>
              <span>{site.role}</span>
            </div>
            <a href={href("work")} className="hero-work-link">
              <span>Explore selected work</span>
              <span className="round-arrow">
                <ArrowUpRight size={24} strokeWidth={1} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
        <div className="hero-foot wrap">
          <ScrollCue />
          {site.heroMedia.temporary && <AssetLabel />}
        </div>
        <span className="hero-vertical" aria-hidden="true">
          Light / Life / The in-between
        </span>
      </section>
      <div className="discipline-strip wrap">
        <span>Wildlife & natural history</span>
        <span className="small-star" aria-hidden="true">
          ✳
        </span>
        <span>Documentary</span>
        <span className="small-star" aria-hidden="true">
          ✳
        </span>
        <span>Commercial filmmaking</span>
        <span className="strip-end">A considered point of view.</span>
      </div>
      <section id="selected-work" className="work-section wrap section-space">
        <Reveal>
          <div className="section-heading">
            <div>
              <Eyebrow number="01">The moving image</Eyebrow>
              <h2>
                Stories take <em>shape.</em>
              </h2>
            </div>
            <TextLink page="work">Selected work</TextLink>
          </div>
          <p className="work-intro">
            A home for the moments worth staying with.
            <br />
            <span>
              Original films will be added here. The studies below are temporary
              artwork.
            </span>
          </p>
        </Reveal>
        <ProjectGrid limit={3} />
      </section>
      <section className="philosophy-section">
        <div className="wrap philosophy-grid">
          <div className="philosophy-art">
            <Artwork
              src="media/placeholders/light-04.svg"
              alt="Abstract reflected light in silver and green, temporary design artwork"
            />
            <AssetLabel />
            <span className="image-side-note">
              An exercise in looking closer.
            </span>
          </div>
          <Reveal className="philosophy-copy">
            <Eyebrow number="02">Behind the frame</Eyebrow>
            <h2>
              A quieter
              <br />
              way of <em>seeing.</em>
            </h2>
            <p>{site.philosophyText}</p>
            <TextLink page="about">Meet the filmmaker</TextLink>
          </Reveal>
        </div>
      </section>
      <section className="field-section wrap section-space">
        <div className="section-heading">
          <Eyebrow number="03">Drawn to the wild</Eyebrow>
          <span className="tiny-label">Attention is the first step.</span>
        </div>
        <Reveal>
          <h2 className="field-statement">
            The smallest movement.
            <br />
            The <em>whole</em> story.
          </h2>
          <div className="field-bottom">
            <span className="field-mark" aria-hidden="true">
              ( field / notes )
            </span>
            <div>
              <p>
                Intimate behaviors. Living textures. The quiet connection
                between an animal and its habitat. This is the natural world I
                want to bring into focus.
              </p>
              <TextLink page="wildlife">Wildlife & natural history</TextLink>
            </div>
          </div>
        </Reveal>
      </section>
      <ContactCta />
    </>
  );
}

export function Work() {
  const id = new URLSearchParams(window.location.search).get("project");
  if (id) {
    const project = projects.find((item) => item.id === id);
    if (project)
      return (
        <>
          <ProjectDetail project={project} />
          <ContactCta compact />
        </>
      );
    return <NotFound />;
  }
  return (
    <>
      <PageIntro
        number="01"
        label="Selected work"
        title="A frame is only"
        italic="the beginning."
        text="A growing home for original films, visual stories, and the process behind them."
      />
      <section className="wrap work-page">
        <div className="portfolio-note">
          <span className="status-dot" />
          <p>
            Original projects are being added. These clearly marked portfolio
            slots use abstract design artwork, with no completed films or
            credits implied.
          </p>
        </div>
        <ProjectGrid />
      </section>
      <ContactCta />
    </>
  );
}

export function About() {
  return (
    <>
      <PageIntro
        number="02"
        label="About the filmmaker"
        title="A patient eye."
        italic="An intentional frame."
      />
      <section className="wrap about-grid">
        <figure className="portrait-study">
          <Artwork
            src="media/placeholders/light-03.svg"
            alt="Abstract amber and charcoal light study used in place of an original filmmaker portrait"
            priority
          />
          <span className="portrait-initials" aria-hidden="true">
            ZC.
          </span>
          <AssetLabel>Portrait space · Temporary artwork</AssetLabel>
        </figure>
        <div className="about-copy">
          <Eyebrow>Zoriah Cocio / Arizona, USA</Eyebrow>
          {site.biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="signature" aria-hidden="true">
            Zoriah Cocio
          </div>
          <dl className="about-facts">
            <div>
              <dt>Foundation</dt>
              <dd>
                Bachelor’s degree
                <br />
                Fine Arts / Digital Cinematography
              </dd>
            </div>
            <div>
              <dt>Camera</dt>
              <dd>Sony FX6</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Wildlife · Documentary · Commercial</dd>
            </div>
          </dl>
        </div>
      </section>
      <section className="about-philosophy wrap section-space">
        <Eyebrow>On the way I see</Eyebrow>
        <Reveal>
          <blockquote>
            “The image begins
            <br />
            with <em>attention.</em>”
          </blockquote>
        </Reveal>
        <div className="about-philosophy-bottom">
          <p>{site.philosophyText}</p>
          <TextLink page="wildlife">Into the natural world</TextLink>
        </div>
      </section>
      <ContactCta />
    </>
  );
}

export function Wildlife() {
  return (
    <>
      <PageIntro
        number="03"
        label="Wildlife & natural history"
        title="There is a whole world"
        italic="in a small moment."
        text={site.wildlife.description}
      />
      <section className="wildlife-banner wrap">
        <div className="wide-art">
          <Artwork
            src="media/placeholders/light-02.svg"
            alt="Abstract green light and shadow, temporary design artwork for future original wildlife imagery"
            priority
          />
          <span className="banner-words">
            Look closer.
            <br />
            <em>Stay longer.</em>
          </span>
          <AssetLabel />
        </div>
        <div className="image-caption">
          <span>Natural history / A developing body of work</span>
          <span>Original field imagery to come</span>
        </div>
      </section>
      <section className="wrap section-space principles">
        <div>
          <Eyebrow>The approach</Eyebrow>
          <h2>
            Observation
            <br />
            before <em>the image.</em>
          </h2>
          <p className="quiet-note">
            These principles describe the practice I’m building. Original
            wildlife projects and field material will be added as they become
            available.
          </p>
        </div>
        <div>
          {site.wildlife.principles.map((item, index) => (
            <Reveal key={item.title} className="principle">
              <span className="section-number">0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="field-next">
        <div className="wrap field-next-grid">
          <Eyebrow>The next chapter</Eyebrow>
          <div>
            <h2>
              A longer view.
              <br />
              <em>A closer understanding.</em>
            </h2>
            <p>
              Long-lens cinematography would open new possibilities for
              observing animals from a respectful distance. I’m exploring the
              next step through professional equipment partnerships.
            </p>
            <TextLink page="partnerships">Explore a collaboration</TextLink>
          </div>
        </div>
      </section>
      <ContactCta compact />
    </>
  );
}

export function Equipment() {
  const owned = site.equipment.owned[0];
  const seeking = site.equipment.seeking[0];
  return (
    <>
      <PageIntro
        number="04"
        label="Equipment & production"
        title="The tools serve"
        italic="the story."
        text="A focused camera platform. A thoughtful next step. Equipment chosen for the way I want to see."
      />
      <section className="wrap gear-section">
        <div className="gear-label">
          <Eyebrow>01 / Currently owned</Eyebrow>
          <span className="ownership-tag">
            <span className="status-dot" />
            In my kit
          </span>
        </div>
        <div className="gear-grid">
          <div
            className="gear-type-art"
            aria-label="Sony FX6 typographic equipment feature"
          >
            <span className="gear-manufacturer">Sony / Cinema Line</span>
            <span className="gear-big">
              FX6<span>.</span>
            </span>
            <span className="gear-art-caption">Full-frame / Moving image</span>
          </div>
          <div className="gear-copy">
            <Eyebrow>{owned.type}</Eyebrow>
            <h2>{owned.name}</h2>
            <p>{owned.text}</p>
            <dl className="gear-specs">
              {owned.specs.map((spec, index) => (
                <div key={spec}>
                  <dt>0{index + 1}</dt>
                  <dd>{spec}</dd>
                </div>
              ))}
            </dl>
            <a
              className="source-link"
              href={owned.source}
              target="_blank"
              rel="noreferrer"
            >
              Camera specifications / Sony
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="wrap gear-section seeking-section">
        <div className="gear-label">
          <Eyebrow>02 / Seeking through partnership</Eyebrow>
          <span className="ownership-tag unowned">Not currently owned</span>
        </div>
        <div className="seeking-grid">
          <div>
            <span className="lens-range">
              400<span>—</span>800<span className="lens-mm">mm</span>
            </span>
            <p className="tiny-label">A longer view into the natural world.</p>
          </div>
          <div className="gear-copy">
            <h2>{seeking.name}</h2>
            <p>{seeking.text}</p>
            <TextLink page="partnerships">
              Discuss an equipment partnership
            </TextLink>
            <a
              className="source-link"
              href={seeking.source}
              target="_blank"
              rel="noreferrer"
            >
              Lens information / Sony
              <ExternalLink size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <section className="production-note wrap">
        <Eyebrow>A production starts with the brief</Eyebrow>
        <p>
          Let’s discuss the story, location, schedule, and the requirements of
          the shoot. Any additional equipment and production needs can be scoped
          around the project.
        </p>
        <TextLink page="contact">Start a project conversation</TextLink>
      </section>
      <ContactCta compact />
    </>
  );
}

export function Partnerships() {
  return (
    <>
      <PageIntro
        number="05"
        label="Collaborations & partnerships"
        title="Good stories begin"
        italic="with a conversation."
        text={site.partnerships.intro}
      />
      <section className="wrap collaboration-types">
        {site.partnerships.types.map((type, index) => (
          <Reveal key={type.title} className="collaboration-row">
            <span className="section-number">0{index + 1}</span>
            <h2>{type.title}</h2>
            <p>{type.text}</p>
          </Reveal>
        ))}
      </section>
      <section className="partnership-feature">
        <div className="wrap partnership-feature-grid">
          <div>
            <Eyebrow>In focus / An equipment partnership</Eyebrow>
            <h2>
              A longer lens.
              <br />
              <em>A shared perspective.</em>
            </h2>
            <span className="partnership-range">400 — 800mm</span>
          </div>
          <div>
            <span className="ownership-tag unowned">
              Exploring a partnership · Not currently owned
            </span>
            <p>{site.partnerships.equipment}</p>
            <p className="quiet-note">
              Sony FE 400–800mm f/6.3–8 G OSS
              <br />
              For an expanding wildlife cinematography practice.
            </p>
            <TextLink page="contact">Start a partnership conversation</TextLink>
          </div>
        </div>
      </section>
      <section className="wrap section-space partnership-process">
        <div>
          <Eyebrow>A considered collaboration</Eyebrow>
          <h2>
            Clear intentions.
            <br />
            <em>Shared possibilities.</em>
          </h2>
        </div>
        <div>
          <Accordion title="Who I’m interested in working with">
            <p>
              Camera manufacturers, production companies, wildlife
              organizations, equipment partners, commercial clients, and
              independent documentary filmmakers.
            </p>
          </Accordion>
          <Accordion title="How we can shape a project">
            <p>
              Start with the story and the shared objective. We can discuss a
              suitable project, an achievable production scope, original
              creative deliverables, usage, and a working timeline together.
            </p>
          </Accordion>
          <Accordion title="What to include in an inquiry">
            <p>
              A short introduction, the opportunity or story you have in mind,
              your preferred timing, and any relevant production or equipment
              details. There is no need for a finished brief to start a
              conversation.
            </p>
          </Accordion>
        </div>
      </section>
      <ContactCta />
    </>
  );
}

export function Contact() {
  const [subject, setSubject] = useState("Project inquiry");
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const topics = [
    "Project inquiry",
    "Documentary collaboration",
    "Equipment partnership",
    "Commercial commission",
  ];
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
  return (
    <>
      <PageIntro
        number="06"
        label="Contact"
        title="Every story starts"
        italic="somewhere."
        text="A film you want to make. A story you can’t stop thinking about. An opportunity to see something differently. Let’s begin there."
      />
      <section className="wrap contact-grid">
        <div className="contact-details">
          <Eyebrow>Direct conversation</Eyebrow>
          {site.email ? (
            <>
              <a className="email-link" href={`mailto:${site.email}`}>
                {site.email}
                <ArrowUpRight aria-hidden="true" />
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
              <Mail size={26} strokeWidth={1} aria-hidden="true" />
              <p>
                Email details coming soon
                <span>Direct contact will be available here.</span>
              </p>
            </div>
          )}
          <div className="social-links">
            {site.socials.map((social) =>
              social.url ? (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : (
                <span key={social.label}>
                  {social.label}
                  <small>Link coming soon</small>
                </span>
              ),
            )}
          </div>
          <div className="contact-location">
            <Eyebrow>Based in</Eyebrow>
            <p>{site.location}</p>
            <span className="tiny-label">
              Wildlife / Documentary / Commercial
            </span>
          </div>
        </div>
        <div className="inquiry-panel">
          <Eyebrow>What do you have in mind?</Eyebrow>
          <div
            className="inquiry-options"
            role="group"
            aria-label="Inquiry topic"
          >
            {topics.map((topic) => (
              <button
                key={topic}
                aria-pressed={subject === topic}
                onClick={() => setSubject(topic)}
              >
                {topic}
                <ArrowUpRight size={17} strokeWidth={1.2} aria-hidden="true" />
              </button>
            ))}
          </div>
          <p>
            A brief introduction, an idea, and a little context are all we need
            to start.
          </p>
          {site.email ? (
            <a
              className="solid-button"
              href={`mailto:${site.email}?subject=${encodeURIComponent(subject)}`}
            >
              Write an inquiry
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          ) : (
            <div className="contact-pending">
              <span className="status-dot" />
              Inquiry email will be available soon.
            </div>
          )}
        </div>
      </section>
      <div className="contact-signoff wrap">
        <span>Until the next frame.</span>
        <em>Zoriah</em>
      </div>
    </>
  );
}

export function NotFound() {
  return (
    <section className="wrap not-found">
      <Eyebrow>Out of frame / 404</Eyebrow>
      <h1>
        Let’s find
        <br />
        <em>the story.</em>
      </h1>
      <p>This page or project isn’t here.</p>
      <TextLink page="">Return home</TextLink>
      <img className="sr-only" src={asset("favicon.svg")} alt="" />
    </section>
  );
}
