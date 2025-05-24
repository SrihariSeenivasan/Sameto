import React from 'react';
import ContactSection from '../components/Contact';
import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
const brochures = [
  { title: 'Blender', pdf: '/Sameto_Catalogues/Blender.pdf', image: '/Sameto_Catalogues/BLENDER.png' },
  { title: 'Fluid Bed Dryer (FBD)', pdf: '/Sameto_Catalogues/FBD.pdf', image: '/Sameto_Catalogues/FBD.png' },
  { title: 'High Shear Mixing Granulator (RMG)', pdf: '/Sameto_Catalogues/RMG.pdf', image: '/Sameto_Catalogues/RMG.png' },
  { title: 'Powder Transfer System (PTS)', pdf: '/Sameto_Catalogues/PTS.pdf', image: '/Sameto_Catalogues/PTS.png' },
  { title: 'Ointment and Cream Plant', pdf: '/Sameto_Catalogues/OINTMENTandCREAM.pdf', image: '/Sameto_Catalogues/OACP.png' },
];

const BrochureSection = () => {
  return (
    
    <>
    <Navbar sticky="top" className="navbar navbar-expand-lg navbar-light bg-light"></Navbar>
    <div className="container py-5">
      <div className="text-center mb-5">
        <img
          src="/Sameto_Catalogues/RMG.png"
          alt="Common Brochure"
          className="img-fluid mb-3"
          style={{ maxHeight: '300px' }}
        />
        <h4>Download the Common Brochure</h4>
        <a
          href="/Sameto_Catalogues/RMG.pdf"
          className="btn btn-primary mt-2"
          download
        >
          Common Brochure
        </a>
      </div>

      <hr />

      <div className="row mt-4">
        {brochures.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4 text-center mb-4">
            <a href={item.pdf} download>
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid mb-2"
                style={{ height: '250px', objectFit: 'cover', cursor: 'pointer' }}
              />
            </a>
            <div>{item.title}</div>
          </div>
        ))}
      </div>
      <ContactSection />
      <Footer />
    </div>
    </>
  );
};

export default BrochureSection;
