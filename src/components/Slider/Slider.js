import React, { useState } from "react";
import "./Slider.css";
import nextIcon from "../../assets/SVGs/Next.svg";
import prevIcon from "../../assets/SVGs/Prev.svg";

function Slider({ Component, slides }) {
  const [x, setX] = useState(0);
  const goRight = () => {
    x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100);
  };

  const goLeft = () => {
    x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100);
  };

  return (
    <div className="Slider">
      {slides.map((slide, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translatex(${x}%)` }}
          >
            <Component info={slide} key={index}></Component>
          </div>
        );
      })}
      <button className="goLeft" onClick={goLeft}>
        <img src={prevIcon} alt="left icon" />
      </button>
      <button className="goRight" onClick={goRight}>
        <img src={nextIcon} alt="right icon" />
      </button>
      <div className="slider-indicators">
        {slides.map((info, index) => {
          return (
            <div
              key={index}
              className={`slider-indicator ${
                index === -(x / 100) ? "active" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
