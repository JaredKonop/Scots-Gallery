import React from "react";
import "../styles/work.css";
import ImageGallery from "../components/ImageGallery";
import Carousel from "../components/Carousel";

// import logo from "../assets/Logo.png";

const Work = () => {
  return (
    <div className="work-container">
      <div className="image-gallery-container">
        <ImageGallery />
      </div>
      <div className="carousel-container">
        <Carousel />
      </div>
    </div>
  );
};

export default Work;
