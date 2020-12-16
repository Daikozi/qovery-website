import React from "react";

const Feature = ({ image, title, description, link, linkTitle }) => {
  return (
    <div className="feature">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link}>{linkTitle}</a>
    </div>
  );
};

export default Feature;
