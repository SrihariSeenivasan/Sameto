import React from 'react';
import './style.css';

const WhyChooseUs = () => {
  return (
    <div className="container my-5 text-center">
      <h2 className="mb-2">Why Choose Us</h2>
      <hr className="w-25 mx-auto mb-4" />
      <p className="mb-5">
        Discover the key reasons why clients trust us and choose our services over the competition.
      </p>

      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="custom-cards">
            <img src="/Icons/48.png" alt="Top Quality" className="card-image" />
            <h5 className="mt-3">Top Quality</h5>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="custom-cards">
            <img src="/Icons/support.png" alt="Secure & Trusted" className="card-image" />
            <h5 className="mt-3">Secure & Trusted</h5>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="custom-cards">
            <img src="/Icons/ISO.png" alt="Customer Satisfaction" className="card-image" />
            <h5 className="mt-3">Customer Satisfaction</h5>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="custom-cards">
            <img src="/Icons/inhouse.png" alt="Fast Delivery" className="card-image" />
            <h5 className="mt-3">Fast Delivery</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
