import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Minus, Plus } from "lucide-react";
import { useState } from "react";
import type { ReactNode } from "react";
import { href } from "../lib";
import { site } from "../content/site";

export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduce ? undefined : { opacity: [0.5, 1], y: [16, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({
  children,
  number,
}: {
  children: ReactNode;
  number?: string;
}) {
  return (
    <p className="eyebrow">
      {number && <span className="section-number">{number}</span>}
      {children}
    </p>
  );
}

export function TextLink({
  children,
  page,
  className = "",
}: {
  children: ReactNode;
  page: string;
  className?: string;
}) {
  return (
    <a className={`text-link ${className}`} href={href(page)}>
      {children}
      <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
    </a>
  );
}

export function PageIntro({
  number,
  label,
  title,
  text,
  italic,
}: {
  number: string;
  label: string;
  title: string;
  text?: string;
  italic?: string;
}) {
  return (
    <header className="page-intro wrap">
      <Eyebrow number={number}>{label}</Eyebrow>
      <h1>
        {title}
        {italic && (
          <>
            <br />
            <em>{italic}</em>
          </>
        )}
      </h1>
      {text && <p className="intro-description">{text}</p>}
    </header>
  );
}

export function ContactCta({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`contact-cta ${compact ? "compact" : ""}`}>
      <div className="wrap">
        <Eyebrow>Make something meaningful</Eyebrow>
        <a className="big-contact" href={href("contact")}>
          <span>
            Let’s make <br />
            <em>the next frame.</em>
          </span>
          <span className="round-arrow">
            <ArrowUpRight aria-hidden="true" strokeWidth={0.8} />
          </span>
        </a>
        <div className="cta-bottom">
          <span>Films / Commissions / Collaborations</span>
          <span>
            {site.location}
            <span className="status-dot" /> Open to conversations
          </span>
        </div>
      </div>
    </section>
  );
}

export function ScrollCue({ target = "#selected-work" }: { target?: string }) {
  return (
    <a className="scroll-cue" href={target}>
      <ArrowDown size={16} aria-hidden="true" />
      <span>Scroll to discover</span>
    </a>
  );
}

export function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="accordion">
      <h3>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={`answer-${title.replaceAll(" ", "-")}`}
        >
          {title}
          {open ? (
            <Minus size={20} aria-hidden="true" />
          ) : (
            <Plus size={20} aria-hidden="true" />
          )}
        </button>
      </h3>
      <div
        id={`answer-${title.replaceAll(" ", "-")}`}
        hidden={!open}
        className="accordion-answer"
      >
        {children}
      </div>
    </div>
  );
}
