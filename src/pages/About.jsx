// import React from 'react';
// import ab from '../assets/about.jpg'
// const styles = `
//     .timeline-container {
//     min-height: 100vh;
//     background: linear-gradient(to bottom, #f59e0b, #fcd34d, #fef3c7);
//     padding: 2rem 1rem;
//   }

//   .timeline-wrapper {
//     max-width: 1000px;
//     margin: 0 auto;
//   }

//   .header {
//     text-align: center;
//     margin-bottom: 4rem;
//   }

//   .header h1 {
//     font-size: 2.5rem;
//     font-family: serif;
//     color: white;
//     margin-bottom: 1rem;
//   }

//   .header h2 {
//     font-size: 2rem;
//     font-family: serif;
//     color: white;
//     margin-bottom: 1rem;
//   }

//   .header p {
//     font-size: 0.875rem;
//     color: white;
//     max-width: 42rem;
//     margin: 0 auto 2rem;
//   }
//     .header p{
//     margin-bottom:3px ;}

//   .center-image {
//     width: 200px;
//     height: 200px;
//     margin: 0 auto 3rem;
//     position: relative;
//   }

//   .center-image .image-container {
//     position: absolute;
//     inset: 0;
//     border-radius: 40%;
//     overflow: hidden;
//   }

//   .center-image img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   .timeline {
//     position: relative;
//   }

//   .timeline-line {
//     position: absolute;
//     left: 50%;
//     transform: translateX(-50%);
//     height: 100%;
//     width: 2px;
//     background: white;
//   }

//   .timeline-item {
//     position: relative;
//     margin-bottom: 8rem;
//   }

//   .timeline-dot {
//     position: absolute;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 1rem;
//     height: 1rem;
//     background: #0d9488;
//     border-radius: 50%;
//     border: 4px solid white;
//   }

//   .timeline-content {
//     display: flex;
//     justify-content: space-between;
//     align-items: flex-start;
//   }

//   .timeline-side {
//     width: 50%;
//     padding: 0 3rem;
//   }

//   .timeline-year {
//     font-size: 1.25rem;
//     font-weight: bold;
//     color: #0d9488;
//     margin-bottom: 1rem;
//   }

//   .timeline-points {
//     display: flex;
//     flex-direction: column;
//     gap: 0.5rem;
    
//   }

//   .point-item {
//     display: flex;
//     align-items: flex-start;
//     gap: 0.5rem;
//   }

//   .point-dot {
//     width: 0.5rem;
//     height: 0.5rem;
//     background: #0d9488;
//     border-radius: 50%;
//     margin-top: 1.2rem;
//     flex-shrink: 0;
//   }

//   .point-text {
//     color: white;
//     font-size: 0.875rem;
//   }

//   .image-wrapper {
//     width: 12rem;
//     height: 12rem;
//     position: relative;
//     margin-left: auto;
//   }

//   .timeline-item:nth-child(even) .image-wrapper {
//     margin-left: 0;
//     margin-right: auto;
//   }

//   .image-container {
//     width: 100%;
//   height: 250px;
//   object-fit: cover;
//   clip-path: ellipse(50% 50% at center); /* More precise egg shape */
//   background: white;
//   }

//   .image-container img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }

//   @media (max-width: 768px) {
//     .timeline-container {
//       padding: 1rem;
//     }

//     .header h1 {
//       font-size: 2rem;
//     }

//     .header h2 {
//       font-size: 1.5rem;
//     }

//     .center-image {
//       width: 150px;
//       height: 150px;
//     }

//     .timeline-line {
//       left: 1rem;
//     }

//     .timeline-dot {
//       left: 1rem;
//     }

//     .timeline-content {
//       flex-direction: column;
//     }

//     .timeline-side {
//       width: 100%;
//       padding: 0 0 0 2rem;
//     }

//     .timeline-item {
//       margin-bottom: 4rem;
//     }

//     .image-wrapper {
//       width: 10rem;
//       height: 10rem;
//       margin: 2rem auto;
//     }

//     .timeline-item:nth-child(even) .image-wrapper {
//       margin: 2rem auto;
//     }

//     .timeline-item:nth-child(even) .timeline-content {
//       flex-direction: column;
//     }

//     .timeline-item:nth-child(even) .timeline-side {
//       padding: 0 0 0 2rem;
//     }
//   }

//   @media (max-width: 480px) {
//     .header h1 {
//       font-size: 1.75rem;
//     }

//     .header h2 {
//       font-size: 1.25rem;
//     }

//     .header p {
//       font-size: 0.8rem;
//     }

//     .center-image {
//       width: 120px;
//       height: 120px;
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
//     }
//   }
// `;

// const About = () => {
//   const timelineData = [
//     {
//       period: "2013-2017",
//       points: [
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields.",
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields.",
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields."
//       ],
//       image: ab
//     },
//     {
//       period: "2018-2020",
//       points: [
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields.",
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields.",
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields."
//       ],
//       image: ab
//     },
//     {
//       period: "2020-2022",
//       points: [
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields.",
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields.",
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields."
//       ],
//       image: ab
//     },
//     {
//       period: "2023-2024",
//       points: [
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields.",
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields.",
//         "Our Team Of Highly Skilled Attorneys Has Years Of Experience Across Diverse Legal Fields."
//       ],
//       image: ab
//     }
//   ];

//   return (
//     <>
//       <style>{styles}</style>
//       <div className="timeline-container">
//         <div className="timeline-wrapper">
//           <div className="header">
//             <h1>Our Journey</h1>
//             <h2>Through The Years</h2>
//             <p>
//               At Al Susu Davis, we are passionate about sharing the endless benefits of modern hospitality through the goodness of fresh dates. As the company of a pioneering date in Abu dhabi, our journey began with a vision to bring
//             </p>
//           </div>

//           {/* Center Image after header */}
//           <div className="center-image">
//             <div className="image-container">
//               <img src={ab} alt="Journey" />
//             </div>
//           </div>

//           <div className="timeline">
//             <div className="timeline-line"></div>
            
//             {timelineData.map((item, index) => (
//               <div key={index} className="timeline-item">
//                 <div className="timeline-dot"></div>
//                 <div className="timeline-content">
//                   <div className="timeline-side">
//                     {index % 2 === 0 ? (
//                       <>
//                         <div className="timeline-year">★ {item.period}</div>
//                         <div className="timeline-points">
//                           {item.points.map((point, pointIndex) => (
//                             <div key={pointIndex} className="point-item">
//                               <div className="point-dot"></div>
//                               <p className="point-text">{point}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </>
//                     ) : (
//                       <div className="image-wrapper">
//                         <div className="image-container">
//                           <img src={item.image} alt={`Timeline ${item.period}`} />
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                   <div className="timeline-side">
//                     {index % 2 === 0 ? (
//                       <div className="image-wrapper">
//                         <div className="image-container">
//                           <img src={item.image} alt={`Timeline ${item.period}`} />
//                         </div>
//                       </div>
//                     ) : (
//                       <>
//                         <div className="timeline-year">★ {item.period}</div>
//                         <div className="timeline-points">
//                           {item.points.map((point, pointIndex) => (
//                             <div key={pointIndex} className="point-item">
//                               <div className="point-dot"></div>
//                               <p className="point-text">{point}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;

import React from 'react';
import ab from '../assets/aab.jpg';
import ab1 from '../assets/aab1.jpg';
import ab2 from '../assets/aab2.jpg';
import ab3 from '../assets/aab3.jpg';
import ab4 from '../assets/aab4.jpg';

import TraditionalBanner from '../components/TraditionalBanner';
import bg2 from '../assets/bg2.png'
import foodg1 from "../assets/aboo1.jpg";
import foodg2 from "../assets/aboo2.jpg";
import foodg3 from "../assets/aboo3.jpg";
import foodg4 from "../assets/aboo4.jpg";
import FoodGallery from '../components/FoodGaller';


const Timeline = () => {
  const homeImages = [
        { src: foodg1, alt: "Food image 1" },
        { src: foodg2, alt: "Food image 2" },
        { src: foodg3, alt: "Food image 3" },
        { src: foodg4, alt: "Food image 4" }
      ];
  const timelineData = [
    {
      period: "2013-2017",
      title: "Our Foundation",
      description: "The beginning of our journey in date cultivation and distribution.",
      points: [
        "Established our first date palm plantation in Abu Dhabi",
        "Developed sustainable farming practices focused on quality",
        "Created the first range of premium date products"
      ],
      image: ab1
    },
    {
      period: "2018-2020",
      title: "Growth & Innovation",
      description: "Expanding our reach and product offerings.",
      points: [
        "Expanded distribution to international markets across 12 countries",
        "Introduced organic certification for all our date farms",
        "Launched our signature gift packaging for special occasions"
      ],
      image: ab2
    },
    {
      period: "2020-2022",
      title: "Sustainability Focus",
      description: "Implementing eco-friendly practices across operations.",
      points: [
        "Achieved 100% sustainable packaging across all product lines",
        "Reduced water consumption by 40% through innovative irrigation",
        "Established community support programs in farming regions"
      ],
      image: ab3
    },
    {
      period: "2023-Present",
      title: "Global Recognition",
      description: "Receiving acclaim for our quality and practices.",
      points: [
        "Won International Date Palm Excellence Award for quality",
        "Expanded product line to include date-based gourmet items",
        "Launched direct-to-consumer online platform reaching 30+ countries"
      ],
      image: ab4
    }
  ];

  return (
    <>
    <div className="journey-page" style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 30 L30 0 L60 30 L30 60 Z' fill='none' stroke='%23999' stroke-opacity='0.3' stroke-width='1'/%3E%3C/svg%3E")`
  }}>
      <div className="journey-container">
        <header className="journey-header">
          <div className="journey-header-content">
            <h1>Our Journey</h1>
            <p className="subtitle">Through The Years</p>
            <div className="logo-container">
              <div className="logo-circle">
                <img src={ab} alt="Al Susu Davis" />
              </div>
            </div>
            <p className="description">
              At Al Susu Davis, we are passionate about sharing the endless benefits of modern hospitality through the goodness of fresh dates. 
              As a pioneering date company in Abu Dhabi, our journey began with a vision to bring exceptional quality and taste to date lovers worldwide.
            </p>
          </div>
        </header>

        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
              <div className="timeline-marker">
                <div className="year">{item.period}</div>
                <div className="dot"></div>
              </div>
              
              <div className="timeline-content">
                <div className="content-inner">
                  <h3>{item.title}</h3>
                  <p className="period-description">{item.description}</p>
                  <ul className="achievement-list">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="timeline-image">
                  <img src={item.image} alt={`${item.period} milestone`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      

      <style jsx>{`
        .journey-page {
          min-height: 100vh;
          
          font-family: 'Poppins', sans-serif;
          color: #333;
          padding: 0;
          margin: 0;
          overflow-x: hidden;
         
          
        }
          

        .journey-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .journey-header {
          text-align: center;
          margin-bottom: 6rem;
          position: relative;
        }

        .journey-header-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .journey-header h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #00000;
          margin: 0;
          // text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

        .subtitle {
          font-size: 2rem;
          color: #fff;
          margin: 0.5rem 0 2rem;
          font-weight: 300;
          opacity: 0.9;
        }

        .logo-container {
          display: flex;
          justify-content: center;
          margin: 2rem 0;
        }

        .logo-circle {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          overflow: hidden;
          border: 8px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .logo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .description {
          font-size: 1.1rem;
          color: #fff;
          line-height: 1.7;
          max-width: 700px;
          margin: 2rem auto 0;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        .timeline {
          position: relative;
          padding: 2rem 0;
        }

        .timeline:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 3px;
          background: rgba(255, 255, 255, 0.7);
          transform: translateX(-50%);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 5rem;
        }

        .timeline-marker {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .year {
          background: #fff;
          color: #f8b500;
          font-weight: 700;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          margin-bottom: 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          font-size: 0.9rem;
        }

        .dot {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #fff;
          border: 4px solid #f8b500;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.5);
        }

        .timeline-content {
          display: flex;
          align-items: center;
          background: white;
          border-radius: 10px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 45%;
        }

        .even .timeline-content {
          margin-left: 5%;
        }

        .odd .timeline-content {
          margin-left: 50%;
        }

        .content-inner {
          padding: 2rem;
          flex: 1;
        }

        .timeline-content h3 {
          color: #f8b500;
          margin-top: 0;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .period-description {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 1.5rem;
        }

        .achievement-list {
          padding-left: 1.2rem;
          margin: 0;
        }

        .achievement-list li {
          margin-bottom: 0.7rem;
          position: relative;
          color: #444;
          line-height: 1.5;
        }

        .timeline-image {
          width: 200px;
          height: 100%;
          overflow: hidden;
          flex-shrink: 0;
          background: #f5f5f5;
        }

        .timeline-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 991px) {
          .journey-container {
            padding: 3rem 1.5rem;
          }

          .journey-header h1 {
            font-size: 2.8rem;
          }

          .subtitle {
            font-size: 1.6rem;
          }

          .logo-circle {
            width: 150px;
            height: 150px;
          }
        }

        @media (max-width: 767px) {
          .timeline:before {
            left: 40px;
          }

          .timeline-marker {
            left: 40px;
            align-items: flex-start;
          }

          .year {
            margin-left: -20px;
          }

          .even .timeline-content,
          .odd .timeline-content {
            width: calc(100% - 80px);
            margin-left: 80px;
            flex-direction: column;
          }

          .timeline-image {
            width: 100%;
            height: 200px;
            order: -1;
          }

          .journey-header h1 {
            font-size: 2.2rem;
          }

          .subtitle {
            font-size: 1.4rem;
          }

          .logo-circle {
            width: 120px;
            height: 120px;
          }

          .description {
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .journey-container {
            padding: 2rem 1rem;
          }

          .journey-header {
            margin-bottom: 3rem;
          }

          .journey-header h1 {
            font-size: 2rem;
          }

          .subtitle {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          .content-inner {
            padding: 1.5rem;
          }

          .timeline-content h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </div>
    <br /> <br />
    <TraditionalBanner backgroundImage={bg2} title={"Discover the Authentic Flavors Explore the Culture"}/>
    <br /> <br />
    <FoodGallery Imaging={homeImages}/>
    </>
    
  );
};

export default Timeline;