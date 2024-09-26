import React from 'react';
import visit from '../assets/visit.png';

const Visit = () => {
  return (
    <div className="relative h-screen">
      {/* Background Wrapper */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed bg-fixed-ios" 
        style={{ backgroundImage: `url(${visit})` }}
      >
        {/* Optional Overlay to enhance text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      {/* Scrollable Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Visit Our Store</h1>
        <p className="text-lg md:text-2xl mb-8">Come see us for an unforgettable shopping experience</p>
        <a 
          href="https://www.google.com/maps/place/KRIYA+JEWELLERS/@17.492566,78.3992377,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb916768f6f9e3:0xcecd71c9eb084476!8m2!3d17.492566!4d78.4014264!16s%2Fg%2F11c1wvqx_8"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[#ece9e7] text-black font-semibold rounded-lg hover:bg-yellow-100 transition"
        >
          Find Us on the Map
        </a>
      </div>
    </div>
  );
};

export default Visit;


