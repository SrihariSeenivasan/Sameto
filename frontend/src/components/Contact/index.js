import React from 'react';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';
import './style.css';

import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaFlag, FaQuestion } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-section text-white py-5" style={{ backgroundColor: 'red' }}>

      <Container>
        <h2 className="text-left text-white fw-bold mb-3">
          Got Questions About Our Products Or Want To Scale With Us?
        </h2>
        <p className="text-left text-white mb-5">
          We’re Here To Help During Working Hours. Reach Out To Our Friendly Team — We’ll Get Back To You As Soon As Possible!
        </p>

        <Form>
          <Row className="gy-3">
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text><FaUser /></InputGroup.Text>
                <Form.Control placeholder="First Name" />
              </InputGroup>
            </Col>
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text><FaUser /></InputGroup.Text>
                <Form.Control placeholder="Second Name" />
              </InputGroup>
            </Col>
            <Col md={4}>
              <InputGroup>
                <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                <Form.Control placeholder="Enter Your Email" type="email" />
              </InputGroup>
            </Col>
           <Col md={4}>
  <PhoneInput
    country={'in'}
    enableSearch
    inputStyle={{ width: '100%', }}
    placeholder="Enter Your Number"
  />
</Col>

            <Col md={4}>
              <InputGroup>
                <InputGroup.Text><FaQuestion /></InputGroup.Text>
                <Form.Control placeholder="What Tasks Would You Like To Solve ?" />
              </InputGroup>
            </Col>
            <Col md={4}>
              <Button type="submit" className="w-100 connect-btn">
                Connect With Us
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default ContactSection;
