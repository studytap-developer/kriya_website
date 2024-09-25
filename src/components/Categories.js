import React from 'react';
import necklace from '../assets/necklace.jpg';  // Adjust the path based on your folder structure
import chocker from '../assets/chocker.jpg';
import bangles from '../assets/bangles.jpg';
import harams from '../assets/harams.jpg'

const categories = [
  { name: 'Necklace', image: necklace },
  { name: 'Earrings', image: chocker },
  { name: 'Bracelets', image: bangles },
  { name: 'Harams', image: harams }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Shop By Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <img src={category.image} alt={category.name} className="w-full h-60 object-cover rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-white text-xl font-semibold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
