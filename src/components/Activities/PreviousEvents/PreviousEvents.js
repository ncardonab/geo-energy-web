import React, { useContext } from "react";
import "./PreviousEvents.css";
import "../../../common/ImageCard.css";
import { eventsContext } from "../eventsContext";

function ImageCard({ event }, hasDate) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // console.table(event);
  const { description, backgroundImage, url, date } = event;

  let { day, month } = date;
  month = months[+month - 1].substring(0, 3);

  const bgImg = `url("${backgroundImage}")`;

  const backgroundImgStyle = {
    backgroundImage: bgImg,
    height: "213px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "8px 8px 0px 0px",
  };

  return (
    <div className={`image-card`}>
      <div
        className="image-card-background-img"
        style={backgroundImgStyle}
      ></div>
      <div className="image-card-info-container">
        <div className="image-card-notch"></div>
        <div className="image-card-text-container">
          <div className="image-card-text-date-container">
            <div className="image-card-text-day">{day}</div>
            <div className="image-card-text-month">{month}</div>
          </div>
          <div className="image-card-description">
            <a href={`${url}`} target="_blank">
              {description}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventsGroupedByYear({ events, year }) {
  const eventsSortedByDate = events.sort(
    (firstEvent, secondEvent) => secondEvent.date.day - firstEvent.date.day
  );
  const eventsSortedByMonth = eventsSortedByDate.sort(
    (firstEvent, secondEvent) => secondEvent.date.month - firstEvent.date.month
  );

  const eventsFilteredByDate = eventsSortedByMonth.filter((event) => {
    const { year, month, day } = event.date;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    if (year > currentYear) {
      return false;
    } else if (year === currentYear) {
      if (month > currentMonth) {
        return false;
      } else if (month === currentMonth) {
        if (day >= currentDay) {
          return false;
        }
      }
    }
    return true;
  });

  return (
    <div className="EventsGroupedByYear">
      <div className="egby-year">{year}</div>
      <div className="egby-container">
        {eventsFilteredByDate.map((event, index) => (
          <ImageCard event={event} hasDate={true} key={index} />
        ))}
      </div>
    </div>
  );
}

function PreviousEvents() {
  const events = useContext(eventsContext);

  const eventsGroupedByYearMap = new Map();

  // Creating a Set of years that are in the events array
  const years = new Set(events.map((event) => event.date.year));

  // Filtering the events by the years and adding it to the map
  years.forEach((year) => {
    eventsGroupedByYearMap.set(
      year,
      events.filter((event) => event.date.year === year)
    );
  });

  // Parsing the map to an array to being able of map through the array and render the content and sorting it by year from highest to lowest
  const eventsGroupedByYearArray = [...eventsGroupedByYearMap]
    .map(([year, events]) => ({
      year,
      events,
    }))
    .sort((firstEvent, secondEvent) => secondEvent.year - firstEvent.year);

  return (
    <div className="PreviousEvents">
      <div className="previous-events-header">
        <h1 className="previous-events-title">Previous Events...</h1>
      </div>
      <div className="previous-events-container">
        {eventsGroupedByYearArray.map(({ year, events }, index) => (
          <EventsGroupedByYear events={events} year={year} key={index} />
        ))}
      </div>
    </div>
  );
}

export default PreviousEvents;
