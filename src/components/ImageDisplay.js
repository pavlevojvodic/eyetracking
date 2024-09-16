import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  position: relative;
  border: none; /* Remove the white border */
  padding: 0;
  margin: 0;
`;

const RedMarker = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
`;

const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  border: none;  /* Ensure there's no border on the image */
  padding: 0;
  margin: 0;
`;

function ImageDisplay({ images, onTestComplete, setScore }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true); // To toggle between image and red markers
  const [confidenceScores, setConfidenceScores] = useState([]); // Store confidence levels for each image

  const simulateConfidence = () => {
    return Math.random(); // Simulate random confidence levels
  };

  // Start displaying images with timers
  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false); // Hide the image and show the red corner markers

      setTimeout(() => {
        setShowImage(true); // Show the next image
        const confidence = simulateConfidence(); // Simulate confidence for the current image
        setConfidenceScores((prevScores) => [...prevScores, confidence]);

        setCurrentImageIndex((prevIndex) => {
          const newIndex = prevIndex + 1;
          if (newIndex >= images.length) {
            clearInterval(interval);
            onTestComplete(); // Call the completion callback after the last image
            return prevIndex;
          }
          return newIndex;
        });
      }, 1400); // Time for red corner markers
    }, 3400); // Total time per image (2s image + 1.4s markers)

    return () => clearInterval(interval); // Clean up the interval when component unmounts
  }, [images, onTestComplete]);

  // Calculate the final score once all images have been displayed
  useEffect(() => {
    if (confidenceScores.length === images.length) {
      const finalScore = confidenceScores.reduce((sum, score) => sum + score, 0) / images.length;
      setScore(finalScore * 100); // Scale it to a percentage (0-100)
    }
  }, [confidenceScores, images.length, setScore]);

  return (
    <ImageWrapper>
      {showImage ? (
        <ImageStyled
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
        />
      ) : (
        <div>
          {/* Red corner markers */}
          <RedMarker style={{ top: 0, left: 0, borderTop: '5px solid red', borderLeft: '5px solid red' }} />
          <RedMarker style={{ top: 0, right: 0, borderTop: '5px solid red', borderRight: '5px solid red' }} />
          <RedMarker style={{ bottom: 0, left: 0, borderBottom: '5px solid red', borderLeft: '5px solid red' }} />
          <RedMarker style={{ bottom: 0, right: 0, borderBottom: '5px solid red', borderRight: '5px solid red' }} />
        </div>
      )}
    </ImageWrapper>
  );
}

export default ImageDisplay;
