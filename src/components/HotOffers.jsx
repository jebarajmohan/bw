import React from 'react';
import './HotOffers.css';

function HotOffers() {
  return (
    <section className="hot-offers">
      <div className="container hot-offers-content">
        <h2>Join for hot offers</h2>
        <p>Biryani is not just a dish, it’s a love story.</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Your Email Address" />
          <button className="subscribe-btn">Subscribe Now</button>
        </div>
      </div>
    </section>
  );
}

export default HotOffers;