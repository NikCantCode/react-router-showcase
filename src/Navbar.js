import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <Link to="/Dog">Dog</Link>
        </li>
        <li>
          <Link to="/Hamster">Hamster</Link>
        </li>
        <li>
          <Link to="/Cat">Cat</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
