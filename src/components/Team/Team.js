import React from "react";
import InvolvedInstitutionsAroundTheWorld from "./InvolvedInstitutionsAroundTheWorld/InvolvedInstitutionsAroundTheWorld";
import ProjectLeaders from "./ProjectLeaders/ProjectLeaders";
import Secretary from "./Secretary/Secretary";

function Team() {
  return (
    <>
      <ProjectLeaders />
      <Secretary />
      <InvolvedInstitutionsAroundTheWorld />
    </>
  );
}

export default Team;
