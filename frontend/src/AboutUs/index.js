import React from 'react';
import './style.css'; 
import Footer from '../components/Footer';
import ContactSection from '../components/Contact';
import Navbar from '../components/Navbar';
import VisionMissionPartners from './Vision';
import Infrastructure from './Infrastructure';

const AboutSameto = () => {
  const imagePath = "./Team.jpg"; 

  return (
    <>
      <Navbar />

      <div className="container my-5">
        <h2 className="text-center">About Sameto</h2>
        <hr />

     
        <div className="mb-4">
          <p>
            <strong>Sameto</strong> is a specialized division under the legacy-rich umbrella of Chemiplant Engineering Company—India’s trusted name in Pharmaceutical & Chemical Process Equipment for over four decades. Founded with a singular mission to deliver next-generation pharma processing solutions, Sameto carries forward the Chemiplant tradition of innovation, engineering excellence, and customer-centricity.
          </p>
        </div>

       
        <div className="row align-items-start mb-4">
          <div className="col-md-8">
           
            <p className="mb-3">
              With a focus on the pharmaceutical sector, Sameto designs and manufactures high-precision, GMP-compliant process equipment that caters to the evolving needs of modern pharma companies—ensuring efficiency, sterility, and regulatory compliance at every stage of production.
            </p>
          
            <p className="fw-bold fs-5">
              Backed by a 50,000 sq. ft. state-of-the-art manufacturing facility in Ankleshwar, Gujarat, Sameto leverages cutting-edge technology, a skilled engineering team, and decades of domain knowledge to deliver customized, scalable, and export-quality pharma equipment trusted by clients across India and abroad.
            </p>
          </div>
          <div className="col-md-4 text-end">
            <img 
              src={imagePath} 
              alt="About Sameto" 
              className="img-fluid rounded-5 about-image"
            />
          </div>
        </div>

     
        <div>
          <p>
            Our team is equipped with deep expertise in managing end-to-end infrastructure—from site surveys, hardware procurement, and installation to content creation, network operation, and ongoing maintenance. We specialize in delivering high-visibility, high-ROI display solutions that are scalable and strategically placed to maximize brand exposure.
          </p>
        </div>
        <VisionMissionPartners/>
          <Infrastructure />


        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default AboutSameto;
