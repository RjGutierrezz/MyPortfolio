import React from "react";
import TitleHeader from "../components/TitleHeader";

const ProjectsCollection = () => {
  return (
    <section id="projects" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Projects Collection"
          sub="All projects in one place"
        />

        {/* added: hash target so /projects#techstack has a match on this page */}
        <div id="techstack" className="mt-16">
          {/* Placeholder grid; swap in your real project data/cards later */}
          <div className="mx-auto grid-3-cols mt-16">
            <div className="card-border rounded-xl p-8">
              <h3 className="text-white text-2xl font-semibold">Coming soon</h3>
              <p className="text-white-50 text-lg mt-3">
                This page will list all projects with filters, tags, and links.
              </p>
            </div>

            <div className="card-border rounded-xl p-8">
              <h3 className="text-white text-2xl font-semibold">Coming soon</h3>
              <p className="text-white-50 text-lg mt-3">
                Add your project cards here (image, title, stack, links).
              </p>
            </div>

            <div className="card-border rounded-xl p-8">
              <h3 className="text-white text-2xl font-semibold">Coming soon</h3>
              <p className="text-white-50 text-lg mt-3">
                This layout already matches your existing sections/styles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCollection;