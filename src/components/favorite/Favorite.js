import React from "react";
import "./Favorite.css";
import favoriteImg from "../../images/favourite.jpg";
import { Slide } from "react-awesome-reveal";

export const Favorite = () => {
  return (
    <section className="favorite">
      <h1 className="title">Our Favorite</h1>
      <div className="f-content">
        <Slide direction="left">
          <div className="f-image-wrapper">
            <img className="f-image" src={favoriteImg} />
          </div>
        </Slide>
        <Slide direction="right">
          <div className="f-desc-wrapper">
            <p className="f-desc">
              Strawberries and cream and spice with a zip of balsamic. This cake
              celebrates all the classic strawberry combinations, a little like
              a greatest hits album, but way more delicious!
            </p>
          </div>
        </Slide>
      </div>
      <button className="btn">Order Now</button>
    </section>
  );
};
