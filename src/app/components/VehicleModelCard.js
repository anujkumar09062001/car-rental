import React from "react";

const VehicleModelCard = ({ image, car, price, type }) => {
  return (
    <div className="border">
      <div className="">
        <img src={image} alt="Audi A1" className="w-100" height="300px" />
      </div>
      <div className="p-4">
        <div className="d-flex justify-content-between">
          <div className="">
            <div className="fw-bold th-24">{car}</div>
            <div className="">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div className="">
            <div className="fw-bold th-24">{price}</div>
            <div className="">per day</div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3 fw-semibold text-secondary">
          <div className="">
            <span className="me-2">
              <i class="fas fa-car-side text-dark"></i>
            </span>
            {type}
          </div>
          <div className="">
            4/5{" "}
            <span className="ms-2">
              <i class="fas fa-car-side text-dark"></i>
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3 fw-semibold text-secondary">
          <div className="">
            <span className="me-2">
              <i class="fas fa-car-side text-dark"></i>
            </span>
            Manual
          </div>
          <div className="">
            Diesel{" "}
            <span className="ms-2">
              <i class="fas fa-car-side text-dark"></i>
            </span>
          </div>
        </div>
        <div className="my-2">
          <hr />
        </div>
        <button className="th-btn-primary w-100 fw-bold" type="button">
          Book Ride
        </button>
      </div>
    </div>
  );
};

export default VehicleModelCard;
