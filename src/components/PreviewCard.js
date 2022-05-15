import React from "react";
import { Link } from "react-router-dom";
import TechTag from "./TechTag";

const colorMapping = {
  SCSS: "#789878",
  HTML: "orange",
  TailwindCSS: "#777999",
};

function PreviewCardComponent({ project }) {
  console.log(project);
  return (
    <div class="card">
      <div class="relative">
        {project.activeLink && (
          <a
            href={project.activeLink}
            class="absolute py-2 px-4 bg-primary rounded-lg text-sm right-2 top-2"
          >
            Demo <i class="fa-solid fa-chevron-right"></i>
          </a>
        )}
        <img
          src={project.images.desktop.preview}
          alt={`Preview Screenshot of Project ${project.name}`}
          class="w-full h-48 lg:h-36 object-fill"
        />
      </div>

      <div class="grid grid-rows-4 gap h-48">
        <div className="flex">
          {project.technologies.map((tech) => (
            <TechTag name={tech} />
          ))}
        </div>
        <h3 className="text-md font-bold">{project.name}</h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
}

export default PreviewCardComponent;
