import React from "react";
import Slider from '../com/Slider.jsx';
import TextTyping from '../com/TextTyping.jsx';
import VideoSection from "../com/VideoSection.jsx";
import OurBrand from "../com/OurBrand.jsx";
import SlideComponent from "../com/SlideComponent.jsx";
import Footer from '../com/Footer.jsx';

import "../styles/slider.scss"; // 슬라이더 스타일 적용
import "../styles/TextTyping.scss"; // SCSS 파일 연결
import "../styles/VideoSection.scss";
import "../styles/OurBrand.scss";
import "../styles/SlideComponent.scss";

function Home() {
  return (
    <div>
      <Slider />      
      <TextTyping />
      <VideoSection />
      <OurBrand />
      <SlideComponent />     
      <Footer />       
    </div>
  );
}

export default Home;