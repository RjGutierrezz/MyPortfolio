import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ASSET_BASE = import.meta.env.BASE_URL;
const asset = (p) =>
  `${ASSET_BASE}${String(p)
    .replace(/^\/+/, "")
    .replace(/^assets\//, "")}`;

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring (0, maxLength) + "..." : text;
}

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const studyBreakRef = useRef(null);
  const potteryRef = useRef(null);
  const libraryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 3 }
    );

    // Animations for each app showcase
    const cards = [studyBreakRef.current, potteryRef.current, libraryRef.current];

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
        <div className="showcase-header md:mb-10 flex items-center justify-between w-full text-white-50">
          <div className="flex items-center gap-3">
            <span
              className="icon-mask size-6 md:size-7"
              style={{ ["--icon-url"]: `url(${asset("images/starlogo.png")})` }}
              aria-hidden="true"
            />
            <h3 className="text-xl md:text-3xl font-bold">
              Featured Projects
            </h3>
          </div>

          <Link to="/project" className="showcase-cta learn-more-fill">
            View all
          </Link>
        </div>

        <div className="showcaselayout">

          {/* Disregarding this, not a big fan */}
          {/* <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src={asset("images/project1.png")} alt="Pottery WebApp" />
            </div>
            <div className="text-content showcase-text-with-cta">
              <h2>
                Tailored WebApp platform built under our sponsors preferences to display, manage, and promote his pottery
              </h2>
              <p className="text-white-50 md:text-xl">
                A full-stack web application built with Next.js (React + TypeScript), CSS, and Supabase, delivering a fast, scalable, and user-friendly experience.
              </p>
              <a href="https://github.com/jjmendez819/sales-app/tree/main" target="_blank" className="showcase-cta learn-more-fill">
                LEARN MORE
              </a>
            </div>
          </div> */}

          <div className="project-list-wrapper overflow-hidden">

            {/* StudyBreak-Bite */}
            <div className="project" ref={studyBreakRef}>
              <div className="image-wrapper bg-[#E0E1DD]">
                <img
                  src={asset("images/appmockup.png")}
                  alt="StudyBreak-Bite"
                />
              </div>
              <div className="showcase-text-with-cta text-white-100">
                <h2>StudyBreak-Bite</h2>
                
                <p className="text-white-50 md:text-lg">
                  {truncateText ("A mobile food discovery and delivery app built for university students, focused on saving time and minimizing interruptions during busy academic schedules.", 140)}
                </p>
                <a href="https://github.com/RjGutierrezz/StudyBreak-Bite.git" target="_blank" className="showcase-cta learn-more-fill">
                  LEARN MORE
                </a>
              </div>
            </div>

            {/* Pottery WebApp*/}
            <div className="project" ref={potteryRef}>
              <div className="image-wrapper bg-[#E0E1DD]">
                <img 
                  src={asset("images/project1.png")}
                  alt="Pottery WebApp" />
              </div>
              <div className="showcase-text-with-cta text-white-100">
                <h2>Pottery WebApp</h2>
                
                <p className="text-white-50 md:text-lg">
                  {truncateText("A full-stack web application built with Next.js (React + TypeScript), CSS, and Supabase, delivering a fast, scalable, and user-friendly experience.", 140)}
                </p>
                <a href="https://github.com/jjmendez819/sales-app/tree/main" target="_blank" className="showcase-cta learn-more-fill">
                  LEARN MORE
                </a>
              </div>
            </div>

            {/* Project In-Progress
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#dec0f1]">
                <img 
                  src={asset("images/working.png")}
                  alt="YC Directory App" />
              </div>
              <div className="showcase-text-with-cta text-white-100">
                <h2>In progress</h2>
                
                <p className="text-white-50 md:text-lg">
                  {truncateText("Coming soon", 140)}
                </p>
                <a href="" className="showcase-cta learn-more-fill">
                  LEARN MORE
                </a>
              </div>
            </div> */}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
