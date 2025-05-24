import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './style.css';

const industriesData = [
  {
    id: 1,
    text: <p>
            <strong>Pharmaceuticals :</strong> As a leading manufacturer of pharmaceutical process equipment in India, Sameto supports the pharmaceutical industry with precision-engineered solutions for manufacturing, formulation, and R&D processes. Our high-grade stainless steel and special alloy vessels ensure compliance with global GMP standards. With a robust facility in Ankleshwar, Gujarat, we cater to pharma companies worldwide by delivering equipment for reactors, mixers, dryers, and custom-built process systems.
          </p>,

    img: "./Industries1.jpg",
    reverse: false,
  },
  {
    id: 2,
    text: <p>
            <strong>Nutraceuticals :</strong> Sameto delivers specialized bioprocess equipment to biotechnology companies engaged in vaccine manufacturing, fermentation, cell culture, and bio-research. Our biotech-grade vessels and process systems are crafted to meet sterile processing needs and regulatory compliances. Serving both domestic and global biotech firms, our Ankleshwar plant is equipped to handle complex fabrication in stainless steel and exotic metals like Hastelloy and Monel.
          </p>,
    img: "./Industries2.jpg",
    reverse: true,
  },
  {
    id: 3,
    text: <p>
            <strong>Bio Tech :</strong> As a leading manufacturer of pharmaceutical process equipment in India, Sameto supports the pharmaceutical industry with precision-engineered solutions for manufacturing, formulation, and R&D processes. Our high-grade stainless steel and special alloy vessels ensure compliance with global GMP standards. With a robust facility in Ankleshwar, Gujarat, we cater to pharma companies worldwide by delivering equipment for reactors, mixers, dryers, and custom-built process systems.
          </p>,
    img: "./Industries3.jpg",
    reverse: false,
  },
];

const IndustriesWeServe = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold">Industries We Serve</h2>
      <div className="section-divider mb-5"></div>

      {industriesData.map(({ id, text, img, reverse }) => (
        <Row key={id} className="align-items-center mb-5 industry-row flex-wrap">
          <Col xs={12} md={2} className={`text-center ${reverse ? 'order-md-1' : 'order-md-2'} order-1`}>
            <div className="circle-number gradient-border">{id}</div>
          </Col>

          <Col xs={12} md={10} className={`order-2 ${reverse ? 'order-md-2' : 'order-md-1'}`}>
            <Card className="shadow industry-card p-4">
              <Row className="align-items-center">
                <Col xs={12} md={6} className="order-1">
                  <img src={img} alt={`Industry ${id}`} className="img-fluid mb-3 mb-md-0" />
                </Col>
                <Col xs={12} md={6} className="order-2">
                  <p>{text}</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default IndustriesWeServe;
