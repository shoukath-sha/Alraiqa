import React from 'react';
import foodg1 from "../assets/foodg1.png";
import foodg2 from "../assets/foodg2.png";
import foodg3 from "../assets/foodg3.png";


const FoodGallery = ({Imaging =[]}) => {
  const images = [
    {
      src: foodg1,
      alt: "Food image 1"
    },
    {
      src: foodg2,
      alt: "Food image 2"
    },
    {
      src: foodg3,
      alt: "Food image 3"
    },
    {
      src: foodg1,
      alt: "Food image 4"
    }
  ];

  const styles = {
    container: {
      width: '100%',
      overflow: 'hidden',
      padding: '20px',
      boxSizing: 'border-box',
    },
    imageStrip: {
      display: 'flex',
      gap: '15px',
      width: '100%',
    },
    imageWrapper: {
      flex: '1 0 auto',
      width: 'calc(25% - 12px)', // account for gap
      aspectRatio: '1/1',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageStrip}>
        {Imaging.map((image, index) => (
          <div key={index} style={styles.imageWrapper}>
            <img
              src={image.src}
              alt={image.alt}
              style={styles.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;