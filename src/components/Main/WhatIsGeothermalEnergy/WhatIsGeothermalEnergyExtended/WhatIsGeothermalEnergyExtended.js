import React from "react";
import "./WhatIsGeothermalEnergyExtended.css";
import targetIcon from "../../../../assets/SVGs/target.svg";
import schoolIcon from "../../../../assets/SVGs/school.svg";
import groupIcon from "../../../../assets/SVGs/group.svg";
import maintenanceIcon from "../../../../assets/SVGs/maintenance.svg";

function WhatIsGeothermalEnergyExtended() {
  return (
    <>
      <div className="WhatIsGeothermalEnergyExtended">
        <div className="wigee-header">
          <h1 className="wigee-header-title">
            What is <span>Geothermal</span> Energy?
          </h1>
        </div>
      </div>
      <div className="wigee-captions">
        <div className="wigee-caption-1">
          <div className="wigee-caption-2-container">
            Geothermal energy is exploited in many countries of the world as
            either low/ intermediate temperature resources (for building heating
            and cooling, district heating, greenhouses) or high temperature
            resources (for electricity generation). In general, electricity
            generation from geothermal energy remains poorly known to
            stakeholders, which require a better understanding of the challenges
            to ensure the energy transition to a low carbon society. In this
            context, geothermal resources provide renewable and clean energy to
            meet the Sustainable Development Goals.
          </div>
        </div>
        <hr />
        <div className="wigee-caption-2">
          <div className="wigee-caption-2-container">
            High temperature geothermal resources are exploited through deep
            wells (1-5 km) drilled in reservoirs that can be highly
            heterogeneous volcanic complexes, sedimentary basins or old basement
            rocks. The reservoir permeability can be enhanced through different
            engineering techniques to improve productivity, although it may
            threaten social acceptability. Low orintermediate temperature
            resources are exploited with shallow (few meters) or intermediate
            boreholes (up to 1 km) mostly providing heating and cooling
            capacity.
          </div>
        </div>
        <hr />
        <div className="wigee-caption-3">
          <div className="wigee-caption-3-container">
            <img className="wigee-caption-3-target" src={targetIcon}></img>
            <div className="wigee-caption-3-text">
              The main objective of this project is to promote the use of
              <span> geothermal resources</span> as a clean, low-carbon,
              base-load, and renewable energy through renewable energy.
            </div>
          </div>
        </div>
        <div className="wigee-caption-4">
          <div className="wigee-caption-4-container">
            <div className="wigee-caption-4.1">
              <img
                src={schoolIcon}
                alt="school icon"
                className="wigee-caption-4-img"
              />
              <div className="wigee-caption-4-text">
                Increasing knowledge and understanding of deep geothermal
                reservoirs.
              </div>
            </div>
            <div className="wigee-caption-4.2">
              <img
                src={groupIcon}
                alt="group icon"
                className="wigee-caption-4-img"
              />
              <div className="wigee-caption-4-text">
                Conducting outreach activities with focus groups and
                communities.
              </div>
            </div>
            <div className="wigee-caption-4.3">
              <img
                src={maintenanceIcon}
                alt="maintenance icon"
                className="wigee-caption-4-img"
              />
              <div className="wigee-caption-4-text">
                Promoting the installation of geothermal heat pumps.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatIsGeothermalEnergyExtended;
