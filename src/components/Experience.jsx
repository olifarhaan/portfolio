import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { experiences } from "../data/experience";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 px-3">
      <h2 className="grad text-4xl font-bold text-center md:text-5xl">
        My Experience
      </h2>
      <div className="grid sm:grid-cols-2 gap-3 my-3">
        {experiences.map((experience) => {
          return <ExperienceCard key={experience.id} experience={experience} />;
        })}
      </div>
    </div>
  );
};

export default Experience;
