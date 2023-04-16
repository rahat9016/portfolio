import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="border-4 border-[#f7f7f7] p-1 h-56 w-full group overflow-hidden">
      <div className="bg-[#f7f7f7] p-2 h-full group-hover:bg-green-400 hover:bg-green-400 duration-200 group-hover:shadow-md hover:shadow-md">
        <div className="border-[5px] border-[#fff] p-[5px] inline-block ">
          <service.icon className="text-3xl text-secondary group-hover:text-white hover:text-white group-hover:animate-bounce hover:animate-bounce" />
        </div>
        <h2 className="font-bold text-xl my-2 text-secondary group-hover:text-white hover:text-white  font-poppins">
          {service.title}
        </h2>
        <p className="text-secondary font-montserrat group-hover:text-white hover:text-white ">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
