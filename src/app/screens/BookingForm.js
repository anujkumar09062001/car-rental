import React from 'react'

const BookingForm = () => {
  return (
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
  )
}

export default BookingForm