import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const ASSET_BASE = import.meta.env.BASE_URL;
const asset = (p) => `${ASSET_BASE}${String(p).replace(/^\/+/, "")}`;

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const studyBreakRef = useRef(null);
  const potteryRef = useRef(null);

  const [activeProject, setActiveProject] = useState(null);

  const featured = [
    {
      id: "studybreak-bite",
      title: "StudyBreak-Bite",
      imgPath: asset("images/appmockup.png"),
      imgAlt: "StudyBreak-Bite",
      imgBgClass: "bg-[#E0E1DD]",
      description:
        "A mobile food discovery and delivery app built for university students, focused on saving time and minimizing interruptions during busy academic schedules.",
      href: "https://github.com/RjGutierrezz/StudyBreak-Bite.git",
      techStack: ["React Native", "JavaScript", "Expo"],
    },
    {
      id: "pottery-webapp",
      title: "Pottery WebApp",
      imgPath: asset("images/project1.png"),
      imgAlt: "Pottery WebApp",
      imgBgClass: "bg-[#E0E1DD]",
      description:
        "A full-stack web application built with Next.js (React + TypeScript), CSS, and Supabase, delivering a fast, scalable, and user-friendly experience.",
      href: "https://github.com/jjmendez819/sales-app/tree/main",
      techStack: ["Next.js", "TypeScript", "Supabase"],
    },
  ];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!activeProject) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [activeProject]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 3 }
    );

    const cards = [studyBreakRef.current, potteryRef.current];

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
              style={{
                color: "#f2e9e4",
                ["--icon-url"]: 'url("/images/starlogo.png")',
              }}
              aria-hidden="true"
            />
            <h3 className="text-xl md:text-3xl font-bold">Featured Projects</h3>
          </div>

          <Link to="/projects" className="showcase-cta learn-more-fill">
            View all
          </Link>
        </div>

        <div className="showcaselayout">
          <div className="project-list-wrapper overflow-hidden">
            <div
              className="project"
              ref={studyBreakRef}
              role="button"
              tabIndex={0}
              onClick={() => setActiveProject(featured[0])}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveProject(featured[0]);
                }
              }}
            >
              <div className={`image-wrapper ${featured[0].imgBgClass}`}>
                <img src={featured[0].imgPath} alt={featured[0].imgAlt} />
              </div>

              <div className="showcase-text-with-cta text-white-100">
                <h2>{featured[0].title}</h2>

                <p className="text-white-50 md:text-lg">
                  {truncateText(featured[0].description, 140)}
                </p>

                <div className="mt-6 flex items-center gap-2 text-white-50/80">
                  <span
                    className="icon-mask size-4 md:size-5"
                    style={{ ["--icon-url"]: 'url("/images/tag.png")' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm md:text-base font-semibold">
                    Tech Stack
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {featured[0].techStack.map((t) => (
                    <span
                      key={`${featured[0].id}-${t}`}
                      className="text-xs md:text-xs px-3 py-1 rounded-sm bg-[#0D1B2A] text-white-50 border border-transparent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="project"
              ref={potteryRef}
              role="button"
              tabIndex={0}
              onClick={() => setActiveProject(featured[1])}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveProject(featured[1]);
                }
              }}
            >
              <div className={`image-wrapper ${featured[1].imgBgClass}`}>
                <img src={featured[1].imgPath} alt={featured[1].imgAlt} />
              </div>

              <div className="showcase-text-with-cta text-white-100">
                <h2>{featured[1].title}</h2>

                <p className="text-white-50 md:text-lg">
                  {truncateText(featured[1].description, 140)}
                </p>

                <div className="mt-6 flex items-center gap-2 text-white-50/80">
                  <span
                    className="icon-mask size-4 md:size-5"
                    style={{ ["--icon-url"]: 'url("/images/tag.png")' }}
                    aria-hidden="true"
                  />
                  <span className="text-sm md:text-base font-semibold">
                    Tech Stack
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {featured[1].techStack.map((t) => (
                    <span
                      key={`${featured[1].id}-${t}`}
                       className="text-xs md:text-xs px-3 py-1 rounded-sm bg-[#0D1B2A] text-white-50 border border-transparent">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {activeProject && (
          <div
            className="project-modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeProject.title} details`}
            onClick={() => setActiveProject(null)}
          >
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="project-modal-close"
                aria-label="Close project details"
                onClick={() => setActiveProject(null)}
              >
                <span
                  className="icon-mask size-5 md:size-6"
                  style={{ ["--icon-url"]: 'url("/images/close.png")' }}
                  aria-hidden="true"
                />
              </button>

              <div className="project-modal-header">
                <h2 className="text-white-100 text-2xl md:text-3xl font-bold">
                  {activeProject.title}
                </h2>
              </div>

              <div
                className={`project-modal-image image-wrapper ${activeProject.imgBgClass} xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0`}
              >
                <img
                  src={activeProject.imgPath}
                  alt={activeProject.imgAlt || activeProject.title}
                  className="w-full h-full object-contain rounded-xl p-10"
                />
              </div>

              <p className="text-white-50 md:text-lg mt-5">
                {activeProject.description || ""}
              </p>

              {Array.isArray(activeProject.techStack) &&
                activeProject.techStack.length > 0 && (
                  <>
                    <div className="mt-6 flex items-center gap-2 text-white-50/80">
                      <span
                        className="icon-mask size-4 md:size-5"
                        style={{ ["--icon-url"]: 'url("/images/tag.png")' }}
                        aria-hidden="true"
                      />
                      <span className="text-sm md:text-base font-semibold">
                        Tech Stack
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeProject.techStack.map((t) => (
                        <span
                          key={`${activeProject.id}-modal-${t}`}
                      className="text-xs md:text-xs px-3 py-1 rounded-sm bg-[#0D1B2A] text-white-50 border border-transparent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                )}

              <div className="mt-6 flex gap-4">
                <a
                  href={activeProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-cta learn-more-fill"
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowcaseSection;
