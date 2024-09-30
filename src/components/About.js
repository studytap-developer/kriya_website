
import React from 'react';
import { FaGem, FaHandsHelping, FaLeaf } from 'react-icons/fa';
import bg from '../assets/bg.jpg'; // Make sure the path is correct

const About = () => {
  return (
    <section className="relative py-20 bg-gray-50">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${bg})` }} // Use the imported bg image here
      ></div>
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-5xl font-bold text-center text-gray-800">About Kriya Jewellers</h2>
        <p className="mt-6 text-center text-xl text-gray-600 max-w-4xl mx-auto">
          At Kriya Jewellers, we create beautiful and high-quality jewelry. Whether you are looking for gold, diamonds, or silver, we offer a wide variety of designs for every occasion. We take pride in our craftsmanship and make sure each piece is made with care.
        </p>

        {/* Key Values */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {/* Quality Materials */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaGem className="mx-auto text-5xl text-[#5d3a29]" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">High-Quality Materials</h3>
            <p className="mt-2 text-gray-600">
              We use only the best gold, diamonds, and silver to make sure our jewelry looks beautiful and lasts a long time.
            </p>
          </div>

          {/* Ethical Craftsmanship */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaHandsHelping className="mx-auto text-5xl text-[#5d3a29]" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Crafted with Care</h3>
            <p className="mt-2 text-gray-600">
              Our jewelry is made by skilled craftsmen who follow ethical practices, paying attention to every detail.
            </p>
          </div>

          {/* Eco-Friendly */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <FaLeaf className="mx-auto text-5xl text-[#5d3a29]" />
            <h3 className="mt-4 text-2xl font-semibold text-gray-800">Eco-Friendly Jewelry</h3>
            <p className="mt-2 text-gray-600">
              We make sure our jewelry is made in a way that protects the environment, so you can feel good about wearing it.
            </p>
          </div>
        </div>  

        {/* Contact Us Button */}
        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/+919640300099?text=Hello%20Kriya%20Jewellers%2C%20I%27d%20like%20to%20inquire%20about%20your%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#5d3a29] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-[#4a2a1e] transition duration-300">
            Contact Us 
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

