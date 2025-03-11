import React from "react";
import "../styles/footer.scss"; // SCSS 파일 연결

const Footer = () => {
  return (
    <footer>
      <div className="fobox">
        <div className="fotxt">
          <div>
            <h3>개인정보처리방침</h3>
          </div>
          <div>
            <h3>이용약관</h3>
          </div>
        </div>
        <div className="foad">
          <div>이 홈페이지는 학습용으로 개설한 것으로 실제 거래할 수는 없습니다.</div>
          <div>EMAIL: 2010top@naver.com</div>
          <br />
          <div>copyright (c) Lee Kunwoo all rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
