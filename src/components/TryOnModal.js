// TryOnModal.js
import React, { useRef, useState, useEffect } from 'react';
import * as faceapi from 'face-api.js';

const TryOnModal = ({ isOpen, onClose, necklaceImage }) => {
  const videoRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
      setModelsLoaded(true);
    };
    loadModels();
  }, []);

  useEffect(() => {
    if (isOpen && modelsLoaded) {
      startVideo();
    }

    return () => {
      stopVideo();
    };
  }, [isOpen, modelsLoaded]);

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error("Camera access denied or error occurred:", error);
    }
  };

  const stopVideo = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  const handleVideoPlay = async () => {
    const displaySize = { width: videoRef.current.width, height: videoRef.current.height };
    faceapi.matchDimensions(videoRef.current, displaySize);

    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(
        videoRef.current,
        new faceapi.TinyFaceDetectorOptions()
      ).withFaceLandmarks();

      if (detections.length > 0) {
        const face = detections[0].landmarks.getNose();
        const overlayStyle = {
          top: `${face[3].y - 50}px`,
          left: `${face[3].x - 60}px`,
        };
        document.getElementById("necklaceOverlay").style.top = overlayStyle.top;
        document.getElementById("necklaceOverlay").style.left = overlayStyle.left;
      }
    }, 100);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center">
        {/* Background overlay */}
        <div
          className="fixed inset-0 bg-black bg-opacity-75"
          onClick={onClose}
        ></div>

        {/* Modal content */}
        <div className="relative w-full h-full flex justify-center items-center z-50">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            onPlay={handleVideoPlay}
            className="w-full h-full object-cover"
          />
          {modelsLoaded && (
            <img
              id="necklaceOverlay"
              src={necklaceImage}
              alt="Necklace"
              className="absolute"
              style={{
                width: '100px',
                height: '100px',
                pointerEvents: 'none',
                position: 'absolute',
              }}
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded z-50"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default TryOnModal;
