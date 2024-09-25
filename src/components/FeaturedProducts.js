import React from 'react';
import one from '../assets/one.png';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import dummy2 from '../assets/dummy2.jpg';
import four from '../assets/four.jpg'
import five from '../assets/five.jpg';
import six from '../assets/six.jpg';
import dummy1 from '../assets/dummy1.jpg';
import chocker from '../assets/chocker.jpg'; // Corrected spelling

const featuredProducts = [
  { name: 'Gold Bangles', price: 'Rs. 271,452', image: one },
  { name: 'Short Black Beads', price: 'Rs .74,005', image: three }, // Using 'choker' image
  { name: 'Gold Nacklace', price: 'Rs. 114,721', image: dummy1 }, // Using 'bangles' image
  { name: 'Black Beads', price: 'Rs.65,996', image: dummy2 },
  { name: 'Gold Haram ', price: 'Rs. 672,751', image: five },
  { name: 'Gold Bangles', price: 'Rs. 232,814', image: six },
  { name: 'Long Black Beads ', price: 'Rs.117,392' , image: two }, // Reusing 'bangles' image
  { name: 'Gold Harams ', price: 'Rs. 324,314', image: four }        // Reusing 'four.jpg'
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {featuredProducts.map((product, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-4 text-center shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
              <a
  href="https://wa.me/9640300099?text=I'm%20interested%20in%20this%20product"
  className="mt-4 inline-block px-6 py-2 bg-[#5d3a29] text-white font-semibold rounded"
  target="_blank"
  rel="noopener noreferrer"
>
  View Details
</a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;




