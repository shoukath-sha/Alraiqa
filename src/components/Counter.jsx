// import React from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import "./Counter.css"; // Add your styles here
// import count1 from "../assets/count1.png";
// import count2 from "../assets/count2.png";
// import count3 from "../assets/count3.png";
// import count4 from "../assets/count4.png";

// const StatsSection = () => {
//   const stats = [
//     {
//       id: 1,
//       number: 1,
//       text: "Products Of Dates",
//       background: count1, // Replace with actual image paths
//     },
//     {
//       id: 2,
//       number: 120000,
//       text: "Products Of Dates",
//       background: count2,
//     },
//     {
//       id: 3,
//       number: 53,
//       text: "Countries Exports",
//       background: count3,
//     },
//     {
//       id: 4,
//       number: 68,
//       text: "Dates Products",
//       background: count4,
//     },
//   ];

//   return (
//     <div className="stats-section">
//       {stats.map((stat) => (
//         <StatCard key={stat.id} stat={stat} />
//       ))}
//     </div>
//   );
// };

// const StatCard = ({ stat }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // Trigger animation only once
//     threshold: 0.3, // Adjust the visibility threshold
//   });

//   return (
//     <div
//       ref={ref}
//       className={`stat-card ${inView ? "visible" : ""}`}
//       style={{ backgroundImage: `url(${stat.background})` }}
//     >
//       <div className="stat-content">
//         {inView && (
//           <h1 className="stat-number">
//             <CountUp start={0} end={stat.number} duration={2} />
//           </h1>
//         )}
//         <p className="stat-text">{stat.text}</p>
//       </div>
//     </div>
//   );
// };

// export default StatsSection;
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Counter.css"; // Add your styles here
import count1 from "../assets/count1.png";
import count2 from "../assets/count2.png";
import count3 from "../assets/count3.png";
import count4 from "../assets/count4.png";

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      number: 1,
      text: "Products Of Dates",
      background: count1, 
    },
    {
      id: 2,
      number: 120000,
      text: "Products Of Dates",
      background: count2,
    },
    {
      id: 3,
      number: 53,
      text: "Countries Exports",
      background: count3,
    },
    {
      id: 4,
      number: 68,
      text: "Dates Products",
      background: count4,
    },
  ];

  return (
    <div className="stats-section">
      {stats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
};

const StatCard = ({ stat }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.3, // Adjust the visibility threshold
  });

  return (
    <div
      ref={ref}
      className={`stat-card ${inView ? "visible" : ""}`}
      style={{ backgroundImage: `url(${stat.background})` }}
    >
      <div className="stat-content">
        {inView && (
          <h1 className="stat-number">
            <CountUp start={0} end={stat.number} duration={2} />
          </h1>
        )}
        <p className="stat-text">{stat.text}</p>
      </div>
    </div>
  );
};

export default StatsSection;