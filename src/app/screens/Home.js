import React from "react";
import bgimage from "../assets/img/bg.png";
import carbgimage from "../assets/img/car-bg.png";
import AboutCompanyPlan from "../components/AboutCompanyPlan";
import BookingForm from "./BookingForm";

const Home = () => {
  return (
    <div className="py-5 th-bg-grey home" id="Home">
      <div className="px-4">
        <img src={bgimage} alt="BackgroundImage" className="bg-image" />
        <div className="row pt-5 mt-lg-0 mt-5 text-lg-start text-center">
          <div className="col-lg-5">
            <div className="fw-bold th-24">Plan your trip now</div>
            <div className="fw-bolder lh-1 th-60 mt-3">
              Save <span className="th-primary">big</span> with our car rental
            </div>
            <div className="th-16 text-secondary mt-4">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </div>
            <div className="row justify-content-lg-start justify-content-center mt-4">
              <div className="col-md-4 mt-3 pe-lg-0 pe-3">
                <button type="button" className="th-btn-primary w-100">
                  Book Ride
                </button>
              </div>
              <div className="col-md-4 mt-3">
                <button
                  type="button"
                  className="th-btn-primary th-bg-black w-100"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={carbgimage}
              alt="CarBackgroundImage"
              className="car-bg-image"
            />
          </div>
        </div>
      </div>

      <BookingForm />
      <div className="mt-5 pt-5">
        <AboutCompanyPlan />
      </div>
    </div>
  );
};

export default Home;
