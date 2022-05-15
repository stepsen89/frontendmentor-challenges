import React from "react";
import projects from "../data";
import PreviewCardComponent from "./PreviewCard";

function Projects() {
  return (
    <div class="container mt-6 md:mt-36 flex md:justify-between md:items-center md:mx-auto md:px-14 lg:px-8 w-full">
      <div class="w-3/4  mx-auto" id="projects">
        <h4 class="section-title ">Frontendmentor Challenges</h4>
        <div className="flex flex-col justify-between w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 pt-12 md:mb-8">
            {projects.map((project) => (
              <PreviewCardComponent key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
