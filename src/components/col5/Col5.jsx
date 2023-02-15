import React from "react";
import "./col5.css";
import emily from "../../assets/images/image-emily.jpg";
import thomas from "../../assets/images/image-thomas.jpg";
import jennie from "../../assets/images/image-jennie.jpg";
import { motion } from "framer-motion";

const Col5 = () => {
  return (
    <div className="home-col5">
      <h1>CLIENT TESTIMONIALS</h1>
      <div className="home-col5-row">
        <div className="emily">
          <img src={emily} alt="" />
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
          >
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </motion.p>
          <div className="emily-text">
            <h1>Emily R.</h1>
            <span>Marketing Director</span>
          </div>
        </div>
        <div className="thomas">
          <img src={thomas} alt="" />
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
          >
            Sunnyside's enthusiasm coupled with their keen interest in our
            brand's success made it satisfying and enjoyable exerience.
          </motion.p>
          <div className="thomas-text">
            <h1>Thomas S.</h1>
            <span>Chief Operating Officer</span>
          </div>
        </div>
        <div className="jennie">
          <img src={jennie} alt="" />
          <motion.p
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ type: "tween", duration: 1 }}
          >
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </motion.p>
          <div className="jennie-text">
            <h1>Jennie F.</h1>
            <span>Business Owner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col5;
