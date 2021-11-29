import React, { useContext } from "react";
import "./UpcomingEvents.css";
import UpcomingEvent from "./UpcomingEvent";
import { eventsContext } from "../eventsContext";

function UpcomingEvents() {
  const events = useContext(eventsContext);
  const upcomingEvents = events.filter((event) => {
    const { year, month, day } = event.date;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    const currentDay = new Date().getDate();

    if (year > currentYear) {
      return true;
    } else if (year === currentYear) {
      if (month > currentMonth) {
        return true;
      } else if (month === currentMonth) {
        if (day >= currentDay) {
          return true;
        }
      }
    }
    return false;
  });

  return (
    <div className="UpcomingEvents">
      <div className="upcoming-events-header">
        <h1 className="upcoming-events-title">Upcoming Events...</h1>
      </div>
      <div className="upcoming-events-container">
        {upcomingEvents.map((event, index) => (
          <UpcomingEvent
            isFirst={index === 0 ? "first-one" : ""}
            isLast={index === upcomingEvents.length - 1 ? "last-one" : ""}
            info={event}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default UpcomingEvents;
