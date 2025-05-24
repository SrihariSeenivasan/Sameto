import React from 'react';
import { useParams } from 'react-router-dom';
import ContactSection from '../../Contact';
import Footer from '../../Footer';
import Navbar from '../../Navbar';

const products = {
    1: {
    title: 'Multi Mill',
    subtitle: 'Versatile Milling for Wet & Dry Granulation',
    description: `The Sameto Multi Mill is a high-speed, multi-purpose milling machine used for a wide range of applications including wet and dry granulation, pulverization, and mixing. Designed to deliver consistent particle size reduction, it is widely used in pharmaceutical, chemical, cosmetic, food, and nutraceutical industries.`,
    image: '/Product images/MULTIMILL.png',
    features: [
      'Stainless steel (SS 316/304) GMP construction',
      'Interchangeable screen options for variable output size',
      'High-speed rotor with beaters for uniform granulation',
      'Multi-directional castor wheels for easy mobility',
      'Noiseless and vibration-free operation',
      'Safety interlock for operator protection',
      'Output capacity: 50 to 200 kg/hr (depending on product & screen)',
    ],
    applications: [
      'Wet granulation before drying',
      'Dry granule sizing after drying',
      'Pulverization of herbs, chemicals, and pharmaceutical ingredients',
      'Homogenization of materials before tablet compression or capsule filling',
    ],
    footerNote:
      'With tool-free dismantling and easy cleaning, the Sameto Multi Mill offers flexibility, hygiene, and speed—making it an ideal machine for high-throughput operations and quick changeovers.',
  },
  2: {
    title: 'Bin Blender',
    subtitle: 'Efficient and Contamination-Free Powder Blending',
    description: `The Sameto Bin Blender is a high-capacity blending solution designed for homogeneous mixing of dry powders and granules in the pharmaceutical, food, and chemical industries. Its interchangeable bin system allows for dust-free transfer, blending, and storage—making it ideal for batch processing and scale-up production.`,
    image: '/Product images/BIN-BLENDER..png',
    features: [
      'GMP-compliant stainless steel (SS 316/304) construction',
      'Detachable bins (containers/IBCs) for flexible batch handling',
      'Tilt-and-rotate design for thorough and uniform mixing',
      'Programmable logic control (PLC) with touch panel operation (optional)',
      'Safety features including interlock systems and emergency stops)',
      'Easy to clean with minimal dead zones and smooth finishes',
      'Available capacities: 25L to 1000L and above',
    ],
    applications: [
      'Final blending of granules before compression',
      'Homogenizing multiple powder ingredients',
      'Ideal for batch-wise production with minimal cross-contamination',
      'Suitable for high-potency or allergenic materials',
    ],
    footerNote:
      'Designed for efficiency, hygiene, and scalability, the Sameto Bin Blender provides uniform mixing with minimal material handling, enabling faster production cycles and improved product consistency.',
  },
  3: {
    title: 'Co Mill (Conical Mill)',
    subtitle: 'Gentle Size Reduction with Uniform Granule Output',
    description: `The Sameto Co Mill is a high-performance conical milling machine designed for gentle and controlled size reduction of dry and wet materials. It offers uniform particle sizing with minimal heat generation, making it ideal for pharmaceutical, chemical, food, and cosmetic industries.`,
    image: '/Product images/COMILL.png',
    features: [
      'GMP-compliant SS 316/304 construction',
      'Conical screen and impeller design for controlled, low-shear milling',
      'Interchangeable screens for flexible particle size output',
      'Dust-free operation with a sealed, hygienic design',
      'Low noise and minimal heat generation—perfect for sensitive materials',
      'Mobility with locking castors and ergonomic working height',
      'Capacity: 50 to 300 kg/hr (depending on product & screen)',
    ],
    applications: [
      'Sizing of granules after drying',
      'De-lumping of agglomerates',
      'Pre-processing before tablet or capsule production',
      'Blending of dry powders',
      'Wet granule sizing before drying',
    ],
    footerNote:
      'The Sameto Co Mill ensures consistent output, easy cleaning, and low maintenance, making it an essential solution for achieving process efficiency and product uniformity.',
  },
  4: {
    title: 'Coating Pan',
    subtitle: 'Reliable Film & Sugar-Coating Solution for Tablets and Granules',
    description: `The Sameto Coating Pan is a durable and efficient system designed for coating tablets, granules, and pellets with sugar, film, or enteric layers. Designed to meet GMP standards, it offers uniform coating with smooth finishes, making it a trusted choice for pharmaceutical, nutraceutical, and confectionery industries.`,
    image: '/Product images/Coating-Pan.png',
    features: [
      'Stainless steel SS 316/304 pan with mirror finish interior',
      'Pan tilt and speed control for optimal coating angles and flow',
      'Hot air blower system with inlet and outlet ducts for efficient drying',
      'Spray system (optional) for uniform film coating',
      'Control panel for temperature, blower, and pan rotation settings',
      'Mounting structure with vibration-free operation',
      'Pan capacities: 12", 18", 24", 30", 36", 42", 48", 60" and custom sizes',
    ],
    applications: [
      'Film coating and sugar coating of tablets',
      'Enteric coating of pharmaceutical granules',
      'Polishing of herbal and nutraceutical tablets',
      'Confectionery product coating (e.g., candies, gums)',
    ],
    footerNote:
      'The Sameto Coating Pan ensures efficient mixing, coating uniformity, and controlled drying, making it an essential machine for quality-driven tablet manufacturing lines.',
  },
  5: {
    title: 'Double Cone Blender',
    subtitle: 'Efficient and Uniform Blending for Free-Flowing Materials',
    description: `The Sameto Double Cone Blender is a versatile and gentle blending machine ideal for homogeneous mixing of dry powders and granules. Its symmetrical double-cone design ensures uniform tumbling, resulting in consistent blending without localized over-mixing—making it ideal for pharmaceutical, chemical, food, and cosmetic industries.`,
    image: '/Product images/Double-Cone-Blender.png',
    features: [
      'GMP-compliant SS 316/304 construction',
      'Double-cone geometry for gentle yet effective mixing',
      'Slow-speed tumbling to preserve particle integrity',
      'Manhole with gasket for easy cleaning and inspection',
      'Dust-free discharge valve (butterfly or slide gate)',
      'Available with vacuum loading and bin charging options',
      'Capacity range: 25L to 1500L+',
    ],
    applications: [
      'Blending of free-flowing powders and granules',
      'Pre-tableting or capsule filling blending',
      'Uniform mixing of multiple ingredients',
      'Ideal for fragile, abrasive, or heat-sensitive materials',
    ],
    footerNote:
      'The Sameto Double Cone Blender offers a cost-effective solution for smooth, uniform, and contamination-free blending, backed by a proven design trusted across industries.',
  },
  6: {
    title: 'Fluid Bed Dryer (FBD)',
    subtitle: 'Efficient Drying Solution for Heat-Sensitive Materials',
    description: `Our Fluid Bed Dryer is a precision-engineered drying system designed for uniform drying of powders, granules, and crystalline materials in the pharmaceutical, chemical, food, and allied industries. It operates on the principle of fluidization, ensuring quick, gentle, and uniform drying without degradation of the product.`,
    image: '/Product images/Fluid Bed Dryer.png',
    features: [
      'Stainless steel construction (SS 316/304) for full GMP compliance',
      'Bottom entry air distribution ensures complete fluidization and consistent drying',
      'Efficient filter bag system to prevent product loss and dust emission',
      'User-friendly control panel with temperature, airflow, and timer controls',
      'Option for explosion-proof design and flameproof motors (on request)',
      'Capacity range: Available from 5 kg to 500 kg batch sizes',
      
    ],
    applications: [
      'Drying of pharmaceutical granules before compression',
      'Drying of wet powders post wet granulation',
      'Suitable for heat-sensitive, free-flowing products',
      
    ],
    footerNote:
      'The Sameto Fluid Bed Dryer offers energy-efficient operation, minimal maintenance, and shorter drying cycles, helping manufacturers scale up productivity while maintaining product quality.',
  },
  7: {
    title: 'Octagonal Blender',
    subtitle: 'Gentle Blending with Maximum Volume Efficiency',
    description: `The Sameto Octagonal Blender is designed for uniform blending of dry powders and granules, especially where low shear and minimal attrition are required. Its unique octagonal shape allows for slow tumbling and optimum mixing, making it ideal for sensitive materials in pharmaceutical, nutraceutical, food, and chemical industries.`,
    image: '/Product images/Octagonal Blender.png',
    features: [
      'GMP-compliant stainless steel (SS 316/304) construction',
      'Octagonal-shaped drum with baffles for effective mixing',
      'Low-speed operation to prevent particle degradation',
      'Butterfly valve or slide gate for easy discharge',
      'Removable baffles and safety guards',
      'Ease of cleaning with minimal product retention',
      'Capacity range: 50L to 2000L+',
    ],
    applications: [
      'Final blending of lubricants with granules',
      'Homogeneous mixing of dry powders and bulk drugs',
      'Ideal for fragile or abrasive materials',
      'Frequently used before tablet compression or capsule filling',
    ],
    footerNote:
      'The Sameto Octagonal Blender is the blender of choice for precision mixing with minimal wear and tear, offering quiet operation, low maintenance, and scalable performance.',
  },
  8: {
    title: 'Ribbon Blender',
    subtitle: 'High-Capacity Mixing for Uniform Powder Blending',
    description: `The Sameto Ribbon Blender is a versatile and robust horizontal mixer designed for thorough blending of powders, granules, and low-viscosity pastes. Equipped with inner and outer helical ribbons, it ensures uniform mixing in a short time, making it ideal for bulk batch processing in pharmaceutical, chemical, food, and cosmetic industries.`,
    image: '/Product images/Ribbon-Blender.png',
    features: [
      'Stainless steel SS 316/304 construction with GMP-compliant finish',
      'Twin ribbon agitator for efficient radial and lateral movement',
      'Heavy-duty gearbox and motor for consistent performance',
      'Top loading and bottom discharge valve for easy material handling',
      'Dust-proof cover with optional liquid spraying nozzles',
      'Safety interlocks and limit switches for secure operation',
      'Available capacities: 100L to 3000L+',
    ],
    applications: [
      'Bulk mixing of dry powders and granules',
      'Mixing of powdered food additives, detergent powders, protein blends',
      'Preparation of premix batches for pharmaceutical and cosmetic formulations',
      'Ideal for free-flowing or slightly cohesive materials',
    ],
    footerNote:
      'With its durable design and customizable capacity, the Sameto Ribbon Blender is the perfect solution for manufacturers seeking speed, volume, and homogeneity in every blend.',
  },
  9: {
    title: 'V-Blender',
    subtitle: 'Precision Blending for Uniform Powder Mixing',
    description: `The Sameto V-Blender is a high-efficiency tumble blender designed for gentle and uniform mixing of dry powders and granules. Its unique V-shaped design allows for consistent material flow and ensures thorough blending without the use of high-speed impellers, making it ideal for fragile or abrasive materials in pharmaceutical, chemical, cosmetic, and food industries.`,
    image: '/Product images/V-BLENDER.png',
    features: [
      'GMP-compliant SS 316/304 construction',
      'V-shaped twin shell for uniform mixing and easy discharge',
      'No shear or heat generation—ideal for sensitive materials',
      'Butterfly valve or slide valve for dust-free discharge',
      'Optional intensifier bar for breaking lumps (if required)',
      'Safety guards and interlock systems',
      'Capacity range: 25L to 1000L and above',
    ],
    applications: [
      'Homogeneous blending of dry powders',
      'Final blending before tablet or capsule production',
      'Suitable for delicate, abrasive, or heat-sensitive products',
      'Ideal for batch-type operations',
    ],
    footerNote:
      'The Sameto V-Blender ensures uniformity, reliability, and ease of cleaning, offering an economical and effective blending solution for a wide range of dry materials.',
  },
  10: {
    title: 'Vibro Sifter',
    subtitle: 'Precision Sieving for Uniform Particle Separation',
    description: `The Sameto Vibro Sifter is a robust and versatile sieving machine designed for high-capacity and accurate separation of particles across different mesh sizes. It is an essential piece of equipment in pharmaceutical, chemical, cosmetic, food, and agro industries for grading, de-dusting, and size separation of materials.`,
    image: '/Product images/VIBROSHIFTER.png',
    features: [
      'GMP-compliant stainless steel construction (SS 316/304)',
      'Vibration mechanism with specially designed motor for efficient sieving',
      'Multiple deck options for grading materials into several fractions',
      'Quick-release clamps for easy assembly and disassembly during cleaning',
      'Dust-tight design with sealing to prevent contamination',
      'Low noise and low maintenance design',
      
    ],
    applications: [
      'Sieving of powders, granules, and semi-solids',
      'Grading raw materials before processing',
      'De-dusting of final products',
      'Screening of intermediates in pharmaceutical and cosmetic production',
    ],
    footerNote:
      'Engineered for continuous and batch operations, the Sameto Vibro Sifter delivers reliable performance, high throughput, and consistent product quality, making it a critical component in modern production lines.',
  },
  11: {
    title: 'Drum Blender',
    subtitle: 'Simple, Hygienic, and Cost-Effective Blending Solution',
    description: `The Sameto Drum Blender is a compact and efficient blending system designed for uniform mixing of dry powders and granules directly within standard drums. It eliminates the need for product transfer, making it ideal for dust-free, contamination-free operations in pharmaceutical, chemical, and food industries.`,
    image: '/Product images/DRUM-BLENDER.png',
    features: [
      'GMP-compliant SS 316/304 frame and drum support',
      'Suitable for standard 50L to 200L drums',
      'Tilt and rotate mechanism for consistent and gentle mixing',
      'Low maintenance design with minimal moving parts',
      'Space-saving structure ideal for small production units',
      'Safety guards and interlocks for operator protection',
      'Optional variable speed drive (VFD) for process control',
    ],
    applications: [
      'Blending of powders and granules in a closed system',
      'Ideal for small to medium batch sizes',
      'Perfect for pre-blend or post-blend before compression or filling',
      'Suitable for toxic, potent, or allergenic materials handling',
    ],
    footerNote:
      'The Sameto Drum Blender offers low-cost, high-efficiency blending while ensuring cleanroom-friendly operation, making it an excellent choice for flexible and hygienic production environments.',
  },
  12: {
    title: 'Air Tray Dryer',
    subtitle: 'Efficient Batch Drying for Heat-Stable Materials',
    description: `The Sameto Air Tray Dryer is a versatile drying system designed for uniform drying of granules, powders, and materials in static trays using controlled heated air circulation. Ideal for batch drying, it is extensively used in pharmaceutical, chemical, herbal, food, and textile industries for its simplicity, reliability, and hygienic design.`,
    image: '/Product images/Air-Tray-Dryer.png',
    features: [
      'GMP-compliant SS 316/304 inner chamber and trays',
      'Double-walled insulated construction to retain heat and reduce energy loss',
      'Axial flow fan with adjustable airflow for uniform heat distribution',
      'Digital temperature controller for precise drying conditions',
      'Removable perforated trays for easy handling and cleaning',
      'Optional HEPA filters, steam or electric heating systems',
      'Capacity options: 6, 12, 24, 48, 96 trays and custom sizes available',
    ],
    applications: [
      'Drying of wet granules post-wet granulation',
      'Dehydration of herbs, spices, fruits, and food ingredients',
      'Ideal for heat-stable powders and bulk solids',
      'Used in API and intermediate drying processes',
    ],
    footerNote:
      'The Sameto Air Tray Dryer offers cost-effective drying with consistent performance, making it a preferred choice for batch-based operations where controlled drying is essential.',
  },
  13: {
    title: 'Ointment & Cream Manufacturing Plant',
    subtitle: 'Complete, GMP-Compliant System for Semi-Solid Formulations',
    description: `Our Ointment & Cream Manufacturing Plant is a fully integrated system designed for the production of creams, gels, ointments, and other semi-solid pharmaceutical and cosmetic formulations. Built with stainless steel SS 316/304 construction, the system ensures hygiene, efficiency, and compliance with GMP and regulatory standards.`,
    image: '/Product images/OINTMENT-LIQUID-ORAL-PLANT.png',
    features: [
      'Triple-walled main manufacturing vessel with heating/cooling jacket and insulation',
      'High-speed emulsifier for uniform mixing and particle size reduction',
      'Vacuum system for deaeration to eliminate air pockets in final product',
      'Inline homogenizer for fine emulsification and smooth texture',
      'Precision control panel with temperature, pressure, and speed control options',
      'Pipelines, valves, and fittings designed for easy cleaning (CIP/SIP compatible)',
      'Available in capacities ranging from 50 kg to 1000 kg',
    ],
    applications: [
      'Pharmaceutical creams and ointments',
      'Cosmetic creams, gels, and lotions',
      'Ayurvedic balms and herbal formulations',
      
    ],
    footerNote:
      'This plant offers batch consistency, ease of operation, and minimal product loss, making it ideal for small to large-scale manufacturers aiming for high-quality, smooth-texture outputs.',
  },
  14: {
    title: 'Rapid Mixer Granulator (RMG)',
    subtitle: 'High-Speed Wet Granulation for Efficient Mixing & Consistent Granule Formation',
    description: `The Sameto Rapid Mixer Granulator is designed for intensive mixing and controlled wet granulation of powders, offering a fast, uniform, and repeatable process essential for modern tablet and capsule manufacturing. Ideal for pharmaceutical, nutraceutical, and chemical industries, it combines a high-shear mixer and chopper for precise granule size and improved compressibility.`,
    image: '/Asset/RMG1.png',
    features: [
      'GMP-compliant SS 316/304 construction',
      'Dual agitator system: Impeller for primary mixing and chopper for breaking lumps',
      'Uniform granule formation with short processing time',
      'Top-mounted or side-mounted spray system for binder addition',
      'PLC-based control panel with recipe storage (optional)',
      'Safe discharge system for easy transfer to dryer or mill',
      'Available capacities: 25L to 600L+',
    ],
    applications: [
      'Wet granulation for tablets and capsules',
      'Uniform mixing of API and excipients',
      'Preparation of granules with excellent flow and compressibility',
      'Pre-processing in solid oral dosage manufacturing',
    ],
    footerNote:
      'The Sameto RMG is engineered for rapid performance, reduced processing time, and scalable batch output, ensuring consistent granule quality that meets strict regulatory standards.',
  },
  15: {
    title: 'Sameto Coater',
    subtitle: 'Automatic Tablet Coating Machine for Precision Film & Sugar Coating',
    description: `The Sameto Coater is a fully automated, high-efficiency tablet coating machine designed for uniform film and sugar coating of tablets and pellets. Engineered to meet GMP and cGMP guidelines, it ensures superior coating uniformity, reduced process time, and optimal product integrity—making it the preferred choice for pharmaceutical, nutraceutical, and herbal industries.`,
    image: '/Asset/SametoCoater.png',
    features: [
      'Perforated coating pan with advanced baffle design for uniform tablet tumbling',
      'Spray gun system with anti-drip and auto-clean functionality',
      'PLC-controlled HMI interface for process accuracy and recipe management',
      'Automatic drying system with hot air inlet and exhaust airflow balancing',
      'SS 316 contact parts with mirror polish for easy cleaning and hygiene',
      'Enclosed system for dust-free, contamination-free operation',
      'Pan capacities: 12” to 60” and custom configurations',
    ],
    applications: [
      'Film coating of tablets with polymers for controlled release',
      'Sugar coating for taste masking or aesthetic appeal',
      'Enteric coating for delayed drug release',
      'Herbal or nutraceutical tablet coating with natural polymers',
    ],
    footerNote:
      'The Sameto Coater delivers exceptional coating efficiency, batch-to-batch consistency, and operator safety, making it a valuable asset for large-scale and high-precision tablet production environments.',
  },
  16: {
    title: 'Powder Transfer System (PTS)',
    subtitle: 'Closed Containment Solution for Safe & Efficient Powder Handling',
    description: `The Sameto Powder Transfer System is an advanced material handling solution engineered for dust-free transfer of powders and granules between equipment such as reactors, blenders, granulators, and tablet presses. Designed for maximum hygiene, safety, and operational efficiency, it is ideal for pharmaceutical, chemical, food, and cosmetic industries.`,
    image: '/Asset/FBP1.png',
    features: [
      'GMP-compliant stainless steel (SS 316/304) construction',
      'Pneumatic or vacuum-based transfer technology',
      'Closed-loop design to prevent contamination and operator exposure',
      'Inline filtration and venting systems for clean air exhaust',
      'Easy integration with IBCs, FBDs, mills, and tablet presses',
      'CIP/SIP compatible for hygienic operation',
      'Available in multiple transfer capacities to suit batch size',
    ],
    applications: [
      'Safe transfer of API and excipients',
      'Charging of materials into reactors or granulators',
      'Discharge from mixers or dryers to downstream processes',
      'Ideal for toxic, allergenic, or fine powder materials',
    ],
    footerNote:
      'With minimal product loss and maximum containment, the Sameto Powder Transfer System enhances productivity, operator safety, and regulatory compliance, making it a must-have for modern cleanroom operations.',
  },
  17: {
    title: 'Hydraulic Lifter',
    subtitle: 'Ergonomic Material Handling for GMP Environments',
    description: `The Sameto Hydraulic Lifter is a robust and reliable lifting solution designed to safely lift, position, and transfer bins, drums, and containers in cleanroom and production environments. Built for pharmaceutical, chemical, food, and cosmetic industries, it ensures effortless vertical movement with precision control and operator safety.`,
    image: '/Asset/RMG1.png',
    features: [
      'Stainless steel SS 316/304 construction with GMP finish',
      'Hydraulic lifting mechanism (manual or motorized options)',
      'Custom attachments to lift bins, FBD bowls, drums, or IBCs',
      'Swivel and locking wheels for easy mobility and stable positioning',
      'Compact and floor-friendly design for narrow spaces',
      'Available as fixed, mobile, or wall-mounted models',
      'Control panel with up/down switch and emergency stop',
    ],
    applications: [
      'Lifting and discharging into blenders, mills, granulators, or tablet presses',
      'Bin lifting and docking in powder processing lines',
      'Material charging in elevated equipment',
      'Ideal for GMP-compliant handling of heavy or sensitive containers',
    ],
    footerNote:
      'The Sameto Hydraulic Lifter ensures operator convenience, safety, and process accuracy, reducing manual labor and increasing operational efficiency across production lines.',
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <div className="container mt-5"><h2>Product not found</h2></div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="card p-4 shadow rounded-4 border-0">
          <div className="row d-flex align-items-stretch">
           
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h3 className="fw-bold">{product.title}</h3>
              <h6 className="text-muted mb-3">{product.subtitle}</h6>
              <p>{product.description}</p>
            </div>
            <div className="col-md-1 d-none d-md-flex justify-content-center">
              <div style={{ borderLeft: '2px solid #ccc', height: '100%' }}></div>
            </div>

          
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center bg-primary"
                style={{ width: '250px', height: '250px' }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ maxHeight: '160px' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 g-4">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3 text-primary">🔧 Key Features</h5>
                <ul className="list-unstyled">
                  {product.features.map((item, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-start">
                      <i className="bi bi-check-circle-fill text-success me-2 mt-1"></i>
                      <span>🔹 {item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="fw-bold mb-3 text-primary">📦 Applications</h5>
                <ul className="list-unstyled">
                  {product.applications.map((item, idx) => (
                    <li key={idx} className="mb-2 d-flex align-items-start">
                      <i className="bi bi-dot text-secondary me-2 mt-1"></i>
                      <span>🟢 {item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5">
          <div className="p-4 bg-light border-start border-5 border-primary rounded-3 shadow-sm">
            <p className="mb-0">{product.footerNote}</p>
          </div>
        </div>
       
        <div id="contact">
           <ContactSection />
        </div>
        </div>

     
      <Footer />
    </>
  );
};

export default ProductDetail;
