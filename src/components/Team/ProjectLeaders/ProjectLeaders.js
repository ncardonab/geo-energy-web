import React from "react";
import Slider from "../../Slider/Slider";
import "./ProjectLeaders.css";
import { projectLeadersInfo } from "./ProjectLeadersInfo";
import linkedInLogo from "../../../assets/SVGs/LinkedIn Logo.svg";

function ProjectLeader(props) {
  return (
    <div className="project-leader">
      <img
        className="project-leader-photo"
        src={props.info.photo}
        alt={`${props.info.name}'s`}
      />
      <div className="project-leader-info-container">
        <h1 className="project-leader-name">
          {props.info.name} {props.info.lastname}
        </h1>
        <div className="project-leader-description">
          {props.info.description}.
        </div>
        <div className="project-leader-country-and-city">
          {props.info.countryAndCity}.
        </div>
        <a href={props.info.linkedIn} target="_blank" rel="noopener noreferrer">
          <img
            className="project-leader-linkedin"
            src={linkedInLogo}
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
}

function ProjectLeaders() {
  return (
    <div className="ProjectLeaders">
      <div className="project-leaders-container">
        <h1 className="project-leaders-title">Project Leaders</h1>
        <Slider Component={ProjectLeader} slides={projectLeadersInfo}></Slider>
      </div>
    </div>
  );
}

export default ProjectLeaders;
