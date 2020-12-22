import React from "react";
import "./Aims.css";
import Aim from "./Aim";
import { aimsInfo } from "./AimsInfo";

function Aims() {
  return (
    <div className="Aims">
      <div className="aims-container">
        <h1 className="aims-title">Aims</h1>
        <div className="aims-description">
          Sustainable development goal #7: ensure access to affordable,
          reliable, sustainable, and modern energy (United Nations, 2030
          Agenda).
        </div>
        <div className="aims-set">
          {aimsInfo.map((info, index) => {
            console.log(
              "🚀 ~ file: Aims.js ~ line 19 ~ AimsInfo.map ~ info",
              info
            );
            return <Aim key={index} info={info} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Aims;
