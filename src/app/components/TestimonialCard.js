import React from "react";

const TestimonialCard = ({ header, image, title, subTitle }) => {
  return (
    <div className="th-bg-white p-lg-5 p-4" style={{ boxShadow: "0 20px 40px 0 rgba(0,0,0,.08)" }}>
      <div className="fw-semibold th-24">{header}</div>
      <div className="row mt-3">
        <div
          className="col-lg-5 col-8 d-flex justify-content-start 
              align-items-center"
        >
          <div className="">
            <img
              src={image}
              alt="Harry"
              width="80px"
              height="80px"
              className="th-br-40"
            />
          </div>
          <div className="ms-2">
            <div className="fw-bold">{title}</div>
            <div className="">{subTitle}</div>
          </div>
        </div>
        <div className="col-lg-7 col-4 d-flex align-items-center flex-row-reverse mt-2">
          <i className="fas fa-quote-right th-40 th-primary"></i>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
