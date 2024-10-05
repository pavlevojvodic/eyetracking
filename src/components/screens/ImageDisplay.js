import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  position: relative;
`;

const RedMarker = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
`;

function ImageDisplay({ images, onTestComplete, setScores }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(true); // To toggle between image and red markers
  const [imageScores, setImageScores] = useState([]); // Store scores for each image

  const simulateConfidence = () => {
    console.log(images[currentImageIndex]);
    return Math.random(); // Simulate random confidence levels
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false); // Hide the image and show the red corner markers

      setTimeout(() => {
        setShowImage(true); // Show the next image
        const confidence = simulateConfidence(); // Simulate confidence for the current image

        setImageScores((prevScores) => {
          const updatedScores = [...prevScores, confidence]; // Update scores array
          
          // Check if this is the last image
          if (currentImageIndex + 1 >= images.length) {
            setScores(updatedScores); // Pass the updated scores to parent
            onTestComplete(); // Call the completion callback
          }

          return updatedScores;
        });

        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      }, 1400); // Time for red corner markers
    }, 3400); // Total time per image (2s image + 1.4s markers)

    return () => clearInterval(interval); // Clean up the interval when component unmounts
  }, [images, onTestComplete, setScores, currentImageIndex]);

  return (
    <ImageWrapper>
      {showImage ? (
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          style={{ width: '100%', height: '100%' }}
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

