import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import cross from "../../assets/images/icon-cross.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [ color, setColor ] = useState(false)
  const changeColor = () => {
      if (window.scrollY >= 600) {
          setColor(true)
      } else {
          setColor(false)
      }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className="navbar">
      <nav className={color ? 'active' : 'navbar'}>
        <div className="navbar-links">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <button>CONTACT</button>
          </ul>
        </div>
        <div className="navbar-menu">
          <div className="navbar-menu-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-menu-images">
            {toggleMenu ? (
              <img
                src={cross}
                alt="close"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <img
                src={hamburger}
                alt="menu"
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="navbar-menu-container">
                <ul>
                  <li>About</li>
                  <li>Services</li>
                  <li>Projects</li>
                  <button>CONTACT</button>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
