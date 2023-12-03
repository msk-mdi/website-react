import React, { useEffect, useState } from 'react';
import './index.css';
import margherita from '../../assets/pizza/margherita.jpg';
import pepperoni from '../../assets/pizza/pepperoni.jpg';
import formaggi from '../../assets/pizza/formaggi.jpg';
import tab from "../data/pizza.js";

const Slider = () => {
    const images = [margherita, pepperoni, formaggi];
    // const [texts, setTexts] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const changeSlide = (increment) => {
      const newSlide = (currentSlide + increment + images.length) % images.length;
      setCurrentSlide(newSlide);
    };
  
    return (
      <div className="slider-container">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={index}>
              <img src={image} alt={`Image ${index + 1}`}  />
              <ul>
              <li><h2 class="color">{tab[index].name}</h2></li>
                <li><p class="color">{tab[index].description}</p></li>
                <li><p class="color prix">{tab[index].price+"$"}</p></li>
              

              </ul>
            </div>


          ))}
        </div>
        <div className="prev" onClick={() => changeSlide(-1)}>&#10094;</div>
        <div className="next" onClick={() => changeSlide(1)}>&#10095;</div>

      </div>
    );
  };
  
  export default Slider;
  