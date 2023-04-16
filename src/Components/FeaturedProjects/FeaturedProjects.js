import React from "react";
import { projects } from "../../Data/Data";
import { useState } from "react";
import {BsFillCheckCircleFill} from "react-icons/bs"
import {CiViewList} from "react-icons/ci"
import {MdTag} from "react-icons/md"
import {RiCloseLine} from "react-icons/ri"
import {AiFillGithub, AiOutlineCalendar} from "react-icons/ai"
const FeaturedProjects = () => {
  const [detailsModal, setDetailsModal] = useState(false);
  const [details, setDetails] = useState({});
  const showViewDetailsModal = (project) => {
    setDetailsModal(true);
    setDetails(project);
  };
  return (
    <div className="bg-[rgba(88,60,234,.03137254901960784)] py-10 lg:py-20">
      {/* View Modal */}

      <div className="w-full lg:w-8/12 mx-auto px-10 relative">
        {
            <div
            className={`absolute w-11/12 lg:w-7/12 h-fit rounded-md p-4 bg-[rgba(37,37,37,0.83)] shadow-lg z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
              detailsModal ? "block" : "hidden"
            }`}
          >
            <span className="w-8 h-8 flex items-center justify-center text-w
             text-2xl bg-green-600 rounded-full text-white absolute right-[-10px] top-[-10px] cursor-pointer" onClick={()=> {
                setDetailsModal(false)
                setDetails({})
             }}><RiCloseLine/></span>
            <div>
              <div className="flex justify-between items-center border-b border-secondary pb-2 ">
                  <h1 className="text-xl font-bold text-white">{details?.type}</h1>
                  <a
                  href={details?.livelink}
                  className="bg-rose-500 px-3 py-2 rounded-full text-white mt-2 inline-block"
                  target=" _blank"
                  >
                  Live Site
                  </a>
              </div>
              <p className="text-base font-bold my-2 text-[#ededed]">{details?.name}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <div>
                  <h1 className="flex items-center gap-1 text-[#fffdfd] text-xl font-bold"><CiViewList className="inline-block"/>Key Features</h1>
                  <ul>
                      {
                          details && details?.keyfeatures?.map(keyfeature=> <li className="flex gap-2 text-base text-[#ededed]"><BsFillCheckCircleFill className="text-3xl text-green-500"/>{keyfeature?.point}</li>)
                      }
                  </ul>
                  <h1 className="flex items-center gap-1 text-[#fffdfd] text-xl font-bold mt-2"><AiOutlineCalendar className="inline-block"/>Duration</h1>
                  <p className="text-[#ededed]">{details.duration}</p>
              </div>
              <div>
              <h1 className="flex items-center gap-1 text-[#fffdfd] text-xl font-bold"><MdTag className="inline-block"/>Technology Stack</h1>
                  <ul className="grid grid-cols-3 gap-2">
                      {
                          details?.technology?.map(keyfeature=> <li className="bg-rose-400 text-center rounded-sm text-white py-1">{keyfeature}</li>)
                      }
                  </ul>
              <h2 className="flex items-center gap-1 text-[#fffdfd] text-xl font-bold mt-3"><AiFillGithub className="text-white text-xl inline-block"/>Source Code</h2>
              <div className="flex gap-3 mt-3">
              <a href={details?.clientlink} className="text-green-700 flex items-center gap-1 cursor-pointer" target=" _blank"><AiFillGithub className="text-green-700 text-base inline-block"/>Client Side</a>   
              <a href={details?.serverlink} className="text-rose-400 flex items-center gap-1 cursor-pointer" target=" _blank"><AiFillGithub className="text-rose-400 text-base inline-block"/>Server Side</a>   
              </div>
              </div>
            </div>
          </div>
        }

        <div className={`${detailsModal ? "blur-sm" : "blur-none"}`}>
          {/* Project Header */}
          <h1 className="text-5xl font-poppins font-bold text-darkBlack text-center">
            Featured <span className="text-rose-500">Projects</span>
          </h1>
          {/* Show all projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-2 mt-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="h-96 overflow-hidden bg-white shadow-md p-1 rounded-md relative group"
              >
                <img
                  src={project.projectImage}
                  alt=""
                  className="h-full mx-auto"
                />
                <div className="w-full h-full absolute group-hover:bg-[#3333338e] hover:bg-[#3333338e] top-0 duration-200 overflow-hidden group-hover:flex  hover:flex group-hover:flex-col hover:flex-col items-center justify-center p-3 hidden">
                  <h1 className="text-xl font-bold text-white">
                    {project.type}
                  </h1>
                  <p className="text-sm  text-white">{project.name}</p>
                  <div className="flex gap-2">
                    <a
                      href={project.livelink}
                      className="bg-rose-500 px-3 py-2 rounded-full text-white mt-2 inline-block"
                      target=" _blank"
                    >
                      Live Site
                    </a>
                    <button
                      className="bg-green-500 px-3 py-2 rounded-full text-white mt-2 inline-block"
                      onClick={() => showViewDetailsModal(project)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
