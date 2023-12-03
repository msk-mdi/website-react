import React from "react";
import CustomButton from "./button";
import CustomButtonCercle from "./ButtonCercle";

const Button  = ({ children }) => {
  return <div>{children}</div>;
};

Button.CustomButton = CustomButton;
Button.CustomButtonCercle = CustomButtonCercle;

export default Button;