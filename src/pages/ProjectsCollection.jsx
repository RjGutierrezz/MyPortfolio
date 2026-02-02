import React from "react";
import TitleHeader from "../components/TitleHeader";
import { projects } from "../constants/index.js";

const truncateText = (text, maxLength) =>
  text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;

const ASSET_BASE = import.meta.env.BASE_URL;
const asset = (p) => `${ASSET_BASE}${String(p).replace(/^\/+/, "")}`;

const ProjectsCollection = () => {
  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        {/* changed: add left icon beside the title */}
        <div className="flex items-center gap-3 mt-10">
          <span
            className="icon-mask size-7 md:size-8 text-white-50"
            style={{ ["--icon-url"]: `url(${asset("images/projectlogo.png")})` }}
            aria-hidden="true"
          />
          <h3 className="text-xl md:text-3xl font-bold">
              Projects Collection
          </h3>
        </div>

        {/* keep: hash target */}
        <div id="techstack" className="mt-16">
          {/* changed: 3-per-row grid + Showcase-style project cards */}
          <div className="mx-auto grid-3-cols p-2 md:p-4 overflow-visible">
            {projects.map((p) => (
              <div key={p.id} className="project">
                <div className={`image-wrapper ${p.imgBgClass} xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0`}>
                  <img
                    src={p.imgPath}
                    alt={p.imgAlt || p.title}
                    className="w-full h-full object-contain rounded-xl p-10 transition-transform duration-300 ease-in-out"
                  />
                </div>

                <div className="showcase-text-with-cta text-white-100">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">
                    {p.title}
                  </h2>

                  <p className="text-white-50 md:text-lg">
                    {truncateText(p.description || "", 140)}
                  </p>

                  <a
                    href={p.disabled ? undefined : p.href}
                    target={p.disabled ? undefined : "_blank"}
                    rel={p.disabled ? undefined : "noopener noreferrer"}
                    className="showcase-cta learn-more-fill"
                    aria-disabled={p.disabled ? "true" : undefined}
                    onClick={(e) => {
                      if (p.disabled) e.preventDefault();
                    }}
                  >
                    LEARN MORE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCollection;