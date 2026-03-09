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
import Grainient from "./components/HeroModels/Grainient.jsx"; // added

const AppLayout = ({ children }) => (
  <>
    {/* global animated background */}
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
      aria-hidden="true"
    >
      <Grainient
        color1="#0e2a45"
        color2="#0b59a3"
        color3="#9ad9f5"
        timeSpeed={0.25}
        colorBalance={0}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
    </div>

    {/* changed: no overflow or transform on this wrapper — keeps fixed bg visible */}
    <div className="relative z-10 min-h-screen">
      <NavBar />
      {/* changed: constrain only the scrollable content, not the whole layout */}
      <main className="mx-auto w-full max-w-[1400px] px-4 md:px-8 xl:px-12">
        {children}
      </main>
      <Footer />
    </div>
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
  // changed: tag <html> with is-chrome so CSS can boost glass values only for Chrome
  React.useEffect(() => {
    const isChrome = /Chrome/.test(navigator.userAgent) && !/Edg|OPR/.test(navigator.userAgent);
    if (isChrome) document.documentElement.classList.add('is-chrome');
  }, []);

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