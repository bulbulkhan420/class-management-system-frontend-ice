import React, { useContext, useEffect, useState } from 'react'
import home from "./main.module.css"
import { NavLink } from 'react-router-dom'
import Countup from 'react-countup'
import main4 from '../main4.jpg'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import pic1 from '../pic1.webp'
import pic2 from '../pic2.jpg'
import pic5 from '../pic5.jpg'
import { Context } from './Routesite'
import About from './About'
import FAQ from './FAQ'
import Footer from './Footer'
const slideStyles = {
  width: "100%",
  height: "80dvh",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "30px",
  color: "blue",
  zIndex: 1,
  cursor: "pointer",
  
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "30px",
  color: "blue",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};
export default function Homepage() {
  let slides=[pic2,main4,pic1,pic5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex]})`,
    opacity:'1',
    backgroundColor:'black'
  };
  let [text]=useTypewriter({
    words:['Welcome To ICE Class Management System'],
    loop:{},
    deleteSpeed:0,
    typeSpeed:50
   })
    let val=useContext(Context);
  return (
    <div>
        <div className={home.head}>
        <h5> <NavLink style={{color:'aliceblue',textDecoration:'none'}} to={"student"}>Student Login</NavLink></h5>
        <h5> <NavLink style={{color:'aliceblue',textDecoration:'none'}} to={"teacher"}>Teacher Login</NavLink></h5>
        <h5> <NavLink style={{color:'aliceblue',textDecoration:'none'}} to={"admin"}>Admin Login</NavLink></h5>
        </div> 
        <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}>
        
        <h1 className='fsu' style={{fontWeight:'bolder',color:'blue',position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
            {text}<Cursor/>
        </h1>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
    <About/>
    <FAQ/>
    <Footer/>
    </div>
  )
}
