import React from "react";
import Marquee from "react-fast-marquee";

function TechMarquee() {
  const core = [
    "Java",
    "Javascript",
    "C/C++",
    "Typescript",
    "Python",
    "SQL",
    "React",
    "Next",
    "Node",
    "Spring Boot",
    "Express",
    "Tailwind",
    "Bootstrap",
  ];
  const others = [
    "Firebase",
    "MongoDB",
    "Redis",
    "Docker",
    "WordPress",
    "Shopify",
    "SEO",
    "Git",
    "GitHub",
    "REST API",
  ];

  return (
    <div className="max-w-4xl mx-auto  flex items-center justify-center px-3">
      <div className="w-full flex flex-col items-center justify-center">
        <Marquee autoFill pauseOnHover className="mask-corner ">
          {core.map((tech, index) => (
            <div key={index} className="cursor-pointer">
              <span className="bg-[#1B1B1A] text-[#7a7a7a] text-xl border-[2px] border-[#252524] rounded-md m-2 py-2 px-4 inline-block">
                {tech}
              </span>
            </div>
          ))}
        </Marquee>
        <Marquee autoFill pauseOnHover direction="right" className="mask-corner">
          {others.map((tech, index) => (
            <div key={index} className="cursor-pointer">
              <span className="bg-[#1B1B1A] text-[#7a7a7a] text-xl border-[2px] border-[#252524] rounded-md m-2 py-2 px-4 inline-block">
                {tech}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default TechMarquee;
