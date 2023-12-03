import React, { useEffect, useState } from "react";
import "./index.css";
import Caprese from "../../assets/salades/Caprese.jpg";
import Insalata from "../../assets/salades/Insalata di Mare.jpg";
import Panzanella from "../../assets/salades/Panzanella.jpg";
import tab from "../data/salade.js";

const SliderSalade = () => {
  const images = [Caprese, Insalata, Panzanella];
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (increment) => {
    const newSlide = (currentSlide + increment + images.length) % images.length;
    setCurrentSlide(newSlide);
  };

  return (
    <div className="slider2-container">
      <div
        className="slider2"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className={`slide2 ${index === currentSlide ? "active" : ""}`}
            key={index}
          >
            <img src={image} alt={`Image ${index + 1}`} />
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
          </div>
        ))}
      </div>
      <div className="prev2" onClick={() => changeSlide(-1)}>
        &#10094;
      </div>
      <div className="next2" onClick={() => changeSlide(1)}>
        &#10095;
      </div>
    </div>
  );
};

export default SliderSalade;

// Avoir le serveur pour opty le code parle de ça a Mehdi
// Fonction pour charger le fichier JSON
// useEffect(()=>{
//   const  chargerJSON = async()=>{
//     try {
//       const reponse = await fetch("../data/pasta.json");
//       const tab = await reponse.json();

//       // Vous pouvez maintenant utiliser votre tableau de données
//       console.log(tab);
//       return tab
//     } catch (erreur) {
//       console.error('Une erreur s\'est produite lors du chargement du fichier JSON :', erreur);
//     }
//   }
//   chargerJSON();
// }
// )
