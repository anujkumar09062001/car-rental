import React from "react";
import BgCar from "../assets/img/car-bg-1.png";
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
