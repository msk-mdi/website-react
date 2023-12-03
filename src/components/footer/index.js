import "./index.css";
import { Reseaux } from "../Reseaux";

function Footer () {
  return (
    <footer>
    <div class="ecran">
   <div class="Moncarte b1">
    <div class="info">
    <div >
      <h2> Adresse</h2>
     <ul>
            <li>5 Rue Montorgueil, 75001 Paris</li>
      </ul>
      </div>
     <div>
      <h2> Contact Us</h2>
     <ul>
            <li>Mail : restaurant.italien.paris@gmail.com</li>
            <li>Call : 07.92.94.95.91</li>
      </ul>
    </div>
    </div>
      <iframe class="carte"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10498.919648200765!2d2.3326083647938867!3d48.863360475573224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e188c783193%3A0xdf6c003521ec3416!2sLa%20Perla!5e0!3m2!1sfr!2sfr!4v1701341610902!5m2!1sfr!2sfr"></iframe>
    </div>
    <div class="Moncarte b2">
   <h2>Opening Hours</h2>
    <ul>
            <li>Monday : 3 PM - 10 PM</li> 

           <li>Tuesday : 3 PM - 10 PM</li>

           <li>Wednesday : 3 PM - 10 PM</li>

           <li>Thursday: 3 PM - 10 PM</li>

           <li>Friday : 3 PM - 10 PM</li>

           <li>Saturday:10.30 AM - 12 AM</li>
           
           <li>Sunday: 10:30 AM - 9 PM</li>
          
      </ul>
      <br></br>
      <br></br>
      <br></br>
      < Reseaux></Reseaux>
    </div>

    </div>
     <p>© 2023 by Stevens et Mehdi</p>
    </footer>
  );
}

export default Footer;
