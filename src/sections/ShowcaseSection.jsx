import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const studyBreakRef = useRef(null);
  const potteryRef = useRef(null);

  const [activeProjectId, setActiveProjectId] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const expandedTopRef = useRef(null);
  const lastCardRectRef = useRef(null);

  const featured = [
    {
      id: "studybreak-bite",
      title: "StudyBreak-Bite",
      imgPath: asset("images/appmockup.png"),
      imgAlt: "StudyBreak-Bite",
      imgBgClass: "bg-[#E0E1DD]",
      description:
        "A [[mobile |accent]] food discovery and delivery app built for university students, focused on saving time and minimizing interruptions during busy academic schedules.",
      href: "https://github.com/RjGutierrezz/StudyBreak-Bite.git",
      techStack: ["React Native", "JavaScript", "TypeScript", "Expo",
        "Expo Router", "Tailwind CSS"],
      gallery: null,
      liveHref: null,
      disabled: false,
    },
    {
      id: "pottery-webapp",
      title: "Pottery WebApp",
      imgPath: asset("images/project1.png"),
      imgAlt: "Pottery WebApp",
      imgBgClass: "bg-[#E0E1DD]",
      description:
        "A [[full-stack|accent]] web application built with Next.js (React + TypeScript), CSS, and Supabase, delivering a fast, scalable, and user-friendly experience.",
      href: "https://github.com/jjmendez819/sales-app/tree/main",
      techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      gallery: null,
      liveHref: null,
      disabled: false,
    },
  ];

  const activeProject = useMemo(
    () => featured.find((p) => p.id === activeProjectId) || null,
    [activeProjectId]
  );

  const openProjectFromCard = (id, el) => {
    if (el?.getBoundingClientRect) lastCardRectRef.current = el.getBoundingClientRect();
    setActiveProjectId(id);
  };

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
    let m;
    while ((m = re.exec(s)) !== null) {
      if (m.index > last) parts.push({ type: "text", value: s.slice(last, m.index) });
      parts.push({ type: "mark", value: m[1] });
      last = m.index + m[0].length;
    }
    if (last < s.length) parts.push({ type: "text", value: s.slice(last) });

    return parts.map((p, i) => {
      if (p.type === "text") return <React.Fragment key={i}>{p.value}</React.Fragment>;
      return (
        <span key={i} className="text-[#aaffb8] font-medium">
          {p.value}
        </span>
      );
    });
  };

  const stripMarks = (text) => String(text ?? "").replace(/\[\[([\s\S]+?)\|accent\]\]/g, "$1");

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcase-header mb-4 md:mb-10 flex items-center justify-between w-full text-white-50">
          <div className="flex items-center gap-3">
            <span
              className="icon-mask size-6 md:size-7"
              style={{
                color: "#ffffff",
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

        {activeProject ? (
          <div ref={expandedTopRef} className="mt-6 mb-10 md:mb-14 project-expand-panel">
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

              {/* changed: portrait layout with centered carousel */}
              <div className="grid grid-cols-1 gap-4 md:gap-6 items-start">
                <div className="relative flex-1 flex justify-center">
                  <Carousel
                    gallery={activeProject.gallery || [activeProject.imgPath]}
                    baseWidth={typeof window !== 'undefined' && window.innerWidth < 768 ? Math.min(window.innerWidth - 80, 200) : 650}
                    autoplay
                    autoplayDelay={3000}
                    pauseOnHover
                    loop={(activeProject.gallery || [activeProject.imgPath]).length > 1}
                    round={false}
                    fillHeight={true}
                  />
                </div>

                {/* changed: scrollable description area */}
                <div className="flex flex-col min-h-full">
                  <div className="flex items-start justify-between gap-2 md:gap-4">
                    <h2 className="text-[#c8f5e1] text-xl md:text-3xl font-bold break-words">
                      {activeProject.title}
                    </h2>
                  </div>

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

        <div className="showcaselayout">
          <div className="project-list-wrapper overflow-visible grid grid-cols-1 md:grid-cols-2 gap-8">

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
              <div
                className={`glass-card w-full h-full ${activeProjectId === featured[0].id ? "ring-2 ring-[#c8f5e1]" : ""}`}
              >
                <div
                  className="project w-full h-full"
                  ref={studyBreakRef}
                  role="button"
                  tabIndex={0}
                  onClick={(e) =>
                    openProjectFromCard(
                      activeProjectId === featured[0].id ? null : featured[0].id,
                      e.currentTarget
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openProjectFromCard(
                        activeProjectId === featured[0].id ? null : featured[0].id,
                        e.currentTarget
                      );
                    }
                  }}
                >
                  <div className={`image-wrapper ${featured[0].imgBgClass}`}>
                    <img src={featured[0].imgPath} alt={featured[0].imgAlt} loading="lazy" />
                  </div>
                  <div className="showcase-text-with-cta text-white-100">
                    <h2 className="mb-3">{featured[0].title}</h2>
                    <p className="text-[#e0d7f5] md:text-lg">
                      {renderMarkedText(truncateText(stripMarks(featured[0].description || ""), 140))}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-white-50/80">
                      <span className="icon-mask size-4 md:size-5" style={{ ["--icon-url"]: `url(${asset("images/tag.png")})` }} aria-hidden="true" />
                      <span className="text-sm md:text-base font-semibold">Tech Stack</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {featured[0].techStack.map((t) => (
                        <span key={`${featured[0].id}-card-${t}`} className="glass-card--static text-xs px-3 py-1 rounded-sm font-bold" style={{ color: pickTechColor(t) }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlareHover>

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
              <div
                className={`glass-card w-full h-full ${activeProjectId === featured[1].id ? "ring-2 ring-[#faf0ca]" : ""}`}
              >
                <div
                  className="project w-full h-full"
                  ref={potteryRef}
                  role="button"
                  tabIndex={0}
                  onClick={(e) =>
                    openProjectFromCard(
                      activeProjectId === featured[1].id ? null : featured[1].id,
                      e.currentTarget
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      openProjectFromCard(
                        activeProjectId === featured[1].id ? null : featured[1].id,
                        e.currentTarget
                      );
                    }
                  }}
                >
                  <div className={`image-wrapper ${featured[1].imgBgClass}`}>
                    <img src={featured[1].imgPath} alt={featured[1].imgAlt} loading="lazy" />
                  </div>
                  <div className="showcase-text-with-cta text-white-100">
                    <h2 className="mb-3">{featured[1].title}</h2>
                    <p className="text-[#e0d7f5] md:text-lg">
                      {renderMarkedText(truncateText(stripMarks(featured[1].description || ""), 140))}
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-white-50/80">
                      <span className="icon-mask size-4 md:size-5" style={{ ["--icon-url"]: `url(${asset("images/tag.png")})` }} aria-hidden="true" />
                      <span className="text-sm md:text-base font-semibold">Tech Stack</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {featured[1].techStack.map((t) => (
                        <span key={`${featured[1].id}-card-${t}`} className="glass-card--static text-xs px-3 py-1 rounded-sm font-bold" style={{ color: pickTechColor(t) }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlareHover>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
