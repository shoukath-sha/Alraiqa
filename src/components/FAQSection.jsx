// FAQSection.jsx
import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Al Raiqa?",
      answer: "Al Raiqa is a premium date producer known for high-quality dates grown in the UAE."
    },
    {
      question: "Where is Al Foah located?",
      answer: "Al Foah is located in the United Arab Emirates, primarily in the Ajman region."
    },
    {
      question: "What makes Al Raiqa dates special?",
      answer: "Al Raiqa dates are known for their exceptional quality, sweetness, and are grown using traditional methods."
    },
    {
      question: "What types of dates does Al Raiqa offer?",
      answer: "Al Raiqa offers various types including Khalas, Khenaizi, Dabbas, Fardh, and Medjool dates."
    },
    {
      question: "Do you offer date-related products besides whole dates?",
      answer: "Yes, Al Raiqa offers date syrup, date paste, date confectionery, and other date-based products."
    },
    {
      question: "How can I purchase Al Raiqa dates in UAE ?",
      answer: "You can purchase Al Foah dates through our official website, retail stores across UAE, or authorized distributors."
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1 className="faq-title">Frequently Asked<br />Questions</h1>
        
        <div className="faq-items">
          {faqItems.map((item, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>
                <span className="plus-icon">+</span>
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="load-more-container">
          <button className="load-more-button">Load More</button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;