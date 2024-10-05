import React from 'react';
import styled from 'styled-components';
import StyledButton from '../Button';  // Import the reusable button
import StyledTitle from '../Title';    // Import the reusable title
import StyledSubtitle from '../Subtitle';  // Import the reusable subtitle

const StartScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.main};  // Poppins font for the whole screen
`;

function StartScreen({ onStart }) {
  return (
    <StartScreenWrapper>
      <StyledTitle>Tobi Labs</StyledTitle>
      <StyledSubtitle>We measure mind</StyledSubtitle>
      <StyledButton onClick={onStart}>
        Get Started
      </StyledButton>
    </StartScreenWrapper>
  );
}

export default StartScreen;
