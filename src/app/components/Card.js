import React from 'react'

const Card = ({ image, title, subTitle }) => {
  return (
    <div
      className="th-bg-white"
      style={{ boxShadow: "0 20px 10px 0 rgba(0,0,0,.08)" }}
    >
      <div className="th-bg-grey">
        <img src={image} className="w-100" style={{ height: "auto" }} />
      </div>
      <div
        className="d-flex flex-column justify-content-center 
            align-items-center p-4 th-18"
      >
        <div className="fw-bold">{title}</div>
        <div className="text-secondary">{subTitle}</div>
      </div>
    </div>
  )
}

export default Card