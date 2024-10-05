import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

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

// Main container for the home screen
const Container = styled.div`
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

const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayText};
  line-height: 1.5;
  max-width: 600px;
  text-align: center;
`;

// Progress bar container
const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  gap: 20px;
`;

// Progress bar for image score
const ProgressBarWrapper = styled.div`
  width: 100px;
`;

const FinalScoreHighlight = styled.div`
  font-size: 42px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

const CommentText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: 30px;
  font-weight: bold;
`;

// Return button styled for returning to start screen
const ReturnButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: ${({ theme }) => theme.sizes.subtitleSize};
  font-weight: bold;
  border: none;
  border-radius: ${({ theme }) => theme.sizes.cornerRadius};
  padding: ${({ theme }) => theme.sizes.buttonPadding};
  margin-top: 40px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

function CompletedScreen({ returnToStartScreen, scores, goHome }) {
  // Log the scores to see if data is passed correctly
  useEffect(() => {
    console.log('Scores:', scores);
  }, [scores]);

  // Calculate the final average score
  const finalScore = (scores.reduce((acc, score) => acc + score, 0) / scores.length).toFixed(2);

  // Generate comment based on score
  const getComment = () => {
    if (finalScore < 0.4) {
      return 'Your focus is low, consider resting before the match.';
    } else if (finalScore < 0.6) {
      return 'Your focus is decent, but you could improve.';
    } else if (finalScore < 0.8) {
      return 'Your focus is solid, you are ready for the game!';
    } else {
      return 'You are in peak condition, go out and give your best performance!';
    }
  };

  return (
    <Container>
      <Navbar>
        <div>
          <NavItem onClick={goHome}>
            <i className="fas fa-home"></i>Home
          </NavItem>
          <NavItem>
            <i className="fas fa-history"></i>Test History
          </NavItem>
          <NavItem>
            <i className="fas fa-cog"></i>Settings
          </NavItem>
          <NavItem>
            <i className="fas fa-user"></i>Profile
          </NavItem>
        </div>
        <StartButton disabled>Start</StartButton>
      </Navbar>

      <MainContent>
        <Title>Test Completed</Title>
        <Subtitle>Focus levels per picture:</Subtitle>

        {/* Display individual progress bars for each image */}
        <ProgressBarContainer>
          {scores.map((score, index) => (
            <ProgressBarWrapper key={index}>
              <CircularProgressbar
                value={score * 100}
                text={`${(score * 100).toFixed(2)}%`}
                styles={buildStyles({
                  pathColor: '#FF6BCB',
                  textColor: '#000',
                  trailColor: '#f1f1f1',
                })}
              />
              <div>Image {index + 1}</div>
            </ProgressBarWrapper>
          ))}
        </ProgressBarContainer>

        {/* Final focus score with circular progress bar */}
        <FinalScoreHighlight>
          <CircularProgressbar
            value={finalScore * 100}
            text={`${(finalScore * 100).toFixed(2)}%`}
            styles={buildStyles({
              pathColor: '#FF6BCB',
              textColor: '#000',
              trailColor: '#f1f1f1',
            })}
          />
        </FinalScoreHighlight>

        {/* Conclusion based on final score */}
        <CommentText>{getComment()}</CommentText>

        <ReturnButton onClick={returnToStartScreen}>RETURN TO START SCREEN</ReturnButton>
      </MainContent>
    </Container>
  );
}

export default CompletedScreen;
