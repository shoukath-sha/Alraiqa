// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from '../assets/logo.png';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       {/* Hamburger Menu Button */}
//       <button className="hamburger-menu" onClick={toggleMenu}>
//         {isMenuOpen ? (
//           <svg
//             className="menu-icon"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//           >
//             <path d="M18 6L6 18M6 6l12 12" />
//           </svg>
//         ) : (
//           <svg
//             className="menu-icon"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="white"
//             strokeWidth="2"
//           >
//             <path d="M3 12h18M3 6h18M3 18h18" />
//           </svg>
//         )}
//       </button>

//       {/* Left Links (Desktop) */}
//       <ul className="navbar-links-left">
//       <a href="/">  <li className="navbar-item">Home</li></a>
//        <a href="/products"> <li className="navbar-item">Products</li></a>
//        <a href="/brands"> <li className="navbar-item">Brands</li></a>
//       </ul>

//       {/* Logo */}
//       <div className="navbar-logo">
//         <img
//           src={logo}
//           alt="Al Raiga Logo"
//           className="logo-image"
//         />
//       </div>

//       {/* Right Links (Desktop) */}
//       <ul className="navbar-links-right">
//         <a href="/about"><li className="navbar-item">About</li></a>
//         <a href="/blog"><li className="navbar-item">Blog</li></a>
//         <a href="/contact"><li className="navbar-item">Contact Us</li></a>
//       </ul>
                   
//       {/* Mobile Menu */}
//       <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
//         <ul className="mobile-links">
//          <a href="/"><li className="mobile-item">Home</li></a>
//          <a href="/products">  <li className="mobile-item">Products</li></a>
//          <a href="/brands"> <li className="mobile-item">Brands</li></a>
//          <a href="/about">  <li className="mobile-item">About</li></a>
//          <a href="/blog">  <li className="mobile-item">Blog</li></a>
//          <a href="/contact"> <li className="mobile-item">Contact Us</li></a>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar; 

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [foldingStage, setFoldingStage] = useState(0); // 0-4 for different fold stages
  const [scrolled, setScrolled] = useState(false); // New state for tracking scroll for color change
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
      
      // Set scrolled state for color change
      setScrolled(position > 50);
      
      // Set folding stages based on scroll position
      if (position < 10) {
        setFoldingStage(0);
      } else if (position < 50) {
        setFoldingStage(1);
      } else if (position < 100) {
        setFoldingStage(2);
      } else if (position < 150) {
        setFoldingStage(3);
      } else {
        setFoldingStage(4);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar fold-stage-${foldingStage} ${scrolled ? 'scrolled' : ''}`}>
      {/* Paper fold layers */}
      <div className="paper-fold-layers">
        <div className="fold-layer fold-layer-1"></div>
        <div className="fold-layer fold-layer-2"></div>
        <div className="fold-layer fold-layer-3"></div>
        <div className="fold-layer fold-layer-4"></div>
      </div>
      
      {/* Hamburger Menu Button */}
      <button className="hamburger-menu" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            className="menu-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke={scrolled ? "black" : "white"}
            strokeWidth="2"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="menu-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke={scrolled ? "black" : "white"}
            strokeWidth="2"
          >
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        )}
      </button>

      {/* Left Links (Desktop) */}
      <ul className="navbar-links-left">
        <a href="/"><li className="navbar-item">Home</li></a>
        <a href="/products"><li className="navbar-item">Products</li></a>
        <a href="/brands"><li className="navbar-item">Brands</li></a>
      </ul>

      {/* Logo */}
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Al Raiga Logo"
          className="logo-image"
        />
      </div>

      {/* Right Links (Desktop) */}
      <ul className="navbar-links-right">
        <a href="/about"><li className="navbar-item">About</li></a>
        <a href="/blog"><li className="navbar-item">Blog</li></a>
        <a href="/contact"><li className="navbar-item">Contact Us</li></a>
      </ul>
                      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""} ${scrolled ? 'scrolled' : ''}`}>
        <div className="fold-corner fold-corner-left"></div>
        <div className="fold-corner fold-corner-right"></div>
        <ul className="mobile-links">
         <a href="/"><li className="mobile-item">Home</li></a>
         <a href="/products"><li className="mobile-item">Products</li></a>
         <a href="/brands"><li className="mobile-item">Brands</li></a>
         <a href="/about"><li className="mobile-item">About</li></a>
         <a href="/blog"><li className="mobile-item">Blog</li></a>
         <a href="/contact"><li className="mobile-item">Contact Us</li></a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;