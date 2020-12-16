import React from "react";

import DATA from "../data/usage.json";

import Buttons from "../components/Buttons";
import Code from "../components/Code";

const Usage = () => {
  return (
    <section className="usage">
      <div className="usage__container">
        <img className="usage__img" src={DATA.image} alt="" />
        <h2>{DATA.title}</h2>
        <p>{DATA.description}</p>
        <Code />
        <Buttons />
      </div>
    </section>
  );
};

export default Usage;
