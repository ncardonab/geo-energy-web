import React from "react";
import { footerInfo } from "./FooterInfo";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div className="footer-follow-us">
          <p>Follow us: </p>
          {footerInfo.map((info, index) => {
            const { url, icon, alt } = info;
            return (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
              >
                <img src={icon} alt={alt}></img>
              </a>
            );
          })}
        </div>
        <div className="footer-caption-container">
          <div className="caption-title">Geothermal Energy</div>
          <div className="caption-text">
            Universidad de Medellín. <br />
            Medellín, Colombia.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
