import React from 'react';
    import './Footer.css';
    import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
    
    function Footer() {
      return (
        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-left">
              <div className="footer-logo">
                <img src="https://i.ibb.co/JCZjMbk/biriyani-culture-logo.png" alt="Biriyani Culture Logo" />
              </div>
              <p>Biryani is not just a dish, it’s a love story</p>
              <p>Phone No : 7451212545</p>
              <div className="social-icons">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaXTwitter /></a>
              </div>
              <p>© Biriyani Culture all rights reserved</p>
            </div>
            <div className="footer-right">
              <div className="footer-menu">
                <h4>Our Menu</h4>
                <ul>
                  <li><a href="#">Chicken Biriyani</a></li>
                  <li><a href="#">Mutton Biriyani</a></li>
                  <li><a href="#">Biriyani Combo's</a></li>
                  <li><a href="#">Veg Biriyani</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Qucik Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
    }
    
    export default Footer;
