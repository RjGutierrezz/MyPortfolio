import React, { useEffect, useMemo, useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants/index.js";
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

const FLOAT_DELAYS = ["0s", "1.3s", "2.9s", "0.6s", "3.7s", "1.8s", "4.5s", "2.2s"];
const FLOAT_DURATIONS = ["6.2s", "8.7s", "5.9s", "9.4s", "7.1s", "10.2s", "6.6s", "8.1s"];

const ProjectsCollection = () => {
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const expandedTopRef = useRef(null);
  const lastCardRectRef = useRef(null);

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) || null,
    [activeProjectId]
  );

  const renderMarkedText = (text) => {
    const TONE_CLASS = {
      accent: "text-[#aaffb8] font-medium",
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

  const stripMarks = (text) => String(text ?? "").replace(/\[\[([\s\S]+?)\|([a-zA-Z0-9_-]+)\]\]/g, "$1");

  useEffect(() => {
    setActiveImageIndex(0);
    if (!activeProjectId) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

    requestAnimationFrame(() => {
      const panel = expandedTopRef.current;

      if (panel) {
        const navbar = document.querySelector(".navbar");
        const navH = navbar?.getBoundingClientRect?.().height ?? 0;

        const offset = navH + 16;

        const y = panel.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
      }

      if (reduceMotion) return;

      const fromRect = lastCardRectRef.current;
      if (!panel || !fromRect) return;

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

        lastCardRectRef.current = null;
      });
    });
  }, [activeProjectId]);

  const openProjectFromCard = (id, el) => {
    if (el?.getBoundingClientRect) lastCardRectRef.current = el.getBoundingClientRect();
    setActiveProjectId(id);
  };

  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <div className="flex items-center gap-3 mt-10">
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
            <GlassSurface
              width="100%"
              height="auto"
              borderRadius={20}
              className="w-full"
              style={{ height: "auto", minHeight: 60 }}
            >
              <div className="relative p-4 md:p-6 w-full">
                <button
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
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  {(() => {
                    const gallery =
                      Array.isArray(activeProject.gallery) && activeProject.gallery.length
                        ? activeProject.gallery
                        : [activeProject.imgPath];

                    const canPaginate = gallery.length > 1;
                    const imgSrc = gallery[Math.min(activeImageIndex, gallery.length - 1)];

                    const prev = () =>
                      setActiveImageIndex((i) => (i - 1 + gallery.length) % gallery.length);
                    const next = () =>
                      setActiveImageIndex((i) => (i + 1) % gallery.length);

                    return (
                      <div className="relative">
                        <div
                          className="image-wrapper md:h-96 h-72 relative rounded-xl overflow-hidden"
                        >
                          <img
                            src={imgSrc}
                            alt={activeProject.imgAlt || activeProject.title}
                            className="w-full h-full object-contain"
                          />

                          {canPaginate ? (
                            <div className="absolute inset-0 grid grid-cols-2">
                              <button
                                type="button"
                                aria-label="Previous image"
                                className="cursor-w-resize bg-transparent"
                                onClick={prev}
                              />
                              <button
                                type="button"
                                aria-label="Next image"
                                className="cursor-e-resize bg-transparent"
                                onClick={next}
                              />
                            </div>
                          ) : null}
                        </div>

                        {canPaginate ? (
                          <div className="mt-2 flex items-center justify-center">
                            <span className="text-white-50 text-sm">
                              {activeImageIndex + 1} / {gallery.length}
                            </span>
                          </div>
                        ) : null}
                      </div>
                    );
                  })()}

                  <div className="flex flex-col min-h-full">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-[#faf0ca] text-2xl md:text-3xl font-bold">
                        {activeProject.title}
                      </h2>
                    </div>

                    <p className="text-white-50 md:text-md mt-4 whitespace-pre-line">
                      {renderMarkedText(activeProject.description || "")}
                    </p>

                    {Array.isArray(activeProject.techStack) && activeProject.techStack.length > 0 ? (
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
                          {activeProject.techStack.map((t) => (
                            <span
                              key={`${activeProject.id}-top-${t}`}
                              className="text-xs md:text-xs px-3 py-1 rounded-sm bg-[#3d5a80] border border-transparent font-bold"
                              style={{ color: pickTechColor(t) }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}

                    <div className="mt-auto pt-6 flex items-center justify-between gap-4">
                      <a
                        href={activeProject.disabled ? undefined : activeProject.href}
                        target={activeProject.disabled ? undefined : "_blank"}
                        rel={activeProject.disabled ? undefined : "noopener noreferrer"}
                        className="showcase-cta learn-more-fill"
                        aria-disabled={activeProject.disabled ? "true" : undefined}
                        onClick={(e) => {
                          if (activeProject.disabled) e.preventDefault();
                        }}
                      >
                        View Repo
                      </a>

                      {activeProject.liveHref ? (
                        <a
                          href={activeProject.liveHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="showcase-cta learn-more-fill"
                        >
                          Live App
                        </a>
                      ) : (
                        <span aria-hidden="true" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </GlassSurface>
          </div>
        ) : null}

        <div id="techstack" className="mt-5">
          <div className="mx-auto grid-3-cols pt-3 overflow-visible">
            {projects.map((p, index) => {
              const isActive = activeProjectId === p.id;
              const floatDelay = FLOAT_DELAYS[index % 8];
              const floatDuration = FLOAT_DURATIONS[index % 8];

              return (
                <GlassSurface
                  key={p.id}
                  width="100%"
                  height="auto"
                  borderRadius={20}
                  className={`w-full cursor-pointer ${isActive ? "ring-2 ring-[#faf0ca]" : ""}`}
                  style={{
                    height: "auto",
                    minHeight: 60,
                    animationName: isActive ? "none" : "floaty",
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDelay: isActive ? "0s" : floatDelay,
                    animationDuration: isActive ? "0s" : floatDuration,
                    willChange: "transform",
                  }}
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
                  <div className="p-1 w-full flex flex-col">
                    <div className={`image-wrapper ${p.imgBgClass} xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl overflow-hidden`}>
                      <img
                        src={p.imgPath}
                        alt={p.imgAlt || p.title}
                        className="w-full h-full object-contain rounded-xl p-6 transition-transform duration-300 ease-in-out"
                        style={{ transformOrigin: "center" }}
                      />
                    </div>

                    <div className="showcase-text-with-cta text-white-100">
                      <h2
                        className="text-lg md:text-xl lg:text-2xl font-semibold mt-5 mb-3 transition-colors duration-[250ms] ease-in-out"
                        style={{ color: isActive ? "#faf0ca" : undefined }}
                      >
                        {p.title}
                      </h2>

                      <p className="text-white-50 md:text-md">
                        {renderMarkedText(truncateText(stripMarks(p.description || ""), 100))}
                      </p>

                      {Array.isArray(p.techStack) && p.techStack.length > 0 && (
                        <>
                          <div className="mt-6 flex items-center gap-2 text-white-50/80">
                            <span className="icon-mask size-4 md:size-5" style={{ ["--icon-url"]: `url(${asset("images/tag.png")})` }} aria-hidden="true" />
                            <span className="text-sm md:text-base font-semibold">Tech Stack</span>
                          </div>
                          <div className="mt-3 mb-2 flex flex-wrap gap-2">
                            {p.techStack.map((t) => (
                              <span
                                key={`${p.id}-${t}`}
                                className="text-xs px-3 py-1 rounded-sm bg-[#3d5a80] text-white-50 border border-transparent font-bold"
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
                </GlassSurface>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCollection;