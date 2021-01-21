import React, { useRef } from "react";
import "./HomePage.css";
import Background from "../../../assets/Cascada.png";
import NewsSet from "../News/NewsSet";

function HomePage() {
  const [newsSet, setNewsSet] = React.useState(
    window.innerWidth > 1024 ? <NewsSet></NewsSet> : ""
  );

  // Basically the previousWidthRef is the previous window's inner width
  const previousWidthRef = useRef(window.innerWidth);
  previousWidthRef.current = window.innerWidth;

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024 && previousWidthRef.current > 1024) {
        // If passes through a breakpoint from right to left will show the sm news
        setNewsSet();
      } else if (window.innerWidth > 1024 && previousWidthRef.current < 1024) {
        // If passes through a breakpoint from left to rigth will hide the sm news
        setNewsSet(<NewsSet />);
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <header className="jumbotron">
      <div
        className="main-background"
        style={{ backgroundImage: `url(${Background})` }}
      ></div>
      <div className="landing-page-container">
        <div className="landing-page-title">
          <h1 className="text-light">
            Geothermal resources for energy transition
          </h1>
        </div>
        <div className="landing-page-caption text-light">
          <p>Direct uses and renewable base-load power around the globe.</p>
        </div>
      </div>
      {newsSet}
    </header>
  );
}

export default HomePage;
