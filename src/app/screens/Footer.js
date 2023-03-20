import React from "react";

const Footer = () => {
  return (
    <div className="mb-5 th-bg-white">
      <div className="pb-4 px-5 text-lg-start text-center">
        <div className="row">
          <div className="col-lg-3 mt-5">
            <div className="th-24 fw-bold">CAR Rental</div>
            <div className="text-secondary mt-3">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </div>
            <div className="fw-bold mt-3">
              <a href="mailto:carrental@gmail.com">carrental@gmail.com</a>
            </div>
            <div className="mt-1 th-14">
              <a href="https://master.dkjirujvhi1va.amplifyapp.com/">
                Created by Anuj.dev
              </a>
            </div>
          </div>
          <div className="col-lg-3 mt-5">
            <div className="th-24 fw-bold">COMPANY</div>
            <div className="my-2">
              <a href="#home">India</a>
            </div>
            <div className="my-2">
              <a href="#home">Carrers</a>
            </div>
            <div className="my-2">
              <a href="#home">Mobile</a>
            </div>
            <div className="my-2">
              <a href="#home">Blog</a>
            </div>
            <div className="my-2">
              <a href="#home">How we work</a>
            </div>
          </div>
          <div className="col-lg-3 mt-5">
            <div className="th-24 fw-bold">WORKING HOURS</div>
            <div className="mt-3">Mon - Fri: 9:00AM - 9:00PM</div>
            <div className="mt-2">Sat: 9:00AM - 7:00PM</div>
            <div className="mt-2">Sun: Closed</div>
          </div>
          <div className="col-lg-3 mt-5">
            <div className="th-24 fw-bold">SUBSCRIPTION</div>
            <div className="mt-1">
              Subscribe your Email address for latest news & updates.
            </div>
            <input
              className="form-input text-secondary w-100 mt-2"
              placeholder="Enter Email Address"
            />
            <button type="button" className="th-btn-primary w-100 mt-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
