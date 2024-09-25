
import React from 'react';
import kriya from '../assets/kriya.mp4'; // Replace this with the correct path to your video file

const Hero = () => {
  return (
    <div className="relative h-screen bg-gray-100">
      {/* Video Background */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        src={kriya} 
        autoPlay
        loop
        muted
      />
      {/* Optional Overlay for Dim Effect */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Centered Text for Kriya Jewellers */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold">Kriya Jewellers</h1>
          <p className="mt-4 text-xl md:text-2xl">Crafting Timeless Elegance</p>
          <a href="/" className="mt-8 inline-block px-6 py-3 bg-white text-black font-semibold rounded hover:bg-[#5d3a29]">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;






