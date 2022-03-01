import React, { useState } from "react";
import FilterComponent from "./Filter.component";
import projects from "../data";

function Projects() {
  const [data, setProjects] = useState(projects);

  return (
    <div className="container  py-8">
      <div className="flex px-12 flex-col justify-between w-3/4  mx-auto">
        <FilterComponent />
        <div className="border-2 border-transparent border-t-orange-100">
          {" "}
          Project will go here
        </div>
      </div>
    </div>
  );
}

export default Projects;
