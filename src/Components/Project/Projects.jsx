import React from "react";
import "./project.scss";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="project">
      <div className="project-container">
        <div className="title">
          <h2>Projects</h2>
        </div>
        <div className="project-wrapper">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};
