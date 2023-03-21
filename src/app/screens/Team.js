import React from "react";
import Team1 from "../assets/img/team-1.png";
import Team2 from "../assets/img/team-2.png";
import Team3 from "../assets/img/team-3.png";
import Team4 from "../assets/img/team-4.png";
import Team5 from "../assets/img/team-5.png";
import Team6 from "../assets/img/team-6.png";
import Card from "../components/Card";
import BookingContact from "./BookingContact";
import Welcome from "./Welcome";

const Team = () => {
  return (
    <div id="Team">
      <Welcome title="Our Team" />
      <div className="container my-4">
        <div className="row p-5">
          <div className="col-lg-4 p-5">
            <Card image={Team1} title="Sarvesh" subTitle="Teacher" />
          </div>
          <div className="col-lg-4 p-5">
            <Card
              image={Team2}
              title="Michael Diaz"
              subTitle="Business Owner"
            />
          </div>
          <div className="col-lg-4 p-5">
            <Card image={Team3} title="Briana Ross" subTitle="Photographer" />
          </div>
          <div className="col-lg-4 p-5">
            <Card
              image={Team4}
              title="Lauren Rivera"
              subTitle="Car Detailist"
            />
          </div>
          <div className="col-lg-4 p-5">
            <Card image={Team5} title="Martin Rizz" subTitle="Mechanic" />
          </div>
          <div className="col-lg-4 p-5">
            <Card image={Team6} title="Caitlyn Hunt" subTitle="Menager" />
          </div>
        </div>
      </div>
      <BookingContact />
    </div>
  );
};

export default Team;
