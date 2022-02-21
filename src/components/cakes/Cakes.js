import React, { useEffect } from "react";
import "./Cakes.css";
import { cakes } from "../../data/menu";
import { CakeItem } from "./CakeItem";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-hook-inview";
export const Cakes = () => {
  // opacity animations

  const [ref, isVisible] = useInView();
  const animation = useAnimation();
  const initial = { opacity: 0, y: 50 };

  useEffect(() => {
    if (isVisible) {
      animation.start({ opacity: 1, y: 0 });
    }
  }, [isVisible]);

  return (
    <section className="cakes">
      <h1 className="cakes-title">Most Popular</h1>
      <motion.div
        ref={ref}
        animate={animation}
        initial={initial}
        transition={{ delay: 0.3, duration: 2 }}
        className="cake-container"
      >
        {cakes.map((cake, index) => {
          return <CakeItem key={index} {...cake}></CakeItem>;
        })}
      </motion.div>
    </section>
  );
};
