import React from 'react'
import AboutImg from "../assets/img/About/about.jpg";
import CarImg from "../assets/img/About/car.png";
import RentalImg from "../assets/img/About/rental.png";
import RepairImg from "../assets/img/About/repair.png";

const AboutCompany = () => {
  return (
    <div className="container">
      <div className="m-lg-5 mb-5 row p-lg-5 p-3">
        <div className="col-lg-6 px-lg-5 my-5">
          <img src={AboutImg} alt="About" className="w-100" />
        </div>
        <div className="col-lg-6 mt-lg-5 mt-2">
          <div className="fw-semibold th-26">About Company</div>
          <div className="th-34 fw-bold mt-2">
            You start the engine and your adventure begins
          </div>
          <div className="mt-4 text-secondary th-20">
            Certain but she but shyness why cottage. Guy the put instrument
            sir entreaties affronting. Pretended exquisite see cordially the
            you. Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly
            attended.
          </div>
          <div className="mt-3 row text-lg-start text-center">
            <div className="col-lg-4 mt-5">
              <div className="">
                <img src={CarImg} alt="CarImage" />
              </div>
              <div className="mt-3">
                <span className="fw-bold th-26 me-2">20</span>
                <span className="text-secondary th-18">Car Types</span>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="">
                <img src={RentalImg} alt="RentalCarImage" />
              </div>
              <div className="mt-3">
                <span className="fw-bold th-26 me-2">85</span>
                <span className="text-secondary th-18">Rental Outlets</span>
              </div>
            </div>
            <div className="col-lg-4 mt-5">
              <div className="">
                <img src={RepairImg} alt="CarRepairImage" />
              </div>
              <div className="mt-3">
                <span className="fw-bold th-26 me-2">75</span>
                <span className="text-secondary th-18">Repair Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCompany