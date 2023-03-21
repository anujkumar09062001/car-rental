import React from "react";
import BgCar from "../assets/img/car-bg-1.png";
import BookingContact from "./BookingContact";
import Welcome from "./Welcome";

const VehicleModels = () => {
  return (
    <div id="VehicleModels">
      <Welcome title="Vehicle Models" />
      <BookingContact />
    </div>
  );
};

export default VehicleModels;
