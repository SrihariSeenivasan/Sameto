import React from 'react';
import { FaEye, FaBullseye, FaHandshake } from 'react-icons/fa';

const VisionMissionPartners = () => {
  return (
    <section className="py-5 bg-light text-center">
      
      <div className="container mb-4">
        <div className="d-flex flex-column align-items-center">
          
          <h2 className="mb-2">Vision, Mission & Partners</h2>
          {/* <p className="text-muted w-75 mx-auto">
            Empowering communities through our vision, mission, and valuable partnerships.
          </p> */}
        </div>
        <hr className="my-4" />
      </div>

     
      <div className="container">
        <div className="row g-4">
          
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-4">
              <div className="text-center mb-3">
                <FaEye size={30} className="text-success" />
              </div>
              
              <h5 className="text-center">Our Vision</h5>
               <hr className="my-1" />
              <p className="text-muted mt-3">
                To be a global leader in innovative solutions that improve the quality of life and inspire progress.
              </p>
            </div>
          </div>

        
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-4">
              <div className="text-center mb-3">
                <FaBullseye size={30} className="text-danger" />
              </div>
              <h5 className="text-center">Our Mission</h5>
               <hr className="my-1" />
              <p className="text-muted mt-3">
                Deliver excellence through sustainable practices, collaborative innovation, and unwavering commitment to customers.
              </p>
            </div>
          </div>

         
          <div className="col-md-4">
            <div className="card h-100 shadow-sm p-4">
              <div className="text-center mb-3">
                <FaHandshake size={30} className="text-info" />
              </div>
              <h5 className="text-center">Our Partners</h5>
               <hr className="my-1" />
              <p className="text-muted mt-3">
                We collaborate with industry leaders and strategic allies to expand our reach and amplify our impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionPartners;
