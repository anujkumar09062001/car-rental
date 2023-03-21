import React from "react";
import BookingContact from "./BookingContact";
import Welcome from "./Welcome";
import AudiA1 from "../assets/img/VehicleModels/AudiA1.png";
import BMW from "../assets/img/VehicleModels/bmw.png";
import Golf from "../assets/img/VehicleModels/golf6.png";
import Mercedes from "../assets/img/VehicleModels/mercedes.png";
import Passat from "../assets/img/VehicleModels/passat.png";
import Toyota from "../assets/img/VehicleModels/toyota.png";
import VehicleModelCard from "../components/VehicleModelCard";

const VehicleModels = () => {
  return (
    <div id="VehicleModels">
      <Welcome title="Vehicle Models" />

      <div className="container">
        <div className="row p-lg-5 py-5 mx-lg-3 mx-1">
          <div className="col-lg-4 px-3 mt-4">
            <VehicleModelCard
              image={AudiA1}
              car="Audi A1"
              price="$45"
              type="Audi"
            />
          </div>
          <div className="col-lg-4 px-3 mt-4">
            <VehicleModelCard image={Golf} car="Golf 6" price="$37" type="VW" />
          </div>
          <div className="col-lg-4 px-3 mt-4">
            <VehicleModelCard
              image={Toyota}
              car="Toyota"
              price="$30"
              type="Camry"
            />
          </div>
          <div className="col-lg-4 px-3 mt-4">
            <VehicleModelCard
              image={BMW}
              car="BMW 320"
              price="$35"
              type="ModernLine"
            />
          </div>
          <div className="col-lg-4 px-3 mt-4">
            <VehicleModelCard
              image={Mercedes}
              car="Mercedes"
              price="$50"
              type="Benz GLK"
            />
          </div>
          <div className="col-lg-4 px-3 mt-4">
            <VehicleModelCard
              image={Passat}
              car="VW Passat"
              price="$25"
              type="CC"
            />
          </div>
        </div>
      </div>

      <BookingContact />
    </div>
  );
};

export default VehicleModels;
