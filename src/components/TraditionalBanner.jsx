import React from 'react';
import "./TraditionalBanner.css"; // Ensure this path is correct

const TraditionalBanner = ({backgroundImage,title}) => {
  return (
    <div className="banner-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Background with overlay */}
      <div className="banner-background">
        <div className="banner-overlay"></div>
      </div>

      {/* Content container */}
      <div className="banner-content">
        {/* Text content */}
        <div className="banner-text">
        <h1 className="banner-title">
  {title ? (
    title.split("<br />").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  ) : (
    <>
      Where Tradition <br /> Meets Timeless Taste
    </>
  )}
</h1>
          
          <button className="banner-button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TraditionalBanner;
