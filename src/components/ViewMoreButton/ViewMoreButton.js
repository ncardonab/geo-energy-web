import React from "react";
import viewMoreIcon from "../../assets/View More Icon 30x30.svg";
import "./ViewMoreButton.css";

function ViewMoreButton() {
  return (
    <a className="view-more-btn">
      <img
        src={viewMoreIcon}
        alt="view more icon"
        className="view-more-icon"
      ></img>
      <div className="view-more">VIEW MORE</div>
    </a>
  );
}

export default ViewMoreButton;
