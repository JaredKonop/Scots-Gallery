import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import "../styles/ImageGallery.css";
import logo1 from "../assets/logos/Logo 1.png";
import logo2 from "../assets/logos/Logo 2.png";
import logo3 from "../assets/logos/Logo 3.png";
import logo4 from "../assets/logos/Logo 4.png";
import logo5 from "../assets/logos/Logo 5.png";
import logo6 from "../assets/logos/Logo 6.png";
import logo7 from "../assets/logos/Logo 7.png";
import logo8 from "../assets/logos/Logo 8.png";
import logo9 from "../assets/logos/Logo 9.png";
import logo10 from "../assets/logos/Logo 10.png";
import ComparisonSlider from "./ComparisonSlider";

const images = [
  { src: logo1, alt: "Description for logo1" },
  { src: logo2, alt: "Description for logo2" },
  { src: logo3, alt: "Description for logo3" },
  { src: logo4, alt: "Description for logo4" },
  { src: logo5, alt: "Description for logo5" },
  { src: logo6, alt: "Description for logo6" },
  { src: logo7, alt: "Description for logo7" },
  { src: logo8, alt: "Description for logo8" },
  { src: logo9, alt: "Description for logo9" },
  { src: logo10, alt: "Description for logo10" },
];

const ImageGallery = () => {
  return (
    <div className="image-gallery-container">
      <h1 className="heading">
        <span>Custom Logos</span>
      </h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <Zoom>
              <img className="gallery-image" src={image.src} alt={image.alt} />
            </Zoom>
          </div>
        ))}
      </div>
      <h1 className="heading">
        <span>Image Restoration</span>
      </h1>
      <ComparisonSlider />
    </div>
  );
};

export default ImageGallery;
