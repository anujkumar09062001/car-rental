import React from "react";
import BookingContact from "./BookingContact";
import Welcome from "./Welcome";
import AboutCompany from "../components/AboutCompany";
import AboutCompanyPlan from "../components/AboutCompanyPlan";

const About = () => {
  return (
    <div id="About">
      <Welcome title="About" />
      <AboutCompany />
      <AboutCompanyPlan />
      <BookingContact />
    </div>
  );
};

export default About;
