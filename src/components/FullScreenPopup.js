

// import React, { useState, useEffect } from "react";
// import { Gift, Sparkles, Phone, CheckCircle, Crown } from "lucide-react";
//  import logo from "../assets/logoo.png";


// const parts = [
//   { value: "5.55", label: "Plain 22kt Jewellery", color: "from-amber-400 to-yellow-500" },
//   { value: "9.55", label: "Design & Stone Jewellery", color: "from-rose-400 to-pink-500" },
//   { value: "11.55", label: "Exclusive Jewellery", color: "from-purple-400 to-indigo-500" },
//   { value: "30", label: "18kt Gold & LGD Jewellery", color: "from-emerald-400 to-teal-500" },
// ];

// const FullScreenPopup = ({ onClose }) => {
//   const [rotation, setRotation] = useState(0);
//   const [isSpinning, setIsSpinning] = useState(false);
//   const [result, setResult] = useState(null);
//   const [showClaimInput, setShowClaimInput] = useState(false);
//   const [phone, setPhone] = useState("");
//   const [claimed, setClaimed] = useState(false);

//   const spin = () => {
//     if (isSpinning) return;
//     const anglePerItem = 360 / parts.length;
//     const randomAngleWithinSegment = Math.random() * anglePerItem;
//     const randomSegmentIndex = Math.floor(Math.random() * parts.length);
//     const baseAngle = randomSegmentIndex * anglePerItem;
//     const spins = 50;
//     const totalRotation = spins * 360 + baseAngle + randomAngleWithinSegment;

//     setIsSpinning(true);
//     setResult(null);
//     setShowClaimInput(false);
//     setClaimed(false);
//     setRotation(totalRotation);

//     setTimeout(() => {
//       const finalDeg = totalRotation % 360;
//       const landedIndex =
//         (parts.length - Math.floor((finalDeg % 360) / anglePerItem)) % parts.length;
//       setResult(parts[landedIndex]);
//       setIsSpinning(false);
//     }, 4000);
//   };

//   const handleClaim = () => {
//     if (phone.trim() === "") return;

//     // Show congratulations message immediately
//     setClaimed(true);

//     // Close popup after 5 seconds
//     setTimeout(() => {
//       onClose();
//     }, 5000);

//     // Send data to Google Sheets in background
//     const formData = new FormData();
//     formData.append("phone", phone);
//     formData.append("prize", result?.value || "");

//     fetch("https://script.google.com/macros/s/AKfycbxPcow1fQwF3eV9D8Pj4rG9xQUkDXZyYXWmV_fXPqHCKJWZpvXOo9r1P3Li5Jtw5mUv/exec", {
//       method: "POST",
//       body: formData,
//     }).catch((err) => console.error("Error sending to Google Sheet:", err));
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
//       {/* Close Button */}
//       <button
//         onClick={onClose}
//         className="absolute top-4 right-4 text-white bg-white/10 border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 z-50"
//       >
//         ✕
//       </button>

//       {/* Main Content */}
//       <div
//         className={`min-h-screen w-full transition-all duration-1000 ${
//           result
//             ? "bg-gradient-to-br from-amber-50 via-white to-yellow-50"
//             : "bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900"
//         } flex flex-col items-center justify-center p-4`}
//       >
//         {!result && (
//           <>
//             <div className="flex items-center justify-center mb-4">
          
//               <img src={logo} alt="Logo" className="h-24 mb-4" />

//             </div>
//             <div className="text-center mb-6 max-w-sm">
//               <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30">
//                 <p className="text-yellow-200 text-sm font-semibold">Aashadam, Shravanam & 1st Anniversary</p>
//                 <p className="text-amber-300 text-lg font-bold mt-1">🎉 SPECIAL OFFERS 🎉</p>
//               </div>
//             </div>

//             {/* Spin Wheel */}
//             <div className="relative mb-6">
//               <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-xl animate-pulse" />
//               <div className="relative w-72 h-72">
//                 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 p-2">
//                   <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-100 to-yellow-50 p-3">
//                     <div
//                       className="w-full h-full rounded-full overflow-hidden relative transition-transform ease-out shadow-2xl border-4 border-yellow-400"
//                       style={{
//                         transform: `rotate(${rotation}deg)`,
//                         transitionDuration: isSpinning ? "4s" : "0.3s",
//                       }}
//                     >
//                       {parts.map((part, i) => {
//                         const angle = i * 90;
//                         return (
//                           <div
//                             key={i}
//                             className={`absolute w-1/2 h-1/2 origin-bottom-left bg-gradient-to-br ${part.color} border-r-2 border-b-2 border-white/50 flex items-center justify-center shadow-inner`}
//                             style={{
//                               transform: `rotate(${angle}deg)`,
//                               transformOrigin: "100% 100%",
//                             }}
//                           >
//                             <div className="text-center px-1" style={{ transform: `rotate(-${angle}deg)` }}>
//                               <div className="text-white/90 text-xs font-medium">FLAT VA *</div>
//                               <div className="text-white font-bold text-lg">{part.value}%</div>
//                             </div>
//                           </div>
//                         );
//                       })}
//                     </div>
//                     {/* Arrow moved to center */}
//                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
//                       <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px] border-l-transparent border-r-transparent border-b-red-600 drop-shadow-lg" />
//                       <div className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Spin Button */}
//             <button
//               onClick={spin}
//               disabled={isSpinning}
//               className={`group relative px-8 py-4 text-lg font-bold rounded-full shadow-2xl transition-all duration-300 transform w-full max-w-xs ${
//                 isSpinning
//                   ? "bg-gray-400 cursor-not-allowed scale-95"
//                   : "bg-gradient-to-r from-red-500 via-pink-500 to-red-600 hover:from-red-600 hover:via-pink-600 hover:to-red-700 active:scale-95"
//               }`}
//             >
//               <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
//               <div className="relative flex items-center justify-center space-x-2 text-white">
//                 <Gift className={`w-5 h-5 ${isSpinning ? "animate-spin" : "group-hover:animate-bounce"}`} />
//                 <span>{isSpinning ? "Spinning..." : "SPIN TO WIN!"}</span>
//                 <Gift className={`w-5 h-5 ${isSpinning ? "animate-spin" : "group-hover:animate-bounce"}`} />
//               </div>
//             </button>
//           </>
//         )}

//         {/* Result Section */}
//         {result && (
//           <div className="text-center max-w-sm mx-auto px-4 mt-6">
//             <div className="mb-6 animate-bounce">
//               <div className="text-5xl mb-3">🎉</div>
//               <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
//                 CONGRATULATIONS!
//               </h2>
//             </div>

//             <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl p-6 mb-6 shadow-2xl border-4 border-white">
//               <div className="bg-white/90 rounded-xl p-4">
//                 <h3 className="text-lg font-bold text-gray-800 mb-3">
//                   You Won Amazing Discount!
//                 </h3>
//                 <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mb-2">
//                   {result.value}*%
//                 </div>
//                 <p className="text-base font-semibold text-gray-700 mb-3">
//                   FLAT VA on {result.label}
//                 </p>
// <div className="flex flex-col items-center text-green-900">
//   <span className="text-5xl font-bold text-amber-700 mb-2">+</span>
//   <p className="text-sm font-medium text-center max-w-xs mb-6">
//     You have earned ₹1000/- discount. Please share a screenshot on a minimum purchase of ₹10,000/-
//   </p>
// </div>


//                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
//                   <p className="text-sm font-medium text-blue-800">
//                     Offer valid from 01-07-2025 to 20-08-2025
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {!showClaimInput && !claimed && (
//               <button
//                 onClick={() => setShowClaimInput(true)}
//                 className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl shadow-xl transition-all duration-300 transform active:scale-95 w-full"
//               >
//                 <div className="flex items-center justify-center space-x-2">
//                   <Gift className="w-5 h-5 group-hover:animate-bounce" />
//                   <span className="text-lg">Claim Your Offer</span>
//                 </div>
//               </button>
//             )}

//             {/* Phone Input */}
//             {showClaimInput && !claimed && (
//               <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 mt-4">
//                 <h4 className="text-lg font-bold text-gray-800 mb-4">Enter Your Phone</h4>
//                 <div className="relative mb-4">
//                   <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                   <input
//                     type="tel"
//                     placeholder="Enter your phone number"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base"
//                   />
//                 </div>
//                 <button
//                   onClick={handleClaim}
//                   disabled={!phone.trim()}
//                   className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300"
//                 >
//                   Submit & Claim Offer
//                 </button>
//               </div>
//             )}

//             {/* Success Message */}
//             {claimed && (
//               <div className="bg-green-100 rounded-xl p-6 border-2 border-green-300 mt-6">
//                 <CheckCircle className="w-10 h-10 text-green-700 mx-auto mb-2" />
//                 <h4 className="text-xl font-bold text-green-800 mb-2">
//                   Offer Claimed Successfully!
//                 </h4>
//                 <p className="text-green-700 text-sm mb-2">
//                   Kriya Jewellers will contact you soon to help you redeem your{" "}
//                   <strong>{result.value}%</strong> discount!
//                 </p>
//                 <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 mt-3">
//                   <p className="text-sm font-medium text-blue-800">
//                     Offer valid from 01-07-2025 to 20-08-2025
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FullScreenPopup;



import React, { useState, useEffect } from "react";
import { Gift, Sparkles, Phone, CheckCircle, Crown, Trophy, Award, Gem } from "lucide-react";
import logo from "../assets/logoo.png";

const parts = [
  { value: "5.55", label: "Plain 22kt Jewellery", color: "from-amber-400 to-yellow-500" },
  { value: "9.55", label: "Design & Stone Jewellery", color: "from-rose-400 to-pink-500" },
  { value: "11.55", label: "Exclusive Jewellery", color: "from-purple-400 to-indigo-500" },
  { value: "30", label: "18kt Gold & LGD Jewellery", color: "from-emerald-400 to-teal-500" },
];

const FullScreenPopup = ({ onClose }) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showClaimInput, setShowClaimInput] = useState(false);
  const [phone, setPhone] = useState("");
  const [claimed, setClaimed] = useState(false);

  const spin = () => {
    if (isSpinning) return;
    const anglePerItem = 360 / parts.length;
    const randomAngleWithinSegment = Math.random() * anglePerItem;
    const randomSegmentIndex = Math.floor(Math.random() * parts.length);
    const baseAngle = randomSegmentIndex * anglePerItem;
    const spins = 50;
    const totalRotation = spins * 360 + baseAngle + randomAngleWithinSegment;

    setIsSpinning(true);
    setResult(null);
    setShowClaimInput(false);
    setClaimed(false);
    setRotation(totalRotation);

    setTimeout(() => {
      const finalDeg = totalRotation % 360;
      const landedIndex =
        (parts.length - Math.floor((finalDeg % 360) / anglePerItem)) % parts.length;
      setResult(parts[landedIndex]);
      setIsSpinning(false);
    }, 4000);
  };

  const handleClaim = () => {
    if (phone.trim() === "") return;

    // Show congratulations message immediately
    setClaimed(true);

    // Close popup after 5 seconds
    setTimeout(() => {
      onClose();
    }, 5000);

    // Send data to Google Sheets in background
    const formData = new FormData();
    formData.append("phone", phone);
    formData.append("prize", result?.value || "");

    fetch("https://script.google.com/macros/s/AKfycbxPcow1fQwF3eV9D8Pj4rG9xQUkDXZyYXWmV_fXPqHCKJWZpvXOo9r1P3Li5Jtw5mUv/exec", {
      method: "POST",
      body: formData,
    }).catch((err) => console.error("Error sending to Google Sheet:", err));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 overflow-y-auto">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-white/10 border border-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 z-50"
      >
        ✕
      </button>

      {/* Main Content */}
      <div
        className={`min-h-screen w-full transition-all duration-1000 ${
          result
            ? "bg-gradient-to-br from-amber-50 via-white to-yellow-50"
            : "bg-gradient-to-br from-amber-900 via-yellow-800 to-orange-900"
        } flex flex-col items-center justify-center p-4`}
      >
        {!result && (
          <>
            <div className="flex items-center justify-center mb-4">
              <img src={logo} alt="Logo" className="h-24 mb-4" />
            </div>
            <div className="text-center mb-6 max-w-sm">
              <div className="bg-black/20 backdrop-blur-sm rounded-xl p-4 border border-yellow-400/30">
                <p className="text-yellow-200 text-sm font-semibold">Aashadam, Shravanam & 1st Anniversary</p>
                <p className="text-amber-300 text-lg font-bold mt-1">🎉 SPECIAL OFFERS 🎉</p>
              </div>
            </div>

            {/* Spin Wheel */}
            <div className="relative mb-6">
              <div className="absolute -inset-6 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-72 h-72">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 p-2">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-100 to-yellow-50 p-3">
                    <div
                      className="w-full h-full rounded-full overflow-hidden relative transition-transform ease-out shadow-2xl border-4 border-yellow-400"
                      style={{
                        transform: `rotate(${rotation}deg)`,
                        transitionDuration: isSpinning ? "4s" : "0.3s",
                      }}
                    >
                      {parts.map((part, i) => {
                        const angle = i * 90;
                        return (
                          <div
                            key={i}
                            className={`absolute w-1/2 h-1/2 origin-bottom-left bg-gradient-to-br ${part.color} border-r-2 border-b-2 border-white/50 flex items-center justify-center shadow-inner`}
                            style={{
                              transform: `rotate(${angle}deg)`,
                              transformOrigin: "100% 100%",
                            }}
                          >
                            <div className="text-center px-1" style={{ transform: `rotate(-${angle}deg)` }}>
                              <div className="text-white/90 text-xs font-medium">FLAT VA *</div>
                              <div className="text-white font-bold text-lg">{part.value}%</div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    {/* Arrow moved to center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[24px] border-l-transparent border-r-transparent border-b-red-600 drop-shadow-lg" />
                      <div className="absolute top-5 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Spin Button */}
            <button
              onClick={spin}
              disabled={isSpinning}
              className={`group relative px-8 py-4 text-lg font-bold rounded-full shadow-2xl transition-all duration-300 transform w-full max-w-xs mb-8 ${
                isSpinning
                  ? "bg-gray-400 cursor-not-allowed scale-95"
                  : "bg-gradient-to-r from-red-500 via-pink-500 to-red-600 hover:from-red-600 hover:via-pink-600 hover:to-red-700 active:scale-95"
              }`}
            >
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative flex items-center justify-center space-x-2 text-white">
                <Gift className={`w-5 h-5 ${isSpinning ? "animate-spin" : "group-hover:animate-bounce"}`} />
                <span>{isSpinning ? "Spinning..." : "SPIN TO WIN!"}</span>
                <Gift className={`w-5 h-5 ${isSpinning ? "animate-spin" : "group-hover:animate-bounce"}`} />
              </div>
            </button>

            {/* Lucky Draw Prizes Section */}
            <div className="w-full max-w-md">
              <div className="text-center mb-4">
                <div className="bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl p-3 border-2 border-white/30 shadow-xl">
                  <h3 className="text-white font-bold text-lg flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    GET LUCKY DRAW
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </h3>
                  <p className="text-yellow-100 text-sm font-medium mt-1">
                    Coupon on every purchase of ₹25,000/-
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {/* 1st Prize */}
<div className="bg-gradient-to-r from-[#1e3c72] via-[#2a5298] to-[#1e3c72] rounded-xl p-4 border-2 border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div className="bg-white/20 rounded-full p-2">
        <Crown className="w-8 h-8 text-yellow-300 animate-pulse" />
      </div>
      <div>
        <h4 className="text-white font-bold text-lg">1st Prize</h4>
        <p className="text-yellow-100 text-sm font-medium">Cash Prize</p>
      </div>
    </div>
    <div className="text-right">
      <div className="text-yellow-300 font-extrabold text-2xl">₹1,00,000</div>
      <div className="text-yellow-100 text-xs">/-</div>
    </div>
  </div>
</div>



                {/* 2nd Prize */}
                <div className="bg-gradient-to-r from-slate-300 via-gray-300 to-slate-400 rounded-xl p-4 border-2 border-white/30 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-full p-2">
                        <Trophy className="w-8 h-8 text-gray-700 animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-gray-800 font-bold text-lg">2nd Prize</h4>
                        <p className="text-gray-600 text-sm font-medium">Pure Silver</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-800 font-bold text-xl">1/2 kg</div>
                      <div className="text-gray-600 text-sm font-medium">SILVER</div>
                    </div>
                  </div>
                </div>

                {/* 3rd Prize */}
                <div className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 rounded-xl p-4 border-2 border-white/30 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="bg-white/20 rounded-full p-2">
                        <Gem className="w-8 h-8 text-white animate-pulse" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-lg">3rd Prize</h4>
                        <p className="text-emerald-100 text-sm font-medium">LGD Jewellery</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold text-lg">Worth of</div>
                      <div className="text-white font-bold text-xl">₹25,000/-</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-4 bg-black/20 backdrop-blur-sm rounded-xl p-3 border border-yellow-400/30">
                <p className="text-yellow-200 text-xs font-medium text-center">
                  * Terms & Conditions Apply
                </p>
              </div>
            </div>
          </>
        )}

        {/* Result Section */}
        {result && (
          <div className="text-center max-w-sm mx-auto px-4 mt-6">
            <div className="mb-6 animate-bounce">
              <div className="text-5xl mb-3">🎉</div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                CONGRATULATIONS!
              </h2>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl p-6 mb-6 shadow-2xl border-4 border-white">
              <div className="bg-white/90 rounded-xl p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  You Won Amazing Discount!
                </h3>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 mb-2">
                  {result.value}*%
                </div>
                <p className="text-base font-semibold text-gray-700 mb-3">
                  FLAT VA on {result.label}
                </p>
                <div className="flex flex-col items-center text-green-900">
                  <span className="text-5xl font-bold text-amber-700 mb-2">+</span>
                  <p className="text-sm font-medium text-center max-w-xs mb-6">
                    You have earned ₹1000/- discount. Please share a screenshot on a minimum purchase of ₹10,000/-
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
                  <p className="text-sm font-medium text-blue-800">
                    Offer valid from 01-07-2025 to 20-08-2025
                  </p>
                </div>
              </div>
            </div>

            {!showClaimInput && !claimed && (
              <button
                onClick={() => setShowClaimInput(true)}
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 px-6 rounded-xl shadow-xl transition-all duration-300 transform active:scale-95 w-full"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Gift className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="text-lg">Claim Your Offer</span>
                </div>
              </button>
            )}

            {/* Phone Input */}
            {showClaimInput && !claimed && (
              <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200 mt-4">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Enter Your Phone</h4>
                <div className="relative mb-4">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-base"
                  />
                </div>
                <button
                  onClick={handleClaim}
                  disabled={!phone.trim()}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-all duration-300"
                >
                  Submit & Claim Offer
                </button>
              </div>
            )}

            {/* Success Message */}
            {claimed && (
              <div className="bg-green-100 rounded-xl p-6 border-2 border-green-300 mt-6">
                <CheckCircle className="w-10 h-10 text-green-700 mx-auto mb-2" />
                <h4 className="text-xl font-bold text-green-800 mb-2">
                  Offer Claimed Successfully!
                </h4>
                <p className="text-green-700 text-sm mb-2">
                  Kriya Jewellers will contact you soon to help you redeem your{" "}
                  <strong>{result.value}%</strong> discount!
                </p>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 mt-3">
                  <p className="text-sm font-medium text-blue-800">
                    Offer valid from 01-07-2025 to 20-08-2025
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FullScreenPopup;