import React, { useEffect, useState, useContext } from "react";
import "./Gallery.css";
import "../../common/ImageCard.css";
import { getAsset } from "../../common/getAsset";
import Modal from "../../common/Modal/Modal";
import galleryContext from "./galleryContext";

function ImageCard({ photo, setShowModal, selectPhoto }) {
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

  const openModal = () => {
    setShowModal(true);
    selectPhoto(photo);
  };

  return (
    <div className="image-card">
      <div
        className="image-card-background-img"
        style={backgroundImgStyle}
      ></div>
      <div className="image-card-info-container" onClick={openModal}>
        <div className="image-card-notch"></div>
        <div className="image-card-text-container">
          <div className="image-card-description-">{description}</div>
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState({});

  useEffect(() => {
    let mounted = true;

    const fetchGallery = async () => {
      const fetchedGallery = await getAsset("gallery");

      if (mounted) {
        const gallery = [...fetchedGallery.data];

        setGallery(gallery);
      }
    };
    fetchGallery();

    return () => (mounted = false);
  }, []);

  const value = { gallery, showModal, setShowModal };

  const setShowModalFunction = (value) => {
    setShowModal(value);
  };

  const renderGallery = () => {
    return (
      <div className="Gallery">
        <div className="gallery-header">
          <h1 className="gallery-title">Gallery</h1>
        </div>
        <div className="gallery-section">
          <div className="gallery-section-container">
            {gallery.map((photo, index) => (
              <ImageCard
                photo={photo}
                key={index}
                showModal={showModal}
                setShowModal={setShowModalFunction}
                selectPhoto={setSelectedPhoto}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <galleryContext.Provider value={value}>
      {showModal && (
        <Modal setShowModal={setShowModalFunction} photo={selectedPhoto} />
      )}
      {renderGallery()}
    </galleryContext.Provider>
  );
}

export default Gallery;
