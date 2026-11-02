import { useEffect } from "react";
import { Layout } from "./components/Layout";
import { About, Contact, Home, NotFound, Work } from "./pages";
import { currentPage, href } from "./lib";

function LegacyRedirect({ target }: { target: string }) {
  const [page, fragment] = target.split("#");
  const destination = `${href(page)}${fragment ? `#${fragment}` : ""}`;
  useEffect(() => {
    window.location.replace(destination);
  }, [destination]);
  return (
    <p className="wrap redirect-note">
      This page has moved. <a href={destination}>Continue</a>.
    </p>
  );
}
export default function App() {
  const pages: Record<string, typeof Home> = {
    "": Home,
    work: Work,
    about: About,
    contact: Contact,
  };
  const legacy: Record<string, string> = {
    wildlife: "about#natural-history",
    equipment: "about#equipment",
    partnerships: "contact#partnerships",
  };
  const current = currentPage();
  const Page = pages[current] || NotFound;
  return (
    <Layout>
      {legacy[current] ? <LegacyRedirect target={legacy[current]} /> : <Page />}
    </Layout>
  );
}
