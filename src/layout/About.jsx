import React from "react";

import DATA from "../data/about.json";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h2>{DATA.title}</h2>
        <p>{DATA.description}</p>
        <img src={DATA.image} alt="about" />
      </div>
    </section>
  );
};

export default About;
