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
    <Link
      className="w-1/4 p-4 m-4 border rounded-lg text-black hover:text-white hover:bg-blue-500 hover:cursor-pointer"
      to={`project/${project.id}`}
    >
      <div className="h-66">
        <div className="w-full">
          <img
            src={project.images.desktop.preview}
            alt={`Preview Screenshot of Project ${project.name}`}
            className="h-36 w-full"
          />
        </div>
        <div className="flex flex-col justify-between p-4 h-30">
          <div className="flex">
            {project.technologies.map((tech) => (
              <TechTag name={tech} color={colorMapping[tech]} />
            ))}
          </div>
          <h3 className="text-2xl font-bold"> {project.name}</h3>
          {/* <p className="text-sm"> {project.description} </p> */}
          {/* <div className="self-end">
            <Link
              className="py-2 px-6 border-2 border-gray-200 uppercase text-sm text-center font-bold"
              to={`project/${project.id}`}
            >
              View{" "}
            </Link>
          </div> */}
        </div>
      </div>
    </Link>
  );
}

export default PreviewCardComponent;
