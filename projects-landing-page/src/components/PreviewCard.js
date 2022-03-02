import React from "react";
import { Link } from "react-router-dom";
import TechTag from "./TechTag";

function PreviewCardComponent({ project }) {
  return (
    <div className="w-1/2 border-t-2 border-gray-100 md:w-full lg:max-w-2xl lg:max-h-96 h-auto m-2 p-6 flex flex-row-reverse items-start relative">
      <div className="flex flex-col justify-between h-full p-6 px-8">
        <h3 className="text-2xl font-cursive"> {project.name}</h3>
        <p className="text-xs text-justify"> {project.description} </p>
        <div className="flex flex-col">
          {/* <h4 className="font-bold text-sm"> {project.technologies.join(", ")}</h4> */}
          <div className="flex flex-wrap">
            {/* {project.technologies.map((tech) => (
              <TechTag name={tech} />
            ))} */}
          </div>
        </div>
        <div className="self-end">
          <Link className="py-2 px-6 border-2 border-gray-200 uppercase text-sm text-center font-bold">
            {" "}
            View{" "}
          </Link>
        </div>
      </div>
      <div className="bg-blue-50 p-6 w-full">
        <img
          src={project.images.desktop.preview}
          alt={`Preview Screenshot of Project ${project.name}`}
          className="max-w-xs h-60 top-12 z-50"
        />
      </div>
    </div>
  );
}

export default PreviewCardComponent;
