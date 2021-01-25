import React from "react";
import "./UpcomingEvents.css";
import UpcomingEvent from "./UpcomingEvent";
import { upcomingEvents } from "./UpcomingEventsInfo";

function UpcomingEvents() {
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
