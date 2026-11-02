import { MotionConfig } from "motion/react";
import { Layout } from "./components/Layout";
import {
  About,
  Contact,
  Equipment,
  Home,
  NotFound,
  Partnerships,
  Wildlife,
  Work,
} from "./pages";
import { currentPage } from "./lib";

export default function App() {
  const pages: Record<string, typeof Home> = {
    "": Home,
    work: Work,
    about: About,
    wildlife: Wildlife,
    equipment: Equipment,
    partnerships: Partnerships,
    contact: Contact,
  };
  const Page = pages[currentPage()] || NotFound;
  return (
    <MotionConfig reducedMotion="user">
      <Layout>
        <Page />
      </Layout>
    </MotionConfig>
  );
}
