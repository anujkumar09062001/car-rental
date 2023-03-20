import React from "react";
import bgimage from "../assets/img/bg.png";
import carbgimage from "../assets/img/car-bg.png";

const Home = () => {
  return (
    <div className="py-5 th-bg-grey home" id="home">
      <div className="px-4">
        <img src={bgimage} alt="Background Image" className="bg-image" />
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
              alt="Car Background Image"
              className="car-bg-image"
            />
          </div>
        </div>
      </div>

      {/* Car Booking */}
      <div className="px-4">
        <div className="container th-br-15 p-4 pb-5 th-bg-white booking-section position-relative">
          <div className="fw-bold th-30">Book a car</div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6 fw-bold th-18 my-2">
              <label>
                Select Your Car Type <b>*</b>
              </label>
              <select className="form-input w-100 mt-2 fw-semibold text-secondary">
                <option>Select your car type</option>
                <option>Toyota Innova</option>
                <option>Tata Safari</option>
                <option>Mahindra Xylo</option>
              </select>
            </div>
            <div className="col-lg-4 col-md-6 fw-bold th-18 my-2">
              <label>
                Pick-up <b>*</b>
              </label>
              <select className="form-input w-100 mt-2 fw-semibold text-secondary">
                <option>Select pick up location</option>
                <option>Dharamshala</option>
                <option>Shimla</option>
                <option>Chandigarh</option>
                <option>Amritsar</option>
              </select>
            </div>
            <div className="col-lg-4 col-md-6 fw-bold th-18 my-2">
              <label>
                Drop-of <b>*</b>
              </label>
              <select className="form-input w-100 mt-2 fw-semibold text-secondary">
                <option>Select drop off location</option>
                <option>Dharamshala</option>
                <option>Shimla</option>
                <option>Chandigarh</option>
                <option>Amritsar</option>
              </select>
            </div>
            <div className="col-lg-4 col-md-6 fw-bold th-18 my-2">
              <label>
                Pick-up <b>*</b>
              </label>
              <input
                type="date"
                className="form-input w-100 mt-2 fw-semibold text-secondary"
              />
            </div>
            <div className="col-lg-4 col-md-6 fw-bold th-18 my-2">
              <label>
                Drop-of <b>*</b>
              </label>
              <input
                type="date"
                className="form-input w-100 mt-2 fw-semibold text-secondary"
              />
            </div>
            <div className="col-lg-4 col-md-6 fw-bold th-18 my-2 align-self">
              <br />
              <button type="button" className="th-btn-primary w-100">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
