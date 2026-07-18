import React from "react";

import Logo from "../assets/brand-logo.png";

import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to={"/"}>
        <img src={Logo} alt="MiniBLOG" />
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Sobre
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/login"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Registro"}
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Registre-se
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
