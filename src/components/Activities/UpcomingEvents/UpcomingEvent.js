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

  let { date, eventManager, description, url, isVirtual } = info;
  let { month, day, time } = date;
  month = months[+month - 1].substring(0, 3);

  return (
    <div className={`UpcomingEvent ${isFirst} ${isLast}`}>
      <div className="upcoming-event-container">
        <div className="upcoming-event-date-container">
          <div className="upcoming-event-date">
            {day} {month}
          </div>
          <div className="upcoming-event-hour">{time}</div>
        </div>
        <div className="upcoming-event-description-container">
          <div className="upcoming-event-manager">{eventManager}</div>
          <div className="upcoming-event-description">{description}</div>
        </div>
        <a target="_blank" rel="noreferrer noopener" href={url}>
          <img
            src={isVirtual ? pinIcon : cameraIcon}
            alt="icon"
            className={`icon-${isVirtual ? "pin" : "camera"}`}
          />
        </a>
      </div>
    </div>
  );
}

export default UpcomingEvent;
