import React from "react";

import DATA from "../data/usage.json";

const Clients = () => {
  return (
    <section className="clients">
      <div className="clients__container">
        <h2>{DATA.title}</h2>
      </div>
    </section>
  );
};

export default Clients;
