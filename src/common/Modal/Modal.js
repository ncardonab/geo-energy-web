import React, { useContext, useEffect } from "react";
import "./Modal.css";

const Modal = (props) => {
  const { photo, setShowModal } = props;
  const { image, description } = photo;

  setShowModal(true);

  const closeModal = () => {
    setShowModal(false);
  };

  const onModalOutsideClick = (event) => {
    if (event.target.className === "modal") closeModal();
  };

  const bgImg = `url("${image}")`;

  const backgroundImgStyle = {
    backgroundImage: bgImg,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div className="modal" onClick={onModalOutsideClick}>
      <div className="modal-content">
        <img
          className="modal-image"
          src={image}
          style={backgroundImgStyle}
        ></img>
        <p className="modal-description">{description}</p>
      </div>
    </div>
  );
};

export default Modal;
