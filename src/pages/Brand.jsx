import React from 'react'
import newImg1 from '../assets/new4.png';
import newImg2 from '../assets/new5.jpg';
import newImg3 from '../assets/new6.jpg';
import newImg4 from '../assets/new3.png';
import MainBanner from '../components/MainBanner';
import Products from '../pages/Products';  // ✅ Import Products
import FoodGaller from '../components/FoodGaller';  // ✅ Import FoodGaller


const Brand = () => {

  
  const brandImages =[
    {src:newImg1 },
    {src:newImg2 },
    {src:newImg3 },
    {src:newImg4 }
  ]

  return (
   <>
   <MainBanner/>
   <Products/>
   <FoodGaller Imaging={brandImages} />
   </>
  )
}

export default Brand
