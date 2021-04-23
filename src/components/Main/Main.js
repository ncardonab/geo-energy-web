import React, { useState, useRef } from "react";
import HomePage from "./Home/HomePage";
import WhatIsGeothermalEnergy from "./WhatIsGeothermalEnergy/WhatIsGeothermalEnergy";
import Background from "./Background/Background";
import NewsSet from "./News/NewsSet";
import Aims from "./Aims/Aims";
import ProjectsAndInstitutions from "./ProjectsAndInstitutions/ProjectsAndInstitutions";

function Main() {
  const [newsSet, setNewsSet] = useState(
    window.innerWidth <= 1024 ? <NewsSet></NewsSet> : ""
  );

  const previousWidthRef = useRef(window.innerWidth);
  previousWidthRef.current = window.innerWidth;

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024 && previousWidthRef.current > 1024) {
        // If passes through a breakpoint from right to left will show the sm news
        setNewsSet(<NewsSet />);
      } else if (window.innerWidth > 1024 && previousWidthRef.current < 1024) {
        // If passes through a breakpoint from left to rigth will hide the sm news
        setNewsSet();
      }
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div>
      <HomePage />
      {newsSet}
      <WhatIsGeothermalEnergy />
      <Background />
      <Aims />
      <ProjectsAndInstitutions />
    </div>
  );
}

export default Main;
