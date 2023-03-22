import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Header from "../Header/Header";
import bg from "../../Images/bg.png";
import bg1 from "../../Images/bg.svg";
import "./style.css";
const HeaderSection = () => {
  return (
    <div className="bg-[rgba(88,60,234,.03137254901960784)]">
      <Header />
      <div
        className="h-[640px] lg:h-[540px] px-10 lg:px-0 py-10 relative bg-no-repeat bg-left bg-contain"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center md:w-8/12 md:mx-auto py-0 md:py-20">
          <div>
            <h1 className="text-3xl text-darkBlack font-bold lg:text-5xl lg:font-extrabold font-montserrat mb-6 ">
              Minhajur Rohoman
            </h1>
            <p className="text-base lg:text-xl leading-6 font-nunito">
              I'm a web developer with a passion for learning. I help your
              business and individuals by developing websites. I build websites
              to make you successful in the long term.{" "}
            </p>
            <a
              href="#contact"
              className="animate-bounce px-10 py-3 text-sm drop-shadow-md bg-red hover:bg-transparent hover:text-secondary hover:border-2 border-red ease-in duration-300  rounded-full  font-bold text-white inline-block font-nunito mt-6"
            >
              Get in Touch
            </a>
          </div>
          <img src={bg1} alt="" className="h-96 " />
        </div>
        <div className="absolute right-[-105px] lg:right-0 rotate-90 flex flex-row gap-2 items-center	top-[50%]">
          <p>Social Links</p>
          <span className="w-10 h-[1px] bg-secondary mx-5"></span>
          <a
            href="#facebook"
            className="hover:text-blue-700 hover:rotate-[-90deg]	ease-in duration-300 text-lg	"
          >
            <FaFacebookF />
          </a>
          <a
            href="#facebook"
            className="hover:text-secondary hover:rotate-[-90deg]	ease-in duration-300 text-lg"
          >
            <BsGithub />
          </a>
          <a
            href="#facebook"
            className="hover:text-blue-600 hover:rotate-[-90deg]	ease-in duration-300 text-lg"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
