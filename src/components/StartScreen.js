import React from 'react';
import styled, { keyframes } from 'styled-components';

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

// StartScreenWrapper with centered content
const StartScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full height for vertical centering
  text-align: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.sizes.titleSize}; // Using title size from theme
  color: ${({ theme }) => theme.colors.text};        // Using text color from theme
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  padding: ${({ theme }) => theme.sizes.buttonPadding};  // Using button padding from theme
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.secondary}; // Using secondary button color
  color: ${({ theme }) => theme.colors.text};            // Using text color from theme
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
  animation: ${pulseGlow} 2s infinite ease-in-out;        // Pulsing glow effect
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.glowColor};  // Set initial box-shadow from theme

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHover}; // Hover color from theme
  }
`;

function StartScreen({ onStart }) {
  return (
    <StartScreenWrapper>
      <Title>Welcome to the Attention Test</Title>
      <StartButton onClick={onStart}>START TEST</StartButton>
    </StartScreenWrapper>
  );
}

export default StartScreen;
