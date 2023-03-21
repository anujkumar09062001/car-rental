import React from "react";
import BookingContact from "./BookingContact";
import Welcome from "./Welcome";

const Contact = () => {
  return (
    <>
      <Welcome title="Contact" />
      <div className="contact container">
        <div className="row p-5 my-5">
          <div className="col-lg-5 pe-5 mt-3">
            <div className="fw-bold">
              <div className="th-40">Need additional information?</div>
            </div>
            <div className="text-secondary mt-4">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </div>
            <div className="fw-bold mt-4">
              <a href="mailto:carrental@gmail.com">carrental@gmail.com</a>
            </div>
            <div className="mt-1 th-14">
              <a href="https://master.dkjirujvhi1va.amplifyapp.com/">
                Created by Anuj.dev
              </a>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div className="">
              <label className="fw-bold">
                Full Name <b>*</b>
              </label>
              <input
                type="text"
                className="form-input w-100 mt-2"
                placeholder="E.g: 'Anuj Kumar'"
              />
            </div>
            <div className="mt-4">
              <label className="fw-bold">
                Email <b>*</b>
              </label>
              <input
                type="text"
                className="form-input w-100 mt-2"
                placeholder="youremail@example.com"
              />
            </div>
            <div className="mt-4">
              <label className="fw-bold">
                Tell us about it <b>*</b>
              </label>
              <textarea
                type="text"
                className="form-input w-100 mt-2"
                placeholder="Write here.."
              />
            </div>
            <div className="mt-4">
              <button type="button" className="th-btn-primary w-100 fw-bold">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookingContact />
    </>
  );
};

export default Contact;
