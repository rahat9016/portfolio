import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="border-4 border-[#f7f7f7] p-1 h-56 w-full">
      <div className="bg-[#f7f7f7] p-2 h-full">
        <div className="border-[5px] border-[#fff] p-[5px] inline-block ">
          <service.icon className="text-3xl text-secondary " />
        </div>
        <h2 className="font-bold text-xl my-2 text-secondary font-poppins">
          {service.title}
        </h2>
        <p className="text-secondary font-montserrat">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
