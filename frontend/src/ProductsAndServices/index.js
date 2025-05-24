import React from 'react';
import { Link } from 'react-router-dom'; 
import './style.css'; 
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import ContactSection from '../components/Contact';

const productData = [
  { id: 1, name: "Multi Mill", image: "./Product images/MULTIMILL.png" },
  { id: 2, name: "Bin Blender", image: "./Product images/BIN-BLENDER..png" },
  { id: 3, name: "Co Mill", image: "./Product images/COMILL.png" },
  { id: 4, name: "Coating Pan", image: "./Product images/Coating-Pan.png" },
  { id: 5, name: "Double Cone Blender", image: "./Product images/Double-Cone-Blender.png" },
  { id: 6, name: "Fluid Bed Dryer", image: "./Product images/Fluid Bed Dryer.png" },
  { id: 7, name: "Octagonal Blender", image: "./Product images/Octagonal Blender.png" },
  { id: 8, name: "Ribbon Blender", image: "./Product images/Ribbon-Blender.png" },
  { id: 9, name: "V-Blender", image: "./Product images/V-BLENDER.png" },
  { id: 10, name: "Vibro Sifter", image: "./Product images/VIBROSHIFTER.png" },
  { id: 11, name: "Drum Blender", image: "./Product images/DRUM-BLENDER.png" },
  { id: 12, name: "Air Tray Dryer", image: "./Product images/Air-Tray-Dryer.png" },
  { id: 13, name: "Ointment", image: "./Product images/OINTMENT-LIQUID-ORAL-PLANT.png" },
  { id: 14, name: "RMG", image: "./Asset/RMG1.png" },
  { id: 15, name: "Sameto Coater", image: "./Asset/SametoCoater.png" },
  { id: 16, name: "Powder Transfer System (PTS)", image: "/Asset/FBP1.png" },
  { id: 17, name: "Hydraulic Lifter", image: "/Asset/RMG1.png" },
  
  
  
  
];

const ProductsAndServices = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid py-5">
        <div className="text-center">
          <h2 className="fw-bold">Services And Products</h2>
          <p className="mx-auto w-75">
            Quality is never an accident; it is always the result of high
            intention, sincere effort, intelligent direction and skillful
            execution; it represents the wise choice of many alternatives.
          </p>
        </div>

        <div className="bg-danger text-white text-center py-4 my-4">
          <h4 className="text-white">We have almost 16+ Products</h4>
          <div className="row justify-content-center mt-4 gap-4">
            <div className="col-md-5 mb-3 d-flex justify-content-center">
              <div className="white-card gradient-border text-start">
                <ul className="mb-0 ps-3">
                  <li>RMG</li>
                  <li>PTS</li>
                  <li>Mill</li>
                  <li>Blender</li>
                </ul>
              </div>
            </div>
            <div className="col-md-1 d-none d-md-flex justify-content-center">
              <div className="vertical-line"></div>
            </div>
            <div className="col-md-5 mb-3 d-flex justify-content-center">
              <div className="white-card gradient-border text-start">
                <ul className="mb-0 ps-3">
                  <li>Shifter</li>
                  <li>Dyer</li>
                  <li>Coater</li>
                  <li>Manufacturing plant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-4">
          <h3 className="fw-bold">View Our Product’s</h3>
        </div>

        <div className="row g-4">
          {productData.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <div className="bg-primary text-white p-3 rounded text-center h-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid mb-3"
                  style={{ maxHeight: "100px" }}
                />
                <h5>{product.name}</h5>
                <Link to={`/products/${product.id}`} className="btn btn-danger mt-2">
                  Read more <span className="ms-1">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
         <div id="contact">
  <ContactSection />
</div>
        <Footer />

      </div>
    </>
  );
};

export default ProductsAndServices;
