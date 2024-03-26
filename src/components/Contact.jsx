import React from "react";

const ContactUs = () => {
  return (
    <div className="px-3 max-w-6xl mx-auto ">
      <div className="sm:px-6 lg:px-8 text-center bg-[#1B1B1A] text-[#7a7a7a] border-[2px] border-[#252524] rounded-md py-20">
        <h2 className="text-3xl font-semibold mb-1 grad">
          Have a project in mind?
        </h2>
        <p className="text-lg mb-6 ">Lets get started.</p>
        <a
          href="https://www.linkedin.com/in/olifarhaan/"
          className="hover:text-white transition "
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">Get in Touch</button>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
