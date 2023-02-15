import React from 'react'
import './footer.css'
import logoFooter from '../../assets/images/logo-footer.svg'
import facebook from '../../assets/images/icon-facebook.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'

const Footer = () => {
  return (
        <footer>
            <img src={logoFooter} alt='' />
            <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
            </ul>
            <div className="footer-social">
                <img src={facebook} alt='' />
                <img src={instagram} alt='' />
                <img src={twitter} alt='' />
                <img src={pinterest} alt='' />
            </div>
        </footer>
  )
}

export default Footer