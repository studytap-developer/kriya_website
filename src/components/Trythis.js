// TryThis.js
import React, { useRef, useState, useEffect } from 'react';

const TryThis = ({ necklaceImage }) => {
  const videoRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraAllowed, setCameraAllowed] = useState(false);

  const handleTryThisClick = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        setCameraAllowed(true);
        videoRef.current.srcObject = stream;
        setIsCameraOpen(true);
      })
      .catch(error => {
        console.error('Camera access denied or error occurred:', error);
        setCameraAllowed(false);
      });
  };

  // Stop the video stream when the component unmounts
  useEffect(() => {
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <button
        className="bg-gold text-white py-2 px-4 rounded"
        onClick={handleTryThisClick}
      >
        Try This
      </button>

      {isCameraOpen && cameraAllowed && (
        <div className="relative mt-4 w-full h-80">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover rounded-lg"
          ></video>
          <img
            src={necklaceImage}
            alt="Necklace Preview"
            className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-auto"
            style={{
              zIndex: 10,
              pointerEvents: "none", // Ensures the image doesn’t interfere with video
            }}
          />
        </div>
      )}

      {!cameraAllowed && !isCameraOpen && (
        <p className="text-red-500 mt-4">Camera access is required to try this feature.</p>
      )}
    </div>
  );
};

export default TryThis;


