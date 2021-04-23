import React from "react";
import { Link } from "react-router-dom";
import viewMoreIcon from "../../assets/SVGs/View More Icon 30x30.svg";
import "./ViewMoreButton.css";

function ViewMoreButton({ path }) {
  return (
    <Link to={path} className="view-more-btn">
      <img
        src={viewMoreIcon}
        alt="view more icon"
        className="view-more-icon"
      ></img>
      <div className="view-more">VIEW MORE</div>
    </Link>
  );
}

export default ViewMoreButton;
