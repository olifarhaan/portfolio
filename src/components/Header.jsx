import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="">
      <div className="border-b-[2px] border-b-borderColor px-3 max-w-6xl mx-auto">
        <div className="flex mx-auto justify-between">
          {/* Primary menu and logo */}
          <div className="flex items-center gap-16">
            {/* logo */}
            <div
              className="flex gap-2 items-center justify-center cursor-pointer py-3"
              onClick={() => navigate("/")}
            >
              <span className="grad text-xl sm:text-3xl">M. Ali Farhan</span>
            </div>
          </div>
          {/* secondary */}
          <div className="flex gap-4">
            <div className="flex items-center gap-4 text-muted">
              <a
                href="https://www.linkedin.com/in/olifarhaan/"
                className="hover:text-white transition "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />{" "}
              </a>
              /{" "}
              <a
                href="https://github.com/olifarhaan/"
                className="hover:text-white transition "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />{" "}
              </a>{" "}
              /{" "}
              <a
                href="https://dribbble.com/olifarhaan/"
                className="hover:text-white transition "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDribbble />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
