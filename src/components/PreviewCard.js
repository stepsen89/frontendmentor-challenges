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
        {project.activeLink && (
          <a
            href="/article-preview/index.html"
            class="self-end justify-self-end py-2 px-4 border-2 border-primary rounded-lg text-sm"
          >
            Demo <i class="fa-solid fa-chevron-right"></i>
          </a>
        )}
      </div>
    </div>
  );
}

export default PreviewCardComponent;
