import React from "react";
import "./col3.css";
import col3desktop from "../../assets/images/desktop/image-stand-out.jpg";
import col3mobile from "../../assets/images/mobile/image-stand-out.jpg";
import { motion } from "framer-motion";

const Col3 = () => {
  return (
    <div className="home-col3">
      <motion.div
        className="home-col3-image"
        initial={{ x: -200 }}
        whileInView={{ x: 0 }}
        transition={{ type: "tween", duration: 1.2 }}
      >
        <img src={col3desktop} alt="" className="col3-image-desktop" />
        <img src={col3mobile} alt="" className="col3-image-mobile" />
      </motion.div>
      <motion.div
        className="home-col3-text"
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <h1>Stand out to the right audience</h1>
        <p>
          Using a collaboration formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </p>
        <a href="">LEARN MORE</a>
      </motion.div>
    </div>
  );
};

export default Col3;
