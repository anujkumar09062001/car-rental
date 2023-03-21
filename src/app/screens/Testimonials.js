import React from "react";
import BgCar from "../assets/img/car-bg-1.png";
import BookingContact from "./BookingContact";
import Welcome from "./Welcome";

const Testimonials = () => {
  return (
    <div id="Testimonials">
      <Welcome title="Testimonials" />

      <div className="container">
        <div className="row my-5">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 text-center p-lg-5 p-3 d-flex flex-column justify-content-center align-items-center">
            <div className="fw-semibold th-22">Reviewed by People</div>
            <div className="fw-bold th-34">Client's Testimonials</div>
            <div className="text-secondary mt-3 mx-lg-5">
              Discover the positive impact we've made on the our clients by
              reading through their testimonials. Our clients have experienced
              our service and results, and they're eager to share their positive
              experiences with you.
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>

      <BookingContact />
    </div>
  );
};

export default Testimonials;
