import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer';
import ContactSection from '../components/Contact';
import { Nav } from 'react-bootstrap';
import Navbar from '../components/Navbar';


const TermsAndConditions = () => {
  return (
    <>
    <Navbar />
    <div className="container my-5">
      <h1 className="mb-3">Terms & Conditions</h1>
      <p><strong>Effective Date:</strong> April 15, 2025</p>

      <p>Welcome to Sameto. By accessing or using our website, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.</p>

      <h5 className="mt-4">1. Acceptance of Terms</h5>
      <p>By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions, along with our Privacy Policy. If you do not agree with any part of these terms, please do not use our website.</p>

      <h5 className="mt-4">2. Use of the Website</h5>
      <p>You agree to use the website for lawful purposes only and in a manner that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website. Prohibited behavior includes:</p>
      <ul>
        <li>Transmitting obscene or offensive content</li>
        <li>Disrupting the normal flow of dialogue within the website</li>
        <li>Engaging in activities that could harm the website or its users</li>
      </ul>

      <h5 className="mt-4">3. Intellectual Property Rights</h5>
      <p>All content on this website, including text, graphics, logos, images, and software, is the property of Sameto or its content suppliers and is protected by applicable intellectual property laws. Unauthorized use of any content may violate copyright, trademark, and other laws.</p>

      <h5 className="mt-4">4. Links to Third-Party Websites</h5>
      <p>Our website may contain links to third-party websites for your convenience. We do not endorse or assume any responsibility for the content or practices of these external sites. Accessing third-party websites is at your own risk.</p>

      <h5 className="mt-4">5. Limitation of Liability</h5>
      <p>Sameto shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to or use of this website. We do not warrant that the website will be error-free or uninterrupted.</p>

      <h5 className="mt-4">6. Indemnification</h5>
      <p>You agree to indemnify and hold harmless Sameto, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses arising out of your use of the website or violation of these Terms & Conditions.</p>

      <h5 className="mt-4">7. Changes to Terms & Conditions</h5>
      <p>We reserve the right to modify these Terms & Conditions at any time without prior notice. Your continued use of the website after any changes indicates your acceptance of the new Terms & Conditions.</p>

      <h5 className="mt-4">8. Governing Law</h5>
      <p>These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.</p>

      <h5 className="mt-4">9. Contact Information</h5>
      <p>For any questions or concerns regarding these Terms & Conditions, please contact us at:<br />
      Phone: 02226855205</p>

       <div id="contact">
  <ContactSection />
</div>
            <Footer />
    </div>
    </>
  );
};

export default TermsAndConditions;
