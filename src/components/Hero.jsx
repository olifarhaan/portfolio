import profile from "../assets/profile.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineFileDownload } from "react-icons/md";
import Resume from "../assets/Resume.pdf";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex max-w-4xl mx-3 sm:mx-auto justify-center min-h-[90vh] px-3">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <img className="h-[80px]" src={profile} alt="Profile" />
        <span className="text-2xl">Hello, I am Ali👋🏻</span>
        <h1 className="grad text-3xl sm:text-6xl  font-bold text-center leading-tight">
          I excel in the dynamic realm of Full-Stack Development
        </h1>
        <p className="text-center">
          Passionate Full-Stack Developer with a flair for creative solutions
          and a commitment to delivering excellence. My journey unfolds through
          a diverse range of projects, seamlessly blending technical proficiency
          with a keen eye for design.{" "}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <a href={Resume} download={"ResumeOfAli"}>
            <button className="btn flex items-center justify-center gap-3">
              Download Resume <MdOutlineFileDownload />{" "}
            </button>
          </a>
          <Link to="#projects" reloadDocument>
            <span className="flex items-center justify-center gap-3 cursor-pointer">
              {" "}
              See Projects <FaArrowRightLong />{" "}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
