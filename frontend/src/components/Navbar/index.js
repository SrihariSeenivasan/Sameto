import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactInView, setContactInView] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setContactInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            exact="true"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            <img src="/logo.png" alt="Logo" className="logo" width="60"height="100"/>
          </NavLink>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/about-us" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
              The Company
            </NavLink>
          </li>
          <li>
            <NavLink to="/product-and-servics" onClick={() => setIsOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
              Product & Services
            </NavLink>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleContactClick}
              className={contactInView ? 'active' : ''}
            >
              Contact Us
            </a>
          </li>
          <li>
            <a href="/brochure" onClick={() => setIsOpen(false)}>
              Downloads
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
