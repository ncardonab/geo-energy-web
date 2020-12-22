import React from "react";
import NavBar from "./Navbar/Navbar";
import HomePage from "./Home/HomePage";
import WhatIsGeothermalEnergy from "./WhatIsGeothermalEnergy/WhatIsGeothermalEnergy";
import Background from "./Background/Background";
import NewsSet from "./News/NewsSet";
import Aims from "./Aims/Aims";

function Main() {
  const [newsSet, setNewsSet] = React.useState(
    window.innerWidth <= 540 ? <NewsSet></NewsSet> : ""
  );

  let previousWidth = window.innerWidth;

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 540 && previousWidth > 540) {
        // If passes through a breakpoint from right to left will show the sm news
        setNewsSet(<NewsSet />);
      } else if (window.innerWidth > 540 && previousWidth < 540) {
        // If passes through a breakpoint from right to left will hide the sm news
        setNewsSet();
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div>
      <NavBar />
      <HomePage />
      {newsSet}
      <WhatIsGeothermalEnergy />
      <Background />
      <Aims />
    </div>
  );
}

export default Main;
