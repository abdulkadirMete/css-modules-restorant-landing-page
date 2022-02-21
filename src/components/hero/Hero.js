import React, { useState, useEffect } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { Navbar } from "../navbar/Navbar";
import { useInView } from "react-hook-inview";
import "./Hero.css";

export const Hero = () => {
  // Navbar Hide/Show
  const [hide, setHide] = useState(false);
  const [ref, isVisible] = useInView({
    threshold: 0.2,
    rootMargin: "-16px",
  });

  // Toggle Open/Close
  const [show, setShow] = useState(true);

  const toggleSidebar = () => {
    setShow(!show);
  };
  return (
    <div className="container" ref={ref}>
      <Navbar toggleSidebar={toggleSidebar} isVisible={isVisible}></Navbar>
      <Sidebar toggleSidebar={toggleSidebar} show={show}></Sidebar>
      <div className="content">
        <div className="contentItems">
          <h1 className="heading">Yummy and beautiful desserts</h1>
          <p className="text">
            A local favorite for 83+ years. Featuring our famous DeAngelis
            donuts ice cream and our cakes. Full menu offered all day and late
            night. Full bar with entertainment on weekends.
          </p>
          <button className="btn-hero">Book now</button>
        </div>
      </div>
    </div>
  );
};
