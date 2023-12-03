import "./index.css";
import React, { useState } from "react";

const CustomButtonCercle = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="cercle">
      <a href="https://www.quandoo.it/en" target="__blank">
        <button
          className={isHovered ? "hovered" : ""}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>Reserver</span>
        </button>
      </a>
    </div>
  );
};
export default CustomButtonCercle;
