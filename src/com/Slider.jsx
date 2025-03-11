import React, { useState, useEffect } from "react";
import "../styles/slider.scss"; // 슬라이더 스타일 적용


const slidesData = [
  {
    id: 1,
    title: "고객의 마음을 이해하는 정원아트네일",
    content: "JUNGWON NAIL ART",
    bgImage: "https://raw.githubusercontent.com/Lee-kunwoo/nailart/refs/heads/main/images/shop_01.webp", //  폴더 내 이미지
  },
  {
    id: 2,
    title: "No1. Nail Art Creation Company",
    content: "JUNGWON NAIL ART",
    bgImage: "https://raw.githubusercontent.com/Lee-kunwoo/nailart/refs/heads/main/images/shop_02.webp",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slidesData.length;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // 3초마다 변경

    return () => clearInterval(slideInterval); // 컴포넌트 언마운트 시 정리
  }, [totalSlides]);

  return (
    <section className="slider">
      {slidesData.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        >
          <div className="overlay">
            <h2 className="title">{slide.title}</h2>
            <p className="content">{slide.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Slider;
