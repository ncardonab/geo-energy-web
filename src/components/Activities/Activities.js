import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import PreviousEvents from "./PreviousEvents/PreviousEvents";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";
import { eventsContext } from "./eventsContext";
import { getAsset } from "../../common/getAsset";

function Activities() {
  const [events, setEvents] = useState([]);

  const parse24HourTo12Hour = (ISOString) => {
    const index = ISOString.indexOf("T");
    const hour = +ISOString.slice(index + 1, index + 3);
    const minute = ISOString.slice(index + 3, index + 6);

    let AMPMFormat;
    let time;

    if (hour > 12) {
      AMPMFormat = hour - 12;
      time = AMPMFormat + minute + " PM";
    } else if (hour === 0) {
      AMPMFormat = 12;
      time = AMPMFormat + minute + " AM";
    } else {
      AMPMFormat = hour;
      time = AMPMFormat + minute + (hour === 12 ? " PM" : " AM");
    }

    return time;
  };

  useEffect(() => {
    let mounted = true;
    const fetchEvents = async () => {
      const fetchedEvents = await getAsset("events");

      if (mounted) {
        const events = [...fetchedEvents.data];

        events.map((event) => {
          const date = {
            year: +event.date.slice(0, 4),
            month: +event.date.slice(5, 7),
            day: +event.date.slice(8, 10),
            time: parse24HourTo12Hour(event.date),
          };
          event.date = date;
        });
        setEvents(events);
      }
    };
    fetchEvents();

    return () => (mounted = false);
  }, []);
  return (
    <>
      <eventsContext.Provider value={events}>
        <Header />
        <UpcomingEvents />
        <PreviousEvents />
      </eventsContext.Provider>
    </>
  );
}

export default Activities;
