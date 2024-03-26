import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const Projects = () => {
  console.log(projects);
  return (
    <div id="projects" className="max-w-6xl mx-auto flex flex-col gap-8 px-3">
      <h2 className="grad text-4xl font-bold text-center md:text-5xl">
        Recent Projects
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 my-5">
        {projects.map((project, index) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
