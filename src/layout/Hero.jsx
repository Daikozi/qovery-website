import React from "react";

import DATA from "../data/hero.json";

import Buttons from "../components/Buttons";

const Hero = () => {
  return (
    <section className="hero">
      <img className="qovery_logo" src={DATA.logo} alt="Qovery Logo" />
      <div className="hero__container">
        <div className="hero__text">
          <div className="header__container">
            <h1>{DATA.title}</h1>
            <img src={DATA.github_star} alt="github star" />
          </div>
          <h3>{DATA.subtitle}</h3>
          <p className="hero__paragraph">{DATA.description}</p>
          <Buttons />
        </div>
        <div className="hero__img">
          <img src={DATA.image} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
