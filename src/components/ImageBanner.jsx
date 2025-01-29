import React from 'react';
    import './ImageBanner.css';
    
    function ImageBanner({ imageUrl, altText }) {
      return (
        <div className="image-banner">
          <img src={imageUrl} alt={altText} />
        </div>
      );
    }
    
    export default ImageBanner;
