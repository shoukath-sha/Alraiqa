// import React from 'react'

// import Brand from './Brand'
// import MainBanner from '../components/MainBanner'
// import bgImg from '../assets/brand.jpeg'
// import ProductCarousel from '../components/ProductCarousel'
// import TraditionalBanner from '../components/TraditionalBanner'
// import bgimg from '../assets/bg2.png'
// import FoodGallery from '../components/FoodGaller'
// import foodg1 from "../assets/foodg1.png";
// import foodg2 from "../assets/foodg2.png";
// import foodg3 from "../assets/foodg3.png";


// const NewBrand = () => {
  
//    const homeImages = [
//       { src: foodg1, alt: "Food image 1" },
//       { src: foodg2, alt: "Food image 2" },
//       { src: foodg3, alt: "Food image 3" },
//       { src: foodg1, alt: "Food image 4" }
//     ];
//   return (
//    <>
    
//    <MainBanner backgroundImage={bgImg}/>
   
   
//    const [activeCategory, setActiveCategory] = useState('All');
//      const [activeSlide, setActiveSlide] = useState(0);
//      const [filteredProducts, setFilteredProducts] = useState([]);
//      const [isDragging, setIsDragging] = useState(false);
//      const [startPos, setStartPos] = useState(0);
//      const [currentTranslate, setCurrentTranslate] = useState(0);
//      const [prevTranslate, setPrevTranslate] = useState(0);
//      const [animationID, setAnimationID] = useState(null);
//      const [slideWidth, setSlideWidth] = useState(0);
     
//      const sliderRef = useRef(null);
//      const trackRef = useRef(null);
//      const autoPlayRef = useRef(null);
   
//      const categories = ['All', 'DATES', 'STUFFED DATES', 'DATE SYRUPS'];
     
//      const products = [
//        // DATES with placeholder images
//        {
//          id: 4,
//          name: 'Ajwa Dates',
//          image: '/api/placeholder/400/300?text=Ajwa+Dates',
//          category: 'DATES'
//        },
//        {
//          id: 5,
//          name: 'Medjool Dates',
//          image: '/api/placeholder/400/300?text=Medjool+Dates',
//          category: 'DATES'
//        },
//        {
//          id: 6,
//          name: 'Safawi Dates',
//          image: '/api/placeholder/400/300?text=Safawi+Dates',
//          category: 'DATES'
//        },
//        // STUFFED DATES with placeholder images
//        {
//          id: 7,
//          name: 'Ajwa With Pecan',
//          image: d3,
//          category: 'STUFFED DATES'
//        },
//        {
//          id: 8,
//          name: 'Ajwa With Pista',
//          image: d2,
//          category: 'STUFFED DATES'
//        },
//        {
//          id: 9,
//          name: 'Safawi With Pista',
//          image: d1,
//          category: 'STUFFED DATES'
//        },
//        {
//          id: 10,
//          name: 'Dates Sugar',
//          image: s1,
//          category: 'DATE SYRUPS'
//        }
//      ];
   
//      // Calculate slide width and update on window resize
//      const calculateSlideWidth = () => {
//        if (sliderRef.current) {
//          const containerWidth = sliderRef.current.clientWidth;
//          const newSlideWidth = containerWidth;
//          setSlideWidth(newSlideWidth);
//          return newSlideWidth;
//        }
//        return 0;
//      };
   
//      useEffect(() => {
//        const handleResize = () => {
//          const newWidth = calculateSlideWidth();
         
//          // Update translate position based on new width
//          if (trackRef.current) {
//            const newTranslate = -activeSlide * newWidth;
//            setCurrentTranslate(newTranslate);
//            setPrevTranslate(newTranslate);
//            trackRef.current.style.transform = `translateX(${newTranslate}px)`;
//          }
//        };
   
//        calculateSlideWidth();
//        window.addEventListener('resize', handleResize);
       
//        return () => {
//          window.removeEventListener('resize', handleResize);
//        };
//      }, []);
   
//      useEffect(() => {
//        const filtered = activeCategory === 'All'
//          ? products
//          : products.filter(product => product.category === activeCategory);
//        setFilteredProducts(filtered);
//        setActiveSlide(0); // Reset to the first slide when category changes
//        setPrevTranslate(0);
//        setCurrentTranslate(0);
       
//        if (trackRef.current) {
//          trackRef.current.style.transform = `translateX(0px)`;
//        }
       
//        // Recalculate slide width when filtered products change
//        setTimeout(() => {
//          calculateSlideWidth();
//        }, 100);
//      }, [activeCategory]);
   
//      const nextSlide = () => {
//        if (activeSlide < filteredProducts.length - 1) {
//          setActiveSlide(activeSlide + 1);
//        } else {
//          setActiveSlide(0); // Loop back to first slide
//        }
//      };
   
//      const prevSlide = () => {
//        if (activeSlide > 0) {
//          setActiveSlide(activeSlide - 1);
//        } else {
//          setActiveSlide(filteredProducts.length - 1); // Loop to last slide
//        }
//      };
   
//      // Auto sliding functionality with pause on hover/touch
//      useEffect(() => {
//        const slider = sliderRef.current;
       
//        const startAutoPlay = () => {
//          autoPlayRef.current = setInterval(() => {
//            nextSlide();
//          }, 5000);
//        };
       
//        const stopAutoPlay = () => {
//          if (autoPlayRef.current) {
//            clearInterval(autoPlayRef.current);
//          }
//        };
       
//        if (slider) {
//          slider.addEventListener('mouseenter', stopAutoPlay);
//          slider.addEventListener('mouseleave', startAutoPlay);
//          slider.addEventListener('touchstart', stopAutoPlay);
//          slider.addEventListener('touchend', startAutoPlay);
         
//          startAutoPlay();
//        }
       
//        return () => {
//          stopAutoPlay();
//          if (slider) {
//            slider.removeEventListener('mouseenter', stopAutoPlay);
//            slider.removeEventListener('mouseleave', startAutoPlay);
//            slider.removeEventListener('touchstart', stopAutoPlay);
//            slider.removeEventListener('touchend', startAutoPlay);
//          }
//        };
//      }, [filteredProducts, activeSlide]);
   
//      // Smooth transition effect when activeSlide changes
//      useEffect(() => {
//        if (trackRef.current) {
//          const newWidth = calculateSlideWidth();
//          const newTranslate = -activeSlide * newWidth;
//          setCurrentTranslate(newTranslate);
//          setPrevTranslate(newTranslate);
//          trackRef.current.style.transform = `translateX(${newTranslate}px)`;
//        }
//      }, [activeSlide, filteredProducts]);
   
//      // Touch handlers with improved smoothness
//      const touchStart = (e) => {
//        setIsDragging(true);
//        setStartPos(getPositionX(e));
//        cancelAnimationFrame(animationID);
//      };
   
//      const touchMove = (e) => {
//        if (isDragging) {
//          const currentPosition = getPositionX(e);
//          const diff = currentPosition - startPos;
//          setCurrentTranslate(prevTranslate + diff);
         
//          // Apply the transform with less sensitivity to make it feel more controlled
//          const dampedTranslate = prevTranslate + diff * 0.6; // dampen factor
//          trackRef.current.style.transform = `translateX(${dampedTranslate}px)`;
//        }
//      };
   
//      const touchEnd = () => {
//        setIsDragging(false);
//        const threshold = slideWidth * 0.2;
//        const diff = currentTranslate - prevTranslate;
       
//        // Determine if we should move to next/prev slide or snap back
//        if (diff < -threshold && activeSlide < filteredProducts.length - 1) {
//          setActiveSlide(activeSlide + 1);
//        } else if (diff > threshold && activeSlide > 0) {
//          setActiveSlide(activeSlide - 1);
//        } else {
//          // Snap back to current slide
//          trackRef.current.style.transform = `translateX(${-activeSlide * slideWidth}px)`;
//        }
//      };
   
//      const getPositionX = (e) => {
//        return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
//      };
   
//      return (
//        <>
//          <style>
//            {`
//              .carousel-container {
//                width: 100%;
//                max-width: 1470px;
//                margin: 0 auto;
//                padding: 2rem 1rem;
//                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cpath d='M0 30 L30 0 L60 30 L30 60 Z' fill='none' stroke='%23999' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E");
//                overflow: hidden;
//              }
   
//              .carousel-title {
//                font-size: 2.25rem;
//                font-weight: 700;
//                text-align: center;
//                margin-bottom: 2rem;
//                color: black;
//              }
   
//              .category-nav {
//                display: flex;
//                flex-wrap: wrap;
//                justify-content: center;
//                gap: 0.5rem;
//                margin-bottom: 2rem;
//              }
   
//              .category-button {
//                padding: 0.5rem 1.5rem;
//                border-radius: 9999px;
//                background-color: white;
//                color: black;
//                border: none;
//                cursor: pointer;
//                transition: background-color 0.3s, transform 0.2s;
//              }
   
//              .category-button:hover {
//                background-color: #f0fdfa;
//                transform: translateY(-2px);
//              }
   
//              .category-button.active {
//                background-color: #0d9488;
//                color: white;
//              }
   
//              .carousel-wrapper {
//                position: relative;
//                margin: 0 auto;
//                max-width: 1000px;
//              }
   
//              .carousel-overflow {
//                overflow: hidden;
//                border-radius: 0.5rem;
//                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//                touch-action: pan-y;
//              }
   
//              .carousel-track {
//                display: flex;
//                transition: transform 0.3s ease;
//                height: auto;
//                will-change: transform;
//              }
   
//              .carousel-track.dragging {
//                transition: none;
//              }
   
//              .carousel-slide {
//                flex: 0 0 100%;
//                display: flex;
//                justify-content: center;
//                align-items: center;
//                user-select: none;
//              }
   
//              .product-card {
//                width: 100%;
//                max-width: 28rem;
//                display: flex;
//                flex-direction: column;
//                align-items: center;
//                transition: transform 0.3s ease;
//                padding: 1rem;
//              }
   
//              .product-card:hover {
//                transform: scale(1.02);
//              }
   
//              .product-image-container {
//                width: 100%;
//                overflow: hidden;
//                border-radius: 0.5rem;
//                aspect-ratio: 4/3;
//                background-color: white;
//                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//              }
   
//              .product-image {
//                width: 100%;
//                height: 100%;
//                object-fit: cover;
//                transition: transform 0.5s ease;
//                pointer-events: none;
//              }
   
//              .product-image:hover {
//                transform: scale(1.05);
//              }
   
//              .product-title {
//                font-size: 1.25rem;
//                font-weight: 600;
//                text-align: center;
//                margin-top: 1rem;
//                color: black;
//              }
   
//              .product-category {
//                color: white;
//                text-align: center;
//                margin-top: 0.5rem;
//                font-size: 0.875rem;
//                opacity: 0.9;
//              }
   
//              .nav-button {
//                position: absolute;
//                top: 50%;
//                transform: translateY(-50%);
//                background-color: rgba(13, 148, 136, 0.8);
//                color: white;
//                padding: 0.5rem;
//                border-radius: 9999px;
//                border: none;
//                cursor: pointer;
//                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//                transition: background-color 0.3s, transform 0.2s;
//                z-index: 10;
//              }
   
//              .nav-button:hover {
//                background-color: #0f766e;
//                transform: translateY(-50%) scale(1.1);
//              }
   
//              .nav-button-prev {
//                left: 1rem;
//              }
   
//              .nav-button-next {
//                right: 1rem;
//              }
   
//              .nav-dots {
//                display: flex;
//                justify-content: center;
//                gap: 0.5rem;
//                margin-top: 1.5rem;
//                flex-wrap: wrap;
//              }
   
//              .nav-dot {
//                width: 0.75rem;
//                height: 0.75rem;
//                border-radius: 9999px;
//                background-color: rgba(209, 213, 219, 0.8);
//                border: none;
//                cursor: pointer;
//                transition: all 0.3s ease;
//              }
   
//              .nav-dot.active {
//                background-color: #0d9488;
//                transform: scale(1.2);
//              }
             
//              /* Responsive Styles */
//              @media (max-width: 1024px) {
//                .carousel-title {
//                  font-size: 2rem;
//                }
               
//                .product-card {
//                  max-width: 24rem;
//                }
//              }
   
//              @media (max-width: 768px) {
//                .carousel-container {
//                  padding: 1.5rem 0.5rem;
//                }
               
//                .carousel-title {
//                  font-size: 1.75rem;
//                  margin-bottom: 1.5rem;
//                }
               
//                .category-nav {
//                  margin-bottom: 1.5rem;
//                }
               
//                .category-button {
//                  padding: 0.4rem 1rem;
//                  font-size: 0.875rem;
//                }
               
//                .nav-button {
//                  padding: 0.4rem;
//                }
               
//                .nav-button-prev {
//                  left: 0.5rem;
//                }
               
//                .nav-button-next {
//                  right: 0.5rem;
//                }
               
//                .product-title {
//                  font-size: 1.125rem;
//                }
//              }
   
//              @media (max-width: 480px) {
//                .carousel-container {
//                  padding: 1rem 0.25rem;
//                }
               
//                .carousel-title {
//                  font-size: 1.5rem;
//                  margin-bottom: 1rem;
//                }
               
//                .category-button {
//                  padding: 0.3rem 0.8rem;
//                  font-size: 0.75rem;
//                }
               
//                .nav-button {
//                  padding: 0.3rem;
//                }
               
//                .product-card {
//                  max-width: 100%;
//                }
               
//                .product-title {
//                  font-size: 1rem;
//                  margin-top: 0.75rem;
//                }
               
//                .product-category {
//                  font-size: 0.75rem;
//                  margin-top: 0.25rem;
//                }
               
//                .nav-dot {
//                  width: 0.6rem;
//                  height: 0.6rem;
//                }
//              }
   
//              @media (max-width: 360px) {
//                .carousel-container {
//                  padding: 0.75rem 0.2rem;
//                }
               
//                .carousel-title {
//                  font-size: 1.25rem;
//                }
               
//                .product-image-container {
//                  aspect-ratio: 1/1;
//                }
               
//                .nav-button {
//                  padding: 0.25rem;
//                }
               
//                .nav-button svg {
//                  width: 20px;
//                  height: 20px;
//                }
//              }
//            `}
//          </style>
   
//          <div className="carousel-container">
//            <h1 className="carousel-title"> 
//              {heading || "Our Most Popular Products"}
//            </h1>
   
//            <div className="category-nav">
//              {categories.map((category) => (
//                <button
//                  key={category}
//                  onClick={() => setActiveCategory(category)}
//                  className={`category-button ${activeCategory === category ? 'active' : ''}`}
//                >
//                  {category}
//                </button>
//              ))}
//            </div>
   
//            <div className="carousel-wrapper" ref={sliderRef}>
//              <div className="carousel-overflow">
//                <div
//                  ref={trackRef}
//                  className={`carousel-track ${isDragging ? 'dragging' : ''}`}
//                  onMouseDown={touchStart}
//                  onMouseUp={touchEnd}
//                  onMouseLeave={() => isDragging && touchEnd()}
//                  onMouseMove={(e) => isDragging && touchMove(e)}
//                  onTouchStart={touchStart}
//                  onTouchEnd={touchEnd}
//                  onTouchMove={touchMove}
//                >
//                  {filteredProducts.map((product) => (
//                    <div
//                      key={product.id}
//                      className="carousel-slide"
//                    >
//                      <div className="product-card">
//                        <div className="product-image-container">
//                          <img
//                            src={product.image}
//                            alt={product.name}
//                            className="product-image"
//                            loading="lazy"
//                            draggable="false"
//                          />
//                        </div>
//                        <h3 className="product-title">
//                          {product.name}
//                        </h3>
//                        <p className="product-category">
//                          {product.category}
//                        </p>
//                      </div>
//                    </div>
//                  ))}
//                </div>
//              </div>
   
//              {filteredProducts.length > 1 && (
//                <>
//                  <button
//                    onClick={prevSlide}
//                    className="nav-button nav-button-prev"
//                    aria-label="Previous slide"
//                  >
//                    <ChevronLeft size={24} />
//                  </button>
//                  <button
//                    onClick={nextSlide}
//                    className="nav-button nav-button-next"
//                    aria-label="Next slide"
//                  >
//                    <ChevronRight size={24} />
//                  </button>
//                </>
//              )}
   
//              {filteredProducts.length > 1 && (
//                <div className="nav-dots">
//                  {filteredProducts.map((_, index) => (
//                    <button
//                      key={index}
//                      onClick={() => setActiveSlide(index)}
//                      className={`nav-dot ${activeSlide === index ? 'active' : ''}`}
//                      aria-label={`Go to slide ${index + 1}`}
//                    />
//                  ))}
//                </div>
//              )}
//            </div>
//          </div>
//        </>
//    <div style={{marginTop:'1rem'}}> <TraditionalBanner backgroundImage={bgimg}/></div>
//    <FoodGallery Imaging={homeImages}/>
//    </>
//   )
// }

// export default NewBrand
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Brand from './Brand';
import MainBanner from '../components/MainBanner';
import bgImg from '../assets/fr7.jpg';
import TraditionalBanner from '../components/TraditionalBanner';
import bgimg from '../assets/new6.jpg';
import FoodGallery from '../components/FoodGaller';
import foodg1 from "../assets/fr1.jpg";
import foodg2 from "../assets/fr2.jpg";
import foodg3 from "../assets/fr5.jpg";
import foodg4 from "../assets/fr6.jpg";
// Add missing imports for the product images
import d1 from '../assets/d1.jpg'
import d2 from "../assets/d2.jpg";
import d3 from "../assets/d3.jpg";
import s1 from "../assets/s1.jpg";
import N1 from '../assets/daten1.jpg'

const NewBrand = ({ heading }) => {
  const homeImages = [
    { src: foodg1, alt: "Food image 1" },
    { src: foodg2, alt: "Food image 2" },
    { src: foodg3, alt: "Food image 3" },
    { src: foodg4, alt: "Food image 4" }
  ];

  // State declarations
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSlide, setActiveSlide] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [animationID, setAnimationID] = useState(null);
  const [slideWidth, setSlideWidth] = useState(0);
  
  const sliderRef = useRef(null);
  const trackRef = useRef(null);
  const autoPlayRef = useRef(null);

  const categories = ['All', 'DATES', 'STUFFED DATES', 'DATE SYRUPS', 'DATES MAMOUL'];
  
  const products = [
    // DATES with placeholder images
    {
         id: 4,
         name: 'Ajwa Dates',
         image: N1,
         category: 'DATES'
       },
       {
         id: 5,
         name: 'Majdool -jumbo',
         image: 'https://alraiqa.me/app/adminbkend/product_image/230pr.jpg',
         category: 'DATES'
       },
       {
         id: 6,
         name: 'Sukkari Galaxy',
         image: 'https://alraiqa.me/app/adminbkend/product_image/225pr.jpg',
         category: 'DATES'
       },
    // STUFFED DATES with placeholder images
    {
      id: 7,
      name: 'Ajwa With Pecan',
      image: d3,
      category: 'STUFFED DATES'
    },
    {
      id: 8,
      name: 'Ajwa With Pista',
      image: d2,
      category: 'STUFFED DATES'
    },
    {
      id: 9,
      name: 'Safawi With Pista',
      image: d1,
      category: 'STUFFED DATES'
    },
    {
      id: 10,
      name: 'Tahina',
      image: 'https://alraiqa.me/app/adminbkend/product_image/80pr.jpg',
      category: 'DATE SYRUPS'
    },
    {
      id: 11,
      name: 'Dates Sugar',
      image: s1,
      category: 'DATE SYRUPS'
    },
    {
      id: 12,
      name: 'Janeya Date Syrup',
      image: 'https://alraiqa.me/app/adminbkend/product_image/78pr.jpg',
      category: 'DATE SYRUPS'
    },
    {
      id: 13,
      name: 'Syrup Ard 400 Gm',
      image: 'https://alraiqa.me/app/adminbkend/product_image/76pr.jpg',
      category: 'DATE SYRUPS'
    },
    {
      id: 14,
      name: 'Syrup Ard 1.5',
      image: 'https://alraiqa.me/app/adminbkend/product_image/74pr.jpg',
      category: 'DATE SYRUPS'
    },
    {
      id: 15,
      name: 'Zero Sugar Mamoul',
      image: 'https://alraiqa.me/app/adminbkend/product_image/246pr.jpg',
      category: 'DATES MAMOUL'
    },
    {
      id: 16,
      name: 'Kliga Mamoul -premium',
      image: 'https://alraiqa.me/app/adminbkend/product_image/244pr.jpg',
      category: 'DATES MAMOUL'
    },
    {
      id: 17,
      name: 'Raghd Kilga Finger',
      image: 'https://alraiqa.me/app/adminbkend/product_image/242pr.jpg' ,
      category: 'DATES MAMOUL'
    },
    {
      id: 18,
      name: 'Raghd Mamoul Biscuits',
      image:'https://alraiqa.me/app/adminbkend/product_image/154pr.jpg' ,
      category: 'DATES MAMOUL'
    },
    {
      id: 19,
      name: 'Raghd Mamoul Bur & Bran ',
      image: 'https://alraiqa.me/app/adminbkend/product_image/151pr.jpg' ,
      category: 'DATES MAMOUL'
    },
    {
      id: 20,
      name: 'Raghd Mamoul Wheat Flour',
      image: 'https://alraiqa.me/app/adminbkend/product_image/150pr.jpg' ,
      category: 'DATES MAMOUL'
    },
    {
      id: 21,
      name: 'Raghd Mamoul Dokhon Flour',
      image: 'https://alraiqa.me/app/adminbkend/product_image/149pr.jpg' ,
      category: 'DATES MAMOUL'
    },
  ];

  // Calculate slide width and update on window resize
  const calculateSlideWidth = () => {
    if (sliderRef.current) {
      const containerWidth = sliderRef.current.clientWidth;
      const newSlideWidth = containerWidth;
      setSlideWidth(newSlideWidth);
      return newSlideWidth;
    }
    return 0;
  };

  useEffect(() => {
    const handleResize = () => {
      const newWidth = calculateSlideWidth();
      
      // Update translate position based on new width
      if (trackRef.current) {
        const newTranslate = -activeSlide * newWidth;
        setCurrentTranslate(newTranslate);
        setPrevTranslate(newTranslate);
        trackRef.current.style.transform = `translateX(${newTranslate}px)`;
      }
    };

    calculateSlideWidth();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const filtered = activeCategory === 'All'
      ? products
      : products.filter(product => product.category === activeCategory);
    setFilteredProducts(filtered);
    setActiveSlide(0); // Reset to the first slide when category changes
    setPrevTranslate(0);
    setCurrentTranslate(0);
    
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(0px)`;
    }
    
    // Recalculate slide width when filtered products change
    setTimeout(() => {
      calculateSlideWidth();
    }, 100);
  }, [activeCategory]);

  const nextSlide = () => {
    if (activeSlide < filteredProducts.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0); // Loop back to first slide
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      setActiveSlide(filteredProducts.length - 1); // Loop to last slide
    }
  };

  // Auto sliding functionality with pause on hover/touch
  useEffect(() => {
    const slider = sliderRef.current;
    
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };
    
    const stopAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
    
    if (slider) {
      slider.addEventListener('mouseenter', stopAutoPlay);
      slider.addEventListener('mouseleave', startAutoPlay);
      slider.addEventListener('touchstart', stopAutoPlay);
      slider.addEventListener('touchend', startAutoPlay);
      
      startAutoPlay();
    }
    
    return () => {
      stopAutoPlay();
      if (slider) {
        slider.removeEventListener('mouseenter', stopAutoPlay);
        slider.removeEventListener('mouseleave', startAutoPlay);
        slider.removeEventListener('touchstart', stopAutoPlay);
        slider.removeEventListener('touchend', startAutoPlay);
      }
    };
  }, [filteredProducts, activeSlide]);

  // Smooth transition effect when activeSlide changes
  useEffect(() => {
    if (trackRef.current) {
      const newWidth = calculateSlideWidth();
      const newTranslate = -activeSlide * newWidth;
      setCurrentTranslate(newTranslate);
      setPrevTranslate(newTranslate);
      trackRef.current.style.transform = `translateX(${newTranslate}px)`;
    }
  }, [activeSlide, filteredProducts]);

  // Touch handlers with improved smoothness
  const touchStart = (e) => {
    setIsDragging(true);
    setStartPos(getPositionX(e));
    cancelAnimationFrame(animationID);
  };

  const touchMove = (e) => {
    if (isDragging) {
      const currentPosition = getPositionX(e);
      const diff = currentPosition - startPos;
      setCurrentTranslate(prevTranslate + diff);
      
      // Apply the transform with less sensitivity to make it feel more controlled
      const dampedTranslate = prevTranslate + diff * 0.6; // dampen factor
      trackRef.current.style.transform = `translateX(${dampedTranslate}px)`;
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    const threshold = slideWidth * 0.2;
    const diff = currentTranslate - prevTranslate;
    
    // Determine if we should move to next/prev slide or snap back
    if (diff < -threshold && activeSlide < filteredProducts.length - 1) {
      setActiveSlide(activeSlide + 1);
    } else if (diff > threshold && activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    } else {
      // Snap back to current slide
      trackRef.current.style.transform = `translateX(${-activeSlide * slideWidth}px)`;
    }
  };

  const getPositionX = (e) => {
    return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  };

  return (
    <>
      <MainBanner backgroundImage={bgImg} textColor='black' />

      
      <div className="carousel-container">
        <h1 className="carousel-title"> 
          {heading || "Our Most Popular Products"}
        </h1>

        <div className="category-nav">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-button ${activeCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="carousel-wrapper" ref={sliderRef}>
          <div className="carousel-overflow">
            <div
              ref={trackRef}
              className={`carousel-track ${isDragging ? 'dragging' : ''}`}
              onMouseDown={touchStart}
              onMouseUp={touchEnd}
              onMouseLeave={() => isDragging && touchEnd()}
              onMouseMove={(e) => isDragging && touchMove(e)}
              onTouchStart={touchStart}
              onTouchEnd={touchEnd}
              onTouchMove={touchMove}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="carousel-slide"
                >
                  <div className="product-card">
                    <div className="product-image-container">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                        loading="lazy"
                        draggable="false"
                      />
                    </div>
                    <h3 className="product-title">
                      {product.name}
                    </h3>
                    <p className="product-category">
                      {product.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredProducts.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="nav-button nav-button-prev"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="nav-button nav-button-next"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {filteredProducts.length > 1 && (
            <div className="nav-dots">
              {filteredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`nav-dot ${activeSlide === index ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          width: 100%;
          max-width: 1470px;
          margin: 0 auto;
          padding: 2rem 1rem;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cpath d='M0 30 L30 0 L60 30 L30 60 Z' fill='none' stroke='%23999' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E");
          overflow: hidden;
        }

        .carousel-title {
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 2rem;
          color: black;
        }

        .category-nav {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .category-button {
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          background-color: white;
          color: black;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.2s;
        }

        .category-button:hover {
          background-color: #f0fdfa;
          transform: translateY(-2px);
        }

        .category-button.active {
          background-color: #0d9488;
          color: white;
        }

        .carousel-wrapper {
          position: relative;
          margin: 0 auto;
          max-width: 1000px;
        }

        .carousel-overflow {
          overflow: hidden;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          touch-action: pan-y;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.3s ease;
          height: auto;
          will-change: transform;
        }

        .carousel-track.dragging {
          transition: none;
        }

        .carousel-slide {
          flex: 0 0 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          user-select: none;
        }

        .product-card {
          width: 100%;
          max-width: 28rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease;
          padding: 1rem;
        }

        .product-card:hover {
          transform: scale(1.02);
        }

        .product-image-container {
          width: 100%;
          height:auto;
          // overflow: hidden;
          border-radius: 0.5rem;
          aspect-ratio: 4/3;
          background-color: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
          pointer-events: none;
        }

        .product-image:hover {
          transform: scale(1.05);
        }

        .product-title {
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
          margin-top: 1rem;
          color: black;
        }

        .product-category {
          color: #666;
          text-align: center;
          margin-top: 0.5rem;
          font-size: 0.875rem;
          opacity: 0.9;
        }

        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(13, 148, 136, 0.8);
          color: white;
          padding: 0.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: background-color 0.3s, transform 0.2s;
          z-index: 10;
        }

        .nav-button:hover {
          background-color: #0f766e;
          transform: translateY(-50%) scale(1.1);
        }

        .nav-button-prev {
          left: 1rem;
        }

        .nav-button-next {
          right: 1rem;
        }

        .nav-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .nav-dot {
          width: 0.75rem;
          height: 0.75rem;
          border-radius: 9999px;
          background-color: rgba(209, 213, 219, 0.8);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-dot.active {
          background-color: #0d9488;
          transform: scale(1.2);
        }
        
        /* Responsive Styles */
        @media (max-width: 1024px) {
          .carousel-title {
            font-size: 2rem;
          }
          
          .product-card {
            max-width: 24rem;
          }
        }

        @media (max-width: 768px) {
          .carousel-container {
            padding: 1.5rem 0.5rem;
          }
          
          .carousel-title {
            font-size: 1.75rem;
            margin-bottom: 1.5rem;
          }
          
          .category-nav {
            margin-bottom: 1.5rem;
          }
          
          .category-button {
            padding: 0.4rem 1rem;
            font-size: 0.875rem;
          }
          
          .nav-button {
            padding: 0.4rem;
          }
          
          .nav-button-prev {
            left: 0.5rem;
          }
          
          .nav-button-next {
            right: 0.5rem;
          }
          
          .product-title {
            font-size: 1.125rem;
          }
        }

        @media (max-width: 480px) {
          .carousel-container {
            padding: 1rem 0.25rem;
          }
          
          .carousel-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          
          .category-button {
            padding: 0.3rem 0.8rem;
            font-size: 0.75rem;
          }
          
          .nav-button {
            padding: 0.3rem;
          }
          
          .product-card {
            max-width: 100%;
          }
          
          .product-title {
            font-size: 1rem;
            margin-top: 0.75rem;
          }
          
          .product-category {
            font-size: 0.75rem;
            margin-top: 0.25rem;
          }
          
          .nav-dot {
            width: 0.6rem;
            height: 0.6rem;
          }
        }

        @media (max-width: 360px) {
          .carousel-container {
            padding: 0.75rem 0.2rem;
          }
          
          .carousel-title {
            font-size: 1.25rem;
          }
          
          .product-image-container {
            aspect-ratio: 1/1;
          }
          
          .nav-button {
            padding: 0.25rem;
          }
          
          .nav-button svg {
            width: 20px;
            height: 20px;
          }
        }
      `}</style>
      
      <div style={{marginTop:'1rem'}}> 
        <TraditionalBanner backgroundImage={bgimg}/>
      </div>
      <FoodGallery Imaging={homeImages}/>
    </>
  );
};

export default NewBrand;