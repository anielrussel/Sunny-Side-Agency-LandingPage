import React from "react";
import "./home.css";
import hero from "../../assets/images/desktop/image-header.jpg";
import heroMobile from "../../assets/images/mobile/image-header.jpg";
import arrowdown from "../../assets/images/icon-arrow-down.svg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <div className="home-hero">
        <h1>WE ARE CREATIVES</h1>
        <div className="home-hero-image">
          <motion.img src={arrowdown} alt="arrowdown" className="arrowdown" 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ type: 'tween', ease: 'backInOut',  duration: 2, repeat: Infinity}}
          />
          <img src={hero} alt="orange" className="header-image-desktop" />
          <img src={heroMobile} alt="orange" className="header-image-mobile" />
        </div>
      </div>
    </div>
  );
};

export default Home;
