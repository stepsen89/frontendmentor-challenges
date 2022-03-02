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

  return (
    <div>
      <h2> Hello I am a Detail Page of {id}</h2>
      <h3> Name: {project.name}</h3>
    </div>
  );
}

export default ProjectDetails;
