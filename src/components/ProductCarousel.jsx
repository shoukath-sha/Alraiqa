// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import ice from '../assets/ice.png'

// const ProductCarousel = () => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const categories = ['All', 'CHOCOLATES', 'DATES', 'STUFFED DATES', 'COFFEE', 'MAMOUL'];
//  console.log(ice);
 
//   const products = [
//     // CHOCOLATES with images
//     {
//       id: 1,
//       name: 'Dark Chocolate Truffle',
//       image: ice,
//       category: 'CHOCOLATES'
//     },
//     {
//       id: 2,
//       name: 'Milk Chocolate Bar',
//       image: ice,
//       category: 'CHOCOLATES'
//     },
//     {
//       id: 3,
//       name: 'White Chocolate Praline',
//       image: ice,
//       category: 'CHOCOLATES'
//     },
//     // DATES without images
//     {
//       id: 4,
//       name: 'Ajwa Dates',
//       category: 'DATES'
//     },
//     {
//       id: 5,
//       name: 'Medjool Dates',
//       category: 'DATES'
//     },
//     {
//       id: 6,
//       name: 'Safawi Dates',
//       category: 'DATES'
//     },
//     // STUFFED DATES without images
//     {
//       id: 7,
//       name: 'Almond Stuffed Dates',
//       category: 'STUFFED DATES'
//     },
//     {
//       id: 8,
//       name: 'Pistachio Stuffed Dates',
//       category: 'STUFFED DATES'
//     },
//     {
//       id: 9,
//       name: 'Orange Peel Stuffed Dates',
//       category: 'STUFFED DATES'
//     },
//     // COFFEE without images
//     {
//       id: 10,
//       name: 'Arabic Coffee Premium',
//       category: 'COFFEE'
//     },
//     {
//       id: 11,
//       name: 'Turkish Coffee Classic',
//       category: 'COFFEE'
//     },
//     {
//       id: 12,
//       name: 'Specialty Coffee Blend',
//       category: 'COFFEE'
//     },
//     // MAMOUL without images
//     {
//       id: 13,
//       name: 'Date Mamoul',
//       category: 'MAMOUL'
//     },
//     {
//       id: 14,
//       name: 'Pistachio Mamoul',
//       category: 'MAMOUL'
//     },
//     {
//       id: 15,
//       name: 'Walnut Mamoul',
//       category: 'MAMOUL'
//     }
//   ];

//   useEffect(() => {
//     const filtered = activeCategory === 'All'
//       ? products
//       : products.filter(product => product.category === activeCategory);
//     setFilteredProducts(filtered);
//     setActiveSlide(0);
//   }, [activeCategory]);

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % filteredProducts.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
//   };

//   return (
//     <>
//       <style>
//         {`
//           .carousel-container {
//             width: 100%;
//             max-width: 100vw;
//             margin: 0 auto;
//             padding: 2rem 1rem;
//             background-color: #f59e0b;
//           }

//           .carousel-title {
//             font-size: 2.25rem;
//             font-weight: 700;
//             text-align: center;
//             margin-bottom: 3rem;
//             color: white;
//           }

//           .category-nav {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: center;
//             gap: 0.5rem;
//             margin-bottom: 3rem;
//           }

//           .category-button {
//             padding: 0.5rem 1.5rem;
//             border-radius: 9999px;
//             background-color: white;
//             color: black;
//             border: none;
//             cursor: pointer;
//             transition: background-color 0.3s;
//           }

//           .category-button:hover {
//             background-color: #f0fdfa;
//           }

//           .category-button.active {
//             background-color: #0d9488;
//             color: white;
//           }

//           .carousel-wrapper {
//             position: relative;
//           }

//           .carousel-overflow {
//             overflow: hidden;
//           }

//           .carousel-track {
//             display: flex;
//             transition: transform 0.3s ease-in-out;
//           }

//           .carousel-slide {
//             flex-shrink: 0;
//             display: flex;
//             justify-content: center;
//             padding: 0 1rem;
//           }

//           .product-card {
//             max-width: 28rem;
//           }

//           .product-image {
//             width: 100%;
//             height: auto;
//             border-radius: 0.5rem;
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//           }

//           .product-title {
//             font-size: 1.25rem;
//             font-weight: 600;
//             text-align: center;
//             margin-top: 1rem;
//             color: white;
//           }

//           .product-category {
//             color: white;
//             text-align: center;
//             margin-top: 0.5rem;
//           }

//           .nav-button {
//             position: absolute;
//             top: 50%;
//             transform: translateY(-50%);
//             background-color: #0d9488;
//             color: white;
//             padding: 0.5rem;
//             border-radius: 9999px;
//             border: none;
//             cursor: pointer;
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//             transition: background-color 0.3s;
//           }

//           .nav-button:hover {
//             background-color: #0f766e;
//           }

//           .nav-button-prev {
//             left: 0;
//           }

//           .nav-button-next {
//             right: 0;
//           }

//           .nav-dots {
//             display: flex;
//             justify-content: center;
//             gap: 0.5rem;
//             margin-top: 1.5rem;
//             flex-wrap: wrap;
//           }

//           .nav-dot {
//             width: 0.75rem;
//             height: 0.75rem;
//             border-radius: 9999px;
//             background-color: #d1d5db;
//             border: none;
//             cursor: pointer;
//             transition: background-color 0.3s;
//           }

//           .nav-dot.active {
//             background-color: #0d9488;
//           }
//         `}
//       </style>

//       <div className="carousel-container">
//         <h1 className="carousel-title">
//           Our Most Popular Products
//         </h1>

//         <div className="category-nav">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`category-button ${activeCategory === category ? 'active' : ''}`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="carousel-wrapper">
//           <div className="carousel-overflow">
//             <div
//               className="carousel-track"
//               style={{
//                 transform: `translateX(-${activeSlide * 100}%)`,
//                 width: `${filteredProducts.length * 100}%`
//               }}
//             >
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="carousel-slide"
//                   style={{ width: `${100 / filteredProducts.length}%` }}
//                 >
//                   <div className="product-card">
//                     {product.image && (
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="product-image"
//                       />
//                     )}
//                     <h3 className="product-title">
//                       {product.name}
//                     </h3>
//                     <p className="product-category">
//                       {product.category}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={prevSlide}
//             className="nav-button nav-button-prev"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="nav-button nav-button-next"
//           >
//             <ChevronRight size={24} />
//           </button>

//           <div className="nav-dots">
//             {filteredProducts.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveSlide(index)}
//                 className={`nav-dot ${activeSlide === index ? 'active' : ''}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


//  here i used last


// export default ProductCarousel;
// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import ice from '../assets/ice.png';
// import ice2 from '../assets/BISCUIT.png';
// import ice3 from '../assets/CASHEW.png';
// import d1 from '../assets/d1.jpg'

// const ProductCarousel = ({heading}) => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const categories = ['All',  'DATES', 'STUFFED DATES', ];
  
//   const products = [
//     // CHOCOLATES
    
//     // DATES with placeholder images
//     {
//       id: 4,
//       name: 'Ajwa Dates',
//       image: '/api/placeholder/400/300?text=Ajwa+Dates',
//       category: 'DATES'
//     },
//     {
//       id: 5,
//       name: 'Medjool Dates',
//       image: '/api/placeholder/400/300?text=Medjool+Dates',
//       category: 'DATES'
//     },
//     {
//       id: 6,
//       name: 'Safawi Dates',
//       image: '/api/placeholder/400/300?text=Safawi+Dates',
//       category: 'DATES'
//     },
//     // STUFFED DATES with placeholder images
//     {
//       id: 7,
//       name: 'Almond Stuffed Dates',
//       image: '/api/placeholder/400/300?text=Almond+Stuffed+Dates',
//       category: 'STUFFED DATES'
//     },
//     {
//       id: 8,
//       name: 'Pistachio Stuffed Dates',
//       image: d1,
//       category: 'STUFFED DATES'
//     },
//     {
//       id: 9,
//       name: 'Orange Peel Stuffed Dates',
//       image: '../assets/d1.jpg',
//       category: 'STUFFED DATES'
//     },
//     // COFFEE with placeholder images
   
//     // MAMOUL with placeholder images
   
//   ];

//   useEffect(() => {
//     const filtered = activeCategory === 'All'
//       ? products
//       : products.filter(product => product.category === activeCategory);
//     setFilteredProducts(filtered);
//     setActiveSlide(0); // Reset to the first slide when category changes
//   }, [activeCategory]);

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % filteredProducts.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
//   };

//   return (
//     <>
//       <style>
//         {`
//           .carousel-container {
//             width: auto;
//             max-width: 1470px;
//             margin: 0 auto;
//             padding: 2rem 1rem;
//              background: linear-gradient(135deg, #D39C08, #FFF5DA);
//           }

//           .carousel-title {
//             font-size: 2.25rem;
//             font-weight: 700;
//             text-align: center;
//             margin-bottom: 3rem;
//             color: white;
//           }

//           .category-nav {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: center;
//             gap: 0.5rem;
//             margin-bottom: 3rem;
//           }

//           .category-button {
//             padding: 0.5rem 1.5rem;
//             border-radius: 9999px;
//             background-color: white;
//             color: black;
//             border: none;
//             cursor: pointer;
//             transition: background-color 0.3s;
//           }

//           .category-button:hover {
//             background-color: #f0fdfa;
//           }

//           .category-button.active {
//             background-color: #0d9488;
//             color: white;
//           }

//           .carousel-wrapper {
//             position: relative;
//           }

//           .carousel-overflow {
//             overflow: hidden;
//           }

//           .carousel-track {
//             display: flex;
//             transition: transform 0.3s ease-in-out;
//           }

//           .carousel-slide {
//             flex-shrink: 0;
//             display: flex;
//             justify-content: center;
//             padding: 0 1rem;
//             width: ${100 / filteredProducts.length}%;
//           }

//           .product-card {
//             max-width: 28rem;
//           }

//           .product-image {
//             width: 100%;
//             height: auto;
//             border-radius: 0.5rem;
            
//           }

//           .product-title {
//             font-size: 1.25rem;
//             font-weight: 600;
//             text-align: center;
//             margin-top: 1rem;
//             color: white;
//           }

//           .product-category {
//             color: white;
//             text-align: center;
//             margin-top: 0.5rem;
//           }

//           .nav-button {
//             position: absolute;
//             top: 50%;
//             transform: translateY(-50%);
//             background-color: #0d9488;
//             color: white;
//             padding: 0.5rem;
//             border-radius: 9999px;
//             border: none;
//             cursor: pointer;
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//             transition: background-color 0.3s;
//           }

//           .nav-button:hover {
//             background-color: #0f766e;
//           }

//           .nav-button-prev {
//             left: 0;
//           }

//           .nav-button-next {
//             right: 0;
//           }

//           .nav-dots {
//             display: flex;
//             justify-content: center;
//             gap: 0.5rem;
//             margin-top: 1.5rem;
//             flex-wrap: wrap;
//           }

//           .nav-dot {
//             width: 0.75rem;
//             height: 0.75rem;
//             border-radius: 9999px;
//             background-color: #d1d5db;
//             border: none;
//             cursor: pointer;
//             transition: background-color 0.3s;
//           }

//           .nav-dot.active {
//             background-color: #0d9488;
//           }
//              @media (max-width: 768px) {
//     .timeline-container {
//       padding: 1rem;
//     }
//       .carousel-container{
//       width:auto;}

//     .header h1 {
//       font-size: 2rem;
//     }

//     .header h2 {
//       font-size: 1.5rem;
//     }

//     .header p {
//       font-size: 0.875rem;
//       padding: 0 1rem;
//     }

//     .center-image {
//       width: 150px;
//       height: 150px;
//     }

//     .timeline-line {
//       left: 2rem;
//     }

//     .timeline-dot {
//       left: 2rem;
//     }

//     .timeline-content {
//       flex-direction: column;
//       margin-left: 2rem;
//       position: relative;
//     }

//     .timeline-side {
//       width: calc(100% - 2rem);
//       padding: 0 1rem;
//       margin-bottom: 2rem;
//     }

//     .timeline-year {
//       margin-top: 0.5rem;
//     }

//     .image-wrapper {
//       width: 10rem;
//       height: 10rem;
//       margin: 2rem 0;
//     }

//     .timeline-item {
//       margin-bottom: 3rem;
//     }

//     /* Reset the even item styles for mobile */
//     .timeline-item:nth-child(even) .timeline-content {
//       flex-direction: column;
//     }

//     .timeline-item:nth-child(even) .timeline-side {
//       padding: 0 1rem;
//     }

//     .timeline-item:nth-child(even) .image-wrapper {
//       margin: 2rem 0;
//     }

//     /* Ensure all content aligns properly with timeline */
//     .timeline-side:first-child {
//       margin-top: -1rem;
//     }
//   }

//   @media (max-width: 480px) {
//     .timeline-container {
//       padding: 0.5rem;
//     }

//     .header h1 {
//       font-size: 1.5rem;
//     }

//     .header h2 {
//       font-size: 1.25rem;
//     }

//     .header p {
//       font-size: 0.8rem;
//       padding: 0 0.5rem;
//     }

//     .center-image {
//       width: 120px;
//       height: 120px;
//     }

//     .timeline-line {
//       left: 1rem;
//     }

//     .timeline-dot {
//       left: 1rem;
//       width: 0.8rem;
//       height: 0.8rem;
//     }

//     .timeline-content {
//       margin-left: 1rem;
//     }

//     .timeline-side {
//       width: calc(100% - 1rem);
//       padding: 0 0.5rem;
//     }

//     .timeline-year {
//       font-size: 1.1rem;
//     }

//     .point-text {
//       font-size: 0.8rem;
//     }

//     .image-wrapper {
//       width: 8rem;
//       height: 8rem;
//       margin: 1.5rem 0;
//     }

//     .timeline-item {
//       margin-bottom: 2.5rem;
//     }

//     .point-dot {
//       width: 0.4rem;
//       height: 0.4rem;
//       margin-top: 0.4rem;
//     }
//   }

//   @media (max-width: 360px) {
//     .timeline-line {
//       left: 0.5rem;
//     }

//     .timeline-dot {
//       left: 0.5rem;
//     }

//     .timeline-content {
//       margin-left: 0.5rem;
//     }

//     .timeline-side {
//       padding: 0 0.23rem;
//     }

//     .image-wrapper {
//       width: 5rem;
//       height: 5rem;
//     }
//       .carousel-track{
//       width:300px}
//   }
//         `}
//       </style>

//       <div className="carousel-container">
//         <h1 className="carousel-title">
//         {heading || "Our Most Popular Products"}
//         </h1>

//         <div className="category-nav">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`category-button ${activeCategory === category ? 'active' : ''}`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="carousel-wrapper">
//           <div className="carousel-overflow">
//             <div
//               className="carousel-track"
//               style={{
//                 transform: `translateX(-${activeSlide * (100 / filteredProducts.length)}%)`,
//                 width: `${filteredProducts.length * 100}%`
//               }}
//             >
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="carousel-slide"
//                 >
//                   <div className="product-card">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="product-image"
//                     />
//                     <h3 className="product-title">
//                       {product.name}
//                     </h3>
//                     <p className="product-category">
//                       {product.category}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={prevSlide}
//             className="nav-button nav-button-prev"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="nav-button nav-button-next"
//           >
//             <ChevronRight size={24} />
//           </button>

//           <div className="nav-dots">
//             {filteredProducts.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveSlide(index)}
//                 className={`nav-dot ${activeSlide === index ? 'active' : ''}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCarousel;
// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import d1 from '../assets/d1.jpg'
// import d2 from '../assets/d2.jpg'
// import d3 from '../assets/d3.jpg'
// import s1 from '../assets/s1.jpg'

// const ProductCarousel = ({heading}) => {
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPos, setStartPos] = useState(0);
//   const [currentTranslate, setCurrentTranslate] = useState(0);
//   const [prevTranslate, setPrevTranslate] = useState(0);
//   const [animationID, setAnimationID] = useState(null);
  
//   const sliderRef = useRef(null);
//   const autoPlayRef = useRef(null);

//   const categories = ['All', 'DATES', 'STUFFED DATES', 'DATE SYRUPS'];
  
//   const products = [
//     // DATES with placeholder images
//     {
//       id: 4,
//       name: 'Ajwa Dates',
//       image: '/api/placeholder/400/300?text=Ajwa+Dates',
//       category: 'DATES'
//     },
//     {
//       id: 5,
//       name: 'Medjool Dates',
//       image: '/api/placeholder/400/300?text=Medjool+Dates',
//       category: 'DATES'
//     },
//     {
//       id: 6,
//       name: 'Safawi Dates',
//       image: '/api/placeholder/400/300?text=Safawi+Dates',
//       category: 'DATES'
//     },
//     // STUFFED DATES with placeholder images
//     {
//       id: 7,
//       name: 'Ajwa With Pecan',
//       image: d3,
//       category: 'STUFFED DATES'
//     },
//     {
//       id: 8,
//       name: 'Ajwa With Pista',
//       image: d2,
//       category: 'STUFFED DATES'
//     },
//     {
//       id: 9,
//       name: 'Safawi With Pista',
//       image: d1,
//       category: 'STUFFED DATES'
//     },
//     {
//       id: 10,
//       name: 'Dates Sugar',
//       image: s1,
//       category: 'DATE SYRUPS'
//     }
//   ];

//   useEffect(() => {
//     const filtered = activeCategory === 'All'
//       ? products
//       : products.filter(product => product.category === activeCategory);
//     setFilteredProducts(filtered);
//     setActiveSlide(0); // Reset to the first slide when category changes
//     setPrevTranslate(0);
//     setCurrentTranslate(0);
    
//     if (sliderRef.current) {
//       sliderRef.current.style.transform = `translateX(0px)`;
//     }
//   }, [activeCategory]);

//   const nextSlide = () => {
//     if (activeSlide < filteredProducts.length - 1) {
//       setActiveSlide(activeSlide + 1);
//     } else {
//       setActiveSlide(0);
//     }
//   };

//   const prevSlide = () => {
//     if (activeSlide > 0) {
//       setActiveSlide(activeSlide - 1);
//     } else {
//       setActiveSlide(filteredProducts.length - 1);
//     }
//   };

//   // Auto sliding functionality with pause on hover/touch
//   useEffect(() => {
//     const slider = sliderRef.current;
    
//     const startAutoPlay = () => {
//       autoPlayRef.current = setInterval(() => {
//         nextSlide();
//       }, 5000);
//     };
    
//     const stopAutoPlay = () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
    
//     slider.addEventListener('mouseenter', stopAutoPlay);
//     slider.addEventListener('mouseleave', startAutoPlay);
//     slider.addEventListener('touchstart', stopAutoPlay);
//     slider.addEventListener('touchend', startAutoPlay);
    
//     startAutoPlay();
    
//     return () => {
//       stopAutoPlay();
//       slider.removeEventListener('mouseenter', stopAutoPlay);
//       slider.removeEventListener('mouseleave', startAutoPlay);
//       slider.removeEventListener('touchstart', stopAutoPlay);
//       slider.removeEventListener('touchend', startAutoPlay);
//     };
//   }, [filteredProducts, activeSlide]);

//   // Smooth transition effect when activeSlide changes
//   useEffect(() => {
//     if (sliderRef.current) {
//       const slideWidth = sliderRef.current.clientWidth / filteredProducts.length;
//       const newTranslate = -activeSlide * slideWidth;
//       setCurrentTranslate(newTranslate);
//       setPrevTranslate(newTranslate);
//       sliderRef.current.style.transform = `translateX(${newTranslate}px)`;
//     }
//   }, [activeSlide, filteredProducts]);

//   // Touch handlers with improved smoothness
//   const touchStart = (e) => {
//     setIsDragging(true);
//     setStartPos(getPositionX(e));
//     cancelAnimationFrame(animationID);
//   };

//   const touchMove = (e) => {
//     if (isDragging) {
//       const currentPosition = getPositionX(e);
//       const diff = currentPosition - startPos;
//       setCurrentTranslate(prevTranslate + diff);
      
//       // Apply the transform with less sensitivity to make it feel more controlled
//       const dampedTranslate = prevTranslate + diff * 0.6; // dampen factor
//       sliderRef.current.style.transform = `translateX(${dampedTranslate}px)`;
//     }
//   };

//   const touchEnd = () => {
//     setIsDragging(false);
//     const threshold = sliderRef.current.clientWidth / filteredProducts.length * 0.2;
//     const diff = currentTranslate - prevTranslate;
    
//     // Determine if we should move to next/prev slide or snap back
//     if (diff < -threshold && activeSlide < filteredProducts.length - 1) {
//       setActiveSlide(activeSlide + 1);
//     } else if (diff > threshold && activeSlide > 0) {
//       setActiveSlide(activeSlide - 1);
//     } else {
//       // Snap back to current slide
//       const slideWidth = sliderRef.current.clientWidth / filteredProducts.length;
//       sliderRef.current.style.transform = `translateX(${-activeSlide * slideWidth}px)`;
//     }
//   };

//   const getPositionX = (e) => {
//     return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
//   };

//   return (
//     <>
//       <style>
//         {`
//       .carousel-container {
//       width: 100%;
//       max-width: 1470px;
//       margin: 0 auto;
//       padding: 2rem 1rem;
//       background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cpath d='M0 30 L30 0 L60 30 L30 60 Z' fill='none' stroke='%23999' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E");
//       overflow: hidden;
      
//     }

//           .carousel-title {
//             font-size: 2.25rem;
//             font-weight: 700;
//             text-align: center;
//             margin-bottom: 2rem;
//             color: black;
//           }

//           .category-nav {
//             display: flex;
//             flex-wrap: wrap;
//             justify-content: center;
//             gap: 0.5rem;
//             margin-bottom: 2rem;
//           }

//           .category-button {
//             padding: 0.5rem 1.5rem;
//             border-radius: 9999px;
//             background-color: white;
//             color: black;
//             border: none;
//             cursor: pointer;
//             transition: background-color 0.3s, transform 0.2s;
//           }

//           .category-button:hover {
//             background-color: #f0fdfa;
//             transform: translateY(-2px);
//           }

//           .category-button.active {
//             background-color: #0d9488;
//             color: white;
//           }

//           .carousel-wrapper {
//             position: relative;
//             margin: 0 auto;
//             max-width: 1000px;
//           }

//           .carousel-overflow {
//             overflow: hidden;
//             border-radius: 0.5rem;
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//             touch-action: pan-y;
//           }

//           .carousel-track {
//             display: flex;
//             transition: transform 0.3s ease;
//             height: auto;
//             will-change: transform;
//           }

//           .carousel-track.dragging {
//             transition: none;
//           }

//           .carousel-slide {
//             flex-shrink: 0;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             width: auto;
//             padding: 0 1rem;
//             user-select: none;
//           }

//           .product-card {
//             width: 100%;
//             max-width: 28rem;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             transition: transform 0.3s ease;
//           }

//           .product-card:hover {
//             transform: scale(1.02);
//           }

//           .product-image-container {
//             width: 100%;
//             overflow: hidden;
//             border-radius: 0.5rem;
//             aspect-ratio: 4/3;
//             background-color: white;
//             box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//           }

//           .product-image {
//             width: 100%;
//             height: 100%;
//             object-fit: cover;
//             transition: transform 0.5s ease;
//             pointer-events: none;
//           }

//           .product-image:hover {
//             transform: scale(1.05);
//           }

//           .product-title {
//             font-size: 1.25rem;
//             font-weight: 600;
//             text-align: center;
//             margin-top: 1rem;
//             color: white;
//           }

//           .product-category {
//             color: white;
//             text-align: center;
//             margin-top: 0.5rem;
//             font-size: 0.875rem;
//             opacity: 0.9;
//           }

//           .nav-button {
//             position: absolute;
//             top: 50%;
//             transform: translateY(-50%);
//             background-color: rgba(13, 148, 136, 0.8);
//             color: white;
//             padding: 0.5rem;
//             border-radius: 9999px;
//             border: none;
//             cursor: pointer;
//             box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//             transition: background-color 0.3s, transform 0.2s;
//             z-index: 10;
//           }

//           .nav-button:hover {
//             background-color: #0f766e;
//             transform: translateY(-50%) scale(1.1);
//           }

//           .nav-button-prev {
//             left: 1rem;
//           }

//           .nav-button-next {
//             right: 1rem;
//           }

//           .nav-dots {
//             display: flex;
//             justify-content: center;
//             gap: 0.5rem;
//             margin-top: 1.5rem;
//             flex-wrap: wrap;
//           }

//           .nav-dot {
//             width: 0.75rem;
//             height: 0.75rem;
//             border-radius: 9999px;
//             background-color: rgba(209, 213, 219, 0.8);
//             border: none;
//             cursor: pointer;
//             transition: all 0.3s ease;
//           }

//           .nav-dot.active {
//             background-color: #0d9488;
//             transform: scale(1.2);
//           }
          
//           /* Responsive Styles */
//           @media (max-width: 1024px) {
//             .carousel-title {
//               font-size: 2rem;
//             }
            
//             .product-card {
//               max-width: 24rem;
//             }
//           }

//           @media (max-width: 768px) {
//             .carousel-container {
//               padding: 1.5rem 0.5rem;
//             }
            
//             .carousel-title {
//               font-size: 1.75rem;
//               margin-bottom: 1.5rem;
//             }
            
//             .category-nav {
//               margin-bottom: 1.5rem;
//             }
            
//             .category-button {
//               padding: 0.4rem 1rem;
//               font-size: 0.875rem;
//             }
            
//             .nav-button {
//               padding: 0.4rem;
//             }
            
//             .nav-button-prev {
//               left: 0.5rem;
//             }
            
//             .nav-button-next {
//               right: 0.5rem;
//             }
            
//             .product-title {
//               font-size: 1.125rem;
//             }
//           }

//           @media (max-width: 480px) {
//             .carousel-container {
//               padding: 1rem 0.25rem;
//             }
            
//             .carousel-title {
//               font-size: 1.5rem;
//               margin-bottom: 1rem;
//             }
            
//             .category-button {
//               padding: 0.3rem 0.8rem;
//               font-size: 0.75rem;
//             }
            
//             .carousel-slide {
//               padding: 0 0.5rem;
//             }
            
//             .nav-button {
//               padding: 0.3rem;
//             }
            
//             .product-card {
//               max-width: 100%;
//             }
            
//             .product-title {
//               font-size: 1rem;
//               margin-top: 0.75rem;
//             }
            
//             .product-category {
//               font-size: 0.75rem;
//               margin-top: 0.25rem;
//             }
            
//             .nav-dot {
//               width: 0.6rem;
//               height: 0.6rem;
//             }
//           }

//           @media (max-width: 360px) {
//             .carousel-container {
//               padding: 0.75rem 0.2rem;
//             }
            
//             .carousel-title {
//               font-size: 1.25rem;
//             }
            
//             .product-image-container {
//               aspect-ratio: 1/1;
//             }
            
//             .nav-button {
//               padding: 0.25rem;
//             }
            
//             .nav-button svg {
//               width: 20px;
//               height: 20px;
//             }
//           }
//         `}
//       </style>

//       <div className="carousel-container">
//         <h1 className="carousel-title"> 
//          { heading || "Our Most Popular Products"}
//         </h1>

//         <div className="category-nav">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category)}
//               className={`category-button ${activeCategory === category ? 'active' : ''}`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div className="carousel-wrapper">
//           <div className="carousel-overflow">
//             <div
//               ref={sliderRef}
//               className={`carousel-track ${isDragging ? 'dragging' : ''}`}
//               style={{
//                 width: `${filteredProducts.length * 100}%`
//               }}
//               onMouseDown={touchStart}
//               onMouseUp={touchEnd}
//               onMouseLeave={() => isDragging && touchEnd()}
//               onMouseMove={(e) => isDragging && touchMove(e)}
//               onTouchStart={touchStart}
//               onTouchEnd={touchEnd}
//               onTouchMove={touchMove}
//             >
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   className="carousel-slide"
//                   style={{ width: `${100 / filteredProducts.length}%` }}
//                 >
//                   <div className="product-card">
//                     <div className="product-image-container">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="product-image"
//                         loading="lazy"
//                         draggable="false"
//                       />
//                     </div>
//                     <h3 className="product-title">
//                       {product.name}
//                     </h3>
//                     <p className="product-category">
//                       {product.category}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={prevSlide}
//             className="nav-button nav-button-prev"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft size={24} />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="nav-button nav-button-next"
//             aria-label="Next slide"
//           >
//             <ChevronRight size={24} />
//           </button>

//           <div className="nav-dots">
//             {filteredProducts.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveSlide(index)}
//                 className={`nav-dot ${activeSlide === index ? 'active' : ''}`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCarousel;


// latest carousel

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import d1 from '../assets/d1.jpg'
import d2 from '../assets/d2.jpg'
import d3 from '../assets/d3.jpg'
import s1 from '../assets/s1.jpg'

const ProductCarousel = ({heading}) => {
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

  const categories = ['All', 'DATES', 'STUFFED DATES', 'DATE SYRUPS'];
  
  const products = [
    // DATES with placeholder images
    {
      id: 4,
      name: 'Ajwa Dates',
      image: '/api/placeholder/400/300?text=Ajwa+Dates',
      category: 'DATES'
    },
    {
      id: 5,
      name: 'Medjool Dates',
      image: '/api/placeholder/400/300?text=Medjool+Dates',
      category: 'DATES'
    },
    {
      id: 6,
      name: 'Safawi Dates',
      image: '/api/placeholder/400/300?text=Safawi+Dates',
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
      name: 'Dates Sugar',
      image: s1,
      category: 'DATE SYRUPS'
    }
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
      <style>
        {`
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
            overflow: hidden;
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
            color: white;
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
        `}
      </style>

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
    </>
  );
};

export default ProductCarousel;