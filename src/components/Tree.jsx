
import React, { useState, useEffect } from 'react';
import './Tree.css';
import tree from '../assets/tree.png';

const Tree = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen size is 962px or less
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 962);
    };
    
    // Initial check
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Health benefits data
  const benefits = [
    {
      id: 1,
      title: "Dates Are A Source Of Antioxidants",
      icon: "🍯",
      className: "benefit-left-top"
    },
    {
      id: 2,
      title: "Dates Help Maintain Bone Mass.",
      icon: "🌿",
      className: "benefit-right-top"
    },
    {
      id: 3,
      title: "Dates Can Help Reduce Blood Pressure.",
      icon: "📊",
      className: "benefit-left-middle"
    },
    {
      id: 4,
      title: "Dates Contain A Brain Booster.",
      icon: "🧠",
      className: "benefit-right-middle"
    },
    {
      id: 5,
      title: "Dates Can BE Good For Blood Sugar Balance",
      icon: "📈",
      className: "benefit-left-bottom"
    },
    {
      id: 6,
      title: "Dates Can BE Good For Blood Sugar Balance",
      icon: "📦",
      className: "benefit-right-bottom"
    }
  ];

  return (
    <div className="dates-container">
      <div className="background-pattern"></div>
      
      {/* Title Section */}
      <div className="title-section">
        <p className="advantages-text">— Advantages</p>
        <h1 className="main-title">A DATES WITH LOT OF<br />HEALTH BENEFITS</h1>
      </div>
      
      {isMobile ? (
        // Mobile Layout
        <div className="mobile-layout">
          {/* Image at the top */}
          <div className="mobile-central-image">
            <img src={tree} alt="Date Palm Tree" />
          </div>
          
          {/* Benefits list below */}
          <div className="mobile-benefits-list">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="mobile-benefit-item">
                <div className="mobile-benefit-content">
                  <div className="benefit-icon">
                    <span>{benefit.icon}</span>
                  </div>
                  <div className="benefit-text">
                    <p>{benefit.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop Layout (original)
        <div className="content-container">
          {/* Central Image */}
          <div className="central-image">
            <img src={tree} alt="Date Palm Tree" />
          </div>
          
          {/* Benefits */}
          {benefits.map((benefit) => (
            <div key={benefit.id} className={`benefit-item ${benefit.className}`}>
              {benefit.className.includes('left') ? (
                <>
                  <div className="benefit-icon">
                    <span>{benefit.icon}</span>
                  </div>
                  <div className="benefit-text benefit-text-right">
                    <p>{benefit.title}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="benefit-text benefit-text-left">
                    <p>{benefit.title}</p>
                  </div>
                  <div className="benefit-icon">
                    <span>{benefit.icon}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tree;