import React from "react";
import "./Background.css";
import ViewMoreButton from "../ViewMoreButton/ViewMoreButton";

function Background() {
  return (
    <div className="bg-img">
      <div className="bg-container">
        <h1 className="bg-title text-light">Background</h1>
        <div className="bg-text-container">
          <div className="bg-text text-light">
            This international research group has its origin within the
            successful experience with the previous IGCP project “Unifying
            international research forces to unlock and strengthen geothermal
            exploitation of the Americas and Europe” (2016-2019).
          </div>
          <ViewMoreButton></ViewMoreButton>
        </div>
      </div>
    </div>
  );
}

export default Background;
