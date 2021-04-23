import React from "react";
import { events } from "./PreviousEventsInfo";
import "./PreviousEvents.css";

function ImageCard({ event }) {
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

  const { name, description, background, url, date } = event;

  const day = date.getDate();
  const month = months[date.getMonth()].substring(0, 3);

  const bgImg = `url("${background}")`;

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
          <a
            className="image-card-text"
            href={url ? url : "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
        </div>
      </div>
    </div>
  );
}

function EventsGroupedByYear({ events, year }) {
  const eventsSortedByDate = events.sort(
    (firstEvent, secondEvent) =>
      secondEvent.date.getDate() - firstEvent.date.getDate()
  );
  const eventsSortedByMonth = eventsSortedByDate.sort(
    (firstEvent, secondEvent) =>
      secondEvent.date.getMonth() - firstEvent.date.getMonth()
  );
  return (
    <div className="EventsGroupedByYear">
      <div className="egby-year">{year}</div>
      <div className="egby-container">
        {eventsSortedByMonth.map((event, index) => (
          <ImageCard event={event} key={index} />
        ))}
      </div>
    </div>
  );
}

function PreviousEvents() {
  const eventsGroupedByYearMap = new Map();

  // Creating a Set of years that are in the events array
  const years = new Set(events.map((event) => event.date.getFullYear()));

  // Filtering the events by the years and adding it to the map
  years.forEach((year) => {
    eventsGroupedByYearMap.set(
      year,
      events.filter((event) => event.date.getFullYear() === year)
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
