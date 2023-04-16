import React from "react";
import { experiences } from "./../../Data/experienceData";

const Skills = () => {
  return (
    <div className="bg-[rgba(88,60,234,.03137254901960784)] py-10">
      <h1 className="text-center text-3xl font-bold font-nunito my-10">
        I have experience with these technologies
      </h1>
      <div className="md:w-7/12 md:mx-auto grid grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 lg:gap-6 items-center ">
        {experiences.map((experience, index) => (
          <div key={index} className="m-2">
            <img
              src={experience.img}
              alt=""
              className="w-20 hover:shadow-md p-2 rounded-sm ease-in duration-300 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
