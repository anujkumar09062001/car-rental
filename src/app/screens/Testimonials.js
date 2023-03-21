import React from "react";
import Harry from "../assets/img/harry.jpg";
import Ron from "../assets/img/ron.jpg";
import TestimonialCard from "../components/TestimonialCard";
import BookingContact from "./BookingContact";
import Welcome from "./Welcome";

const Testimonials = () => {
  return (
    <div id="Testimonials" className="th-bg-grey">
      <Welcome title="Testimonials" />

      <div className="container">
        <div className="row my-5">
          <div className="col-lg-2"></div>
          <div className="col-lg-8 mt-lg-0 mt-5 text-center p-lg-5 py-4 px-3 d-flex flex-column justify-content-center align-items-center">
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

        <div className="row my-5 mx-lg-5 mx-2">
          <div className="col-lg-6">
            <TestimonialCard
              header='"We rented a car from this website and had an amazing
                experience! The booking was easy and the rental rates were very
                affordable. "'
              image={Harry}
              title="Parry Hotter"
              subTitle="Belgrade"
            />
          </div>

          <div className="col-lg-6 mt-lg-0 mt-5">
            <TestimonialCard
              header='"The car was in great condition and made our trip even better
              and successfull. Highly recommend to rent any car from this car
              rental website!"'
              image={Ron}
              title="Ron Rizzly"
              subTitle="Novi Sad"
            />
          </div>
        </div>
      </div>

      <BookingContact />
    </div>
  );
};

export default Testimonials;
