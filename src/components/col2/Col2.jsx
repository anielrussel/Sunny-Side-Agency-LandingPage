import React from 'react'
import './col2.css'
import col2desktop from "../../assets/images/desktop/image-transform.jpg";
import col2mobile from "../../assets/images/desktop/image-transform.jpg";
import { motion } from 'framer-motion';

const Col2 = () => {
  return (
    <div className="home-col2">
        <motion.div className="home-col2-text"
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ type: 'tween' , duration: 1 }}
        >
          <h1>Transform your brand</h1>
          <p>
            We are full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most marketing for you.
          </p>
          <a href="">LEARN MORE</a>
        </motion.div>
        <motion.div className="home-col2-image"
        initial={{ x: 200 }}
        whileInView={{ x: 0 }}
        transition={{ type: 'tween' , duration: 1 }}
        >
            <img src={col2desktop} alt="egg" className="col2-image-desktop"/>
            <img src={col2mobile} alt="egg" className="col2-image-mobile"/>
        </motion.div>
      </div>
  )
}

export default Col2