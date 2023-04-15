import React from "react";
import { headerInformation } from "../../Data/Data";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Logo from "../../Images/logo.png";
const Header = () => {
  return (
    <div className="shadow-lg ">
      <div className="lg:w-8/12 lg:mx-auto flex justify-between h-20 items-center px-4 lg:px-0">
        <div>
          <h1 className="font-nunito font-bold text-[#066C61] text-2xl flex items-center gap-2">
            <img src={Logo} alt="" className="w-10" /> Minhajur Rohoman
          </h1>
        </div>
        <div className="flex gap-6">
          <HiOutlineMenuAlt3 className="text-2xl font-extrabold lg:hidden" />
          {headerInformation.map((header, index) => {
            return (
              <a
                href={header.location}
                key={index}
                className="font-nunito text-secondary hidden lg:block"
              >
                {header.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
