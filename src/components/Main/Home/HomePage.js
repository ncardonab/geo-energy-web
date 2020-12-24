import React from "react";
import "./HomePage.css";
import Background from "../../../assets/Cascada.png";
import NewsSet from "../News/NewsSet";

function HomePage() {
  const [newsSet, setNewsSet] = React.useState(
    window.innerWidth > 540 ? <NewsSet></NewsSet> : ""
  );

  // Basically the previousWidth is the previous window's inner width
  let previousWidth = window.innerWidth;

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 540 && previousWidth > 540) {
        // If passes through a breakpoint from right to left hides the news
        setNewsSet();
      } else if (window.innerWidth > 540 && previousWidth <= 540) {
        // If passes through a breakpoint from left to right shows the news
        setNewsSet(<NewsSet />);
      }
      previousWidth = window.innerWidth;
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
