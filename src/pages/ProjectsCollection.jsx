import React, { useEffect, useMemo, useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants/index.js";

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
      accent: "text-[#aaffb8] font-semibold",
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
            <div
              className="relative rounded-xl border border-[#3d5a80] bg-[#0D1B2A]/55 backdrop-blur-[6px] p-4 md:p-6"
            >
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

                  {/* changed: marked/colored project description */}
                  <p className="text-white-50 md:text-lg mt-4 whitespace-pre-line">
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
                            // changed: dynamic text color + bold
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
          </div>
        ) : null}

        <div id="techstack" className="mt-5">
          <div className="mx-auto grid-3-cols p-2 md:p-4 overflow-visible">
            {projects.map((p) => {
              const isActive = activeProjectId === p.id;

              return (
                <div
                  key={p.id}
                  className={`project project-bubble ${isActive ? "ring-2 ring-[#faf0ca]" : ""}`}
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
                    className={`image-wrapper ${p.imgBgClass} xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0`}
                  >
                    <img
                      src={p.imgPath}
                      alt={p.imgAlt || p.title}
                      className="w-full h-full object-contain rounded-xl p-10 transition-transform duration-300 ease-in-out"
                    />
                  </div>

                  <div className="showcase-text-with-cta text-white-100">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5 mb-3">
                      {p.title}
                    </h2>

                    {/* changed: snippet keeps truncation, but still renders colored marks */}
                    <p className="text-white-50 md:text-lg">
                      {renderMarkedText(truncateText(stripMarks(p.description || ""), 140))}
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
                              className="text-xs md:text-xs px-3 py-1 rounded-sm bg-[#3d5a80] text-white-50 border border-transparent font-bold"
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCollection;