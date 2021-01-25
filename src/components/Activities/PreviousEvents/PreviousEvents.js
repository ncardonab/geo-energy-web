import React from "react";
import { activities } from "./PreviousEventsInfo";
import "./PreviousEvents.css";

function ImageCard({ activity }) {
  const { name, description, background, url } = activity;

  const bgImg = `url("${background}")`;

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
      <div className="text-container">
        <div className="notch"></div>
        <a
          className="card-text"
          href={url ? url : "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </div>
    </div>
  );
}

function PreviousEvents() {
  return (
    <div className="PreviousEvents">
      <div className="activities-section-container">
        <div className="activities">
          {activities.map((activity, index) => (
            <ImageCard key={index} activity={activity}></ImageCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PreviousEvents;
