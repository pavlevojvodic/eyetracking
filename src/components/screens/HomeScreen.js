import React from 'react';
import styled from 'styled-components';

// Main container for the home screen
const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #f9f9f9;
  font-family: ${({ theme }) => theme.fonts.main};  // Use the font from theme.js
  width: 100vw;  // Full-screen width
`;

// Navbar container on the left side
const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  padding-top: 80px;
  background: #fff;
  width: 250px;  // Increased the width of the navbar
  height: 90vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);  // Slight shadow to separate navbar
`;

// Each navigation item (home, settings, etc.)
const NavItem = styled.div`
  padding: 20px 20px;  // Reduced padding for smaller items
  font-size: 16px;     // Reduced the font size
  color: grey;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #ff6bcb, #ffb6c1);  // Pink gradient on hover
    color: white;

    i {
      color: white;
    }
  }

  i {
    margin-right: 12px;
    font-size: 20px;  // Reduced icon size
    transition: color 0.3s ease;
  }
`;


// Button styled using the theme and placed near the bottom of the navbar
const StartButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};  // Gradient blue from theme
  color: white;
  font-size: ${({ theme }) => theme.sizes.subtitleSize};
  font-weight: bold;
  border: none;
  border-radius: ${({ theme }) => theme.sizes.cornerRadius};
  padding: ${({ theme }) => theme.sizes.buttonPadding};
  cursor: pointer;
  width: 100%;
  margin-top: auto;  // Pushes the button to the bottom of the navbar, but not fixed

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};  // Hover color from theme
  }
`;

// Main content container (on the right side of the navbar)
const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 36px;  // Reduced from original size
  color: ${({ theme }) => theme.colors.blackText};
  align-self: flex-start;
  padding-top: 20px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayText};
  text-align: left;  // Align the text to the left
  max-width: 500px;
  line-height: 1.5;
  margin: 15px auto 30px;  // Center the block itself, but text will be left-aligned
`;


const SectionTitle = styled.h2`
  font-size: 28px;  // Reduced from original size
  margin-bottom: 15px;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.blackText};
`;

const TestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 80%;  // Reduced width for the test list
  margin: 0 auto;  // Keep the list centered
`;

const TestItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  // Ensure vertical centering for all child elements
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

// Bigger light-blue circle on the left
const TestCircle = styled.div`
  width: 60px;  // Increased size for the blue circle
  height: 60px;
  background-color: lightblue;
  border-radius: 50%;
  margin-right: 20px;
`;

const TestDetails = styled.div`
  display: flex;
  flex-direction: column;  // Align content vertically
  flex: 1;
  margin: 10px;
`;


const TestName = styled.p`
  font-size: 16px;  // Reduced from original size
  font-weight: bold;
  color: ${({ theme }) => theme.colors.blackText};
  margin-bottom: 5px;
`;

const TestDescription = styled.p`
  font-size: 12px;  // Reduced from original size
  color: ${({ theme }) => theme.colors.grayText};
  margin-bottom: 8px;  // Reduced space before the progress bar
`;

const ProgressBarWrapper = styled.div`
  width: 200px;
  height: 8px;
  background-color: #f1f1f1;
  border-radius: 5px;
  overflow: hidden;
  margin: 0 auto;  // Center the progress bar
  margin-top: 10px;  // Moved below Test Description
`;


const ProgressBar = styled.div`
  width: ${({ percentage }) => percentage}%;
  height: 100%;
  background-color: #4f86f7;
`;

// View button (same style as the button in the theme)
const ViewButton = styled(StartButton)`
  font-size: 14px;  // Reduced font size for the button
  padding: 8px 15px;  // Reduced padding
  width: 20%;
  margin: 0;
  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

function HomeScreen({ onStart }) {
  return (
    <HomeContainer>
      {/* Navbar on the left */}
      <Navbar>
        <div>
          <NavItem><i className="fas fa-home"></i>Home</NavItem>
          <NavItem><i className="fas fa-history"></i>Test History</NavItem>
          <NavItem><i className="fas fa-cog"></i>Settings</NavItem>
          <NavItem><i className="fas fa-user"></i>Profile</NavItem>
        </div>
        <StartButton onClick={onStart}>Start</StartButton>
      </Navbar>

      {/* Main content on the right */}
      <MainContent>
        <Title>Welcome to Tobi!</Title>
        <Subtitle>
          To start measuring the state of your mind and focus, <br/>press the button below to start.
          Below you can see <br/>your latest test results.
        </Subtitle>

        <SectionTitle>Recent Tests</SectionTitle>
        <TestList>
          <TestItem>
            <TestCircle />
            <TestDetails>
              <TestName>Test 1</TestName>
              <TestDescription>Focus low | Not ready to play</TestDescription>
              <ProgressBarWrapper>
                <ProgressBar percentage={30} /> {/* Example percentage */}
              </ProgressBarWrapper>
            </TestDetails>
            <ViewButton>View</ViewButton>
          </TestItem>

          <TestItem>
            <TestCircle />
            <TestDetails>
              <TestName>Test 2</TestName>
              <TestDescription>Focus medium | Could play</TestDescription>
              <ProgressBarWrapper>
                <ProgressBar percentage={60} /> {/* Example percentage */}
              </ProgressBarWrapper>
            </TestDetails>
            <ViewButton>View</ViewButton>
          </TestItem>

          <TestItem>
            <TestCircle />
            <TestDetails>
              <TestName>Test 3</TestName>
              <TestDescription>Focus high | High readiness for play</TestDescription>
              <ProgressBarWrapper>
                <ProgressBar percentage={90} /> {/* Example percentage */}
              </ProgressBarWrapper>
            </TestDetails>
            <ViewButton>View</ViewButton>
          </TestItem>
        </TestList>
      </MainContent>
    </HomeContainer>
  );
}

export default HomeScreen;
