
import React, { useEffect, useRef } from 'react';
import '../styles/OurBrand.scss';

const OurBrand = () => {
  const ourBrandRef = useRef(null);

  useEffect(() => {
    const ourBrandEl = ourBrandRef.current;
    if (!ourBrandEl) return;

    const innerDiv = ourBrandEl.querySelector('div'); // 카드들을 감싸는 div

    const handleScroll = () => {
      const ourBrandTop = ourBrandEl.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (ourBrandTop <= viewportHeight && ourBrandTop >= 0) {
        innerDiv.classList.add('active');
      } else {
        innerDiv.classList.remove('active');
      }
    };

    let yPrev = window.pageYOffset || document.documentElement.scrollTop;

    const handleTouchStart = () => {
      yPrev = window.pageYOffset || document.documentElement.scrollTop;
    };

    const handleTouchEnd = () => {
      const yCurrent = window.pageYOffset || document.documentElement.scrollTop;
      const deltaY = yCurrent - yPrev;
      if (deltaY > 20 && yCurrent > 200) {
        innerDiv.classList.add('active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div id="our_brand" ref={ourBrandRef}>
      <section>
        <h2>OUR BRAND VALUE</h2>
        <div>
          <section>
            <h3>Cuticle</h3>
            <img src="https://raw.githubusercontent.com/Lee-kunwoo/nailart/refs/heads/main/images/cuticle.webp" alt="Cuticle" />
          </section>
          <section>
            <h3>Handcream</h3>
            <img src="https://raw.githubusercontent.com/Lee-kunwoo/nailart/refs/heads/main/images/handcream.webp" alt="Handcream" />
          </section>
          <section>
            <h3>Nailhardener</h3>
            <img src="https://raw.githubusercontent.com/Lee-kunwoo/nailart/refs/heads/main/images/nailhardener.webp" alt="Nailhardener" />
          </section>
          <section>
            <h3>Nailserum</h3>
            <img src="https://raw.githubusercontent.com/Lee-kunwoo/nailart/refs/heads/main/images/nailserum.webp" alt="Nailserum" />
          </section>
        </div>
      </section>
    </div>
  );
};

export default OurBrand;
