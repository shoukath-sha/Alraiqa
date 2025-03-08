
import React from "react";


import defaultBg from "../assets/Brand.png";



const MainBanner = ({backgroundImage,heading,title,}) => {
  const styles = {
    container: {
      position: "relative",
      width: "auto",
      height: "100vh",
      backgroundImage: `url(${backgroundImage || defaultBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      padding: "2rem",
      color: "white",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "auto",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      position: "relative",
      zIndex: 2,
      maxWidth: "500px",
    },
    heading: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginTop: "25rem",
      fontFamily: "serif",
      
    },
    paragraph: {
      fontSize: "1rem",
      lineHeight: "1.5",
      fontWeight: "300",
      // marginTop: "14rem",
    },
    
  };

  return (
    <>
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <div style={styles.content}>
        <h1 style={styles.heading}> { heading||"Our Brands"}</h1>
        <p style={styles.paragraph}>
         { title|| `At Al Raiqa Dates, we are passionate about sharing the timeless
          tradition of Arabian hospitality through the goodness of fresh dates.
          As the company of a pioneering date in Abu Dhabi, our journey...`}
        </p>
      </div>
    </div>
    
   
    </>
  );
};

export default MainBanner;
