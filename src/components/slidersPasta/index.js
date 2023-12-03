import React, { useEffect, useState } from "react";
import "./index.css";
import fettuccine from "../../assets/pates/fettuccine.jpg";
import ravioli from "../../assets/pates/ravioli.jpg";
import spaghetti from "../../assets/pates/spaghetti.jpg";
import tab from "../data/pasta.js";

const SliderPasta = () => {
  const images = [fettuccine, ravioli, spaghetti];
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (increment) => {
    const newSlide = (currentSlide + increment + images.length) % images.length;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="slider1-container">
      <div
        className="slider1"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className={`slide1 ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <ul>
              <li>
                <h2 class="color">{tab[index].name}</h2>
              </li>
              <li>
                <p class="color">{tab[index].description}</p>
              </li>
              <li>
                <p class="color prix">{tab[index].price + "$"}</p>
              </li>
            </ul>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="prev1" onClick={() => changeSlide(-1)}>
        &#10094;
      </div>
      <div className="next1" onClick={() => changeSlide(1)}>
        &#10095;
      </div>
    </div>
  );
};

export default SliderPasta;
