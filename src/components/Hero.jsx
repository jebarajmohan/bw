import React from 'react';
    import './Hero.css';
    import ImageBanner from './ImageBanner';
    
    function Hero() {
      return (
        <section className="hero">
          <ImageBanner imageUrl="https://i.postimg.cc/HsxjcwYC/biriyani-2-1.png" altText="Biriyani Banner" />
        </section>
      );
    }
    
    export default Hero;
