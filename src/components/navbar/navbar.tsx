import { NavLink } from "react-router-dom";
import "./navbar.css";

const NavBar: React.FC = () => {
  return (
    <>
      <nav>
        <ul className="navbar">
          <li className="navbar__item navbar__title">
            FAKELANDIA JUSTICE DEPARTMENT
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/misdemeanours">
              Misdemeanours
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/confession">
              Confess To Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
