import React, { useState } from "react";
import "./Secretary.css";
import secretaryImg from "../../../assets/Secretary/Renato Somma Italy.jpg";
import pinIcon from "../../../assets/SVGs/maps-and-flags.svg";
import italyFlag from "../../../assets/Countries Flags/Italy.png";

function Secretary() {
  const [mouseEvent, setMouseEvent] = useState("");

  const action = (event) => {
    if (event.type === "click") {
      if (window.innerWidth < 1025) {
        // Enables the click function
        mouseEvent === "active" ? setMouseEvent("") : setMouseEvent("active");
      }
    } else if (event.type === "mouseenter" || event.type === "mouseleave") {
      if (window.innerWidth >= 1025) {
        // Enables the hover function
        mouseEvent === "active" ? setMouseEvent("") : setMouseEvent("active");
      }
    }
  };

  return (
    <div className="Secretary">
      <div className="secretary-container">
        <h1 className="secretary-title">Secretary</h1>
        <div className="secretary-description-container">
          <img src={secretaryImg} alt="" className="secretary-img" />
          <div className="secretary-description">
            Renato Somma is working at Istituto Nazionale di Geofisica e
            Vulcanología IGNV, Osservatorio Vesuviano (Naples, Italy).
          </div>
        </div>
      </div>
      <div
        className={`secretary-img-location ${mouseEvent}`}
        onClick={action}
        onMouseEnter={action}
        onMouseLeave={action}
      >
        <img src={pinIcon} alt="pin icon" className="pin-icon bounce" />
        <div className="location">Mount Vesuvius, Italy.</div>
        <img src={italyFlag} alt="italy flag" className="location-flag" />
      </div>
    </div>
  );
}

export default Secretary;
