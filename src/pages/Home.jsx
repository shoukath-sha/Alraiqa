import React from "react";
import "./Home.css";
import backgroundVideo from "../assets/video.mp4"; // Replace with your video file path
import ProductCarousel from "../components/ProductCarousel";
import Counter from "../components/Counter";
import  Who from "../components/Who";
import Tree from "../components/Tree";
import KioskLocations from "../components/KioskLocations";
import TraditionalBanner from "../components/TraditionalBanner";
import BlogSection from "../components/BlogSection";
import FoodGallery from "../components/FoodGaller";
import bgimg from '../assets/tradi.png'


const Home = () => {

  return (
    <>
      <div className="home-container">
        <video className="background-video" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Where is Tradition</h1>
          <h2>meets Timeless Taste</h2>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
      <Counter />
      <ProductCarousel/>
      <Who/>
      <Tree/>
      <KioskLocations/>
      <TraditionalBanner backgroundImage={bgimg}/>
      <BlogSection/>
      <FoodGallery/>
    </>
  );
};

export default Home;

