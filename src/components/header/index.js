import "./index.css";
import Button from "../ButtonParent";
import Navbar from "../navbar";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`myHeader ${isMenuOpen ? "active" : ""}`}>
      <div className={`navbar-header ${isMenuOpen ? "active" : ""}`}>
        <Navbar></Navbar>
      </div>

      <div class="toggle-btn" onClick={toggleMenu}>
        <ul>
          <li class="liste1"></li>
          <li class="liste2"></li>
          <li class="liste3"></li>
        </ul>
      </div>

      <div class="box">
        <h1>LA PIZZA DE LA MAMA</h1>
      </div>

      <div className={`button ${isMenuOpen ? "active" : ""}`}>
        <Button.CustomButton></Button.CustomButton>
      </div>
      <div className={`cerle ${isMenuOpen ? "active" : ""}`}>
        <Button.CustomButtonCercle></Button.CustomButtonCercle>
      </div>
    </header>
  );
}

export default Header;
