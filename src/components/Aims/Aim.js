import React from "react";
import "./Aims.css";
import ViewMoreButton from "../ViewMoreButton/ViewMoreButton";

function Aim(props) {
  const { icon, title, description } = props.info;
  return (
    <div className="Aim">
      <img src={icon} alt="aim icon" className="aim-icon" />
      <div className="aim-title">{title}</div>
      <div className="aim-description">{description}</div>
      <ViewMoreButton />
    </div>
  );
}

export default Aim;
