import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { href } from "../lib";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
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
      <ArrowUpRight size={15} strokeWidth={1.4} aria-hidden="true" />
    </a>
  );
}
export function PageIntro({ title, text }: { title: string; text?: string }) {
  return (
    <header className="page-intro wrap">
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </header>
  );
}
export function ContactCta() {
  return (
    <div className="contact-cta wrap">
      <p>For stories of the natural world.</p>
      <TextLink page="contact">Get in touch</TextLink>
    </div>
  );
}
