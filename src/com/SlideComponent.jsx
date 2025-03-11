import React, { useRef, useEffect } from 'react';
import '../styles/SlideComponent.scss';

const SlideComponent = () => {
  const slideBoxRef = useRef(null);
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);
  const isSlidingRef = useRef(false);
  const currentIndexRef = useRef(0);
  const autoSlideIntervalRef = useRef(null);

  useEffect(() => {
    const slideBox = slideBoxRef.current;
    // 원래 li 요소들(클론 전)
    const originalSlides = Array.from(slideBox.querySelectorAll('li'));
    const totalSlides = originalSlides.length; // 예: 12
    const visibleSlides = 3; // 한 프레임에 보일 이미지 개수를 3으로 변경
    const slideItemWidth = 400; // li 요소의 너비 (마진 포함)

    // 무한 슬라이드를 위한 클론 생성 (양쪽 각각 visibleSlides 개)
    for (let i = 0; i < visibleSlides; i++) {
      const firstClone = originalSlides[i].cloneNode(true);
      const lastClone = originalSlides[totalSlides - 1 - i].cloneNode(true);
      slideBox.appendChild(firstClone);
      slideBox.insertBefore(lastClone, slideBox.firstChild);
    }
    
    // 초기 슬라이드 위치 설정  
    // 원본 슬라이드들이 slideBox 내에서 시작하는 인덱스는 visibleSlides부터 시작
    const initialOffset = visibleSlides * slideItemWidth; // 3 * 400 = 1200px
    slideBox.style.transform = `translateX(-${initialOffset + currentIndexRef.current * slideItemWidth}px)`;

    // 슬라이드 이동 함수
    const moveSlide = (direction) => {
      if (isSlidingRef.current) return;
      isSlidingRef.current = true;

      let newIndex = currentIndexRef.current;
      if (direction === 'left') {
        newIndex--;
      } else if (direction === 'right') {
        newIndex++;
      }

      slideBox.style.transition = 'transform 0.5s ease';
      slideBox.style.transform = `translateX(-${initialOffset + newIndex * slideItemWidth}px)`;

      setTimeout(() => {
        // 무한 슬라이드 처리
        if (newIndex < 0) {
          slideBox.style.transition = 'none';
          newIndex = totalSlides - visibleSlides;
          slideBox.style.transform = `translateX(-${initialOffset + newIndex * slideItemWidth}px)`;
        } else if (newIndex > totalSlides - visibleSlides) {
          slideBox.style.transition = 'none';
          newIndex = 0;
          slideBox.style.transform = `translateX(-${initialOffset + newIndex * slideItemWidth}px)`;
        }
        currentIndexRef.current = newIndex;
        isSlidingRef.current = false;
      }, 500);
    };

    // 버튼 클릭 이벤트 연결 (수동 제어)
    const leftButton = leftButtonRef.current;
    const rightButton = rightButtonRef.current;
    const handleLeftClick = () => {
      if (!isSlidingRef.current) moveSlide('left');
    };
    const handleRightClick = () => {
      if (!isSlidingRef.current) moveSlide('right');
    };
    leftButton.addEventListener('click', handleLeftClick);
    rightButton.addEventListener('click', handleRightClick);

    // 3초마다 자동으로 왼쪽 슬라이드 실행
    autoSlideIntervalRef.current = setInterval(() => {
      moveSlide('left');
    }, 3000);

    // 컴포넌트 언마운트 시 이벤트 제거 및 인터벌 클리어
    return () => {
      leftButton.removeEventListener('click', handleLeftClick);
      rightButton.removeEventListener('click', handleRightClick);
      clearInterval(autoSlideIntervalRef.current);
    };
  }, []);

  return (
    <section className="sp1-sec1">
      <div>네일아트</div>
      <div className="sp1-sec1-img-Box-bg">
        <ul className="sp1-sec1-img-Box" ref={slideBoxRef}>
          <li className="sp1-mainImg1" />
          <li className="sp1-mainImg2" />
          <li className="sp1-mainImg3" />
          <li className="sp1-mainImg4" />
          <li className="sp1-mainImg5" />
          <li className="sp1-mainImg6" /> 
          <li className="sp1-mainImg7" />
          <li className="sp1-mainImg8" />
          <li className="sp1-mainImg9" /> 
          <li className="sp1-mainImg10" />
          <li className="sp1-mainImg11" />
          <li className="sp1-mainImg12" />          
        </ul>
        <button className="sp-slide-left" ref={leftButtonRef} />
        <button className="sp-slide-right" ref={rightButtonRef} />
      </div>
    </section>
  );
};

export default SlideComponent;
