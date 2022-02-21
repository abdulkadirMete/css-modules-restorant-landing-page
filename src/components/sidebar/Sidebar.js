import React, { useState } from "react";
import "./Sidebar.css";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Sidebar = ({ toggleSidebar, show }) => {
  return (
    <aside className={`sidebar ${show ? "close" : ""}`}>
      <IoClose className="icon" onClick={toggleSidebar} />
      <ul className="sideMenu">
        <li>Menu</li>
        <li>Staff</li>
        <li>Custom cakes</li>
        <li>Contact</li>
        <button className="btn">Book Now</button>
      </ul>
    </aside>
  );
};
