import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProjectsCollection from "./pages/ProjectsCollection.jsx";
import LogoSection from './components/LogoSection.jsx'
import NavBar from './components/NavBar.jsx'
import Contact from './sections/Contact.jsx'
import ExperienceSection from './sections/ExperienceSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'
import GithubContributions from "./sections/GithubContributions.jsx";

const AppLayout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

const ScrollToHash = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    if (!hash) return;

    // wait for the next paint so the section exists in the DOM
    requestAnimationFrame(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [hash]);

  return null;
};

// added: sanitize Vite BASE_URL so it never becomes "/./"
const getBasename = () => {
  const raw = import.meta.env.BASE_URL || "/";
  // Normalize weird values like "/./" or "./"
  const cleaned = raw.replace(/^\.\//, "/").replace(/\/\.\//g, "/").replace(/\/{2,}/g, "/");
  // Ensure leading + trailing slash
  const withLeading = cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
  const withTrailing = withLeading.endsWith("/") ? withLeading : `${withLeading}/`;
  return withTrailing;
};

const App = () => {
  return (
    <BrowserRouter basename={getBasename()}>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Hero />
              <ShowcaseSection />
              <GithubContributions />
              {/* <LogoSection/> */}
              <FeatureCards />
              <ExperienceSection />
              <TechStack />
              <Contact />
            </AppLayout>
          }
        />

        <Route
          path="/project"
          element={
            <AppLayout>
              <ProjectsCollection />
            </AppLayout>
          }
        />

        <Route
          path="/projects"
          element={
            <AppLayout>
              <ProjectsCollection />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;