import React from "react";
import "./Cakes.css";

export const CakeItem = ({ img, alt, title, desc, price, button }) => {
  return (
    <div className="item-container">
      <div className="img-wrapper"><img src={img} alt={alt} className="item-img" /></div>
      <div className="item-info">
        <h3 className="item-title">{title}</h3>
        <p className="item-desc">{desc}</p>
        <span className="item-price">{price}</span>
        <button className="btn cake">{button}</button>
      </div>
    </div>
  );
};
