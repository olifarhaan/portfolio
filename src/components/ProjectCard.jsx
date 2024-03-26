import { FaGithub } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";

const ProjectCard = ({ project }) => {
  const { id, title, shortDescription, description, Icon, github, link, tech } =
    project;
  return (
    <div className="flex flex-col gap-3 bg-[#1B1B1A] text-[#7a7a7a] border-[2px] border-[#252524] rounded-md py-4 px-4">
      <div className="contents">
        <div className="mt-16 gap-4 flex flex-col">
          <Icon className="text-4xl" />
          <h3 className="grad text-2xl leading-tight">{title}</h3>
          <p className="italic">- {shortDescription}</p>
          <div className="flex gap-2 flex-wrap">
            {tech.map((item) => (
              <span
                key={item}
                className="inline-block rounded  text-xs font-semibold border-2 border-borderColor px-2 py-1"
              >
                {item}
              </span>
            ))}
          </div>
          <p>{description}</p>
        </div>
        <div className="flex gap-2">
          { github && <button className="btn">
            {" "}
            <FaGithub />{" "}
          </button>}
          {link && <button className="btn">
            {" "}
            <IoMdGlobe />{" "}
          </button>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
