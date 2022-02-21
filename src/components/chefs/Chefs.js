import React from "react";
import { chefs } from "../../data/chefs";
import "./Chefs.css";
import { Slide } from "react-awesome-reveal";

export const Chefs = () => {
  return (
    <section className="chefs">
      <h1 className="title">Our Kitchen Chefs</h1>
      <div className="c-content">
        {chefs.map((chef, index) => {
          return (
            <Slide key={index} direction={index > 0 ? "right" : "left"}>
              <div className="c-group">
                <div className="c-image-wrapper">
                  <img src={chef.img} alt={chef.alt} className="c-image" />
                </div>
                <h3 className="c-name">{chef.name}</h3>
              </div>
            </Slide>
          );
        })}
      </div>
    </section>
  );
};
