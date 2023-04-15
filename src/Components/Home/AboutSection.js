import React from "react";
import Profile from "../../Images/profile.png";
import { DiReact } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
const AboutSection = () => {
  return (
    <div className="w-full lg:w-8/12 md:mx-auto py-10 ">
      <h1 className=" text-2xl lg:text-5xl font-bold text-darkBlack font-montserrat text-center mb-10">
        ABOUT ME
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-4">
        <div className="mx-auto p-2">
          <div className="w-[285px] lg:w-[420px] h-[285px] lg:h-[420px]  rounded-full border-2 shadow-sm border-[#DEE9FF] flex items-center justify-center relative">
            <span className="absolute left-[-20px] w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ">
              <DiReact className=" text-3xl text-[#00D8FF] animate-spin"/>
            </span>
            <span className="absolute top-[-20px] w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ">
              <GrNode className=" text-3xl text-[#3F9136] animate-bounce"/>
            </span>
            <span className="absolute bottom-[-20px] w-10 h-10 rounded-full bg-[#FEDD25] shadow-md flex items-center justify-center ">
              <IoLogoJavascript className=" text-3xl text-white animate-bounce"/>
            </span>
            <span className="absolute right-[-20px] w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center ">
              <SiMongodb className=" text-3xl text-[#46A037] animate-bounce"/>
            </span>
            <div className="w-[220px] h-[220px] lg:w-[340px] lg:h-[340px] rounded-full border-2  border-[#DEE9FF] flex items-center justify-center">
              <div className="relative bg-[#233860] w-[220px] lg:w-[280px] h-[220px] lg:h-[280px] rounded-full overflow-hidden border-[6px] border-[#DEE9FF] shadow-lg ">
                <img
                  src={Profile}
                  alt=""
                  className="w-10/12 absolute left-0 bottom-0"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0 mt-10 lg:mt-0">
          <h2 className="text-darkBlack font-bold font-Josefin text-xl">
            Welcome to <span className="text-red text-poppins">My Profile</span>
          </h2>
          <h2 className="text-darkBlack font-bold font-Josefin text-base mb-2">
            {" "}
            - It's my pleasure to introduce about myself.
          </h2>
          <p className="text-justify">
            Hello i'm{" "}
            <span className="text-red text-poppins">Minhajur Rohoman</span> from
            Bangladesh. i'm Full stack web developer . I have deep understanding
            of the technologies and the processes required for realising a
            successful web project from A to Z.
          </p>
          <h2 className="text-darkBlack font-bold font-Josefin text-xl my-3">
            What are my values?
          </h2>
          <p className="text-justify	">
            When developing a web project, I focus on understanding the business
            goals and delivering a final product that will really work for the
            client.
          </p>
          <ul className="mt-4">
            <li className="font-bold">
              Phone:- <span className="font-normal">+8801638627290</span>
            </li>
            <li className="font-bold">
              E-mail:-{" "}
              <span className="font-normal">minhajurrohoman9016@gmail.com</span>
            </li>
            <li className="font-bold">
              Linkedin:-{" "}
              <span className="font-normal">
                <a href="https://www.linkedin.com/in/minhajur9016/">click</a>
              </span>
            </li>
          </ul>
          <a
            href="#contact"
            className="px-10 py-3 text-sm bg-red hover:bg-transparent hover:text-secondary hover:border-2 border-red ease-in duration-300  rounded-full  font-bold text-white inline-block font-nunito mt-6"
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
