import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 3 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Pottery WebApp" />
            </div>
            <div className="text-content showcase-text-with-cta">
              <h2>
                Tailored WebApp platform built under ours sponsors preferences to display, manage, and promote his pottery
              </h2>
              <p className="text-white-50 md:text-xl">
                A fullstack app built with React Typescript, CSS, and Supabase for a fast,
                user-friendly experience.
              </p>
              <a href="https://github.com/jjmendez819/sales-app/tree/main" target="_blank" className="showcase-cta learn-more-fill">
                LEARN MORE
              </a>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#a6c9e7]">
                <img
                  src="/images/working.png"
                  alt="Library Management Platform"
                />
              </div>
              <div className="showcase-text-with-cta">
                <h2>In Progress</h2>
                <a href="" className="showcase-cta learn-more-fill">
                  LEARN MORE
                </a>
              </div>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#a6c9e7]">
                <img 
                  src="/images/working.png" 
                  alt="YC Directory App" />
              </div>
              <div className="showcase-text-with-cta">
                <h2>In Progress</h2>
                <a href="" className="showcase-cta learn-more-fill">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;