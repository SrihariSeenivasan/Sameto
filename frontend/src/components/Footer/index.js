
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../../App'; 

const Footer = () => {
  return (
    <footer className="footer-custom pt-5 pb-3">
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-3">
            <div className="mb-2">
              <img src="/Logo-.png" alt="Logo"  />
            </div>
            <p className="small">
              Empowering your journey with quality content and meaningful connections.
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaLinkedin />
              </a>
            </div>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Useful Links</h5>
            <hr className="footer-divider" /> 
            <ul className="list-unstyled">
              <li><a href="/about-us" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="/product-and-servics" className="text-light text-decoration-none">Product & Services</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Others</h5>
            <hr className="footer-divider" /> 
            <ul className="list-unstyled">
               <li><a href="/privacyandpolicy" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="/termsandcondition" className="text-light text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
          <h5>Contact</h5>
          <hr className="footer-divider" />
          <ul className="list-unstyled">
            <li>
              <a 
                href="https://maps.app.goo.gl/M3gb446dBDELDwHe6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light text-decoration-none"
              >
                📍 129, Guru Gobind Singh Industrial Estate, Western Express Highway, Near Jay Coach, Goregaon (E), Mumbai: 400 063, maharashtra, India.

              </a>
            </li>
            <li>
              <a 
                href="mailto:sales@sametoag.com" 
                className="text-light text-decoration-none"
              >
                📧 sales@sametoag.com
              </a>
            </li>
            <li>
              <a 
                href="https://www.sametoag.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light text-decoration-none"
              >
                🌐 www.sametoag.com
              </a>
            </li>
            <li>
              <a 
                href="https://wa.me/+91-22-4295 3520" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light text-decoration-none"
              >
                📱 +91-22-4295 3520
              </a>
            </li>
          </ul>
        </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <small>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
