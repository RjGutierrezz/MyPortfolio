import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProjectsCollection from "./pages/ProjectsCollection.jsx";
import LogoSection from './components/LogoSection.jsx'
import NavBar from './components/NavBar.jsx'
import Contact from './sections/Contact.jsx'
import ExperianceSection from './sections/ExperienceSection.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Footer from './sections/Footer.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import TechStack from './sections/TechStack.jsx'

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

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToHash />
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Hero />
              <ShowcaseSection />
              {/* <LogoSection/> */}
              <FeatureCards />
              <ExperianceSection />
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