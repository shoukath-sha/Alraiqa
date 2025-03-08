import React, { useState } from "react";
import "./BlogSection.css";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import FoodGallery from "./FoodGaller";
import foodg1 from "../assets/foodg1.png";
import foodg2 from "../assets/foodg2.png";
import foodg3 from "../assets/foodg3.png";
  const homeImages = [
    { src: foodg1, alt: "Food image 1" },
    { src: foodg2, alt: "Food image 2" },
    { src: foodg3, alt: "Food image 3" },
    { src: foodg1, alt: "Food image 4" }
  ];
const initialBlogs = [
  {
    id: 1,
    date: "July 20, 2021",
    title: "MakerDAO Has Come Full",
    description: "With several Core Units approved by governance to efficiently organize.",
    image: blog1,
  },
  {
    id: 2,
    date: "March 12, 2023",
    title: "MakerDAO Has Come Full",
    description: "With several Core Units approved by governance to efficiently organize.",
    image:blog2,
  },
  {
    id: 3,
    date: "July 20, 2023",
    title: "MakerDAO Has Come Full",
    description: "With several Core Units approved by governance to efficiently organize.",
    image:blog3,
  },
];

const extraBlogs = [
  {
    id: 4,
    date: "August 15, 2023",
    title: "New Innovations in Date Farming",
    description: "Exploring the latest techniques in sustainable date farming.",
    image:blog1,
  },
  {
    id: 5,
    date: "September 10, 2023",
    title: "The Growing Demand for Organic Dates",
    description: "Why organic dates are becoming a global trend.",
    image:blog2,
  },
  {
    id: 6,
    date: "October 5, 2023",
    title: "Expanding Markets for Date Products",
    description: "How date products are making an impact worldwide.",
    image: blog3,
  },
];

const BlogSection = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [showMore, setShowMore] = useState(false);

  const handleLoadMore = () => {
    setShowMore(true);
    setBlogs([...blogs, ...extraBlogs]);
  };

  return (
    <>
    <section className="blog-section">
      <h4 className="blog-subtitle">—The Blog</h4>
      <h2 className="blog-title">Our Blog</h2>
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <p className="blog-date">{blog.date}</p>
            <h3 className="blog-heading">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
          </div>
        ))}
      </div>
      {!showMore && (
        <button className="load-more-btn" onClick={handleLoadMore} >
          See More
        </button>
      )}
    </section>
    
    <FoodGallery Imaging={homeImages}/>
    </>
  );
};

export default BlogSection;


