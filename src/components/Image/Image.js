import React from "react";
import "./Image.css";

function Image(props) {
  const { url, image, alt } = props.info;
  return (
    <a className="Image" href={url} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={alt} className="img-container" />
    </a>
  );
}

export default Image;
