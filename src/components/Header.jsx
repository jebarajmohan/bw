import React from 'react';
import './Header.css';
import { BsCart } from 'react-icons/bs';

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <img src="https://i.ibb.co/JCZjMbk/biriyani-culture-logo.png" alt="Biriyani Culture Logo" className="logo-image" />
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Menus</a>
          <a href="#">Contact Us</a>
        </nav>
        <div className="header-actions">
          <a href="#" className="cart-icon"><BsCart /></a>
          <button className="order-now-btn">Order Now</button>
        </div>
      </div>
    </header>
  );
}

export default Header;