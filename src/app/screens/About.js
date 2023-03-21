import React from "react";
import BookingContact from "./BookingContact";
import Welcome from "./Welcome";

const About = () => {
  return (
    <div id="About">
      <Welcome title="About" />
      <BookingContact />
    </div>
  );
};

export default About;
