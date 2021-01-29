import React from "react";
import "./Gallery.css";
import { photos } from "./GalleryInfo";

function ImageCard({ photo }) {
  const { image, description } = photo;

  const bgImg = `url("${image}")`;

  const backgroundImgStyle = {
    backgroundImage: bgImg,
    height: "213px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "8px 8px 0px 0px",
  };

  return (
    <div className="image-card">
      <div
        className="image-card-background-img"
        style={backgroundImgStyle}
      ></div>
      <div className="image-card-info-container">
        <div className="image-card-notch"></div>
        <div className="image-card-text-container">
          <div className="image-card-text">
            {description.substring(0, 40) + "..."}
          </div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="Gallery">
      <div className="gallery-header">
        <h1 className="gallery-title">Gallery</h1>
      </div>
      <div className="gallery-section">
        <div className="gallery-section-container">
          {photos.map((photo, index) => (
            <ImageCard photo={photo} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
