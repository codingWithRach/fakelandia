import { NavLink } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/misdemeanours">Misdemeanours</NavLink>
          </li>
          <li>
            <NavLink to="/confession">Confess To Us</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
