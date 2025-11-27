import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-list">
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/about">
        Sobre Nós
      </NavLink>
      <NavLink className="link" to="/contact">
        Contato
      </NavLink>
    </nav>
  );
};

export default Navbar;
