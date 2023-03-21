import React from "react";
import Car from "../assets/img/About/carPlan.png";
import Contact from "../assets/img/About/contact.png";
import Drive from "../assets/img/About/drive.png";

const AboutCompanyPlan = () => {
  return (
    <div className="container text-center mb-5 pb-5">
      <div className="d-block text-center">
        <div className="th-20 fw-semibold">Plan your trip now</div>
        <div className="mt-2 fw-bold th-34">Quick & easy car rental</div>
      </div>
      <div className="row mx-3 mt-5">
        <div className="col-lg-4 px-5 mt-4">
          <div className="">
            <img src={Car} alt="Car" />
          </div>
          <div className="fw-bold th-24">Select Car</div>
          <div className="text-secondary mt-2">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </div>
        </div>
        <div className="col-lg-4 px-5 mt-4">
          <div className="">
            <img src={Contact} alt="Contact" />
          </div>
          <div className="fw-bold th-24">Contact Operator</div>
          <div className="text-secondary mt-2">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </div>
        </div>
        <div className="col-lg-4 px-5 mt-4">
          <div className="">
            <img src={Drive} alt="Drive" />
          </div>
          <div className="fw-bold th-24 mt-4">Let's Drive</div>
          <div className="text-secondary mt-2">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyPlan;
