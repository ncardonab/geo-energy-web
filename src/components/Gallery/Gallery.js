import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { getAsset } from "../../common/getAsset";

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
          <div className="image-card-description">{description}</div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    let mounted = true;

    const fetchGallery = async () => {
      const fetchedGallery = await getAsset("gallery");

      if (mounted) {
        const gallery = [...fetchedGallery.data];

        console.log(gallery);

        setGallery(gallery);
      }
    };
    fetchGallery();

    return () => (mounted = false);
  }, []);

  return (
    <div className="Gallery">
      <div className="gallery-header">
        <h1 className="gallery-title">Gallery</h1>
      </div>
      <div className="gallery-section">
        <div className="gallery-section-container">
          {gallery.map((photo, index) => (
            <ImageCard photo={photo} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
