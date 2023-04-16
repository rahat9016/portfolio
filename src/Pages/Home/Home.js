import React from "react";
import Footer from "../../Components/Footer/Footer";
import Skills from "./../../Components/Skills/Skills";
import Service from "./../../Components/Service/Service";
import FeaturedProjects from "../../Components/FeaturedProjects/FeaturedProjects";
import AboutSection from "../../Components/HeaderAND_About/AboutSection";
import HeaderSection from "../../Components/HeaderAND_About/HeaderSection";

const Home = () => {
  return (
    <section className="">
      <HeaderSection />
      <AboutSection />
      <Skills />
      <Service />
      <FeaturedProjects />
      <Footer />
    </section>
  );
};

export default Home;
