import React from "react";
import "./WhatIsGeothermalEnergy.css";
import ViewMoreButton from "../../ViewMoreButton/ViewMoreButton";

const WhatIsGeothermalEnergy = () => {
  return (
    <div className="WhatIsGeothermalEnergy">
      <div className="wige-container">
        <h1 className="wige-title">
          What is <span className="wige-title-highlight">Geothermal </span>
          Energy?
        </h1>
        <div className="wige-text-container">
          <div className="wige-text">
            Geothermal energy is that which is contained in the form of heat in
            the interior of the Earth. This includes both the heat stored in
            solid rock as the fluids that found in the pores…
          </div>
          <ViewMoreButton
            path={"/geo-energy-web/WhatIsGeothermalEnergy"}
          ></ViewMoreButton>
        </div>
      </div>
    </div>
  );
};

export default WhatIsGeothermalEnergy;
