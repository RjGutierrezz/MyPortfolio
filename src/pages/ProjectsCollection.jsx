import React, { useEffect, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants/index.js";

const truncateText = (text, maxLength) =>
  text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

// changed: ensure BASE_URL always works as an absolute path and joins correctly
const ASSET_BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => {
  const base = ASSET_BASE.startsWith("/") ? ASSET_BASE : `/${ASSET_BASE}`;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${String(p).replace(/^\/+/, "")}`;
};

const ProjectsCollection = () => {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // added: prevent background page scroll when modal is open
  useEffect(() => {
    if (!activeProject) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [activeProject]);

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

        <div id="techstack" className="mt-5">
          <div className="mx-auto grid-3-cols p-2 md:p-4 overflow-visible">
            {projects.map((p) => (
              <div
                key={p.id}
                className="project"
                role="button"
                tabIndex={0}
                onClick={() => setActiveProject(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveProject(p);
                  }
                }}
              >
                <div className={`image-wrapper ${p.imgBgClass} xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0`}>
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

                  <p className="text-white-50 md:text-lg">
                    {truncateText(p.description || "", 140)}
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
                            className="text-xs md:text-xs px-3 py-1 rounded-sm bg-[#3d5a80] text-white-50 border border-transparent"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
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
            <div
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal-close"
                aria-label="Close project details"
                onClick={() => setActiveProject(null)}
              >
                <span
                  className="icon-mask size-5 md:size-6"
                  style={{ ["--icon-url"]: `url(${asset("images/close.png")})` }}
                  aria-hidden="true"
                />
              </button>

              <div className="project-modal-header">
                <h2 className="text-[#3d5a80] text-2xl md:text-3xl font-bold">
                  {activeProject.title}
                </h2>
              </div>

              <div className={`project-modal-image image-wrapper ${activeProject.imgBgClass} xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0`}>
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
                          key={`${activeProject.id}-modal-${t}`}
                          className="text-xs md:text-xs px-3 py-1 rounded-sm bg-[#3d5a80] text-white-50 border border-transparent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </>
                )}

              <div className="mt-6 flex gap-4">
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
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsCollection;