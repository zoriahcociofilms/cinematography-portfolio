import { useState } from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { projects } from "../content/site";
import type { Project } from "../content/site";
import { Artwork, AssetLabel, FilmPlayer, Gallery } from "./Media";
import { Eyebrow, TextLink } from "./Shared";
import { href } from "../lib";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="project-card">
      <a
        href={`${href("work")}?project=${encodeURIComponent(project.id)}`}
        className="project-image"
        aria-label={`Explore ${project.title}${project.status === "placeholder" ? " — project placeholder" : ""}`}
      >
        <Artwork src={project.cover.src} alt={project.cover.alt} />
        {project.cover.temporary && (
          <AssetLabel>Temporary design artwork</AssetLabel>
        )}
        <span className="project-open">
          <ArrowUpRight size={24} strokeWidth={1.25} aria-hidden="true" />
        </span>
      </a>
      <div className="project-caption">
        <span className="project-index">0{index + 1}</span>
        <div>
          <p className="project-category">
            {project.category} /{" "}
            {project.status === "placeholder"
              ? "Original film to come"
              : project.year}
          </p>
          <h3>
            <a
              href={`${href("work")}?project=${encodeURIComponent(project.id)}`}
            >
              {project.title}
            </a>
          </h3>
          <p>{project.summary}</p>
        </div>
      </div>
    </article>
  );
}

export function ProjectGrid({ limit }: { limit?: number }) {
  const [filter, setFilter] = useState("All");
  const options = ["All", "Wildlife", "Documentary", "Commercial"];
  const entries = (
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter)
  ).slice(0, limit);
  return (
    <>
      {!limit && (
        <div className="work-filters" role="group" aria-label="Filter projects">
          {options.map((option) => (
            <button
              key={option}
              aria-pressed={filter === option}
              onClick={() => setFilter(option)}
            >
              {option}
              {option === "All" && (
                <sup>{projects.length.toString().padStart(2, "0")}</sup>
              )}
            </button>
          ))}
        </div>
      )}
      <div
        className={`project-grid ${limit ? "home-projects" : ""}`}
        aria-live="polite"
      >
        {entries.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={projects.indexOf(project)}
          />
        ))}
      </div>
    </>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="project-detail wrap">
      <a className="back-link" href={href("work")}>
        <ArrowLeft size={16} aria-hidden="true" /> All selected work
      </a>
      <header>
        <Eyebrow>
          {project.category} /{" "}
          {project.status === "placeholder"
            ? "Project placeholder"
            : project.year}
        </Eyebrow>
        <h1>{project.title}</h1>
        <p className="intro-description">{project.summary}</p>
      </header>
      {project.film ? (
        <FilmPlayer film={project.film} />
      ) : (
        <div className="project-detail-art">
          <Artwork src={project.cover.src} alt={project.cover.alt} priority />
          {project.cover.temporary && <AssetLabel />}
          <span className="no-film-label">Original film to come</span>
        </div>
      )}
      <div className="project-context">
        <Eyebrow>
          About this {project.status === "placeholder" ? "space" : "film"}
        </Eyebrow>
        <div>
          <p className="body-large">{project.description}</p>
          {project.status === "placeholder" && (
            <p className="quiet-note">
              This is an editable portfolio slot. No completed project, client,
              or film credit is implied.
            </p>
          )}
          {(project.role ||
            project.location ||
            project.technical.length > 0) && (
            <dl className="technical-grid">
              {project.role && (
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
              )}
              {project.location && (
                <div>
                  <dt>Location</dt>
                  <dd>{project.location}</dd>
                </div>
              )}
              {project.technical.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
      {project.gallery.length > 0 && (
        <section className="detail-section">
          <Eyebrow>
            {project.status === "placeholder"
              ? "Gallery demonstration / Temporary artwork"
              : "Frames from the film"}
          </Eyebrow>
          <Gallery stills={project.gallery} />
        </section>
      )}
      {project.behindTheScenes && (
        <section className="project-context">
          <Eyebrow>Behind the scenes</Eyebrow>
          <p className="body-large">{project.behindTheScenes}</p>
        </section>
      )}
      <div className="detail-footer">
        <TextLink page="contact">Discuss a project</TextLink>
        <TextLink page="work">Explore the portfolio</TextLink>
      </div>
    </article>
  );
}
