import React, { useState } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import StartScreen from './components/screens/StartScreen';
import HomeScreen from './components/screens/HomeScreen';  // Import HomeScreen
import ImageDisplay from './components/screens/ImageDisplay';
import { theme } from './theme';  // Import the theme from theme.js
import InstructionsScreen from './components/screens/InstructionsScreen';
import CompletedScreen from './components/screens/CompletedScreen';



const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(to right, #96b3fe, #4f86f7);  /* Linear gradient */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.text}; // Use text color from theme
  text-align: center;
`;


function App() {
  const [currentScreen, setCurrentScreen] = useState('startScreen');  // Manage screen state
  const [scores, setScores] = useState([]);  // Track individual scores

  const images = [
    '/images/sun_aesdwymqhhiewhyo.jpg',
    '/images/sun_aewtvpwulyxhqvuv.jpg'
  ];

  // Screen navigation handlers
  const startTest = () => {
    setCurrentScreen('test');  // Start the test (ImageDisplay)
  };

  const showHomeScreen = () => {
    setCurrentScreen('homeScreen');  // Go to HomeScreen
  };

  const showInstructionsScreen = () => {
    setCurrentScreen('instructionsScreen'); 
  }

  const handleTestComplete = () => {
    setCurrentScreen('completedScreen');  // Test completed, show results
  };

  const returnToStartScreen = () => {
    setCurrentScreen('startScreen');  // Back to StartScreen
    setScores([]);  // Reset scores
  };

  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        {currentScreen === 'startScreen' && <StartScreen onStart={showHomeScreen} />}
        {currentScreen === 'homeScreen' && <HomeScreen onStart={showInstructionsScreen} />}
        {currentScreen === 'instructionsScreen' && <InstructionsScreen onStartTest={startTest} goHome={showHomeScreen} />}
        {currentScreen === 'test' && (<ImageDisplay images={images} onTestComplete={handleTestComplete} setScores={setScores} />)}
        {currentScreen === 'completedScreen' && (<CompletedScreen returnToStartScreen={returnToStartScreen} scores={scores} goHome={showHomeScreen} />)}
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;


