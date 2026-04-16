import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { FiArrowLeft, FiCalendar, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../constants/index.js";
import GlareHover from "../components/HeroModels/GlareHover.jsx";
import Carousel from "../components/HeroModels/Carousel.jsx";
import GlassSurface from "../components/HeroModels/GlassSurface.jsx";

const truncateText = (text, maxLength) =>
  text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

const ASSET_BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => {
  const base = ASSET_BASE.startsWith("/") ? ASSET_BASE : `/${ASSET_BASE}`;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${String(p).replace(/^\/+/, "")}`;
};

const TECH_BADGE_COLORS = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#a0c4ff", "#bdb2ff", "#ff9ed7"];

// added: deterministic "random" color picker (stable per label)
const pickTechColor = (label) => {
  const s = String(label ?? "");
  let h = 2166136261; // FNV-1a-ish
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const idx = Math.abs(h) % TECH_BADGE_COLORS.length;
  return TECH_BADGE_COLORS[idx];
};

const ProjectsCollection = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) || null,
    [activeProjectId]
  );

  // added: render [[text|tone]] markers from constants with your chosen colors
  const renderMarkedText = (text) => {
    const TONE_CLASS = {
      // tech: "text-[#9bf6ff] font-semibold",
      accent: "text-[#aaffb8] font-medium",
      // warn: "text-[#ffadad] font-semibold",
    };

    const s = String(text ?? "");
    const parts = [];
    const re = /\[\[([\s\S]+?)\|([a-zA-Z0-9_-]+)\]\]/g;

    let last = 0;
    let match = re.exec(s);
    while (match) {
      const keyBase = `${match.index}-${match[1]}-${match[2]}`;
      if (match.index > last) {
        parts.push({ type: "text", value: s.slice(last, match.index), key: `text-${last}` });
      }
      parts.push({ type: "mark", value: match[1], tone: match[2], key: keyBase });
      last = match.index + match[0].length;
      match = re.exec(s);
    }
    if (last < s.length) parts.push({ type: "text", value: s.slice(last), key: `text-${last}` });

    return parts.map((p) => {
      if (p.type === "text") return <React.Fragment key={p.key}>{p.value}</React.Fragment>;
      return (
        <span key={p.key} className={TONE_CLASS[p.tone] ?? TONE_CLASS.accent}>
          {p.value}
        </span>
      );
    });
  };

  // changed: truncate for plain text (strip the markup so snippets don’t show [[...|...]])
  const stripMarks = (text) => String(text ?? "").replace(/\[\[([\s\S]+?)\|([a-zA-Z0-9_-]+)\]\]/g, "$1");

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveProjectId(null);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
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

  const pageTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeInOut" };

  const sharedTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.2, ease: "easeInOut" };

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

  const heroBaseWidth =
    typeof window !== "undefined"
      ? window.innerWidth < 768
        ? Math.max(280, Math.min(window.innerWidth - 32, 350))
        : Math.min(750, window.innerWidth - 160)
      : 320;

  return (
    <section ref={sectionRef} id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div className="flex items-center gap-3 mt-20 md:mt-10">
          <span
            className="icon-mask size-7 md:size-8 text-white-50"
            style={{ ["--icon-url"]: `url(${asset("images/projectlogo.png")})` }}
            aria-hidden="true"
          />
          <h3 className="text-xl text-white-50 md:text-3xl font-bold">
              Projects
          </h3>
        </div>
        <LayoutGroup id="projects-continuity">
          <AnimatePresence mode="wait">
            {activeProject ? (
              <motion.div
                key={`detail-${activeProject.id}`}
                className="project-page-view"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                transition={pageTransition}
              >
                <div className="project-page-shell">
                  <motion.article
                    layoutId={`project-card-${activeProject.id}`}
                    className="project-page-card"
                    transition={sharedTransition}
                  >
                    <button
                      type="button"
                      className="project-page-back"
                      aria-label="Back to projects"
                      onClick={() => setActiveProjectId(null)}
                    >
                      <FiArrowLeft className="size-4 md:size-5" />
                      <span>Back to projects</span>
                    </button>

                    <div className="project-page-content">
                      <motion.div layoutId={`project-image-${activeProject.id}`} className="project-page-hero">
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
                          <motion.h2
                            layoutId={`project-title-${activeProject.id}`}
                            className="project-page-title"
                          >
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

                        <div className="project-page-meta-block">
                          {Array.isArray(activeProject.techStack) && activeProject.techStack.length > 0 ? (
                            <div className="project-page-section">
                              <h3 className="project-page-section-title">Tech Stack</h3>
                              <div className="project-page-tag-list">
                                {activeProject.techStack.map((t) => (
                                  <span
                                    key={`${activeProject.id}-top-${t}`}
                                    className="project-page-tag"
                                    style={{ color: pickTechColor(t) }}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ) : null}
                        </div>

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
                key="grid"
                id="techstack"
                className="mt-3 md:mt-5"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -18 }}
                transition={pageTransition}
              >
                <div className="mx-auto grid-3-cols pt-3 overflow-visible">
                  {projects.map((p) => (
                    <motion.div key={p.id} layout className="project-card-origin">
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
                        className="h-full"
                        style={{ border: "none" }}
                      >
                        <motion.div
                          layoutId={`project-card-${p.id}`}
                          className="glass-card w-full h-full"
                          role="button"
                          tabIndex={0}
                          aria-expanded="false"
                          onClick={() => setActiveProjectId(p.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setActiveProjectId(p.id);
                            }
                          }}
                          transition={sharedTransition}
                        >
                          <motion.div
                            layoutId={`project-image-${p.id}`}
                            className={`image-wrapper ${p.imgBgClass} xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl overflow-hidden`}
                          >
                            <img
                              src={p.imgPath}
                              alt={p.imgAlt || p.title}
                              className="w-full h-full object-contain rounded-xl p-6"
                              loading="lazy"
                            />
                          </motion.div>

                          <div className="showcase-text-with-cta text-white">
                            <motion.h2
                              layoutId={`project-title-${p.id}`}
                              className="text-lg md:text-xl lg:text-2xl font-semibold mt-5 mb-3 transition-colors duration-[250ms] ease-in-out"
                            >
                              {p.title}
                            </motion.h2>

                            <p className="text-[#e0d7f5] md:text-md">
                              {renderMarkedText(truncateText(stripMarks(p.description || ""), 100))}
                            </p>

                            {Array.isArray(p.techStack) && p.techStack.length > 0 && (
                              <>
                                <div className="mt-6 flex items-center gap-2 text-white-50/80">
                                  <span
                                    className="icon-mask size-4 md:size-5"
                                    style={{ ["--icon-url"]: `url(${asset("images/tag.png")})` }}
                                    aria-hidden="true"
                                  />
                                  <span className="text-sm md:text-base font-semibold">
                                    Tech Stack
                                  </span>
                                </div>

                                <div className="mt-3 flex flex-wrap gap-2">
                                  {p.techStack.map((t) => (
                                    <span
                                      key={`${p.id}-${t}`}
                                      className="glass-card--static text-xs md:text-xs px-3 py-1 rounded-sm text-white-50 font-bold"
                                      style={{ color: pickTechColor(t) }}
                                    >
                                      {t}
                                    </span>
                                  ))}
                                </div>
                              </>
                            )}
                          </div>
                        </motion.div>
                      </GlareHover>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default ProjectsCollection;
