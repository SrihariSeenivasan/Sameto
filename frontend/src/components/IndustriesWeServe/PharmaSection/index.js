import React from "react";
import "./style.css";
import { FaArrowDown } from "react-icons/fa";

const PharmaSection = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center gap-4">
          <h2 className="section-title">
            High-Precision Pharma Processing Equipment, Engineered for Performance
          </h2>

          <div className="gradient-circle">
            <FaArrowDown size={24} color="#fff" />
          </div>

          <button className="enquire-button">Enquire Now</button>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-center text-md-end">
          <img
            src="./Team.jpg"
            alt="Pharma Equipment"
            className="img-fluid rounded-4 pharma-image"
          />
        </div>
      </div>
    </div>
  );
};

export default PharmaSection;
