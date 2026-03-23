import React, { useEffect, useMemo, useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const expandedTopRef = useRef(null);

  // added: store the last clicked card's bounding rect for FLIP animation
  const lastCardRectRef = useRef(null);

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
    let m;
    while ((m = re.exec(s)) !== null) {
      if (m.index > last) parts.push({ type: "text", value: s.slice(last, m.index) });
      parts.push({ type: "mark", value: m[1], tone: m[2] });
      last = m.index + m[0].length;
    }
    if (last < s.length) parts.push({ type: "text", value: s.slice(last) });

    return parts.map((p, i) => {
      if (p.type === "text") return <React.Fragment key={i}>{p.value}</React.Fragment>;
      return (
        <span key={i} className={TONE_CLASS[p.tone] ?? TONE_CLASS.accent}>
          {p.value}
        </span>
      );
    });
  };

  // changed: truncate for plain text (strip the markup so snippets don’t show [[...|...]])
  const stripMarks = (text) => String(text ?? "").replace(/\[\[([\s\S]+?)\|([a-zA-Z0-9_-]+)\]\]/g, "$1");

  // changed: animate the top panel from the clicked card position -> top panel position
  useEffect(() => {
    setActiveImageIndex(0);
    if (!activeProjectId) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    requestAnimationFrame(() => {
      const panel = expandedTopRef.current;

      // changed: scroll with explicit offset so the panel isn't hidden under the fixed navbar
      if (panel) {
        const navbar = document.querySelector(".navbar");
        const navH = navbar?.getBoundingClientRect?.().height ?? 0;

        // extra breathing room below navbar
        const offset = navH + 16;

        const y = panel.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }

      if (reduceMotion) return;

      const fromRect = lastCardRectRef.current;
      if (!panel || !fromRect) return;

      // Let layout settle after scroll starts, then FLIP
      requestAnimationFrame(() => {
        const toRect = panel.getBoundingClientRect();

        const dx = fromRect.left - toRect.left;
        const dy = fromRect.top - toRect.top;
        const sx = fromRect.width / Math.max(toRect.width, 1);
        const sy = fromRect.height / Math.max(toRect.height, 1);

        panel.animate(
          [
            {
              transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`,
              opacity: 0.35,
            },
            { transform: "translate(0px, 0px) scale(1, 1)", opacity: 1 },
          ],
          {
            duration: 520,
            easing: "cubic-bezier(0.2, 0.9, 0.2, 1)",
            fill: "both",
          }
        );

        // one-shot: only use the rect for the immediate transition
        lastCardRectRef.current = null;
      });
    });
  }, [activeProjectId]);

  // added: capture clicked card position before activating
  const openProjectFromCard = (id, el) => {
    if (el?.getBoundingClientRect) lastCardRectRef.current = el.getBoundingClientRect();
    setActiveProjectId(id);
  };

  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div className="flex items-center gap-3 mt-6 md:mt-10">
          <span
            className="icon-mask size-7 md:size-8 text-white-50"
            style={{ ["--icon-url"]: `url(${asset("images/projectlogo.png")})` }}
            aria-hidden="true"
          />
          <h3 className="text-xl text-white-50 md:text-3xl font-bold">
              Projects
          </h3>
        </div>

        {activeProject ? (
          <div ref={expandedTopRef} className="mt-6 project-expand-panel">
            <div className="relative p-3 md:p-10 px-4 md:px-62">
              {/* <button
                type="button"
                className="project-modal-close"
                aria-label="Close project details"
                onClick={() => setActiveProjectId(null)}
              >
                <span
                  className="icon-mask size-5 md:size-6"
                  style={{ ["--icon-url"]: `url(${asset("images/close.png")})` }}
                  aria-hidden="true"
                />
              </button> */}

              <div className="grid grid-cols-1 gap-4 md:gap-6 items-start">
                <div className="relative flex-1 flex justify-center">
                  <Carousel
                    gallery={activeProject.gallery || [activeProject.imgPath]}
                    baseWidth={window.innerWidth < 768 ? Math.min(window.innerWidth - 50, 310) : 650}
                    autoplay
                    autoplayDelay={3000}
                    pauseOnHover
                    loop={(activeProject.gallery || [activeProject.imgPath]).length > 1}
                    round={false}
                    fillHeight={true}
                  />
                </div>

                <div className="flex flex-col min-h-full">
                  <div className="flex items-start justify-between gap-2 md:gap-4">
                    <h2 className="text-[#c8f5e1] text-xl md:text-3xl font-bold break-words">
                      {activeProject.title}
                    </h2>
                  </div>

                  {/* changed: marked/colored project description */}
                  <p className="text-[#e0d7f5] text-sm md:text-lg mt-3 md:mt-4 whitespace-pre-line line-clamp-3 md:line-clamp-none">
                    {renderMarkedText(activeProject.description || "")}
                  </p>

                  {Array.isArray(activeProject.techStack) && activeProject.techStack.length > 0 ? (
                    <>
                      <div className="mt-4 md:mt-6 flex items-center gap-2 text-white-50/80">
                        <span
                          className="icon-mask size-3 md:size-5"
                          style={{ ["--icon-url"]: `url(${asset("images/tag.png")})` }}
                          aria-hidden="true"
                        />
                        <span className="text-xs md:text-base font-semibold">
                          Tech Stack
                        </span>
                      </div>

                      <div className="mt-2 md:mt-3 flex flex-wrap gap-1 md:gap-2">
                        {activeProject.techStack.map((t) => (
                          <span
                            key={`${activeProject.id}-top-${t}`}
                            className="glass-card--static text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-sm font-bold"
                            style={{ color: pickTechColor(t) }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  ) : null}

                  <div className="mt-auto pt-4 md:pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 md:gap-4 w-full">
                    <GlassSurface
                      width="auto"
                      height="auto"
                      borderRadius={40}
                      className="flex-1 sm:flex-none"
                      style={{ minHeight: 0 }}
                    >
                      <a
                        href={activeProject.disabled ? undefined : activeProject.href}
                        target={activeProject.disabled ? undefined : "_blank"}
                        rel={activeProject.disabled ? undefined : "noopener noreferrer"}
                        className="text-xs md:text-sm px-4 md:px-6 py-3 md:py-4 text-[#e0d7f5] font-semibold inline-flex items-center justify-center w-full"
                        aria-disabled={activeProject.disabled ? "true" : undefined}
                        onClick={(e) => {
                          if (activeProject.disabled) e.preventDefault();
                        }}
                      >
                        View Repo
                      </a>
                    </GlassSurface>

                    {activeProject.liveHref ? (
                      <GlassSurface
                        width="auto"
                        height="auto"
                        borderRadius={40}
                        className="flex-1 sm:flex-none"
                        style={{ minHeight: 0 }}
                      >
                        <a
                          href={activeProject.liveHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs md:text-sm px-4 md:px-6 py-3 md:py-4 text-[#e0d7f5] font-semibold inline-flex items-center justify-center w-full"
                        >
                          Live App
                        </a>
                      </GlassSurface>
                    ) : (
                      <span aria-hidden="true" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <div id="techstack" className="mt-3 md:mt-5">
          <div className="mx-auto grid-3-cols pt-3 overflow-visible">
            {projects.map((p) => {
              const isActive = activeProjectId === p.id;

              return (
                <GlareHover
                  key={p.id}
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
                  <div
                    className={`glass-card w-full h-full ${isActive ? "ring-2 ring-[#c8f5e1]" : ""}`}
                    role="button"
                    tabIndex={0}
                    onClick={(e) => openProjectFromCard(isActive ? null : p.id, e.currentTarget)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openProjectFromCard(isActive ? null : p.id, e.currentTarget);
                      }
                    }}
                  >
                    <div
                      className={`image-wrapper ${p.imgBgClass} xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl overflow-hidden`}
                    >
                      <img
                        src={p.imgPath}
                        alt={p.imgAlt || p.title}
                        className="w-full h-full object-contain rounded-xl p-6"
                        loading="lazy"
                      />
                    </div>

                    <div className="showcase-text-with-cta text-white-100">
                      <h2
                        className="text-lg md:text-xl lg:text-2xl font-semibold mt-5 mb-3 transition-colors duration-[250ms] ease-in-out"
                      >
                        {p.title}
                      </h2>

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
                  </div>
                </GlareHover>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCollection;