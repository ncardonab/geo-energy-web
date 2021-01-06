import React, { useEffect, useState } from "react";
import Button from "../../ButtonComponent/Button";
import "./InvolvedInstitutionsAroundTheWorld.css";
import { continents } from "./ContinentsInfo";
import { institutions } from "./InstitutionsInfo";

function Card({ institution }) {
  const { logo, website, name, background } = institution;

  const bgImg = `url("${background}")`;

  const backgroundImgStyle = {
    backgroundImage: bgImg,
    height: "140px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "8px 8px 0px 0px",
  };

  return (
    <div className="card">
      <div
        className="background-img-container"
        style={backgroundImgStyle}
      ></div>
      <div className="logo-container">
        <div className="notch"></div>
        <img src={logo} alt="logo" className="card-logo" />
        <a
          className="card-text"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
      </div>
    </div>
  );
}

function InvolvedInstitutionsAroundTheWorld() {
  const [continent, setContinent] = useState("");
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [institutionsByCountry, setInstitutionsByCountry] = useState([]);

  // Every time the user clicks in a continent, the continent variable changes, this leads to change the countries array by the continent's countries
  useEffect(() => {
    if (continent !== undefined && continent !== "") {
      setCountries(
        Array.from(continents).filter(
          (object) => Object.getOwnPropertyNames(object)[0] === continent
        )[0][continent]
      );
    }
  }, [continent]);

  // When the component mounts ( [], empty array ) chooses a continent randomly
  useEffect(() => {
    const continentsNames = ["America", "Europe", "Asia", "Oceania", "Africa"];
    const randomIndex = Math.floor(Math.random() * continentsNames.length);
    setContinent(continentsNames[randomIndex]);
  }, []);

  // Whenever a country is selected, this side effect will retrieve the institutions that belongs to that country
  useEffect(() => {
    setInstitutionsByCountry(
      institutions.filter((institution) => {
        return institution.countryName === country;
      })
    );
  }, [country]);

  // Whenever a continent is selected changes the countries variable by the countries that belongs to the selected one continent and this effect chooses a random country from the countries array
  useEffect(() => {
    if (countries.length !== 0) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      setCountry(countries[randomIndex].name);
    }
  }, [countries]);

  return (
    <div className="IIAW">
      <div className="iiaw-container">
        <h1 className="iiaw-title">
          Involved institutions from around the world
        </h1>
        <div className="iiaw-btns-container">
          <div className="iiaw-continents-btns-container">
            {continents.map((continent, index) => (
              <Button
                text={Object.getOwnPropertyNames(continent)[0]}
                setState={setContinent}
                key={index}
              />
            ))}
          </div>
          <div className="iiaw-countries-btns-container">
            {countries.map((country, index) => {
              return (
                <Button
                  img={country.flag}
                  text={country.name}
                  setState={setCountry}
                  key={index}
                />
              );
            })}
          </div>
          <div className="iiaw-breadcrumb">
            {continent} / {country}
          </div>
          <div className="iiaw-institutions-cards-container">
            {institutionsByCountry.map((institution, index) => (
              <Card institution={institution} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvolvedInstitutionsAroundTheWorld;
