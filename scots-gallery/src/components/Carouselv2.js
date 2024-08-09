import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/carouselv2.css";
import "ionicons/icons";

const Carouselv2 = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper(swiperContainerRef.current, {
      grabCursor: true,
      initialSlide: 4,
      centeredSlides: true,
      slidesPerView: "auto",
      spaceBetween: 10,
      speed: 1000,
      freeMode: false,
      mousewheel: {
        thresholdDelta: 30,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      on: {
        click(event) {
          swiper.slideTo(this.clickedIndex);
        },
      },
    });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="swiper" ref={swiperContainerRef}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="https://picsum.photos/id/10/200/300" alt="Lucas" />
              <p>#1</p>
            </div>
            <div className="swiper-slide">
              <img src="https://picsum.photos/id/11/200/300" alt="Lucas" />
              <p>#1</p>
            </div>
            <div className="swiper-slide">
              <img src="https://picsum.photos/id/12/200/300" alt="Lucas" />
              <p>#2</p>
            </div>
            <div className="swiper-slide">
              <img src="https://picsum.photos/id/13/200/300" alt="Lucas" />
              <p>#3</p>
            </div>
            <div className="swiper-slide">
              <img src="https://picsum.photos/id/14/200/300" alt="Lucas" />
              <p>#4</p>
            </div>
            <div className="swiper-slide">
              <img src="https://picsum.photos/id/15/200/300" alt="Lucas" />
              <p>#5</p>
            </div>
            <div className="swiper-slide">
              <img src="https://picsum.photos/id/16/200/300" alt="Lucas" />
              <p>#6</p>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Carouselv2;
