import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo-container">
      <img src="/logo.svg" alt="Saumya Optical Logo" className="logo-image" />
    </Link>
  );
};

export default Logo;
