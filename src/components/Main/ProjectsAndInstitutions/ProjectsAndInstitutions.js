import React from "react";
import "./ProjectsAndInstitutions.css";
import { projectsAndInstitutionsInfo } from "./ProjectsAndInstitutionsInfo";
import Image from "../../Image/Image";

function ProjectsAndInstitutions() {
  const projects = projectsAndInstitutionsInfo.slice(0, 3);
  const institutions = projectsAndInstitutionsInfo.slice(3, 7);

  return (
    <div className="ProjectsAndInstitutions">
      <div className="pni-container">
        <h1 className="projects-title">
          Projects of the International Geoscience Programme
        </h1>
        <div className="projects-imgs">
          {projects.map((info, index) => {
            return <Image key={index} info={info}></Image>;
          })}
        </div>
        <h1 className="institutions-title">Leading Institutions</h1>
        <div className="institutions-imgs">
          {institutions.map((info, index) => {
            return <Image key={index} info={info}></Image>;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsAndInstitutions;
