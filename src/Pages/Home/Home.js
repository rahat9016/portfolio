import React from "react";
import Footer from "../../Components/Footer/Footer";
import AboutSection from "../../Components/Home/AboutSection";
import HeaderSection from "../../Components/Home/HeaderSection";
import Skills from "./../../Components/Skills/Skills";
import Service from "./../../Components/Service/Service";

const Home = () => {
  return (
    <section className="">
      <HeaderSection />
      <AboutSection />
      <Skills />
      <Service />
      <Footer />
    </section>
  );
};

export default Home;
