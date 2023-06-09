import React from "react";
import ServiceCard from "./../ServiceCard/ServiceCard";
import { services } from "./../../Data/Data";
const Service = () => {
  return (
    <div className="py-10 w-full lg:w-8/12 lg:mx-auto px-2 lg:px-0">
      <h1 className="text-center text-5xl font-bold">MY SERVICE</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 ">
        {services.map((service, index) => (
          <ServiceCard service={service} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Service;
