import React from "react";
import "./col4.css";
import col4desktop from "../../assets/images/desktop/image-graphic-design.jpg";
import col4mobile from "../../assets/images/mobile/image-graphic-design.jpg";
import col4desktop1 from "../../assets/images/desktop/image-photography.jpg";
import col4mobile1 from "../../assets/images/mobile/image-photography.jpg";
import { motion } from "framer-motion";

const Col4 = () => {
  return (
    <div className="home-col4">
      <motion.div className="home-col4-image1"
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ type: 'tween' , duration: 1 }}
      >
        <img src={col4desktop} alt="" className="col4-image-desktop" />
        <img src={col4mobile} alt="" className="col4-image-mobile" />
        <div className="home-col4-image1-text">
          <h1>Graphic Design</h1>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential client's
            attention.
          </p>
        </div>
      </motion.div>
      <motion.div className="home-col4-image2"
         initial={{ y: -100 }}
         whileInView={{ y: 0 }}
         transition={{ type: 'tween' , duration: 1 }}
      >
        <img src={col4desktop1} alt="" className="col4-image-desktop" />
        <img src={col4mobile1} alt="" className="col4-image-mobile" />
        <div className="home-col4-image2-text">
          <h1>Photography</h1>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Col4;
