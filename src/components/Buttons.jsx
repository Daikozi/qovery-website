import React from "react";

import DATA from "../data/buttons.json";

const Buttons = () => {
  return (
    <div className="buttons__container">
      <button>
        <img src={DATA.githubImg} alt="github logo" />
        {DATA.github}
      </button>
      <button>
        <img src={DATA.discordImg} alt="discord logo" />
        {DATA.discord}
      </button>
    </div>
  );
};

export default Buttons;
