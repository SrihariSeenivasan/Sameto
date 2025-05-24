import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ProductCard from '../../ProductCards';
import { useNavigate } from 'react-router-dom';

const CardPage = () => {
   const navigate = useNavigate();
  const cardData = [
    {
      id: 1,
      image: './Product images/MULTIMILL.png',
      title: ' Multi Mill',
      content: 'High-speed, multi-functional machine used for wet/dry granulation, pulverization, and size reduction. Suitable for various pharmaceutical applications.',
    },
    {
      id: 2,
      image: './Product images/BIN-BLENDER..png',
      title: 'Bin Blender',
      content: 'GMP-compliant bin-based blender used for uniform dry mixing with minimal cross-contamination. Suitable for batch handling.',
    },
    {
      id: 3,
      image: './Product images/COMILL.png',
      title: 'Co Mill',
      content: 'Conical mill for low-shear, uniform particle size reduction. Ideal for both wet and dry granules, ensuring minimal heat generation.',
    },
    {
      id: 4,
      image: './Product images/Coating-Pan.png',
      title: 'Coating Pan',
      content: 'Used for uniform sugar or film coating of tablets and granules. Includes air drying system and spray system options.',
    },
    {
      id: 5,
      image: './Product images/Double-Cone-Blender.png',
      title: 'Double Cone Blender',
      content: 'Gentle and effective for mixing free-flowing powders and granules, maintaining uniformity without degradation.',
    },
    {
      id: 6,
      image: './Product images/Fluid Bed Dryer.png',
      title: 'Fluid Bed Dryer',
      content: 'Used for uniform drying of powders and granules using fluidization. Ensures quick, gentle, and uniform drying of heat-sensitive materials.',
    },
    {
      id: 7,
      image: './Product images/Octagonal Blender.png',
      title: 'Octagonal Blender',
      content: 'Blends dry powders and granules gently with low shear. Ideal for fragile materials, with minimal product loss and easy cleaning.',
    },
    {
      id: 8,
      image: './Product images/Ribbon-Blender.png',
      title: 'Ribbon Blender',
      content: 'Horizontal mixer with twin helical ribbons providing efficient, high-volume powder blending for food, pharma, and chemicals.',
    },
    {
      id: 9,
      image: './Product images/V-BLENDER.png',
      title: 'V-Blender',
      content: 'V-shaped blender for efficient and uniform mixing of dry powders without shear, ideal for fragile or abrasive materials.',
    },
    {
      id: 10,
      image: './Product images/VIBROSHIFTER.png',
      title: 'Vibro Sifter',
      content: 'Ensures precision sieving and grading of powders and granules using vibration and multi-mesh screens. Ideal for contamination-free screening.',
    },
    {
      id: 11,
      image: './Product images/DRUM-BLENDER.png',
      title: 'Drum Blender',
      content: 'Cost-effective blending system allowing mixing inside sealed drums, reducing product handling and contamination risks.',
    },
    {
      id: 12,
      image: './Product images/Air-Tray-Dryer.png',
      title: 'Air Tray Dryer',
      content: 'Static drying system using heated air circulation for uniform drying of granules, herbs, or powders in trays.',
    },
    {
      id: 13,
      image: './Product images/OINTMENT-LIQUID-ORAL-PLANT.png',
      title: 'Ointment',
      content: 'A fully integrated, GMP-compliant system for producing creams, ointments, and gels. ',
    },
    {
      id: 14,
      image: '/Asset/RMG1.png',
      title: 'Rapid Mixer Granulator (RMG)',
      content: 'High-Speed Wet Granulation for Efficient Mixing & Consistent Granule Formation. ',
    },
    {
      id: 15,
      image: '/Asset/SametoCoater.png',
      title: 'Sameto Coater',
      content: 'Closed Containment Solution for Safe & Efficient Powder Handling. ',
    },
    {
      id: 16,
      image: '/Asset/fbd.png',
      title: 'Ointment',
      content: 'A fully integrated, GMP-compliant system for producing creams, ointments, and gels. ',
    },
    {
      id: 17,
      image: '/Product images/OINTMENT-LIQUID-ORAL-PLANT.png',
      title: 'Hydraulic Lifter',
      content: 'Ergonomic Material Handling for GMP Environments. ',
    },
  ];

  
  
  return (
    <div className="container mt-5">
      <h1 className="text-center">Our Products</h1>
      <hr />

      <div className="row">
        {cardData.map((card) => (
          <div className="col-md-4 mb-4" key={card.id}>
            <ProductCard
              image={card.image}
              title={card.title}
              content={card.content}
              onClick={() => navigate(`/products/${card.id}`)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPage;