import React from 'react'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductCarousel from './components/ProductCarousel';
import './index.css'; // Tailwind CSS file
import JourneyTimeline from './pages/About';
import About from './pages/About';
import Brands from './pages/Brand';
import ProductShowcase from './pages/Products';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import NewBrand from './pages/NewBrand';


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
      
<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/brands' element={<Brands/>}/>
<Route path='/blog' element={<BlogSection/>}/>
<Route path='/products' element={<NewBrand/>}/>



      </Routes>
      {/* <Home/>
      <ProductCarousel/>
      <About/>
      <Brands/>
      <ProductShowcase/> */}
      <Footer/>
    </>
  );
};

export default App;