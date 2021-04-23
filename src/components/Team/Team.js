import React from "react";
import InvolvedInstitutionsAroundTheWorld from "./InvolvedInstitutionsAroundTheWorld/InvolvedInstitutionsAroundTheWorld";
import ProjectLeaders from "./ProjectLeaders/ProjectLeaders";
import Researchers from "./Researchers/Researchers";
import Secretary from "./Secretary/Secretary";

function Team() {
  return (
    <>
      <ProjectLeaders />
      <Secretary />
      <InvolvedInstitutionsAroundTheWorld />
      <Researchers />
    </>
  );
}

export default Team;
