import "./index.css";
import React, { useState } from "react";
import { Paragraphe } from "../../paragraphe";

const CustomButton = () => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <button
      className={isHovered ? "hovered" : ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span>Login</span>
    </button>
  );
};

export default CustomButton;
