import React from "react";
import "./UpcomingEvent.css";
import pinIcon from "../../../assets/SVGs/pin-gray.svg";
import cameraIcon from "../../../assets/SVGs/video-camera-gray.svg";

function UpcomingEvent({ info, isFirst, isLast }) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { date, activityManager, description, url, location } = info;
  const month = months[date.getMonth() - 1].substring(0, 3);
  const day = date.getDay();
  const hours = date.getHours();
  const minutes =
    date.getMinutes().toString().length === 1
      ? "0" + date.getMinutes()
      : date.getMinutes();

  return (
    <div className={`UpcomingEvent ${isFirst} ${isLast}`}>
      <div className="upcoming-event-container">
        <div className="upcoming-event-date-container">
          <div className="upcoming-event-date">
            {day} {month}
          </div>
          <div className="upcoming-event-hour">
            {hours}:{minutes}
          </div>
        </div>
        <div className="upcoming-event-description-container">
          <div className="upcoming-event-manager">{activityManager}</div>
          <div className="upcoming-event-description">{description}</div>
        </div>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={location ? location : url}
        >
          <img
            src={location ? pinIcon : cameraIcon}
            alt="icon"
            className={`icon-${location ? "pin" : "camera"}`}
          />
        </a>
      </div>
    </div>
  );
}

export default UpcomingEvent;
