import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import kio1 from "../assets/kio1.png";
import kio2 from "../assets/kio2.png";
import kio3 from "../assets/kio3.png";



const KioskLocations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const locations = [
    {
      id: 1,
      name: 'Lulu Mall',
      image: kio1,
    },
    {
      id: 2,
      name: 'Golden Hub',
      image: kio2,
    },
    {
      id: 3,
      name: 'Safeer Mall',
      image: kio3,
    },
    {
        id: 4,
        name: 'Safeer Mall',
        image: kio3,
      },
    // Add more locations as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % locations.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + locations.length) % locations.length);
  };

  return (
    <>
      <style>
        {`
          .locations-section {
            padding: 2rem;
            background-color: #FDF6EC;
          }

          .outlet-label {
            color: #FFA500;
            font-size: 1rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
          }

          .section-title {
            font-size: 3rem;
            font-weight: 700;
            font-family: 'Playfair Display', serif;
            margin-bottom: 2rem;
          }

          .carousel-containers {
            position: relative;
            max-width: 1200px;
            margin: 0 auto;
          }

          .carousel-wrappers {
            display: flex;
            gap: 1.5rem;
            overflow: hidden;
          }

          .location-card {
            flex: 0 0 calc(33.333% - 1rem);
            position: relative;
            transition: transform 0.5s ease;
            transform: translateX(-${currentSlide * (100 / 3)}%);
          }

          .location-image {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 8px;
          }

          .location-name {
            position: absolute;
            bottom: 20px;
            left: 20px;
            color: white;
            font-size: 1.5rem;
            font-weight: 500;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          }

          .nav-buttons {
            display: flex;
            justify-content: flex-end;
            gap: 0.5rem;
            margin-top: 2rem;
          }

          .nav-buttoon {
            width: 50px;
            height:50px;
            border-radius: 50%;
            border: 1px solid #333;
            background-color: transparent;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .nav-button:hover {
            background-color: #008080;
            border-color: #008080;
            color: white;
          }

          .nav-button svg {
            width: 24px;
            height: 24px;
          }
        `}
      </style>

      <section className="locations-section">
        <div className="outlet-label"> —  OUR OUTLET</div>
        <h2 className="section-title">OUR KIOSKS NEAR YOU</h2>
        
        <div className="carousel-containers">
          <div className="carousel-wrappers">
            {locations.map((location) => (
              <div key={location.id} className="location-card">
                <img 
                  src={location.image} 
                  alt={location.name}
                  className="location-image"
                />
                <h3 className="location-name">{location.name}</h3>
              </div>
            ))}
          </div>

          <div className="nav-buttons">
            <button onClick={prevSlide} className="nav-buttoon">
              <ChevronLeft />
            </button>
            <button onClick={nextSlide} className="nav-buttoon">
              <ChevronRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default KioskLocations;