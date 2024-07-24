import React from "react";
import "../styles/carousel.css"; // Import the CSS file

const Carousel = () => {
  return (
    <div>
      <div className="container">
        <h1 className="heading">
          <span>Carousel </span>
        </h1>
        <div id="carousel">
          <figure>
            <img src="https://loremflickr.com/320/240?random=1" alt="" />
          </figure>
          <figure>
            <img src="https://loremflickr.com/320/240?random=2" alt="" />
          </figure>
          <figure>
            <img src="https://loremflickr.com/320/240?random=3" alt="" />
          </figure>
          <figure>
            <img src="https://loremflickr.com/320/240?random=4" alt="" />
          </figure>
          <figure>
            <img src="https://loremflickr.com/320/240?random=5" alt="" />
          </figure>
          <figure>
            <img src="https://loremflickr.com/320/240?random=6" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
