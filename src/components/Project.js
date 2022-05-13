import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "../data";

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState("");

  useEffect(() => {
    let currentProj = projects.find((project) => {
      return project["id"] === id;
    });
    setProject(currentProj);
  }, [id]);

  console.log(project);
  return (
    <div className="py-8 container">
      {project && (
        <div className="flex px-12 flex-row justify-between w-3/4  mx-auto">
          {" "}
          <div className="w-1/2 bg-yellow-200">
            <h2> Hello I am a Detail Page of {id}</h2>
            <h3> Name: {project.name}</h3>
          </div>
          <div className="w-full bg-blue-100 overflow-scroll" style={{ height: "80vh" }}>
            <div>
              <img
                src={project.images.desktop.preview}
                alt={`Preview Screenshot of Project ${project.name}`}
                className="h-full w-full"
              />
            </div>
            {/* <div className="flex justify-center-center">
              <div className="border-12 p-2 border-white h-auto w-full bg-white">
                <img
                  src={project.images.mobile.preview}
                  alt={`Preview Screenshot of Project ${project.name}`}
                />
              </div>
              <div className="border-12 p-2 border-white h-auto w-full bg-white">
                <img
                  src={project.images.mobile.full}
                  alt={`Preview Screenshot of Project ${project.name}`}
                />
              </div>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
