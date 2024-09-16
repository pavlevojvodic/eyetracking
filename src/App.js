import React, { useState } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import StartScreen from './components/StartScreen';
import ImageDisplay from './components/ImageDisplay';
import { theme } from './theme';  // Import the theme from theme.js

// Keyframes for pulsing glow
const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 5px, 0 0 15px;
  }
  50% {
    box-shadow: 0 0 10px, 0 0 20px;
  }
  100% {
    box-shadow: 0 0 5px, 0 0 15px;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.text}; // Use text color from theme
  text-align: center;
`;

const CompletedScreen = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.titleSize};  // Use title size from theme
  margin-bottom: 20px;
`;

const ReturnButton = styled.button`
  padding: ${({ theme }) => theme.sizes.buttonPadding};
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
  animation: ${pulseGlow} 2s infinite ease-in-out;        // Pulsing glow effect
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.glowColor};  // Initial glow from theme

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
`;

const Subtitle = styled.h2`
  font-size: 24px;
`;

function App() {
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [isHomeScreen, setIsHomeScreen] = useState(true);  // Tracks if we are on the home screen
  const [score, setScore] = useState(null);

  const [backgroundImage, setBackgroundImage] = useState('/images/background5.jpg');  // Background image state

  const images = ['/images/sun_aesdwymqhhiewhyo.jpg'];

  const startTest = () => {
    setIsHomeScreen(false);
    setIsTestStarted(true);
    setIsTestCompleted(false);
    setScore(null);
  };

  const handleTestComplete = () => {
    setIsTestCompleted(true);
    setIsTestStarted(false);
  };

  const returnToStartScreen = () => {
    setIsHomeScreen(true);
    setIsTestStarted(false);
    setIsTestCompleted(false);
    setScore(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper backgroundImage={backgroundImage}>
        {isHomeScreen ? (
          <StartScreen onStart={startTest} />
        ) : isTestStarted ? (
          <ImageDisplay images={images} onTestComplete={handleTestComplete} setScore={setScore} />
        ) : (
          <CompletedScreen>
            <Title>Test Completed</Title>
            <Subtitle>Your Score: {score !== null ? `${score.toFixed(2)}%` : 'Calculating...'}</Subtitle>
            <ReturnButton onClick={returnToStartScreen}>RETURN TO START SCREEN</ReturnButton>
          </CompletedScreen>
        )}
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
