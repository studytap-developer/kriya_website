
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Hero from './components/Hero';
// import Categories from './components/Categories';
// import FeaturedProducts from './components/FeaturedProducts';
// import About from './components/About';
// import Footer from './components/Footer';
// import Visit from './components/Visit';
// import PrivacyPolicy from './components/PrivacyPolicy'; // Import PrivacyPolicy component
// import Chat from './components/chat';
// import WhatsAppPage from './components/WhatsAppPage';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* Always visible components */}
//         <Navbar />

//         {/* Route-based content */}
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <Visit />
//                 <Categories />
//                 <FeaturedProducts />
//                 <About />

//               </>
//             }
//           />
//           <Route path="/privacy" element={<PrivacyPolicy />} />
//         </Routes>
//         <WhatsAppPage />
//         {/* Always visible components */}
//         <Footer />
       

//         <Chat />
//       </div>
//     </Router>
//   );
// }

// export default App;


// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import About from './components/About';
import Footer from './components/Footer';
import Visit from './components/Visit';
import PrivacyPolicy from './components/PrivacyPolicy';
import Chat from './components/chat';
import WhatsAppPage from './components/WhatsAppPage';
import FullScreenPopup from './components/FullScreenPopup';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // REMOVE THIS LINE AFTER TESTING IF YOU WANT POPUP ONLY ONCE
    localStorage.removeItem('popupShown');

    const shown = localStorage.getItem('popupShown');
    if (!shown) {
      setShowPopup(true);
      localStorage.setItem('popupShown', 'true');
    }
  }, []);

  return (
    <Router>
      <div className="App relative">
        {/* Show popup */}
        {showPopup && <FullScreenPopup onClose={() => setShowPopup(false)} />}

        {/* Hide navbar and chat when popup is open */}
        {!showPopup && <Navbar />}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Visit />
                <Categories />
                <FeaturedProducts />
                <About />
              </>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>

        <WhatsAppPage />
        <Footer />
        {!showPopup && <Chat />}
      </div>
    </Router>
  );
}

export default App;

