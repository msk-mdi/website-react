import "./index.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://guide.michelin.com/fr/fr/article/features/le-repas-italien-traditionnel">
            Menu
          </a>
        </li>
        <li>
          <a href="https://en.wikipedia.org/wiki/Restaurant" target="__blank">
            About us
          </a>
        </li>
        <li>
          <a
            href="https://www.foodpanda.my/restaurant/w5z1/pitali-pizza"
            target="__blank"
          >
            Orderline
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
