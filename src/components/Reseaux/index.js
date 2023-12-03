import "./index.css";
import facebook from "../../assets/reseaux/facebooklogo.png";
import twitter from "../../assets/reseaux/twitterOnly.png";
import instagram from "../../assets/reseaux/instaOnly.png";

export function Reseaux() {
  return (
    <div className="LogoReseaux">
      <ul>
        <li>
          <a href="https://www.facebook.com/?locale=fr_FR" target="__blank">
            <img src={facebook}></img>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/free?lang=fr" target="__blank">
            <img src={twitter}></img>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/explore/" target="__blank">
            <img src={instagram}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
