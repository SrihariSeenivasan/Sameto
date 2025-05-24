import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import ContactSection from '../components/Contact';
import { Nav } from 'react-bootstrap';
import Navbar from '../components/Navbar';


const PrivacyPolicy = () => {
  return (
    <>
    <Navbar />
    <div className="container my-5">
      <h1 className="mb-3">Privacy Policy</h1>
      <p><strong>Effective Date:</strong> April 15, 2025</p>

      <p>Sameto ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you visit our website.</p>

      <h5 className="mt-4">1. Information We Collect</h5>
      <p>We may collect the following types of personal information:</p>
      <ul>
        <li><strong>Contact Information:</strong> Name, email address, phone number, and any other details you provide when contacting us.</li>
        <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on the site.</li>
      </ul>

      <h5 className="mt-4">2. How We Use Your Information</h5>
      <p>We use the collected information to:</p>
      <ul>
        <li>Respond to your inquiries and provide customer support.</li>
        <li>Improve our website and services.</li>
        <li>Send you updates, promotional materials, or other communications, if you have opted in to receive them.</li>
      </ul>

      <h5 className="mt-4">3. Sharing Your Information</h5>
      <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.</p>

      <h5 className="mt-4">4. Data Security</h5>
      <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is entirely secure, and we cannot guarantee absolute security.</p>

      <h5 className="mt-4">5. Your Rights</h5>
      <p>You have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Request correction or deletion of your personal information.</li>
        <li>Opt out of receiving marketing communications from us.</li>
      </ul>
      <p>To exercise these rights, please contact us using the information provided below.</p>

      <h5 className="mt-4">6. Cookies</h5>
      <p>Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of the website.</p>

      <h5 className="mt-4">7. Changes to This Privacy Policy</h5>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

      <h5 className="mt-4">8. Contact Us</h5>
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at:<br />
      Phone: 02226855205</p>

      <div id="contact">
  <ContactSection />
</div>
      <Footer />
      
    </div>
    </>
  );
};

export default PrivacyPolicy;
