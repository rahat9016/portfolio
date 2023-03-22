import React from "react";
import Profile from "../../Images/profile.png";
const AboutSection = () => {
  return (
    <div className="md:w-8/12 md:mx-auto py-10 ">
      <h1 className=" text-2xl lg:text-5xl font-bold text-darkBlack font-montserrat text-center">
        ABOUT ME
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 items-center my-10">
        <div className="">
          <img
            src={Profile}
            alt=""
            className="bg-primary w-60 ml-auto mr-auto lg:w-[720px]"
          />
        </div>
        <div className="px-4 lg:px-0 mt-10 lg:mt-0">
          <h2 className="text-darkBlack font-bold font-Josefin text-xl">
            Welcome to <span className="text-red text-poppins">My Profile</span>
          </h2>
          <h2 className="text-darkBlack font-bold font-Josefin text-base mb-2">
            {" "}
            - It's my pleasure to introduce about myself.
          </h2>
          <p>
            Hello i'm{" "}
            <span className="text-red text-poppins">Minhajur Rohoman</span> from
            Bangladesh. i'm Full stack web developer . I have deep understanding
            of the technologies and the processes required for realising a
            successful web project from A to Z.
          </p>
          <h2 className="text-darkBlack font-bold font-Josefin text-xl my-3">
            What are my values?
          </h2>
          <p>
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
