import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import logoo from '../assets/logoo.png'; // Ensure the path to your logo is correct
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#5d3a29] py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Kriya Jewellers</h3>
            <p className="text-sm leading-relaxed">
              At Kriya Jewellers, we specialize in timeless handcrafted jewelry, designed to celebrate life’s most cherished moments. Explore our wide range of rings, necklaces, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link to="/" className="text-sm hover:underline">Shop</Link></li>
              <li><Link to="/" className="text-sm hover:underline">About Us</Link></li>
              <li><Link to="/" className="text-sm hover:underline">Contact Us</Link></li>
              <li>
                <Link to="/privacy" className="text-sm hover:underline">Privacy Policy</Link> {/* Correct Link */}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm">Address: MIG-209, Rd Number 1, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072</li>
              <li className="text-sm">Phone: <a href="tel:+919640300099" className="hover:underline">+919640300099</a></li>
              <li className="text-sm">Email: <a href="mailto:rkirtirajmandal@gmail.com" className="hover:underline">contact.kriyajewellery@gmail.com</a></li>
            </ul>
          </div>

          {/* Customer Services */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Customer Services</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:underline">Shipping</Link></li>
              <li><Link to="/" className="text-sm hover:underline">Returns</Link></li>
              <li><Link to="/" className="text-sm hover:underline">FAQs</Link></li>
              <li><Link to="/" className="text-sm hover:underline">Support</Link></li>
            </ul>
          </div>

          {/* Social Media and Logo */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-6">
  <a href="/" className="hover:text-gray-300" aria-label="Facebook">
    <FaFacebookF />
  </a>
  <a 
  href="https://www.instagram.com/kriyajewellers/" 
  className="hover:text-gray-300" 
  target="_blank" 
  rel="noopener noreferrer" 
  aria-label="Instagram"
>
  <FaInstagram />
</a>

  <a href="/" className="hover:text-gray-300" aria-label="Twitter">
    <FaTwitter />
  </a>
  <a href="/" className="hover:text-gray-300" aria-label="Pinterest">
    <FaPinterest />
  </a>
</div>

            <div className="flex ">
              <img src={logoo} className="h-32 w-auto object-contain" alt="Kriya Jewellers Logo" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-sm text-white mb-3">
            &copy; 2024 Happy Minds Jewellery LLP. All Rights Reserved.
          </p>
          <a href="https://www.shreegajananaenterprises.com/" target="_blank" rel="noopener noreferrer">
  <p className="text-sm text-white">Developed by Shree Gajanana Enterprises LLP</p>
</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



