import React, { useState, useEffect } from "react";
import Slider from "../../Slider/Slider";
import { researchers } from "./ResearchersInfo";
import linkedInLogo from "../../../assets/SVGs/LinkedIn Logo.svg";
import "./Researchers.css";
import Pill from "../../Pill/Pill";

const arrayToMatrix4Xn = (researchersInfo) => {
  const array = [];
  for (let i = 0; i < Math.ceil(researchersInfo.length / 4); i++) {
    array.push(researchersInfo.slice(i * 4, (i + 1) * 4));
  }
  return array;
};

function Researcher(props) {
  const {
    photo,
    name,
    lastname,
    currentInstitution,
    keywords,
    linkedIn,
  } = props.info;
  return (
    <div className="researcher">
      <img src={photo} alt="researcher photo" className="researcher-photo" />
      <div className="researcher-info-container">
        <div className="researcher-name">
          {name} {lastname}
        </div>
        <div className="researcher-current-institution">
          {currentInstitution}
        </div>
        {keywords ? (
          <div className="researcher-keywords">
            {keywords.split(", ").map((keyword, index) => (
              <Pill text={keyword} key={index} />
            ))}
          </div>
        ) : (
          ""
        )}
        <a href={linkedIn} target="_blank" rel="noopener noreferrer">
          <img
            className="researcher-linkedin"
            src={linkedInLogo}
            alt="linkedin"
          />
        </a>
      </div>
    </div>
  );
}

function ReasearchersBy4(props) {
  const researchersArray = props.info;
  return (
    <div className="researchers-by-4">
      {researchersArray.map((researcher, index) => (
        <Researcher info={researcher} key={index} />
      ))}
    </div>
  );
}

function Researchers() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setInnerWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <div className="Researchers">
      <div className="researchers-container">
        <h1 className="researchers-title">Researchers</h1>
        <Slider
          Component={innerWidth > 900 ? ReasearchersBy4 : Researcher}
          slides={
            innerWidth > 900 ? arrayToMatrix4Xn(researchers) : researchers
          }
          indicators={false}
          isDark={true}
        ></Slider>
      </div>
    </div>
  );
}

export default Researchers;
