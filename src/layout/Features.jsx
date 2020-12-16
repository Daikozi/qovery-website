import React from "react";

import Feature from "../components/Feature";

import DATA from "../data/features.json";

const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        {DATA.map((feature) => {
          return (
            <Feature
              key={feature.id}
              image={feature.image}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              linkTitle={feature.linkTitle}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Features;
