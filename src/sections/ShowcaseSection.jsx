import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { FiArrowLeft, FiCalendar, FiExternalLink, FiGithub } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import GlareHover from "../components/HeroModels/GlareHover.jsx";
import Carousel from "../components/HeroModels/Carousel.jsx";
import GlassSurface from "../components/HeroModels/GlassSurface.jsx";

gsap.registerPlugin(ScrollTrigger);

const ASSET_BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => {
  const base = ASSET_BASE.startsWith("/") ? ASSET_BASE : `/${ASSET_BASE}`;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${String(p).replace(/^\/+/, "")}`;
};

const truncateText = (text, maxLength) =>
  text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

const TECH_BADGE_COLORS = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ffc6ff", "#ff9ed7"];

const pickTechColor = (label) => {
  const s = String(label ?? "");
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const idx = Math.abs(h) % TECH_BADGE_COLORS.length;
  return TECH_BADGE_COLORS[idx];
};

const featured = [
  {
    id: "studybreak-bite",
    title: "StudyBreak-Bite",
    date: "2025",
    imgPath: asset("images/appmockup.png"),
    imgAlt: "StudyBreak-Bite",
    imgBgClass: "bg-[#E0E1DD]",
    description:
      "A [[mobile|accent]] food discovery and delivery app built for university students, focused on saving time and minimizing interruptions during busy academic schedules.",
    href: "https://github.com/RjGutierrezz/StudyBreak-Bite.git",
    techStack: ["React Native", "JavaScript", "TypeScript", "Expo", "Expo Router", "Tailwind CSS"],
    gallery: [asset("images/appmockup.png")],
    liveHref: null,
    disabled: false,
  },
  {
    id: "pottery-webapp",
    title: "Pottery WebApp",
    date: "2025",
    imgPath: asset("images/project1.png"),
    imgAlt: "Pottery WebApp",
    imgBgClass: "bg-[#E0E1DD]",
    description:
      "A [[full-stack|accent]] web application built with Next.js (React + TypeScript), CSS, and Supabase, delivering a fast, scalable, and user-friendly experience.",
    href: "https://github.com/jjmendez819/sales-app/tree/main",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    gallery: [asset("images/project1.png")],
    liveHref: null,
    disabled: false,
  },
];

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const studyBreakRef = useRef(null);
  const potteryRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const [activeProjectId, setActiveProjectId] = useState(null);

  const activeProject = useMemo(
    () => featured.find((p) => p.id === activeProjectId) || null,
    [activeProjectId]
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveProjectId(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!activeProjectId) return;

    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, [activeProjectId, reduceMotion]);

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

  const renderMarkedText = (text) => {
    const s = String(text ?? "");
    const parts = [];
    const re = /\[\[([\s\S]+?)\|accent\]\]/g;

    let last = 0;
    let match = re.exec(s);
    while (match) {
      if (match.index > last) {
        parts.push({ type: "text", value: s.slice(last, match.index), key: `text-${last}` });
      }
      parts.push({ type: "mark", value: match[1], key: `mark-${match.index}-${match[1]}` });
      last = match.index + match[0].length;
      match = re.exec(s);
    }
    if (last < s.length) parts.push({ type: "text", value: s.slice(last), key: `text-${last}` });

    return parts.map((part) => {
      if (part.type === "text") return <React.Fragment key={part.key}>{part.value}</React.Fragment>;
      return (
        <span key={part.key} className="text-[#aaffb8] font-medium">
          {part.value}
        </span>
      );
    });
  };

  const stripMarks = (text) => String(text ?? "").replace(/\[\[([\s\S]+?)\|accent\]\]/g, "$1");

  const pageTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeInOut" };

  const sharedTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeInOut" };

  const heroBaseWidth =
    typeof window !== "undefined"
      ? window.innerWidth < 768
        ? Math.max(280, Math.min(window.innerWidth - 32, 380))
        : Math.min(750, window.innerWidth - 160)
      : 320;

  const renderProjectActions = (project) => (
    <div className="project-page-actions">
      <GlassSurface width="auto" height="auto" borderRadius={40} className="flex-1 sm:flex-none" style={{ minHeight: 0 }}>
        <a
          href={project.disabled ? undefined : project.href}
          target={project.disabled ? undefined : "_blank"}
          rel={project.disabled ? undefined : "noopener noreferrer"}
          className="text-xs md:text-sm px-4 md:px-6 py-3 md:py-4 text-[#e0d7f5] font-semibold inline-flex items-center justify-center gap-2 w-full"
          aria-disabled={project.disabled ? "true" : undefined}
          onClick={(e) => {
            if (project.disabled) e.preventDefault();
          }}
        >
          <FiGithub className="size-4" />
          <span>View Repo</span>
        </a>
      </GlassSurface>

      {project.liveHref ? (
        <GlassSurface width="auto" height="auto" borderRadius={40} className="flex-1 sm:flex-none" style={{ minHeight: 0 }}>
          <a
            href={project.liveHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm px-4 md:px-6 py-3 md:py-4 text-[#e0d7f5] font-semibold inline-flex items-center justify-center gap-2 w-full"
          >
            <FiExternalLink className="size-4" />
            <span>Live App</span>
          </a>
        </GlassSurface>
      ) : null}
    </div>
  );

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcase-header mb-4 md:mb-10 flex items-center justify-between w-full text-white-50">
          <div className="flex items-center gap-3">
            <span
              className="icon-mask size-6 md:size-7"
              style={{
                color: "#e0d7f5",
                ["--icon-url"]: `url(${asset("images/starlogo.png")})`,
              }}
              aria-hidden="true"
            />
            <h3 className="text-xl md:text-3xl font-bold">Featured Projects</h3>
          </div>

          <Link to="/projects" className="showcase-cta learn-more-fill">
            View all
          </Link>
        </div>

        <LayoutGroup id="showcase-projects-continuity">
          <AnimatePresence mode="wait">
            {activeProject ? (
              <motion.div
                key={`showcase-detail-${activeProject.id}`}
                className="project-page-view"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                transition={pageTransition}
              >
                <div className="project-page-shell">
                  <motion.article
                    layoutId={`showcase-card-${activeProject.id}`}
                    className="project-page-card"
                    transition={sharedTransition}
                  >
                    <button
                      type="button"
                      className="project-page-back"
                      aria-label="Back to featured projects"
                      onClick={() => setActiveProjectId(null)}
                    >
                      <FiArrowLeft className="size-4 md:size-5" />
                      <span>Back to featured projects</span>
                    </button>

                    <div className="project-page-content">
                      <motion.div layoutId={`showcase-image-${activeProject.id}`} className="project-page-hero">
                        <Carousel
                          gallery={activeProject.gallery || [activeProject.imgPath]}
                          baseWidth={heroBaseWidth}
                          autoplay={(activeProject.gallery || [activeProject.imgPath]).length > 1}
                          autoplayDelay={3000}
                          pauseOnHover
                          loop={(activeProject.gallery || [activeProject.imgPath]).length > 1}
                          round={false}
                          showBorder={false}
                        />
                      </motion.div>

                      <section className="project-page-body">
                        <div className="project-page-header">
                          <motion.h2 layoutId={`showcase-title-${activeProject.id}`} className="project-page-title">
                            {activeProject.title}
                          </motion.h2>
                        </div>

                        {activeProject.date ? (
                          <div className="project-page-meta-row">
                            <div className="project-page-meta-item">
                              <FiCalendar className="size-4" />
                              <span>{activeProject.date}</span>
                            </div>
                          </div>
                        ) : null}

                        {renderProjectActions(activeProject)}

                        {Array.isArray(activeProject.techStack) && activeProject.techStack.length > 0 ? (
                          <div className="project-page-meta-block">
                            <div className="project-page-section">
                              <h3 className="project-page-section-title">Tech Stack</h3>
                              <div className="project-page-tag-list">
                                {activeProject.techStack.map((t) => (
                                  <span
                                    key={`${activeProject.id}-expanded-${t}`}
                                    className="project-page-tag"
                                    style={{ color: pickTechColor(t) }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : null}

                        <div className="project-page-section">
                          <h3 className="project-page-section-title">Overview</h3>
                          <p className="project-page-description">
                            {renderMarkedText(activeProject.description || "")}
                          </p>
                        </div>
                      </section>
                    </div>
                  </motion.article>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="showcase-grid"
                className="showcaselayout"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
                transition={pageTransition}
              >
                <div className="project-list-wrapper overflow-visible grid grid-cols-1 md:grid-cols-2 gap-8">
                  {featured.map((project, index) => {
                    const ref = index === 0 ? studyBreakRef : potteryRef;

                    return (
                      <motion.div key={project.id} layout className="project-card-origin">
                        <GlareHover
                          width="100%"
                          height="100%"
                          background="transparent"
                          borderRadius="20px"
                          borderColor="transparent"
                          glareColor="#9ad9f5"
                          glareOpacity={0.5}
                          glareAngle={-30}
                          glareSize={400}
                          transitionDuration={800}
                          playOnce={false}
                          className="showcase-float h-full"
                          style={{ border: "none" }}
                        >
                          <motion.div
                            layoutId={`showcase-card-${project.id}`}
                            className="glass-card w-full h-full"
                            transition={sharedTransition}
                          >
                            <button
                              type="button"
                              className="project w-full h-full text-left"
                              ref={ref}
                              onClick={() => setActiveProjectId(project.id)}
                            >
                              <motion.div
                                layoutId={`showcase-image-${project.id}`}
                                className={`image-wrapper ${project.imgBgClass}`}
                              >
                                <img src={project.imgPath} alt={project.imgAlt} loading="lazy" />
                              </motion.div>

                              <div className="showcase-text-with-cta text-white">
                                <motion.h2 layoutId={`showcase-title-${project.id}`} className="mb-3">
                                  {project.title}
                                </motion.h2>
                                <p className="text-[#e0d7f5] md:text-lg">
                                  {renderMarkedText(truncateText(stripMarks(project.description || ""), 140))}
                                </p>
                                <div className="mt-6 flex items-center gap-2 text-white-50/80">
                                  <span className="icon-mask size-4 md:size-5" style={{ ["--icon-url"]: `url(${asset("images/tag.png")})` }} aria-hidden="true" />
                                  <span className="text-sm md:text-base font-semibold">Tech Stack</span>
                                </div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {project.techStack.map((t) => (
                                    <span key={`${project.id}-card-${t}`} className="glass-card--static text-xs px-3 py-1 rounded-sm font-bold" style={{ color: pickTechColor(t) }}>
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </button>
                          </motion.div>
                        </GlareHover>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </div>
  );
};

export default ShowcaseSection;
