import React from 'react'

import Brand from './Brand'
import MainBanner from '../components/MainBanner'
import bgImg from '../assets/brand.jpeg'
import ProductCarousel from '../components/ProductCarousel'
import TraditionalBanner from '../components/TraditionalBanner'
import bgimg from '../assets/bg2.png'
import FoodGallery from '../components/FoodGaller'
import foodg1 from "../assets/foodg1.png";
import foodg2 from "../assets/foodg2.png";
import foodg3 from "../assets/foodg3.png";


const NewBrand = () => {
  const categoriesList = ['All', 'DATES', 'STUFFED DATES', 'DATE SYRUPS','DATE SYRUPS'];
   const homeImages = [
      { src: foodg1, alt: "Food image 1" },
      { src: foodg2, alt: "Food image 2" },
      { src: foodg3, alt: "Food image 3" },
      { src: foodg1, alt: "Food image 4" }
    ];
  return (
   <>
    
   <MainBanner backgroundImage={bgImg}/>
   <div style={{marginTop:'1rem'}}>
   <ProductCarousel heading={"Explore Our Selection of Products "} categoriess={categoriesList}/></div>
   <div style={{marginTop:'1rem'}}> <TraditionalBanner backgroundImage={bgimg}/></div>
   <FoodGallery Imaging={homeImages}/>
   </>
  )
}

export default NewBrand
