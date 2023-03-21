import React from "react";;

const Welcome = ({ title }) => {
  return (
    <>
      <div className="welcome-bg">
      </div>
      <div
        className="d-flex flex-column justify-content-center px-4 position-absolute"
        style={{ top: "170px" }}
      >
        <div className="fw-bold th-40">{title}</div>
        <div className="fw-semibold th-20">Home / {title}</div>
      </div>
    </>
  );
};

export default Welcome;
