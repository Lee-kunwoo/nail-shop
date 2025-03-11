import React, { useEffect, useState } from "react";
import "../styles/TextTyping.scss";

const TextTyping = () => {
  const [scrollY, setScrollY] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 현재 디바이스가 모바일인지 확인
  const isMobile = window.innerWidth <= 768;

  // 진행률 계산 함수
  const calWidth = (scroll, start, end) => {
    if (scroll < start) return 0;
    if (scroll > end) return 100;
    return ((scroll - start) / (end - start)) * 100;
  };

  // 모바일이면 스크롤 시작/끝 값을 조정
  const thresholds = isMobile
    ? { first: { start: 100, end: 200 }, second: { start: 201, end: 300 }, third: { start: 301, end: 400 } }
    : { first: { start: 500, end: 613 }, second: { start: 614, end: 727 }, third: { start: 727, end: 820 } };

  return (
    <div id="TextoutBox">
      <div className="text">
        <span>신뢰와</span>
        <p style={{ width: `${calWidth(scrollY, thresholds.first.start, thresholds.first.end)}%` }}>
          신뢰와
        </p>
      </div>
      <div className="text">
        <span>열정! 네일아트</span>
        <p style={{ width: `${calWidth(scrollY, thresholds.second.start, thresholds.second.end)}%` }}>
        열정! 네일아트
        </p>
      </div>
      <div className="text">
        <span>미래를 선도합니다</span>
        <p style={{ width: `${calWidth(scrollY, thresholds.third.start, thresholds.third.end)}%` }}>
          미래를 선도합니다
        </p>
      </div>
    </div>
  );
};

export default TextTyping;
