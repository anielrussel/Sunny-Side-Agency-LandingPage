import React from "react";
import "./col6.css";
import milkbottles from "../../assets/images/desktop/image-gallery-milkbottles.jpg";
import orange from "../../assets/images/desktop/image-gallery-orange.jpg";
import cone from "../../assets/images/desktop/image-gallery-cone.jpg";
import sugarcubes from "../../assets/images/desktop/image-gallery-sugarcubes.jpg";
import milkbottlesMobile from "../../assets/images/mobile/image-gallery-milkbottles.jpg";
import orangeMobile from "../../assets/images/mobile/image-gallery-orange.jpg";
import coneMobile from "../../assets/images/mobile/image-gallery-cone.jpg";
import sugarcubesMobile from "../../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import { motion } from "framer-motion";

const Col6 = () => {
  return (
    <div className="home-col6">
      <div className="home-col6-desktop">
        <motion.img
          src={milkbottles}
          alt="milk"
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ type: "tween", duration: 1.5 }}
        />
        <motion.img
          src={orange}
          alt="orange"
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ type: "tween", duration: 1.5 }}
        />
        <motion.img
          src={cone}
          alt="cone"
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ type: "tween", duration: 1.5 }}
        />
        <motion.img
          src={sugarcubes}
          alt="sugarcubes"
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          transition={{ type: "tween", duration: 1.5 }}
        />
      </div>
      <div className="home-col6-mobile">
        <img src={milkbottlesMobile} alt="milk" />
        <img src={orangeMobile} alt="orange" />
        <img src={coneMobile} alt="cone" />
        <img src={sugarcubesMobile} alt="sugarcubes" />
      </div>
    </div>
  );
};

export default Col6;
