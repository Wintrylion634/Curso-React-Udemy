import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar-list">
      {/*  <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link> */}
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/about">
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
