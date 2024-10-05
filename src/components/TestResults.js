import React from 'react';
import styled from 'styled-components';

// Sidebar Styling
const Sidebar = styled.div`
  width: 200px;
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

// Menu Items Styling
const MenuItem = styled.div`
  color: gray;
  display: flex;
  align-items: center;
  padding: 10px 0;
  cursor: pointer;

  i {
    margin-right: 10px;
  }

  &:hover {
    color: black;
  }
`;

// Start Button in Sidebar
const StartButton = styled.button`
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  padding: 10px 30px;
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background: linear-gradient(45deg, #8e44ad, #9b59b6);
  }
`;

// Main Content Section
const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const DescriptionText = styled.p`
  font-size: 16px;
  color: gray;
  margin-bottom: 30px;
`;

// Focus Graph Section
const FocusGraph = styled.img`
  width: 80%;
  margin-bottom: 40px;
`;

// Bar Chart Section
const BarWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const BarContainer = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  border-radius: 10px;
  overflow: hidden;
`;

const Bar = styled.div`
  height: 20px;
  background: linear-gradient(90deg, #ff6b6b, #f0c929);
  width: ${({ percentage }) => percentage}%;
  border-radius: 10px;
`;

const BarTitle = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

// Conclusion Section
const ConclusionText = styled.p`
  font-weight: bold;
  margin-top: 30px;
  font-size: 16px;
  color: gray;
`;

const FinishButton = styled.button`
  background: linear-gradient(45deg, #9b59b6, #8e44ad);
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  padding: 15px 50px;
  cursor: pointer;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  margin-top: 20px;

  &:hover {
    background: linear-gradient(45deg, #8e44ad, #9b59b6);
  }
`;

// Main Component
const TestResults = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar>
        <div>
          <MenuItem>
            <i className="fas fa-home"></i> Home
          </MenuItem>
          <MenuItem>
            <i className="fas fa-chart-line"></i> Test History
          </MenuItem>
          <MenuItem>
            <i className="fas fa-cog"></i> Settings
          </MenuItem>
          <MenuItem>
            <i className="fas fa-user"></i> Profile
          </MenuItem>
        </div>
        <StartButton>Start</StartButton>
      </Sidebar>

      <MainContent>
        <SectionTitle>Test Results</SectionTitle>
        <DescriptionText>
          You will be shown a series of pictures each lasting 2 seconds. Relax and view the pictures as you see fit. When you are ready to start, press the button.
        </DescriptionText>

        {/* Replace with actual image graphs */}
        <FocusGraph src="your-graph-image-path.jpg" alt="Graph showing focus levels" />

        {/* Example of focus levels bar */}
        <BarWrapper>
          <BarTitle>Focus</BarTitle>
          <BarContainer>
            <Bar percentage={67}></Bar>
          </BarContainer>
        </BarWrapper>

        <BarWrapper>
          <BarTitle>Reaction</BarTitle>
          <BarContainer>
            <Bar percentage={12}></Bar>
          </BarContainer>
        </BarWrapper>

        <BarWrapper>
          <BarTitle>Memory</BarTitle>
          <BarContainer>
            <Bar percentage={43}></Bar>
          </BarContainer>
        </BarWrapper>

        <BarWrapper>
          <BarTitle>Readiness to play</BarTitle>
          <BarContainer>
            <Bar percentage={11}></Bar>
          </BarContainer>
        </BarWrapper>

        <ConclusionText>Conclusion: The results say that the person is okay.</ConclusionText>
        <FinishButton>Finish</FinishButton>
      </MainContent>
    </div>
  );
};

export default TestResults;
