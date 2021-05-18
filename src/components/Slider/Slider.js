import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";
import nextIcon from "../../assets/SVGs/Next.svg";
import prevIcon from "../../assets/SVGs/Prev.svg";
import darkNextIcon from "../../assets/SVGs/Dark Next.svg";
import darkPrevIcon from "../../assets/SVGs/Dark Prev.svg";

function Slider({ Component, slides, indicators = true, isDark = false }) {
  const [x, setX] = useState(0);

  const countRef = useRef(x);
  countRef.current = x;

  // Effect related to the slider timer.
  useEffect(() => {
    // This is the effect.
    const timeout = setTimeout(() => {
      setX(countRef.current === -100 * (slides.length - 1) ? 0 : x - 100);
    }, 6000);

    // When the component will unmount calls the cleanup function (that was previously saved for this moment) to get rid of the set time out.
    return () => clearTimeout(timeout);

    // Whenever the 'x' state value changes calls the effect.
  }, [x]);

  // Effect related to the windows resize event.
  useEffect(() => {
    const updateX = () => {
      const newWidth = window.innerWidth;

      // This is a way of skipping events.
      if (newWidth > 900) {
        setX(0);
      }
    };

    window.addEventListener("resize", updateX);
  }, []);

  const goRight = () => {
    x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100);
  };

  const goLeft = () => {
    x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100);
  };

  return (
    <div
      className={`Slider ${isDark ? "dark" : ""} ${indicators ? "active" : ""}`}
    >
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
        <img src={isDark ? darkPrevIcon : prevIcon} alt="left icon" />
      </button>
      <button className="goRight" onClick={goRight}>
        <img src={isDark ? darkNextIcon : nextIcon} alt="right icon" />
      </button>
      {indicators ? (
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
      ) : (
        <></>
      )}
    </div>
  );
}

export default Slider;
