import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { GoDownload } from "react-icons/go";

const Sidebar = () => {
  return (
    <div>
      <img
        src="./images/Photo.jpg"
        alt="User avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-3 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-blue-600">Prathamesh </span>
        Talavdekar
      </h3>
      <p className="lg:mx-1 mx-16 px-2 py-1 my-3 bg-zinc-200 rounded-xl">
        Web Devloper
      </p>
      <a
        className="flex items-center justify-center gap-2 lg:mx-1 mx-16 px-2 py-1 my-3 bg-zinc-200 rounded-xl"
        href=""
      >
        <GoDownload className="w-5 h-5 " /> Download Resume
      </a>

      {/* social Icons  */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full">
        <a href="">
          <FaLinkedin className="w-8 h-8 cursor-pointer text-cyan-800" />
        </a>
        <a href="">
          <FaGithub className="w-8 h-8 cursor-pointer text-black" />
        </a>
        <a href="">
          <FaInstagram className="w-8 h-8 cursor-pointer text-pink-400" />
        </a>
      </div>

      {/* Adress  */}
      <div
        className="my-5 py-4 bg-zinc-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Malvan, India</span>
        </div>
        <p className="my-2">prathamesh1073@gmail.com</p>
        <p className="my-2">9325529679</p>
      </div>
      <button className="bg-gradient-to-r from-blue-200 to-blue-400 text-white w-8/12 rounded-full py-2 px-5 my-2">
        Email Me
      </button>
      <button className="bg-gradient-to-r from-blue-200 to-blue-400 text-white w-8/12 rounded-full py-2 px-5 my-2" onClick={() => window.open('mailto:prathamesh1073@gmail.com')}>
        Toggle UI Theme
      </button>
    </div>
  );
};

export default Sidebar;
