import React from 'react';


import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import AboutUs from './AboutUs';
import ProductDetail from './components/ProductCards/ProductDetail';
import ProductsAndServices from './ProductsAndServices';
import TermsAndConditions from './TermsandCondition';
import PrivacyPolicy from './PrivacyPolicy';
import BrochureSection from './BrochureSection';

function App() {
  return (
    <>
    
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/product-and-servics" element={<ProductsAndServices />} />
    <Route path="/termsandcondition" element={<TermsAndConditions />} />
    <Route path="/privacyandpolicy" element={<PrivacyPolicy />} />
    {/* <Route path="/card-page" element={<CardPage />} /> */}

    <Route path="/brochure" element={<BrochureSection />} />
    <Route path="/products/:id" element={<ProductDetail />} />
    
  </Routes>
</BrowserRouter>

      

    </>
  );
}

export default App;
