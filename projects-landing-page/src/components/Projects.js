import React, { useState } from "react";
import FilterComponent from "./Filter.component";
import projects from "../data";
import PreviewCardComponent from "./PreviewCard";

function Projects() {
  return (
    <div className="py-8">
      <div className="flex px-12 flex-col justify-between w-11/12  mx-auto">
        <FilterComponent />
        <div className="border-2 border-transparent border-t-orange-100  flex flex-wrap justify-center">
          {projects.map((project) => (
            <PreviewCardComponent key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
