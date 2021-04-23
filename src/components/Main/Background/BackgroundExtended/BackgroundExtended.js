import React from "react";
import "./BackgroundExtended.css";
import mountainIcon from "../../../../assets/SVGs/mountain.svg";
import { aims } from "./AimsInfo";

function Aim({ data }) {
  const {
    id,
    icon,
    mainText,
    aimsList,
    background,
    backgroundColor,
    flexDirection,
  } = data;

  let styles;
  let textStyles = {
    color: "#ffffff",
  };
  if (background !== "") {
    styles = {
      backgroundImage: `url("${background}")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
    };
  } else if (backgroundColor !== "") {
    styles = {
      backgroundColor: backgroundColor,
    };
    textStyles = {
      color: "#47474",
    };
  }

  return (
    <section className="be-aim" id={id} style={styles}>
      <div className="be-aim-container">
        <div className={`be-aim-text-container ${flexDirection}`}>
          <img src={icon} alt="icon" className="be-aim-icon" />
          <div className="be-aim-text" style={textStyles}>
            {mainText}
          </div>
        </div>
        <ul className="be-aim-list">
          {aimsList.map((aim, index) => (
            <li className="be-aim-list-item" key={index} style={textStyles}>
              {aim}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BackgroundExtended() {
  return (
    <>
      <div className="be-header">
        <div className="be-container">
          <h1 className="be-title">
            Aims &amp; <span>Background</span>
          </h1>
        </div>
      </div>
      <div className="be-caption-1">
        <div className="be-caption-1-container">
          <div className="be-caption-1-text">
            The 2030 Agenda and its 17 Sustainable Development Goals was adopted
            in 2015 by all countries of the United Nations. In particular, the
            targets goal #7 are the increase of renewable energies in the global
            energy mix and the enhancement of international cooperation to
            facilitate access to clean renewable energy research and technology
            are promoted.
          </div>
        </div>
      </div>
      <hr />
      <div className="be-caption-2">
        <div className="be-caption-2-container">
          <img
            src={mountainIcon}
            alt="mountain icon"
            className="be-caption-2-img"
          />
          <div className="be-caption-2-text">
            These targets define the background of this project, which aims at
            promoting the sustainable use of natural resources. The activities
            proposed by this research team include to engage local authorities,
            civil society, and other stakeholders, paying attention to local
            needs and concerns, enabling co-design of new strategies and
            measures for the development of green skills for the world
            population.
          </div>
        </div>
      </div>

      {aims.map((aimInfo, index) => {
        return <Aim data={aimInfo} key={index} />;
      })}
    </>
  );
}

export default BackgroundExtended;
