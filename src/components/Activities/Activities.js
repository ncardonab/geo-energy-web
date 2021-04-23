import React from "react";
import Header from "./Header/Header";
import PreviousEvents from "./PreviousEvents/PreviousEvents";
import UpcomingEvents from "./UpcomingEvents/UpcomingEvents";

function Activities() {
  return (
    <>
      <Header />
      <UpcomingEvents />
      <PreviousEvents />
    </>
  );
}

export default Activities;
