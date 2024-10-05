import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Howl } from 'howler'; // Import Howler for sound effects

// Define the pulse keyframes for the pulsing effect on the loading text
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

// Main container for the home screen
const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #f9f9f9;
  font-family: ${({ theme }) => theme.fonts.main};
  width: 100vw;
`;

// Navbar container on the left side
const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  padding-top: 80px;
  background: #fff;
  width: 250px;
  height: 90vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

// Each navigation item (home, settings, etc.)
const NavItem = styled.div`
  padding: 20px 20px;
  font-size: 16px;
  color: grey;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #ff6bcb, #ffb6c1);
    color: white;

    i {
      color: white;
    }
  }

  i {
    margin-right: 12px;
    font-size: 20px;
    transition: color 0.3s ease;
  }
`;

// Start button styled from theme, and disabled by default
const StartButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: ${({ theme }) => theme.sizes.subtitleSize};
  font-weight: bold;
  border: none;
  border-radius: ${({ theme }) => theme.sizes.cornerRadius};
  padding: ${({ theme }) => theme.sizes.buttonPadding};
  cursor: not-allowed;
  width: 100%;
  margin-top: auto;

  &:disabled {
    opacity: 0.5;
    background: #c0c0c0;
    cursor: not-allowed;
  }
`;

// Main content container (on the right side of the navbar)
const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  width: 100%;
`;

// Title styled for the instruction heading
const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.blackText};
`;

// Subtitle styled for the instruction text
const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayText};
  line-height: 1.5;
  max-width: 600px;
  text-align: center;
`;

// Button for starting the test
const StartTestButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: ${({ theme }) => theme.sizes.subtitleSize};
  font-weight: bold;
  border: none;
  cursor: pointer;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 40px;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

// Circular progress bar animation
const progress = keyframes`
  0% {
    stroke-dashoffset: 440;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

const CircularSpinner = styled.svg`
  position: relative;
  width: 170px;
  height: 170px;
  circle {
    fill: none;
    stroke-width: 10;
    stroke-linecap: round;
  }
  .progress-bg {
    stroke: rgba(255, 255, 255, 0.2);
  }
  .progress-bar {
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    animation: ${progress} 3s linear forwards;
  }
`;

const LoadingText = styled.span`
  position: absolute;
  font-size: 60px; // Larger text for countdown
  color: white;
  z-index: 1;
  animation: ${pulse} 2s infinite ease-in-out;
`;

// Sound effects
const clickSound = new Howl({
  src: ['/sounds/click.mp3'], // Path to your click sound
});

const hoverSound = new Howl({
  src: [require('../../sounds/hover.mp3')], // Use require for the correct path
  volume: 1.0, // Max volume
});

// Component
function InstructionsScreen({ onStartTest, goHome }) {
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(3); // Countdown starts from 3

  // Handle start test button click
  const handleStartTest = () => {
    clickSound.play(); // Play click sound
    setIsLoading(true); // Show loading overlay

    // Start the countdown
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev === 1) {
          clearInterval(countdownInterval); // Clear interval when countdown finishes
          setIsLoading(false); // Hide loading overlay
          onStartTest(); // Start the test
        }
        return prev - 1; // Decrease countdown by 1 each second
      });
    }, 1000);
  };

  return (
    <>
      <HomeContainer>
        <Navbar>
          <div>
            <NavItem onMouseEnter={() => hoverSound.play()} onClick={goHome}>
              <i className="fas fa-home"></i>Home
            </NavItem>
            <NavItem onMouseEnter={() => hoverSound.play()}>
              <i className="fas fa-history"></i>Test History
            </NavItem>
            <NavItem onMouseEnter={() => hoverSound.play()}>
              <i className="fas fa-cog"></i>Settings
            </NavItem>
            <NavItem onMouseEnter={() => hoverSound.play()}>
              <i className="fas fa-user"></i>Profile
            </NavItem>
          </div>
          <StartButton disabled>Start</StartButton>
        </Navbar>

        <MainContent>
          <Title>Test Instructions</Title>
          <Subtitle>
            You will be shown a series of pictures, each lasting 2 seconds. 
            Relax and view the pictures as you see fit. When you are ready to start, press the button below.
          </Subtitle>
          <StartTestButton onMouseEnter={() => hoverSound.play()} onClick={handleStartTest}>
            START TEST
          </StartTestButton>
        </MainContent>
      </HomeContainer>

      {isLoading && (
        <LoadingOverlay>
          <CircularSpinner viewBox="0 0 160 160">
            <circle className="progress-bg" cx="80" cy="80" r="70" />
            <circle className="progress-bar" cx="80" cy="80" r="70" />
          </CircularSpinner>
          <LoadingText>{countdown}</LoadingText> {/* Display countdown */}
        </LoadingOverlay>
      )}
    </>
  );
}

export default InstructionsScreen;