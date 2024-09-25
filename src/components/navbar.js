import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Ensure the path to your logo is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#5d3a29] border-b border-gray-200 px-4 py-2.5 sm:px-6 lg:px-8 sticky top-0 z-50">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo Section */}
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
              Kriya Jewellers
            </span>
          </a>

          {/* Search Section for Desktop */}
          <div className="relative hidden md:block w-1/3">
            <input
              type="text"
              className="block p-2 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-[#5d3a29] focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-white hover:bg-gray-600 px-3 py-2 rounded-lg">
              Home
            </a>
            <a href="/" className="text-white hover:bg-gray-600 px-3 py-2 rounded-lg">
              Products
            </a>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-white hover:bg-gray-600 px-3 py-2 rounded-lg"
            >
              Contact
            </button>
          </div>

          {/* Mobile Search Section */}
          <div className="relative md:hidden w-full mt-2">
            {isOpen && (
              <input
                type="text"
                className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            )}
          </div>

          {/* Mobile Menu Links */}
          {isOpen && (
            <div className="md:hidden w-full mt-4 space-y-4">
              <a href="/" className="block text-white hover:bg-gray-100 px-3 py-2 rounded-lg">
                Home
              </a>
              <a href="/products" className="block text-white hover:bg-gray-100 px-3 py-2 rounded-lg">
                Products
              </a>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="block text-white hover:bg-gray-100 px-3 py-2 rounded-lg"
              >
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative w-full max-w-md mx-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsContactModalOpen(false)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <li className="">Phone: <a href="tel:+7815006682" className="hover:underline">+91 9640300099</a></li>
            <li className="mb-4">Email: contact.kriyajewellery@gmail.com</li>
            <iframe
              className="w-full h-48 rounded-lg"
              src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3129968821063!2d78.39923771007986!3d17.492565999698826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb916768f6f9e3%3A0xcecd71c9eb084476!2sKRIYA%20JEWELLERS!5e0!3m2!1sen!2sin!4v1727173567912!5m2!1sen!2sin" 
              allowFullScreen=""
              loading="lazy"
              title="Kriya Location"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;


