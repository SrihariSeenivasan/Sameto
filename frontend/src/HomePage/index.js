import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import Footer from '../components/Footer';
import ContactSection from '../components/Contact';
import IndustriesWeServe from '../components/IndustriesWeServe';
import CardPage from '../components/IndustriesWeServe/OurProducts';
import WhyChooseUs from '../components/IndustriesWeServe/WhyChooseUs';
import PharmaSection from '../components/IndustriesWeServe/PharmaSection';
import ClientCarouselSlider from '../components/ClientCarouselSlider';




const Home = () => {
  return (
    <>
        <Navbar />
  <div className="home-wrapper">
      <PharmaSection />
      <WhyChooseUs />
      <IndustriesWeServe />
     
      <CardPage />
      <ClientCarouselSlider />
      <div id="contact">
  <ContactSection />
</div>
      <Footer />
      </div>
    </>
  );
};

export default Home;
