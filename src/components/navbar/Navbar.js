import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.css";

export const Navbar = ({ toggleSidebar,isVisible }) => {


  return (
    <nav className={`navbar ${!isVisible ? 'move':''}`}>
      <div className="navIcon">
        <FaBars onClick={toggleSidebar} />
      </div>
      <Link className="navLink" to="/">
        <div className="desktop">Marshmallow & Cakes</div>
      </Link>
    </nav>
  );
};
