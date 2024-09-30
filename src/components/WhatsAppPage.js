// src/pages/WhatsAppPage.js
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppPage = () => {
  return (
    <div>
      {/* Your existing components like Navbar or content */}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919640300099?text=Hello%20Kriya%20Jewellers%2C%20I%27d%20like%20to%20inquire%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '90px',
          right: '20px',
          fontSize: '40px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          padding: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default WhatsAppPage;
