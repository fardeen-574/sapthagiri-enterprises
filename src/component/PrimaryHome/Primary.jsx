import React from 'react';
import './Primary.css';
import { HomeBanner } from '../../assets';
import { Link } from 'react-router-dom';

const Primary = () => {
  return (
    <section className="primary-container">
      
      <div className="primary-overlay"></div>
      <div className="primary-content">
        <h1 className="primary-heading">Welcome to Sapthagiri Enterprises</h1>
        <h2 className="primary-tagline">"Shaping Steel, <br /> Engineering Precision."</h2>
        <p className="primary-description">
          Trusted experts in sheet metal fabrication, CNC machining, and precision-engineered components for industrial excellence.
        </p>
        <Link to="/contact" className="primary-button">Get in Touch</Link>
      </div>
    </section>
  );
};

export default Primary;
