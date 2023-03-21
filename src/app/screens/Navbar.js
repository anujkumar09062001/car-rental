import React, { useState } from "react";
import logo from "../assets/img/car-logo.png";
import MyDesktop from "../components/MyDesktop";
import MyMobile from "../components/MyMobile";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const closeButton = () => {
    setVisible(!visible);
  };

  return (
    <>
      <MyDesktop>
        <div className="d-flex justify-content-between align-items-center 
        px-4 py-4 fw-bold position-absolute w-100 th-18" style={{ zIndex: 1 }}>
          <div className="pointer">
            <img src={logo} alt="logo" width="150" height="50" />
          </div>
          <div className="d-flex">
            <div className="px-3">
              <a href="/">Home</a>
            </div>
            <div className="px-3">
              <a href="/about">About</a>
            </div>
            <div className="px-3">
              <a href="/models">Vehicle Models</a>
            </div>
            <div className="px-3">
              <a href="/testimonials">Testimonials</a>
            </div>
            <div className="px-3">
              <a href="/team">Our Team</a>
            </div>
            <div className="px-3">
              <a href="/contact">Contact</a>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className="px-3 pointer">
              <a href="#">Sign In</a>
            </div>
            <div className="px-3">
              <button
                type="button"
                className="py-2 px-3 th-br-10 th-bg-primary th-white fw-semibold"
                style={{ border: "0" }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </MyDesktop>

      <MyMobile>
        <div className="py-3 px-lg-5 px-3 d-flex justify-content-between position-absolute w-100"
          style={{ zIndex: 1 }}>
          <div className="">
            <img src={logo} alt="logo" width="150" height="50" />
          </div>
          <div className="fs-1">
            <i className="fas fa-bars pointer" onClick={closeButton}></i>
          </div>
        </div>
        <div
          className={
            visible
              ? "mobile-drawer open d-flex flex-column justify-content-center align-items-center fw-semibold"
              : "mobile-drawer d-flex flex-column justify-content-center align-items-center fw-semibold"
          }
        >
          <div className="close-btn fs-1">
            <i className="fas fa-times pointer" onClick={closeButton}></i>
          </div>
          <div className="text-center">
            <div className="my-3 th-20">
              <a href="/" onClick={closeButton}>Home</a>
            </div>
            <div className="my-3 th-20">
              <a href="/about" onClick={closeButton}>About</a>
            </div>
            <div className="my-3 th-20">
              <a href="/models" onClick={closeButton}>Vehicle Models</a>
            </div>
            <div className="my-3 th-20">
              <a href="/testimonials" onClick={closeButton}>Testimonials</a>
            </div>
            <div className="my-3 th-20">
              <a href="/team" onClick={closeButton}>Our Team</a>
            </div>
            <div className="my-3 th-20">
              <a href="/contact" onClick={closeButton}>Contact</a>
            </div>
          </div>
        </div>
      </MyMobile>
    </>
  );
};

export default Navbar;
